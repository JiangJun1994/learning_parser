/**
 * Created by jiangjun on 2017/9/7.
 */
import fs from 'fs'
import peg from 'pegjs'
import Parser from '../lib/Parser'
import {parseString} from 'xml2js'
import param from './fep_log/Param'

let fepParserSrc = fs.readFileSync('./parser-src/fep_log/fep.pegjs', 'UTF-8')
let headerParser = peg.generate(fepParserSrc)


let states = { header:1, test:2, xml:3, param:4, xml2:5, json:6 }
let state = states.header

let buffer = ""
let result = {header:{ts:"",level:"",source:{},operation:{}}}

let resetState = () => {
  buffer = ""
  result = {header:{ts:"",level:"",source:{},operation:{}}}
  state = states.header}

let messageHandler = (parser, channel, message) => {
  switch (state) {
    case states.header:
      // parse header
      try {
        let header = headerParser.parse(message)
        result.header['ts'] = header.ts
        result.header['level'] = header.level
        result.header.source['filename'] = header.filename
        result.header.source['lines'] = header.lines
        result.header.operation['action'] = header.action
        result.header.operation['subject'] = header.subject
        state = states.test
      }
      catch(e) {
        parser.sendError(message, 'state.header', e)
        resetState()
      }
      break;

    case states.test:
      buffer += message
      if (message.indexOf("<xml>") != -1 && buffer.indexOf("</xml>") != -1 ) {
        state = states.xml
        messageHandler(parser, channel, message)
      }else if(buffer.indexOf("<xml>") != -1 && buffer.indexOf("</xml>") == -1){
        state = states.xml2
      }else if(JSON.parse(message)){
        state = states.json
        messageHandler(parser, channel, message)
      }else if(param.start(message)){
        state = states.param
        messageHandler(parser, channel, message)
      }else{
        resetState()
      }
      break;


    case states.xml2:
      buffer += message
      if (buffer.indexOf("<xml>") != -1 && buffer.indexOf("</xml>") != -1 ) {
        try {
          buffer = buffer.replace(/\]+>/g, '').replace(/<!\[CDATA\[/g, '')
          parseString(buffer, (err, xmlJson) => {
            if (err == null) {
              result.message = xmlJson
              parser.sendResult(JSON.stringify(result))
            }
            else {
              parser.sendError(buffer, 'state.xml2', err)
            }
          })

          resetState()
        }
        catch(e) {
          parser.sendError(e, 'state.xml', e)

          resetState()
        }
      }
      break;

    case states.xml:
      if (buffer.indexOf("<xml>") != -1 && buffer.indexOf("</xml>") != -1 ) {
        try {
          parseString(buffer, (err, xmlJson) => {
            if (err == null) {
              result.message = xmlJson
              parser.sendResult(JSON.stringify(result))
            }
            else {
              parser.sendError(err, 'state.xml2', err)
            }
          })

          resetState()
        }
        catch(e) {
          parser.sendError(buffer, 'state.xml', e)
          resetState()
        }
      }
      break;

    case states.param:
      try{
        var params = param.start(buffer)
        var params2 = params.split("&")
        var xmlJson ={}
        for(var i=0; i<params2.length;i++){
          var item = params2[i].split("=")
          var name = item[0]
          var value = item[1]
          xmlJson[name] = value
        }
        result.message = xmlJson
        parser.sendResult(JSON.stringify(result))

        resetState()
      }
      catch(e){
        parser.sendError(buffer, 'state.param', e)
        resetState()
      }
      break;

    case states.json:
      try{
        var xmlJson = JSON.parse(buffer)
        result.message = xmlJson
        console.log("ssss",result)
        parser.sendResult(JSON.stringify(result))
        resetState()
      }
      catch(e){
        console.log("json",e)
        parser.sendError(buffer, 'state.json', e)
        resetState()
      }
      break;

    default:
      resetState()
      break;

  }
}

let paymentParser = new Parser(messageHandler)
paymentParser.start()






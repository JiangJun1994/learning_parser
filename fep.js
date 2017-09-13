import fs from 'fs'
import peg from 'pegjs'
import Parser from '../lib/Parser'
import param from './fep_log/Param'

import {parseString} from 'xml2js'

// load and create peg parser
let fepParserSrc = fs.readFileSync('./parser-src/fep_log/fep.pegjs', 'UTF-8')
let headerParser = peg.generate(fepParserSrc)


// FSM - Finite State Machine
let states = { header: 1, xml: 2,test:3,param:5,xml2:6 }
let state = states.header

let buffer = ""
let result = {header:{ts:"",level:"",source:{},operation:{}}}

let resetState = () => {
  buffer = ""
  result = {header:{ts:"",level:"",source:{},operation:{}}}
  state = states.header
}

let messageHandler = (parser, channel, message) => {
  switch (state) {
    case states.header:
      // parse header
      try {
        let header = headerParser.parse(message)
        console.log(header)
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
      if(message.indexOf("<xml>") != -1 && message.indexOf("</xml>") != -1){
        state = states.xml
        messageHandler(parser, channel, message)
      }else if(message.indexOf("<xml>") != -1 && message.indexOf("</xml>") == -1){
        state = states.xml2
      }else if(param.start(message)) {
        state = states.param
        messageHandler(parser, channel, message)
      }
    break;

    case states.xml:
        console.log(buffer)
        if (buffer.indexOf("<xml>") != -1 && buffer.indexOf("</xml>") != -1 ) {
          try {
            buffer = buffer.replace(/\]\]>/g, '').replace(/<!\[CDATA\[/g, '')
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

    case states.xml2:
      buffer += message
      console.log(buffer)
      if (buffer.indexOf("<xml>") != -1 && buffer.indexOf("</xml>") != -1 ) {
        try {
          buffer = buffer.replace(/\]\]>/g, '').replace(/<!\[CDATA\[/g, '')
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
        Param.start(message)
        var params2 = message.split("&")
        var xmlJson ={}
        for(var i in params2){
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

    default:
      resetState()
      break;
  }
}

let paymentParser = new Parser(messageHandler)
paymentParser.start()

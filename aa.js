import fs from 'fs'
import peg from 'pegjs'
import Parser from '../lib/Parser'
import param from './fep_log/Param'

import {parseString} from 'xml2js'

// load and create peg parser
let fepParserSrc = fs.readFileSync('./parser-src/fep_log/fep.pegjs', 'UTF-8')
let headerParser = peg.generate(fepParserSrc)

var state = {
  HEADER: 0,
  XML: 1,
  XML2: 2,
  PARAM: 3
}
var currentState = null
let result = {header:{ts:"",level:"",source:{},operation:{}}}

let resetState = () => {
  result = {header:{ts:"",level:"",source:{},operation:{}}}
  currentState = null
}

var handlers = [
  {
    state: state.XML,
    pattern: message => message.indexOf("<xml>") != -1 && message.indexOf("</xml>") != -1,
    callback: message => {
        try {
          message = message.replace(/\]\]>/g, '').replace(/<!\[CDATA\[/g, '')
          parseString(message, (err, xmlJson) => {
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
  },
  {
    state: state.XML2,
    pattern: message=> message.indexOf("<xml>") != -1 && message.indexOf("</xml>") == -1,
    callback: function (message) {
      if (buffer.indexOf("<xml>") != -1 && buffer.indexOf("</xml>") != -1 ) {
        try {
          this.buffer = this.buffer.replace(/\]\]>/g, '').replace(/<!\[CDATA\[/g, '')
          parseString(this.buffer, (err, xmlJson) => {
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
          parser.sendError(this.buffer, 'state.xml', e)

          resetState()
        }
      } else {
        if (!this.buffer) this.buffer = ''
        this.buffer += message
      }
    }
  },
  {
    state: state.PARAM,
    pattern: message => message.split('&').every(v => v.split('=').length > 0),
    callback: message => {
      result.message = param.start(message)
      parser.sendResult(JSON.stringify(result))
    }
  }

]

function messageHandler(parser, channel, message) {
  if (currentState != null) {
    var handler = handlers.filter(h => h.state == currentState)

    handler.forEach(h => h.callback(message))
  } else {
    var noHandler = true

    for (var i = 0; i < handlers.length; i++) {
      if (handlers[i].pattern(message)) {
        noHandler = false
        currentState = handlers[i].state
        handlers[i].callback(message)
      }
    }
    if (noHandler) {
      currentState = state.HEADER
      try {
        let header = headerParser.parse(message)
        result.header['ts'] = header.ts
        result.header['level'] = header.level
        result.header.source['filename'] = header.filename
        result.header.source['lines'] = header.lines
        result.header.operation['action'] = header.action
        result.header.operation['subject'] = header.subject
        currentState = null
      }
      catch(e) {
        parser.sendError(message, 'state.header', e)

        resetState()
      }
    }
  }
}

let paymentParser = new Parser(messageHandler)
paymentParser.start()
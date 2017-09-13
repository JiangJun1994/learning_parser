/**
 * Created by jiangjun on 2017/9/11.
 */
import {parseString} from 'xml2js'
// import param from './fep_log/Param'

class Sender {
  constructor(parser, callback){
    this.callback = callback || () => {}
    this.result = {}
    this.parser = parser
  }

  parseString(message){
    try {
      parseString(message, (err, xmlJson) => {
        if (err == null) {
          this.result.message = xmlJson
          this.parser.sendResult(JSON.stringify(this.result))
        } else {
          this.parser.sendError(err, 'state.xml', err)
        }
      })

      this.callback()
    }
    catch(e) {
      this.parser.sendError(message, 'state.xml', e)
      this.callback()
    }
  }

}

export default Sender
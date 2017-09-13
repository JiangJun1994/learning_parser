/**
 * Created by jiangjun on 2017/9/7.
 */
/*
 case states.test:
 48       buffer += message
 49         while (continueNext) {
 50           try {
 51             if (continueNext === 1 && message.indexOf("<xml>") != -1 && buffer.indexOf("</xml>") != -1 ) {
 52               state = states.xml
 53               messageHandler(parser, channel, message)
 54             }else if(continueNext === 1 && buffer.indexOf("<xml>") != -1 && buffer.indexOf("</xml>") == -1){
 55               state = states.xml2
 56             }
 57             else if(continueNext === 2 && JSON.parse(message)){
 58               state = states.json
 59               messageHandler(parser, channel, message)
 60             }
 61             else if(continueNext === 3 && param.start(message)){
 62               state = states.param
 63               messageHandler(parser, channel, message)
 64             }
 65             if (state != states.test || ++continueNext > 3) {
 66               continueNext = 0
 resetState()
 67             }
 68           } catch(e) { continueNext += 1 }
 69         }
 70       continueNext = 1
 71       break;
 */
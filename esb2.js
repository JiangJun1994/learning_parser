
var _ = require('lodash')
var xmlreader = require('xmlreader')
// var fromCharCode = require ("fromCharCode")

 var a = "app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170713000085603034000001020106%22%2C%22total_amount%22%3A%2212.00%22%2C%22undiscountable_amount%22%3A%2212.00%22%2C%22subject%22%3A%22%C1%E9%B4%A8%CF%D8%B2%FD%CE%B5%E6%BF%BE%EA%CA%B3%C6%B7%B5%EA%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%222088721241749612%22%7D%2C%22extend_params%22%3A%7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=gbk&format=json&method=alipay.trade.precreate&sign_type=RSA&timestamp=2017-07-13+18%3A10%3A31&version=1.0&sign=M6Hz1ALUTTv4Y662gmLS1ghtdDjntX6dVwBShun13cNfdA%2BgYQW1Wl0u3C4oED59TF%2BTR4801VjBsjkwboFmhAHsBh8woCYlHZEegFxaHXHDoZZcYzMf5bYQZkzaPxCGiSfY5TbPNAD4YjFEWSToLZDKhcpI3dL31zaF6%2Bxku8U%3D "
 var b = a.replace(/%22/g, '"')
 var c = b.replace(/%3A/g,':')
 var d = c.replace(/%2C/g,',')
 var e = d.replace(/%7B/g,'{')
 var f = e.replace(/%7D/g,'}')

console.log(f)
var g = f.split("&")
console.log(g)



//2017-08-22 00:01:16 [INFO] weixin.c(1128): send to wx:
/*XML =
  time:TIME_FIELD
_ "[" info:FIELD "]"
_ file:FIELD ".c("
lineno:Number "):"
_ text:FIELD
_ text2:FIELD
_ text3:FIELD + ":" {
  return {
    ts:(new Date(time.join(''))).getTime()/1000,
    level:info.toString().replace(/,/g, ''),
    source:{
      filename:file.join('')+".c",
      number:lineno,
    },
    operation:{
      action:text.toString().replace(/,/g, ''),
      subject:text3.toString().replace(/,/g, '')
    },
  }
}

FIELD = [a-zA-Z]+

TIME_FIELD =  Number "-" Number "-" Number " " Number ":" Number ":" Number

Number =  [0-9]+ { return parseInt(text(), 10) }

_ = [ \t\r\n]*

*/



/*
 2017-08-22 00:00:02 [INFO] DBOper.c(649): get sql:SELECT * FROM T_SYS_MER_CATE_RATE WHERE MERHCNAT_ID = 10868
 XML =
 time:TIME_FIELD
 _ "[" info:FIELD "]"
 _ file:FIELD ".c("
 lineno:Number "):"
 _ text:(FIELD _)+ ":"
 all:(.*)
 {
 return {
 time:time.join('').replace(/,/g, ''),
 file:file.join(''),
 number:lineno.join(""),
 text:text.toString().replace(/,/g, ''),
 data:all.toString().replace(/,/g, '')
 }
 }

 FIELD = [a-zA-Z]+

 TIME_FIELD =  Number "-" Number "-" Number " " Number ":" Number ":" Number

 Number =  [0-9]+

 _ = [ \t\r\n]*
 */

//2017-08-22 00:01:16 [TRACE] business.c(757): zfb pay for send data to server.[dataLen=373]

/*
XML =
  time:TIME_FIELD
_ "[" info:FIELD "]"
_ file:FIELD ".c("
lineno:Number "):"
_ text:(FIELD _)+ "."
_"[" text5:FIELD "=" text6:Number "]"{
  return {
    ts:(new Date(time.join(''))).getTime()/1000,
    level:info.toString().replace(/,/g, ''),
    source:{
      filename:file.join('')+".c",
      number:lineno,
    },
    operation:{
      action:text.toString().replace(/,/g, '').split(" ").splice(0,text.toString().replace(/,/g, '').split(" ").length-2).join(" "),
      subject:text.toString().replace(/,/g, '').split(" ").pop(),
    },
  }
}

FIELD = [a-zA-Z]+

TIME_FIELD =  Number "-" Number "-" Number " " Number ":" Number ":" Number

Number =  [0-9]+ { return parseInt(text(), 10) }

_ = [ \t\r\n]
  */


/*
suit for two situations
XML =
 time:TIME_FIELD
 _ "[" info:FIELD "]"
 _ file:FIELD ".c("
 lineno:Number "):"
 _ text:(FIELD _)+"."?":"?
 text2:(_"[" FIELD "=" Number "]")? {
 return {
 ts:(new Date(time.join(''))).getTime()/1000,
 level:info.toString().replace(/,/g, ''),
 source:{
 filename:file.join('')+".c",
 number:lineno,
 },
 operation:{
 action:text.toString().replace(/,/g, '').split(" ").splice(0,text.toString().replace(/,/g, '').split(" ").length-2).join(" "),
 subject:text.toString().replace(/,/g, '').split(" ").pop(),
 },
 datalen:text2?text2[4]:null
 }
 }

 FIELD = [a-zA-Z]+

 TIME_FIELD =  Number "-" Number "-" Number " " Number ":" Number ":" Number

 Number =  [0-9]+ { return parseInt(text(), 10) }

 _ = [ \t\r\n]*
*
* */
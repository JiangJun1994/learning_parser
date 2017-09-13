// var a = "app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170713000085603034000001020106%22%2C%22total_amount%22%3A%2212.00%22%2C%22undiscountable_amount%22%3A%2212.00%22%2C%22subject%22%3A%22%C1%E9%B4%A8%CF%D8%B2%FD%CE%B5%E6%BF%BE%EA%CA%B3%C6%B7%B5%EA%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%222088721241749612%22%7D%2C%22extend_params%22%3A%7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=gbk&format=json&method=alipay.trade.precreate&sign_type=RSA&timestamp=2017-07-13+18%3A10%3A31&version=1.0&sign=M6Hz1ALUTTv4Y662gmLS1ghtdDjntX6dVwBShun13cNfdA%2BgYQW1Wl0u3C4oED59TF%2BTR4801VjBsjkwboFmhAHsBh8woCYlHZEegFxaHXHDoZZcYzMf5bYQZkzaPxCGiSfY5TbPNAD4YjFEWSToLZDKhcpI3dL31zaF6%2Bxku8U%3D "
// var iconv = require("iconv-lite");
// var a = "app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170713000085603034000001020106%22%2C%22total_amount%22%3A%2212.00%22%2C%22undiscountable_amount%22%3A%2212.00%22%2C%22subject%22%3A%22%C1%E9%B4%A8%CF%D8%B2%FD%CE%B5%E6%BF%BE%EA%CA%B3%C6%B7%B5%EA%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%222088721241749612%22%7D%2C%22extend_params%22%3A%7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=gbk&format=json&method=alipay.trade.precreate&sign_type=RSA&timestamp=2017-07-13+18%3A10%3A31&version=1.0&sign=M6Hz1ALUTTv4Y662gmLS1ghtdDjntX6dVwBShun13cNfdA%2BgYQW1Wl0u3C4oED59TF%2BTR4801VjBsjkwboFmhAHsBh8woCYlHZEegFxaHXHDoZZcYzMf5bYQZkzaPxCGiSfY5TbPNAD4YjFEWSToLZDKhcpI3dL31zaF6%2Bxku8U%3D "
//
// function asc2str(str){
//   return String.fromCharCode(str);
// }
//
// function UrlDecode(str){
//   var ret="";
//   for(var i=0;i<str.length;i++){
//     var chr = str.charAt(i);
//     if(chr == "+"){
//       ret+=" ";
//     }else if(chr=="%"){
//       var asc = str.substring(i+1,i+3);
//       if(parseInt("0x"+asc)>0x7f){
//         ret+=asc2str(parseInt("0x"+asc+str.substring(i+4,i+6)));
//         i+=5;
//       }else{
//         ret+=asc2str(parseInt("0x"+asc));
//         i+=2;
//       }
//     }else{
//       ret+= chr;
//     }
//   }
//   return ret;
// }
//
// var c = UrlDecode(a)
// var d = c.split("&")
// var z ={}
// for(x in d){
//   var aa = d[x].split("=")
//   var name = aa[0]
//   var value = aa[1]
//   z[name] = value
// }
//
// var q = z.biz_content
// var qq = JSON.parse(q)
//
// if(qq.hasOwnProperty("subject")){
//   var s = qq.subject
//   var m = s.split("")
//   var v = []
//   for(i in m)
//     if(m[i]){
//       var x = m[i].charCodeAt(0).toString(16)
//       v.push(x)
//     }
//   }
//    var buf = Buffer.from(v.map(x => parseInt(x,16)))
//    var qqqq = iconv.decode(buf, 'GB2312')
//   console.log(qqqq)



//方法二
var iconv = require("iconv-lite");
// var a = "app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170713000085603034000001020106%22%2C%22total_amount%22%3A%2212.00%22%2C%22undiscountable_amount%22%3A%2212.00%22%2C%22subject%22%3A%22%C1%E9%B4%A8%CF%D8%B2%FD%CE%B5%E6%BF%BE%EA%CA%B3%C6%B7%B5%EA%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%222088721241749612%22%7D%2C%22extend_params%22%3A%7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=gbk&format=json&method=alipay.trade.precreate&sign_type=RSA&timestamp=2017-07-13+18%3A10%3A31&version=1.0&sign=M6Hz1ALUTTv4Y662gmLS1ghtdDjntX6dVwBShun13cNfdA%2BgYQW1Wl0u3C4oED59TF%2BTR4801VjBsjkwboFmhAHsBh8woCYlHZEegFxaHXHDoZZcYzMf5bYQZkzaPxCGiSfY5TbPNAD4YjFEWSToLZDKhcpI3dL31zaF6%2Bxku8U%3D "
// var a = " app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170822000085603132000001055209%22%2C%22scene%22%3A%22bar_code%22%2C%22auth_code%22%3A%2228560012755670140%22%2C%22total_amount%22%3A%22200.00%22%2C%22undiscountable_amount%22%3A%22200.00%22%2C%22subject%22%3A%22%B9%F0%C1%D6%CA%D0%C0%EC%BD%AD%CA%AF%D3%CD%D3%D0%CF%DE%B9%AB%CB%BE%BC%D3%D3%CD%D5%BE%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%222088721123349686%22%7D%2C%22extend_params%22%3A %7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=utf-8&format=json&method=alipay.trade.pay&sign_type=RSA&timestamp=2017-08-22+00%3A23%3A43&version=1.0&sign=QtFllfWvnO9tkPCZvBUbTfdMHqagl42w7tXRUmhEpnsx4XAkxCjKlfNBN%2F4RB6aXjZbcRsTRFC%2BcxMQLLGKGOXwe550EaE6PolPdhDBJ6Ps3VguJMekgluw8Qz6w1BYxjD5zJsW4npQJroRF%2BjFGVcF3o7plOG1JJj81hHDSSMU%3D"
// var b = a.replace(/%22/g, '"')
// var c = b.replace(/%3A/g,':')
// var d = c.replace(/%2C/g,',')
// var e = d.replace(/%7B/g,'{')
// var f = e.replace(/%7D/g,'}')
// var g = f.replace(/%2B/g,'+')
// var h = g.replace(/%3D/g,'=')
// var i = g.replace(/%2F/g,'/')


//
// console.log(f)
// var d = i.split("&")
// var z ={}
// for(x in d){
//   var aa = d[x].split("=")
//   var name = aa[0]
//   var value = aa[1]
//   z[name] = value
// }
// var q = z.biz_content
// var qq = JSON.parse(q)
// z.biz_content = qq
// var mm = ""
// if(qq.hasOwnProperty("subject")){
//   var s = qq.subject
//   arr = s.split('%')
//   arr.shift()
//   buf = Buffer.from(arr.map(x => parseInt(x,16)).concat([0x22, 0x7b]))
//   mm  = iconv.decode(buf, 'gbk')
// }
// z.biz_content.subject = mm

///////
// var a = 'app_id=2015051100069170&biz_content=%7B%22out_trade_no%22%3A%22170430000050631179000001000032%22%2C%22scene%22%3A%22bar_code%22%2C%22auth_code%22%3A%22280127568041603891%22%2C%22total_amount%22%3A%220.01%22%2C%22undiscountable_amount%22%3A%220.01%22%2C%22subject%22%3A%22%D6%A7%B8%B6%B1%A6%B1%BB%C9%A8%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%2217151986288%22%7D%2C%22extend_params%22%3A%7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=utf-8&format=json&method=alipay.trade.pay&sign_type=RSA&timestamp=2017-04-30+14%3A10%3A15&version=1.0&sign=T51IzyCkL72C%2F%2BRobcrQUlhTgjVeDJ5F%2BzypVyZTU1BC7gpTgQStTabPZJPR5NAKrSGTQ0xgArWJFHIw9VAE3IbKyUh1ddgb0jf6LZ9RTHKVYBQXLWENV8oSXk0dJpxPOTnJxOjGdFr8ZzDvN%2BRtN5AwvSuZNJJqdLVBucRekh8%3D  '

// var a = "app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170822000085721222000001002956%22%2C%22scene%22%3A%22bar_code%22%2C%22auth_code%22%3A%22283710919557462431%22%2C%22total_amount%22%3A%22604.00%22%2C%22undiscountable_amount%22%3A%22604.00%22%2C%22subject%22%3A%22%B9%F0%C1%D6%CA%D0%D3%F1%B9%E7%D4%B0%B7%BF%B5%D8%B2%FA%D3%D0%CF%DE%B9%AB%CB%BE%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%222088721420069539%22%7D%2C%22extend_params%22%3A%7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=utf-8&format=json&method=alipay.trade.pay&sign_type=RSA&timestamp=2017-08-22+12%3A02%3A07&version=1.0&sign=ZHX4hmiV8koB6ZbQs7ZjfwS92SLC7YKw6AaMIEpP0CTw3b1%2FgN%2FVJ8JM01AH2RlN3Lm%2FG63Nz80Zi%2BDB2Q6CRtcxcOXnXLJgX%2Fusr59IgVYGNWMEyVsvbtcArPgpxzvQAZ9e5PuPtf2fFDeZqETk7CDovaw7pNlfQP4%2FKDwEVXQ%3D"
// var a = "  app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170822000085721222000001002948%22%7D&charset=utf-8&format=json&method=alipay.trade.query&sign_type=RSA&timestamp=2017-08-22+12%3A01%3A36&version=1.0&sign=kKs2YEt0pj7FbO8pQSdpN5U5yQcXc%2Fg9%2FKW96%2BptYSR6yDTw2h%2FgDPepyojkgkxdjzYbBLCDEWKaSLf8zh%2B6pNpOutLWueOU9pxqPKNvH08MNre7YchVi3TzAhe1V7Rcy8idE3gAIKMh86mLK3OfiMF4G%2BPltHwJMMVvMNUGigk%3D\n"
// var a =' app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170822000084771308000001039384%22%7D&charset=utf-8&format=json&method=alipay.trade.query&sign_type=RSA&timestamp=2017-08-22+08%3A24%3A41&version=1.0&sign=PMkvc2ba6pP3gT0oCo5NFZpsUwOnT%2FUNAjXDXMwreka26CLYDnY8MfZI8d9YPTD8i3JT%2F18QJHoZFz9NYyTMP6qjlhm5XcrN0mGYhWw16DtxakCJIiEDDf9ZNTIbmrUPVq6o7BNHpdEyA8mCyPgvX43WRMmvb7uyCHZe8EHrM0o%3D'
// var a  = '02 93 02 01 01 03 25 68 74 74 70 73 3A 2F 2F 6F 70 65 6E 61 70 69 2E 61 6C 69 70 61 79 2E 63 6F 6D 2F 67 61 74 65 77 61 79 2E 64 6F 04 00 05 00 06 82 02 55 7B 22 61 6C 69 70 61 79 5F 74 72 61 64 65 5F 71 75 65 72 79 5F 72 65 73 70 6F 6E 73 65 22 3A 7B 22 63 6F 64 65 22 3A 22 31 30 30 30 30 22 2C 22 6D 73 67 22 3A 22 53 75 63 63 65 73 73 22 2C 22 62 75 79 65 72 5F 6C 6F 67 6F 6E 5F 69 64 22 3A 22 31 38 37 2A 2A 2A 2A 39 38 36 36 22 2C 22 62 75 79 65 72 5F 70 61 79 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 62 75 79 65 72 5F 75 73 65 72 5F 69 64 22 3A 22 32 30 38 38 31 32 32 31 34 36 36 31 38 39 32 34 22 2C 22 69 6E 76 6F 69 63 65 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 6F 70 65 6E 5F 69 64 22 3A 22 32 30 38 38 30 30 39 30 31 35 37 31 32 37 32 38 38 35 35 35 38 30 32 35 31 32 38 31 35 39 39 32 22 2C 22 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 22 3A 22 31 37 30 38 32 32 30 30 30 30 38 34 37 37 31 33 30 38 30 30 30 30 30 31 30 33 39 33 38 34 22 2C 22 70 6F 69 6E 74 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 72 65 63 65 69 70 74 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 74 6F 74 61 6C 5F 61 6D 6F 75 6E 74 22 3A 22 38 2E 36 30 22 2C 22 74 72 61 64 65 5F 6E 6F 22 3A 22 32 30 31 37 30 38 32 32 32 31 30 30 31 30 30 34 39 32 30 32 39 37 30 36 33 38 30 39 22 2C 22 74 72 61 64 65 5F 73 74 61 74 75 73 22 3A 22 57 41 49 54 5F 42 55 59 45 52 5F 50 41 59 22 7D 2C 22 73 69 67 6E 22 3A 22 43 73 51 52 44 78 30 4D 63 70 74 30 55 51 74 64 39 6E 76 69 61 6A 49 63 45 59 32 65 32 59 77 4C 4D 4F 76 72 70 54 36 50 49 51 6E 76 79 68 6C 76 67 2F 4D 5A 4D 57 4C 47 6A 70 62 46 4B 4B 37 44 51 61 47 70 38 55 4E 54 69 2B 6E 32 77 61 73 4D 4A 33 44 53 76 6B 38 72 44 4B 4C 47 6B 63 52 49 35 46 48 52 75 67 73 33 41 42 34 64 77 51 54 6A 49 66 66 4D 78 67 6A 69 46 75 2F 77 6D 49 30 6A 62 4A 39 75 4D 79 6B 62 66 65 74 65 6D 51 43 66 31 61 71 52 71 2F 6F 79 74 58 72 79 35 6E 73 72 45 4A 4F 34 65 55 79 57 4F 71 51 3D 22 7D 0A 02 30 30 0B 00 0C 01 00 0D 01 03'
var b = a.replace(/(^\s+)|(\s+$)/g,"")
var chars = b.split('')
var buffer = []

for (var i = 0, step = 1; i < chars.length; i += step) {
  if (chars[i] === '%') {
    step = 3
    buffer.push(parseInt(chars[i + 1] + chars[i + 2], 16))
  } else {
    step = 1
    buffer.push(chars[i].charCodeAt())
  }
}

var params = iconv.decode(Buffer.from(buffer), 'gbk')
console.log(params)
var params2 = params.split("&")
var xmlJson ={}
for(var i=0; i<params2.length;i++){
  var item = params2[i].split("=")
  var name = item[0]
  var value = item[1]
  xmlJson[name] = value
}
console.log(xmlJson)
var params2 = params.split("&")
var xmlJson ={}
for(i in params2){
  var item = params2[i].split("=")
  var name = item[0]
  var value = item[1]
  xmlJson[name] = value
}
console.log("b",xmlJson)


// var message= '02 DA 60 00 00 00 01 00 00 00 00 02 01 3C 3F 78 6D 6C 20 76 65 72 73 69 6F 6E 3D 22 31 2E 30 22 20 65 6E 63 6F 64 69 6E 67 3D 22 75 74 66 2D 38 22 3F 3E 3C 72 65 73 70 6F 6E 73 65 3E 3C 68 65 61 64 3E 3C 74 72 61 6E 73 54 79 70 65 3E 30 32 30 31 3C 2F 74 72 61 6E 73 54 79 70 65 3E 3C 74 65 72 6D 69 6E 61 6C 56 65 72 3E 37 32 41 31 3C 2F 74 65 72 6D 69 6E 61 6C 56 65 72 3E 3C 64 61 74 65 54 69 6D 65 3E 32 30 31 37 30 38 32 32 30 38 32 33 34 35 3C 2F 64 61 74 65 54 69 6D 65 3E 3C 72 65 73 70 6F 6E 73 65 43 6F 64 65 3E 30 30 3C 2F 72 65 73 70 6F 6E 73 65 43 6F 64 65 3E 3C 72 65 73 70 6F 6E 73 65 44 65 73 63 3E E4 BA A4 E6 98 93 E6 88 90 E5 8A 9F 3C 2F 72 65 73 70 6F 6E 73 65 44 65 73 63 3E 3C 2F 68 65 61 64 3E 3C 62 6F 64 79 3E 3C 6D 65 72 63 68 61 6E 74 4E 6F 3E 31 30 30 30 30 30 30 30 30 30 31 36 35 39 38 3C 2F 6D 65 72 63 68 61 6E 74 4E 6F 3E 3C 74 65 72 6D 69 6E 61 6C 4E 6F 3E 31 30 30 30 35 36 34 37 3C 2F 74 65 72 6D 69 6E 61 6C 4E 6F 3E 3C 79 73 4D 65 72 63 68 61 6E 74 4E 6F 3E 34 39 31 34 35 31 31 35 39 39 39 30 30 32 33 3C 2F 79 73 4D 65 72 63 68 61 6E 74 4E 6F 3E 3C 79 73 54 65 6D 4E 6F 3E 34 35 31 31 31 37 37 31 3C 2F 79 73 54 65 6D 4E 6F 3E 3C 74 72 61 63 65 4E 6F 3E 30 30 30 39 33 38 3C 2F 74 72 61 63 65 4E 6F 3E 3C 62 61 74 63 68 4E 6F 3E 30 30 30 30 30 31 3C 2F 62 61 74 63 68 4E 6F 3E 3C 6F 72 64 65 72 4E 6F 3E 31 37 30 38 32 32 30 30 30 30 38 35 36 39 35 39 31 30 30 30 30 30 30 31 30 30 30 39 33 38 3C 2F 6F 72 64 65 72 4E 6F 3E 3C 77 78 4F 72 64 65 72 4E 6F 3E 34 30 30 33 36 34 32 30 30 31 32 30 31 37 30 38 32 32 37 35 36 36 33 38 38 39 31 36 3C 2F 77 78 4F 72 64 65 72 4E 6F 3E 3C 63 6F 75 70 6F 6E 46 65 65 3E 3C 2F 63 6F 75 70 6F 6E 46 65 65 3E 3C 63 61 73 68 46 65 65 3E 30 30 30 30 30 30 30 30 30 36 39 30 3C 2F 63 61 73 68 46 65 65 3E 3C 61 6D 6F 75 6E 74 3E 30 30 30 30 30 30 30 30 30 36 39 30 3C 2F 61 6D 6F 75 6E 74 3E 3C 74 69 6D 65 45 6E 64 3E 32 30 31 37 30 38 32 32 30 38 32 33 34 38 3C 2F 74 69 6D 65 45 6E 64 3E 3C 62 61 6E 6B 54 79 70 65 3E 49 43 42 43 5F 44 45 42 49 54 3C 2F 62 61 6E 6B 54 79 70 65 3E 3C 2F 62 6F 64 79 3E 3C 6D 61 63 3E 46 46 46 46 46 46 46 46 46 46 46 46 46 46 46 46 3C 2F 6D 61 63 3E 3C 2F 72 65 73 70 6F 6E 73 65 3E 0A'
// var message = '2017-08-22 09:30:08 [INFO] DBOper.c(88): get sql:SELECT * FROM T_YS_TEM_INFO '
// console.log(v.split('&').every(v => v.split('=').length > 1))
// var message = 'app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170822000084604294000001011845%22%2C%22scene%22%3A%22bar_code%22%2C%22auth_code%22%3A%22280945173500866697%22%2C%22total_amount%22%3A%2210.20%22%2C%22undiscountable_amount%22%3A%2210.20%22%2C%22subject%22%3A%22%B1%B1%BA%A3%CA%D0%D2%F8%BA%A3%C7%F8%C5%C9%BD%DD%C9%FA%BB%EE%B3%AC%CA%D0%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%222088721125784414%22%7D%2C%22extend_params%22%3A%7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=utf-8&format=json&method=alipay.trade.pay&sign_type=RSA&timestamp=2017-08-22+08%3A23%3A57&version=1.0&sign=TzkBfeuTnAcy3PhpZrkrolRjodkYVnRTEi0n4x5bnC%2FKDEIeX415Pub384OgO%2FyvKrboRcphdBPcQ33jDFlzpQnZFea2s33BdWr5w%2FvF817QPTQmOopcZfwimPVoTdYOUMWC4W7JHBMjd9vfWZH96ZX5%2BOta7S%2Bnl1bI2WtoEhE%3D'
// var message = '2017-08-22 01:51:55 [DEBUG] zhifubao.c(126): ׼�����շ�����(fd=107)�����峤��nLen=648'
// console.log( message.split('&').length > 1 && message.split('&').every(v => v.split('='    ).length > 1))
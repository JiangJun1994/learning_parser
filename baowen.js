/**
 * Created by jiangjun on 2017/9/8.
 */
var iconv = require("iconv-lite");
//packet receive from server  (http+json)

// var c = "02 E1 02 01 01 03 25 68 74 74 70 73 3A 2F 2F 6F 70 65 6E 61 70 69 2E 61 6C 69 70 61 79 2E 63 6F 6D 2F 67 61 74 65 77 61 79 2E 64 6F 04 00 05 00 06 82 02 A3 7B 22 61 6C 69 70 61 79 5F 74 72 61 64 65 5F 70 61 79 5F 72 65 73 70 6F 6E 73 65 22 3A 7B 22 63 6F 64 65 22 3A 22 31 30 30 30 30 22 2C 22 6D 73 67 22 3A 22 53 75 63 63 65 73 73 22 2C 22 62 75 79 65 72 5F 6C 6F 67 6F 6E 5F 69 64 22 3A 22 7A 34 30 2A 2A 2A 40 31 32 36 2E 63 6F 6D 22 2C 22 62 75 79 65 72 5F 70 61 79 5F 61 6D 6F 75 6E 74 22 3A 22 31 30 2E 32 30 22 2C 22 62 75 79 65 72 5F 75 73 65 72 5F 69 64 22 3A 22 32 30 38 38 38 30 32 34 38 33 36 31 34 38 34 38 22 2C 22 66 75 6E 64 5F 62 69 6C 6C 5F 6C 69 73 74 22 3A 5B 7B 22 61 6D 6F 75 6E 74 22 3A 22 31 30 2E 32 30 22 2C 22 66 75 6E 64 5F 63 68 61 6E 6E 65 6C 22 3A 22 41 4C 49 50 41 59 41 43 43 4F 55 4E 54 22 7D 5D 2C 22 67 6D 74 5F 70 61 79 6D 65 6E 74 22 3A 22 32 30 31 37 2D 30 38 2D 32 32 20 30 38 3A 32 34 3A 30 35 22 2C 22 69 6E 76 6F 69 63 65 5F 61 6D 6F 75 6E 74 22 3A 22 31 30 2E 32 30 22 2C 22 6F 70 65 6E 5F 69 64 22 3A 22 32 30 38 38 31 30 31 33 35 31 34 38 34 33 30 36 30 39 33 38 39 35 35 37 33 32 30 31 35 39 38 34 22 2C 22 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 22 3A 22 31 37 30 38 32 32 30 30 30 30 38 34 36 30 34 32 39 34 30 30 30 30 30 31 30 31 31 38 34 35 22 2C 22 70 6F 69 6E 74 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 72 65 63 65 69 70 74 5F 61 6D 6F 75 6E 74 22 3A 22 31 30 2E 32 30 22 2C 22 74 6F 74 61 6C 5F 61 6D 6F 75 6E 74 22 3A 22 31 30 2E 32 30 22 2C 22 74 72 61 64 65 5F 6E 6F 22 3A 22 32 30 31 37 30 38 32 32 32 31 30 30 31 30 30 34 38 34 30 32 33 39 32 36 34 30 35 35 22 7D 2C 22 73 69 67 6E 22 3A 22 41 4C 67 59 68 37 71 50 4B 48 6C 31 65 78 75 71 47 51 6B 30 72 68 66 62 4F 54 6C 5A 55 4D 51 67 58 34 57 59 73 49 57 32 64 4D 52 49 50 79 55 56 59 75 6C 4B 38 49 4E 6C 50 38 32 55 34 67 75 4A 4F 36 36 7A 2B 34 62 6F 42 46 4E 55 56 42 76 31 36 4E 45 4C 6A 37 63 48 49 6E 77 79 74 58 46 32 57 39 78 75 36 76 35 4B 2F 46 62 6D 2F 53 4E 46 50 52 71 36 4E 77 69 57 62 42 6A 58 45 53 34 75 49 7A 69 78 7A 4E 4C 4E 50 6C 7A 61 61 41 33 6A 6C 33 49 30 35 49 66 46 69 48 51 77 77 4B 6C 6D 44 76 2B 67 74 56 49 58 74 4D 51 3D 22 7D 0A 02 30 30 0B 00 0C 01 00 0D 01 03 "
/*�%https://openapi.alipay.com/gateway.do��{"alipay_trade_pay_response":{"code":"10000","msg":"Success","buyer_logon_id":"z40***@126.com","buyer_pay_amount":"10.20","buyer_user_id":"2088802483614848","fund_bill_list":[{"amount":"10.20","fund_channel":"ALIPAYACCOUNT"}],"gmt_payment":"2017-08-22 08:24:05","invoice_amount":"10.20","open_id":"20881013514843060938955732015984","out_trade_no":"170822000084604294000001011845","point_amount":"0.00","receipt_amount":"10.20","total_amount":"10.20","trade_no":"2017082221001004840239264055"},"sign":"ALgYh7qPKHl1exuqGQk0rhfbOTlZUMQgX4WYsIW2dMRIPyUVYulK8INlP82U4guJO66z+4boBFNUVBv16NELj7cHInwytXF2W9xu6v5K/Fbm/SNFPRq6NwiWbBjXES4uIzixzNLNPlzaaA3jl3I05IfFiHQwwKlmDv+gtVIXtMQ="}
 00
 */
var c = '02 04 02 01 01 03 25 68 74 74 70 73 3A 2F 2F 6F 70 65 6E 61 70 69 2E 61 6C 69 70 61 79 2E 63 6F 6D 2F 67 61 74 65 77 61 79 2E 64 6F 04 00 05 00 06 82 01 C6 7B 22 61 6C 69 70 61 79 5F 74 72 61 64 65 5F 71 75 65 72 79 5F 72 65 73 70 6F 6E 73 65 22 3A 7B 22 63 6F 64 65 22 3A 22 34 30 30 30 34 22 2C 22 6D 73 67 22 3A 22 42 75 73 69 6E 65 73 73 20 46 61 69 6C 65 64 22 2C 22 73 75 62 5F 63 6F 64 65 22 3A 22 41 43 51 2E 54 52 41 44 45 5F 4E 4F 54 5F 45 58 49 53 54 22 2C 22 73 75 62 5F 6D 73 67 22 3A 22 BD BB D2 D7 B2 BB B4 E6 D4 DA 22 2C 22 62 75 79 65 72 5F 70 61 79 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 69 6E 76 6F 69 63 65 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 22 3A 22 31 37 30 38 32 32 30 30 30 30 38 34 37 37 31 33 30 38 30 30 30 30 30 31 30 33 39 33 38 34 22 2C 22 70 6F 69 6E 74 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 72 65 63 65 69 70 74 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 7D 2C 22 73 69 67 6E 22 3A 22 72 52 58 71 59 48 58 64 44 52 42 75 4E 37 74 2B 2F 33 61 61 77 53 6A 67 59 54 58 68 77 48 41 48 45 65 30 75 58 55 76 4B 61 63 43 56 67 6E 69 74 70 37 2F 78 72 76 62 50 4D 51 65 34 39 72 79 74 4A 66 44 2B 35 43 46 50 50 38 55 70 52 73 52 37 55 76 4D 76 61 51 62 65 37 53 4B 6E 5A 34 34 48 4E 71 52 59 44 52 4B 63 59 6B 45 2F 59 76 5A 45 34 7A 57 75 76 6C 32 45 68 45 6C 46 33 49 6F 56 45 6C 2F 6A 39 65 44 64 64 54 6B 76 36 30 2B 6A 7A 41 62 75 53 4C 61 35 41 77 71 6B 35 2F 54 7A 78 72 55 46 4A 2B 75 2B 55 4A 30 3D 22 7D 0A 02 30 30 0B 00 0C 01 00 0D 01 03'
/*%https://openapi.alipay.com/gateway.do��{"alipay_trade_query_response":{"code":"40004","msg":"Business Failed","sub_code":"ACQ.TRADE_NOT_EXIST","sub_msg":"���ײ�����","buyer_pay_amount":"0.00","invoice_amount":"0.00","out_trade_no":"170822000084771308000001039384","point_amount":"0.00","receipt_amount":"0.00"},"sign":"rRXqYHXdDRBuN7t+/3aawSjgYTXhwHAHEe0uXUvKacCVgnitp7/xrvbPMQe49rytJfD+5CFPP8UpRsR7UvMvaQbe7SKnZ44HNqRYDRKcYkE/YvZE4zWuvl2EhElF3IoVEl/j9eDddTkv60+jzAbuSLa5Awqk5/TzxrUFJ+u+UJ0="}
 00
 */
arr = c.split(' ')
buf = Buffer.from(arr.map(x => parseInt(x,16)))
s = iconv.decode(buf, 'gbk')
console.log(s)




//packet receive from client  (取39之后的，转换成xml)

// var a = '01 73 60 00 01 00 00 00 00 00 00 01 01 3C 3F 78 6D 6C 20 76 65 72 73 69 6F 6E 3D 22 31 2E 30 22 20 65 6E 63 6F 64 69 6E 67 3D 22 55 54 46 2D 38 22 3F 3E 0A 3C 72 65 71 75 65 73 74 3E 3C 68 65 61 64 3E 3C 64 61 74 65 54 69 6D 65 3E 32 30 31 37 30 38 32 32 30 38 32 34 32 39 3C 2F 64 61 74 65 54 69 6D 65 3E 3C 74 65 72 6D 69 6E 61 6C 56 65 72 3E 37 32 41 31 3C 2F 74 65 72 6D 69 6E 61 6C 56 65 72 3E 3C 74 72 61 6E 73 54 79 70 65 3E 30 31 30 33 3C 2F 74 72 61 6E 73 54 79 70 65 3E 3C 2F 68 65 61 64 3E 3C 62 6F 64 79 3E 3C 62 61 74 63 68 4E 6F 3E 30 30 30 30 30 31 3C 2F 62 61 74 63 68 4E 6F 3E 3C 6D 65 72 63 68 61 6E 74 4E 6F 3E 34 39 31 34 35 30 33 35 34 31 31 30 30 36 36 3C 2F 6D 65 72 63 68 61 6E 74 4E 6F 3E 3C 6F 72 64 65 72 4E 6F 3E 31 37 30 38 32 32 30 30 30 30 38 34 37 37 31 33 30 38 30 30 30 30 30 31 30 33 39 33 38 34 3C 2F 6F 72 64 65 72 4E 6F 3E 3C 74 65 72 6D 69 6E 61 6C 4E 6F 3E 34 35 30 33 38 31 39 31 3C 2F 74 65 72 6D 69 6E 61 6C 4E 6F 3E 3C 74 72 61 63 65 4E 6F 3E 30 33 39 33 38 35 3C 2F 74 72 61 63 65 4E 6F 3E 3C 2F 62 6F 64 79 3E 3C 6D 61 63 3E 3C 2F 6D 61 63 3E 3C 2F 72 65 71 75 65 73 74 3E'
/*s`<?xml version="1.0" encoding="UTF-8"?>
 <request><head><dateTime>20170822082429</dateTime><terminalVer>72A1</terminalVer><transType>0103</transType></head><body><batchNo>000001</batchNo><merchantNo>491450354110066</merchantNo><orderNo>170822000084771308000001039384</orderNo><terminalNo>45038191</terminalNo><traceNo>039385</traceNo></body><mac></mac></request>
 jiangjundeMBP:TestESB jiangjun$
 */
// var a = '01 90 60 00 01 00 00 00 00 00 00 01 01 3C 3F 78 6D 6C 20 76 65 72 73 69 6F 6E 3D 22 31 2E 30 22 20 65 6E 63 6F 64 69 6E 67 3D 22 55 54 46 2D 38 22 3F 3E 0A 3C 72 65 71 75 65 73 74 3E 3C 68 65 61 64 3E 3C 64 61 74 65 54 69 6D 65 3E 32 30 31 37 30 38 32 32 30 38 32 34 32 37 3C 2F 64 61 74 65 54 69 6D 65 3E 3C 74 65 72 6D 69 6E 61 6C 56 65 72 3E 37 32 41 31 3C 2F 74 65 72 6D 69 6E 61 6C 56 65 72 3E 3C 74 72 61 6E 73 54 79 70 65 3E 30 31 30 32 3C 2F 74 72 61 6E 73 54 79 70 65 3E 3C 2F 68 65 61 64 3E 3C 62 6F 64 79 3E 3C 61 6D 6F 75 6E 74 3E 30 30 30 30 30 30 30 30 30 38 36 30 3C 2F 61 6D 6F 75 6E 74 3E 3C 62 61 74 63 68 4E 6F 3E 30 30 30 30 30 31 3C 2F 62 61 74 63 68 4E 6F 3E 3C 6D 65 72 63 68 61 6E 74 4E 6F 3E 34 39 31 34 35 30 33 35 34 31 31 30 30 36 36 3C 2F 6D 65 72 63 68 61 6E 74 4E 6F 3E 3C 6F 72 64 65 72 4E 6F 3E 31 37 30 38 32 32 30 30 30 30 38 34 37 37 31 33 30 38 30 30 30 30 30 31 30 33 39 33 38 34 3C 2F 6F 72 64 65 72 4E 6F 3E 3C 74 65 72 6D 69 6E 61 6C 4E 6F 3E 34 35 30 33 38 31 39 31 3C 2F 74 65 72 6D 69 6E 61 6C 4E 6F 3E 3C 74 72 61 63 65 4E 6F 3E 30 33 39 33 38 34 3C 2F 74 72 61 63 65 4E 6F 3E 3C 2F 62 6F 64 79 3E 3C 6D 61 63 3E 3C 2F 6D 61 63 3E 3C 2F 72 65 71 75 65 73 74 3E'
/*�`<?xml version="1.0" encoding="UTF-8"?>
 <request><head><dateTime>20170822082427</dateTime><terminalVer>72A1</terminalVer><transType>0102</transType></head><body><amount>000000000860</amount><batchNo>000001</batchNo><merchantNo>491450354110066</merchantNo><orderNo>170822000084771308000001039384</orderNo><terminalNo>45038191</terminalNo><traceNo>039384</traceNo></body><mac></mac></request>
 */
var d = c.substr(39)
arr = d.split(' ')
buf = Buffer.from(arr.map(x => parseInt(x,16)))
s = iconv.decode(buf, 'UTF-8')
// console.log(s)


//send data to client  (取39之后的，转换成xml)
var a = '03 60 60 00 00 00 01 00 00 00 00 01 01 3C 3F 78 6D 6C 20 76 65 72 73 69 6F 6E 3D 22 31 2E 30 22 20 65 6E 63 6F 64 69 6E 67 3D 22 75 74 66 2D 38 22 3F 3E 3C 72 65 73 70 6F 6E 73 65 3E 3C 68 65 61 64 3E 3C 74 72 61 6E 73 54 79 70 65 3E 30 31 30 31 3C 2F 74 72 61 6E 73 54 79 70 65 3E 3C 74 65 72 6D 69 6E 61 6C 56 65 72 3E 37 32 41 31 3C 2F 74 65 72 6D 69 6E 61 6C 56 65 72 3E 3C 64 61 74 65 54 69 6D 65 3E 32 30 31 37 30 38 32 32 30 38 32 34 30 33 3C 2F 64 61 74 65 54 69 6D 65 3E 3C 72 65 73 70 6F 6E 73 65 43 6F 64 65 3E 30 30 3C 2F 72 65 73 70 6F 6E 73 65 43 6F 64 65 3E 3C 72 65 73 70 6F 6E 73 65 44 65 73 63 3E E4 BA A4 E6 98 93 E6 88 90 E5 8A 9F 3C 2F 72 65 73 70 6F 6E 73 65 44 65 73 63 3E 3C 2F 68 65 61 64 3E 3C 62 6F 64 79 3E 3C 6D 65 72 63 68 61 6E 74 4E 6F 3E 31 30 30 30 30 30 30 30 30 30 30 36 37 36 37 3C 2F 6D 65 72 63 68 61 6E 74 4E 6F 3E 3C 74 65 72 6D 69 6E 61 6C 4E 6F 3E 31 30 30 30 31 35 30 31 3C 2F 74 65 72 6D 69 6E 61 6C 4E 6F 3E 3C 79 73 4D 65 72 4E 6F 3E 34 39 31 34 35 30 35 35 34 31 31 30 30 30 31 3C 2F 79 73 4D 65 72 4E 6F 3E 3C 79 73 54 65 6D 4E 6F 3E 34 35 30 35 30 30 35 38 3C 2F 79 73 54 65 6D 4E 6F 3E 3C 74 72 61 63 65 4E 6F 3E 30 31 31 38 34 35 3C 2F 74 72 61 63 65 4E 6F 3E 3C 62 61 74 63 68 4E 6F 3E 30 30 30 30 30 31 3C 2F 62 61 74 63 68 4E 6F 3E 3C 6F 72 64 65 72 4E 6F 3E 31 37 30 38 32 32 30 30 30 30 38 34 36 30 34 32 39 34 30 30 30 30 30 31 30 31 31 38 34 35 3C 2F 6F 72 64 65 72 4E 6F 3E 3C 7A 66 62 54 72 61 64 65 4E 6F 3E 32 30 31 37 30 38 32 32 32 31 30 30 31 30 30 34 38 34 30 32 33 39 32 36 34 30 35 35 3C 2F 7A 66 62 54 72 61 64 65 4E 6F 3E 3C 74 69 6D 65 45 6E 64 3E 32 30 31 37 30 38 32 32 30 38 32 34 30 35 3C 2F 74 69 6D 65 45 6E 64 3E 3C 62 75 79 65 72 55 73 65 72 49 44 3E 32 30 38 38 38 30 32 34 38 33 36 31 34 38 34 38 3C 2F 62 75 79 65 72 55 73 65 72 49 44 3E 3C 62 75 79 65 72 49 6F 67 6F 6E 49 44 3E 7A 34 30 2A 2A 2A 40 31 32 36 2E 63 6F 6D 3C 2F 62 75 79 65 72 49 6F 67 6F 6E 49 44 3E 3C 61 6D 6F 75 6E 74 3E 30 30 30 30 30 30 30 30 31 30 32 30 3C 2F 61 6D 6F 75 6E 74 3E 3C 72 65 63 65 69 70 74 41 6D 6F 75 6E 74 3E 30 30 30 30 30 30 30 30 31 30 32 30 3C 2F 72 65 63 65 69 70 74 41 6D 6F 75 6E 74 3E 3C 66 75 6E 64 42 69 6C 6C 4C 69 73 74 3E 3C 66 75 6E 64 43 68 61 6E 6E 65 6C 3E 41 4C 49 50 41 59 41 43 43 4F 55 4E 54 3C 2F 66 75 6E 64 43 68 61 6E 6E 65 6C 3E 3C 61 6D 6F 75 6E 74 3E 30 30 30 30 30 30 30 30 31 30 32 30 3C 2F 61 6D 6F 75 6E 74 3E 3C 2F 66 75 6E 64 42 69 6C 6C 4C 69 73 74 3E 3C 2F 62 6F 64 79 3E 3C 6D 61 63 3E 46 46 46 46 46 46 46 46 46 46 46 46 46 46 46 46 3C 2F 6D 61 63 3E 3C 2F 72 65 73 70 6F 6E 73 65 3E 0A '
// var d = a.substr(39)
arr = a.split(' ')
buf = Buffer.from(arr.map(x => parseInt(x,16)))
s = iconv.decode(buf, 'UTF-8')
var m = s.indexOf('<?xml')
var h = s.substr(m)
// console.log(h)

//zfb pay for send data to server   (http + 参数串)
// var c = '02 04 02 01 01 03 25 68 74 74 70 73 3A 2F 2F 6F 70 65 6E 61 70 69 2E 61 6C 69 70 61 79 2E 63 6F 6D 2F 67 61 74 65 77 61 79 2E 64 6F 04 00 05 00 06 82 01 C6 7B 22 61 6C 69 70 61 79 5F 74 72 61 64 65 5F 71 75 65 72 79 5F 72 65 73 70 6F 6E 73 65 22 3A 7B 22 63 6F 64 65 22 3A 22 34 30 30 30 34 22 2C 22 6D 73 67 22 3A 22 42 75 73 69 6E 65 73 73 20 46 61 69 6C 65 64 22 2C 22 73 75 62 5F 63 6F 64 65 22 3A 22 41 43 51 2E 54 52 41 44 45 5F 4E 4F 54 5F 45 58 49 53 54 22 2C 22 73 75 62 5F 6D 73 67 22 3A 22 BD BB D2 D7 B2 BB B4 E6 D4 DA 22 2C 22 62 75 79 65 72 5F 70 61 79 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 69 6E 76 6F 69 63 65 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 22 3A 22 31 37 30 38 32 32 30 30 30 30 38 34 37 37 31 33 30 38 30 30 30 30 30 31 30 33 39 33 38 34 22 2C 22 70 6F 69 6E 74 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 72 65 63 65 69 70 74 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 7D 2C 22 73 69 67 6E 22 3A 22 72 52 58 71 59 48 58 64 44 52 42 75 4E 37 74 2B 2F 33 61 61 77 53 6A 67 59 54 58 68 77 48 41 48 45 65 30 75 58 55 76 4B 61 63 43 56 67 6E 69 74 70 37 2F 78 72 76 62 50 4D 51 65 34 39 72 79 74 4A 66 44 2B 35 43 46 50 50 38 55 70 52 73 52 37 55 76 4D 76 61 51 62 65 37 53 4B 6E 5A 34 34 48 4E 71 52 59 44 52 4B 63 59 6B 45 2F 59 76 5A 45 34 7A 57 75 76 6C 32 45 68 45 6C 46 33 49 6F 56 45 6C 2F 6A 39 65 44 64 64 54 6B 76 36 30 2B 6A 7A 41 62 75 53 4C 61 35 41 77 71 6B 35 2F 54 7A 78 72 55 46 4A 2B 75 2B 55 4A 30 3D 22 7D 0A 02 30 30 0B 00 0C 01 00 0D 01 03'

var c ='03 3F 02 01 01 03 25 68 74 74 70 73 3A 2F 2F 6F 70 65 6E 61 70 69 2E 61 6C 69 70 61 79 2E 63 6F 6D 2F 67 61 74 65 77 61 79 2E 64 6F 04 00 05 00 06 82 02 FF 61 70 70 5F 69 64 3D 32 30 31 35 30 35 31 31 30 30 30 36 39 31 37 30 26 62 69 7A 5F 63 6F 6E 74 65 6E 74 3D 25 37 42 25 32 32 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 25 32 32 25 33 41 25 32 32 31 37 30 34 33 30 30 30 30 30 35 30 36 33 31 31 37 39 30 30 30 30 30 31 30 30 30 30 33 32 25 32 32 25 32 43 25 32 32 73 63 65 6E 65 25 32 32 25 33 41 25 32 32 62 61 72 5F 63 6F 64 65 25 32 32 25 32 43 25 32 32 61 75 74 68 5F 63 6F 64 65 25 32 32 25 33 41 25 32 32 32 38 30 31 32 37 35 36 38 30 34 31 36 30 33 38 39 31 25 32 32 25 32 43 25 32 32 74 6F 74 61 6C 5F 61 6D 6F 75 6E 74 25 32 32 25 33 41 25 32 32 30 2E 30 31 25 32 32 25 32 43 25 32 32 75 6E 64 69 73 63 6F 75 6E 74 61 62 6C 65 5F 61 6D 6F 75 6E 74 25 32 32 25 33 41 25 32 32 30 2E 30 31 25 32 32 25 32 43 25 32 32 73 75 62 6A 65 63 74 25 32 32 25 33 41 25 32 32 25 44 36 25 41 37 25 42 38 25 42 36 25 42 31 25 41 36 25 42 31 25 42 42 25 43 39 25 41 38 25 32 32 25 32 43 25 32 32 73 74 6F 72 65 5F 69 64 25 32 32 25 33 41 25 32 32 25 32 32 25 32 43 25 32 32 73 75 62 5F 6D 65 72 63 68 61 6E 74 25 32 32 25 33 41 25 37 42 25 32 32 6D 65 72 63 68 61 6E 74 5F 69 64 25 32 32 25 33 41 25 32 32 31 37 31 35 31 39 38 36 32 38 38 25 32 32 25 37 44 25 32 43 25 32 32 65 78 74 65 6E 64 5F 70 61 72 61 6D 73 25 32 32 25 33 41 25 37 42 25 32 32 73 79 73 5F 73 65 72 76 69 63 65 5F 70 72 6F 76 69 64 65 72 5F 69 64 25 32 32 25 33 41 25 32 32 25 32 32 25 37 44 25 37 44 26 63 68 61 72 73 65 74 3D 75 74 66 2D 38 26 66 6F 72 6D 61 74 3D 6A 73 6F 6E 26 6D 65 74 68 6F 64 3D 61 6C 69 70 61 79 2E 74 72 61 64 65 2E 70 61 79 26 73 69 67 6E 5F 74 79 70 65 3D 52 53 41 26 74 69 6D 65 73 74 61 6D 70 3D 32 30 31 37 2D 30 34 2D 33 30 2B 31 34 25 33 41 31 30 25 33 41 31 35 26 76 65 72 73 69 6F 6E 3D 31 2E 30 26 73 69 67 6E 3D 54 35 31 49 7A 79 43 6B 4C 37 32 43 25 32 46 25 32 42 52 6F 62 63 72 51 55 6C 68 54 67 6A 56 65 44 4A 35 46 25 32 42 7A 79 70 56 79 5A 54 55 31 42 43 37 67 70 54 67 51 53 74 54 61 62 50 5A 4A 50 52 35 4E 41 4B 72 53 47 54 51 30 78 67 41 72 57 4A 46 48 49 77 39 56 41 45 33 49 62 4B 79 55 68 31 64 64 67 62 30 6A 66 36 4C 5A 39 52 54 48 4B 56 59 42 51 58 4C 57 45 4E 56 38 6F 53 58 6B 30 64 4A 70 78 50 4F 54 6E 4A 78 4F 6A 47 64 46 72 38 5A 7A 44 76 4E 25 32 42 52 74 4E 35 41 77 76 53 75 5A 4E 4A 4A 71 64 4C 56 42 75 63 52 65 6B 68 38 25 33 44 08 00 09 00 0A 00 0B 00 0C 01 00 0D 01 03'
/*app_id=2015051100069170&biz_content=%7B%22out_trade_no%22%3A%22170430000050631179000001000032%22%2C%22scene%22%3A%22bar_code%22%2C%22auth_code%22%3A%22280127568041603891%22%2C%22total_amount%22%3A%220.01%22%2C%22undiscountable_amount%22%3A%220.01%22%2C%22subject%22%3A%22%D6%A7%B8%B6%B1%A6%B1%BB%C9%A8%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%2217151986288%22%7D%2C%22extend_params%22%3A%7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=utf-8&format=json&method=alipay.trade.pay&sign_type=RSA&timestamp=2017-04-30+14%3A10%3A15&version=1.0&sign=T51IzyCkL72C%2F%2BRobcrQUlhTgjVeDJ5F%2BzypVyZTU1BC7gpTgQStTabPZJPR5NAKrSGTQ0xgArWJFHIw9VAE3IbKyUh1ddgb0jf6LZ9RTHKVYBQXLWENV8oSXk0dJpxPOTnJxOjGdFr8ZzDvN%2BRtN5AwvSuZNJJqdLVBucRekh8%3D */
var index = c.indexOf("06 82")
var d = c.substr(index+12)
arr = d.split(' ')
buf = Buffer.from(arr.map(x => parseInt(x,16)))
s = iconv.decode(buf, 'gbk')
// console.log(s)


// wx create for send data to server  <xml>
var z = '02 A4 02 01 01 03 2E 68 74 74 70 73 3A 2F 2F 61 70 69 2E 6D 63 68 2E 77 65 69 78 69 6E 2E 71 71 2E 63 6F 6D 2F 70 61 79 2F 75 6E 69 66 69 65 64 6F 72 64 65 72 04 00 05 00 06 82 02 5B 3C 78 6D 6C 3E 3C 61 70 70 69 64 3E 77 78 62 35 62 30 39 35 35 61 61 37 62 61 32 37 35 65 3C 2F 61 70 70 69 64 3E 3C 6D 63 68 5F 69 64 3E 31 33 33 38 36 38 33 35 30 31 3C 2F 6D 63 68 5F 69 64 3E 3C 73 75 62 5F 61 70 70 69 64 3E 3C 2F 73 75 62 5F 61 70 70 69 64 3E 3C 73 75 62 5F 6D 63 68 5F 69 64 3E 32 39 30 33 34 35 35 31 3C 2F 73 75 62 5F 6D 63 68 5F 69 64 3E 3C 6E 6F 6E 63 65 5F 73 74 72 3E 31 30 30 30 30 30 30 30 30 30 30 35 39 36 31 34 34 31 31 35 36 32 35 34 31 32 37 36 33 30 3C 2F 6E 6F 6E 63 65 5F 73 74 72 3E 3C 62 6F 64 79 3E E8 B4 BA E5 B7 9E E5 B8 82 E7 99 BE E7 9B 8A E4 B9 90 E8 BF 94 E5 95 86 E8 B4 B8 E6 9C 89 E9 99 90 E8 B4 A3 E4 BB BB E5 85 AC E5 8F B8 3C 2F 62 6F 64 79 3E 3C 64 65 74 61 69 6C 3E 3C 2F 64 65 74 61 69 6C 3E 3C 61 74 74 61 63 68 3E 3C 2F 61 74 74 61 63 68 3E 3C 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 3E 31 37 30 38 32 32 30 30 30 30 38 34 37 37 31 33 37 36 30 30 30 30 30 31 30 30 33 31 36 32 3C 2F 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 3E 3C 74 6F 74 61 6C 5F 66 65 65 3E 32 38 30 36 30 3C 2F 74 6F 74 61 6C 5F 66 65 65 3E 3C 73 70 62 69 6C 6C 5F 63 72 65 61 74 65 5F 69 70 3E 31 39 32 2E 31 36 38 2E 31 2E 34 34 3C 2F 73 70 62 69 6C 6C 5F 63 72 65 61 74 65 5F 69 70 3E 3C 6E 6F 74 69 66 79 5F 75 72 6C 3E 77 77 77 2E 62 61 69 64 75 2E 63 6F 6D 3C 2F 6E 6F 74 69 66 79 5F 75 72 6C 3E 3C 74 72 61 64 65 5F 74 79 70 65 3E 4E 41 54 49 56 45 3C 2F 74 72 61 64 65 5F 74 79 70 65 3E 3C 70 72 6F 64 75 63 74 5F 69 64 3E 31 30 30 30 30 30 30 30 30 30 30 35 39 36 31 3C 2F 70 72 6F 64 75 63 74 5F 69 64 3E 3C 6C 69 6D 69 74 5F 70 61 79 3E 3C 2F 6C 69 6D 69 74 5F 70 61 79 3E 3C 6F 70 65 6E 69 64 3E 3C 2F 6F 70 65 6E 69 64 3E 3C 73 69 67 6E 3E 33 30 44 34 41 43 42 31 39 34 32 42 33 30 30 41 43 36 34 43 45 37 37 41 42 38 36 46 39 32 39 42 3C 2F 73 69 67 6E 3E 3C 2F 78 6D 6C 3E 0A 08 00 09 00 0A 00 0B 00 0C 01 00 0D 01 04'
/*�.https://api.mch.weixin.qq.com/pay/unifiedorder�[<xml><appid>wxb5b0955aa7ba275e</appid><mch_id>1338683501</mch_id><sub_appid></sub_appid><sub_mch_id>29034551</sub_mch_id><nonce_str>100000000005961441156254127630</nonce_str><body>贺州市百益乐返商贸有限责任公司</body><detail></detail><attach></attach><out_trade_no>170822000084771376000001003162<total_fee>28060</total_fee><spbill_create_ip>192.168.1.44</spbill_create_ip><notify_url>www.baidu.com</notify_url><trade_type>NATIVE</trade_type><product_id>100000000005961</product_id><limit_pay></limit_pay><openid></openid><sign>30D4ACB1942B300AC64CE77AB86F929B</sign></xml>
 */
var index = z.indexOf("06 82")
var d = z.substr(index+12)
arr = d.split(' ')
buf = Buffer.from(arr.map(x => parseInt(x,16)))
s = iconv.decode(buf, 'UTF-8')
// console.log(s)


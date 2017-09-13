var a ='{"alipay_trade_pay_response":{"code":"10003","msg":" order success pay inprocess","buyer_logon_id":"132****3029","buyer_pay_amount":"0.00","buyer_user_id":"2088122865986719","invoice_amount":"0.00","open_id":"20880022280005127217341030715971","out_trade_no":"170822000085721222000001002948","point_amount":"0.00","receipt_amount":"0.00","total_amount":"2650.00","trade_no":"2017082221001004710224447407"},"sign":"ErHDi9G/JG6p6UWbeaF/3xB384Cpm1hQfU3xqos0bLKzay/SXnaCpHWXZSiqkQSduLsuszOqKfxFsZaI51hVYxVo5MTshkrs/FSwAHQ3vclH6zWCMrIXVymmOpCGtW0ghb8tsAy9Fpyo/I9IvublgZov6AN8HJ7Z4LUWk0ymnZ8="}'
// var a = 'app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170822000085721222000001002948%22%2C%22scene%22%3A%22bar_code%22%2C%22auth_code%22%3A%22289582445329049684%22%2C%22total_amount%22%3A%222650.00%22%2C%22undiscountable_amount%22%3A%222650.00%22%2C%22subject%22%3A%22%B9%F0%C1%D6%CA%D0%D3%F1%B9%E7%D4%B0%B7%BF%B5%D8%B2%FA%D3%D0%CF%DE%B9%AB%CB%BE%22%2C%22store_id%22%3A%22%22%2C%22sub_merchant%22%3A%7B%22merchant_id%22%3A%222088721420069539%22%7D%2C%22extend_params%22%3A%7B%22sys_service_provider_id%22%3A%22%22%7D%7D&charset=utf-8&format=json&method=alipay.trade.pay&sign_type=RSA&timestamp=2017-08-22+12%3A01%3A26&version=1.0&sign=NnIuqWkUckpWJxSKqg6q84t8hWkx%2Bzk6R%2FU02g8laDNMD7b8PlUEpk4AwGGe08tsLpLwSlYDf737L3oF6bxzUz7eVIudYfbbdaav%2Fvbow8Zcx%2B8ZxA6wTSm3b1ZcaJaIObZepINcLaYq6VJLj0cJ5f485MByJ5UFTSAdhTL8TNs%3D'
// var a = '<xml><appid>wxb5b0955aa7ba275e</appid><sub_appid></sub_appid><mch_id>1338683501</mch_id><sub_mch_id>34644881</sub_mch_id><nonce_str>100000000010857108383623003270</nonce_str><out_trade_no>170822000085721220000001004248</out_trade_no><spbill_create_ip></spbill_create_ip><attach></attach><time_expire></time_expire><sign>DF18A31BBC59B7A0C58775A53C7FE276</sign></xml>'

var b = JSON.parse(a)
var result = {name:{q:"jj",w:"ss"}}
result.message = b
console.log("hhh",JSON.stringify(result))

// if(b){
//   console.log(b)
// }

// var c = {"message":{"{\"alipay_trade_query_response\":{\"code\":\"10000\",\"msg\":\"Success\",\"buyer_logon_id\":\"132****3029\",\"buyer_pay_amount\":\"0.00\",\"buyer_user_id\":\"2088122865986719\",\"invoice_amount\":\"0.00\",\"open_id\":\"20880022280005127217341030715971\",\"out_trade_no\":\"170822000085721222000001002948\",\"point_amount\":\"0.00\",\"receipt_amount\":\"0.00\",\"total_amount\":\"2650.00\",\"trade_no\":\"2017082221001004710224447407\",\"trade_status\":\"WAIT_BUYER_PAY\"},\"sign\":\"jRRKJyakcoW2E5t4RMdU11ZrF9/8Q6kf2Fr/npdVgwhPbxZEDk1e3E3hZ9QwmOt4tdEZ7+KsnUgs2aMIB4/+yY6LMvdGnmVhM7hVggcgWcUYiyy/JBKUghqHMZEAY9mc6NIPnFWcdn65N5b+BOHRnXFtsjIaDhIpmDTnDMYaBbU":"\"} "}}
// var d = c.message
// console.log(d["alipay_trade_query_response"])

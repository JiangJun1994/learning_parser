/**
 * Created by jiangjun on 2017/9/5.
 */
// import {parseString} from 'xml2js'
var parseString = require('parseString')

var buffer = "<xml><return_code><![CDATA[SUCCESS]]></return_code> <return_msg><![CDATA[OK]]></return_msg> <appid><![CDATA[wxb5b0955aa7ba275e]]></appid> <mch_id><![CDATA[1338683501]]></mch_id> <sub_mch_id><![CDATA[29024874]]></sub_mch_id> <nonce_str><![CDATA[lBaZYzJscwmavrdQ]]></nonce_str> <sign><![CDATA[A3099C5EEC2972BC4A9F64B5E0E33671]]></sign> <result_code><![CDATA[SUCCESS]]></result_code> <prepay_id><![CDATA[wx201708220001137df0a0b2f20544975103]]></prepay_id> <trade_type><![CDATA[NATIVE]]></trade_type> <code_url><![CDATA[weixin://wxpay/bizpayurl?pr=r2oDFjv]]></code_url> </xml>"
parseString( "<xml><return_code><![CDATA[SUCCESS]]></return_code> <return_msg><![CDATA[OK]]></return_msg> <appid><![CDATA[wxb5b0955aa7ba275e]]></appid> <mch_id><![CDATA[1338683501]]></mch_id> <sub_mch_id><![CDATA[29024874]]></sub_mch_id> <nonce_str><![CDATA[lBaZYzJscwmavrdQ]]></nonce_str> <sign><![CDATA[A3099C5EEC2972BC4A9F64B5E0E33671]]></sign> <result_code><![CDATA[SUCCESS]]></result_code> <prepay_id><![CDATA[wx201708220001137df0a0b2f20544975103]]></prepay_id> <trade_type><![CDATA[NATIVE]]></trade_type> <code_url><![CDATA[weixin://wxpay/bizpayurl?pr=r2oDFjv]]></code_url> </xml>"
  ,function(result){
  console.log(result)
});
// console.log(x)
// xml ->json
module.exports = `RECVXML, SEQ[6571655112800013800765], SERVICE[5703], TIME[2015/06/30 17:21:41.526], LEN[2515]
 P[2015/06/11 16:29:19] D[2015/06/11 16:13:17]
<?xml version="1.0" encoding="GB18030" ?>
<soapenv:Envelope xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
xmlns:wsrm="http://schemas.xmlsoap.org/ws/2005/02/rm"
xmlns:wssec="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
<soapenv:Header>
<wsa:Addressing>
<wsa:ReplayTo>
<wsa:Address>http://business456.com/User12</wsa:Address>
</wsa:ReplayTo>
<wsa:To>http://fabrikam123.com/Traffic</wsa:To>
<wsa:Action>http://fabrikam123.com/Traffic/Status</wsa:Action>
</wsa:Addressing>
<wssec:Security >
<wssec:BinarySecurityToken ValueType="wssec:X509v3" EncodingType="wssec:Base64Binary">
ADBCH1234EFD2345EFGIJK
</wssec:BinarySecurityToken>
</wssec:Security >
<wsrm:ReliableMessaging>
<wsrm:Sequence>
<wsrm:Identifier>http://fabrikam123.com/seq1234</wsrm:Identifier>
<wsrm:MessageNumber>10</wsrm:MessageNumber>
</wsrm:Sequence>
</wsrm:ReliableMessaging>
</soapenv:Header><soapenv:Body><Response><SYSHEAD><SHJBCD>0</SHJBCD><BAWMAC></BAWMAC><MACJGH>ESB</MACJGH><PINZHZ>1721411980026389</PINZHZ><CHNLNO>191</CHNLNO><QUDQUX></QUDQUX><MACFLG>1</MACFLG><PINFLG></PINFLG><COMFLG>0</COMFLG><ZHUJFW>zuhejy_01</ZHUJFW><XXJSBZ></XXJSBZ><SJBSXH>0</SJBSXH><JIOYBZ>1</JIOYBZ><MIYBBH>1035</MIYBBH><QUDAOO>07</QUDAOO><MIMPYL></MIMPYL><FAREDM>9999</FAREDM><GENZHH></GENZHH><BAOWLX>XML</BAOWLX><JIQIBH></JIQIBH><CHXBBH></CHXBBH><YUANDZ>0.0.0.0</YUANDZ><MUBIDZ>0.0.0.0</MUBIDZ><YANYBZ></YANYBZ><JDFHBZ></JDFHBZ><FHJAYM></FHJAYM><PZJYMC></PZJYMC><RCTJBZ></RCTJBZ><BAOWIO></BAOWIO><LDJYBZ></LDJYBZ><XTBAOL></XTBAOL></SYSHEAD><RETTRANHEAD><JIAOYM>5703</JIAOYM><LDJYDM></LDJYDM><JIOYRQ>20150630</JIOYRQ><JIOYSJ>171713</JIOYSJ><GUIYLS>A1004900000273</GUIYLS><KUAJRQ>20150630</KUAJRQ><JIEKBB></JIEKBB><DSAFLS></DSAFLS><DSFRQI></DSFRQI><WHJGFG></WHJGFG><JDFHBZ></JDFHBZ><FHJAYM></FHJAYM><PZJYMC></PZJYMC><FHBAOL></FHBAOL><CWJYXH>0</CWJYXH><NPLIST></NPLIST><PTCWDH>AAAAAAA</PTCWDH></RETTRANHEAD><BODY><OBJECT name="O57032" type="WINDOW"><QANTLS>070000959531</QANTLS><FAKARQ></FAKARQ><YOUXRQ>20491231</YOUXRQ><DEQCYE>0.00</DEQCYE><XEQCYE>0.00</XEQCYE><ZYDKYE>0.00</ZYDKYE><BYJYUE>0.00</BYJYUE><YDDQYE>0.00</YDDQYE><ZHHUYE>871.60</ZHHUYE><KEYOJE>871.60</KEYOJE><YUSQJE>0.00</YUSQJE><DQKZZE>0.00</DQKZZE><SFZUKA></SFZUKA><ZKKHAO></ZKKHAO><KEHHAO>011000002737</KEHHAO><KAIKRQ></KAIKRQ><KAIHJG>1011</KAIHJG><GRZWMC>陈伟</GRZWMC><SHXFJE>0.00</SHXFJE><YNGWSM>陈伟</YNGWSM><JIANCH>伟</JIANCH></OBJECT></BODY></Response></soapenv:Body></soapenv:Envelope>`

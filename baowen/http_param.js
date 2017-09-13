var iconv = require("iconv-lite");
// var param = require ('./Param');
var c = '06 82 03 3B 61 70 70 5F 69 64 3D 32 30 31 37 30 34 31 39 30 36 38 32 34 34 36 32 26 62 69 7A 5F 63 6F 6E 74 65 6E 74 3D 25 37 42 25 32 32 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 25 32 32 25 33 41 25 32 32 31 37 30 38 32 32 30 30 30 30 38 35 36 30 33 31 33 32 30 30 30 30 30 31 30 35 35 32 30 39 25 32 32 25 32 43 25 32 32 73 63 65 6E 65 25 32 32 25 33 41 25 32 32 62 61 72 5F 63 6F 64 65 25 32 32 25 32 43 25 32 32 61 75 74 68 5F 63 6F 64 65 25 32 32 25 33 41 25 32 32 32 38 35 36 30 30 31 32 37 35 35 36 37 30 31 34 30 25 32 32 25 32 43 25 32 32 74 6F 74 61 6C 5F 61 6D 6F 75 6E 74 25 32 32 25 33 41 25 32 32 32 30 30 2E 30 30 25 32 32 25 32 43 25 32 32 75 6E 64 69 73 63 6F 75 6E 74 61 62 6C 65 5F 61 6D 6F 75 6E 74 25 32 32 25 33 41 25 32 32 32 30 30 2E 30 30 25 32 32 25 32 43 25 32 32 73 75 62 6A 65 63 74 25 32 32 25 33 41 25 32 32 25 42 39 25 46 30 25 43 31 25 44 36 25 43 41 25 44 30 25 43 30 25 45 43 25 42 44 25 41 44 25 43 41 25 41 46 25 44 33 25 43 44 25 44 33 25 44 30 25 43 46 25 44 45 25 42 39 25 41 42 25 43 42 25 42 45 25 42 43 25 44 33 25 44 33 25 43 44 25 44 35 25 42 45 25 32 32 25 32 43 25 32 32 73 74 6F 72 65 5F 69 64 25 32 32 25 33 41 25 32 32 25 32 32 25 32 43 25 32 32 73 75 62 5F 6D 65 72 63 68 61 6E 74 25 32 32 25 33 41 25 37 42 25 32 32 6D 65 72 63 68 61 6E 74 5F 69 64 25 32 32 25 33 41 25 32 32 32 30 38 38 37 32 31 31 32 33 33 34 39 36 38 36 25 32 32 25 37 44 25 32 43 25 32 32 65 78 74 65 6E 64 5F 70 61 72 61 6D 73 25 32 32 25 33 41 25 37 42 25 32 32 73 79 73 5F 73 65 72 76 69 63 65 5F 70 72 6F 76 69 64 65 72 5F 69 64 25 32 32 25 33 41 25 32 32 25 32 32 25 37 44 25 37 44 26 63 68 61 72 73 65 74 3D 75 74 66 2D 38 26 66 6F 72 6D 61 74 3D 6A 73 6F 6E 26 6D 65 74 68 6F 64 3D 61 6C 69 70 61 79 2E 74 72 61 64 65 2E 70 61 79 26 73 69 67 6E 5F 74 79 70 65 3D 52 53 41 26 74 69 6D 65 73 74 61 6D 70 3D 32 30 31 37 2D 30 38 2D 32 32 2B 30 30 25 33 41 32 33 25 33 41 34 33 26 76 65 72 73 69 6F 6E 3D 31 2E 30 26 73 69 67 6E 3D 51 74 46 6C 6C 66 57 76 6E 4F 39 74 6B 50 43 5A 76 42 55 62 54 66 64 4D 48 71 61 67 6C 34 32 77 37 74 58 52 55 6D 68 45 70 6E 73 78 34 58 41 6B 78 43 6A 4B 6C 66 4E 42 4E 25 32 46 34 52 42 36 61 58 6A 5A 62 63 52 73 54 52 46 43 25 32 42 63 78 4D 51 4C 4C 47 4B 47 4F 58 77 65 35 35 30 45 61 45 36 50 6F 6C 50 64 68 44 42 4A 36 50 73 33 56 67 75 4A 4D 65 6B 67 6C 75 77 38 51 7A 36 77 31 42 59 78 6A 44 35 7A 4A 73 57 34 6E 70 51 4A 72 6F 52 46 25 32 42 6A 46 47 56 63 46 33 6F 37 70 6C 4F 47 31 4A 4A 6A 38 31 68 48 44 53 53 4D 55 25 33 44 08 00 09 00 0A 00 0B 00 0C 01 00 0D 01 03 '
// var c = '03 3F 02 01 01 03 25 68 74 74 70 73 3A 2F 2F 6F 70 65 6E 61 70 69 2E 61 6C 69 70 61 79 2E 63 6F 6D 2F 67 61 74 65 77 61 79 2E 64 6F 04 00 05 00 06 82 02 FF 61 70 70 5F 69 64 3D 32 30 31 35 30 35 31 31 30 30 30 36 39 31 37 30 26 62 69 7A 5F 63 6F 6E 74 65 6E 74 3D 25 37 42 25 32 32 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 25 32 32 25 33 41 25 32 32 31 37 30 34 33 30 30 30 30 30 35 30 36 33 31 31 37 39 30 30 30 30 30 31 30 30 30 30 33 32 25 32 32 25 32 43 25 32 32 73 63 65 6E 65 25 32 32 25 33 41 25 32 32 62 61 72 5F 63 6F 64 65 25 32 32 25 32 43 25 32 32 61 75 74 68 5F 63 6F 64 65 25 32 32 25 33 41 25 32 32 32 38 30 31 32 37 35 36 38 30 34 31 36 30 33 38 39 31 25 32 32 25 32 43 25 32 32 74 6F 74 61 6C 5F 61 6D 6F 75 6E 74 25 32 32 25 33 41 25 32 32 30 2E 30 31 25 32 32 25 32 43 25 32 32 75 6E 64 69 73 63 6F 75 6E 74 61 62 6C 65 5F 61 6D 6F 75 6E 74 25 32 32 25 33 41 25 32 32 30 2E 30 31 25 32 32 25 32 43 25 32 32 73 75 62 6A 65 63 74 25 32 32 25 33 41 25 32 32 25 44 36 25 41 37 25 42 38 25 42 36 25 42 31 25 41 36 25 42 31 25 42 42 25 43 39 25 41 38 25 32 32 25 32 43 25 32 32 73 74 6F 72 65 5F 69 64 25 32 32 25 33 41 25 32 32 25 32 32 25 32 43 25 32 32 73 75 62 5F 6D 65 72 63 68 61 6E 74 25 32 32 25 33 41 25 37 42 25 32 32 6D 65 72 63 68 61 6E 74 5F 69 64 25 32 32 25 33 41 25 32 32 31 37 31 35 31 39 38 36 32 38 38 25 32 32 25 37 44 25 32 43 25 32 32 65 78 74 65 6E 64 5F 70 61 72 61 6D 73 25 32 32 25 33 41 25 37 42 25 32 32 73 79 73 5F 73 65 72 76 69 63 65 5F 70 72 6F 76 69 64 65 72 5F 69 64 25 32 32 25 33 41 25 32 32 25 32 32 25 37 44 25 37 44 26 63 68 61 72 73 65 74 3D 75 74 66 2D 38 26 66 6F 72 6D 61 74 3D 6A 73 6F 6E 26 6D 65 74 68 6F 64 3D 61 6C 69 70 61 79 2E 74 72 61 64 65 2E 70 61 79 26 73 69 67 6E 5F 74 79 70 65 3D 52 53 41 26 74 69 6D 65 73 74 61 6D 70 3D 32 30 31 37 2D 30 34 2D 33 30 2B 31 34 25 33 41 31 30 25 33 41 31 35 26 76 65 72 73 69 6F 6E 3D 31 2E 30 26 73 69 67 6E 3D 54 35 31 49 7A 79 43 6B 4C 37 32 43 25 32 46 25 32 42 52 6F 62 63 72 51 55 6C 68 54 67 6A 56 65 44 4A 35 46 25 32 42 7A 79 70 56 79 5A 54 55 31 42 43 37 67 70 54 67 51 53 74 54 61 62 50 5A 4A 50 52 35 4E 41 4B 72 53 47 54 51 30 78 67 41 72 57 4A 46 48 49 77 39 56 41 45 33 49 62 4B 79 55 68 31 64 64 67 62 30 6A 66 36 4C 5A 39 52 54 48 4B 56 59 42 51 58 4C 57 45 4E 56 38 6F 53 58 6B 30 64 4A 70 78 50 4F 54 6E 4A 78 4F 6A 47 64 46 72 38 5A 7A 44 76 4E 25 32 42 52 74 4E 35 41 77 76 53 75 5A 4E 4A 4A 71 64 4C 56 42 75 63 52 65 6B 68 38 25 33 44 08 00 09 00 0A 00 0B 00 0C 01 00 0D 01 03'

//错误数据
// var c = '02 04 02 01 01 03 25 68 74 74 70 73 3A 2F 2F 6F 70 65 6E 61 70 69 2E 61 6C 69 70 61 79 2E 63 6F 6D 2F 67 61 74 65 77 61 79 2E 64 6F 04 00 05 00 06 82 01 C6 7B 22 61 6C 69 70 61 79 5F 74 72 61 64 65 5F 71 75 65 72 79 5F 72 65 73 70 6F 6E 73 65 22 3A 7B 22 63 6F 64 65 22 3A 22 34 30 30 30 34 22 2C 22 6D 73 67 22 3A 22 42 75 73 69 6E 65 73 73 20 46 61 69 6C 65 64 22 2C 22 73 75 62 5F 63 6F 64 65 22 3A 22 41 43 51 2E 54 52 41 44 45 5F 4E 4F 54 5F 45 58 49 53 54 22 2C 22 73 75 62 5F 6D 73 67 22 3A 22 BD BB D2 D7 B2 BB B4 E6 D4 DA 22 2C 22 62 75 79 65 72 5F 70 61 79 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 69 6E 76 6F 69 63 65 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 22 3A 22 31 37 30 38 32 32 30 30 30 30 38 34 37 37 31 33 30 38 30 30 30 30 30 31 30 33 39 33 38 34 22 2C 22 70 6F 69 6E 74 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 2C 22 72 65 63 65 69 70 74 5F 61 6D 6F 75 6E 74 22 3A 22 30 2E 30 30 22 7D 2C 22 73 69 67 6E 22 3A 22 72 52 58 71 59 48 58 64 44 52 42 75 4E 37 74 2B 2F 33 61 61 77 53 6A 67 59 54 58 68 77 48 41 48 45 65 30 75 58 55 76 4B 61 63 43 56 67 6E 69 74 70 37 2F 78 72 76 62 50 4D 51 65 34 39 72 79 74 4A 66 44 2B 35 43 46 50 50 38 55 70 52 73 52 37 55 76 4D 76 61 51 62 65 37 53 4B 6E 5A 34 34 48 4E 71 52 59 44 52 4B 63 59 6B 45 2F 59 76 5A 45 34 7A 57 75 76 6C 32 45 68 45 6C 46 33 49 6F 56 45 6C 2F 6A 39 65 44 64 64 54 6B 76 36 30 2B 6A 7A 41 62 75 53 4C 61 35 41 77 71 6B 35 2F 54 7A 78 72 55 46 4A 2B 75 2B 55 4A 30 3D 22 7D 0A 02 30 30 0B 00 0C 01 00 0D 01 03'
// var c = '00 00 00 01 01 3C 3F 78 6D 6C 20 76 65 72 73 69 6F 6E 3D 22 31 2E 30 22 20 65 6E 63 6F 64 69 6E 67 3D 22 75 74 66 2D 38 22 3F 3E 3C 72 65 73 70 6F 6E 73 65 3E 3C 68 65 61 64 3E 3C 74 72 61 6E 73 54 79 70 65 3E 30 31 30 31 3C 2F 74 72 61 6E 73 54 79 70 65 3E 3C 74 65 72 6D 69 6E 61 6C 56 65 72 3E 37 32 41 31 3C 2F 74 65 72 6D 69 6E 61 6C 56 65 72 3E 3C 64 61 74 65 54 69 6D 65 3E 32 30 31 37 30 38 32 32 30 38 32 34 30 33 3C 2F 64 61 74 65 54 69 6D 65 3E 3C 72 65 73 70 6F 6E 73 65 43 6F 64 65 3E 30 30 3C 2F 72 65 73 70 6F 6E 73 65 43 6F 64 65 3E 3C 72 65 73 70 6F 6E 73 65 44 65 73 63 3E E4 BA A4 E6 98 93 E6 88 90 E5 8A 9F 3C 2F 72 65 73 70 6F 6E 73 65 44 65 73 63 3E 3C 2F 68 65 61 64 3E 3C 62 6F 64 79 3E 3C 6D 65 72 63 68 61 6E 74 4E 6F 3E 31 30 30 30 30 30 30 30 30 30 30 36 37 36 37 3C 2F 6D 65 72 63 68 61 6E 74 4E 6F 3E 3C 74 65 72 6D 69 6E 61 6C 4E 6F 3E 31 30 30 30 31 35 30 31 3C 2F 74 65 72 6D 69 6E 61 6C 4E 6F 3E 3C 79 73 4D 65 72 4E 6F 3E 34 39 31 34 35 30 35 35 34 31 31 30 30 30 31 3C 2F 79 73 4D 65 72 4E 6F 3E 3C 79 73 54 65 6D 4E 6F 3E 34 35 30 35 30 30 35 38 3C 2F 79 73 54 65 6D 4E 6F 3E 3C 74 72 61 63 65 4E 6F 3E 30 31 31 38 34 35 3C 2F 74 72 61 63 65 4E 6F 3E 3C 62 61 74 63 68 4E 6F 3E 30 30 30 30 30 31 3C 2F 62 61 74 63 68 4E 6F 3E 3C 6F 72 64 65 72 4E 6F 3E 31 37 30 38 32 32 30 30 30 30 38 34 36 30 34 32 39 34 30 30 30 30 30 31 30 31 31 38 34 35 3C 2F 6F 72 64 65 72 4E 6F 3E 3C 7A 66 62 54 72 61 64 65 4E 6F 3E 32 30 31 37 30 38 32 32 32 31 30 30 31 30 30 34 38 34 30 32 33 39 32 36 34 30 35 35 3C 2F 7A 66 62 54 72 61 64 65 4E 6F 3E 3C 74 69 6D 65 45 6E 64 3E 32 30 31 37 30 38 32 32 30 38 32 34 30 35 3C 2F 74 69 6D 65 45 6E 64 3E 3C 62 75 79 65 72 55 73 65 72 49 44 3E 32 30 38 38 38 30 32 34 38 33 36 31 34 38 34 38 3C 2F 62 75 79 65 72 55 73 65 72 49 44 3E 3C 62 75 79 65 72 49 6F 67 6F 6E 49 44 3E 7A 34 30 2A 2A 2A 40 31 32 36 2E 63 6F 6D 3C 2F 62 75 79 65 72 49 6F 67 6F 6E 49 44 3E 3C 61 6D 6F 75 6E 74 3E 30 30 30 30 30 30 30 30 31 30 32 30 3C 2F 61 6D 6F 75 6E 74 3E 3C 72 65 63 65 69 70 74 41 6D 6F 75 6E 74 3E 30 30 30 30 30 30 30 30 31 30 32 30 3C 2F 72 65 63 65 69 70 74 41 6D 6F 75 6E 74 3E 3C 66 75 6E 64 42 69 6C 6C 4C 69 73 74 3E 3C 66 75 6E 64 43 68 61 6E 6E 65 6C 3E 41 4C 49 50 41 59 41 43 43 4F 55 4E 54 3C 2F 66 75 6E 64 43 68 61 6E 6E 65 6C 3E 3C 61 6D 6F 75 6E 74 3E 30 30 30 30 30 30 30 30 31 30 32 30 3C 2F 61 6D 6F 75 6E 74 3E 3C 2F 66 75 6E 64 42 69 6C 6C 4C 69 73 74 3E 3C 2F 62 6F 64 79 3E 3C 6D 61 63 3E 46 46 46 46 46 46 46 46 46 46 46 46 46 46 46 46 3C 2F 6D 61 63 3E 3C 2F 72 65 73 70 6F 6E 73 65 3E 0A '
// var c = 'app_id=2017041906824462&biz_content=%7B%22out_trade_no%22%3A%22170822000084604293000001061451%22%7D&charset=utf-8&format=json&method=alipay.trade.query&sign_type=RSA&timestamp=2017-08-22+03%3A34%3A45&version=1.0&sign=RP41zbjnJMBTERv2yqxzRq26E6rXa9kCuK413lRSVydmBBLHQTTEdCzW6d6vmTERqNlMjV2ubFd0Lti3E8kQzPflgXAkIPnH1%2FY12xbCSZvDgB68vzkmmDIM9YVU64VoT%2B6qyQeArXA1g4GXp%2BQOSc3a56Ber5AfgzcM5E9BpMc%3D'
// var c = '03 3F 02 01 01 03 25 68 74 74 70 73 3A 2F 2F 6F 70 65 6E 61 70 69 2E 61 6C 69 70 61 79 2E 63 6F 6D 2F 67 61 74 65 77 61 79 2E 64 6F 04 00 05 00 06 82 02 FF 61 70 70 5F 69 64 3D 32 30 31 35 30 35 31 31 30 30 30 36 39 31 37 30 26 62 69 7A 5F 63 6F 6E 74 65 6E 74 3D 25 37 42 25 32 32 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 25 32 32 25 33 41 25 32 32 31 37 30 34 33 30 30 30 30 30 35 30 36 33 31 31 37 39 30 30 30 30 30 31 30 30 30 30 33 32 25 32 32 25 32 43 25 32 32 73 63 65 6E 65 25 32 32 25 33 41 25 32 32 62 61 72 5F 63 6F 64 65 25 32 32 25 32 43 25 32 32 61 75 74 68 5F 63 6F 64 65 25 32 32 25 33 41 25 32 32 32 38 30 31 32 37 35 36 38 30 34 31 36 30 33 38 39 31 25 32 32 25 32 43 25 32 32 74 6F 74 61 6C 5F 61 6D 6F 75 6E 74 25 32 32 25 33 41 25 32 32 30 2E 30 31 25 32 32 25 32 43 25 32 32 75 6E 64 69 73 63 6F 75 6E 74 61 62 6C 65 5F 61 6D 6F 75 6E 74 25 32 32 25 33 41 25 32 32 30 2E 30 31 25 32 32 25 32 43 25 32 32 73 75 62 6A 65 63 74 25 32 32 25 33 41 25 32 32 25 44 36 25 41 37 25 42 38 25 42 36 25 42 31 25 41 36 25 42 31 25 42 42 25 43 39 25 41 38 25 32 32 25 32 43 25 32 32 73 74 6F 72 65 5F 69 64 25 32 32 25 33 41 25 32 32 25 32 32 25 32 43 25 32 32 73 75 62 5F 6D 65 72 63 68 61 6E 74 25 32 32 25 33 41 25 37 42 25 32 32 6D 65 72 63 68 61 6E 74 5F 69 64 25 32 32 25 33 41 25 32 32 31 37 31 35 31 39 38 36 32 38 38 25 32 32 25 37 44 25 32 43 25 32 32 65 78 74 65 6E 64 5F 70 61 72 61 6D 73 25 32 32 25 33 41 25 37 42 25 32 32 73 79 73 5F 73 65 72 76 69 63 65 5F 70 72 6F 76 69 64 65 72 5F 69 64 25 32 32 25 33 41 25 32 32 25 32 32 25 37 44 25 37 44 26 63 68 61 72 73 65 74 3D 75 74 66 2D 38 26 66 6F 72 6D 61 74 3D 6A 73 6F 6E 26 6D 65 74 68 6F 64 3D 61 6C 69 70 61 79 2E 74 72 61 64 65 2E 70 61 79 26 73 69 67 6E 5F 74 79 70 65 3D 52 53 41 26 74 69 6D 65 73 74 61 6D 70 3D 32 30 31 37 2D 30 34 2D 33 30 2B 31 34 25 33 41 31 30 25 33 41 31 35 26 76 65 72 73 69 6F 6E 3D 31 2E 30 26 73 69 67 6E 3D 54 35 31 49 7A 79 43 6B 4C 37 32 43 25 32 46 25 32 42 52 6F 62 63 72 51 55 6C 68 54 67 6A 56 65 44 4A 35 46 25 32 42 7A 79 70 56 79 5A 54 55 31 42 43 37 67 70 54 67 51 53 74 54 61 62 50 5A 4A 50 52 35 4E 41 4B 72 53 47 54 51 30 78 67 41 72 57 4A 46 48 49 77 39 56 41 45 33 49 62 4B 79 55 68 31 64 64 67 62 30 6A 66 36 4C 5A 39 52 54 48 4B 56 59 42 51 58 4C 57 45 4E 56 38 6F 53 58 6B 30 64 4A 70 78 50 4F 54 6E 4A 78 4F 6A 47 64 46 72 38 5A 7A 44 76 4E 25 32 42 52 74 4E 35 41 77 76 53 75 5A 4E 4A 4A 71 64 4C 56 42 75 63 52 65 6B 68 38 25 33 44 08 00 09 00 0A 00 0B 00 0C 01 00 0D 01 03'
// var c = '02 94 02 01 01 03 2E 68 74 74 70 73 3A 2F 2F 61 70 69 2E 6D 63 68 2E 77 65 69 78 69 6E 2E 71 71 2E 63 6F 6D 2F 70 61 79 2F 75 6E 69 66 69 65 64 6F 72 64 65 72 04 00 05 00 06 82 02 4B 3C 78 6D 6C 3E 3C 61 70 70 69 64 3E 77 78 62 35 62 30 39 35 35 61 61 37 62 61 32 37 35 65 3C 2F 61 70 70 69 64 3E 3C 6D 63 68 5F 69 64 3E 31 33 33 38 36 38 33 35 30 31 3C 2F 6D 63 68 5F 69 64 3E 3C 73 75 62 5F 61 70 70 69 64 3E 3C 2F 73 75 62 5F 61 70 70 69 64 3E 3C 73 75 62 5F 6D 63 68 5F 69 64 3E 32 39 31 34 33 37 37 33 3C 2F 73 75 62 5F 6D 63 68 5F 69 64 3E 3C 6E 6F 6E 63 65 5F 73 74 72 3E 31 30 30 30 30 30 30 30 30 30 30 36 37 35 36 30 32 38 37 32 34 37 32 32 38 33 37 35 32 30 3C 2F 6E 6F 6E 63 65 5F 73 74 72 3E 3C 62 6F 64 79 3E E5 8C 97 E6 B5 B7 E5 B8 82 E6 B5 B7 E5 9F 8E E5 8C BA E6 B4 BE E6 8D B7 E5 AE BE E9 A6 86 3C 2F 62 6F 64 79 3E 3C 64 65 74 61 69 6C 3E 3C 2F 64 65 74 61 69 6C 3E 3C 61 74 74 61 63 68 3E 3C 2F 61 74 74 61 63 68 3E 3C 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 3E 31 37 30 38 32 32 30 30 30 30 38 34 36 30 34 32 39 33 30 30 30 30 30 31 30 36 31 34 36 38 3C 2F 6F 75 74 5F 74 72 61 64 65 5F 6E 6F 3E 3C 74 6F 74 61 6C 5F 66 65 65 3E 35 37 30 30 3C 2F 74 6F 74 61 6C 5F 66 65 65 3E 3C 73 70 62 69 6C 6C 5F 63 72 65 61 74 65 5F 69 70 3E 31 39 32 2E 31 36 38 2E 31 2E 34 34 3C 2F 73 70 62 69 6C 6C 5F 63 72 65 61 74 65 5F 69 70 3E 3C 6E 6F 74 69 66 79 5F 75 72 6C 3E 77 77 77 2E 62 61 69 64 75 2E 63 6F 6D 3C 2F 6E 6F 74 69 66 79 5F 75 72 6C 3E 3C 74 72 61 64 65 5F 74 79 70 65 3E 4E 41 54 49 56 45 3C 2F 74 72 61 64 65 5F 74 79 70 65 3E 3C 70 72 6F 64 75 63 74 5F 69 64 3E 31 30 30 30 30 30 30 30 30 30 30 36 37 35 36 3C 2F 70 72 6F 64 75 63 74 5F 69 64 3E 3C 6C 69 6D 69 74 5F 70 61 79 3E 3C 2F 6C 69 6D 69 74 5F 70 61 79 3E 3C 6F 70 65 6E 69 64 3E 3C 2F 6F 70 65 6E 69 64 3E 3C 73 69 67 6E 3E 36 31 46 42 37 39 45 43 42 43 42 42 33 36 46 31 31 34 31 39 35 43 34 46 41 36 42 38 30 42 39 44 3C 2F 73 69 67 6E 3E 3C 2F 78 6D 6C 3E 0A 08 00 09 00 0A 00 0B 00 0C 01 00 0D 01 04'


function start (message){
  let index = message.indexOf("06 82")
  let index2 = message.substr(index+12)
  let arr = index2.split(' ')
  let buf = Buffer.from(arr.map(x => parseInt(x,16)))
  let result = iconv.decode(buf, 'gbk')
  console.log(result)

  if( result.split('&').length>1 && result.split('&').every(v => v.split('=').length > 1)){
    console.log(result)
    // let result2 = param.start(result)
    //再引入param模块方法并执行，再返回结果
    return result
  }else{
    return false
  }
}

if(start(c)){
  console.log("right")
}else{
  console.log("wrong")
}

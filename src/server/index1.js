const http = require('https');

function spider() {
    for (i = 0; i < 9; i++) {
        //i为某个周期参数
        http.get('https://www.baidu.com/', function (res) {
            console.log(`当前i:${i}`);
            console.log(`状态码${res.statusCode}`);
        })
        console.log(i);        
    }
}

spider()
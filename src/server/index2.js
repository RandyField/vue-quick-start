const http = require('https');

function spider() {
    for (i = 0; i < 9; i++) {
        //闭包
        //匿名函数+立即执行
        (function (i) {
            http.get('https://www.baidu.com/', function (res) {
                console.log(`当前i:${i}`);
                console.log(`状态码${res.statusCode}`);
            })
        })(i)
    }
}

spider()
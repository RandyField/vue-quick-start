const http = require('https');

function getData(i) {
    http.get('https://www.baidu.com/', function (res) {
        console.log(`当前i:${i}`);
        console.log(res.statusCode);
    })
}

function spider() {
    for (i = 0; i < 9; i++) {
        getData(i)
    }
}

spider()
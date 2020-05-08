const http = require('https');

let array = Array();
let promiseArray = []
let map=new Map();

console.log(array.length);
console.log(array);
spider();

Promise.all(promiseArray).then(function(){
    console.log(array.length);
    console.log(array);  
    console.log(map);  
})

function getData(i) {
    return new Promise((resolve,reject) => {
        http.get('https://www.baidu.com/', function (res) {
            console.log(`当前i:${i}`);
            console.log(res.statusCode);
            array.push(i);
            map.set(i,res.statusCode)
            resolve();
        })
    })
}

function spider() {
    console.log('开始循环创建promiseArray');
    for (i = 0; i < 9; i++) {
        promiseArray.push(getData(i))
    }
    console.log('结束循环创建promiseArray');
}
/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-26 17:34:38
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-26 17:42:53
 */
// 协议要一致
const http = require('http');
let server = http.createServer((request, response) =>{
    let url = request.url;
    response.write(url)
    response.end();
})
//localhost 可以省略
server.listen('8090','localhost',(error)=>{
    console.log('http://localhost:8090');
})
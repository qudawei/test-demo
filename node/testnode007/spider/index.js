const http = require('http');
const cheerio = require('cheerio')
let url = 'http://www.ifeng.com/'
http.get(url,res=>{
    let str = "";
    res.on("data", chunk=>{
        str += chunk;
    })
    res.on("end",()=>{
        console.log("执行结束");
    })
})
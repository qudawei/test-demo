const http = require('http');
const url = require('url')
const fs = require('fs')
const mime = require('./mime.json') //自动转换为对象 readfile会读取成json
const path = require('path');
const server = http.createServer((req, res)=>{
    let urlObj = url.parse(req.url);
    if(urlObj.pathname == '/' || urlObj.pathname == '/index'){
        let indexData = fs.createReadStream('./views/index.html')
        indexData.pipe(res);
    }else if(urlObj.pathname == '/product'){
        let proData = fs.readFileSync('./views/product.html')
        res.end(proData);
    }else {
        console.log(urlObj.pathname);
        if(urlObj.pathname != '/favicon.ico'){
            let ext = path.extname(urlObj.pathname);
            res.setHeader('content-type',mime[ext])
            let data = fs.readFileSync('./views'+urlObj.pathname)
            res.end(data);
        }
    }
});
server.listen(3000);
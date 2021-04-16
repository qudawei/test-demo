const fs = require('fs');//文件操作

//文件读取
fs.readFile('1.txt','utf-8',(error,data)=>{
    if(error){
        return console.log("读取失败");
    }
    console.log(data);
})
//文件操作 加sync是同步操作，不加是异步操作
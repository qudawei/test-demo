//文件读取和写入都是异步的有回调
const fs = require('fs');//文件操作
//增删改查
//1.文件操作 2.目录操作（文件夹）
//a追加 w写入 r读取 
fs.writeFile('1.txt','我写入的文字11',{flag:'a'},(error)=>{
    if(error){
        return console.log("写入失败");
    }
    console.log("写入成功");
})
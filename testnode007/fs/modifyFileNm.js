const fs = require('fs');//文件操作
fs.rename('1.txt','2.txt',(error)=>{
    if(error){
        return console.log(error);
    }   
    console.log("修改成功")
})
//删除 unlink
//复制 copyFile 先读取再写入
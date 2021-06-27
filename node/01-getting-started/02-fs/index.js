/*
 * @Description: 文件读写 nodejs用在自己机器上 安全 可访问本地文件
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-26 17:08:40
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-26 17:27:04
 */
const fs = require('fs');
fs.writeFile('./log.txt','hello',(error,data)=>{
    console.log('error', error);
    if(error){
        console.log('error', error);
    }else{
        console.log('success');
    }
})
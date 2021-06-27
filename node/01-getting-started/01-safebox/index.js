/*
 * @Description: nodejs 没有跨域的概念
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-26 14:59:31
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-26 17:05:57
 */
const https = require('https')
https.get('https://www.bilibili.com/video/BV1ca4y1n7u3?from=search&seid=14931741258184219719',(res) =>{
    let str = '';
    res.on('data',(chunk)=>{
        str += chunk;
    });
    res.on('end', ()=>{
        console.log('str', str);
    })
})
function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}
let result = add(10, 18);

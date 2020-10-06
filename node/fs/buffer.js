const { fstat } = require("fs");

const fs = require('fs')
let buffer = Buffer.alloc(65*1024);
// fs.writeFile('65k', buffer, error=>{
//     if(error){
//         return console.log(error);
//     }
//     console.log('success')
// })
// let res = fs.readFileSync('65k')
// console.log(res);
let res = fs.createReadStream('65k');
res.on('data', chunk=>{
    console.log(chunk);
})
var fs = require('fs')
var path=require('path');
 
var filePath=path.resolve(__dirname+'/html');  
//readdir方法读取文件名
//readFile方法读取文件内容
//writeFile改写文件内容
console.log('__dirname', __dirname)
fs.readdir(filePath, 'utf8', function (err,data) {
 
	data.forEach(function(item, index) {
        debugger
		console.log(item)
		fs.readFile('./html/'+item,'utf8',function(err,files){
			//console.log(files)
			var result = files.replace(/要替换的内容/g, '替换后的内容');
 
			fs.writeFile('./html/'+item, result, 'utf8', function (err) {
			     if (err) return console.log(err);
			});
 
		})
	});
 
});
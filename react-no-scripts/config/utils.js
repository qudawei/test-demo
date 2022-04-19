/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-04-26 17:21:30
 * @LastEditTime: 2021-04-26 17:34:12
 * @LastEditors: David Qu
 */
const path = require("path")

exports.resolve = function (dir) {
    return path.resolve(__dirname, dir)
}
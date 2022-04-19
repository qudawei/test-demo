/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-04-26 17:13:45
 * @LastEditTime: 2021-04-26 18:00:31
 * @LastEditors: David Qu
 */
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const utils = require("./utils")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(baseWebpackConfig, {
    // 指定构建环境  
    mode: "development",
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'), // html模板的生成路径
            template: 'index.html',//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
        })
    ],
    // 开发环境本地启动的服务配置
    devServer: {
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true,
        contentBase: false, // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        compress: true, // 一切服务都启用gzip 压缩：
        port: "8081", // 指定段靠谱
        publicPath: "/", // 访问资源加前缀
        proxy: {
            // 接口请求代理
        },

    }
});

<!--
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2022-03-05 11:28:35
 * @LastEditors: David Qu
 * @LastEditTime: 2022-04-05 16:50:26
-->
阅读源码之前：
1.先学会熟悉使用~，对这个有感觉
2.vue使用
    2.1 编写页面模板
    2.2 html、 template、单文件（<template />）
    2.3 创建vue实例 提供：data watcher methods coputed 等等 
    2.4 页面挂载（手动挂载mount）


一、数据驱动
1.vue 执行流程
    a 获取模板
        {{}} v-for 等等的转变
    b 利用vue构造函数来解析{{}} v-for等
    c 将解析后的标签替换原来的标签
    vue功用：利用提供数据和页面模板生成一个新的html标签，替换到页面中
2.问题
    a 为什么id可以直接输出
    b 我们应该如何实现
3.虚拟dom
    3.1 怎么将真正的dom转为虚拟dom
    3.2 怎么将虚拟dom转为真正的dom
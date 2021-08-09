/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-08-02 11:02:36
 * @LastEditors: David Qu
 * @LastEditTime: 2021-08-06 10:51:05
 */
export default class hashRouter {
    constructor() {
        this.routes = {}        // 记录路径标识符对应的cb
        this.currentUrl = ''    // 记录hash只为方便执行cb
        // 当整个页面及所有依赖资源如样式表和图片都已完成加载时，将触发load事件。
        window.addEventListener('load', () => this.render())
        window.addEventListener('hashchange', () => this.render())
    }
    /* 初始化 */
    static init() {
        window.Router = new hashRouter()
    }
    /* 记录path对应cb */
    route(path, cb) {
        this.routes[path] = cb || function () { }
    }
    /* 入栈当前hash，执行cb */
    render() {
        this.currentUrl = location.hash.slice(1) || '/'
        this.routes[this.currentUrl]()
    }
}
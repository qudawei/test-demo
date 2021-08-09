/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-08-02 15:24:22
 * @LastEditors: David Qu
 * @LastEditTime: 2021-08-06 10:49:10
 */
export default class historyRouter {
  constructor(path) {
    this.routes = {}        // 记录路径标识符对应的cb
    window.addEventListener('popstate', e => {
      const path = e.state && e.state.path
      this.routes[path] && this.routes[path]()
    })
  }
  
  /* 初始化 */
  static init() {
    window.Router = new historyRouter(location.pathname)
  }
  
  /* 注册路由和回调 */
  route(path, cb) {
    this.routes[path] = cb || function() {}
  }
  
  /* 跳转路由，并触发路由对应回调 */
  go(path) {
    history.pushState({ path }, null, path)
    this.routes[path] && this.routes[path]()
  }
}
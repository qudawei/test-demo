/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-07-30 17:15:42
 * @LastEditors: David Qu
 * @LastEditTime: 2021-07-30 17:16:59
 */
export class BaseRouter {
    // list 表示路由表
    constructor(list) {
      this.list = list;
    }
    // 页面渲染函数
    render(state) {
      let ele = this.list.find(ele => ele.path === state);
      ele = ele ? ele : this.list.find(ele => ele.path === '*');
      ELEMENT.innerText = ele.component;
    }
}
  
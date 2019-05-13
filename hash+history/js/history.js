
import { BaseRouter } from './base.js';

export class HistoryRouter extends BaseRouter {
  constructor(list) {
    super(list);
    this.handler();
    // 监听历史栈变化，变化时候重新渲染页面
    window.addEventListener('popstate', (e) => {
      this.handler();
    });
  }
  // 渲染
  handler() {
    const state = this.getState();
    this.render(state);
  }
  // 获取路由路径
  getState() {
    const path = window.location.pathname;
    return path ? path : '/';
  }
  /*
   pushState方法实现压入功能，PushState不会触发popstate事件，
   因此我们需要手动调用handler函数
  */
  push(path) {
    window.history.pushState(null, null, path);
    this.handler();
  }
  /*
   pushState方法实现替换功能，replaceState不会触发popstate事件，
   因此我们需要手动调用handler函数
  */
  replace(path) {
    window.history.replaceState(null, null, path);
    this.handler();
  }
  go(num) {
    window.history.go(num);
  }
};
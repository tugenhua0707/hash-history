
import { BaseRouter } from './base.js';

// hash路由继承了BaseRouter
export class HashRouter extends BaseRouter {
  constructor(list) {
    super(list);
    this.handler();
    // 监听hash事件变化，并且重新渲染页面
    window.addEventListener('hashchange', (e) => {
      this.handler();
    });
  }
  // 渲染
  handler() {
    const state = this.getState();
    this.render(state);
  }
  // 获取当前的hash
  getState() {
    const hash = window.location.hash;
    return hash ? hash.slice(1) : '/';
  }
  // 获取完整的url
  getUrl(path) {
    const href = window.location.href;
    const index = href.indexOf('#');
    const base = index > -1 ? href.slice(0, index) : href;
    return `${base}#${path}`;
  }
  // hash值改变的话，实现压入
  push(path) {
    window.location.hash = path;
  }
  // 替换功能
  replace(path) {
    window.location.replace(this.getUrl(path));
  }
  // 模拟history.go 功能，实现前进/后退功能
  go(n) {
    window.history.go(n);
  }
}
webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {


class HistoryRoutes {
  constructor() {
    // 保存对应键和函数
    this.routes = {};

    // 页面加载事件
    window.addEventListener('load', e => {
      const path = e.state && e.state.path;
      this.routes[path] && this.routes[path]();
    }, false);
    // 监听popstate事件
    window.addEventListener('popstate', e => {
      console.log(e);
      const path = e.state && e.state.path;
      this.routes[path] && this.routes[path]();
    });
  }
  route(path, callback) {
    this.routes[path] = callback || function () {};
  }
  init(path) {
    history.replaceState(null, null, path);
    this.routes[path] && this.routes[path]();
  }
  go(path) {
    history.pushState(null, null, path);
    this.routes[path] && this.routes[path]();
  }
}

window.Router = new HistoryRoutes();
console.log(location.pathname);
Router.init(location.pathname);

const body = document.querySelector('body');

const changeColor = function (color) {
  body.style.backgroundColor = color;
};
// 注册函数
Router.route('/', () => {
  changeColor('red');
});
Router.route('/a', () => {
  changeColor('green');
});
Router.route('/b', () => {
  changeColor('#CDDC39');
});

const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
  console.log(e.target);
  if (e.target.tagName === 'A') {
    e.preventDefault();
    Router.go(e.target.getAttribute('href'));
  }
});

/***/ })
],[0]);
//# sourceMappingURL=main.js.map
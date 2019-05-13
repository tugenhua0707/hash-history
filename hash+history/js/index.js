
import { HashRouter } from './hash';
import { HistoryRouter } from './history';
import { ROUTERLIST } from './routerList';

// 路由模式，默认为hash
const MODE = 'history';

class WebRouter {
  constructor({ mode = 'hash', routerList }) {
    this.router = mode === 'hash' ? new HashRouter(routerList) : new HistoryRouter(routerList);
  }
  push(path) {
    // 返回 this.router  因此有 hash或history中的push方法
    this.router.push(path);
  }
  replace(path) {
    this.router.replace(path);
  }
  go(num) {
    this.router.go(num);
  }
}

const webRouter = new WebRouter({
  mode: MODE,
  routerList: ROUTERLIST
});

document.querySelector('.list').addEventListener('click', e => {
  const event = e || window.event;
  event.preventDefault();
  if (event.target.tagName === 'A') {
    const url = event.target.getAttribute('href');
    !url.indexOf('/') ? webRouter.push(url) : webRouter.go(url);
  }
});
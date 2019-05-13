
const ELEMENT = document.querySelector('#app');

export class BaseRouter {
  constructor(list) {
    this.list = list;
  }
  render(state) {
    let ele = this.list.find(ele => ele.path === state);
    ele = ele ? ele : this.list.find(ele => ele.path === '*');
    ELEMENT.innerText = ele.component;
  }
}
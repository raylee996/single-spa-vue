// import('./bootstrap')

import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router'
// import JsCloudComponent from 'base/js-cloud-components'

Vue.config.productionTip = false

// Vue.use(JsCloudComponent)

const router = new Router({
  mode: 'history',
  base: '/gateway',
  routes
})

let instance = null;
function render(props = {}) {
  const { container } = props;

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
if(window.__POWERED_BY_QIANKUN__){ // 如果是qiankun使用到了，则会动态注入路径
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {
  console.log('[vue] gateway app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from base framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}

router.beforeEach((...args) => {
  console.log('args: ', args);
})


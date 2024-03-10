import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router'
import JsCloudComponent from 'base/js-cloud-components'

Vue.config.productionTip = false

Vue.use(JsCloudComponent)

const router = new Router({
  mode: 'history',
  base: '/jifei',
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

export async function bootstrap() {
  console.log('[vue] jifei app bootstraped');
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

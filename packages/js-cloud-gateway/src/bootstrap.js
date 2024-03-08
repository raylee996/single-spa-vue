import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import './public-path'
import JsCloudComponent from 'base/js-cloud-components'

Vue.config.productionTip = false

Vue.use(JsCloudComponent)

const router = new Router({
  mode: 'history',
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes
})

// 与基座进行数据交互
function handleMicroData () {
  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 主动获取基座下发的数据
    console.log('gateway getData:', window.microApp.getData())

    // 监听基座下发的数据变化
    window.microApp.addDataListener((data) => {
      console.log('gateway addDataListener:', data)

      // 当基座下发path时进行跳转
      if (data.path && data.path !== router.currentRoute.path) {
        router.push(data.path)
      }
    })

    // 向基座发送数据
    setTimeout(() => {
      window.microApp.dispatch({ myname: 'gateway' })
    }, 3000)
  }
}

// ----------分割线---umd模式------两种模式任选其一-------------- //
let app = null
// 将渲染操作放入 mount 函数
function mount () {
  app = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')

  console.log('微应用gateway渲染了')

  handleMicroData()
}

// 将卸载操作放入 unmount 函数
function unmount () {
  app.$destroy()
  app.$el.innerHTML = ''
  app = null
  console.log('微应用gateway卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  // 非微前端环境直接渲染
  mount()
}

router.beforeEach((...args) => {
  console.log('args: ', args);
})

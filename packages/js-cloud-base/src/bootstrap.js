import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

let apps = [
  {
    name:'gateway',
    entry:'//localhost:9001',//子应用的地址，这里演示是本地启动的地址。
    container:'#gateway',//子应用的容器节点的选择器（vue一般为app）
    activeRule:'/gateway',//访问子应用的规则，比如：主应用为localhost:8081，那访问该子应用的url应为localhost:8081/subapp
  },
  {
    name:'jifei',
    entry:'//localhost:9002',//子应用的地址，这里演示是本地启动的地址。
    container:'#jifei',//子应用的容器节点的选择器（vue一般为app）
    activeRule:'/jifei',//访问子应用的规则，比如：主应用为localhost:8081，那访问该子应用的url应为localhost:8081/subapp
  }
]

//注册子应用
registerMicroApps(apps);

//启动
start();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

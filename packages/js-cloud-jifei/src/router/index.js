import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    name: 'config',
    path: '/config',
    component: () => import('../views/Config.vue'),
  },
  {
    name: 'tenants',
    path: '/tenants',
    component: () => import('../views/Tenants.vue'),
  },
]

export default routes
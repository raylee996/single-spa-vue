import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
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

export default new Router({
  mode: 'history',
  routes
})
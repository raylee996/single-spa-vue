import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    name: '/',
    path: '/',
    component: () => import('../views/Monitor.vue'),
  },
  {
    name: 'monitor',
    path: '/monitor',
    component: () => import('../views/Monitor.vue'),
  },
  {
    name: 'setting',
    path: '/setting',
    component: () => import('../views/Setting.vue'),
  },
]

export default routes
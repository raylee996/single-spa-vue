import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Layout = () => import('../components/Layout.vue')

const Gateway = () => import('../views/Gateway.vue')

const Jifei = () => import('../views/Jifei.vue')
 
export const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/404',
        component: () => import('../views/NotFound.vue'),
        hidden: true,
      },
    ]
  },
  {
    path: '/gateway',
    name: 'gateway',
    component: Layout,
    children: [
      {
        path: 'monitor',
        name: 'monitor',
        component: Gateway,
      },
      {
        path: 'setting',
        name: 'setting',
        component: Gateway,
      }
    ]
  },
  {
    path: '/jifei',
    name: 'jifei',
    component: Layout,
    children: [
      {
        path: 'config',
        name: 'config',
        component: Jifei,
      },
      {
        path: 'tenants',
        name: 'tenants',
        component: Jifei,
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    component: () => import('../views/NotFound.vue'),
    hidden: true,
  }
]

export default new Router({
  mode: 'history',
  routes,
})
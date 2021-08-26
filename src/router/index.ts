import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../pages/Principal.vue'
import Empresa from '../pages/Empresa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'principal',
    component: Principal
  },
  {
    path: '/empresa',
    name: 'empresa',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Empresa.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router

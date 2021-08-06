import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../pages/Principal.vue'
import Empresa from '../pages/Empresa.vue'
import Manutencao from '../pages/Manutencao.vue'
import Vendas from '../pages/Vendas.vue'
import Desenvolvimento from '../pages/Desenvolvimento.vue'

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
  // },
  // {
  //   path: '/manutencao',
  //   name: 'manutencao',
  //   component: () => import(/* webpackChunkName: "about" */ '../pages/Manutencao.vue')
  // },
  // {
  //   path: '/vendas',
  //   name: 'vendas',
  //   component: () => import(/* webpackChunkName: "about" */ '../pages/Vendas.vue')
  // },
  // {
  //   path: '/desenvolvimento',
  //   name: 'desenvolvimento',
  //   component: () => import(/* webpackChunkName: "about" */ '../pages/Desenvolvimento.vue')
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

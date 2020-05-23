import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddIntern',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddIntern.vue')
  },
  {
    path: '/edit',
    name: 'EditIntern',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditIntern.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

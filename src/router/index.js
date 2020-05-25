import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

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
    component: () => import(/* webpackChunkName: "AddIntern" */ '../views/AddIntern/AddIntern.vue')
  },
  {
    path: '/edit/:internId',
    name: 'EditIntern',
    component: () => import(/* webpackChunkName: "EditIntern" */ '../views/EditIntern/EditIntern.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store/store.js'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Beerbets from '../views/Beerbets.vue'
import CreateBeerbet from '../views/CreateBeerbet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/beerbets',
    name: 'Beerbets',
    component: Beerbets
  },
  {
    path: '/create-beerbet',
    name: 'CreateBeerbet',
    component: CreateBeerbet
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.user.id) next({ name: 'Login' })
  else next()
})

export default router

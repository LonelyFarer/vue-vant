import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import(/* webpackChunkName: "index" */ './views/index.vue')
const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue')
const Cart = () => import(/* webpackChunkName: "cart" */ './views/cart.vue')
const About = () => import(/* webpackChunkName: "about" */ './views/About.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

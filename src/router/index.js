import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Infracoes  from '../views/Infracoes.vue'
 
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/infracoes',
    name: 'Infracoes',
    component: Infracoes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Arr from '../components/Arr.vue'
Vue.use(VueRouter,)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component:()=>import('../views/Main.vue'),
    children:[
      {
        path:'/abb',
        name:'Abb',
        component:()=>import('../components/Abb.vue'),
      },
    ]
  },

  {
    path:'/Arr',
    name:'Arr',
    component: Arr
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

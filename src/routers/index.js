import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        component: () => import('../components/index') 
    },
  
  ]
  
  
export const router = new VueRouter({
    routes
})
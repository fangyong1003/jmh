import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Main from '@/components/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
    ]
})

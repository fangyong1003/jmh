import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Main from '@/pages/main'
import Mainson from '@/pages/main/mainson'
import Jobdetail from '@/pages/main/jobdetail'
import Mine from '@/pages/mine'
import About from '@/pages/mine/about'
import Learn from '@/pages/learn'
import Learnson from '@/pages/learn/learnson'
import NotFound from '@/pages/404'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        title: '404'
      }
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        title: '军梦汇'
      }
    },
    {
      path: '/main/mainson',
      name: 'mainson',
      component:Mainson,
      meta: {
        title: '加入军梦汇'
      }
    },
    {
      path: '/main/jobdetail',
      name: 'jobdetail',
      component:Jobdetail,
      meta: {
        title: '职位详情'
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn,
      meta: {
        title: '军才学院'
      }
    },
    {
      path: '/learnson',
      name: 'learnson',
      component: Learnson,
      meta: {
        title: '课程详情'
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: {
        title: '军梦汇'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于军梦汇'
      }
    },
    ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
    if (to.path.startsWith('/login')) {
      window.localStorage.removeItem('access-user')
      next()
    } else {
      // let user = window.sessionStorage.getItem('userName');
      // if (!user) {
      //   next({path: '/login'})
      // } else {
      //   next()
      // }
      next();
    }
  }

});

export default router

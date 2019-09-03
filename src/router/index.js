import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/individual/main'
import Mainson from '@/pages/main/mainson'
import Jobdetail from '@/pages/main/jobdetail'
import Mine from '@/pages/individual/mine'
import About from '@/pages/mine/about'
import Learn from '@/pages/individual/learn'
import Learnson from '@/pages/learn/learnson'
import Bind from '@/pages/individual/bind'
import NotFound from '@/pages/404'

import Reg from '@/pages/company/register'
import Cmain from '@/pages/company/main'
import Cmine from '@/pages/company/mine'
import Clearn from '@/pages/company/learn'
import Joblist from '@/pages/company/joblist'
import Addjob from '@/pages/company/addjob'
import Editjob from '@/pages/company/editjob'
import { empower } from '@/utils/getWechatUserInfo.js'
Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/individual/bind',
      name: 'bind',
      component: Bind,
      meta: {
        title: '登录',
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
      path: '/main/jobdetail/:id',
      name: 'jobdetail',
      component:Jobdetail,
      meta: {
        title: '职位详情',require:true
      }
    },
    {
      path: '/individual/learn',
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
        title: '课程详情',require:true
      }
    },
    {
      path: '/individual/mine',
      name: 'mine',
      component: Mine,
      meta: {
        title: '军梦汇',require:true
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
    {
      path: '/company/joblist',
      name: 'joblist',
      component: Joblist,
      meta: {
        title: '已发布的招聘'
      }
    },
    {
      path: '/company/addjob',
      name: 'addjob',
      component: Addjob,
      meta: {
        title: '发布招聘信息'
      }
    },
    {
      path: '/company/editjob/:id',
      name: 'editjob',
      component: Editjob,
      meta: {
        title: '编辑招聘信息'
      }
    },
    {
      path: '/company/main',
      name: 'main',
      component: Cmain,
      meta: {
        title: '军梦汇'
      }
    },
    {
      path: '/company/mine',
      name: 'mine',
      component: Cmine,
      meta: {
        title: '军梦汇'
      }
    },
    {
      path: '/company/learn',
      name: 'learn',
      component: Clearn,
      meta: {
        title: '军才学院'
      }
    },
    {
      path: '/company/reg',
      name: 'res',
      component: Reg,
      meta: {
        title: '会员企业登录'
      }
    },
    ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
    if (to.meta.require) {
      empower();
      next()
    } else {
      next();
    }
  }

});

export default router

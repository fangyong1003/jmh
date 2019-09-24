// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from "./router";
import App from './App'
import store from "./store/index";
import { WechatPlugin,AjaxPlugin  } from 'vux'
import  { ToastPlugin,AlertPlugin  } from 'vux'
// import { empower } from '@/utils/getWechatUserInfo.js'
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
import './assets/style.css';
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
// FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.filter('formatDateTime', function (value) {
  if(value){
      let d = new Date(parseInt(value)),
          year = d.getFullYear(),
          month = (d.getMonth()+1) <10 ? '0' + (d.getMonth()+1) : '' + (d.getMonth()+1),
          day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate(),
          hour = d.getHours() <10 ? '0' + d.getHours() : '' + d.getHours(),
          minutes = d.getMinutes() <10 ? '0' + d.getMinutes() : '' + d.getMinutes(),
          seconds = d.getSeconds() <10 ? '0' + d.getSeconds() : '' + d.getSeconds();
      return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
  }
});
// empower();
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

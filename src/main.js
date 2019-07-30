// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from "./router";
import App from './App'
import store from "./store";
import { WechatPlugin,AjaxPlugin  } from 'vux'
import './assets/style.css';
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
console.log(Vue.wechat)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

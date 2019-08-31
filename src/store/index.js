import Vue from 'vue'
import Vuex  from 'vuex'
Vue.use(Vuex)

const state = {
  aa:false,
  userInfo:{},
  company:{},
}

const mutations = {
  //获取用户信息
  getUserInfo(state,userInfo){
    state.userInfo = userInfo;
  },
  //获取公司信息
  getCpInfo(state,userInfo){
    state.userInfo = userInfo;
  },
  //获取menu
  getMenu(state,menu){
    state.menu = menu;
  },
}

const actions = {
  userInfoAction(context,userInfo){
      context.commit('getUserInfo',userInfo);
  },
  cpInfoAction(context,company){
      context.commit('getCpInfo',company);
  },
  menuAction(context,menu){
      context.commit('getMenu',menu);
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})

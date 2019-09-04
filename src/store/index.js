import Vue from 'vue'
import Vuex  from 'vuex'
Vue.use(Vuex)

const state = {
  aa:false,
  userInfo:{},
  company:{},
  phone:'',
}

const mutations = {
  //获取用户信息
  getUserInfo(state,userInfo){
    state.userInfo = userInfo;
  },
  //获取公司信息
  getCpInfo(state,userInfo){
    state.company = userInfo;
  },
  //获取menu
  getPhone(state,phone){
    state.phone = phone;
  },
}

const actions = {
  userInfoAction(context,userInfo){
      context.commit('getUserInfo',userInfo);
  },
  cpInfoAction(context,company){
      context.commit('getCpInfo',company);
  },
  phoneAction(context,phone){
      context.commit('getPhone',phone);
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})

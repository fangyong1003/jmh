import * as API from './'

export default {
  // 获取微信授权地址
  oauth (params) {
    return API.GET('/jmh/weChat/getWechatUserInfo', params)
  },
  code(params){
    return API.GET('/jmh/weChat/sms',params)
  },
  bindPhone(params){
    return API.GET('/jmh/weChat/bindPhone',params)
  },
  checkcode(params){
    return  API.GET('/jmh/weChat/check',params)
  },
  login(params){
    return  API.GET('/jmh/weChat/login',params)
  },
  addjob(params){
    return API.GET('/jmh/weChat/newJobProvidedInfo',params);
  }
}

import * as API from './'

export default {
  // 获取微信授权地址
  oauth (params) {
    return API.get('/jmh/weChat/getWechatUserInfo', params)
  },

  // 用户登录
  login (params) {
    return API.get('/apps/login', params)
  },

  // 获取JSSDK
  jssdk (params) {
    return API.get('/apps/jssdk', params)
  }
}

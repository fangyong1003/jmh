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
    return  API.POST('/jmh/weChat/login',params)
  },



  addjob(params){
    return API.GET('/jmh/weChat/newJobProvidedInfo',params);
  },
  updateJobProvidedInfo(params){
    return API.GET('/jmh/weChat/updateJobProvidedInfo',params);
  },
  getJobPvdByJobId(params){
    return API.GET('/jmh/weChat/getJobPvdByJobId',params);
  },
  getAllJobPvdByCompId(params){
    return API.GET('/jmh/weChat/getAllJobPvdByCompId',params);
  },
  deleteJobProvidedInfo(params){
    return API.GET('/jmh/weChat/deleteJobProvidedInfo',params);
  },

//获取求职信息
  getAllJobWantedInfo(params){
    return API.GET('jmh/weChat/getAllJobWantedInfo',params);
  },
  //获取职位列表
  getAllJobPvdInfo(params){
    return API.GET('/jmh/weChat/getAllJobPvdInfo',params);
  },

}

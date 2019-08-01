import * as API from './'
//基地址
export default {
  logins:params =>{
    return API.GET(`/risk/1/operator/login`,params)
  },
  getmortgageslists:params =>{//动产抵押信息
  return API.POST(`/risk/plat/1/mortgage/get`,params)
},
}

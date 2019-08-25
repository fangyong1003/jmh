import Vue from 'vue'
import { getToken, getKey, setKey } from '@/utils/token';
import Wxmp from '../api/wxmp'
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
     if(r!=null)return  unescape(r[2]); return null;
}

//微信用户授权
let empower = () =>{
  console.log(location.href);
  var code=GetQueryString("code");
  if(code !=null && code.toString().length>1 || getKey('_wechat_id')){
    console.log(location.href);
    if(getKey('_wechat_id')){return}
    Wxmp.oauth({code: code}).then((res)=>{
      setKey('_wechat_id',res.data.openid);
      setKey('_wechat_headimgurl',res.data.headimgurl);
      setKey('_wechat_nickname',res.data.nickname);
      setKey('_wechat_sex',res.data.sex);
    }).catch(e => {
      console.log(e.message);
    });
  }else{
    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa18ab49a349b53d0&redirect_uri=" +location.href+ "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
  }
}
export { empower }


//10003	redirect_uri域名与后台配置不一致
//10004	此公众号被封禁
//10005	此公众号并没有这些scope的权限
//10006	必须关注此测试号
//10009	操作太频繁了，请稍后重试
//10010	scope不能为空
//10011	redirect_uri不能为空
//10012	appid不能为空
//10013	state不能为空
//10015	公众号未授权第三方平台，请检查授权状态
//10016	不支持微信开放平台的Appid，请使用公众号Appid

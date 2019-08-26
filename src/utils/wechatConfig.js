// import { WechatPlugin, AjaxPlugin } from 'vux'
// Vue.use(WechatPlugin)
// Vue.use(AjaxPlugin)

export function get_wechat_config (that) {
  let postData = {
    url: location.href.split('#')[0]
  };
  Wxmp.oauth({url: postData}).then((res)=>{
    this.$wechat.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: res.data.appId, // 必填，公众号的唯一标识
      timestamp: res.data.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.data.noncestr, // 必填，生成签名的随机串
      signature: res.data.signature,// 必填，签名
      jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
    })
  }).catch(e => {
    console.log(e.message);
  });
}

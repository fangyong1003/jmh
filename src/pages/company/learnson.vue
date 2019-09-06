<template>
  <div >
       <card >
           <div slot="header" class="card-title1">
              <div>
                 <x-button type="primary" mini>顶尖导师</x-button>
                 <x-button type="primary" mini>特训课程</x-button>
              </div>
              <div class="red">限时优惠，免费学习</div>
           </div>
      </card>
      <card >
          <div slot="header" class="card-title">
            <div class="bars"></div>
            课程介绍
          </div>
          <p slot="content" class="card-padding">
            1、免费成为军梦汇VIP会员，拥有企业专属账号密码，独立操作发布信息，提供退役军人招生招聘专属通道；</br>
            2、颁发军才联盟成员牌匾证书，提供参加双拥个人、单位评选专属通道；</br>
            3、免费提供军营专场招聘会入场券3张（360元/场）,免费参加军才联盟公益活动，并提供爱心企业专属展示宣传机会（公益广告）；</br>
            4、免费提供拥军企业家赞助的价值1万元高端礼品；</br>
            5、免费或优惠参加联盟组织的人力资源、行政管理、HR知识讲座培训课，价值1960元/次（免费1次，其余的5-8折优惠）；</br>
            6、免费或优惠参加联盟组织的顶级营销专家（路长全）、等专家教授的企业家总裁培训班，价值3960元/次，（免费1次，其余的5-8折优惠）；</br>
            7、免费提供企业招生招聘信息发布300条（10元/条）,下载简历500份（20元/条）；</br>
            8、免费提供企业产品在联盟商城上的销售展示通道；</br>
            9、优先提供企业家《特别助理》专属人才定制培训服务。</br>
          </p>
     </card>
  <div class="bottomtite">浙江军梦网络科技有限公司    浙ICP备16020692号-1</div>
  </div>
</template>

<script>
import API from '@/api/api_jmh'
import {Group,Tab, TabItem,Card,XInput,XButton,PopupRadio } from 'vux'
export default {
  components: {
    Group,Tab, TabItem,Card,XInput,XButton,PopupRadio
  },
  data () {
    return {
      index:1,
      title:'军才联盟成员专享权利',
      value:'',
      phone:'',
      code:'',
      attitude:'',
      option:[
        {
        key: '1',
        value: '企业联盟'
      }, {
        key: '2',
        value: '导师加盟'
      }, {
        key: '3',
        value: '城市合伙人加盟'
      }
      ],
      codeValue: function(value){
                return {
                    valid: value.length !='',
                    msg: "必填项!"
                }
      }
    }
  },
  methods: {
    onItemClick(obj){
      this.index = obj
    }
  }
}
</script>
<style scoped>
.card-padding{
  padding: 15px 10px;
  font-size:14px;
color:#333333;
}
.card-title{
  font-size:16px;
color:#333333;
padding: 5px 10px;
font-weight: bold
}
.card-title1{
  height: 82px;
  color:#333333;
  padding: 5px 10px;
  font-weight: bold
}
.bars{
  float: left;
  width: 2px;
  height: 20px;
  margin-top: 3px;
  margin-right: 10px;
  background:#1e6eb7
}
.bottomtite{
  font-size:12px;
color:#666666;
margin: 20px 0;
text-align: center;
}
.red{
  font-size:18px;
color:#e70001;
line-height: 30px;
}
.weui-btn_primary{
  background: #006600!important;
  padding: 0 0.6rem;
  font-size: 12px;
  margin-top: 10px;
}
</style>

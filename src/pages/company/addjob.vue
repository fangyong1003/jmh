<template>
  <div style="height:100%" >
    <card >
        <div slot="header" class="card-title">
          <div class="bars"></div>
          填写企业信息
        </div>
        <p slot="content" class="card-padding">
          <group>
            <x-input title="企业名称" placeholder="请输入您的姓名" v-model="value" ></x-input>
            <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="right"></x-address>
            <popup-radio title="所属行业" :options="option" v-model="attitude"></popup-radio>
          </group>
        </p>
   </card>
  </div>
</template>

<script>
import {Card,Group,,XInput,XButton,PopupRadio,ChinaAddressData,XAddress} from 'vux'
export default {
  components: {
    Card,Group,XInput,XButton,PopupRadio,ChinaAddressData,XAddress
  },
  data () {
    return {
      value:'',
      attitude:'A',
      addressValue: ['浙江省', '杭州市', '滨江区'],
      addressData: ChinaAddressData,
      option:[
        {key:'A',value:'农、林、牧、渔业'},
        {key:'B',value:'采矿业'},
        {key:'C',value:'制造业'},
        {key:'D',value:'电力、燃气及水的生产和供应业'},
        {key:'E',value:'建筑业'},
        {key:'F',value:'交通运输、仓储和邮政业'},
        {key:'G',value:'信息传输、计算机服务和软件业'},
        {key:'H',value:'批发和零售业'},
        {key:'I',value:'住宿和餐饮业'},
        {key:'J',value:'金融业'},
        {key:'K',value:'房地产业'},
        {key:'L',value:'租赁和商务服务业'},
        {key:'M',value:'科学研究、技术服务和地质勘查业'},
        {key:'N',value:'水利、环境和公共设施管理业'},
        {key:'O',value:'居民服务和其他服务业'},
      ],
    }
  },
  methods: {

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
</style>

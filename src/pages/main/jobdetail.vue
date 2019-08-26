<template>
  <div >
    <card :header="电梯工程师">
         <div slot="content" class="card-demo-flex card-demo-content01">
           <div class="vux-1px-r">
             <span>1130</span>
             <br/>
           </div>
           <div class="vux-1px-r">
             <span>15</span>
             <br/>
           </div>
           <div class="vux-1px-r">
             <span>0</span>
             <br/>
           </div>
           <div>
             <span>88</span>
             <br/>
           </div>
         </div>
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

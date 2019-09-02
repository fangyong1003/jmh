<template>
  <div >
    <card >
         <div slot="content" class="card-demo-flex card-demo-content01 bo">
           <div class="name">
             <span>{{column.jobName}}</span>
           </div>
           <div class="pay">
             <span>{{column.salaryRange}}元/月</span>
           </div>
           <div class="requ">
             <span>{{column.location}} | {{column.jobExpValue}} | {{column.eduValue}}</span>
           </div>
           <div class="company">{{column.companyName}}</div>
           <div class="some">{{column.compSizeValue}} | {{column.industryValue}}</div>
         </div>
       </card>
       <card >
           <div slot="header" class="card-title">
             <div class="bars"></div>
             职位描述
           </div>
           <p slot="content" class="card-padding">
             {{column.jobDesc}}
           </p>
      </card>
  <div class="bottomtite">浙江军梦网络科技有限公司    浙ICP备16020692号-1</div>
  </div>
</template>

<script>
import API from '@/api/wxmp'
import {Group,Tab, TabItem,Card,XInput,XButton,PopupRadio } from 'vux'
export default {
  components: {
    Group,Tab, TabItem,Card,XInput,XButton,PopupRadio
  },
  data () {
    return {
      column:{},
    }
  },
  created(){
    this.getDetail();
  },
  methods: {
    getDetail(){
      API.getJobPvdByJobId({jobId:this.$route.params.id}).then((res)=>{
        if(res.statusCode='0'){
          this.column = res.jobProvidedInfo;
        }else{
          this.$vux.toast.show({
            type:'cancel;',
            text:res.message
          });
        }
      })
    },
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
.name{
  font-size:18px;
color:#333333;
}
.bo{
  padding: 15px 10px;
  line-height: 30px;
}
.pay{
  font-size:16px;
color:#f2191a;
}
.requ{
  font-size:14px;
color:#1e6eb7;
}
.company{
  border-top: 1px solid #e5e5e5;
  font-size:14px;
color:#333333;
margin-top: 10px;
padding-top: 10px;
}
.some{
  font-size:12px;
color:#666666;
}
</style>

<template>
  <div >
       <card >
           <div slot="header" class="card-title1">
              <div>
                <div class="jobName">
                   <span class="col">{{column.wantedName}} </span>
                   <span class="col" v-if="column.male=='M'">男</span>
                   <span class="col" v-else>女</span>
                   <span class="col">{{column.age}}岁</span>
                   <span class="col">{{column.eduValue}}</span>
                </div>
                <div class="parbox">
                 <div class="par" v-if="column.advantage1">{{column.advantage1}}</div>
                 <div class="par" v-if="column.advantage2">{{column.advantage2}}</div>
                </div>
              </div>
           </div>
      </card>
      <card >
          <div slot="header" class="card-title">
            <div class="bars"></div>
            求职期望
          </div>
          <div slot="content" class="card-padding">
            <div class="tit">
              {{column.wantedJob1}}、{{column.wantedJob2}}
              <span style="float:right;color:#f2191a;">{{column.wantedSalary}}</span>
            </div>
            <div style="font-size:14px;color:#666666;">{{column.wantedPlace}}</div>
          </div>
     </card>
     <card >
         <div slot="header" class="card-title">
           <div class="bars"></div>
           服役经历
         </div>
         <div slot="content" class="card-padding">
           <div class="tit">{{column.serveExp}}</div>
         </div>
    </card>
    <card >
        <div slot="header" class="card-title">
          <div class="bars"></div>
          个人介绍
        </div>
        <div slot="content" class="card-padding">
          {{column.introduce}}
        </div>
   </card>
  </div>
</template>

<script>
import API from '@/api/wxmp'
import {Group,Tab, TabItem,Card,XInput,XButton,PopupRadio } from 'vux'
export default {
  components: {
    Group,Tab, TabItem,Card,XInput,XButton,PopupRadio
  },
  created(){
    this.getDetail();
  },
  data () {
    return {
      column:{},
    }
  },
  methods: {
    getDetail(){
      API.getJobByJobId({wantedId:this.$route.params.id}).then((res)=>{
        if(res.statusCode='0'){
          this.column = res.jobWantedInfo;
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
  color:#333333;
  padding: 15px;
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
.tit{
  font-weight: bold;
}
.jobName{
  font-size:16px;
color:#333333;
line-height: 30px;
}
.col{
  margin-right: 10px;
}
.parbox{
  height: 25px;
}
.par{
  float: left;
  padding: 0 10px;
  font-size: 12px;color:#1e6eb7;
  border: 1px solid #1e6eb7;
  margin-right:10px;
}
</style>

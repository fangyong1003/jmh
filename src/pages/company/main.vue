<template>
  <div >
    <swiper :auto="true" :list="demo" v-model="index" @on-index-change="onIndexChange"></swiper>
    <group style="margin-top:-20px;" >
        <cell is-link link="/main/mainson">
          <img slot="icon" width="25" src="@/assets/img/people.png">
          <span slot="value" style="font-size:12px;color:#e70001">企业合作、导师入驻、城市合伙人</span>
          <span slot="title" style="font-size:14px;">加入军梦会</span>
        </cell>
      </group>
      <div style="padding-bottom:70px;">

       <flexbox :gutter="0" style="background:#fff;margin-top:10px" @click="job">
          <flexbox-item :span="2/3">
            <div class="flex-demo">
             <div >
               <div class="jobName">
                 <span>电梯工程师傅</span>
               </div>
               <div class="pay">
                 <span>6000-8000/月</span>
               </div>
               <div class="condition">
                 <span>浙江磐安 | 经验不限 | 学历不限</span>
               </div>
               <div class="company">
                 <span>浙江奥的斯电梯潘安分公司</span>
               </div>
             </div>
          </div>
        </flexbox-item>
          <flexbox-item>
            <div class="pp">
              <img src="@/assets/img/homes.png">
            </div>
        </flexbox-item>
        </flexbox>


      </div>
     <tabbar class="bar">
        <tabbar-item selected>
            <img slot="icon" src="@/assets/img/homes.png">
            <span slot="label">招聘</span>
        </tabbar-item>
        <tabbar-item  link="/company/learn">
           <img slot="icon" src="@/assets/img/learn.png">
           <span slot="label">学习</span>
         </tabbar-item>
         <tabbar-item  link="/company/mine">
           <img slot="icon" src="@/assets/img/mine.png">
           <span slot="label">我的</span>
         </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import API from '@/api/api_jmh'
import {Swiper,Tabbar, TabbarItem,Group,Cell,Card,Flexbox, FlexboxItem  } from 'vux'
export default {
  components: {
    Swiper,
    Tabbar,
   TabbarItem,
   Group,
   Cell,
   Card,
   Flexbox, FlexboxItem
  },
  data () {
    return {
      index:0,
      demo:[{
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        title: '送你一辆车'
      }]
    }
  },
  methods: {
    onIndexChange(index){
       this.index = index
    },
    show3(){

    },
    tojoin(){
        this.$router.push('')
    },
    job(){
        this.$router.push('/jobdetail')
    }
  }
}
</script>
<style scoped>
.bar{
  position: fixed;bottom:0px
}

.weui-cells{
  margin-top: 0;
}
.pp{
  text-align: center;
}
.flex-demo{
  padding: 10px ;
}
.jobName{
  font-size:16px;
color:#333333;
font-weight:bold;
}
.pay{
  font-size:14px;
color:#f2191a;
}
.condition,.company{
  font-size:12px;
color:#666666;
}
</style>

<template>
  <div >
    <swiper :auto="true" :list="demo" v-model="index" @on-index-change="onIndexChange"></swiper>
    <div style="padding-bottom:70px;">
      <div class="column">
          <div class="imgbox" >
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" >
          </div>
          <div class="content">
            <span class="ptitle">军人专属 免费学习</span>
            <div class="btn">
              立即免费学习
            </div>
          </div>
      </div>

      <div class="column">
          <div class="imgbox" >
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" >
          </div>
          <div class="content">
            <span class="ptitle">军人专属 免费学习</span>
            <div class="btn">
              立即免费学习
            </div>
          </div>
      </div>
      <div class="column">
          <div class="imgbox" >
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" >
          </div>
          <div class="content">
            <span class="ptitle">军人专属 免费学习</span>
            <div class="btn">
              立即免费学习
            </div>
          </div>
      </div>
      <div class="column">
          <div class="imgbox" >
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" >
          </div>
          <div class="content">
            <span class="ptitle">军人专属 免费学习</span>
            <div class="btn">
              立即免费学习
            </div>
          </div>
      </div>





    </div>
     <tabbar  class="bar">
      <tabbar-item link="/">
          <img slot="icon" src="../assets/img/home.png">
          <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item selected  link="/learn">
         <img slot="icon" src="../assets/img/learns.png">
         <span slot="label">学习</span>
       </tabbar-item>
       <tabbar-item  link="/mine">
         <img slot="icon" src="../assets/img/mine.png">
         <span slot="label">我的</span>
       </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import API from '@/api/api_jmh'
import {Swiper,Tabbar, TabbarItem,Card } from 'vux'
export default {
  components: {
    Swiper,
    Tabbar,
   TabbarItem,
   Card
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
    }
  }
}
</script>
<style scoped>
.bar{
  position: fixed;bottom:0px
}

.column{
  margin: 10px 0 ;
  padding: 0 10px;
  background: #fbf9fe;
  -moz-box-shadow:0 2px 2px 5px #eee; -webkit-box-shadow:0 2px 2px 5px #eee; box-shadow:0 2px 2px 5px #eee;
}
.content{
  height: 56px;
  line-height: 56px;
  background: #fff;
  font-size: 14px;
  padding: 0 10px;
}
.ptitle{
  margin-left: 15px;
}
.btn{
  float: right;
  border: 1px solid #d81e06;
  text-align: center;
  line-height: 25px;
  margin-top: 15px;
  padding: 0 10px;
  color: #d81e06;
}
.imgbox{
  height: 120px;
  overflow: hidden;
}
</style>

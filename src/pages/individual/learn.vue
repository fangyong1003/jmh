<template>
  <div >
    <swiper :auto="true" :list="demo" v-model="index" @on-index-change="onIndexChange"></swiper>
    <div style="padding-bottom:70px;">
      <div v-for="(column,index) in list" class="column" @click="go(column.id)">
          <div class="imgbox" >
            <img :src="column.url" style="width:100%;display:block">
            <div class="tagbox">
              <div v-for="(col,indexs) in column.tag" class="tag">{{col}}</div>
            </div>
          </div>
          <div class="content">
            <span class="ptitle">军人专属 免费学习</span>
            <div class="btn" >
              立即免费学习
            </div>
          </div>
      </div>
    </div>
     <tabbar  class="bar">
      <tabbar-item link="/">
          <img slot="icon" src="@/assets/img/home.png">
          <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item selected  link="/individual/learn">
         <img slot="icon" src="@/assets/img/learns.png">
         <span slot="label">学习</span>
       </tabbar-item>
       <tabbar-item  link="/individual/mine">
         <img slot="icon" src="@/assets/img/mine.png">
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
        url: 'http://www.junmenghui.com:8081',
        img: require('@/assets/img/banner3.png'),
        title: ''
      },{
        url: 'http://www.junmenghui.com:8081/institute.html',
        img: require('@/assets/img/banner2.png'),
        title: ''
      },{
        url: 'http://www.junmenghui.com:8081/union.html',
        img: require('@/assets/img/banner.png'),
        title: ''
      }],
      list:[
        {
          id:'1',
          url:require('@/assets/img/c1.png'),
          tag:['高薪','好就业'],
        },
        {
          id:'2',
          url:require('@/assets/img/c2.png'),
          tag:['高薪','好就业'],
        },
        {
          id:'3',
          url:require('@/assets/img/c3.png'),
          tag:['高薪','好就业'],
        },
        {
          id:'4',
          url:require('@/assets/img/c4.png'),
          tag:['退伍军人100%就业'],
        },
      ],
    }
  },
  methods: {
    onIndexChange(index){
       this.index = index;
    },
    go(id){
      this.$router.push(`/learnson/${id}`);
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
  position: relative;
}
.tagbox{
  position: absolute;
  top:10px;
  right: 10px;
}
.tag{
  font-size:11px;
  color:#006600;
  background: #fff;
  float: right;
  padding: 2px 5px;
  margin-right: 5px;
  }
</style>

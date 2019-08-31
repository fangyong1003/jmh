<template>
  <div >
        <div class="vantabox">
          <img :src="headerUrl" class="vanta">
          <span class="name">{{name}}</span>
        </div>
        <group>
          <cell  is-link link="/individual/bind">
            <p slot = "title">手机号</p>
           <img slot="icon" width="20" style="display:block;margin-right:5px;" src="@/assets/img/phone.png">
           <p slot = "value" style="font-size:12px;color:#e70001;">绑定手机号，免费获得高薪机会</p>
         </cell>
        </group>
        <group>
          <cell  is-link @click.native="tel">
              <p slot = "title">联系军梦汇</p>
             <img slot="icon" width="20" style="display:block;margin-right:5px;" src="@/assets/img/tel.png">
             <p slot style="font-size:16px;color:#1e6eb7;">400-8277-616</p>
           </cell>
           <cell  is-link link="/about">
               <p slot = "title">关于军梦会</p>
               <img slot="icon" width="20" style="display:block;margin-right:5px;" src="@/assets/img/detail.png">
            </cell>
        </group>
     <tabbar  class="bar">
        <tabbar-item  link="/">
            <img slot="icon" src="@/assets/img/home.png">
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item  link="/individual/learn">
           <img slot="icon" src="@/assets/img/learn.png">
           <span slot="label">学习</span>
         </tabbar-item>
         <tabbar-item selected link="/individual/mine">
           <img slot="icon" src="@/assets/img/mines.png">
           <span slot="label">我的</span>
         </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import API from '@/api/api_jmh'
import {Swiper,Tabbar, TabbarItem,Group,Cell  } from 'vux'
import {setKey,getKey} from '@/utils/token';
export default {
  components: {
    Swiper,
    Tabbar,
   TabbarItem,
   Group,
   Cell
  },
  data () {
    return {
      headerUrl:'',
      name:'',
    }
  },
  created:function(){
    this.headerUrl = getKey('_wechat_headimgurl')||this.$store.state.userInfo.headimgurl;
    this.name = getKey('_wechat_nickname')||this.$store.state.userInfo.nickname;
  },
  methods: {
    tel(){
       window.location.href="tell://4008277616"
    }
  }
}
</script>
<style scoped>
.vantabox{
  height: 96px;
  background: #fff;
  line-height: 96px;
}
.name{
  font-size:16px;
color:#333333;
}
.vanta{
  width:65px;
  height: 65px;
  border-radius: 100%;
  margin: 15px;
  float: left;
}
.bar{
  position: fixed;bottom:0px
}
.weui-bar__item_on{
  color:#1e6eb7
}
</style>

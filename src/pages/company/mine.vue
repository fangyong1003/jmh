<template>
  <div >
        <div class="vantabox">
          <!-- <img :src="$store.state.company.officialImage" class="vanta"> -->
          <img src="@/assets/img/vip.png" class="vanta">
          <div class="name">
            <div>{{$store.state.company.companyName}}</div>
            <img style="margin-top:10px" src="@/assets/img/tag.png">
          </div>
        </div>
        <div class="colbox">
          <div class="colson" @click="go(1)">
            <img style="margin-top:18px;width:36px;" src="@/assets/img/addjob.png">
            <div>发布招聘信息</div>
          </div>
          <div class="colson" @click="go(2)">
            <img style="margin-top:18px;width:36px;height:36px;" src="@/assets/img/column.png">
            <div>已发布招聘</div>
          </div>
        </div>
        <group>
          <cell  is-link @click.native="tel">
              <p slot = "title">联系军梦汇</p>
             <img slot="icon" width="20" style="display:block;margin-right:5px;" src="@/assets/img/tel.png">
             <p slot style="font-size:16px;color:#1e6eb7;">400-8277-616</p>
           </cell>
           <cell  is-link link="/about">
               <p slot = "title">关于军梦汇</p>
               <img slot="icon" width="20" style="display:block;margin-right:5px;" src="@/assets/img/detail.png">
            </cell>
        </group>
     <tabbar  class="bar">
        <tabbar-item  link="/company/main">
            <img slot="icon" src="@/assets/img/getp.png">
            <span slot="label">招聘</span>
        </tabbar-item>
        <tabbar-item  link="/company/learn">
           <img slot="icon" src="@/assets/img/learn.png">
           <span slot="label">学习</span>
         </tabbar-item>
         <tabbar-item selected link="/company/mine">
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

    }
  },
  methods: {
    tel(){
       window.location.href="tell://4008277616"
    },
    go(index){
      if(index==1){
        this.$router.push('/company/addjob');
      }else{
        this.$router.push('/company/joblist');
      }
    }
  }
}
</script>
<style scoped>
.vantabox{
  height: 96px;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
}
.colbox{
  height: 96px;
  background:#fff;
}
.colson{
  width: 50%;
  float: left;
  text-align: center;
}
.name{
  float: left;
  margin-top: 25px;
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

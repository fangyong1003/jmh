<template>
  <div >
      <!-- <scroller :use-pullup="showUp" :pullup-config="upobj" :bounce="isbounce" v-model="scrollerStatus" @on-pullup-loading="onScrollBottom"    style="width:100%" height="-46px" ref="scroller"> -->
    <swiper :auto="true" :list="demo" v-model="index" @on-index-change="onIndexChange"></swiper>
    <group style="margin-top:-20px;" >
        <cell >
          <img slot="icon" width="28" src="@/assets/img/vip.png">
            <span slot="title" style="font-size:17px;margin-left:10px;">尊敬的会员企业，您好</span>
        </cell>
      </group>
      <div style="padding-bottom:70px;">
        <div v-for="(column,index) in list" @click="godetail(column.wantedId)">
           <div  style="background:#fff;margin-top:10px" >
                <div class="flex-demo">
                   <div class="jobName">
                      <span class="col">{{column.wantedName}} </span>
                      <span class="col" v-if="column.male=='M'">男</span>
                      <span class="col" v-else>女</span>
                      <span class="col">{{column.age}}岁</span>
                      <span class="col">{{column.eduValue}}</span>
                   </div>
                   <div class="condition">
                     <span>服役经历：</span>{{column.serveExp}}
                   </div>
                   <div class="condition">
                     <span>期望岗位：</span>{{column.wantedJob1}}、{{column.wantedJob2}}
                   </div>
                   <div class="condition">
                     <span>期望地点：</span>{{column.wantedPlace}}
                   </div>
                   <div class="parbox">
                    <div class="par" v-if="column.advantage1">{{column.advantage1}}</div>
                    <div class="par" v-if="column.advantage2">{{column.advantage2}}</div>
                   </div>
              </div>
            </div>
      </div>
      </div>
    <!-- </scroller> -->
     <tabbar class="bar">
        <tabbar-item selected>
            <img slot="icon" src="@/assets/img/getps.png">
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
import API from '@/api/wxmp'
import {Scroller ,Spinner,LoadMore,Swiper,Tabbar, TabbarItem,Group,Cell,Card,Flexbox, FlexboxItem  } from 'vux'
export default {
  components: {
    Scroller ,Spinner,LoadMore,
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
      scrollerStatus: {
           pullupStatus: 'default'
       },
       upobj: {
           content: '请上拉刷新数据',
           pullUpHeight: 60,
           height: 40,
           autoRefresh: false,
           downContent: '请上拉刷新数据',
           upContent: '请上拉刷新数据',
           loadingContent: '加载中...',
           clsPrefix: 'xs-plugin-pullup-'
       },
       isbounce: false,
       showUp: true,
       onFetching: false,
      index:0,
      pageSize:100,
      currentPage:1,
      list:[],
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
      }]
    }
  },
  created(){
    this.getList();
  },
  methods: {
    onIndexChange(index){
       this.index = index
    },
    onScrollBottom () {
          setTimeout(() => {
              // 上拉获取数据拼接
              this.pullUpGetData()
          }, 2000)
      },
    getList(){
      API.getAllJobWantedInfo({currentPage:this.currentPage,pageSize:this.pageSize}).then((res)=>{
        if (res.statusCode == 0) {
          this.list = res.results;
        }else{
          this.$vux.toast.show({
            type:'cancel;',
            text:res.message
          });
        }
      })
    },

    pullUpGetData (){
        let page = this.currentPage + 1;
        let params ={
          currentPage:page,
          pageSize:this.pageSize
        }
        API.getAllJobWantedInfo(params).then((res)=>{
          if (res.statusCode == 0) {
            this.list = this.list.concat(res.results);
            if (res.results.length < 10) {
           // 没有就显示底线以及禁用上拉
               this.onFetching = true
               this.scrollerStatus.pullupStatus = 'disabled'
           } else {
               // 还有数据就开启上拉，并重置
               this.scrollerStatus.pullupStatus = 'default'
               this.$nextTick(() => {
                   this.$refs.scroller.reset()
               })
           }

          }else{
            this.$vux.toast.show({
              type:'cancel;',
              text:res.message
            });
          }

        })
    },
    godetail(id){
        this.$router.push(`/company/job/${id}`);
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
line-height: 30px;
}
.col{
  margin-right: 10px;
}
.pay{
  font-size:14px;
color:#f2191a;
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
.condition,.company{
  font-size:12px;
color:#666666;
}
</style>

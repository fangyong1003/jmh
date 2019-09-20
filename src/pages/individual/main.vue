<template>
  <div >
    <swiper :auto="true" height="130px" :list="demo" v-model="index" @on-index-change="onIndexChange"></swiper>
    <group style="margin-top:-20px;" >
        <cell is-link link="/main/mainson">
          <img slot="icon" width="25" src="@/assets/img/people.png">
          <span slot="value" style="font-size:12px;color:#e70001">企业合作、导师入驻、城市合伙人</span>
          <span slot="title" style="font-size:14px;">加入军梦汇</span>
        </cell>
      </group>
      <scroller :use-pullup="showUp" :pullup-config="upobj" :bounce="isbounce" v-model="scrollerStatus" @on-pullup-loading="onScrollBottom"    style="width:100%" height="-46px" ref="scroller">
      <div style="padding-bottom:70px;">
        <div v-for="(column,index) in list">
           <flexbox :gutter="0" style="background:#fff;margin-top:10px" @click.native="job(column.jobId)">
              <flexbox-item :span="2/3">
                <div class="flex-demo">
                 <div >
                   <div class="jobName">
                     <span>{{column.jobName}}</span>
                   </div>
                   <div class="pay">
                     <span>{{column.salaryRange}}</span>
                   </div>
                   <div class="condition">
                     <span>{{column.location}} | {{column.jobExpValue}} | {{column.eduValue}}</span>
                   </div>
                   <div class="company">
                     <span>{{column.companyName}}</span>
                   </div>
                 </div>
              </div>
            </flexbox-item>
              <flexbox-item>
                <div class="pp">
                  <img src="@/assets/img/lt.png">
                </div>
            </flexbox-item>
            </flexbox>
          </div>
      </div>
  </scroller>
     <tabbar class="bar">
        <tabbar-item selected>
            <img slot="icon" src="@/assets/img/homes.png">
            <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item  link="/individual/learn">
           <img slot="icon" src="@/assets/img/learn.png">
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
import API from '@/api/wxmp'
import { empower } from '@/utils/getWechatUserInfo.js'
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
      pageSize:20,
      currentPage:1,
      list:[],
      demo:[{
        url: 'http://www.junmenghui.com',
        img: require('@/assets/img/banner3.png'),
        title: ''
      },{
        url: 'http://www.junmenghui.com/institute.html',
        img: require('@/assets/img/banner2.png'),
        title: ''
      },{
        url: 'http://www.junmenghui.com/union.html',
        img: require('@/assets/img/banner.png'),
        title: ''
      }]
    }
  },
  created(){
      // empower();
    this.getList();
  },
  methods: {
    getList(){
      API.getAllJobPvdInfo({currentPage:this.currentPage,pageSize:this.pageSize}).then((res)=>{
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
    onIndexChange(index){
       this.index = index
    },
    job(id){
        this.$router.push(`/main/jobdetail/${id}`)
    },
    onScrollBottom () {
          setTimeout(() => {
              // 上拉获取数据拼接
              this.pullUpGetData()
          }, 2000)
      },
      pullUpGetData (){
          let page = this.currentPage + 1;
          let params ={
            currentPage:page,
            pageSize:this.pageSize
          }
          API.getAllJobPvdInfo(params).then((res)=>{
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

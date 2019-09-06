<template>
  <div >
      <scroller :use-pullup="showUp" :pullup-config="upobj" :bounce="isbounce" v-model="scrollerStatus" @on-pullup-loading="onScrollBottom"    style="width:100%" height="-46px" ref="scroller">
      <div v-if="list.length>0">
          <div class="box" v-for="(column,index) in list">
            <div class="cline">
              <span class="ctitle">发布时间：</span>{{column.updateTime}}
              <div class="del" @click="del(column.jobId)"><img class="icon" src="@/assets/img/del.png"></div>
              <div class="del" @click="edit(column.jobId)"><img  class="icon" src="@/assets/img/edit.png"></div>
            </div>
            <div class="cline">
              <span class="ctitle">岗位名称：</span>{{column.jobName}}
            </div>
            <div class="cline">
              <span class="ctitle">岗位薪资：</span>{{column.salaryRange}}
            </div>
            <div class="cline">
              <span class="ctitle">岗位要求：</span>{{column.jobExpValue}}    |    {{column.eduValue}}
            </div>
            <div class="cline">
              <span class="ctitle">工作地址：</span>{{column.location}}
            </div>
            <div class="cline">
              <span class="ctitle">岗位描述：</span>
              <a v-show="!column.show" class="detailbtn" @click.native="show(index)">点击查看详情</a>
              <a v-show="column.show" class="detailbtn" @click.native="show(index)">点击收起详情</a>
              <div class="detail" v-show="column.show">{{column.jobDesc}}</div>
            </div>
          </div>

    </div>
    <div class="kong" v-else>
      <img src="@/assets/img/kong.png">
      <div class="kongword">您尚未发布任何招聘信息哦</div>
      <a class="fofa" @click="gofa">去发布招聘</a>
    </div>
      </scroller>
  </div>
</template>

<script>
import API from '@/api/wxmp'
import {Scroller ,Spinner,LoadMore,Group } from 'vux'
export default {
  components: {
    Scroller,Spinner,LoadMore,Group
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
      currentPage:1,
      pageSize:10,
      list:[]
    }
  },
  created(){
    this.getList();
  },
  methods: {
    getList(){
      let params ={
        companyId:this.$store.state.company.companyRoleId,
        currentPage:this.currentPage,
        pageSize:this.pageSize
      }
      API.getAllJobPvdByCompId(params).then((res)=>{
        if (res.statusCode == 0) {
          this.list = res.results;
          for(let i in this.list){
            this.list[i].show = false;
          }
        }else{
          this.$vux.toast.show({
            type:'cancel;',
            text:res.message
          });
        }

      })
    },
    onScrollBottom () {
          setTimeout(() => {
              // 上拉获取数据拼接
              this.pullUpGetData()
          }, 2000)
      },
    show(index){
      this.list[index].show = !this.list[index].show
    },
    del(id){
        API.deleteJobProvidedInfo({jobId:id}).then((res)=>{
          if (res.statusCode == 0) {
            this.getList();
					}else{
						this.$vux.toast.show({
							type:'cancel;',
							text:res.message
						});
					}

        })
    },
    edit(id){
      this.$router.push(`/company/editjob/${id}`);
    },
    gofa(){
      this.$router.push("/company/addjob");
    },
    pullUpGetData (){
        let page = this.currentPage + 1;
        let params ={
          companyId:this.$store.state.company.companyRoleId,
          currentPage:page,
          pageSize:this.pageSize
        }
        API.getAllJobPvdByCompId(params).then((res)=>{
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
.box{
  padding: 10px 15px;
  font-size: 13px;
  background: #fff;
  border-top:1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  margin: 10px 0;
}
.cline{
  line-height: 30px;
  color: #333;
}
.ctitle{
  color: #666;
}
.detailbtn{
  color: #1e6eb7;
  cursor: pointer;
}
.detail{
  font-size: 12px;
}
.del{
  float: right;
  margin: 0 10px;
  color: #1e6eb7;
}
.icon{
  width: 15px;
}
.kong{
  padding-top: 200px;
  text-align: center;
}
.kongword{
  font-size:14px;
color:#666666;
margin-top: 20px;
}
.fofa{
  font-size:16px;
color:#297bc7;
}
</style>

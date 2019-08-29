<template>
  <div style="height:100%" >
      <div v-if="list.length>0">
          <div class="box" v-for="(column,index) in list">
            <div class="cline">
              <span class="ctitle">发布时间：</span>{{column.addTime}}
              <div class="del" @click="del(column.id)"><img class="icon" src="@/assets/img/del.png"></div>
              <div class="del" @click="edit(column.id)"><img  class="icon" src="@/assets/img/edit.png"></div>
            </div>
            <div class="cline">
              <span class="ctitle">岗位名称：</span>{{column.jobName}}
            </div>
            <div class="cline">
              <span class="ctitle">岗位薪资：</span>{{column.pay}}
            </div>
            <div class="cline">
              <span class="ctitle">岗位要求：</span>{{column.experience}}    |    {{column.educational}}
            </div>
            <div class="cline">
              <span class="ctitle">工作地址：</span>{{column.address}}
            </div>
            <div class="cline">
              <span class="ctitle">岗位描述：</span>
              <a v-show="!column.show" class="detailbtn" @click="show(index)">点击查看详情</a>
              <a v-show="column.show" class="detailbtn" @click="show(index)">点击收起详情</a>
              <div class="detail" v-show="column.show">{{column.detail}}</div>
            </div>
          </div>
    </div>
    <div class="kong" v-else>
      <img src="@/assets/img/kong.png">
      <div class="kongword">您尚未发布任何招聘信息哦</div>
      <a class="fofa" @click="gofa">去发布招聘</a>
    </div>
  </div>
</template>

<script>
import API from '@/api/api_jmh'
export default {
  data () {
    return {
      list:[{
        id:1,
        addTime: '2019-08-22',
        jobName:'电梯工程师',
        pay:'6000-8000/月',
        experience:'经验不限',
        educational:'学历不限',
        address:'金华市兰溪市',
        detail:'这个岗位是这样的吱吱吱吱吱吱吱吱吱吱吱赞赞赞赞赞赞吱吱吱吱',
        show:false
      }]
    }
  },
  methods: {
    show(index){
      this.list[index].show = !this.list[index].show
    },
    del(id){

    },
    edit(id){

    },
    gofa(){
      this.$router.push("/company/addjob");
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
  margin-top: 200px;
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

<template>
  <div style="height:100%" >
    <card >
        <div slot="header" class="card-title">
          <div class="bars"></div>
          填写企业信息
        </div>
        <p slot="content" class="card-padding">
          <group>
            <x-input title="企业名称" readonly v-model="value" ></x-input>
            <popup-radio title="企业规模" :options="optionh" v-model="compSizeKey"></popup-radio>
            <popup-radio title="所属行业" :options="option" v-model="industryKey"></popup-radio>
          </group>
        </p>
   </card>
   <card >
       <div slot="header" class="card-title">
         <div class="bars"></div>
         填写岗位信息
       </div>
       <p slot="content" class="card-padding">
         <group>
           <x-input title="岗位名称" placeholder="请填写岗位名称" v-model="jobname" ></x-input>
           <x-input title="薪资（月薪）" placeholder="请填写薪资" v-model="money" ></x-input>
           <x-address title="工作地址" v-model="addressValue" raw-value :list="addressData" @on-shadow-change="onShadowChange" value-text-align="right"></x-address>
           <popup-radio title="经验要求" :options="options" v-model="exp"></popup-radio>
           <popup-radio title="学历要求" :options="optione" v-model="educational"></popup-radio>
         </group>
       </p>
  </card>
  <card >
      <div slot="header" class="card-title">
        <div class="bars"></div>
        填写岗位描述
      </div>
      <p slot="content" class="card-padding">
        <group>
         <x-textarea :placeholder="place" autosize v-model="detail"></x-textarea>
       </group>
      </p>
 </card>
 <div style="margin:30px;">
    <x-button plain @click.native="submit">确认发布</x-button>
  </div>
  </div>
</template>

<script>
import API from '@/api/wxmp'
import {Card,Group,XInput,XButton,PopupRadio,ChinaAddressData,XAddress,XTextarea } from 'vux'
export default {
  components: {
    Card,Group,XInput,XButton,PopupRadio,ChinaAddressData,XAddress,XTextarea
  },
  data () {
    return {
      value:'',
      jobname:'',
      money:'',
      exp:'',
      educational:'',
      addressValue: [],
      address:'',
      detail:'',
      industryKey:'',
      compSizeKey:'',
      addressData: ChinaAddressData,
      place:'请输入岗位的具体描述，您可以输入岗位的职责要求、岗位的福利待遇，完整的岗位描述将有助于你的招聘，请认真填写，字数不限。',
      option:[
        {key:'A',value:'农、林、牧、渔业'},
        {key:'B',value:'采矿业'},
        {key:'C',value:'制造业'},
        {key:'D',value:'电力、燃气及水的生产和供应业'},
        {key:'E',value:'建筑业'},
        {key:'F',value:'交通运输、仓储和邮政业'},
        {key:'G',value:'信息传输、计算机服务和软件业'},
        {key:'H',value:'批发和零售业'},
        {key:'I',value:'住宿和餐饮业'},
        {key:'J',value:'金融业'},
        {key:'K',value:'房地产业'},
        {key:'L',value:'租赁和商务服务业'},
        {key:'M',value:'科学研究、技术服务和地质勘查业'},
        {key:'N',value:'水利、环境和公共设施管理业'},
        {key:'O',value:'居民服务和其他服务业'},
      ],
      options:[
        {key:'A',value:'经验不限'},
        {key:'B',value:'3年以下'},
        {key:'C',value:'3-5年'},
        {key:'D',value:'5-10年'},
        {key:'E',value:'10年以上'},
      ],
      optione:[
        {key:'A',value:'学历不限'},
        {key:'B',value:'初中'},
        {key:'C',value:'中专/高中'},
        {key:'D',value:'专科'},
        {key:'E',value:'本科'},
        {key:'F',value:'硕士研究生'},
      ],
      optionh:[
        {key:'A',value:'少于15人'},
        {key:'B',value:'15~50人'},
        {key:'C',value:'150~500人'},
        {key:'D',value:'500人~2000人'},
        {key:'E',value:'2000人以上'},
      ],
    }
  },
  created(){
    this.getList();
  },
  methods: {
    getList(){
      API.getJobPvdByJobId({jobId:this.$route.params.id}).then((res)=>{
        if (res.statusCode == 0) {
          this.value = res.jobProvidedInfo.companyName;
          this.jobname=res.jobProvidedInfo.jobName;
          this.money=res.jobProvidedInfo.salaryRange;
          this.exp=res.jobProvidedInfo.jobExpKey;
          this.educational=res.jobProvidedInfo.eduKey;
          this.detail=res.jobProvidedInfo.jobDesc;
          this.industryKey=res.jobProvidedInfo.industryKey;
          this.compSizeKey=res.jobProvidedInfo.compSizeKey;
          if(res.jobProvidedInfo.location.length>0){
              this.addressValue = res.jobProvidedInfo.location.split(',');
          }
        }else{
          this.$vux.toast.show({
            type:'cancel;',
            text:res.message
          });
        }
      })
    },
    submit(){
      let params ={
        jobId:this.$route.params.id,
        jobName:this.jobname,
        salaryRange:this.money,
        location:this.address,
        companyId:this.$store.state.company.companyRoleId,
        companyName:this.$store.state.company.companyName,
        jobDesc:this.detail,
        eduKey:this.educational,
        industryKey:this.industryKey,
        compSizeKey:this.compSizeKey,
        jobExpKey:this.exp,
      }
      API.updateJobProvidedInfo(params).then((res)=>{
        if (res.statusCode == 0) {
          this.$vux.toast.show({
            type:'success;',
            text:'添加成功！'
          });
          this.$router.push("/company/joblist");
        }else{
          this.$vux.toast.show({
            type:'cancel;',
            text:res.message
          });
        }
      })
    },
    onShadowChange(ids,names) {
      this.address =names[0]+names[1]+names[2];
    },
  }
}
</script>
<style scoped>
.card-padding{
  padding: 0px 10px;
  font-size:14px;
color:#333333;
}
.card-title{
  font-size:16px;
color:#333333;
padding: 5px 10px;
font-weight: bold
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
</style>

<template>
  <div >
    <swiper :auto="true" :list="demo" v-model="indexs"></swiper>
    <tab>
     <tab-item selected @on-item-click="onItemClick(1)">企业加盟</tab-item>
     <tab-item @on-item-click="onItemClick(2)">导师加盟</tab-item>
     <tab-item @on-item-click="onItemClick(3)">城市合伙人加盟</tab-item>
   </tab>
   <div v-if="index=='1'" >
     <card >
         <p slot="content" class="card-padding">军才联盟由杭职院、军梦汇、达内集团以及其他社会贤达发起构成。 是连接军才学院与社会的中枢纽带，其使命在于推动军才学院与社会资源良性互动合作广纳社会资源推进学院创建与发展。军才联盟秉承公开、透明的原则，承诺以最完善的信息披露制度，确保捐款最大化、最有效使用。创建国家为之骄傲、军人为之自豪的一流军才学院，为经济建设贡献军人力量，是所有爱国拥军志士梦想。</p>
    </card>
    <card >
        <div slot="header" class="card-title">
          <div class="bars"></div>
          军才联盟成员专享权利
        </div>
        <p slot="content" class="card-padding">
          1、免费成为军梦汇VIP会员，拥有企业专属账号密码，独立操作发布信息，提供退役军人招生招聘专属通道；</br>
          2、颁发军才联盟成员牌匾证书，提供参加双拥个人、单位评选专属通道；</br>
          3、免费提供军营专场招聘会入场券3张（360元/场）,免费参加军才联盟公益活动，并提供爱心企业专属展示宣传机会（公益广告）；</br>
          4、免费提供拥军企业家赞助的价值1万元高端礼品；</br>
          5、免费或优惠参加联盟组织的人力资源、行政管理、HR知识讲座培训课，价值1960元/次（免费1次，其余的5-8折优惠）；</br>
          6、免费或优惠参加联盟组织的顶级营销专家（路长全）、等专家教授的企业家总裁培训班，价值3960元/次，（免费1次，其余的5-8折优惠）；</br>
          7、免费提供企业招生招聘信息发布300条（10元/条）,下载简历500份（20元/条）；</br>
          8、免费提供企业产品在联盟商城上的销售展示通道；</br>
          9、优先提供企业家《特别助理》专属人才定制培训服务。</br>
        </p>
   </card>

  </div>
  <div v-if="index=='2'" >
    <card >
             <p slot="content" class="card-padding">为进一步激发退役军人学习就业技能兴趣，转变退役军人职业技能固化思维，有针对性地帮助退役军人解决就业、创业发展问题，“军才学院”特成立军才联盟理事会，同时组建导师团，面向全国招募军才导师，为退役军人就业创业的发展提供多维度、多样化的支持和帮助。</p>
        </card>
        <card >
            <div slot="header" class="card-title">
              <div class="bars"></div>
              招募对象
            </div>
            <p slot="content" class="card-padding">
              1、各行业领军人物、专家、学者、教授，优秀企业家均可报名；</br>
              2、具有一定资历或成功经验的优秀复转军人。
            </p>
       </card>
       <card >
           <div slot="header" class="card-title">
             <div class="bars"></div>
             招募条件
           </div>
           <p slot="content" class="card-padding">
             1、责任心强，热衷关爱退役军人就业创业事业者；</br>
             2、时间弹性大，不定期为退役军人进行指导帮扶者；</br>
             3、具备拥军情怀，愿意从事公益事业发展不计回报者；</br>
             4、具有相关导师经验者优先。</br>
           </p>
      </card>
  </div>
  <div v-if="index=='3'" >
    <card >
             <p slot="content" class="card-padding">这个时代相信专注的力量，致力打造创新型退役军人服务平台领军品牌，我们一直在行动！在这个创新商业，改变世界的互联网时代，我们不忍辜负这个时代，特邀请您加入我们，一起见证军梦汇-中国创新型退役军人服务平台领军品牌的成长！成就你的梦想！</p>
        </card>
        <card >
            <div slot="header" class="card-title">
              <div class="bars"></div>
              城市合伙人要求
            </div>
            <p slot="content" class="card-padding">
              1、眼光！对退役军人服务事业要有一定的经营和想法，对新兴实物、互联网平台要有浓厚的兴趣和思维。</br>
              2、人品！诚实守信、品格优良、善于学习、懂得分享；</br>
              3、态度！认同军梦汇的理念和模式，积极推动退役军人就业创业服务事业。</br>
              4、能力！在所属地域有一定政府、企业家等资源，公司法人，具有50万以上的启动资金和办公场地，能够完成当地市场推广业务，退役军人和拥军人士优先。
            </p>
       </card>
       <card >
           <div slot="header" class="card-title">
             <div class="bars"></div>
             城市合伙人的回报
           </div>
           <p slot="content" class="card-padding">
             1、你将会成为最美退役军人、双拥模范的候选人，以及国家政府一系列关于退役军人服务的荣誉。</br>
             2、你将得到军梦汇平台亿级估值的原始股权收益！</br>
             3、你将得到所在地分支机构50%左右的经营收益！</br>
             4、你将得到平台商城全国战友会员的营销渠道，帮助你销售你的产品！</br>
             5、你将得到全国营销专家免费的咨询授课，帮助你企业发展壮大走向上市！</br>
             6、	你将得到全国行业领军人物导师的指导帮扶，帮助你的企业快速成长！</br>
             7、	你将融入一个军才精英、大咖云集、深度互动的人脉圈，提供家庭生活、事业发展、健康医疗、子女读书、子女就业等专属服务通道！</br>
           </p>
      </card>
  </div>
  <card >
        <div slot="header" class="card-title">
          <div class="bars"></div>
          免费获得更多加盟资讯
        </div>
        <p slot="content" style="margin: 0 10px 10px 10px;">
          <group>
            <x-input title="姓  名" placeholder="请输入您的姓名" v-model="value" :is-type="codeValue"></x-input>
            <popup-radio title="意  向" :options="option" v-model="attitude"></popup-radio>
            <x-input title="手机号" placeholder="请输入您的手机号" v-model="mobile" :is-type="codeValue"></x-input>
            <x-input title="发送验证码"  v-model="code" :is-type="codeValue" class="weui-vcode">
               <x-button slot="right" type="primary"  @click.native="getCode()" mini>{{ codeVal }}</x-button>
            </x-input>
          </group>
          <x-button plain style="margin-top:20px;margin-bottom:40px" @click.native="submit">提交信息，免费获得更多加盟资讯</x-button>
        </p>
 </card>
  <div class="bottomtite">浙江军梦网络科技有限公司    浙ICP备16020692号-1</div>
  </div>
</template>

<script>
import API from '@/api/wxmp'
import {Swiper,Group,Tab, TabItem,Card,XInput,XButton,PopupRadio } from 'vux'
export default {
  components: {
    Group,Tab, TabItem,Card,XInput,XButton,PopupRadio,Swiper
  },
  data () {
    return {
      indexs:1,
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
      title:'军才联盟成员专享权利',
      value:'',
      mobile:'',
      code:'',
      attitude:'',
      codeVal: '获取验证码',
      codeFlog: false,
      wait: 60,
      option:[
        {
        key: 'C',
        value: '企业联盟'
      }, {
        key: 'B',
        value: '导师加盟'
      }, {
        key: 'A',
        value: '城市合伙人加盟'
      }
      ],
      codeValue: function(value){
                return {
                    valid: value.length !='',
                    msg: "必填项!"
                }
      }
    }
  },
  methods: {
    onItemClick(obj){
      this.index = obj
    },
    getCode(){
      if (this.codeFlog)return;
      if(this.mobile !=="" && this.mobile.length===11){
        API.code({telephone:this.mobile}).then(res => {
          if (res.statusCode == 0) {
              this.time();
          }else{
            this.$vux.toast.show({
              type:'cancel;',
              text:res.message
            });
          }
        });
      }else{
        this.$vux.toast.show({
          type:'cancel',
          text:'手机号有误'
        });
      }
    },
    time() {
      if (this.wait === 0) {
        this.codeFlog = false;
        this.codeVal = "获取验证码";
        this.wait = 60;
      } else {
        this.codeFlog = true;
        this.codeVal = "重新发送(" + this.wait + ")";
        this.wait--;
        setTimeout( () =>{
          this.time()
        }, 1000);
      }
    },
    submit(){
      if (this.value === "") {
        this.$vux.toast.show({
          type:'cancel',
          text:'姓名<br>不能为空！'
        });
        return;
      }
      if (this.mobile === "") {
        this.$vux.toast.show({
          type:'cancel',
          text:'手机号<br>不能为空！'
        });
        return;
      }
      if (this.code === "") {
        this.$vux.toast.show({
          type:'cancel',
          text:'验证码<br>不能为空！'
        });
        return;
      }
      API.checkcode({checkCode:this.code}).then((res)=>{
        if (res.statusCode == 0) {
            this.sub();
        }else{
          this.$vux.toast.show({
            type:'cancel;',
            text:res.message
          });
        }
      })
    },
    sub(){
      API.newVisitor({visitorName:this.value,phone:this.mobile,visitorStatus:'',visitorType:this.attitude}).then((res)=>{
        if (res.statusCode == 0) {
          this.$vux.toast.show({
            type:'success',
            text:res.message
          });
          this.value='';
          this.mobile='';
          this.code='';
          this.attitude='';
          this.codeFlog = false;
          this.codeVal = "获取验证码";
          this.wait = 60;
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
.card-padding{
  padding: 15px 10px;
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

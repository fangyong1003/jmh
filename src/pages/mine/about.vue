<template>
  <div >
    <card>
      <p slot="content" class="card-padding">  “军梦汇”是国内首家依托社会力量创办的退役军人服务平台，社团+公司+基地的运营模式，军梦汇致力打造创新型退役军人服务平台领军品牌为目标，以提升退役军人的核心竞争力为己任，以汇才筑梦，情怀创造价值为理念。军梦汇打造的“退役军人职教培训C2B平台”结合新一代的网络信息技术开创退役军人培训和就业创业指导的新局面并填补了我国在退役军人就业创业培训方面社会化服务的空白。“军梦汇”C2B平台，运用了网络媒体及先进的移动端信息技术，加上经验丰富的专业顾问队伍，提供集公益活动、招生招聘、教育培训、人才服务于一体的全方位专业化军才服务。平台服务：军才联盟、军才学院、军梦网。截止目前全国10多个城市设有服务机构。</p>
    </card>
    <card >
        <div slot="header" class="card-title">
          <div class="bars"></div>
          公益活动——军才联盟
        </div>
        <p slot="content" class="card-padding">
          军才联盟是军才学院的举办方及军才学院捐赠的筹资主体。军才联盟联合社会力量共同为军才学院筹集办学资金。军才联盟理事会由杭职院、军梦汇、达内集团以及其他社会贤达构成。</br>
          军才联盟是连接军才学院与社会的中枢纽带，其使命在于推动军才学院与社会资源良性互动合作广纳社会资源推进学院创建与发展。军才联盟秉承公开、透明的原则，承诺以最完善的信息披露制度，确保捐款最大化、最有效使用。创建国家为之骄傲、军人为之自豪的一流军才学院，为经济建设贡献军人力量，是所有爱国拥军志士梦想。军才学院的建设需要社会各位的共同努力，学院的成长需要各位贤达的见证。众志成城，军才联盟愿与各位同仁一起携手为建设一流的创新型军才学院而不断奋斗！
        </p>
   </card>
   <card >
       <div slot="header" class="card-title">
         <div class="bars"></div>
         招生招聘——军梦网
       </div>
       <p slot="content" class="card-padding">
      “军梦汇”招生招聘服务在国内创立了网站+军营+校园+社会+管理软件的全方位招生招聘方案。每年为数万家企业成功招募所需人才、为大量的培训机构成功招收学员，帮助企业高效准确地锁定目标，用最短的时间、最经济的成本找到合适的人才。同时“军梦汇”拥有几十万的用户数量，成功为退役军人提供适合的职业培训通道和职业发展机会。
       </p>
  </card>
  <card >
      <div slot="header" class="card-title">
        <div class="bars"></div>
        教育培训——军才学院
      </div>
      <p slot="content" class="card-padding">
        “军梦汇”—军才学院的专业课程服务体系为退役军人量身定制各种就业创业公益课、人才测评、职业规划；为企业HRBP量身定制各种公开课程、实战模拟及体验式培训，帮助企业迅速提高招聘团队专业水平；为成员企业的管理层、创业者提供国内知名专家教授的企业管理、营销、财税、法律、金融等课程培训。</br>
    与此同时军才学院培养电梯工程师、IT工程师、通信工程师、直升机教员、私人助理、安保经理、国防教官、跆拳道教练、空手道教练、健身教练等专业实现高薪就业，截止目前累计输送5000多名退役军人。
      </p>
 </card>
 <card >
     <div slot="header" class="card-title">
       <div class="bars"></div>
       人才外包
     </div>
     <p slot="content" class="card-padding">
      “军梦汇”的人事外包服务提供人事事务代理、人才派遣从员工招聘、培训、管理到退工的一站式服务与咨询，同时提供企业军才定制培训服务，帮助企业更好地管理人力资源，节约成本，让员工轻装上阵，全力以赴。
     </p>
</card>
  </div>
</template>

<script>
import {Card } from 'vux'
export default {
  components: {
    Card
  },
  data () {
    return {
    }
  },
  methods: {

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

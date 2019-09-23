<template>
  <div >
      <div>
        <img :src="column.url" style="width:100%;display:block">
      </div>
       <card >
           <div slot="header" class="card-title1">
              <div>
                 <x-button v-for="(col,index) in column.tag" style="margin-right:5px" type="primary" mini>{{col}}</x-button>
              </div>
              <div class="red">限时优惠，免费学习</div>
           </div>
      </card>
      <card >
          <div slot="header" class="card-title">
            <div class="bars"></div>
            课程介绍
          </div>
          <div slot="content" class="card-padding">
            <div class="tit">就业方向</div>
            {{column.todos}}
            <div class="tit">课程简介</div>
            {{column.detail}}
          </div>
     </card>
  </div>
</template>

<script>
import API from '@/api/api_jmh'
import {Group,Tab, TabItem,Card,XInput,XButton,PopupRadio } from 'vux'
export default {
  components: {
    Group,Tab, TabItem,Card,XInput,XButton,PopupRadio
  },
  created(){
    this.getList();
  },
  data () {
    return {
      column:{},
      list:[
        {
          id:'1',
          url:require('@/assets/img/c1.png'),
          tag:['高薪','好就业'],
          detail:'本课程目标为培养理论基础扎实、专业口径宽、适应性强、工程实践能力强、综合素质高，掌握互联网与网络安全的基本理论，并能从事互联网中网络安全技术的研究、设计、开发、应用、管理等工作的技术人才。培训后将获得以下几方面的知识和能力：1．掌握计算机网络基本理论和专业知识，掌握网络安全以及网络安全管理的基本理论与方法；2．了解国家有关信息安全方面的政策和法规以及有关国际法律、法规；了解信息安全技术领域的理论前沿、应用前景和发展动态；3．掌握计算机的基本原理与技术，具有LINUX系统运维能力；4．掌握文献检索、资料查询的基本方法，具有一定的实际工作能力。',
          todos:'（1）    网络信息安全工程师（2）    安全运维工程师（3）    安全开发工程师（4）    渗透测试工程师（5）    LINUX运维工程师（6）    服务器运维工程师（7）    LINUX架构工程师'
        },
        {
          id:'2',
          url:require('@/assets/img/c2.png'),
          tag:['高薪','好就业'],
          detail:'本专业主要面向服务业，能够独立完成计算机常见软件、硬件故障的检测、维修技术要求。能够根据不同的应用场合和性能要求选择匹配的通讯类产品与服务器硬件组装、检测、优化，使设备正常稳定工作。能够快速判断并完成服务器与通讯类产品维修，磁盘数据恢复；同时对服务器与通讯类产品手机等主板维修达到芯片级维修技术要求。熟练使用计算机操作系统、常用办公软件和工具软件。能够使用和维护常用办公设备（复印机、打印机、传真机、扫描仪）。可以搭建小型局域网并对局域网进行管理的高素质劳动者和技能型、应用型专门人才。本专业教学需具备的技术水平：1）提高文化基础素质，培养专业兴趣；理解电子电路基本工作原理，掌握常用元器件识别（电阻、电容、二极管、三极管、电感等）与测量，掌握电子装配基础工艺（分立元器件的拆装与焊接）；理解计算机组成原理，熟练操作计算机操作系统及常用设置。计算机办公软件的使用。2）掌握计算机板卡贴片元器件类别、参数识别、测量元器件好坏；掌握各种板卡贴片元器件的拆装，熟练掌握贴片元件的焊接技术要求和技巧；掌握主板结构和零部件组成；掌握计算机各硬件的性能参数及工作原理，能够进行计算机硬件组装和检测工作，达到板卡级维修水平；会使用常用工具软件。能进行因特网操作和处理计算机系统和网络故障。3）能够分析和排除计算机常见故障，完成对操作系统常用软件的安装和维护工作；掌握计算机主板的结构、各部分电路工作原理，分析、测量，测量主板各部分电路；掌握BGA焊接的技术要求和操作技能；掌握常用办公设备（如投影仪、打印机、传真机、扫描仪等）的使用和日常维护工作。熟练掌握常用工具软件的使用。4）培养学生职业道德和职业修养；能够独立分析、检测主板电路故障，达到主板芯片级维修水平；能够维护管理计算机和办公设备、网络设备，维护设备的正常工作；学习相关专业技能，扩展知识范围。5）学生掌握硬盘基本结构，熟悉使用各个数据恢复软件，能够对硬盘开盘等故障进行操作',
          todos:'1 网络管理员 2 IT专员 3 数据恢复工程师 4 硬件维修工程师'
        },
        {
          id:'3',
          url:require('@/assets/img/c3.png'),
          tag:['退伍军人100%就业'],
          detail:'必果(BNGO)学府为私人教练培训机构,隶属于奇迹麦瑞可(北京)健身服务有限公司,培训业务覆盖北京、成都、绵阳、长沙、株洲、荆州、常州、南京、无锡、等多个省市,现在全国地区没有多个独立培训基地,培训场地面积超3000m,是中国职业健身教练培训的知名品牌。致力打造行业精英私人教练,给喜欢锻炼的你和希望从事私教行业的你一个专业、可靠的平台。必果学府办学理念借鉴于言必信,行必果。 我们是一支专业的团队。我们的导师拥有各类国际认证,多年的教学经验,平均授课5000节以上,大多数来自国内知名健身品牌的一线骨干。我们是一支年轻的团队。我们的平均年龄仅有28岁充满了朝气和创新精神。我们是一支专注的团队。我们坚信,专业的品牌源自客户的信任。只有专注,才能做好专业。我们是一支有梦想的团队。我们来自五湖四海,因为个共同的梦想,汇聚一起,构建-家真正优秀的健身教练培训机构。为学员带来健康的体魄、专业的技能以及实战经验。一、获得的证书：1、ACE国际认证、TRX-STC认证、4S脊柱康复认证2、NSCA-cpt美国国家体能协会认证3、健身教练国家职业资格高级认证 4、FM意大利筋摸国际认证、ANATOMY TRAINS国际认证、Functional Movement Screen国际认证、REDCORD- ACTIVE挪威官方国际认证、The- Band运动防护专家认证  5、国家高级按摩师动康复治疗6、NASM-CPT国际私人教练认证7、中国康复治疗师认证',
          todos:'高级私人健身教练'
        },
        {
          id:'4',
          url:require('@/assets/img/c4.png'),
          tag:['退伍军人100%就业'],
          detail:'跆拳道项目是1995年才开始正式在我国发展，而云南早在1985年就开始出现了跆拳道的传播，浙江通过近10多年的发展，也有较广的群众基础和爱好者。经过20多年的发展，群众基础广泛；杭州市内就有大小道馆近千家，有超过50万人参加过跆拳道的训练。为了能更进一步的推广普及跆拳道运动，提高浙江省跆拳道运动水平，由浙江省体育局群众体育指导中心跆拳道训练基地发起，旨在探索新的跆拳道运动推广方式与开发新的跆拳道产品，培养新形式下的跆拳道教练员。在跆拳道人才培养的模式上,转变单一技术性的培养模式,重视创新型退伍军人人才和复合型退伍军人人才的培养，培养专业竞技型退伍军人跆拳道人才。',
          todos:'经过专业的师资培训并考核合格者颁发国家体育总局国家级教练员证书、社会体育指导员证书'
        },
        {
          id:'5',
          url:require('@/assets/img/c5.png'),
          tag:['退伍军人100%就业'],
          detail:'1. 理论知识要求：职业道德及相关法律法规知识，电梯结构与标准、基础安全操作、初级机械调整、初级电气排故、初级保养检查、扶梯结构与标准、扶梯保养基础、电工材料知识、照明、动力线路及接地知识、机械基础知识、扶梯电控原理、电子电路、安全用电。2. 操作技能要求：安全生产、电工常用工具、材料的应用、电气故障检修、配线与安装、电气线路调试、线路分析、仪器仪表的使用、电动机检修、电气故障检修、基础安全操作、初级机械调整、初级电气排故、初级保养检查、扶梯结构与标准、扶梯保养基础。3. 考证要求：（1）电梯行业从业资格证（特种设备从业人员证）（2）电梯维修工职业技能等级证（初级）',
          todos:'高级电梯维修工程师'
        },
      ],
    }
  },
  methods: {
    getList(){
      let id = this.$route.params.id;
      for(var i in this.list){
        if(this.list[i].id==id){
          this.column = this.list[i];
        }
      }
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
.card-title1{
  height: 82px;
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
.red{
  font-size:18px;
color:#e70001;
line-height: 30px;
}
.weui-btn_primary{
  background: #006600!important;
  padding: 0 0.6rem;
  font-size: 12px;
  margin-top: 10px;
}
.tit{
  font-weight: bold;
}
</style>

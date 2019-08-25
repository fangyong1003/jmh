template>
  <div >
    <swiper :auto="true" :list="demo" v-model="index" @on-index-change="onIndexChange"></swiper>
     <tabbar>
    <tabbar-item selected>
        <img slot="icon" src="../assets/img/homes.png">
        <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item  link="/learn">
       <img slot="icon" src="../assets/img/learn.png">
       <span slot="label">学习</span>
     </tabbar-item>
     <tabbar-item  link="/mine">
       <img slot="icon" src="../assets/img/mine.png">
       <span slot="label">我的</span>
     </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import API from '@/api/api_jmh'
import {Swiper,Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Swiper,
    Tabbar,
   TabbarItem
  },
  data () {
    return {
      index:0,
      demo:[{
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        title: '送你一辆车'
      }]
    }
  },
  methods: {
    onIndexChange(index){
       this.index = index
    }
  }
}
</script>
<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
@tabbar-text-active-color{
  color:#1e6eb7
}
</style>

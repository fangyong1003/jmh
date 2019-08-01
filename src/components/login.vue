<template>
  <div >
      <loading :show="show1" :text="text1"></loading>

      <group title="">
        <x-input title="手机号码" mask="999 9999 9999" placeholder="请输入手机号码" v-model="mobile" :max="13" is-type="china-mobile"></x-input>
      </group>

      <group title="">
        <x-input title="用户姓名" v-model="name"  placeholder="请输入姓名" is-type="china-name"></x-input>
      </group>

      <group title="">
        <x-input title="邮箱地址" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>
      </group>
    <box gap="10px 10px">
      <br>
      <x-button type="primary" @click.native="submit">提交</x-button>
    </box>
  </div>
</template>

<script>
import API from '@/api/api_jmh'
import { XInput, Group, XButton, Cell, Loading, Alert ,Box,Toast } from 'vux'
export default {
  created(){
    this.dos();
  },
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    Alert,
    Loading,
    XButton,
    Box,
    Toast
  },
  data () {
    return {
      valid2: false,
      mobile: '',
      name:'',
      show1:false,
      text1:'请稍等',
      id:1,
      mortgagepage:2,
    }
  },
  methods: {
    submit(){
        this.show1 = true
    },
    dos(){
      let postData = {
          id:this.id,
          pageNum:this.mortgagepage,
          pageSize:10,
        }
        API.getmortgageslists(postData).then((res)=>{
          if(res.code=='000000'){
            console.log(res.data);
          }else{
            this.$vux.toast.show({
             text: res.msg,
             type:'warn',
            })
          }
        })
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
</style>

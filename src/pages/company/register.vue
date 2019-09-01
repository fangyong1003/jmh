<template>
  <div class="box">
  <view-box class="signIn" bodyPaddingTop="0" bodyPaddingBottom="0">
    <group class="pp" label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input v-model="userName" type="tel" title="账号:"
               required placeholder="请输入账号"></x-input>
      <x-input v-model="password" type="tel" title="密码:"
               required placeholder="请输入密码"></x-input>
    </group>

    <box gap="10px 10px">
      <x-button plain style="background: #fff;border-color:#ccc;color:#1e6eb7" @click.native="submit">登录</x-button>
    </box>
  </view-box>
</div>
</template>
<script>
  import {
    ViewBox, XHeader, Box, XInput, XButton, Group
  } from 'vux';
  import API from '@/api/wxmp'
  export default {
    name: 'signIn',
    components: {
      ViewBox, XHeader, Box, XInput, XButton, Group
    },
    data(){
      return {
        userName: '',
        password: '',
      }
    },
    methods: {
      submit(){
        if (this.userName === "") {
          this.$vux.toast.show({
            type:'cancel',
            text:'账号<br>不能为空！'
          });
          return;
        }
        if (this.password === "") {
          this.$vux.toast.show({
            type:'cancel',
            text:'密码<br>不能为空！'
          });
          return;
        }
        let params = `loginName=${this.userName}&loginPwd=${this.password}`;
        API.login(params).then((res)=>{
          if (res.statusCode == 0) {
            this.$store.dispatch('cpInfoAction',res.compRole);
						this.$router.push("/company/main");
					}else{
						this.$vux.toast.show({
							type:'cancel;',
							text:res.message
						});
					}
        })
      },
    }
  }
</script>

<style lang="less" scoped>
.pp{
	/deep/ .weui-cells{
		background: none,
	}
	/deep/ .weui-label{
		color:#fff
	}
}
.box{
	height: 100%;
  background-image:linear-gradient(-180deg, #88c0f3 0%, #1e73c3 100%);
}
  .signIn {
    .weui-input,
    .weui-label {
      font-size: 14px;
    }
    .ui-code{
      line-height: 25px;
      font-size: 12px;
      border:1px solid #ccc;
      padding: 0 5px;
      border-radius: 4px;
      position: absolute;
      right: 45px;
      bottom: 8px;
      z-index: 10;
    }
  }
</style>

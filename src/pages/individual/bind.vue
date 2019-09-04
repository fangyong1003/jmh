<template>
	<div class="box">
  <view-box class="signIn" bodyPaddingTop="0" bodyPaddingBottom="0">
		<img src="@/assets/img/bind.png" class="pg">
		<div class="tit">绑定手机号，免费获取高薪机会</div>
    <group class="pp" label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input v-model="mobile" type="tel" title="手机号:" is-type="china-mobile"
               required placeholder="请输入手机号..."></x-input>
      <x-input v-model="code" type="tel" title="验证码:"
               required placeholder="请输入验证码..."></x-input>
      <span class="ui-code" @click="getCode()">{{ codeVal }}</span>
    </group>
    <box gap="10px 10px">
      <x-button plain style="background: #fff;border-color:#ccc;color:#1e6eb7;font-size:18px;margin-top:30px;font-weight:bold" @click.native="register">确定绑定</x-button>
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
        mobile: '',
        code: '',
        codeVal: '获取验证码',
        codeFlog: false,
        wait: 60,
      }
    },
    methods: {
      register(){
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
							this.bind();
					}else{
						this.$vux.toast.show({
							type:'cancel;',
							text:res.message
						});
					}
				})

      },
			bind(){
				API.bindPhone({openId:this.$store.state.userInfo.openId,telephone:this.monile}).then((res)=>{
					if (res.statusCode == 0) {
						this.$router.push("/");
						this.$store.dispatch('phoneAction',1);
					}else{
						this.$vux.toast.show({
							type:'cancel;',
							text:res.message
						});
					}
				})
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
      }
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
			color: #fff;
      right: 20px;
      bottom: 8px;
      z-index: 10;
    }
  }
	.tit{
		font-size:18px;
color:#ffffff;
text-align: center;
margin-top:30px;
margin-bottom: 40px;
font-weight:bold
	}
	.pg{
		margin-top: 40px;
		width: 80%;
		margin-left: 10%
	}
</style>

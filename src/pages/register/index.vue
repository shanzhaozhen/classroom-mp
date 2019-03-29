<template>
  <div class="login-container">
    <div class="from-box">
      <div class="logo">
        <img src="/static/images/user.png">
      </div>
      <div class="input-box">
        <input type="text" placeholder="请输入账号" v-model="registerData.username"/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="真实姓名" v-model="registerData.fullName"/>
      </div>
      <div class="input-box">
        <input type="number" placeholder="学号" v-model="registerData.number"/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="请输入密码" v-model="registerData.password"/>
      </div>
      <button class="login-btn mb-35 bg-orange" @click="register">开始注册</button>
    </div>
  </div>
</template>

<script>
import { http } from '@/utils/request'
export default {
  components: {
  },
  data () {
    return {
      registerData: {
        username: '',
        password: '',
        fullName: ''
      }
    }
  },
  methods: {
    toLoginPage () {
      const url = '../login/main'
      mpvue.navigateTo({ url })
    },
    register () {
      const { username, password, fullName, number } = this.registerData
      if (!username || !password || !fullName || !number) {
        mpvue.showToast({
          title: '字段不能为空',
          icon: 'none',
          duration: 3000,
          mask: true
        })
        return
      }
      http('register', 'post', this.registerData).then((res) => {
        if (res.success === true) {
          mpvue.showToast({
            title: '注册成功',
            duration: 3000,
            mask: true
          })
          setTimeout(() => {
            mpvue.navigateBack({
              delta: 1
            })
          }, 3000)
        } else {
          mpvue.showToast({
            title: res.msg,
            icon: 'none',
            duration: 3000,
            mask: true
          })
        }
      })
        .catch((error) => {
          console.log(error)
          mpvue.showToast({
            title: '签到失败',
            icon: 'none',
            duration: 3000,
            mask: true
          })
        })
    }
  }
}
</script>

<style>
  /*page {*/
    /*background-color: #eeeeee;*/
  /*}*/

  /*.login-container {*/
    /*padding: 20rpx 20rpx 15rpx 20rpx;*/
  /*}*/

  .from-box {
    padding: 0rpx 40rpx 15rpx 40rpx;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin: 10rpx auto 20rpx auto;
    text-align: center;
  }

  .logo img {
    width: 230rpx;
    height: 230rpx;
  }

  .border-bottom {
    border-bottom: 1px solid #eeeeee;
  }

  .input-box {
    width: 100%;
    padding-bottom: 18rpx;
    border-bottom: 1px solid #eeeeee;
    margin: 15rpx 0;
  }
/*
  .input-box span {
    float: left;
  }

  .input-box input {
    float: left;
    font-size: 1em;
  }
*/
  .input-box img {
    width: 25rpx;
    height: 25rpx;
    /*width: 15%;*/
    float: left;
  }

  .mt-50 {
    margin-top: 50rpx;
  }

  .mb-35 {
    margin-bottom: 35rpx;
  }

  .login-btn {
    color: #ffffff;
    width: 100%;
    height: 75rpx;
    font-size: 35rpx;
    line-height: 75rpx;
  }

</style>

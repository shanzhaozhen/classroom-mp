<template>
  <div class="login-container">
    <div class="from-box">
      <div class="logo">
        <img src="/static/images/user.png">
      </div>
      <div class="input-box">
        <input type="text" placeholder="请输入账号" v-model="loginForm.username"/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="请输入密码" v-model="loginForm.password"/>
      </div>
      <button class="login-btn mt-50 mb-35 bg-aqua" @click="login">登陆</button>
      <button class="login-btn mb-35 bg-orange" @click="toRegisterPage">注册</button>
      <!--<button open-type="getUserInfo" class="login-btn mb-35 bg-green" @getuserinfo="getWechatUserInfo">关联微信登陆</button>-->
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    toRegisterPage () {
      const url = '../register/main'
      mpvue.navigateTo({ url })
    },
    login () {
      this.$store.dispatch('Login', this.loginForm).then(() => {
        mpvue.showToast({
          title: '登陆成功',
          duration: 3000,
          mask: true
        })
        setTimeout(() => {
          mpvue.navigateBack({
            delta: 1
          })
        }, 3000)
      }).catch((error) => {
        mpvue.showToast({
          title: error.msg,
          icon: 'none',
          duration: 3000,
          mask: true
        })
      })
    },
    getWechatUserInfo (data) {
      console.log(data)
      if (data.mp.detail.rawData) {
        // mpvue.login({
        //   success (res) {
        //     if (res.code) {
        //       // 发起网络请求
        //       wx.request({
        //         url: 'https://test.com/onLogin',
        //         data: {
        //           code: res.code
        //         }
        //       })
        //     } else {
        //       console.log('登录失败！' + res.errMsg)
        //     }
        //   }
        // })
      } else {
        mpvue.showToast({
          title: '获取用户数据失败',
          icon: 'none',
          duration: 3000,
          mask: true
        })
      }
    }
  }
}
</script>

<style scoped>

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

  .input-box {
    width: 100%;
    padding-bottom: 18rpx;
    border-bottom: 1px solid #eeeeee;
    margin: 15rpx 0;
  }

  .input-box img {
    width: 25rpx;
    height: 25rpx;
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

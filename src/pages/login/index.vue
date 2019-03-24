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
      <button open-type="getUserInfo" class="login-btn mb-35 bg-green" @getuserinfo="getWechatUserInfo">关联微信登陆</button>
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
      this.$store.dispatch('Login', this.loginForm).then((data) => {
        this.loginSuccess(data)
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
      if (data.mp.detail.rawData) {
        this.$store.dispatch('SetWechatUserInfo', data.mp.detail.userInfo)
        mpvue.login({
          success: (res) => {
            if (res.code) {
              this.$store.dispatch('WechatLogin', res.code).then(() => {
                this.loginSuccess()
              })
                .catch((error) => {
                  mpvue.showToast({
                    title: error.msg,
                    icon: 'none',
                    duration: 1500,
                    mask: true
                  })
                })
            } else {
              mpvue.showToast({
                title: '登录失败',
                icon: 'none',
                duration: 1500,
                mask: true
              })
            }
          }
        })
      } else {
        mpvue.showToast({
          title: '获取用户数据失败',
          icon: 'none',
          duration: 3000,
          mask: true
        })
      }
    },
    loginSuccess () {
      mpvue.showToast({
        title: '登陆成功',
        duration: 1500,
        mask: true
      })
      setTimeout(() => {
        mpvue.navigateBack({
          delta: 1
        })
      }, 1500)

      this.$store.dispatch('GetUserInfo').then((data) => {
        if (data.nickName !== this.wechatUserInfo.nickName || data.avatarUrl !== this.wechatUserInfo.avatarUrl) {
          this.$store.dispatch('UpdateUserInfo', this.wechatUserInfo).then((data) => {
            if (data.success === true) {
              this.$store.dispatch('GetUserInfo')
            }
          })
        }
      })
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

  .hidden-btn {
    display: none;
  }

</style>

<template>
  <div class="login-container">
    <div class="from-box">
      <div class="logo">
        <img src="/static/images/user.png">
      </div>
      <div class="input-box">
        <input type="text" placeholder="请输入账号" v-model="username"/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="请输入密码" v-model="password"/>
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
      username: '',
      password: ''
    }
  },
  methods: {
    toRegisterPage () {
      const url = '../register/main'
      mpvue.navigateTo({ url })
    },
    login () {
      // this.$fly.post('http://127.0.0.1:8090/classroom/login', {
      //   username: this.username,
      //   password: this.password
      // })
      mpvue.request({
        url: 'http://127.0.0.1:8090/classroom/login', // 仅为示例，并非真实的接口地址
        data: {
          username: this.username,
          password: this.password
        },
        method: 'post',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res)
          if (res.data.code === 2000) {
            mpvue.showToast({
              title: '登陆成功',
              duration: 1000,
              mask: true
            })
          } else if (res.data.status === 401) {
            /**
             * (4010, "密码账号认证出错")
             * (4011, "token签名异常")
             * (4012, "token格式不正确")
             * (4013, "token已过期")
             * (4014, "不支持该token")
             * (4015, "token参数异常")
             * (4016, "token错误")
             */
            if (res.data.code === 4010) {
              mpvue.showToast({
                title: res.data.message,
                icon: 'none',
                duration: 5000,
                mask: true
              })
            } else if (res.data.code > 4010 && res.data.code <= 4016) {
              mpvue.showToast({
                title: '你已被登出，可以取消继续留在该页面，或者重新登录',
                icon: 'none',
                duration: 5000,
                mask: true
              })
            }
          } else {
            mpvue.showToast({
              title: '登陆失败',
              icon: 'none',
              duration: 5000,
              mask: true
            })
          }
        }
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

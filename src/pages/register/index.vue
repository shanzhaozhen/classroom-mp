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
      <button class="login-btn mb-35 bg-orange">开始注册</button>
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
    toLoginPage () {
      const url = '../login/main'
      mpvue.navigateTo({ url })
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

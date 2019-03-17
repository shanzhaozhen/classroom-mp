<template>
  <div class="my-container">
    <div class="user-info">
      <div class="avatar">
        <img src="/static/images/user.png">
      </div>
      <div class="username" v-if="isLogin">username</div>
      <div class="username" v-else>(未登录)</div>
      <button class="modify-btn" @click="toPage('../myinfo/main')" v-if="isLogin">修改个人资料</button>
      <button class="login-btn"  @click="toPage('../login/main')" v-else>登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    toPage (url) {
      mpvue.navigateTo({ url })
    }
  }
}
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: #ffffff;
  }

  .avatar img {
    width: 140rpx;
    height: 140rpx;
    border-radius: 50%;
    border: 1rpx solid #eee;
  }

  .username {
    margin: 10rpx auto;
    font-size: 45rpx;
  }

  .modify-btn {
    height: 55rpx;
    width: 220repx;
    background-color: #55C8F4;
    margin-bottom: 40rpx;
    font-size: 30rpx;
    line-height: 55rpx;
    color: #ffffff;
  }

  .login-btn {
    color: #ffffff;
    width: 250rpx;
    height: 75rpx;
    font-size: 35rpx;
    line-height: 75rpx;
    margin: 20rpx 0 30rpx 0;
    background-color: #55C8F4;
  }
</style>

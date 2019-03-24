<template>
  <div class="my-container">
    <div class="user-info" v-if="isLogin">
      <div class="avatar">
        <img :src="wechatUserInfo.avatarUrl">
      </div>
      <div class="username">{{wechatUserInfo.nickName}}</div>
      <button class="modify-btn" @click="toPage('../myinfo/main')">修改个人资料</button>
    </div>
    <div class="user-info" v-else>
      <div class="avatar">
        <img src="/static/images/user.png">
      </div>
      <div class="username">(未登录)</div>
      <button class="login-btn" open-type="getUserInfo" @getuserinfo="getWechatUserInfo">登陆</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isLogin',
      'wechatUserInfo'])
  },
  methods: {
    toPage (url) {
      mpvue.navigateTo({ url })
    },
    getWechatUserInfo (data) {
      if (data.mp.detail.rawData) {
        this.$store.dispatch('SetWechatUserInfo', data.mp.detail.userInfo)
        this.$store.dispatch('LogOut')
        this.toPage('../login/main')
      }
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

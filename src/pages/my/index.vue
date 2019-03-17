<template>
  <div class="my-container">
    <div class="user-info">
      <div class="avatar" @click="toPage('../login/main')">
        <img src="/static/images/user.png">
      </div>
      <div class="username">username</div>
      <button class="modify-btn" @click="toPage('../myinfo/main')">修改个人资料</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
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
</style>

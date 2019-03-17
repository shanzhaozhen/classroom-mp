<template>
  <div class="myinfo-container">
    <div class="form-box">
      <div class="input-box">
        <div class="label-name">用户名</div>
        <div class="label-value">{{username}}</div>
      </div>
      <div class="input-box">
        <div class="label-name">微信账号</div>
        <div class="label-value">点击解绑</div>
      </div>
    </div>
    <button class="logout-btn mt-50 mb-35 bg-aqua">退出登录</button>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        username: 'username'
      }
    }
  }
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .myinfo-container {
    padding-top: 25rpx;
    width: 100%;
  }

  .form-box {
    padding: 20rpx;
    background-color: #ffffff;
  }

  .input-box {
    position: relative;
    height: 45rpx;
    padding: 5rpx 20rpx;
    margin-bottom: 20rpx;
    border-bottom: 1rpx solid #eee;
  }

  .label-name {
    position: absolute;
    left: 0;
    font-size: 40rpx;
  }

  .label-value {
    position: absolute;
    right: 20rpx;
    font-size: 32rpx;
    color: #999999;
  }

  .logout-btn {
    margin-top: 60rpx;
    color: #ffffff;
    width: 95%;
    height: 75rpx;
    font-size: 35rpx;
    line-height: 75rpx;
  }


</style>

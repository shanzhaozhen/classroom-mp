<template>
  <div class="classroom-detail-container">
    <div class="classroom-info">
      <div class="classroom-name">2年B班</div>
      <div class="classroom-desc">fffffffffffffasddddddddddsfasdfasdfasfasdfasdfasdfsfasfasdffasdfasdfasdafsdfdddddddddddfadfasdfasd</div>
      <div class="splice-line"></div>
      <div class="user-info">
        <div class="avatar">
          <img src="/static/images/user.png">
        </div>
        <span class="username">username</span>
        <div class="create-date">创建于：2018-12-12 12:12:12</div>
      </div>
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
      toPage () {
        const url = '../login/main'
        mpvue.navigateTo({ url })
      }
    }
  }
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .classroom-detail-container {
    display: flex;
    flex-direction: column;
  }

  .classroom-info {
    padding: 25rpx 20rpx 5rpx 25rpx;
    background-color: #ffffff;
  }

  .classroom-name {
    text-align: center;
    font-size: 45rpx;
  }

  .classroom-desc {
    margin-top: 25rpx;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    color: #656565;
    font-size: 35rpx;
  }

  .splice-line {
    margin: 10rpx 0;
    border-top: 1rpx solid #000000;
  }

  .user-info {
    margin-top: 5rpx;
  }

  .avatar {
    float: left;
  }

  .avatar img {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }

  .username {
    float: left;
    font-size: 35rpx;
    display: inline-block;
    line-height: 80rpx;
  }

  .create-date {
    font-size: 25rpx;
    line-height: 80rpx;
    float: right;
    color: #999999;
  }

</style>

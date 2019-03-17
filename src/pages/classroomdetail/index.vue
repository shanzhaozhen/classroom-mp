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
    <div class="classroom-content">
      <div class="swit-bar">
        <div :class="{'bar': true, 'bar-active': show === 1}" @click="switBar(1)">作业</div>
        <div :class="{'bar': true, 'bar-active': show === 2}" @click="switBar(2)">任务</div>
      </div>
      <div class="classroom-homework" v-show="show === 1">
        <div class="homework-item">
          <div class="homework-content">
            <div class="homework-name">玩成</div>
            <div class="homework-desc">fsadfasdfsadfasdfasdfasdfasdfasdfasfvfgsdfasdfsdgsafdsafdsafsdafsadfdsafsdfasdf</div>
          </div>
          <div class="homework-dete">
            完成时间：2018年12月12日-2018年12月12日
          </div>
        </div>
        <div class="homework-item">
          <div class="homework-content">
            <div class="homework-name">玩成</div>
            <div class="homework-desc">fsadfasdfsadfasdfasdfasdfasdfasdfasfvfgsdfasdfsdgsafdsafdsafsdafsadfdsafsdfasdf</div>
          </div>
          <div class="homework-dete">
            完成时间：2018年12月12日-2018年12月12日
          </div>
        </div>
        <div class="homework-item">
          <div class="homework-content">
            <div class="homework-name">玩成</div>
            <div class="homework-desc">fsadfasdfsadfasdfasdfasdfasdfasdfasfvfgsdfasdfsdgsafdsafdsafsdafsadfdsafsdfasdf</div>
          </div>
          <div class="homework-dete">
            完成时间：2018年12月12日-2018年12月12日
          </div>
        </div>
        <div class="homework-item">
          <div class="homework-content">
            <div class="homework-name">玩成</div>
            <div class="homework-desc">fsadfasdfsadfasdfasdfasdfasdfasdfasfvfgsdfasdfsdgsafdsafdsafsdafsadfdsafsdfasdf</div>
          </div>
          <div class="homework-dete">
            完成时间：2018年12月12日-2018年12月12日
          </div>
        </div>
      </div>

      <div class="classroom-signin" v-show="show === 2">
        <div class="homework-item">
          <div class="homework-content">
            <div class="homework-name">玩成2</div>
            <div class="homework-desc">fsadfasdfsadfasdfasdfasdfasdfasdfasfvfgsdfasdfsdgsafdsafdsafsdafsadfdsafsdfasdf</div>
          </div>
          <div class="homework-dete">
            完成时间：2018年12月12日-2018年12月12日
          </div>
        </div>
        <div class="homework-item">
          <div class="homework-content">
            <div class="homework-name">玩成2</div>
            <div class="homework-desc">fsadfasdfsadfasdfasdfasdfasdfasdfasfvfgsdfasdfsdgsafdsafdsafsdafsadfdsafsdfasdf</div>
          </div>
          <div class="homework-dete">
            完成时间：2018年12月12日-2018年12月12日
          </div>
        </div>
        <div class="homework-item">
          <div class="homework-content">
            <div class="homework-name">玩成2</div>
            <div class="homework-desc">fsadfasdfsadfasdfasdfasdfasdfasdfasfvfgsdfasdfsdgsafdsafdsafsdafsadfdsafsdfasdf</div>
          </div>
          <div class="homework-dete">
            完成时间：2018年12月12日-2018年12月12日
          </div>
        </div>
        <div class="homework-item">
          <div class="homework-content">
            <div class="homework-name">玩成2</div>
            <div class="homework-desc">fsadfasdfsadfasdfasdfasdfasdfasdfasfvfgsdfasdfsdgsafdsafdsafsdafsadfdsafsdfasdf</div>
          </div>
          <div class="homework-dete">
            完成时间：2018年12月12日-2018年12月12日
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    onLoad (options) {
      console.log(options)
    },
    beforeMount () {
      console.log(this.$mp.query)
    },
    components: {
    },
    data () {
      return {
        show: 1
      }
    },
    computed: {

    },
    methods: {
      toPage () {
        const url = '../login/main'
        mpvue.navigateTo({ url })
      },
      switBar (index) {
        this.show = index
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

  .classroom-homework, .classroom-signin {
    background-color: #eeeeee;
  }

  .classroom-content {
    margin-top: 20rpx;
  }

  .classroom-content {
    background-color: #ffffff;
  }

  .swit-bar {
    height: 80rpx;
  }

  .bar {
    width: 50%;
    float: left;
    text-align: center;
    height: 80rpx;
    line-height: 80rpx;
  }

  .bar-right-spile {
    border-right: 1rpx solid #000000;
  }

  .bar-left-spile {
    border-right: 1rpx solid #000000;
  }

  .bar-active {
    border-bottom: 3rpx solid #ff851b;
    color: #ff851b;
  }

  .homework-item {
    background-color: #ffffff;
    margin-bottom: 15rpx;
  }

  .homework-item {
    height: 210rpx;
    padding: 10rpx 20rpx;
  }

  .homework-name {

  }

  .homework-desc {
    margin-top: 10rpx;
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #656565;
    font-size: 35rpx;
  }

  .homework-dete {
    margin-top: 10rpx;
    padding-top: 10rpx;
    border-top: 1rpx solid #eeeeee;
    color: #999999;
    font-size: 28rpx;
  }

</style>

<template>
  <div class="search-container">
    <div class="search-bar">
      <img src="/static/icon/search.png">
      <input type="text" placeholder="请输入你想加入的班级" />
    </div>
    <div class="result-container">
      <div>
        <div class="item">
          <div class="user-info">
            <img src="/static/images/user.png">
            <div class="username">username</div>
            <div class="join">马上加入</div>
          </div>
          <div class="item-content">
            <div class="class-name">2年E班</div>
            <div class="class-desc">这是一个什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么的班级</div>
          </div>
          <div class="item-date">
            <div>创建于2018年12月12日</div>
          </div>
        </div>
        <div class="splice-bar"></div>
      </div>
      <div>
        <div class="item">
          <div class="user-info">
            <img src="/static/images/user.png">
            <div class="username">username</div>
            <div class="join">马上加入</div>
          </div>
          <div class="item-content">
            <div class="class-name">2年E班</div>
            <div class="class-desc">这是一个什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么什么的班级</div>
          </div>
          <div class="item-date">
            <div>创建于2018年12月12日</div>
          </div>
        </div>
        <div class="splice-bar"></div>
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
    toLoginPage () {
      const url = '../login/main'
      mpvue.navigateTo({ url })
    }
  }
}
</script>

<style scoped>

  .search-container {
    padding-top: 15rpx;
  }

  .search-bar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid #d2d6de;
  }

  .search-bar img {
    position: absolute;
    top: 8rpx;
    left: 5%;
    width: 40rpx;
    height: 40rpx;
  }

  .search-bar input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance:none ;
    outline: 0;
    width: 85%;
    height: 40rpx;
    border: 0px solid #fff;
    border-radius: 20px;
    box-shadow:0 0 10rpx 4rpx rgba(0,0,0,0.1);
    padding: 0 0 0 60rpx;
    background-color: #eeeeee;
    font-size: 32rpx;
  }

  .result-container {
    padding: 5rpx 0 0 0;
  }

  .item {
    width: 100%;
    height: 260rpx;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .splice-bar {
    width: 100%;
    height: 25rpx;
    background-color: #eee;
  }

  .user-info {
    padding: 10rpx 0 5rpx 15rpx;
    position: relative;
  }

  .user-info img {
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
    float: left;
  }

  .username {
    font-size: 35rpx;
    float: left;
    margin-left: 10rpx;
    line-height: 70rpx;
  }

  .join {
    position: absolute;
    top: 50rpx;
    right: 30rpx;
    border: 1rpx solid #ff851b;
    color: #ff851b;
    font-size: 25rpx;
    padding: 2rpx 10rpx;
  }

  .item-content {
    padding: 0 18rpx 0 18rpx;
    border-bottom: 1px solid #9b9b9b;
  }

  .class-name {
    font-size: 34rpx;
  }

  .class-desc {
    font-size: 30rpx;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10rpx;
    color: #656565;
  }

  .item-date {
    text-align: right;
    font-size: 25rpx;
    margin-right: 12rpx;
    margin-top: 8rpx;
  }

</style>

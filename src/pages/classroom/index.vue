<template>
  <div class="classroom-container">
    <div class="classroom-list">
      <div class="classroom-item" @click="toDetailPage(1)">
        <div class="classroom-content">
          <div class="classroom-info">
            <div class="classroom-name">17届软件工程2班</div>
            <div class="classroom-desc">sadfasdfasdfasdfasdfasdfasddfasdfasdffffffffffffffffssssssssssssssssssffffffffffffsssssssssssfffffffff</div>
          </div>
          <div class="classroom-date">加入时间：2017-10-12 12:12:12</div>
        </div>
        <div class="classroom-img bg-aqua">
          <img src="/static/icon/right-circle-write.png">
        </div>
      </div>
      <div class="classroom-item">
        <div class="classroom-content">
          <div class="classroom-info">
            <div class="classroom-name">17届软件工程2班</div>
            <div class="classroom-desc">sadfasdfasdfasdfasdfasdfasddfasdfasdffffffffffffffffssssssssssssssssssffffffffffffsssssssssssfffffffff</div>
          </div>
          <div class="classroom-date">加入时间：2017-10-12 12:12:12</div>
        </div>
        <div class="classroom-img bg-aqua">
          <img src="/static/icon/right-circle-write.png">
        </div>
      </div>
      <div class="classroom-item">
        <div class="classroom-content">
          <div class="classroom-info">
            <div class="classroom-name">17届软件工程2班</div>
            <div class="classroom-desc">sadfasdfasdfasdfasdfasdfasddfasdfasdffffffffffffffffssssssssssssssssssffffffffffffsssssssssssfffffffff</div>
          </div>
          <div class="classroom-date">加入时间：2017-10-12 12:12:12</div>
        </div>
        <div class="classroom-img bg-aqua">
          <img src="/static/icon/right-circle-write.png">
        </div>
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
      toDetailPage (id) {
        const url = '../classroomdetail/main?id=' + id
        mpvue.navigateTo({ url })
      }
    }
  }
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .classroom-list {
    padding: 25rpx 20rpx 10rpx 20rpx;
    display: flex;
    flex-direction: column;
  }

  .classroom-item {
    width: 100%;
    height: 220rpx;
    background-color: #ffffff;
    position: relative;
    margin-bottom: 30rpx;
  }

  .classroom-content {
    position: absolute;
    left: 0;
    width: 450rpx;
    display: block;
    padding: 15rpx 0 15rpx 20rpx;
  }

  .classroom-name {
    text-align: center;
    font-size: 38rpx;
    margin-bottom: 16rpx;
  }

  .classroom-desc {
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

  .classroom-img {
    position: absolute;
    width: 220rpx;
    height: 220rpx;
    right: 0;
    top: 0;
    text-align: center;
    line-height: 285rpx;

  }

  .classroom-img img {
    width: 100rpx;
    height: 100rpx;
  }

  .classroom-date {
    border-top: 1rpx solid #eeeeee;
    padding-top: 5rpx;
    margin-top: 5rpx;
    font-size: 25rpx;
    color: #999999;
  }

</style>

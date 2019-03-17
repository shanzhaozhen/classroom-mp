<template>
  <div class="index-container">
    <div class="card-list">
      <div class="card-item" @click="toPage('../addclassroom/main')">
        <div class="item-img bg-maroon">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p class="title-big">创建一个新班级<img src="/static/icon/right-circle.png"></p>
          <p class="title-small">创建班级，管理同学们的出勤和作业</p>
        </div>
      </div>
      <div class="card-item" @click="toPage('../search/main')">
        <div class="item-img bg-aqua">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p class="title-big">加入一个班级<img src="/static/icon/right-circle.png"></p>
          <p class="title-small">加入班级，进入班级大家庭</p>
        </div>
      </div>
    </div>
    <div class="more-pc">更多功能（请使用PC端）</div>
    <div class="card-list">
      <div class="card-item" @click="alertTips">
        <div class="item-img bg-orange">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p class="title-big">发布一份作业任务<img src="/static/icon/right-circle.png"></p>
          <p class="title-small">发起作业任务，让同学们按时提交作业</p>
        </div>
      </div>
      <div class="card-item" @click="alertTips">
        <div class="item-img bg-purple">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p class="title-big">发布一次考勤任务<img src="/static/icon/right-circle.png"></p>
          <p class="title-small">发起考勤任务，检查同学们的出勤状况</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  },
  components: {
  },
  methods: {
    toPage (url) {
      mpvue.navigateTo({ url })
    },
    alertTips () {
      mpvue.showToast({
        title: '请使用PC端',
        icon: 'none',
        duration: 3000,
        mask: true
      })
    }
  }
}
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .index-container {
    padding: 25rpx 20rpx 15rpx 20rpx;
  }

  .card-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow:hidden;
  }

  .card-item {
    position: relative;
    width: 100%;
    height: 200rpx;

    display: block;
    min-height: 90rpx;
    background: #fff;
    width: 100%;
    box-shadow: 0 2rpx 2rpx rgba(0,0,0,0.1);
    border-radius: 4rpx;
    margin-bottom: 30rpx;
  }

  .item-img {
    position: absolute;
    height: 200rpx;
    width: 200rpx;
    text-align: center;
    line-height: 270rpx;
  }

  .item-img img {
    width: 100rpx;
    height: 100rpx;
  }

  .item-content {
    position: absolute;
    top: 40rpx;
    margin-left: 10rpx;
    left: 220rpx;
    font-size: 30rpx;
  }

  .title-big {
    font-size: 38rpx;
  }

  .title-small {
    margin-top: 10rpx;
    font-size: 28rpx;
    color: #b5bbc8;
  }

  .title-big img {
    margin-left: 8rpx;
    width: 30rpx;
    height: 30rpx;
  }

  .more-pc {
    font-size: 40rpx;
    margin: 20rpx 0 10rpx 0;
  }

</style>

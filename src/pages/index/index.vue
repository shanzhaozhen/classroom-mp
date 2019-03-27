<template>
  <div class="index-container">
    <div class="card-list">
      <div class="card-item" @click="toPageIsLogin('../addclassroom/main')">
        <div class="item-img bg-maroon">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p class="title-big">创建一个新班级<img src="/static/icon/right-circle-black.png"></p>
          <p class="title-small">创建班级，管理同学们的出勤和作业</p>
        </div>
      </div>
      <div class="card-item" @click="toPageIsLogin('../search/main')">
        <div class="item-img bg-aqua">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p class="title-big">加入一个班级<img src="/static/icon/right-circle-black.png"></p>
          <p class="title-small">加入班级，进入班级大家庭</p>
        </div>
      </div>
    </div>
    <div class="more-pc">更多功能（请使用PC端）</div>
    <div class="card-list">
      <!--<div class="card-item" @click="alertTips">-->
      <div class="card-item" @click="toPage('../preadd/main')">
        <div class="item-img bg-orange">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p class="title-big">发布一份作业任务<img src="/static/icon/right-circle-black.png"></p>
          <p class="title-small">发起作业任务，让同学们按时提交作业</p>
        </div>
      </div>
      <div class="card-item" @click="alertTips">
        <div class="item-img bg-purple">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p class="title-big">发布一次考勤任务<img src="/static/icon/right-circle-black.png"></p>
          <p class="title-small">发起考勤任务，检查同学们的出勤状况</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  components: {
  },
  onLoad () {
    mpvue.getSetting({
      success (res) {
        if (!res.authSetting['scope.userLocation']) {
          mpvue.authorize({
            scope: 'scope.userLocation',
            success () {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log('取得定位权限')
            }
          })
        }
        if (!res.authSetting['scope.camera']) {
          mpvue.authorize({
            scope: 'scope.camera',
            success () {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log('取得摄像头权限')
            }
          })
        }
      }
    })
  },
  methods: {
    toPageIsLogin (url) {
      if (this.isLogin === true) {
        this.toPage(url)
      } else {
        mpvue.showToast({
          title: '请先登陆',
          icon: 'none',
          duration: 1500,
          mask: true
        })
        setTimeout(() => {
          this.toPage('../login/main')
        }, 1500)
      }
    },
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

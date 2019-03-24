<template>
  <div class="classroom-detail-container" v-if="isHave">
    <div class="classroom-info">
      <div class="classroom-name">{{detail.name}}</div>
      <div class="classroom-desc">{{detail.outline}}</div>
      <div class="classroom-desc">开始时间：{{detail.startDate}}</div>
      <div class="classroom-desc">结束时间：{{detail.endDate}}</div>
      <div class="classroom-desc">签到方式：{{detail.signInType}}</div>
      <div class="classroom-desc">签到地点：{{detail.address}}</div>
      <div class="classroom-desc">签到范围：{{detail.endDate}}</div>
      <div class="splice-line"></div>
      <div class="user-info">
        <div class="create-date">创建于：{{detail.createdDate}}</div>
      </div>
    </div>
    <div class="sumbit-signin">
      <button class="back-btn bg-purple" @click="signIn">马上签到</button>
    </div>
    <div v-show="isCamera" class="camera-box">
      <div v-show="!isViewState">
        <camera
          device-position="back"
          flash="off"
          binderror="error"
        ></camera>
        <button class="back-btn bg-green btn" @tap="takePhoto">拍照</button>
      </div>
      <div v-show="isViewState">
        <image mode="widthFix" :src="src"></image>
        <button class="back-btn bg-orange btn" @tap="rePhoto">重拍</button>
        <button class="back-btn bg-green btn" @tap="confirmPhoto">确定</button>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="no-detail">暂无数据</div>
    <button class="back-btn bg-orange" @click="toBack">点击返回</button>
  </div>
</template>

<script>
import { getSignInTaskInfo, signIn } from '@/api/classroom'
export default {
  onLoad (options) {
    if (options.id) {
      this.signInTaskId = options.id
      getSignInTaskInfo(options.id).then((data) => {
        this.detail = data
        this.isHave = true
      })
    } else {
      this.isHave = false
    }
  },
  components: {
  },
  data () {
    return {
      signInTaskId: undefined,
      isHave: false,
      isCamera: false,
      isViewState: false,
      show: 1,
      detail: {},
      homeworkTaskList: [],
      signInTaskList: [],
      src: ''
    }
  },
  computed: {

  },
  methods: {
    toBack () {
      mpvue.navigateBack({
        delta: 1
      })
    },
    toPage (url) {
      mpvue.navigateTo({ url })
    },
    signIn () {
      let signInDate = {
        signInTaskId: this.signInTaskId,
        longitude: undefined,
        latitude: undefined
      }
      mpvue.getLocation({
        type: 'gcj02',
        success (res) {
          console.log(res)
          signInDate.longitude = res.longitude
          signInDate.latitude = res.latitude
          console.log(signInDate)
          if (signInDate.signInTaskId && signInDate.longitude && signInDate.latitude) {
            signIn(signInDate).then((data) => {
              if (data.success === true) {
                mpvue.showToast({
                  title: '签到成功',
                  duration: 1500,
                  mask: true
                })
              } else {
                mpvue.showToast({
                  title: data.msg,
                  icon: 'none',
                  duration: 1500,
                  mask: true
                })
              }
            })
          } else {
            mpvue.showToast({
              title: '签到参数不正确',
              icon: 'none',
              duration: 1500,
              mask: true
            })
          }
        }
      })
      // this.isCamera = true
    },
    takePhoto () {
      const ctx = mpvue.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          console.log(res)
          this.src = res.tempImagePath
          this.isViewState = true
        }
      })
    },
    rePhoto () {
      this.isViewState = false
    },
    confirmPhoto () {
      this.isCamera = false
    }
  }
}
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .btn {
    margin-top: 10rpx;
  }

  .camera-box {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 99;
    background-color: #eeeeee;
    text-align: center;
    height: 100vh;
  }

  .camera-box camera {
    width: 100%;
    height: 300px;
  }

  .no-detail {
    margin-top: 45%;
    text-align: center;
  }

  .back-btn {
    color: #ffffff;
    width: 35%;
    height: 75rpx;
    font-size: 35rpx;
    line-height: 75rpx;
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


  .create-date {
    font-size: 25rpx;
    line-height: 75rpx;
    float: right;
    color: #999999;
  }

  .sumbit-signin {
    margin-top: 50rpx;
  }


</style>

<template>
  <div class="classroom-detail-container" v-if="isHave">
    <div class="classroom-info">
      <div class="classroom-name">{{detail.name}}</div>
      <div class="classroom-desc">{{detail.outline}}</div>
      <div class="classroom-desc">开始时间：{{detail.startDate}}</div>
      <div class="classroom-desc">结束时间：{{detail.endDate}}</div>
      <div class="classroom-desc">签到方式：{{signInTypeFilter}}</div>
      <div class="classroom-desc">签到地点：{{detail.address}}</div>
      <div class="classroom-desc">签到范围：{{detail.scope + '米'}}</div>
      <div class="splice-line"></div>
      <div class="user-info">
        <div class="create-date">创建于：{{detail.createdDate}}</div>
      </div>
    </div>
    <div class="sumbit-signin">
      <button class="back-btn bg-purple" disabled v-if="isSignIn">已签到</button>
      <button class="back-btn bg-purple" @click="signIn" v-else>马上签到</button>
    </div>
    <photograph @confirmEvent="confirmPhoto"></photograph>
  </div>
  <div v-else>
    <div class="no-detail">暂无数据</div>
    <button class="back-btn bg-orange" @click="toBack">点击返回</button>
  </div>
</template>

<script>
import photograph from '@/components/photograph'
import { getSignInTaskInfo, getSignInDetail, signIn } from '@/api/signin'
import { takeFaceToken } from '@/api/user'

export default {
  components: {
    photograph
  },
  onLoad (options) {
    if (options.id) {
      this.signInTaskId = options.id
      this.getSignInTaskInfo()
      this.getSignInDetail()
    } else {
      this.isHave = false
    }
  },
  onShow () {
    this.isCamera = false
    this.getSignInDetail()
  },
  onUnload () {
    this.$store.dispatch('SetCamera', false)
  },
  data () {
    return {
      signInTaskId: undefined,
      isHave: false,
      detail: {},
      signInDetail: null,
      signInDate: {
        signInTaskId: undefined,
        longitude: undefined,
        latitude: undefined
      }
    }
  },
  computed: {
    isSignIn () {
      if (this.signInDetail !== null) {
        return true
      }
      return false
    },
    signInTypeFilter () {
      const { signInType } = this.detail
      if (!signInType) {
        return '(无)'
      }
      let text = ''
      for (let i = 0; i < signInType.length; i++) {
        if (text) {
          text += '、'
        }
        if (signInType[i] === 1) {
          text = text + '位置定位'
        } else if (signInType[i] === 2) {
          text = text + '脸部识别'
        }
      }
      return text
    }
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
    getSignInTaskInfo () {
      getSignInTaskInfo(this.signInTaskId).then((data) => {
        this.detail = data
        this.isHave = true
      })
    },
    getSignInDetail () {
      getSignInDetail(this.signInTaskId).then((res) => {
        console.log(res)
        if (res.success === true) {
          this.signInDetail = res.data
        } else {
          this.signInDetail = null
        }
      })
    },
    async signIn () {
      this.signInDate.signInTaskId = this.signInTaskId
      const { signInType } = this.detail
      console.log(signInType)
      for (let i = 0; i < signInType.length; i++) {
        if (signInType[i] === 1) {
          console.log(1)
          await mpvue.getLocation({
            type: 'gcj02',
            success: (res) => {
              console.log(res)
              this.signInDate.longitude = res.longitude
              this.signInDate.latitude = res.latitude
              console.log(this.signInDate)
            }
          })
          if (!(this.signInDate.longitude && this.signInDate.latitude)) {
            mpvue.showToast({
              title: '位置获取失败',
              icon: 'none',
              duration: 1500,
              mask: true
            })
            return
          }
        } else if (signInType[i] === 2) {
          console.log(2)
          this.$store.dispatch('SetCamera', true)
          return
        }
      }
      this.sumbitSignIn()
    },
    async confirmPhoto (imgPath) {
      if (imgPath) {
        mpvue.showLoading({
          title: '识别中'
        })
        await takeFaceToken(imgPath).then((data) => {
          console.log(data)
          if (data.success === true) {
            this.signInDate.faceToken = data.faceToken
            console.log(this.signInDate)
            this.sumbitSignIn()
          } else {
            mpvue.hideLoading()
            mpvue.showToast({
              title: '识别失败',
              icon: 'none',
              duration: 1500,
              mask: true
            })
          }
        }).catch(() => {
          mpvue.hideLoading()
          mpvue.showToast({
            title: '识别失败',
            icon: 'none',
            duration: 1500,
            mask: true
          })
        })
      } else {
        mpvue.showToast({
          title: '照片获取失败',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    },
    sumbitSignIn () {
      console.log('发送签到请求')
      mpvue.hideLoading()
      mpvue.showLoading({
        title: '签到中'
      })
      signIn(this.signInDate).then((data) => {
        mpvue.hideLoading()
        if (data.success === true) {
          mpvue.showToast({
            title: '签到成功',
            duration: 1500,
            mask: true
          })
          this.getSignInDetail()
        } else {
          mpvue.showToast({
            title: data.msg,
            icon: 'none',
            duration: 1500,
            mask: true
          })
        }
      }).catch((data) => {
        mpvue.hideLoading()
        mpvue.showToast({
          title: data.msg,
          icon: 'none',
          duration: 1500,
          mask: true
        })
      })
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

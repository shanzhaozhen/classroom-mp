<template>
  <div class="classroom-detail-container" v-if="isHave">
    <div class="classroom-info">
      <div class="classroom-name">{{detail.name}}</div>
      <div class="classroom-desc">{{detail.outline}}</div>
      <div class="classroom-desc">开始时间：{{detail.startDate}}</div>
      <div class="classroom-desc">结束时间：{{detail.endDate}}</div>
      <div class="classroom-desc">签到方式：{{signTypeFilter}}</div>
      <div class="classroom-desc">签到地点：{{detail.address}}</div>
      <div class="classroom-desc">签到范围：{{detail.scope + '米'}}</div>
      <div class="splice-line"></div>
      <div class="user-info">
        <div class="create-date">创建于：{{detail.createdDate}}</div>
      </div>
    </div>
    <div class="sumbit-sign">
      <button class="back-btn bg-purple" disabled v-if="isSign">已签到</button>
      <button class="back-btn bg-purple" @click="sign" v-else>马上签到</button>
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
import { getSignTaskInfo, getSignsBySignTaskId, signIn } from '@/api/sign'
import { takeFaceToken } from '@/api/user'

export default {
  components: {
    photograph
  },
  onLoad (options) {
    this.clearData()
    if (options.id) {
      this.signTaskId = options.id
      this.getSignTaskInfo()
      this.getSignsBySignTaskId()
    } else {
      this.isHave = false
    }
  },
  onShow () {
    this.isCamera = false
    this.getSignsBySignTaskId()
  },
  onUnload () {
    this.$store.dispatch('SetCamera', false)
  },
  data () {
    return {
      signTaskId: undefined,
      isHave: false,
      detail: {},
      signDetail: null,
      signDate: {
        signTaskId: undefined,
        longitude: undefined,
        latitude: undefined
      }
    }
  },
  computed: {
    isSign () {
      if (this.signDetail !== null) {
        return true
      }
      return false
    },
    signTypeFilter () {
      const { signType } = this.detail
      if (!signType) {
        return '(无)'
      }
      let text = ''
      for (let i = 0; i < signType.length; i++) {
        if (text) {
          text += '、'
        }
        if (signType[i] === 1) {
          text = text + '位置定位'
        } else if (signType[i] === 2) {
          text = text + '脸部识别'
        }
      }
      return text
    }
  },
  methods: {
    clearData () {
      this.signTaskId = undefined
      this.isHave = false
      this.detail = {}
      this.signDetail = null
      this.signDate = {
        signTaskId: undefined,
        longitude: undefined,
        latitude: undefined
      }
    },
    toBack () {
      mpvue.navigateBack({
        delta: 1
      })
    },
    toPage (url) {
      mpvue.navigateTo({ url })
    },
    async getSignTaskInfo () {
      await getSignTaskInfo(this.signTaskId).then((data) => {
        this.detail = data
        this.isHave = true
      })
    },
    async getSignsBySignTaskId () {
      await getSignsBySignTaskId(this.signTaskId).then((res) => {
        if (res.success === true) {
          this.signDetail = res.data
        } else {
          this.signDetail = null
        }
      })
    },
    async sign () {
      this.signDate.signTaskId = this.signTaskId
      const { signType } = this.detail

      if (signType.indexOf(1)) {
        await mpvue.getLocation({
          type: 'gcj02',
          success: (res) => {
            this.signDate.longitude = res.longitude
            this.signDate.latitude = res.latitude
          }
        })
        if (!(this.signDate.longitude && this.signDate.latitude)) {
          mpvue.showToast({
            title: '位置获取失败',
            icon: 'none',
            duration: 1500,
            mask: true
          })
          return
        }
      }

      if (signType.indexOf(2)) {
        this.$store.dispatch('SetCamera', true)
        return
      }

      this.sumbitSign()
    },
    async confirmPhoto (imgPath) {
      if (imgPath) {
        mpvue.showLoading({
          title: '识别中'
        })
        await takeFaceToken(imgPath).then((data) => {
          if (data.success === true) {
            this.signDate.faceToken = data.faceToken
            this.sumbitSign()
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
    sumbitSign () {
      mpvue.hideLoading()
      mpvue.showLoading({
        title: '签到中'
      })
      signIn(this.signDate).then((data) => {
        mpvue.hideLoading()
        if (data.success === true) {
          mpvue.showToast({
            title: '签到成功',
            duration: 1500,
            mask: true
          })
          this.getSignsBySignTaskId()
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

  .sumbit-sign {
    margin-top: 50rpx;
  }


</style>

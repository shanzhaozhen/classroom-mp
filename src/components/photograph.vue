<template>
  <div class="photograph-container">
    <div v-if="isCamera" :class="cameraCss">
      <camera
        v-show="!isViewState"
        device-position="front"
        flash="off"
        binderror="error">
        <cover-view class="cancel-btn left-btn" @tap="cancelPhoto">取消</cover-view>
        <cover-view class="photograph-btn" @tap="takePhoto">
          <cover-image class="img" src="/static/icon/camera.png" />
        </cover-view>
      </camera>
      <cover-view class="view-photo" v-show="isViewState">
        <cover-image mode="widthFix" :src="imgPath" />
        <cover-view class="cancel-btn left-btn" @tap="cancelPhoto">取消</cover-view>
        <cover-view class="confirm-btn right-btn" v-if="isViewState" @tap="confirmPhoto">确定</cover-view>
        <cover-view class="photograph-btn" @tap="rePhoto">
          <cover-image class="img" src="/static/icon/redo.png" />
        </cover-view>
      </cover-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      imgPath: '',
      isViewState: false
    }
  },
  computed: {
    ...mapGetters([
      'isCamera']),
    cameraCss () {
      if (this.isCamera) {
        return 'camera-box'
      }
      return ''
    }
  },
  methods: {
    refreshFaceToken () {
      this.isCamera = true
    },
    takePhoto () {
      const ctx = mpvue.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: (res) => {
          console.log(res)
          this.imgPath = res.tempImagePath
          this.isViewState = true
        }
      })
    },
    rePhoto () {
      this.imgPath = ''
      this.isViewState = false
    },
    confirmPhoto () {
      this.isViewState = false
      this.$store.dispatch('SetCamera', false)

      this.$emit('confirmEvent', this.imgPath)
    },
    cancelPhoto () {
      this.$store.dispatch('SetCamera', false)
    }
  }
}
</script>

<style scoped>
  .photograph-container {
    background-color: #eeeeee;
  }

  .camera-box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
  }

  .camera-box camera {
    width: 100%;
    height: 100vh;
  }

  .photograph-btn {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 70rpx;
    width: 110rpx;
    height: 110rpx;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    opacity: 0.6;
    background: white;
  }

  .photograph-btn .img {
    width: 60rpx;
    height: 60rpx;
    margin: auto;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .cancel-btn,
  .confirm-btn {
    position: absolute;
    top: 35rpx;
    width: 85rpx;
    height: 40rpx;
    -moz-border-radius: 45%;
    -webkit-border-radius: 45%;
    border-radius: 45%;
    opacity: 0.6;
    background: white;
    font-size: 25rpx;
    line-height: 40rpx;
    text-align: center;
  }

  .left-btn {
    left: 30rpx;
  }

  .right-btn {
    right: 30rpx;
  }

  .view-photo {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>

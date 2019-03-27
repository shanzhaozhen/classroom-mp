<template>
  <div class="addclassroom-container">
    <div class="form-box">
      <div class="input-box">
        <span>真实姓名：</span>
        <input type="text" placeholder="请输入真实姓名" v-model="formData.fullName" required/>
      </div>
      <div class="input-box">
        <span>学号：</span>
        <input type="text" placeholder="请输入学号" v-model="formData.number" required/>
      </div>
      <div class="input-box">
        <span>录入脸谱：</span>
        <button class="ms-btn bg-orange" @click="refreshFaceToken" v-if="isHaveFaceToken">重新录入</button>
        <button class="ms-btn bg-orange" @click="refreshFaceToken">录入脸谱</button>
      </div>
    </div>
    <button class="add-btn mt-50 mb-35 bg-aqua" @click="sumbitFaceToken">提交</button>
    <div v-if="isCamera" class="camera-box">
      <camera
        v-show="!isViewState"
        device-position="front"
        flash="off"
        binderror="error"
      >
        <cover-view class="cover">
          <cover-view class="take-btn" @tap="takePhoto">
            <cover-image class="img" src="/static/icon/camera.png" />
          </cover-view>
          <cover-view class="corner-btn corner-left-btn" @tap="cancelPhoto">取消</cover-view>
        </cover-view>
      </camera>
      <div class="view-box" v-show="isViewState">
        <image mode="widthFix" :src="imgPath"></image>
        <div class="take-viwe-btn" @tap="rePhoto">
          <img class="img" src="/static/icon/redo.png">
        </div>
        <div class="corner-btn corner-left-btn" @tap="cancelPhoto">取消</div>
        <div class="corner-btn corner-right-btn" @tap="confirmPhoto">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { updateFaceToken, takeFaceToken } from '@/api/user'

export default {
  components: {
  },
  onShow () {
    this.isCamera = false
    this.isViewState = false
    this.formData.faceToken = this.faceToken
    this.formData.fullName = this.fullName
    this.formData.number = this.number
  },
  data () {
    return {
      formData: {
        faceToken: '',
        fullName: '',
        number: ''
      },
      imgPath: '',
      isCamera: false,
      isViewState: false
    }
  },
  computed: {
    ...mapGetters([
      'faceToken',
      'fullName',
      'number']),
    isHaveFaceToken () {
      if (this.faceToken) {
        if (this.faceToken !== '') {
          return true
        }
      }
      return false
    }
  },
  methods: {
    sumbitFaceToken () {
      if (!this.formData.faceToken || !this.formData.fullName || !this.formData.number) {
        mpvue.showToast({
          title: '字段不能为空',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      } else {
        updateFaceToken().then((data) => {
          if (data.success === true) {
            mpvue.showToast({
              title: data.msg,
              duration: 1500,
              mask: true
            })
            setTimeout(() => {
              mpvue.navigateBack({
                delta: 1
              })
            }, 1500)
          } else {
            mpvue.showToast({
              title: '创建失败',
              duration: 1500,
              mask: true
            })
          }
        })
      }
    },
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
      this.isViewState = false
    },
    confirmPhoto () {
      takeFaceToken(this.imgPath).then((data) => {
        console.log(data)
      })
      // this.isViewState = false
      // this.isCamera = false
    },
    cancelPhoto () {
      this.isViewState = false
      this.isCamera = false
    }
  }
}
</script>

<style>

  .addclassroom-container {
    padding-top: 25rpx;
    width: 100%;
  }

  .form-box {
    margin-bottom: 50rpx;
  }

  .input-box {
    display: flex;
    flex-direction: column;
    padding: 0 20rpx;
    margin-bottom: 20rpx;
  }

  .input-box span {
    font-size: 35rpx;
  }

  .input-box input[type='text'] {
    height: 45rpx;
    border: 1rpx solid #eee;
    font-size: 35rpx;
  }

  .input-box textarea {
    border: 1rpx solid #eee;
    font-size: 35rpx;
  }

  .input-box input[type='radio'] {
    display: inline-block;
    width: 20%;
  }

  .add-btn {
    color: #ffffff;
    width: 95%;
    height: 75rpx;
    font-size: 35rpx;
    line-height: 75rpx;
  }

  .ms-btn {
    float: right;
    color: #ffffff;
    width: 180rpx;
    height: 45rpx;
    font-size: 30rpx;
    line-height: 45rpx;
  }

  .cover {
    position: relative;
    display: flex;
  }

/*
  .take-btn1 {
    position: relative;
    left: 0;
    right: 0;
    bottom: 45rpx;
    width: 110rpx;
    height: 110rpx;
    margin-left: auto;
    margin-right: auto;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    opacity: 0.6;
    background: white;
    z-index: 99;
  }
*/
  .take-btn {
    position: relative;
    width: 110rpx;
    height: 110rpx;
    /*margin: auto;*/
    margin-left: auto;
    margin-right: auto;
    margin-top: 85vh;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    opacity: 0.6;
    background: white;
  }

  .take-viwe-btn {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 6vh;
    width: 110rpx;
    height: 110rpx;
    margin-left: auto;
    margin-right: auto;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    opacity: 0.6;
    background: white;
  }

  .take-btn .img,
  .take-viwe-btn .img {
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

  .corner-btn {
    position: absolute;
    top: 35rpx;
    width: 90rpx;
    height: 45rpx;
    -moz-border-radius: 40%;
    -webkit-border-radius: 40%;
    border-radius: 40%;
    opacity: 0.6;
    background: white;
    font-size: 25rpx;
    line-height: 45rpx;
  }

  .corner-left-btn {
    left: 30rpx;
  }

  .corner-right-btn {
    right: 30rpx;
  }

  .camera-box {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #eeeeee;
    text-align: center;
    z-index: 10;
  }

  .camera-box camera {
    width: 100%;
    height: 100vh;
  }

  .view-box {
    width: 100%;
    height: 100vh;
  }


</style>

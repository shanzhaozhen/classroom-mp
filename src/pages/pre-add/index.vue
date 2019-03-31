<template>
  <div class="classroom-add-container">
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
        <button class="ms-btn bg-orange" @click="refreshFaceToken" v-if="isHaveFaceToken">重新生成</button>
        <button class="ms-btn bg-orange" @click="refreshFaceToken" v-else>生成脸谱</button>
      </div>
    </div>
    <button class="add-btn mt-50 mb-35 bg-aqua" @click="sumbitFaceToken">提交</button>
    <photograph @confirmEvent="getFaceToken"></photograph>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { updateFaceToken, takeFaceToken } from '@/api/user'
import photograph from '@/components/photograph'

export default {
  components: {
    photograph
  },
  onUnload () {
    this.$store.dispatch('SetCamera', false)
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
      }
    }
  },
  computed: {
    ...mapGetters([
      'faceToken',
      'fullName',
      'number']),
    isHaveFaceToken () {
      if (this.formData.faceToken) {
        return true
      }
      return false
    }
  },
  methods: {
    sumbitFaceToken () {
      if (this.formData.faceToken && this.formData.fullName && this.formData.number) {
        mpvue.showLoading({
          title: '提交中'
        })
        updateFaceToken(this.formData).then((data) => {
          mpvue.hideLoading()
          if (data.success === true) {
            this.$store.dispatch('GetUserInfo')
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
            mpvue.hideLoading()
            mpvue.showToast({
              title: '录入失败',
              icon: 'none',
              duration: 1500,
              mask: true
            })
          }
        })
      } else {
        mpvue.showToast({
          title: '字段不能为空',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      }
    },
    refreshFaceToken () {
      this.$store.dispatch('SetCamera', true)
    },
    getFaceToken (imgPath) {
      mpvue.showLoading({
        title: '识别中'
      })
      takeFaceToken(imgPath).then((data) => {
        mpvue.hideLoading()
        if (data.success === true) {
          this.formData.faceToken = data.faceToken
          mpvue.showToast({
            title: '识别成功',
            duration: 1500,
            mask: true
          })
        } else {
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
    }
  }
}
</script>

<style>

  .classroom-add-container {
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

</style>

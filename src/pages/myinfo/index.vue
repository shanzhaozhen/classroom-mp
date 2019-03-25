<template>
  <div class="myinfo-container">
    <div class="form-box" v-if="userInfo != null">
      <div class="input-box">
        <div class="label-name">用户名</div>
        <div class="label-value">{{userInfo.username}}</div>
      </div>
      <div class="input-box">
        <div class="label-name">真实姓名</div>
        <div class="label-value">{{userInfo.fullName}}</div>
      </div>
      <div class="input-box">
        <div class="label-name">昵称</div>
        <div class="label-value">{{userInfo.nickName}}</div>
      </div>
      <div class="input-box">
        <div class="label-name">微信账号</div>
        <div class="label-value" v-if="isBinding" @click="unbinding">点击解绑</div>
        <div class="label-value" v-else @click="binding">点击绑定</div>
      </div>
    </div>
    <button class="logout-btn mt-50 mb-35 bg-aqua" @click="logout">退出登录</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isLogin',
      'userInfo']),
    isBinding () {
      if (this.userInfo) {
        if (this.userInfo.openId) {
          return true
        }
      }
      return false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        mpvue.navigateBack({
          delta: 1
        })
      })
    },
    binding () {
      mpvue.login({
        success: (res) => {
          if (res.code) {
            this.$store.dispatch('Binding', res.code).then((data) => {
              if (data.success === true) {
                mpvue.showToast({
                  title: data.msg,
                  duration: 1500,
                  mask: true
                })
                this.$store.dispatch('GetUserInfo')
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
              title: '登录失败' + res.errMsg,
              icon: 'none',
              duration: 1500,
              mask: true
            })
          }
        }
      })
    },
    unbinding () {
      console.log()
      this.$store.dispatch('Unbinding').then((data) => {
        if (data.success === true) {
          mpvue.showToast({
            title: data.msg,
            duration: 1500,
            mask: true
          })
          this.$store.dispatch('GetUserInfo')
        } else {
          mpvue.showToast({
            title: data.msg,
            icon: 'none',
            duration: 1500,
            mask: true
          })
        }
      })
    }
  }
}
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .myinfo-container {
    padding-top: 25rpx;
    width: 100%;
  }

  .form-box {
    padding: 20rpx;
    background-color: #ffffff;
  }

  .input-box {
    position: relative;
    height: 45rpx;
    padding: 5rpx 20rpx;
    margin-bottom: 20rpx;
    border-bottom: 1rpx solid #eee;
  }

  .label-name {
    position: absolute;
    left: 0;
    font-size: 40rpx;
  }

  .label-value {
    position: absolute;
    right: 20rpx;
    font-size: 32rpx;
    color: #999999;
  }

  .logout-btn {
    margin-top: 60rpx;
    color: #ffffff;
    width: 95%;
    height: 75rpx;
    font-size: 35rpx;
    line-height: 75rpx;
  }


</style>

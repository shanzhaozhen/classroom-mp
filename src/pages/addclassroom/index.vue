<template>
  <div class="addclassroom-container">
    <div class="form-box">
      <div class="input-box">
        <span>班级名称：</span>
        <input type="text" placeholder="请输入班级名称" v-model="name" required/>
      </div>
      <div class="input-box">
        <span>班级概述：</span>
        <textarea placeholder="请填写班级概述" rows="6" v-model="outline"></textarea>
      </div>
      <div class="input-box">
        <span>发布状态：</span>
        <radio-group class="radio-group" bindchange="radioChange"  @change="radioChange">
          <label class="radio">
            <radio value="true" checked="true"/>发布
          </label>
          <label class="radio">
            <radio value="flase"/>下线
          </label>
        </radio-group>
      </div>
    </div>
    <button class="add-btn mt-50 mb-35 bg-aqua">创建</button>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      name: '',
      outline: '',
      announce: true
    }
  },
  methods: {
    radioChange (e) {
      this.announce = e.target.value
      console.log(this.announce)
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


</style>

<template>
  <div class="index-container">
    <div class="card-list">
      <div class="card-item">
        <div class="item-img">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p>创建一个新班级</p>
          <p>创建班级，管理同学们的出勤和作业</p>
        </div>
      </div>
      <div class="card-item">
        <div class="item-img">
          <img src="/static/icon/check-circle.png">
        </div>
        <div class="item-content">
          <p>加入班级</p>
          <p>加入班级，进入班级大家庭</p>
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
  }
}
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .index-container {
    padding: 40rpx 20rpx 15rpx 20rpx;
    /*width: 100%;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*align-items: center;*/
    /*padding-top: 20px;*/
    /*overflow:hidden;*/
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
    min-height: 90px;
    background: #fff;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    border-radius: 2px;
    margin-bottom: 15px;

  }

  .item-img {
    position: absolute;
    height: 200rpx;
    width: 200rpx;
    background-color: #00c0ef;
    text-align: center;
    line-height: 270rpx;
  }

  .item-img img {
    width: 100rpx;
    height: 100rpx;
  }

  .item-content {
    position: absolute;
    margin-left: 10rpx;
    left: 200rpx;
    font-size: 30rpx;
  }

</style>

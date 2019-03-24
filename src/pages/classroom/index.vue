<template>
  <div class="classroom-container">
    <div class="classroom-list" v-if="isLogin">
      <div class="classroom-item" @click="toDetailPage(item.id)" v-for="(item, index) in list" :key="index">
        <div class="classroom-content">
          <div class="classroom-info" >
            <div class="classroom-name">{{item.name}}</div>
            <div class="classroom-desc">{{item.outline}}</div>
          </div>
        </div>
        <div class="classroom-img bg-aqua">
          <img src="/static/icon/right-circle-write.png">
        </div>
        <div class="classroom-date">创建时间：{{item.createdDate}}</div>
      </div>
    </div>
    <div class="no-login" v-else>
      尚未登陆，请先登陆
      <button class="login-btn bg-aqua" @click="toPage('../login/main')">登陆</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { myClassroom } from '@/api/classroom'
export default {
  components: {
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  data () {
    return {
      list: []
    }
  },
  onShow () {
    if (this.isLogin) {
      this.getList()
    }
  },
  methods: {
    getList () {
      myClassroom().then((data) => {
        console.log(data)
        this.list = data
      })
    },
    toPage (url) {
      mpvue.navigateTo({ url })
    },
    toDetailPage (id) {
      const url = '../classroomdetail/main?id=' + id
      this.toPage(url)
    }
  }
}
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .no-login {
    text-align: center;
    margin-top: 45%;
  }

  .login-btn {
    color: #ffffff;
    width: 35%;
    height: 75rpx;
    font-size: 35rpx;
    line-height: 75rpx;
  }

  .classroom-list {
    padding: 25rpx 20rpx 10rpx 20rpx;
    display: flex;
    flex-direction: column;
  }

  .classroom-item {
    width: 100%;
    height: 220rpx;
    background-color: #ffffff;
    position: relative;
    margin-bottom: 30rpx;
  }

  .classroom-content {
    position: absolute;
    left: 0;
    width: 450rpx;
    display: block;
    padding: 15rpx 0 15rpx 20rpx;
  }

  .classroom-name {
    text-align: center;
    font-size: 38rpx;
    margin-bottom: 16rpx;
  }

  .classroom-desc {
    text-overflow: ellipsis;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #656565;
    font-size: 35rpx;
  }

  .classroom-img {
    position: absolute;
    width: 220rpx;
    height: 220rpx;
    right: 0;
    top: 0;
    text-align: center;
    line-height: 285rpx;

  }

  .classroom-img img {
    width: 100rpx;
    height: 100rpx;
  }

  .classroom-date {
    position: absolute;
    bottom: 10rpx;
    left: 15rpx;
    border-top: 1rpx solid #eeeeee;
    font-size: 25rpx;
    color: #999999;
  }

</style>

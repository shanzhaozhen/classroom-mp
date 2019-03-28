<template>
  <div class="search-container">
    <div class="search-bar">
      <img src="/static/icon/search.png">
      <input type="text" placeholder="请输入你想加入的班级" v-model="keyword"/>
      <div class="search-btn" @click="getClassroomDate">搜索</div>
    </div>
    <div class="result-container">
      <div class="list" v-if="list.length > 0">
        <div v-for="(item, index) in list" :key="index">
          <div class="item">
            <div class="user-info">
              <img :src="item.headmasterInfo.avatarUrl">
              <div class="username">{{item.headmasterInfo.nickName}}</div>
              <div class="join" @click="joinIn(item.id)">马上加入</div>
            </div>
            <div class="item-content">
              <div class="class-name">{{item.name}}</div>
              <div class="class-desc">{{item.outline}}</div>
            </div>
            <div class="item-date">
              <span>创建于{{item.createdDate}}</span>
            </div>
          </div>
          <div class="splice-bar"></div>
        </div>
      </div>
      <div class="no-result" v-else>
        没有找到你需要的结果
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { searchClassroom, joinClassroom } from '@/api/classroom'

export default {
  components: {
  },
  data () {
    return {
      keyword: '',
      list: []
    }
  },
  computed: {
    ...mapGetters([
      'faceToken',
      'fullName',
      'number'])
  },
  onShow () {
    this.getClassroomDate()
  },
  methods: {
    toPage (url) {
      mpvue.navigateTo({ url })
    },
    getClassroomDate () {
      searchClassroom(this.keyword).then((data) => {
        this.list = data
      })
    },
    joinIn (id) {
      if (this.faceToken && this.fullName && this.number) {
        joinClassroom(id).then((data) => {
          console.log(data)
          if (data.success === true) {
            mpvue.showToast({
              title: '加入成功',
              duration: 3000,
              mask: true
            })
          } else {
            mpvue.showToast({
              title: data.msg,
              icon: 'none',
              duration: 3000,
              mask: true
            })
          }
        })
      } else {
        mpvue.showToast({
          title: '个人信息不全或者未录入脸谱',
          icon: 'none',
          duration: 3000,
          mask: true
        })
        setTimeout(() => {
          this.toPage('../preadd/main')
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>

  .search-container {
    padding-top: 15rpx;
  }

  .no-result {
    text-align: center;
    margin-top: 40%;
  }

  .search-bar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid #d2d6de;
  }

  .search-bar img {
    position: absolute;
    top: 8rpx;
    left: 5%;
    width: 40rpx;
    height: 40rpx;
  }

  .search-bar input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance:none ;
    outline: 0;
    width: 85%;
    height: 40rpx;
    border: 0px solid #fff;
    border-radius: 20px;
    box-shadow:0 0 10rpx 4rpx rgba(0,0,0,0.1);
    padding: 0 0 0 60rpx;
    background-color: #eeeeee;
    font-size: 32rpx;
  }

  .search-btn {
    position: absolute;
    top: 8rpx;
    right: 6%;
    color: #000000;
    font-size: 30rpx;
    line-height: 40rpx;
    z-index: 2;
  }

  .result-container {
    padding: 5rpx 0 0 0;
  }

  .item {
    width: 100%;
    height: 260rpx;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .splice-bar {
    width: 100%;
    height: 25rpx;
    background-color: #eee;
  }

  .user-info {
    padding: 10rpx 0 5rpx 15rpx;
    position: relative;
  }

  .user-info img {
    width: 70rpx;
    height: 70rpx;
    border-radius: 50%;
    float: left;
  }

  .username {
    font-size: 35rpx;
    float: left;
    margin-left: 10rpx;
    line-height: 70rpx;
  }

  .join {
    position: absolute;
    top: 50rpx;
    right: 30rpx;
    border: 1rpx solid #ff851b;
    color: #ff851b;
    font-size: 25rpx;
    padding: 3rpx 10rpx;
  }

  .item-content {
    padding: 0 18rpx 0 18rpx;
  }

  .class-name {
    font-size: 34rpx;
  }

  .class-desc {
    font-size: 30rpx;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10rpx;
    color: #656565;
  }

  .item-date {
    position: absolute;
    bottom: 10rpx;
    font-size: 25rpx;
    padding-top: 5rpx;
    border-top: 2rpx solid #9b9b9b;
    width: 100%;
    text-align: right;
  }

  .item-date span {
    margin-right: 12rpx;
  }

</style>

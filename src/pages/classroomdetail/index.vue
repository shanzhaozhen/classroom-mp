<template>
  <div class="classroom-detail-container" v-if="isHave">
    <div class="classroom-info">
      <div class="classroom-name">{{detail.name}}</div>
      <div class="classroom-desc">{{detail.outline}}</div>
      <div class="splice-line"></div>
      <div class="user-info">
        <div class="avatar">
          <img :src="detail.headmasterInfo.avatarUrl">
        </div>
        <span class="username">{{detail.headmasterInfo.nickName}}</span>
        <div class="create-date">创建于：{{detail.createdDate}}</div>
      </div>
    </div>
    <div class="classroom-content">
      <div class="swit-bar">
        <div :class="{'bar': true, 'bar-active': show === 1}" @click="switBar(1)">作业</div>
        <div :class="{'bar': true, 'bar-active': show === 2}" @click="switBar(2)">签到</div>
      </div>
      <div class="classroom-homework" v-show="show === 1">
        <div v-if="homeworkTaskList.length > 0">
          <div class="homework-item" v-for="(homeworkTask, index) in homeworkTaskList" :key="index" @click="toPage('../homeworkdetail/main?id=' + homeworkTask.id)">
            <div class="homework-content">
              <div class="homework-name">{{homeworkTask.name}}</div>
              <div class="homework-desc">{{homeworkTask.outline}}</div>
            </div>
            <div class="homework-dete">
              完成时间：{{homeworkTask.startDate}}-{{homeworkTask.endDate}}
            </div>
          </div>
        </div>
        <div class="homework-item" v-else>
          <div class="no-homework">暂无作业任务</div>
        </div>
      </div>
      <div class="classroom-signin" v-show="show === 2">
        <div v-if="signInTaskList.length > 0">
          <div class="homework-item" v-for="(signInTask, index) in signInTaskList" :key="index" @click="toPage('../signindetail/main?id=' + signInTask.id)">
            <div class="homework-content">
              <div class="homework-name">{{signInTask.name}}</div>
              <div class="homework-desc">{{signInTask.outline}}</div>
            </div>
            <div class="homework-dete">
              完成时间：{{signInTask.startDate}}-{{signInTask.endDate}}
            </div>
          </div>
        </div>
        <div class="homework-item" v-else>
          <div class="no-homework">暂无作业任务</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="no-detail">暂无数据</div>
    <button class="back-btn bg-orange" @click="toBack">点击返回</button>
  </div>
</template>

<script>
import { getClassroomInfo, getHomeworkTask, getSignInTask } from '@/api/classroom'
export default {
  onLoad (options) {
    if (options.id) {
      this.classroomId = options.id
      getClassroomInfo(options.id).then((data) => {
        this.detail = data
        this.isHave = true
        this.getHomeworkTaskDate()
        this.getSignInTaskDate()
      })
    } else {
      this.isHave = false
    }
  },
  components: {
  },
  data () {
    return {
      classroomId: undefined,
      isHave: false,
      show: 1,
      detail: {},
      homeworkTaskList: [],
      signInTaskList: []
    }
  },
  computed: {

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
    switBar (index) {
      this.show = index
    },
    getHomeworkTaskDate () {
      if (this.classroomId) {
        getHomeworkTask(this.classroomId).then((data) => {
          console.log(data)
          this.homeworkTaskList = data
        })
      } else {
        this.homeworkTaskList = []
      }
    },
    getSignInTaskDate () {
      if (this.classroomId) {
        getSignInTask(this.classroomId).then((data) => {
          this.signInTaskList = data
        })
      } else {
        this.signInTaskList = []
      }
    }
  }
}
</script>

<style>

  page {
    background-color: #eeeeee;
  }

  .no-detail {
    margin-top: 45%;
    text-align: center;
  }

  .no-homework, no-sign {
    margin-top: 90rpx;
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

  .avatar {
    float: left;
  }

  .avatar img {
    width: 75rpx;
    height: 75rpx;
    border-radius: 50%;
  }

  .username {
    float: left;
    font-size: 35rpx;
    display: inline-block;
    line-height: 75rpx;
    margin-left: 5rpx;
  }

  .create-date {
    font-size: 25rpx;
    line-height: 75rpx;
    float: right;
    color: #999999;
  }

  .classroom-homework, .classroom-signin {
    background-color: #eeeeee;
  }

  .classroom-content {
    margin-top: 20rpx;
  }

  .classroom-content {
    background-color: #ffffff;
  }

  .swit-bar {
    height: 80rpx;
  }

  .bar {
    width: 50%;
    float: left;
    text-align: center;
    height: 80rpx;
    line-height: 80rpx;
  }

  .bar-right-spile {
    border-right: 1rpx solid #000000;
  }

  .bar-left-spile {
    border-right: 1rpx solid #000000;
  }

  .bar-active {
    border-bottom: 3rpx solid #ff851b;
    color: #ff851b;
  }

  .homework-item {
    background-color: #ffffff;
    margin-bottom: 15rpx;
    position: relative;
    height: 210rpx;
    padding: 10rpx 20rpx;
    margin-top: 1rpx;
  }

  .homework-name {

  }

  .homework-desc {
    margin-top: 10rpx;
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

  .homework-dete {
    margin-top: 10rpx;
    padding-top: 10rpx;
    border-top: 1rpx solid #eeeeee;
    color: #999999;
    font-size: 28rpx;
    position: absolute;
    bottom: 0rpx;
    left: 20rpx;
  }

</style>

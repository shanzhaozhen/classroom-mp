<template>
  <div class="addclassroom-container">
    <div class="form-box">
      <div class="input-box">
        <span>作业内容：</span>
        <textarea placeholder="请填写班级概述" rows="6" v-model="homeworkData.content"></textarea>
      </div>
      <div class="input-box">
        <span>附件：<button class="file-btn bg-orange" @click="upload">选择附件</button></span>
        <div class="file-list" v-if="fileName">{{fileName}}</div>
      </div>
      <div></div>
    </div>
    <button class="add-btn mt-50 mb-35 bg-aqua" @click="createHomework">提交</button>
  </div>
</template>

<script>
import { sumbitHomework } from '@/api/classroom'
import { upload } from '@/utils/request'

export default {
  components: {
  },
  data () {
    return {
      homeworkData: {
        homeworkTaskId: undefined,
        content: '',
        fileUrl: ''
      },
      fileName: ''
    }
  },
  onLoad (options) {
    this.homeworkData.homeworkTaskId = options.id
  },
  methods: {
    createHomework () {
      if (!this.homeworkData.content) {
        mpvue.showToast({
          title: '字段不能为空',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      } else {
        sumbitHomework(this.homeworkData).then((data) => {
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
              title: '提交失败',
              duration: 1500,
              mask: true
            })
          }
        })
      }
    },
    upload () {
      mpvue.chooseMessageFile({
        count: 1,
        // type: 'file',
        success: (res) => {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles
          upload(tempFilePaths[0].path).then((data) => {
            console.log(data)
            if (data.success === true) {
              this.fileName = tempFilePaths[0].name
              this.homeworkData.fileUrl = data.relativePath
              mpvue.showToast({
                title: '上传成功',
                duration: 1500,
                mask: true
              })
            } else {
              mpvue.showToast({
                title: '上传失败',
                icon: 'none',
                duration: 1500,
                mask: true
              })
            }
          })
        }
      })
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

  .file-btn {
    float: right;
    color: #ffffff;
    width: 180rpx;
    height: 45rpx;
    font-size: 30rpx;
    line-height: 45rpx;
  }


</style>

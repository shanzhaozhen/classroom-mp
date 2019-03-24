<template>
  <div class="addclassroom-container">
    <div class="form-box">
      <div class="input-box">
        <span>作业内容：</span>
        <textarea placeholder="请填写班级概述" rows="6" v-model="homeworkData.outline"></textarea>
      </div>
      <div class="input-box">
        <span>附件：</span>
        <div></div>
        <button class="file-btn bg-orange" @click="upload">选择附件</button>
      </div>
    </div>
    <button class="add-btn mt-50 mb-35 bg-aqua" @click="createHomework">提交</button>
  </div>
</template>

<script>
import { sumbitHomework } from '@/api/classroom'

export default {
  components: {
  },
  data () {
    return {
      homeworkData: {
        content: ''
      }
    }
  },
  methods: {
    createHomework () {
      if (!this.classroom.content) {
        mpvue.showToast({
          title: '字段不能为空',
          icon: 'none',
          duration: 1500,
          mask: true
        })
      } else {
        sumbitHomework(this.classroom).then((data) => {
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
        count: 10,
        // type: 'file',
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFiles
          console.log(res)
          console.log(tempFilePaths)

          mpvue.uploadFile({
            url: 'http://127.0.0.1:8090/classroom/upload', // 仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              user: 'test'
            },
            success (res) {
              const data = res.data
              console.log(data)
              // do something
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
    color: #ffffff;
    width: 180rpx;
    height: 45rpx;
    font-size: 30rpx;
    line-height: 45rpx;
  }


</style>

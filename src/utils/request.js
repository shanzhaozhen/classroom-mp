import store from '@/store'

const api = 'http://god.ngrok.xiaomiqiu.cn/classroom'

const TOKEN_HEADER = 'Class-Token'

export function http (url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    // 执行异步请求
    if (type === 'GET' || type === 'get') {
      // 准备url、query参数数据
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr = dataStr + key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }

      mpvue.request({
        url: `${api}/${url}`, // 仅为示例，并非真实的接口地址
        method: 'get',
        header: {
          'content-type': 'application/json', // 默认值
          [TOKEN_HEADER]: store.state.token
        },
        success (res) {
          resolve(res.data)
        },
        fail (error) {
          errorHandle(error, reject)
        }
      })
    } else {
      mpvue.request({
        url: `${api}/${url}`, // 仅为示例，并非真实的接口地址
        data: data,
        method: type,
        header: {
          'content-type': 'application/json', // 默认值
          [TOKEN_HEADER]: store.state.token
        },
        success (res) {
          resolve(res.data)
        },
        fail (error) {
          console.log(error)
          errorHandle(error, reject)
        }
      })
    }
  })
}

function errorHandle (error, reject) {
  if (error.status === 401) {
    /**
     * (4010, "密码账号认证出错")
     * (4011, "token签名异常")-
     * (4012, "token格式不正确")
     * (4013, "token已过期")
     * (4014, "不支持该token")
     * (4015, "token参数异常")
     * (4016, "token错误")
     */
    if (error.code === 4010) {
      mpvue.showToast({
        title: '账号或密码错误',
        icon: 'none',
        duration: 3000,
        mask: true
      })
    } else if (error.code > 4010 && error.code <= 4016) {
      mpvue.showToast({
        title: '登陆过期或超时',
        icon: 'none',
        duration: 3000,
        mask: true
      })
      setTimeout(() => {
        const url = '../login/main'
        mpvue.navigateTo({ url })
      }, 3000)
    }
    store.dispatch('LogOut')
  } else {
    if (error.message) {
      mpvue.showToast({
        title: error.message,
        icon: 'none',
        duration: 3000,
        mask: true
      })
    } else {
      mpvue.showToast({
        title: error.errMsg,
        icon: 'none',
        duration: 3000,
        mask: true
      })
    }
    return reject(error)
  }
  reject(error.data)
}

export function upload (url, filePath, fileName) {
  return new Promise((resolve, reject) => {
    mpvue.uploadFile({
      url: `${api}/${url}`, // 仅为示例，非真实的接口地址
      filePath: filePath,
      name: 'file',
      formData: {
        fileName: fileName
      },
      header: {
        'content-type': 'application/json', // 默认值
        [TOKEN_HEADER]: store.state.token
      },
      success (res) {
        console.log(res)
        resolve(JSON.parse(res.data))
      },
      fail (err) {
        reject(err)
      }
    })
  })
}

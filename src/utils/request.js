const api = 'http://127.0.0.1:8090/classroom'
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
        data: {
        },
        method: 'get',
        header: {
          'content-type': 'application/json', // 默认值
          [TOKEN_HEADER]: ''
        },
        success (res) {
          resolve(res)
        },
        fail (error) {
          reject(error)
        }
      })
    } else {
      mpvue.request({
        url: `${api}/${url}`, // 仅为示例，并非真实的接口地址
        data: data,
        method: type,
        header: {
          'content-type': 'application/json', // 默认值
          [TOKEN_HEADER]: ''
        },
        success (res) {
          resolve(res)
        },
        fail (error) {
          reject(error)
        }
      })
    }
  })
}

import { http } from '@/utils/request'

/**
 * 登陆请求
 */
export function login ({ username, password, rememberMe }) {
  return http('login', 'post', {
    username,
    password,
    rememberMe
  })
}

export function wechatLogin (code) {
  return http('wechat/login', 'post', code)
}

export function getUserInfo () {
  return http('admin/user/info', 'get')
}

export function updateUserInfo () {
  return http('admin/user/update', 'get')
}

export function getOpenidByCode (data) {
  console.log(data)
  return http('wechat/openid', 'get', data)
}

// export function logout() {
//   return request({
//     url: '/user/logout',
//     method: 'post'
//   })
// }

import { http, upload } from '@/utils/request'

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

export function updateUserInfo (wechatUserInfo) {
  return http('wechat/update/userinfo', 'put', wechatUserInfo)
}

export function getOpenidByCode (data) {
  return http('wechat/openid', 'get', data)
}

export function binding (code) {
  return http('admin/user/binding', 'put', code)
}

export function unbinding () {
  return http('admin/user/unbinding', 'put')
}

export function updateFaceToken () {
  return http('admin/user/facetoken', 'put')
}

export function takeFaceToken (imgPath) {
  return upload('admin/user/face', imgPath)
}

// export function logout() {
//   return request({
//     url: '/user/logout',
//     method: 'post'
//   })
// }

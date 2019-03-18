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

export function getUserInfo () {
  return http('admin/user/info', 'get')
}

// export function logout() {
//   return request({
//     url: '/user/logout',
//     method: 'post'
//   })
// }

/**
 * 通过mutations间接更新state的多个方法对象
 */
import {
  SET_TOKEN
} from './mutations-type'

import { login } from '@/api/login'

const TOKEN_KEY = 'access-token'

export default {
  SetToken ({ commit }, token) {
    commit(SET_TOKEN, {token})
  },
  Login ({ commit }, userInfo) {
    userInfo.username = userInfo.username.trim()
    return new Promise((resolve, reject) => {
      login(userInfo).then(data => {
        console.log(data)
        console.log(data[TOKEN_KEY])
        commit('SET_TOKEN', data[TOKEN_KEY])
        resolve()
      }).catch(error => {
        reject(error.data)
      })
    })
  },

  // 获取用户信息
  GetUserInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      // getUserInfo().then(data => {
      //   if (data.success === true) {
      //     // if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
      //     commit('SET_ROLES', data.roles)
      //     // } else {
      //     //   reject('getInfo: roles must be a non-null array !')
      //     // }
      //     commit('SET_NAME', data.nickname)
      //     commit('SET_AVATAR', data.avatar)
      //   } else {
      //     reject(data)
      //   }
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // 登出
  LogOut ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_USERINFO', {})
      resolve()
    })
  }
}

/**
 * 直接更新state的多个方法对象
 */
import {
  SET_TOKEN
} from './mutations-type'

export default {
  [SET_TOKEN] (state, { token }) {
    state.token = token
  },

  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

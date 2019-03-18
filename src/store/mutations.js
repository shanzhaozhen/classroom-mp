/**
 * 直接更新state的多个方法对象
 */
import {
  SET_TOKEN,
  SET_USERINFO
} from './mutations-type'

export default {
  [SET_TOKEN]: (state, { token }) => {
    state.token = token
  },
  [SET_USERINFO]: (state, { userinfo }) => {
    state.userinfo = userinfo
  }
}

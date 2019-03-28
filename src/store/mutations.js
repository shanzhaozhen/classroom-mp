/**
 * 直接更新state的多个方法对象
 */
import {
  SET_IS_CAMERA,
  SET_IS_LOGIN,
  SET_TOKEN,
  SET_USER_INFO,
  SET_OPENID,
  SET_WECHAT_USER_INFO
} from './mutations-type'

export default {
  [SET_IS_CAMERA]: (state, isCamera) => {
    state.isCamera = isCamera
  },
  [SET_IS_LOGIN]: (state, isLogin) => {
    state.isLogin = isLogin
  },
  [SET_TOKEN]: (state, token) => {
    state.token = token
  },
  [SET_USER_INFO]: (state, userInfo) => {
    state.userInfo = userInfo
  },
  [SET_OPENID]: (state, openId) => {
    state.openId = openId
  },
  [SET_WECHAT_USER_INFO]: (state, wechatUserInfo) => {
    state.wechatUserInfo = wechatUserInfo
  }
}

/**
 * 基于state的getter计算属性对象
 */
export default {
  isLogin: state => state.isLogin,
  token: state => state.userInfo.token,
  nickName: state => state.userInfo.nickName,
  avatarUrl: state => state.userInfo.avatarUrl,
  roles: state => state.userInfo.roles,
  userInfo: state => state.userInfo,
  wechatUserInfo: state => state.wechatUserInfo
}

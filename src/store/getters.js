/**
 * 基于state的getter计算属性对象
 */
export default {
  isLogin: state => state.isLogin,
  token: state => state.userInfo.token,
  faceToken: state => state.userInfo.faceToken,
  fullName: state => state.userInfo.fullName,
  number: state => state.userInfo.number,
  nickName: state => state.userInfo.nickName,
  avatarUrl: state => state.userInfo.avatarUrl,
  roles: state => state.userInfo.roles,
  userInfo: state => state.userInfo,
  wechatUserInfo: state => state.wechatUserInfo
}

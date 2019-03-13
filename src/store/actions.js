/**
 * 通过mutations间接更新state的多个方法对象
 */
import {
  SAVE_TOKEN
} from './mutations-type'

export default {
  saveToken ({commit}, token) {
    commit(SAVE_TOKEN, {token})
  }
}

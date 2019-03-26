import { http } from '@/utils/request'

export function getSignInTask (classId) {
  return http('admin/signintask/classroom/' + classId, 'get')
}

export function getSignInTaskInfo (signInTaskId) {
  return http('admin/signintask/' + signInTaskId, 'get')
}

export function getSignInDetail (signInTaskId) {
  return http(`admin/signin/taskid/${signInTaskId}`, 'get')
}

export function signIn (signInData) {
  return http('admin/signin', 'post', signInData)
}

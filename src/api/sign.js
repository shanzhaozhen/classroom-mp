import { http } from '@/utils/request'

export function getSignTask (classroomId) {
  return http(`admin/classroom/${classroomId}/sign-task`, 'get')
}

export function getSignTaskInfo (signTaskId) {
  return http(`admin/sign-task/${signTaskId}`, 'get')
}

export function getSignsBySignTaskId (signTaskId) {
  return http(`admin/sign-task/${signTaskId}/sign`, 'get')
}

export function signIn (signData) {
  return http('admin/sign', 'post', signData)
}

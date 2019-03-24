import { http } from '@/utils/request'

export function createClassroom (classroom) {
  return http('admin/classroom', 'post', classroom)
}

export function myClassroom () {
  return http('admin/classroom/my', 'get')
}

export function searchClassroom (keyword) {
  return http('admin/classroom/search', 'get', { keyword: keyword })
}

export function getClassroomInfo (id) {
  return http('admin/classroom/info/' + id, 'get')
}

export function joinClassroom (classId) {
  return http('admin/student/join/' + classId, 'post')
}

export function getHomeworkTask (classId) {
  return http('admin/homeworktask/classroom/' + classId, 'get')
}

export function getSignInTask (classId) {
  return http('admin/signintask/classroom/' + classId, 'get')
}

export function getHomeworkTaskInfo (homeworkId) {
  return http('admin/homeworktask/' + homeworkId, 'get')
}

export function getSignInTaskInfo (homeworkId) {
  return http('admin/signintask/' + homeworkId, 'get')
}

export function signIn (signInData) {
  return http('admin/signin', 'post', signInData)
}

export function sumbitHomework (homeworkData) {
  return http('admin/homework', 'post', homeworkData)
}

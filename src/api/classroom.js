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

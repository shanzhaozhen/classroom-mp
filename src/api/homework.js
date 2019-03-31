import { http, upload } from '@/utils/request'

export function getHomeworkTask (classroomId) {
  return http(`admin/classroom/${classroomId}/homework-task`, 'get')
}

export function getHomeworkTaskInfo (homeworkId) {
  return http(`admin/homework-task/${homeworkId}`, 'get')
}

export function getHomeworksByHomeworkTaskId (homeworkTaskId) {
  return http(`admin/homework-task/${homeworkTaskId}/homework/my`, 'get')
}

export function uploadFile (filePath, fileName) {
  return upload('upload', filePath, { fileName })
}

export function sumbitHomework (homeworkData) {
  return http('admin/homework', 'post', homeworkData)
}

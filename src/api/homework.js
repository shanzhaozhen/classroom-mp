import { http, upload } from '@/utils/request'

export function getHomeworkTask (classId) {
  return http('admin/homeworktask/classroom/' + classId, 'get')
}

export function getHomeworkTaskInfo (homeworkId) {
  return http('admin/homeworktask/' + homeworkId, 'get')
}

export function getHomeworkDetail (homeworkTaskId) {
  return http(`admin/homework/taskid/${homeworkTaskId}`, 'get')
}

export function uploadFile (filePath, fileName) {
  return upload('upload', filePath, { fileName })
}

export function sumbitHomework (homeworkData) {
  return http('admin/homework', 'post', homeworkData)
}

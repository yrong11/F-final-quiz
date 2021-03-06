// TODO 文件命名可以优化
import httpClient from './index'

export function getTraineeList() {
  return httpClient.get('/trainees?grouped=false')
}

export function getTrainerList() {
  return httpClient.get('/trainers?grouped=false')
}

export function getGroupList() {
  return httpClient.get('/groups')
}

export function divideGroups() {
  return httpClient.post('/groups/auto-grouping')
}
export function addTrainee(trainee) {
  return httpClient.post('/trainees/', trainee)
}

export function addTrainer(trainer) {
  return httpClient.post('/trainers/', trainer)
}

export function updateGroupName(name, id) {
  return httpClient.patch(`/groups/${id}`, {name})
}


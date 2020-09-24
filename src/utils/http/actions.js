import httpClient from './index'

export function getTraineeList() {
  return httpClient.get('/trainees?grouped=false')
}

export function getTrainerList() {
  return httpClient.get('/trainers?grouped=false')
}

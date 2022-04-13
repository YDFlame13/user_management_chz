import axios from 'axios'

import { BASE_URL } from './url'

import { getToken } from './auth'

export const API = axios.create({
  baseURL: BASE_URL,
})

// 添加请求拦截器
API.interceptors.request.use((config) => {
  // console.log(config)
  let needUrl = [
    '/update',
    '/student_add',
    '/student_delete',
    '/student_update',
    '/student_find',
    '/student_all',
  ]
  let { url } = config
  // if(url.indexOf('/user')===0)
  if (needUrl.indexOf(url) > -1) {
    config.headers = {
      webjschzToken: getToken(),
    }
  }
  return config
})

// 添加响应拦截器
// API.interceptors.response.use(response => {
//     // console.log(response)
//     if (response.data.status === 400) {
//         removeToken()
//     }

//     return response
// })

// import qs from 'qs'
import axios from 'axios'
// import { encrypt, decrypt } from '@/utils'
import config from '@/config'

const http = axios.create({
  timeout: 1000 * 10,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json; charset=utf-8' // 'application/x-www-form-urlencoded'
  }
})

http.interceptors.request.use(config => {
  // console.log('interceptors.request:::', config)
  return config
}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(config => {
  // console.log('interceptors.response:::', config)
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * @param {*} obj 为axios配置参数
 */
http.fetch = (obj) => {
  let baseParams = {
    encrypt: 'false', // false default
    ip: '192.168.0.1'
  }
  Object.assign(baseParams, obj.data || {})
  // console.log('参数::::', baseParams)
  return Promise.resolve(http({
    params: Object.assign({}, {
      param_encode: 'source' // source 为不加密 default 为加密
    }, obj.params),
    url: config.url + obj.url,
    method: obj.method || 'POST',
    data: JSON.stringify(baseParams)
    // data: encrypt(JSON.stringify(baseParams))
  }))
}

export function $http (obj) {
  return new Promise((resolve) => {
    http.fetch(obj).then((data) => {
      // console.log('返回数据::::', (data.data))
      resolve(data.data)
      // resolve(JSON.parse(decrypt(data.data)))
    })
  })
}

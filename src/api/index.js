import { $http } from './utils'

/**
 * 获取短信验证码
 * @param {*} obj
 */
const getvcode = (obj) => {
  return $http({
    url: '/user/getvcode',
    data: obj
  })
}

/**
 * 修改密码
 * @param {*} obj
 */
const resetpwd = (obj, params) => {
  return $http({
    url: '/user/resetpwd',
    data: obj,
    params: params
  })
}

export default {
  ...SDK,
  getvcode,
  resetpwd
}

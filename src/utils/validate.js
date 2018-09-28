/**
 * 验证身份证
 * @param {*} v
 */
const cardID = (v) => {
  return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(v)
}

/**
 * 验证电话号码
 * @param {*} v
 */
const moblieNumber = (v) => {
  return /^[1][3,4,5,7,8][0-9]{9}$/.test(v)
  // return /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(v)
}

/**
 * 正整数
 * @param {*} v
 */
const intNumber = (v) => {
  return /^[0-9]\d*$/.test(v)
}

/**
 * 匹配国内电话号码
 * @param {*} v
 */
const telNumber = (v) => {
  return /^((0\d{2,3}))(\d{7,8})(-(\d{3,}))?$/.test(v)
  // return /\d{3}-\d{8}|\d{4}-\d{7}/.test(v)
}

/**
 * 天数
 * @param {*} v
 */
const dayNumber = (v) => {
  return /^((0?[1-9])|((1|2)[0-9])|30|31)$/.test(v)
}

const fourNubmer = (v) => {
  return /^\d{1,4}$/.test(v)
}

const passwordNubmer = (v) => {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(v)
}

const creditName = (v) => {
  return /^[\u4e00-\u9fa5_a-zA-Z0-9]{1,20}$/.test(v)
}

export default {
  cardID,
  moblieNumber,
  telNumber,
  intNumber,
  dayNumber,
  fourNubmer,
  passwordNubmer,
  creditName
}

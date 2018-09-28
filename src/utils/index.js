import CryptoJS from 'crypto-js'
import Config from '@/config'

/**
 * 加密
 * @param {*} message 为需要加密内容
 */
export function encrypt (message) {
  let [key, iv] = [CryptoJS.enc.Utf8.parse(Config.key), CryptoJS.enc.Utf8.parse(Config.key)]
  const words = CryptoJS.AES.encrypt(message, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  const base64 = words.ciphertext.toString(CryptoJS.enc.Base64)
  return base64
}

/**
 * 解密
 * @param {*} message 为需要解密内容
 */
export function decrypt (message) {
  let [key, iv] = [CryptoJS.enc.Utf8.parse(Config.key), CryptoJS.enc.Utf8.parse(Config.key)]
  const words = CryptoJS.AES.decrypt(message, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  const res = words.toString(CryptoJS.enc.Utf8)
  return res
}

/**
 * 监听webView通讯
 * @param {*} obj
初始化
actionName:getInit
data:order_id,id_card_number,merchant_id,app_key,sign_time,sign,product_id,credit_type  都是string类型   is_auth(boolean)
获取地理位置
actionName：getGps
data:latitude,longitude 字符串
选择联系人
actionName:selectContact   isSelectContact: true
data：name，phone string 类型
实名身份认证
actionName:verifyIdentity
实名身份证成功回调
action:verifyIdentitySuccess
回填身份证
action:setIdCard
返回关闭sdk
action:onBack
返回注册商家来源
action:getChannel
 */
export function getWebViewMessage (obj) {
  var object = {
    action: obj.actionName,
    id: Math.random().toString(),
    data: obj.data || {},
    callback: obj.callback
  }
  sendWebViewPostMessage(object)
}

/**
 * 给webView发送消息
 * @param {*} obj
 */
export function sendWebViewPostMessage (obj) {
  try {
    (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.FKSDKJsFramework.postMessage(obj)) || window.FKSDKJsFramework.postMessage(JSON.stringify(obj))
  } catch (error) {
    console.log('不支持WebView')
  }
}

/**
 * 设置顶部
 */
export function getScrollTopZero () {
  (window.document.documentElement.scrollTop = 0) || (window.document.body.scrollTop = 0)
}

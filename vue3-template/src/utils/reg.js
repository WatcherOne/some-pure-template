/*****************************************************
 * author:   watcher
 * created:  2022-03-16
 * function: frequently-used regular
 *****************************************************/

// 手机号码正则
export const REG_OF_MOBILE = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
// 电话号码正则
export const REG_OF_PHONE = /^0\d{2,3}-?\d{7,8}$/
// 身份证正则
export const REG_OF_IDCARD = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
// 邮箱正则
export const REG_OF_EMAIL = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
// 邮政编号正则
export const REG_OF_POSTCODE = /^[1-9][0-9]{5}$/
// 非中文正则
export const REG_OF_NO_CHINESE = /[\u4e00-\u9fa5]/

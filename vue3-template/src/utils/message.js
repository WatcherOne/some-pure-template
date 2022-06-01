import { ElMessage } from 'element-plus'

const baseOptions = { showClose: true }

/**
 *   单例模式
 *   封装initElmessage - 利用闭包缓存一个内部变量来保留一个单例
 */
function getSingleton () {
    var instance = null

    return function() {
        if (!instance) {
            instance = new MessageTip()
        }

        return instance
    }
}

/**
 *   ElMessage Class 类
 */
function MessageTip () {
    this.$msgDom = null

    this.success = function (msg) {
        this.showMessage('success', msg)
    }

    this.warning = function (msg) {
        this.showMessage('warning', msg)
    }

    this.error = function (msg) {
        this.showMessage('error', msg)
    }

    this.info = function (msg) {
        this.showMessage('info', msg)
    }

    this.showMessage = function (type, msg) {
        this.$msgDom && this.$msgDom.close()
        this.$msgDom = ElMessage[type](handleParams(msg))
    }
}

function handleParams (message) {
    return Object.assign({}, baseOptions,
        typeof message === 'string' ? { message } : message)
}

const getElMessage = getSingleton()

export { getElMessage }

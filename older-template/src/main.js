/***************************************/
/*  name:    mian-entry
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/
import Vue from 'vue'
import Index from './index'
import router from './router'
import store from './vuex/index.js'
// 不能用const-require来引用，不知道是不是webpack并没有使用babel，还是没有转过来
// const Vue = require('vue');
// const Index = require('./index');
// const router = require('./router');

// vue.config 是一个对象，包含vue的全局配置
Vue.config.devtools = true;           // 允许dev-devtools检查代码
Vue.config.productionTip = false;
Vue.config.errorHandler = getError;   // 指定组件的渲染未捕获错误的处理函数。参数为err和Vue实例

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<Index/>',
  components: { Index }
})

function getError(err, vm) {
  console.log(`此页面${vm}组件有错误，错误信息为${err}`);
}

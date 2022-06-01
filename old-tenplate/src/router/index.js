/*************   配置我们的路由文件 ************/
import Vue from 'vue'
import Router from 'vue-router'
// 引用单文件组件
import Index from '../views/index.vue'
// 注册路由
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    { path: '*', redirect: '/' }
  ]
})

export default router

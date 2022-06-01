/***************************************/
/*  name:    vue-router
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/
import Vue from 'vue'
import Router from 'vue-router'

// 导航的页面
const Index = () => import('@/components/index');
const myDaily = () => import('@/components/my-daily');
const myPhoto = () => import('@/components/my-photo');
const myThinking = () => import('@/components/my-thinking');
const myMessage = () => import('@/components/my-message');

Vue.use(Router)

export default new Router({
  base: '/',                  // 应用的基路径，默认‘/’
  linkActiveClass: 'active',      // 默认激活类名
  linkExactActiveClass: 'exactActive',   // 精确激活的默认类名
  scrollBehavior: (to, from, savedPosition) => { // 导航后让页面定位
    if (savedPosition) {       // 在按下前进/后退 按钮后，像浏览器原生那样表现
      return savedPosition;
    } else {                   // 简单回到页面顶部
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/my-daily',
      name: 'myDaily',
      component: myDaily
    },
    {
      path: '/my-photo',
      name: 'myPhoto',
      component: myPhoto
    },
    {
      path: '/my-thinking',
      name: 'myThinking',
      component: myThinking
    },
    {
      path: '/my-message',
      name: 'myMessage',
      component: myMessage
    }
  ]
})

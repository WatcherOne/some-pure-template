// 入口文件，挂载生成的VUE实例app 到 id为app的DOM节点上
// 安装webpack-dev-server插件，为我们搭建本地小型的node.js Express服务器
// dev生成的包存在内存中，用于热加载！
import Vue from 'vue'
import router from './router/index.js'
import App from './App.vue'

const app = new Vue({
  router,
  template: '<App/>', // 必须要有的模块
  // vue有两种形式的代码 compiler（模板）模式和runtime模式（运行时）
  // vue模块的package.json的main字段默认为runtime模式， 指向了"dist/vue.runtime.common.js"位置
  components: { App } // render: h => h(App) 即可 或者在webpack配置中修改别名
})

app.$mount('#app')

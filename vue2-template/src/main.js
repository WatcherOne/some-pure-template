import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/assets/styles/element-variables.scss'
import '@/assets/styles/common.scss'

Vue.config.productionTip = false

Vue.use(ElementUI, {
    size: 'small', zIndex: 3000
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

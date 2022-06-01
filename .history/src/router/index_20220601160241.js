import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = () => import(/* webpackChunkName: "index" */ '@/views/index.vue')

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.APP_ROUTER_URL,
    routes
})

export default router

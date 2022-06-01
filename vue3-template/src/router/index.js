import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const Layout = () => import(/* webpackChunkName: "layout" */ '@/views/layout/index.vue')
const Index = () => import(/* webpackChunkName: "index" */ '@/views/index.vue')
const Add = () => import(/* webpackChunkName: "add" */ '@/views/add.vue')

const Test = () => import(/* webpackChunkName: "add" */ '@/views/test.vue')

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [
            { path: 'index', component: Index, name: 'index' },
            { path: 'add', component: Add, name: 'add' }
        ]
    },
    {
        path: '/test',
        component: Test
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const { name } = to
    store.dispatch('common/saveRoute', name)
    next()
})

export default router

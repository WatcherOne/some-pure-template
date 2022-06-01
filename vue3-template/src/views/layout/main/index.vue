<template>
    <el-container direction="vertical">
        <el-main class="main-container">
            <router-view v-slot="{ Component }">
                <transition name="fade-transform" mode="out-in">
                    <keep-alive ref="keepAlive" :include="saveRoutes">
                        <component :is="Component" :key="$route.path" @removeCache="removeCache" />
                    </keep-alive>
                </transition>
            </router-view>
        </el-main>
    </el-container>
</template>

<script>
export default {
    computed: {
        saveRoutes() {
            return this.$store.state.common.saveRoutes
        }
    },
    methods: {
        removeCache (route) {
            const { name } = route
            this.$store.dispatch('common/delRoute', name)
            this.$router.push('/index')
        }
    }
}
</script>

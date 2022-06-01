<template>
    <el-container direction="vertical" class="layout-container">
        <Header></Header>
        <el-container>
            <Aside></Aside>
            <Main></Main>
        </el-container>
    </el-container>
</template>

<script>
import Header from './header/index.vue'
import Aside from './aside/index.vue'
import Main from './main/index.vue'

export default {
    components: { Header, Aside, Main }
}
</script>

<style lang="less" scoped>
.layout-container {
    height: 100%;
}
</style>

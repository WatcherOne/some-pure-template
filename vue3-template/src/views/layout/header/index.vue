<template>
    <el-header class="header-container">
        <div class="project-title">
            <span>测试主题系统页面</span>
            <span>{{saveRoutes}}</span>
        </div>
    </el-header>
</template>

<script>
export default {
    computed: {
        saveRoutes() {
            return this.$store.state.common.saveRoutes
        }
    }
}
</script>

<style lang="less" scoped>
.header-container {
    display: flex;
    width: 100%;
    line-height: var(--el-header-height);
    color: white;
    background: #0E61AE;
    .project-title {
        font-size: 24px;
        margin-right: 36px;
    }
}
</style>

<template>
    <div class="add-container">
        <el-form>
            <el-form-item>
                <el-input v-model="data1"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="close">关闭</el-button>
    </div>
</template>

<script>
export default {
    name: 'add',
    emits: ['removeCache'],
    data() {
        return {
            data1: ''
        }
    },
    methods: {
        close () {
            this.$emit('removeCache', this.$route)
        }
    }
}
</script>

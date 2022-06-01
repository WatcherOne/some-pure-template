<template>
  <div id="app">
    <HeaderNav />
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import HeaderNav from '@/components/header';

  export default {
    components: {
      HeaderNav
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../static/css/common.css';
</style>

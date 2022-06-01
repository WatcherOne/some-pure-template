<template>
  <div class="left-nav">
    <ul>
      <li :class="navIndex === 1 ? 'active' : ''" v-on:click="changeNav(1);">
				<i class="iconfont icon-dongtai-"></i>
				<span>动态</span>
			</li>
      <li :class="navIndex === 2 ? 'active' : ''" v-on:click="changeNav(2);">
				<i class="iconfont icon-lianxiren"></i>
				<span>联系人</span>
			</li>
      <li :class="navIndex === 3 ? 'active' : ''" v-on:click="changeNav(3);">
				<i class="iconfont icon-beiwanglu"></i>
				<span>备忘录</span>
			</li>
      <li :class="navIndex === 4 ? 'active' : ''" v-on:click="changeNav(4);">
				<i class="iconfont icon-fenxiang"></i>
				<span>分享</span>
			</li>
			<li>{{ navIndex }}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: ['navIndex', 'changeNavIndex'],
		methods: {
			changeNav(index) {
				if (index !== this.navIndex) this.changeNavIndex(index);
			}
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
	.left-nav {
		float: left;
		width: 168px;
		border-radius: 3px;
		border: 1px solid #2E2E2E;
		background-color: #2E2E2E;
		margin-bottom: 12px;
		ul {
			width: 100%;
			margin: 2px 0px;
			li {
				height: 35px;
				line-height: 35px;
				padding-left: 15px;
				margin: 1px 0px;
				font-size: 13px;
				color: #a6a6a6;
				&:hover, &.active {
					background-color: #333;
				}
				span {
					margin-left: 10px;
				}
			}
		}
	}
</style>

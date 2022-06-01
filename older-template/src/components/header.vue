<template>
	<div class="header-nav">
		<ul>
			<li>
				<router-link to="/index">主页</router-link>
			</li>
			<li>
				<router-link to="/my-daily">日志</router-link>
			</li>
			<li>
				<router-link to="/my-photo">照片墙</router-link>
			</li>
			<li>
				<router-link to="/my-message">留言</router-link>
			</li>
			<li>
				<router-link to="/my-thinking">说说</router-link>
			</li>
			<li>
				<a href="javascript:;">更多</a>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="less" rel="stylesheet/less">
	.header-nav {
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #1F1F1F;
		color: #F0ECEC;
	}
	ul {
		display: inline-block;
		width: 1046px;
		li {
			float: left;
			font-size: 18px;
			width: 80px;
			text-align: center;
		}
	}
	a {
		display: inline-block;
		width: 100%;
		color: #B5B5B5;
	}
	a:hover, .active {
		background-color: #383838;
		color: #A1B6B2;
	}
</style>
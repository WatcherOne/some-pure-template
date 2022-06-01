<template>
  <div class="right-nav">
		<div class="time">
			<span class="week">{{ week }}</span>
			<span class="day">{{ month }}.{{ day }}</span>
		</div>
		<div class="sign">签到</div>
		<div class="count">
			<span class="number">23</span>
			<span>Days</span>
		</div>
  </div>
</template>

<script>
	import time from '../../../static/js/time.js';

	export default {
		data() {
			return {
				week: time.getWeek('周'),
				month: time.getMonth(),
				day: time.getDay()
			}
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
  .right-nav {
		float: right;
		width: 250px;
		height: 68px;
		background-color: #2E2E2E;
		.time {
			display: inline-block;
			width: 100px;
			height: 100%;
			text-align: center;
			color: #fff;
			background-color: #080808;
		}
		.week {
			display: block;
			width: 100%;
			font-size: 18px;
			padding: 18px 0 2px 0;
		}
		.day {
			display: block;
			font-size: 12px;
			font-weight: bold;
		}
		.sign {
			display: inline-block;
			line-height: 68px;
			vertical-align: top;
			margin-left: 15px;
			font-size: 30px;
			color: #fff;
		}
		.count {
			display: inline-block;
			height: 100%;
			vertical-align: top;
			margin-left: 5px;
			span {
				display: block;
				color: #fff;
			}
			.number {
				padding: 18px 0 2px 9px;
			}
		}
	}
</style>

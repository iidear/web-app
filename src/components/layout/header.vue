<template>
	<div class='header-wrap'>
		<header>
			<span class="header-date" v-text='date'></span>
			<h1>{{user}}'s workspace</h1>
		</header>
	</div>
</template>

<script>
	export default {
		props: ['user'],
		data () {
			return {
				date: new Date().toLocaleDateString()
			}
		}
	}
</script>

<style>
	.header-wrap {
		width: 100%;
		height: 60px;
		line-height: 60px;
		background-color: #1F2D3D;
	}
	.header-wrap header {
		max-width: 1140px;
		margin: 0 auto;
	}
	.header-wrap h1 {
		padding-left: 20px;
		font-size: 20px;
		color: #fff;
		font-weight: 100;
	}

	.header-wrap .header-date {
		float: right;
		margin-right: 12px;
		font-size: 12px;
	}
</style>
<template>
	<div class='header-wrap'>
		<header>
			<h1>{{user}}'s workspace</h1>
			<span class="setting"><a class="logout" @click.prevent="logout">退出</a></span>
		</header>
	</div>
</template>

<script>
	export default {
		props: ['user'],
		data () {
			return {}
		},
		methods: {
			logout () {
				this.$router.push('/login');
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
		position: relative;
	}
	.header-wrap h1 {
		padding-left: 20px;
		font-size: 20px;
		color: #fff;
		font-weight: 100;
	}

	.header-wrap .setting {
		position: absolute;
		right: 20px;
		top: 0;
	}
	.header-wrap .setting .logout {
		color: #fff;
	}
	.header-wrap .setting .logout:hover {
		border-bottom: 1px solid #fff;
		cursor: pointer;
	}
</style>
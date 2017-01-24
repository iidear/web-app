<template>
<div id="app">
	<app-header :user="user.name"></app-header>
	<div class="content">
		<el-col :span="4">
			<app-nav></app-nav>
		</el-col>
		<el-col :span="20">
			<router-view></router-view>
		</el-col>
	</div>
</div>
</template>

<script>
	import Header from 'components/layout/header.vue';
	import Nav from 'components/layout/nav.vue';

	export default {
		components: {
			'app-header': Header,
			'app-nav': Nav
		},
		data () {
			return {
				user: {
					name: 'iidear'
				}
			}
		}
	}
</script>

<style>
	html,body,div,h1,h2,h3,h4,h5,h6,p,ul,ol {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
	    font-weight: 400;
	    -webkit-font-smoothing: antialiased;
	    overflow: auto;
	}

	.content {
		max-width: 1140px;
		margin: 0 auto;
	}
</style>
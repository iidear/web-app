<template>
<div id="app">
	<app-header :user="user.name"></app-header>
	<div class="content">
		<div class="nav-container">
			<app-nav></app-nav>
		</div>
		<div class="content-container">
			<router-view></router-view>
		</div>
	</div>
</div>
</template>

<script>
	import Header from './layout/header.vue';
	import Nav from './layout/nav.vue';

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
	html,body,div,h1,h2,h3,h4,h5,h6,p,ul,ol,li,a,span {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	ol,ul {
		list-style: none;
	}
	a {
		color: #5e6d82;
		text-decoration: none;
	}

	a:visited {
		color: #5e6d82;
	}

	body {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
	    font-weight: 400;
	    color: #5e6d82;
	    -webkit-font-smoothing: antialiased;
	    overflow: auto;
	}

	.nav-container {
		float: left;
		width: 200px;
		border-right: 1px solid #888;
		min-height: 520px;
	}
	.content-container {
		margin-left: 220px;
	}
	.content {
		max-width: 1140px;
		margin: 10px auto 0;
	}
</style>
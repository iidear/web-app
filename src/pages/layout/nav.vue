<template>
		<ul class="nav">
			<li><router-link class="nav-item" to="/introduce">简介</router-link></li>
			<li><router-link class="nav-item" to="/analysis">分析</router-link></li>
		</ul>
</template>

<style>

	.nav {
		background-color: #fff;
		width: 100%;
		padding-left: 20px;
	}
	.nav .nav-item {
		height: 40px;
		line-height: 40px;
	}
	.nav .nav-item.router-link-active {
		color: #111;
	}
</style>
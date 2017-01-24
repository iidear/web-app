<template>
	<div class="nav-container">
		<el-menu class="nav" mode='vertical' :router='true'>
			<el-menu-item index='introduce'>简介</el-menu-item>
			<el-menu-item index='problem'>题库</el-menu-item>
			<el-menu-item index="analysis">分析</el-menu-item>
		</el-menu>
	</div>
</template>

<style>
	.nav {
		background-color: #fff;
	}
</style>
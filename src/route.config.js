import App from './App.vue';
import Login from './user/Login.vue';
import Register from './user/Register.vue';
import Problem from './problem/list.vue';
import Analysis from './analysis/analysis.vue';
import Introduce from './introduce/introduce.vue';

const route = {
	routes: [{
		path: '/login',
		component: Login
	},{
		path: '/register',
		component: Register
	},{
		path: '/',
		component: App,
		redirect: '/introduce',
		children: [{
			path: '/introduce',
			component: Introduce
		},{
			path: '/problem',
			component: Problem
		},{
			path: '/analysis',
			component: Analysis
		}]
	}]
}

export default route;
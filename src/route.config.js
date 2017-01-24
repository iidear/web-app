import App from './pages/App.vue';
// import Login from './user/Login.vue';
const Login = resolve => require(['./pages/user/Login.vue'], resolve);
// const Introduce = resolve => require(['./pages/Introduce.vue'], resolve);
const Analysis = resolve => require(['./pages/Analysis.vue'], resolve);
// import Register from './user/Register.vue';
// import Problem from './problem/list.vue';
// import Analysis from './analysis/analysis.vue';
import Introduce from './pages/introduce.vue';

const route = {
	routes: [{
		path: '/login',
		component: Login
	},{
		path: '/',
		component: App,
		redirect: '/introduce',
		children: [{
			path: '/introduce',
			component: Introduce
		},{
			path: '/analysis',
			component: Analysis
		}]
	}]
}

export default route;
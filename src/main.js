import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
import RouteConfig from './route.config'

Vue.use(VueRouter);
// Vue.use(VueResource);

const router = new VueRouter(RouteConfig);

new Vue({
	el: '#app',
	router: router,
	render: (h) => {
		return h('router-view');
	}
})
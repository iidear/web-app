import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import RouteConfig from './route.config'

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter(RouteConfig);

new Vue({
	el: '#app',
	router: router,
	render: (h) => {
		return h('div', [h('router-view')])
	}
})
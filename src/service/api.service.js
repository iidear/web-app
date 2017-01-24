import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const login = (params) => {
	return Vue.http.post('/user/login', {
		body: JSON.stringify(params)
	})
}

export {
	login
}
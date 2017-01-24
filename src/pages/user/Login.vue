<template>
	<div>
		<h1>Login!!</h1>
		<form @keyup.enter="login">
			<p><span>Username</span><input type="text" v-model="username"></p>
			<p><span>Password</span><input type="password" v-model="password"></p>
			<input type="submit" @click.prevent="login">
		</form>
	</div>
</template>

<script>
import { login } from 'service/api.service.js'
export default {
	data () {
		return {
			username: '',
			password: ''
		}
	},
	methods: {
		login () {
			login({
				username: this.username,
				password: this.password
			}).then(null, (result) => {
				this.$router.push('/');
			})
		}
	}
}

</script>

<style>
	
</style>
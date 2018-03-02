<template>
	<nav class="page-header navbar is-fixed-top">
		<div class="navbar-brand">
			<div class="navbar-item">
				<nuxt-link class="logo" to="/" exact>
					<img src="~/assets/img/logo-light.png" alt="endpass">
				</nuxt-link>
				<nuxt-link to="/careers">
					<span class="tag badge is-danger">We're Hiring!</span>
				</nuxt-link>
			</div>

			<button class="button navbar-burger" :class="{ 'is-active':
			navMenuActive }" @click="toggleNavMenu">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>

		<nav-menu :is-active="navMenuActive"></nav-menu>
	</nav>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue'

export default {
	components: {
		NavMenu
	},
	data () {
		return {
			navMenuActive: false
		}
	},
	methods: {
		toggleNavMenu() {
			this.navMenuActive = !this.navMenuActive 
		}
	}
}
</script>

<style lang="scss">
.navbar-item .logo img {
	max-height: 3rem;
}

</style>

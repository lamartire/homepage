<template>
	<nav class="page-header navbar">
		<div class="navbar-brand">
			<nuxt-link class="navbar-item logo" to="/" exact>
				<img src="~/assets/img/logo-light.png" alt="endpass">
			</nuxt-link>

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

<style lang="scss" scoped>
.navbar-item.logo {
		img {
			max-height: 2.5rem;
		}
}
</style>

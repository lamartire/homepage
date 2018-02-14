<template>
	<nav class="page-header navbar">
		<div class="navbar-brand">
			<nuxt-link class="navbar-item logo" to="/" exact>
				<img src="~/assets/img/logo-light.png" alt="endpass">
			</nuxt-link>
		</div>

		<nav-menu></nav-menu>
	</nav>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue'

export default {
	components: {
		NavMenu
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

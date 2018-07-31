<template>
	<div class="navbar-menu" :class="{ 'is-active': isActive }">
		<div class="navbar-start">
		</div>
		<div class="navbar-end">
			<nuxt-link class="navbar-item" to="/wallet" exact>Wallet</nuxt-link>
			<nuxt-link class="navbar-item" to="/about" exact>About</nuxt-link>
			<nuxt-link class="navbar-item" to="/careers" exact>Careers</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isActive: Boolean
	}
}
</script>

<style lang="scss">
a.navbar-item:hover, a.navbar-item.is-active, a.navbar-link:hover,
a.navbar-link.is-active {
	background: none;
	color: $primary;
}

.navbar-item {
	text-transform: uppercase;
	font-family: $heading-font-family;
	font-weight: 500;
}
</style>

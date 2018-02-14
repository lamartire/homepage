<template>
	<div class="navbar-menu" :class="{ 'is-active': isActive }">
		<div class="navbar-start">
		</div>
		<div class="navbar-end">
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

<template>
	<footer class="footer">
		<div class="container">
			<nav class="level">
				<div class="level-left">
					<div class="level-item">
						<p>&copy; 2018 endpass, Inc</p>
					</div>
				</div>
				<div class="level-right">
					<nuxt-link class="level-item"
						to="/about#contact-us">Contact</nuxt-link>
					<nuxt-link class="level-item" to="/privacy">Privacy</nuxt-link>
					<nuxt-link class="level-item" to="/terms">Terms</nuxt-link>
				</div>
			</nav>
		</div>
	</footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.footer {
	padding: 1rem 1.5rem;
	font-size: 0.9rem;

	a {
		color: $dark-grey;
	}
	a:hover {
		color: darken($dark-grey, 15%);
	}
}
</style>

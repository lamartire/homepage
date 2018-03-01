<template>
	<footer class="footer page-footer">
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
					<a class="level-item" href="#">Privacy</a>
					<a class="level-item" href="#">Terms</a>
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

	a {
		color: $dark-grey;
	}
	a:hover {
		color: darken($dark-grey, 15%);
	}
}
</style>

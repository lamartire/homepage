<template>
	<div class="feature section">
		<div class="container is-narrow">
			<div class="columns" :class="{ 'reverse-row-order': reversed }">
				<div class="column is-one-quarter has-text-centered">
					<div class="image is-square">
						<slot name="image"></slot>
					</div>
				</div>
				<div class="column">
					<h2 class="subtitle is-size-2"> {{ title }} </h2>
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		reversed: Boolean
	}
}
</script>

<style lang="scss">
.reverse-row-order {
	flex-direction: row-reverse;
}
.feature {
	.image {
		@media screen and (max-width: 1023px) {
			padding-top: 50%;
		}
		img {
			max-height: 200px;
			width: auto;
			margin: auto;

			@media screen and (max-width: 1023px) {
				max-height: 100px;
			}
		}
	}
}
</style>

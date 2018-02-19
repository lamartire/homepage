<template>
	<div class="feature section">
		<div class="container">
			<div class="columns" :class="{ 'reverse-row-order': reversed }">
				<div class="column is-one-quarter">
					<div class="image is-square">
						<slot name="image"></slot>
					</div>
				</div>
				<div class="column">
					<h2 class="subtitle"> {{ title }} </h2>
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
	.image>img {
		max-height: 200px;
		width: auto;
	}
}
</style>

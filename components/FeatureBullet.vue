<template>
	<div class="feature section">
		<div class="container">
			<h2 class="subtitle has-text-centered"> {{ title }} </h2>
			<div class="columns" :class="{ 'reverse-row-order': reversed }">
				<div class="column is-one-third">
					<div class="image is-square">
						<slot name="image"></slot>
					</div>
				</div>
				<div class="column">
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

<style>
.reverse-row-order {
	flex-direction: row-reverse;
}
</style>

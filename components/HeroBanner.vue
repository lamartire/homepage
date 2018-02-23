<template>
	<section class="hero">
		<div class="hero-body">
			<div class="container is-narrow">
				<slot name="title"></slot>
				<slot name="subtitle"></slot>
				<slot></slot>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.title {
	color: $purple;
}
</style>

<template>
	<div class="feature section">
		<div class="container is-narrow">
			<div class="columns reversible">
				<div class="column is-one-quarter has-text-centered">
					<div class="image is-square">
						<slot name="image"></slot>
					</div>
				</div>
				<div class="column">
          <span class="heading" v-if="$slots.caption">
            <slot name="caption"></slot>
          </span>
					<h2 class="subtitle is-size-2">
            <slot name="title"></slot>
          </h2>
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
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

  &.is-reversed {
    .reversible {
      flex-direction: row-reverse;
    }
  }

  .heading {
    font-family: $heading-font-family;
    font-weight: 600;
  }
}

</style>

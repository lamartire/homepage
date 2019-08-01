<template>
	<div class="feature section">
		<div class="container is-narrow">
			<div class="columns reversible">

				<div class="column side-column is-two-fifths has-text-centered"
          v-if="$slots.image">
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
					<div class="content">
					  <slot></slot>
					</div>
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
  &.has-small-image {
    .side-column {
      width: 20%;
    }

  }
	.image {
		img {
			max-height: 400px;
			width: auto;
			margin: auto;

      &.is-small {
        max-height: 200px;
      }
		}
    img.screenshot {
      box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
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
    font-size: 0.9rem;
  }

  .content {
    font-size: 1.3rem;
    color: lighten($dark-grey, 15%);
  }
}

</style>

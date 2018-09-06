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

<style lang="scss">
.hero {
	.title {
		color: $purple;
		font-weight: 200;
	}

  .subtitle-box {
    max-width: 650px;
  }
  .is-centered {
    margin: 0 auto;
  }

  &.is-dark {
    background-color: $dark-blue;
    color: $white;
    .title {
      color: $white;
    }
  }

  &.is-purple {
    background-color: darken($purple, 5%);
    color: $white;
    .title {
      color: $white;
    }
  }

  .subtitle-box {
    margin-bottom: 1rem;
  }
}
</style>

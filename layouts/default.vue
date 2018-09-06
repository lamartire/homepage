<template>
  <div class="page-container">
  	<page-header class="page-header is-dark"/>
    <div class="page-content">
    	<nuxt/>
    </div>
  	<page-footer class="page-footer"/>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import PageFooter from '~/components/PageFooter.vue'

export default {
	components: {
		PageHeader,
		PageFooter
	}
}
</script>

<style lang="scss">

// Grid layout
.page-container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

// Global style helpers
.is-grey {
	background-color: $light-grey;
}
.is-dark {
  background-color: $dark-blue;
  color: $white;
}
.has-text-dark {
  color: $dark-blue;
}

.has-text-orange {
  color: $orange;
}
.is-orange {
  background-color: $orange;
  color: $white;
}

.container.is-narrow {
	max-width: 960px;
}

a {
	color: $purple;
	&:hover {
		color: darken($purple, 15%);
	}
}

h1,h2,h3,h4,h5,h6
{
	font-family: $heading-font-family;
}

.button {
	font-family: $heading-font-family;
	font-weight: 600;
	text-transform: uppercase;

	&.is-primary {
		background-color: $primary;
		&:hover, &:active {
			background-color: lighten($primary, 10%);
		}
		&:focus:not(:active),&.is-focused:not(:active) {
			box-shadow: none;
		}
	}
}

.input {
	&.is-active, &.is-focused, &:active, &:focus {
		border-color: $primary;
	}
}

p.lead {
	font-size: 1.3rem;
	margin-bottom: 1rem;
}

.icon {
  width: 100%;
  height: auto;
  svg {
    width: 100%;
    height: auto;
  }

  &.is-orange {
    fill: $orange;
    .image svg * {
      fill: $orange;
    }
  }

  &.is-primary {
    fill: $primary;
    .image svg * {
      fill: $primary;
    }
  }

  &.is-warning {
    fill: $warning;
    .image svg * {
      fill: $warning;
    }
  }

  &.is-danger {
    fill: $danger;
    .image svg * {
      fill: $danger;
    }
  }
  &.is-info {
    fill: $info;
    .image svg * {
      fill: $info;
    }
  }
  &.is-success {
    fill: $success;
    svg * {
      fill: $success;
    }
  }
  &.is-dark {
    fill: $dark-blue;
    svg * {
      fill: $dark-blue;
    }
  }
}
</style>

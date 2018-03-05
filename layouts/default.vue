<template>
  <div class="has-navbar-fixed-top">
  	<page-header/>
    <div class="page-content">
    	<nuxt/>
    </div>
  	<page-footer/>
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

.has-navbar-fixed-top {
	padding-top: 3.25rem;
}

// Main content div
.page-content {
	min-height: calc(100vh - 3.25rem - 3rem);
}

// Global style helpers
.is-grey {
	background-color: $light-grey;
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
</style>

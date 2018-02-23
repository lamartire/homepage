<template>
  <div>
  	<page-header/>
    <nuxt/>
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
@import '~bulma/bulma';

// Global style helpers
.is-grey {
	background-color: $grey-lighter;
}

.container.is-narrow {
	max-width: 960px;
}
</style>

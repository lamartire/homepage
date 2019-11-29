<template>
  <div class="landing-page">
    <landing-header></landing-header>
    <div class="page-content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import LandingHeader from '~/components/LandingHeader.vue'

export default {
	components: {
		LandingHeader,
	}
}
</script>

<style lang="scss">
</style>

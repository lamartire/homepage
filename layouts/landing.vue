<template>
  <div class="landing-page">
    <landing-header></landing-header>
    <div class="page-content">
      <nuxt/>
    </div>
    <landing-footer></landing-footer>
  </div>
</template>

<script>
import LandingHeader from '~/components/LandingHeader.vue'
import LandingFooter from '~/components/LandingFooter.vue'

export default {
	components: {
		LandingHeader,
		LandingFooter
	}
}
</script>

<style lang="scss">
</style>

<template>
  <div>
    <hero-banner>
      <h1 class="title">Friendly, easy to use Ethereum wallet</h1>
    </hero-banner>

    <div class="section">
      <div class="container">
        <h2 class="subtitle">Easy to use</h2>
        <p>Endpass is the most friendly wallet available</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBanner from '~/components/HeroBanner.vue'

export default {
	head () {
		return {
			title: 'Ease of use'
		}
	},
  layout: 'landing',
  components: {
  	HeroBanner,
  },
}
</script>

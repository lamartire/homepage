<template>
  <div class="index-page">
  	<section class="section">
  	  <h1>Hello, World!</h1>
  	</section>
  	
  	<feature-bullet title="The best feature" reversed>
  		<img slot="image" src="~/assets/img/logo-icon-dark.png" alt="Best feature">
  		<p>This is the best feature ever</p>
  	</feature-bullet>
  </div>
</template>

<script>

import FeatureBullet from '~/components/FeatureBullet.vue'

export default {
  components: {
  	FeatureBullet
  }
}
</script>

<style lang="scss">
</style>

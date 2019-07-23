<template>
  <div class="vault-page">
  	<hero-banner class="is-dark">
      <div class="hero-inner animated fadeInDown">
        <h1 class="title is-size-1">Identity for everyone</h1>
        <div class="subtitle-box">
          <p class="subtitle">Secure your private information with
            blockchain identity technology, and know exactly what's
            happening with your private information.</p>
        </div>
        <div class="buttons cta-box">
          <a href="https://vault.endpass.com" class="button is-medium is-success">Get Started</a>
        </div>
      </div>
  	</hero-banner>


  <section class="section features">
    <div class="container">
  	  <feature-bullet id="feature-personal" class="is-reversed">
  	     <span slot="title">Control access to your personal information</span>
  	  	<img slot="image" class="screenshot" src="~/assets/img/priority-select.png"
  	  	alt="Self-Sovereign Identity">
  	     <p>Decide exactly which personal data to share with each app you
           choose to give access.</p>
  	  </feature-bullet>

    </div>
  </section>

  </div>

</template>

<script>
import HeroBanner from '~/components/HeroBanner.vue'
import FeatureBullet from '~/components/FeatureBullet.vue'

export default {
	head () {
		return {
			title: 'Secure Data Vault'
		}
	},

  components: {
  	HeroBanner,
    FeatureBullet,
  }
}
</script>

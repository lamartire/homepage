<template>
  <div class="developers-page">
    <hero-banner class="is-dark">
      <div class="hero-inner animated fadeInDown">
        <h1 class="title is-size-1">Add blockchain identity to your app in
          5 minutes</h1>
        <div class="subtitle-box">
          <p class="subtitle">Turbocharge your app with Endpass Connect, a
            blockchain identity platform.</p>
        </div>
        <div class="buttons cta-box">
          <a href="https://vault.endpass.com" class="button is-medium
          is-success">Get Free API Key</a>
          <a href="https://developers.endpass.com" class="button
          is-medium">API Documentation</a>
        </div>
      </div>
    </hero-banner>


    <section id="section-features" class="section">
      <div class="container">

        <div class="feature">
          <div class="columns">
            <div class="column is-four-fifths">
              <h2 class="subtitle is-size-2 has-text-center">
                Super-simple user onboarding for your dApp
              </h2>
              <p class="lead">
                Make signing up for your app as easy for users as joining Facebook.
                No wallets to download or software to install. No more worrying
                about web3 compatibility or software updates. Just click and go.
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>


        <div class="feature">
          <div class="columns">
            <div class="column is-four-fifths">
              <h2 class="subtitle is-size-2 has-text-center">
                Protect your users with enterprise-grade security
              </h2>
              <p class="lead">
                Secure your app and user funds without writing any additional
                code. Endpass Connect adds multiple forms of two factor
                authentication, like OTP, phone verification, email
                verification, and more.
              </p>
            </div>
            <div class="column"></div>
          </div>
        </div>

      </div>
    </section>

  </div>

</template>

<script>
import HeroBanner from '~/components/HeroBanner.vue'

export default {
	head () {
		return {
			title: 'Connect'
		}
	},

  components: {
    HeroBanner,
  }
}
</script>

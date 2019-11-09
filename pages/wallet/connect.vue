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

        <feature-bullet id="feature-onboarding" class="">
          <h2 slot="title">
            Super-simple user onboarding for your dApp
          </h2>
          <p class="lead">
            Make signing up for your app as easy for users as joining Facebook.
            No wallets to download or software to install. No more worrying
            about web3 compatibility or software updates. Just click and go.
          </p>
        </feature-bullet>

        <feature-bullet id="feature-mobile" class="is-reversed">
          <h2 slot="title">
            Your dapp, running natively on mobile. No wallet app required.
          </h2>
          <p class="lead">
            Endpass-enabled dapps work natively in standard web browsers.
            Users are not required to leave your site to install a dApp browser
            app or run any additional software to use your app.
          </p>
        </feature-bullet>


        <feature-bullet id="feature-security" class="">
          <h2 slot="title">
            Protect your users with enterprise-grade security
          </h2>
          <p class="lead">
            Secure your app and user funds without writing any additional
            code. Endpass Connect adds multiple forms of two factor
            authentication, like OTP, phone verification, email
            verification, and more.
          </p>
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
			title: 'Connect'
		}
	},

  components: {
    HeroBanner,
    FeatureBullet,
  }
}
</script>

<template>
  <div class="index-page">

  	<hero-banner>
  		<h1 class="title is-size-1" slot="title">Take back control of your digital identity</h1>
  		<h2 class="subtitle" slot="subtitle">Endpass is an identity platform
  		that puts you, the user first. It combines a revolutionary new way to
  		log in without passwords with controls that let you decide exactly
  		which personal data is shared.</h2>
  	</hero-banner>
  	<div class="section cta-box is-dark">
  		<div class="container is-narrow">
  			<div class="columns">
  				<div class="column">
  					<p>The endpass platform is currently in closed beta. Sign up
  					for updates to be one of the first to receive an invite.</p>
  				</div>
  				<div class="column is-half">
  					<email-form
  				 action="https://endpass.us17.list-manage.com/subscribe/post?u=dc533bf673bb80437899f12d5&id=ea7d114d13">
  					</email-form>
  				</div>
  			</div>
  		</div>
  	</div>

  	<feature-bullet title="Decentralized Identity">
  		<img slot="image" src="~/assets/img/decentralized-identity.svg"
  		alt="Decentralized Identity">
  		<p>You own your personal data. Your personal information is stored
  		with you - not big companies that want to mine it for profit.</p>
  	</feature-bullet>

  	<feature-bullet title="Passwordless Signon Everywhere" reversed>
  		<img slot="image" src="~/assets/img/passwordless-login.svg"
  		alt="Passwordless login">
  		<p>Experience one-tap passwordless sign on to the next generation of
  		web apps. Never worry about managing multiple passwords, forgotten
  		passwords, or phishing attacks again.</p>
  	</feature-bullet>


  	<feature-bullet title="Flexible Personas">
  		<img slot="image" src="~/assets/img/flexible-personas.svg"
  		alt="Flexible Personas">
  		<p>Create as many personas as you want and easily switch between
  		them. All of your accounts are in one place.</p>
  	</feature-bullet>

  	<feature-bullet title="Total Data Security" reversed>
  		<img slot="image" src="~/assets/img/data-security.svg"
  		alt="Total Data Security">
  		<p>Endpass ensures all of your personal data is protected by
  		industry-standard encryption - and you're the only one with the key
  		to unlock it. You're always protected from data breaches.</p>
  	</feature-bullet>


  	<feature-bullet title="Complete Privacy">
  		<img slot="image" src="~/assets/img/absolute-privacy.svg"
  		alt="Complete Privacy">
  		<p>You're in complete control of what information about yourself you
  		want to share. Without your explicit permission, your personal data
  		is completely invisible.</p>
  	</feature-bullet>

  	<feature-bullet title="Open Standards" reversed>
  		<img slot="image" src="~/assets/img/open-standards.svg"
  		alt="Open Standards">
  		<p>We are building open protocols for the future of decentralized
  		identity. Endpass is built on top of widely accepted industry
  		standards and open-source technologies.</p>
  	</feature-bullet>

  </div>
</template>

<script>

import HeroBanner from '~/components/HeroBanner.vue'
import EmailForm from '~/components/EmailForm.vue'
import FeatureBullet from '~/components/FeatureBullet.vue'

export default {
  components: {
  	HeroBanner,
  	EmailForm,
  	FeatureBullet
  }
}
</script>

<style lang="scss">
.is-dark {
	background-color: $dark-blue;
	color: $light-grey;
}
</style>

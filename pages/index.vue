<template>
  <div class="index-page">

  	<hero-banner class="is-dark">
      <div class="hero-inner">
        <h1 class="title has-text-centered is-size-1">The next generation Ethereum and token
        cloud wallet is here.</h1>
        <div class="subtitle-box is-centered">
          <p class="subtitle">Endpass is a web wallet that puts your
            in control of your keys, secures your funds, and automatically
            optimizes transactions.
            </p>
        </div>
      </div>
      <div class="buttons cta-box is-centered">
        <a href="https://wallet.endpass.com" class="button is-medium is-success">Get Started</a>
      </div>
  	</hero-banner>


  	<div class="section feature-cards is-dark">
  		<div class="container">
  			<h2 class="is-size-3 has-text-centered">Features</h2>
        <div class="columns is-multiline boxes">

          <div class="column is-one-third">
            <feature-card class="has-text-danger">
              <span slot="image" class="icon"
                v-html="require('~/assets/svg/ban.svg')"></span>
              <span class="has-text-danger" slot="title">Say goodbye to stuck transactions</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card class="">
              <span slot="image" class="icon is-success"
                v-html="require('~/assets/svg/bullhorn.svg')"></span>
              <span class="has-text-success" slot="title">Automatic ERC20
                      token airdrop import</span>
            </feature-card>
          </div>


          <div class="column is-one-third">
            <feature-card class="">
              <span slot="image" class="icon"
                v-html="require('~/assets/svg/key.svg')"></span>
              <span class="has-text-dark" slot="title">You control your
                      private keys</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card class="">
              <span slot="image" class="icon is-info"
                v-html="require('~/assets/svg/cloud-upload.svg')"></span>
              <span class="has-text-info" slot="title">Secure encrypted
                      cloud backup and sync</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card class="">
              <span slot="image" class="icon"
                v-html="require('~/assets/svg/tablet.svg')"></span>
              <span slot="title" class="has-text-orange">Single wallet for all of your
                devices</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card class="has-text-dark">
              <span slot="image" class="icon has-text-dark"
                v-html="require('~/assets/svg/network.svg')"></span>
              <template slot="title">Open source and open protocols</template>
            </feature-card>
          </div>

        </div>


  		</div>
  	</div>

  	<feature-bullet title="Protect your personal data">
  		<img slot="image" src="~/assets/img/decentralized-identity.svg"
  		alt="Self-Sovereign Identity">
  		<p>You own your personal data. Your personal information is stored
  		with you - not big companies that want to mine it for profit.
  		Self-sovereign identity eliminates single points of failure that are
  		vulnerable to hacks and data breaches.</p>
  	</feature-bullet>

  	<feature-bullet title="Password-free login everywhere" reversed>
  		<img slot="image" src="~/assets/img/passwordless-login.svg"
  		alt="Passwordless login">
  		<p>Experience one-tap passwordless sign on to the next generation of
  		decentralized apps. Never worry about managing or forgetting multiple
  		passwords. Stop phishing attacks before they happen. One
  		blockchain identity signs you in across all of your devices.</p>
  	</feature-bullet>


  	<feature-bullet title="Flexible Personas">
  		<img slot="image" src="~/assets/img/flexible-personas.svg"
  		alt="Flexible Personas">
  		<p>Create as many identities as you want and easily switch between
  		them. All of your accounts are in one place. Unilimited disposable
  		one-time use accounts can be created to enhance privacy. </p>
  	</feature-bullet>

  	<feature-bullet title="Total Data Security" reversed>
  		<img slot="image" src="~/assets/img/data-security.svg"
  		alt="Total Data Security">
  		<p>Endpass ensures all of your personal data is encrypted and stored
  		only on your device. You're the only one with the key
  		to unlock it. Your sensitive personal information is always protected
  		from data breaches.</p>
  	</feature-bullet>


  	<feature-bullet title="Complete Privacy">
  		<img slot="image" src="~/assets/img/absolute-privacy.svg"
  		alt="Complete Privacy">
  		<p> Decide how much personal information you want to share and who is
  		allowed to see it. Without your permission, your personal data
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
import FeatureCard from '~/components/FeatureCard.vue'
import VCard from '~/components/VCard.vue'

export default {
  components: {
  	HeroBanner,
  	EmailForm,
  	FeatureBullet,
  	FeatureCard,
    VCard,
  }
}
</script>

<style lang="scss">
.is-dark {
	background-color: $dark-blue;
	color: $light-grey;
}

.level.level-centered {
	justify-content: center;
}

.section.is-thin {
	padding: 1rem 1.5rem;
}

.boxes {
	.card {
		height: 100%;
		box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
	}
	.card-header-title {
		font-size: 1.1rem;
		color: $purple;
	}
	.card-footer {
		margin-top: auto;
	}

	.grow>img {
		object-fit: cover;
		overflow: hidden;
		transition:max-height 0.3s ease-out;
		max-height: 200px;
		&:hover {
			max-height: 500px;
		}
	}
}

.hero-image {
	height: 100%;
	overflow: hidden;

	img {
		opacity: 0.4;
	}
}
</style>

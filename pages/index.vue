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
            <feature-card class="">
              <span slot="image" class="icon has-text-red is-red"
                v-html="require('~/assets/svg/loop.svg')"></span>
              <span class="has-text-dark" slot="title">Say goodbye to stuck transactions</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card class="">
              <span slot="image" class="icon is-green"
                v-html="require('~/assets/svg/bullhorn.svg')"></span>
              <span class="has-text-dark" slot="title">Automatic ERC20
                      token airdrop notifications</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card class="">
              <span slot="image" class="icon is-blue has-text-blue"
                v-html="require('~/assets/svg/cloud-transfer-upload.svg')"></span>
              <span class="has-text-dark" slot="title">Secure encrypted
                      cloud backup and sync</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card class="">
              <span slot="image" class="icon is-orange"
                v-html="require('~/assets/svg/key.svg')"></span>
              <span class="has-text-dark" slot="title">You control your
                      private keys</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card class="">
              <span slot="image" class="icon is-cyan"
                v-html="require('~/assets/svg/tablet.svg')"></span>
              <span slot="title" class="has-text-dark">Single wallet for all of your
                devices</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card class="">
              <span slot="image" class="icon is-dark-blue"
                v-html="require('~/assets/svg/network.svg')"></span>
              <span slot="title" class="has-text-dark">Open source and open protocols</span>
            </feature-card>
          </div>

        </div>


  		</div>
  	</div>

  	<feature-bullet class="is-reversed">
      <span slot="title">Resend stuck transactions with one click.</span>
  		<img slot="image" src="~/assets/img/decentralized-identity.svg"
  		alt="Self-Sovereign Identity">
      <p>Don't worry about choosing the right gas price. Simply choose a
        priority level for your transaction and the wallet's prediction
        algorithms will select the optimal gas price. If a trasnaction does
        get stuck, you can resend it with a higher fee or cancel it in one
        click.</p>
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

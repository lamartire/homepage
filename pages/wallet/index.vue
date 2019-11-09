<template>
  <div class="index-page">

  	<hero-banner class="is-dark">
      <div class="hero-inner animated fadeInDown">
        <h1 class="title has-text-centered is-size-1">Finally, an Ethereum
        and token wallet you'll be delighted to use.</h1>
        <div class="subtitle-box is-centered">
          <p class="subtitle">Endpass is a web wallet that puts your
            in control of your keys, secures your funds, and automatically
            optimizes transactions.
            </p>
        </div>
        <div class="buttons cta-box is-centered">
          <a href="https://wallet.endpass.com" class="button is-medium is-success">Get Started</a>
        </div>
      </div>
  	</hero-banner>


  	<div class="section feature-cards is-dark">
  		<div class="container">
  			<h2 class="is-size-3 has-text-centered">Features</h2>
        <div class="columns is-multiline boxes">

          <div class="column is-one-third">
            <feature-card target="#feature-fee" class="">
              <span slot="image" class="icon has-text-red is-red"><img
                src="~/assets/svg/loop.svg"></span>
              <span class="has-text-dark" slot="title">Say goodbye to stuck transactions</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card target="#feature-tokens" class="">
              <span slot="image" class="icon is-green"><img
                src="~/assets/svg/bullhorn.svg"></span>
              <span class="has-text-dark" slot="title">Automatic ERC20
                      token airdrop notifications</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card target="#feature-cloud" class="">
              <span slot="image" class="icon is-blue has-text-blue"><img
                src="~/assets/svg/cloud-transfer-upload.svg"></span>
              <span class="has-text-dark" slot="title">Secure encrypted
                      cloud backup and sync</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card target="#feature-keys" class="">
              <span slot="image" class="icon is-orange"><img
                src="~/assets/svg/key.svg"></span>
              <span class="has-text-dark" slot="title">You control your
                      private keys</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card target="#feature-devices" class="">
              <span slot="image" class="icon is-cyan"><img
                src="~/assets/svg/tablet.svg"></span>
              <span slot="title" class="has-text-dark">Single wallet for all of your
                devices</span>
            </feature-card>
          </div>

          <div class="column is-one-third">
            <feature-card target="#feature-security" class="">
              <span slot="image" class="icon has-text-dark-blue
              is-dark-blue"><img src="~/assets/svg/lock-locked.svg"></span>
              <span slot="title" class="has-text-dark">Multifactor security
              and bank-grade encryption</span>
            </feature-card>
          </div>

        </div>

  		</div>
  	</div>

  	<div class="feature-bullets">
  	  <feature-bullet id="feature-fee" class="is-reversed">
  	     <span slot="caption" class="has-text-red">
  	       Automatic transaction fee optimization
  	     </span>
  	     <span slot="title">Resend stuck transactions with one click.</span>
  	  	<img slot="image" class="screenshot" src="~/assets/img/priority-select.png"
  	  	alt="Self-Sovereign Identity">
  	     <p>Don't worry about choosing the right gas price. Simply choose a
  	       priority level for your transaction and the wallet's prediction
  	       algorithms will select the optimal gas price. If a transaction does
  	       get stuck, you can resend it with a higher fee or cancel it in one
  	       click.</p>
  	  </feature-bullet>

  	  <feature-bullet id="feature-tokens" class="">
  	     <span slot="caption" class="has-text-green">
  	       Automatic token detection
  	     </span>
  	     <span slot="title">Instantly discover all tokens in your wallet.</span>
  	  	<img slot="image" class="screenshot" src="~/assets/img/tokens-list.png"
  	  	alt="Self-Sovereign Identity">
  	     <p>Endpass Wallet automatically tracks all tokens at any Ethereum
  	       address, and notifies you of any incoming funds. Never miss an
  	       airdrop again!</p>
  	  </feature-bullet>

  	  <feature-bullet id="feature-cloud" class="is-reversed is-light-grey has-small-image">
  	     <span slot="caption" class="has-text-blue">
  	       Encrypted cloud backups
  	     </span>
  	     <span slot="title">Back up your encrypted wallet to our secure cloud,
  	     or to your own server.</span>
  	  	<img slot="image" src="~/assets/img/decentralized-identity.svg"
  	  	alt="Self-Sovereign Identity">
  	     <p>Your private keys are first encrypted on your local computer, and
  	     then synced to our secure cloud. All data is encrypted in transit and
  	     at rest at all times.</p>
  	     <p>Because the wallet is built on a open protocol, you can also sync
  	     wallets to a server that you control.</p>
  	  </feature-bullet>

  	  <feature-bullet id="feature-keys" class="">
  	     <span slot="caption" class="has-text-orange">
  	       Your keys belong to you
  	     </span>
  	     <span slot="title">Manage all your accounts from one place. Export
  	       private keys any time.</span>
  	  	<img slot="image" class="screenshot" src="~/assets/img/manage-accounts.png"
  	  	alt="Self-Sovereign Identity">
  	     <p>Create and import as many accounts as you like. Endpass is a
  	       standards-compatible HD wallet, so your keys can all be recovered
  	       from the same seed phrase.</p>
  	     <p>Export your private keys to cold storage or another wallet any
  	       time.</p>
  	  </feature-bullet>

  	  <feature-bullet id="feature-devices" class="is-reversed has-small-image">
  	     <span slot="caption" class="has-text-blue">
  	       Works in any modern browser
  	     </span>
  	     <span slot="title">Sync your wallet to all your devices. No software to
  	       download.</span>
  	  	<img slot="image" src="~/assets/img/flexible-personas.svg"
  	  	alt="Self-Sovereign Identity">
  	     <p>Endpass Wallet uses innovative technology to secure your private
  	       keys without needing to download any software or browser
  	       extensions.</p>
  	     <p>Because it is a web wallet, it works seamlessly on all of your
  	       desktop, tablet, and mobile devices.</p>
  	  </feature-bullet>

  	  <feature-bullet id="feature-security" class="is-reversed is-light-grey has-small-image">
  	     <span slot="caption" class="has-text-dark-blue">
  	       Bank-grade security
  	     </span>
  	     <span slot="title">Multi factor security built in</span>
  	  	<img slot="image" src="~/assets/img/data-security.svg"
  	  	alt="Self-Sovereign Identity">
  	     <p>Your funds are always protected by multiple layers of security,
  	       including two factor authentication, email confirmation, and more. Endpass is a fully decentralized wallet.
  	       We <strong>never</strong> have access to your funds.</p>
  	  </feature-bullet>

  	  <feature-bullet id="feature-open-source" class="has-small-image">
  	     <span slot="caption" class="has-text-purple">
  	       Community-driven open source
  	     </span>
  	     <span slot="title">100% open source and open protocols</span>
  	  	<img slot="image" src="~/assets/img/open-standards.svg"
  	  	alt="Self-Sovereign Identity">
  	     <p>We believe in transparency, engaging with the community and
  	       standards-driven, open source development. All of the wallet code
  	       is available on Github to inspect. </p>
  	     <p>The wallet is built on the brand-new Open Keystore Protocol, an
  	       easy to way to use your own key server with the wallet software.</p>
  	  </feature-bullet>
  	</div>

    <action-bar>
      <div>
        <h4 class="is-size-4 has-text-yellow">Start using the wallet in 15
        seconds</h4>
        <p>Signing up for the Endpass wallet is fast and easy. It runs in
          your browser. There's no software to download and nothing to
          install.</p>
      </div>
    </action-bar>
  </div>
</template>

<script>

import HeroBanner from '~/components/HeroBanner.vue'
import EmailForm from '~/components/EmailForm.vue'
import FeatureBullet from '~/components/FeatureBullet.vue'
import FeatureCard from '~/components/FeatureCard.vue'
import ActionBar from '~/components/ActionBar.vue'
import VCard from '~/components/VCard.vue'

export default {
  components: {
  	HeroBanner,
  	EmailForm,
  	FeatureBullet,
  	FeatureCard,
    ActionBar,
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

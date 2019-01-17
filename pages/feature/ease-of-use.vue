<template>
  <div>
    <hero-banner class="is-light">
      <div class="hero-inner">
        <div class="columns">
          <div class="column">
            <h1 class="title is-size-2">Friendly, easy to use Ethereum wallet</h1>
            <h2 class="subtitle">Even if you're a a crypto beginner, you'll
            be managing crypto tokens like a pro in minutes with Endpass.
            Send, recieve, and securely store tokens with an intuitive
            interface.</h2>
            <a class="button is-medium is-success"
              href="https://wallet.endpass.com">Get Started</a>
          </div>
          <div class="column is-two-fifths has-text-centered">
            <div class="image is-square">
              <img class="screenshot" src="~/assets/img/tokens-list.png"
                                      alt="Easy to use" >
            </div>
          </div>
        </div>
      </div>
    </hero-banner>

    <div class="section text-section">
      <div class="container">
        <div class="columns">
        <div class="column">
          <h2 class="subtitle is-size-3">Beginner-friendly crypto wallet</h2>
          <p class="is-size-5">If you know how to use Facebook, you can use
            the Endpass cryptocurrency wallet. Just point and click to
            send, receive, and store Ethereum and ERC20 tokens. Endpass is
          the safest, most secure wallet for beginners.</p>
        </div>
        <div class="column is-one-fifth is-hidden-mobile">
          <div class="image">
            <img src="~/assets/img/flexible-personas.svg" alt="Beginner friendly">
          </div>
        </div>
        </div>
      </div>
    </div>

    <div class="section video-section is-grey">
      <div class="container">
        <h2 class="subtitle is-size-3 has-text-centered">Friendly, safe
          interface</h2>
        <div class="columns">
          <div class="column">
             <iframe width="560" height="315"
               src="https://www.youtube.com/embed/-bxgvtV6koQ?modestbranding=1&rel=0"
               frameborder="0" allow="accelerometer; autoplay;
               encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen></iframe>
          </div>
          <div class="column is-one-third">
            <p class="is-size-5">Endpass automatically prevents commmmon
              crypto mistakes. Your funds are safe, and all of the optimal
            settings are chosen for you.</p>
          </div>
        </div>
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

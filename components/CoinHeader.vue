<template>
  <div class="coin-header">
    <hero-banner class="is-light">
      <div class="hero-inner">
        <div class="columns">
          <div class="column">
            <h1 class="title is-size-2">
              Free
              <span class="coin-name">{{name}}</span>
              <span class="coin-symbol">{{sym}}</span>
               Web Wallet
            </h1>
            <p class="subtitle">Endpass is an open-source, decentralized
              {{name}} wallet. You can use the Endpass wallet to send or
              receive <span class="coin-symbol">{{sym}}</span>, or to monitor the <span class="coin-symbol">{{sym}}</span> balance of
              any Ethereum account address.</p>
            <p class="subtitle">There's nothing to download and no
              software to install. Just create a free account to access
              your <span class="coin-symbol">{{sym}}</span> coins and
              hundreds of other crypto assets.</p>
          </div>
          <div class="column is-one-fifth has-text-centered">
            <div v-if="logo" class="image coin-logo is-128x128">
              <img :src="logo" :alt="name" >
            </div>
              <a class="button is-medium is-success"
                 href="https://wallet.endpass.com">{{sym}}
                 Web Wallet</a>
          </div>
        </div>
      </div>
      <slot></slot>
    </hero-banner>
  </div>
</template>

<script>
import HeroBanner from '~/components/HeroBanner.vue'

export default {
  props: {
    symbol: String,
    name: String,
    logo: String,
  },
  computed: {
    sym() {
      let symbol = this.symbol || 'token';
      return symbol.toUpperCase().substring(0,5);
    }
  },
  components: {
  	HeroBanner,
  },
}
</script>

<style lang="scss">
.coin-header {
  .title {
    span {
      font-weight: initial;
    }
  }
  .coin-symbol {
    text-transform: uppercase;
    font-weight: 700;
  }
  .coin-name {
  }
  .coin-logo {
    margin: 1rem auto;
  }
}
</style>

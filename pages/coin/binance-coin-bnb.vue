<template>
  <div class="coin-page">

    <coin-header
      :name="name" :symbol="symbol"
      :logo="logo" >
    </coin-header>


      <div class="section text-section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="subtitle is-size-3 has-text-centered">About {{name}}</h2>
              <p class="is-size-5">{{name}}, traded with the symbol {{symbol}}
                is an ERC20 token on the Ethereum blockchain.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section text-section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="subtitle is-size-3 has-text-centered">{{symbol}}
                Price and Market Cap</h2>
              <p class="is-size-5">{{symbol}} is traded on many popular
                exchanges.</p>
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-half">
              <div class="coin-price">
                <script
src="https://cryptoradarorg-zhxsya288ouz.stackpathdns.com/wp-content/themes/mag-child/inc/widget/widget.js"></script>
                <div id="cr-widget" data-view="0" :data-coin="name" data-market="1" data-volume="1" data-currency="USD" data-num="1" data-pages="1"></div>
              </div>
            </div>

            <div class="column"></div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import CoinHeader from '~/components/CoinHeader.vue'

export default {
  head () {
    return {
      title: `Free ${this.name} ${this.symbol} Wallet`
    }
  },
  data () {
    return {
      symbol: "BNB",
      name: "Binance Coin",
      logo: "https://tokeninfo.endpass.com/img/0xb8c77482e45f1f44de1745f52c74426c631bdd52.png",
    }
  },
  layout: 'landing',
  components: {
    CoinHeader,
  },
}
</script>


<style lang="scss">
.coin-page {
}
</style>

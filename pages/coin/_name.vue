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
  async asyncData ({ params, error, payload }) {
    let name = parseName(params.name)
    let token = {
      name,
      symbol: '',
      logo: '',
    }
    if (payload) {
      token = {
        ...token,
        ...payload.token
      }
    }

    return {
      name,
      symbol: token.symbol,
      logo: token.logo || '',
    }
  },
  layout: 'landing',
  components: {
    CoinHeader,
  },
}

// kebak case to capitalized words
function parseName(str) {
  return str.replace(/-/g, ' ').replace(/\w\S*/g, function(word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
}
</script>


<style lang="scss">
.coin-page {
}
</style>

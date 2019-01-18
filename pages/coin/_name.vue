<template>
  <div class="coin-page">

    <coin-header
      :name="name" :symbol="symbol"
      :logo="logo" >
    </coin-header>


      <div class="section text-section description" v-if="description">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h2 class="subtitle is-size-3 has-text-centered">About {{name}}</h2>
              <div class="description-content" v-html="description">
              </div>
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
    // name is in format coin-name-sym ex. "binance-coin-bnb"
    let token = parseName(params.name)
    let content = {}
    if (payload) {
      token = {
        ...token,
        ...payload.token
      }
      content = payload.content || {}
    }

    return {
      name : token.name,
      symbol: token.symbol,
      logo: token.logo || '',
      description: content.description,
    }
  },
  layout: 'landing',
  methods: {
  },
  components: {
    CoinHeader,
  },
}


// name is in format coin-name-sym ex. "binance-coin-bnb" for SEO
function parseName (rawName) {
  let parts = rawName.split('-')
  if ( parts.length < 2 ) {
    return {name: unKebab(rawName), symbol: ''}
  }
  // pop off symbol
  let symbol = parts.pop().toUpperCase()
  let name = unKebab(parts.join('-'))
  return {name, symbol}
}

// kebab case to capitalized words
function unKebab (str) {
  return str.replace(/-/g, ' ').replace(/\w\S*/g, function(word) {
return word.charAt(0).toUpperCase()
+ word.substr(1).toLowerCase();
  });
}

</script>


<style lang="scss">
.coin-page {
}
</style>

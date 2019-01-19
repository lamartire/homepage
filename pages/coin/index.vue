<template>
  <div class="coin-index">
    <div class="section">
      <div class="container">
        <h1 class="title">Supported Coins and Tokens</h1>
        <p class="subtitle">Endpass Wallet is an open source web wallet for
          Ethereum and Ethereum Classic. In addition to ETH and ETH coins,
          Endpass also supports tokens on the Ethereum Blockchain.</p>
        <h3 class="is-size-4"><strong>{{tokens.length}}</strong> Supported
          Coins and Tokens</h3>
        <div class="token-list">
          <ul>
            <li v-for="token in tokens" :key="token.address">
              <nuxt-link :to="token.link">{{token.name}}
                <span class="coin-symbol">{{token.symbol}}</span> Wallet</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import endpass from '~/plugins/endpass.js'

export default {
  head () {
    return {
      title: `Endpass Wallet Supported Coins and Tokens`
    }
  },
  async asyncData () {
      let tokens = await endpass.getTokens()
      tokens = tokens.map(token => {
        token.link = `/coin/${token.slug}-${token.symbol}`.toLowerCase()
        return token
      });
      return { tokens }
  },
  layout: 'landing',
}
</script>


<style lang="scss">
@media screen and (min-width: 769px) {
  .token-list {
    column-count: 3;
  }
}

.token-list {
  ul {
    margin: 0;
  }

  .coin-symbol {
    text-transform: uppercase;
    font-weight: 700;
  }

}
</style>

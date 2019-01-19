// Endpass API wrappers
import axios from 'axios'
const TOKEN_INFO_URL='https://tokeninfo.endpass.com/api/v1/tokens'

export default {
  // Get data for all Ethereum tokens from endpass API
  // Returns promise
  getTokens() {
    // uncomment for dummy data during dev
    //return Promise.resolve([{"slug":"bnb-bnb","name":"BNB","symbol":"BNB","address":"0xb8c77482e45f1f44de1745f52c74426c631bdd52","decimals":18,"logo":"/img/0xb8c77482e45f1f44de1745f52c74426c631bdd52.png"}])

    return axios.get(TOKEN_INFO_URL)
    .then(res => {
      let tokens = res.data.filter(t => t.symbol && t.name); // not empty symbol
      return tokens.map(token => {
        token.slug = token.name.replace(/[\W_]/g,' ').trim().replace(/\s+/g, '-').toLowerCase();
        token.symbol = token.symbol.split(' ')[0].toLowerCase();
        return token
      })
    })
  }
}

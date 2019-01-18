// Endpass API wrappers
import axios from 'axios'
const TOKEN_INFO_URL='https://tokeninfo.endpass.com/api/v1/tokens'

export default {
  // Get data for all Ethereum tokens from endpass API
  // Returns promise
  getTokens() {
    return axios.get(TOKEN_INFO_URL)
    .then(res => {
      let tokens = res.data.filter(t => t.symbol && t.name); // not empty symbol
      return tokens.map(token => {
        token.name = token.name.replace(/[\W_]/g,' ').trim().replace(/\s+/g, '-').toLowerCase();
        token.symbol = token.symbol.split(' ')[0].toLowerCase();
        return token
      })
    })
  }
}

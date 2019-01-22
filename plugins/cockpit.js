// Functions for Cockpit CMS API
import axios from 'axios'

const CONTENT_URL='https://cockpit.endpass.com/api'

export default {
  // Fetches content about tokens from headless CRM
  // Returns promise which resolves to an object of content keyed by uppercase
  // token symbol
  getCollection(name, params = {}) {
    let apiKey = process.env.COCKPIT_API_KEY
    if (!apiKey) {
      return Promise.reject('$COCKPIT_API_KEY is empty, cannot fetch content')
    }
    return axios.post(`${CONTENT_URL}/collections/get/${name}?token=${apiKey}`, params)
    .then(res => {
      return res.data.entries
    })
  }
}

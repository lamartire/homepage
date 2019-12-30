// Functions for Cockpit CMS API
import axios from 'axios'

const CONTENT_URL='https://cockpit.endpass.com/api'

export default {
  // Fetches content about tokens from headless CRM
  // Returns promise which resolves to an array of entries
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
  },

  // Get a single item from a collection by the given filter
  getItem(collectionName, filter = {}) {
    let params = {
      filter,
      populate: 1
    }
    return this.getCollection(collectionName, params).then(items => {
      if (!items.length) {
        return
      }
      return items[0]
    })
  },
}

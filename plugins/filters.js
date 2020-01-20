import Vue from 'vue'

// Absolute image url from cockpit
Vue.filter('imageUrl', val => {
  if (val.startsWith("http")) {
    return val
  } else {
    return process.env.COCKPIT_URL + val
  }
});

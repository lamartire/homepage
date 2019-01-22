<template>
  <div class="feature-page">
    <hero-banner class="is-light">
      <div class="hero-inner">
        <div class="columns">
          <div class="column">
            <h1 class="title is-size-2">{{headline}}</h1>
            <h2 class="subtitle">{{subhead}}</h2>
            <a class="button is-medium is-success"
               href="https://wallet.endpass.com">{{cta_text}}</a>
          </div>
          <div class="column is-two-fifths has-text-centered"
               v-if="screenshot && screenshot.path">
            <div class="image is-square">
              <img class="screenshot" :src="screenshot.path"
                   :alt="headline" >
            </div>
          </div>
        </div>
      </div>
    </hero-banner>

    <div class="section video-section is-grey" v-if="videoUrl">
      <div class="container">
        <h2 class="subtitle is-size-3 has-text-centered">Friendly, safe
          interface</h2>
        <div class="columns">
          <div class="column">
            <iframe width="560" height="315" :src="videoUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="column is-one-third">
          </div>
        </div>
      </div>
    </div>

    <div class="section text-section" v-for="feat in features">
      <div class="container">
        <div class="columns feature-bullet">

          <div class="column">
            <h2 class="subtitle is-size-3">{{feat.value.title}}</h2>
            <div v-if="feature_1_body"
              v-html="$md.render(feat.value.content)"></div>
          </div>

          <div class="column is-one-fifth is-hidden-mobile"
               v-if="feat.value.image">
            <div class="image">
              <img :src="feat.value.image.path" :title="feat.value.title">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HeroBanner from '~/components/HeroBanner.vue'

export default {
	head () {
		return {
			title: this.title,
		}
	},
  async asyncData ({ params, error, payload }) {
    return payload
  },
  computed: {
    videoUrl() {
      if (!this.video_url) {
        return
      }
      return `${this.video_url}?modestbranding=1&rel=0`
    }
  },
  layout: 'landing',
  components: {
  	HeroBanner,
  },
}
</script>

<style lang="scss">
.feature-page {
  .section:nth-child(odd) .feature-bullet {
    flex-direction: row-reverse;
  }
}
</style>

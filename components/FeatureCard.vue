<template>
  <v-card class="feature-card">
    <a :href="target">
      <div class="media">
        <div class="media-left">
          <div class="image is-48x48">
						<slot name="image"></slot>
          </div>
        </div>
        <div class="media-content">
          <h4 class="feature-title is-size-4">
            <slot name="title"></slot>
          </h4>
          <slot></slot>
        </div>
      </div>
    </a>
  </v-card>
</template>

<script>
import VCard from '~/components/VCard.vue'
export default {
  props: {
    target: String,
  },
  components: {
    VCard,
  },
}
</script>

<style lang="scss">
.feature-card {

}
</style>

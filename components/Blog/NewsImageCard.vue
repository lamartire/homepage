<template>
  <v-card class="blog-news-image-card" :style="{ 'background-image': `url(${image})` }">
    <nuxt-link class="blog-news-image-card-link" :to="href" exact />
    <p class="blog-news-image-card-author">
      <slot name="author" />
    </p>
    <h3 class="blog-news-image-card-title">
      <slot name="title" />
    </h3>
    <p class="blog-news-image-card-intro">
      <slot />
    </p>
  </v-card>
</template>

<script>
import VCard from "@endpass/ui/kit/VCard";

export default {
  props: {
    slug: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    }
  },

  components: {
    VCard
  },

  computed: {
    href() {
      return `/blog/${this.slug}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-news-image-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 36px 32px;
  color: var(--endpass-ui-color-white);
  background-size: cover;
  background-position: center;
}

.blog-news-image-card-author {
  margin-bottom: 11px;
  font-size: 20px;
  line-height: 1.4;
}

.blog-news-image-card-title {
  margin-bottom: 120px;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.17;
  letter-spacing: -0.9px;
}

.blog-news-image-card-intro {
  margin-top: auto;
  font-size: 18px;
  line-height: 1.56;
  color: #ffffff;
}

.blog-news-image-card-link {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>

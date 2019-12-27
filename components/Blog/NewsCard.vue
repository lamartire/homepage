<template>
  <v-card class="blog-news-card">
    <time class="blog-news-card-date">
      <slot name="date" />
    </time>
    <h3 class="blog-news-card-title">
      <slot name="title" />
    </h3>
    <p class="blog-news-card-intro">
      <slot />
    </p>
    <nuxt-link class="blog-news-card-link" :to="href" exact>
      <div class="blog-news-card-icon">
        <v-svg-icon name="arrow-right" />
      </div>
      Read more
    </nuxt-link>
  </v-card>
</template>

<script>
import VCard from "@endpass/ui/kit/VCard";
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";

export default {
  props: {
    slug: {
      type: String,
      required: true,
    }
  },

  components: {
    VCard,
    VSvgIcon
  },
  computed: {
    href() {
      return `/blog/${this.slug}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-news-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 28px 32px 36px;
}

.blog-news-card-date {
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: #50565b;
}

.blog-news-card-title {
  margin-bottom: auto;
  font-size: 32px;
  font-style: normal;
  line-height: 1.25;
  color: #50565b;
}

.blog-news-card-intro {
	margin-top: 48px;
  margin-bottom: 70px;
  font-size: 18px;
  line-height: 1.56;
  color: #13171a;
}

.blog-news-card-link {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #6e32c9;
}

.blog-news-card-icon {
  position: relative;
  width: 17px;
  height: 14px;
  margin-right: 23px;
  margin-bottom: 7px;
}
</style>

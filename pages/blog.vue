<template>
  <section class="blog">
    <div class="blog-title container">
      <div class="columns is-variable is-4">
        <div class="column is-offset-2 is-8">
          <page-intro>
            <template slot="title">
              Welcome to the Endpass Blog
            </template>
            <p>
              This documentation is your Sketch reference manual. No matter how
              experienced you are or what you want to achieve, it should cover
              everything you need to know.
            </p>
          </page-intro>
        </div>
      </div>
    </div>
    <div class="blog-content container">
      <div class="blog-row">
        <div class="tile is-ancestor">
          <div v-for="p in posts" :key="p._id" class="blog-post tile">
            <news-image-card
              v-if="p.image"
              :href="p.title_slug"
              :image="p.image.path"
              >
              <template v-if="p.author" slot="author">
                {{ p.author }}
              </template>
              <template slot="title"> {{ p.title }}</template>
              {{ p.subhead }}
            </news-image-card>

            <news-card
              v-else
              :href="p.title_slug"
            >
              <template v-if="p.author" slot="author">
                {{ p.author }}
              </template>
              <template slot="title"> {{ p.title }}</template>
              {{ p.subhead }}
            </news-card>
          </div>

        </div>
      </div>
    </div>
    <page-footer>
      <template slot="copyright">
        Endpass. All rights reserved
      </template>
    </page-footer>
  </section>
</template>

<script>
import PageIntro from "~/components/PageIntro";
import PageFooter from "~/components/PageFooter";
import NewsImageCard from "~/components/Blog/NewsImageCard";
import NewsCard from "~/components/Blog/NewsCard";

import cockpit from '~/plugins/cockpit.js';

export default {
  head() {
    return {
      title: "blog"
    };
  },

  layout: "new",

  components: {
    PageFooter,
    PageIntro,
    NewsImageCard,
    NewsCard
  },
  async asyncData () {
    let posts = await cockpit.getCollection("blog_posts", {
      filter: { published: true},
      sort: {_created:-1},
    });
    return { posts }
  },
};
</script>

<style lang="scss" scoped>
.blog {
  background-color: #f2f4f8;
  background-image: url(../assets/bg/desktop/header.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
}

.blog-content {
  padding-bottom: 286px;
}

.blog-row {
  align-items: stretch;
}

.blog-row:not(:last-child) {
  margin-bottom: 30px;
}

@include touch {
  .blog {
    background-image: none;
  }

  .blog-title {
    padding-top: 120px;
    padding-bottom: 70px;
    margin-bottom: 70px;
    background-image: url(../assets/bg/api-block.svg);
    background-size: cover;
  }

  .blog-post {
    margin-bottom: 20px;
  }

  .blog-row:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>

<template>
  <section class="blog">
    <div class="blog-title container">
      <div class="columns is-variable is-4">
        <div class="column is-offset-2 is-8">
          <page-intro>
            <template slot="title">
              Welcome to the Endpass Blog
            </template>
            <p>Stay informed of the latest trends in AI-powered identity
              verification, KYC, and compliance.</p>
          </page-intro>
        </div>
      </div>
    </div>
    <div class="blog-content container">
      <div class="blog-row">
        <div class="tile is-ancestor">
          <div v-for="(p, i) in posts"
               :key="p._id"
               class="tile is-parent"
               :class="{'is-8': i === 0}">
            <div class="tile is-child blog-post">
              <news-image-card
                v-if="p.image"
                :slug="p.title_slug"
                :image="p.image.path | imageUrl"
                >
                <template v-if="p.author" slot="author">
                  {{ p.author }}
                </template>
                <template slot="title"> {{ p.title }}</template>
                {{ p.subhead }}
              </news-image-card>

              <news-card
                v-else
                :slug="p.title_slug"
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
  background-image: url(~assets/bg/desktop/header.svg);
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
    background-image: url(~assets/bg/api-block.svg);
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

<template>
  <section class="blog-article">
    <section class="blog-article-content">
      <section class="blog-article-header container">
        <div class="columns is-variable is-4">
          <div class="column is-2 is-offset-2">
            <author>
              <img src="~/assets/img/36-px.png" slot="avatar" />
              <template slot="author" v-if="post.author">
                {{ post.author }}
              </template>
              <template slot="date">
                {{ date | fmtDate }}
              </template>
            </author>
          </div>
          <div class="column is-8">
            <h4>
              {{ post.category }}
            </h4>
            <h2>{{ post.title }}</h2>
          </div>
        </div>
      </section>
      <section class="blog-article-images" v-if="images.length">
        <div class="columns is-variable is-4">
          <div class="column is-8 is-offset-2">
            <img :src="titleImage" />
          </div>
        </div>
      </section>
      <section class="container">
        <div class="columns is-variable is-4">
          <div class="blog-article-article column is-8 is-offset-2">
            <div class="content" v-html="postBody"></div>
          </div>
        </div>
      </section>
    </section>
    <page-footer>
      <template slot="copyright">
        Endpass. All rights reserved
      </template>
    </page-footer>
  </section>
</template>

<script>
import PageFooter from "~/components/PageFooter";
import Author from "~/components/Blog/Author";
import Gallery from "~/components/Blog/Gallery";
import Suggestion from "~/components/Blog/Suggestion";
import cockpit from "~/plugins/cockpit.js";

export default {
  head() {
    return {
      title: this.post.title,
      meta: [
        // Common meta
        {
          hid: "ogTitle",
          property: "og:title",
          content: this.post.title
        },
        {
          hid: "ogImage",
          property: "og:image",
          content: this.titleImage
        },
        {
          hid: "ogDescription",
          property: "og:description",
          content: this.post.subhead || ""
        },
        {
          hid: "ogUrl",
          property: "og:url",
          content: this.url
        },
        // Twitter meta
        {
          hid: "twitterTitle",
          name: "twitter:title",
          content: this.post.title
        },
        {
          hid: "twitterCard",
          name: "twitter:card",
          content: this.titleImage
        },
        {
          hid: "twitterDescription",
          name: "twitter:description",
          content: this.post.subhead || ""
        },
        {
          hid: "twitterSite",
          name: "twitter:site",
          content: this.url
        }
      ]
    };
  },

  layout: "new",

  async asyncData({ params, error, payload }) {
    // Generated static site
    if (payload) {
      return { post: payload };
    } else {
      // Dev server, dynamic load
      let post = await cockpit.getItem("blog_posts", {
        published: true,
        title_slug: params.slug
      });
      if (!post) {
        return error({ statusCode: 404, message: "404 Page not found" });
      }
      return { post };
    }
  },

  computed: {
    date() {
      return new Date(this.post._created * 1000);
    },

    url() {
      return `https://${process.env.S3_BUCKET_NAME}/blog/${
        this.post.title_slug
      }`;
    },

    // TODO multiple post images
    images() {
      let imageUrls = [];
      if (this.post.image) {
        imageUrls.push(this.post.image.path);
      }
      return imageUrls;
    },

    titleImage() {
      return `${process.env.COCKPIT_URL}${this.images[0]}`;
    },

    postBody() {
      if (!this.post.body) {
        return;
      }
      return this.$md.render(this.post.body);
    }
  },

  filters: {
    fmtDate(d) {
      if (!d) {
        return "";
      }
      return d.toDateString();
    }
  },

  methods: {
    createMetaTag(prefix, property, content = "") {
      return {
        hid: `${prefix}:${property}`,
        property,
        content
      };
    }
  },

  components: {
    PageFooter,
    Author,
    Gallery,
    Suggestion
  }
};
</script>

<style lang="scss" scoped>
.blog-article {
  padding-top: 196px;
  background-image: url(~assets/bg/desktop/header.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
}

.blog-article-content {
  padding-bottom: 478px;
  background-color: var(--endpass-ui-color-white);
}

.blog-article-content img {
  border-radius: 6px;
}

.blog-article-header {
  padding-top: 99px;
}

.blog-article-header h2 {
  margin-bottom: 113px;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.17;
  letter-spacing: -1px;
  color: #13171a;
}

.blog-article-header h4 {
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.4;
  color: #13171a;
}

.blog-article-gallery {
  margin-bottom: 96px;
}

.blog-article-images {
  margin-bottom: 48px;
}

.blog-article-images img {
  display: block;
  width: 100%;
  object-fit: cover;
  margin: 0 !important;
}

.blog-article-images img:after {
  content: "";
  display: block;
  padding-top: 100%;
}

.blog-article-article h3 {
  margin-bottom: 48px;
  font-size: 32px;
  line-height: 1.25;
  color: #50565b;
}

.blog-article-article h4 {
  margin-bottom: 28px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.7;
  color: #13171a;
}

.blog-article-article p {
  margin-bottom: 28px;
}

.blog-article-article img {
  margin: 48px 0;
}

@include touch {
  .blog-article-blog-article {
    padding-top: 96px;
  }

  .blog-article-header {
    padding-top: 39px;
  }

  .blog-article-header h2 {
    margin-bottom: 60px;
  }

  .blog-article-gallery {
    margin-bottom: 70px;
  }

  .blog-article-suggestion {
    margin-bottom: 70px;
  }

  .blog-article-images img {
    margin-bottom: 32px !important;
  }

  .blog-article-content {
    padding-bottom: 150px;
  }
}
</style>

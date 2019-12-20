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
        <div class="columns is-variable is-4">
          <div class="blog-post column is-8">
            <news-image-card
              href="/article"
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2018%2F11%2F24%2F16%2Fcat.jpg&f=1&nofb=1"
            >
              <template slot="author">
                Heather R Morgan
              </template>
              <tempate slot="title"
                >How software will re-invent identity verification</tempate
              >
              Like many busy professionals, I had been procrastinating switching
              banks and setting up new financial accounts because I was dreading
              spending time on long and confusing applications.
            </news-image-card>
          </div>
          <div class="blog-post column is-4">
            <news-card href="/article">
              <template slot="date">
                12 June
              </template>
              <template slot="title">
                Manage all your accounts from one place.
              </template>
              <template>
                Endpass Wallet automatically tracks all tokens at any Ethereum
                address
              </template>
            </news-card>
          </div>
        </div>
      </div>
      <div class="blog-row">
        <div class="columns is-variable is-4">
          <div class="blog-post column is-4">
            <news-card href="/article">
              <template slot="date">
                12 June
              </template>
              <template slot="title">
                Manage all your accounts from one place.
              </template>
              <template>
                Endpass Wallet automatically tracks all tokens at any Ethereum
                address
              </template>
            </news-card>
          </div>
          <div class="blog-post column is-4">
            <news-card href="/article">
              <template slot="date">
                12 June
              </template>
              <template slot="title">
                Manage all your accounts from one place.
              </template>
              <template>
                Endpass Wallet automatically tracks all tokens at any Ethereum
                address
              </template>
            </news-card>
          </div>
          <div class="blog-post column is-4">
            <news-card href="/article">
              <template slot="date">
                12 June
              </template>
              <template slot="title">
                Manage all your accounts from one place.
              </template>
              <template>
                Endpass Wallet automatically tracks all tokens at any Ethereum
                address
              </template>
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
  }
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

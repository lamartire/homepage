<template>
  <section :class="$style.base">
    <section :class="$style.content">
      <section :class="[$style.header, 'container']">
        <div class="columns is-variable is-4">
          <div class="column is-3">
            <author>
              <img src="../assets/img/36-px.png" slot="avatar" />
              <template slot="author">
                Heather R Morgan
              </template>
              <template slot="date">
                23 Oct 2019
              </template>
            </author>
          </div>
          <div class="column is-8">
            <h4>
              Innovative Technologies
            </h4>
            <h2>
              The navigation system provides a set of screen elements that allow
              the user to move page.
            </h2>
          </div>
        </div>
      </section>
      <section :class="$style.gallery">
        <Gallery
          :images="[
            'http://placekitten.com/g/1440/780',
            'http://placekitten.com/g/1440/780',
            'http://placekitten.com/g/1440/780'
          ]"
        />
      </section>
      <section class="container">
        <div class="columns is-variable is-4">
          <div class="column is-3">
            <div :class="$style.suggestion">
              <suggestion>
                <template slot="image">
                  <img src="http://placekitten.com/g/1440/780" />
                </template>
                <template>
                  Because the wallet is built on a open protocol, you can also
                  sync wallets to a server that you control.
                </template>
              </suggestion>
            </div>
          </div>
          <div :class="[$style.article, 'column', 'is-8', 'is-offset-1']">
            <h4>
              Sync your wallet to all your devices. No software to download.
            </h4>
            <p>
              We believe in transparency, engaging with the community and
              standards-driven, open source development. All of the wallet code
              is available on Github to inspect. The wallet is built on the
              brand-new Open Keystore Protocol, an easy to way to use your own
              key server with the wallet software.
            </p>
            <p>
              Create and import as many accounts as you like. Endpass is a
              standards-compatible HD wallet, so your keys can all be recovered
              from the same seed phrase. Export your private keys to cold
              storage or another wallet any time.
            </p>
            <h3>
              Back up your encrypted wallet to our secure cloud, or to your own
              server.
            </h3>
            <p>
              Endpass Wallet uses innovative technology to secure your private
              keys without needing to download any software or browser
              extensions. Because it is a web wallet, it works seamlessly on all
              of your desktop, tablet, and mobile devices.
            </p>
            <img src="http://placekitten.com/g/1440/780" alt="" />
            <h4>Multi factor security built in</h4>
            <p>
              Your funds are always protected by multiple layers of security,
              including two factor authentication, email confirmation, and more.
              Endpass is a fully decentralized wallet. We never have access to
              your funds. We believe in transparency, engaging with the
              community and standards-driven, open source development. All of
              the wallet code is available on Github to inspect.
            </p>
            <div :class="$style.images">
              <div class="columns is-variable is-4">
                <div class="column is-4">
                  <img src="http://placekitten.com/g/1440/780" />
                </div>
                <div class="column is-4">
                  <img src="http://placekitten.com/g/1440/780" />
                </div>
              </div>
            </div>
            <p>
              Endpass Wallet automatically tracks all tokens at any Ethereum
              address, and notifies you of any incoming funds. Endpass Wallet
              automatically tracks all tokens at any Ethereum address, and
              notifies you of any incoming funds. Never miss an airdrop again!
            </p>
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

export default {
  head() {
    return {
      title: "blog"
    };
  },

  layout: "new",

  components: {
    PageFooter,
    Author,
    Gallery,
    Suggestion
  }
};
</script>

<style lang="scss" module>
.base {
  padding-top: 196px;
  background-image: url(../assets/bg/desktop/header.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
}

.content {
  padding-bottom: 478px;
  background-color: var(--endpass-ui-color-white);
}

.content img {
  border-radius: 6px;
}

.header {
  padding-top: 99px;
}

.header h2 {
  margin-bottom: 113px;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.17;
  letter-spacing: -1px;
  color: #13171a;
}

.header h4 {
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.4;
  color: #13171a;
}

.gallery {
  margin-bottom: 96px;
}

.images {
  margin-bottom: 48px;
}

.images img {
  display: block;
  width: 100%;
  object-fit: cover;
  margin: 0 !important;
}

.images img:after {
  content: "";
  display: block;
  padding-top: 100%;
}

.article h3 {
  margin-bottom: 48px;
  font-size: 32px;
  line-height: 1.25;
  color: #50565b;
}

.article h4 {
  margin-bottom: 28px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.17;
  color: #13171a;
}

.article p {
  margin-bottom: 28px;
}

.article img {
  margin: 48px 0;
}

@include touch {
  .base {
    padding-top: 96px;
  }

  .header {
    padding-top: 39px;
  }

  .header h2 {
    margin-bottom: 60px;
  }

  .gallery {
    margin-bottom: 70px;
  }

  .suggestion {
    margin-bottom: 70px;
  }

  .images img {
    margin-bottom: 32px !important;
  }

  .content {
    padding-bottom: 150px;
  }
}
</style>

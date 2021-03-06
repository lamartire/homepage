<template>
  <header :class="{ 'page-header': true, 'with-menu': isMenuVisible }">
    <section class="container">
      <v-icon-button
        class="page-header-menu-trigger"
        :icon="triggerButonIcon"
        width="24"
        height="20"
        @click="onTriggerClick"
      ></v-icon-button>
      <section class="page-header-menu">
        <div class="page-header-logo">
          <v-logo></v-logo>
        </div>
        <nav class="page-header-menu-list">
          <li>
            <nuxt-link
              class="page-header-link"
              exact-active-class="active"
              to="/"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/pricing"
              class="page-header-link"
              exact-active-class="active"
            >
              Pricing
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/about"
              class="page-header-link"
              exact-active-class="active"
            >
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/careers"
              class="page-header-link"
              exact-active-class="active"
            >
              Careers
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/blog"
              class="page-header-link"
              exact-active-class="active"
            >
              Blog
            </nuxt-link>
          </li>
          <li>
            <a
              class="page-header-link"
              href="https://developers.endpass.com/"
              target="_blank"
            >
              Developers
            </a>
          </li>
        </nav>
        <ul class="page-header-menu-list">
          <li>
            <a
              class="page-header-link"
              href="https://help.endpass.com/"
              target="_blank"
            >
              Support
            </a>
          </li>
          <li>
            <a class="page-header-link" href="https://vault.endpass.com/">
              Sign in
            </a>
          </li>
        </ul>
      </section>
    </section>
  </header>
</template>

<script>
import { debounce } from "throttle-debounce";
import VIconButton from "@endpass/ui/kit/VIconButton";
import VLogo from "~/components/VLogo";

export default {
  name: "Header",

  data: () => ({
    isMenuVisible: false
  }),

  computed: {
    triggerButonIcon() {
      if (!this.isMenuVisible) {
        return "menu-alt";
      }

      return "close";
    },

    isHomePage() {
      return this.$route.name === "index";
    }
  },

  watch: {
    isMenuVisible(val) {
      if (val) {
        window.addEventListener("resize", this.debouncedScreenResizeHandler);
        return;
      }

      window.removeEventListener("resize", this.debouncedScreenResizeHandler);
    }
  },

  methods: {
    onTriggerClick() {
      this.isMenuVisible = !this.isMenuVisible;
    },

    debouncedScreenResizeHandler: debounce(150, function(e) {
      if (e.target.innerWidth >= 1024) {
        this.isMenuVisible = false;
      }
    })
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.debouncedScreenResizeHandler);
  },

  components: {
    VLogo,
    VIconButton
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  padding: 27px 50px;
}

.page-header-link {
  font-size: 16px;
  line-height: 1.5;
  color: var(--endpass-ui-color-white);
}

.page-header-link.active {
  text-decoration: underline;
  font-weight: bold;
  cursor: default;
  pointer-events: none;
}

.page-header-menu-trigger {
  display: none;
  color: var(--endpass-ui-color-white) !important;
}

.page-header-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page-header-menu-list {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.page-header-menu-list li:not(:last-child) {
  margin-right: 42px;
}

.page-header-logo {
  flex: 0 0 auto;
}

.page-header-menu-list a {
}

@include touch {
  .page-header {
    position: relative;
    padding: 0;
  }

  .page-header-menu-list {
    display: none;
  }

  .page-header.with-menu .page-header-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    padding-top: 125px;
    display: block;
    background-image: url(../assets/img/backgrounds/api-block.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .page-header.with-menu .page-header-menu-list {
    display: block;
  }

  .page-header.with-menu .page-header-menu-trigger {
    position: fixed;
  }

  .page-header.with-menu .page-header-menu-list li {
    margin-right: 0;
    text-align: center;
  }

  .page-header.with-menu .page-header-menu-list li a {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.3;
  }

  .page-header.with-menu .page-header-menu-list li:not(:last-child) {
    margin-bottom: 24px;
  }

  .page-header.with-menu .page-header-menu-list:not(:last-child) {
    margin-bottom: 80px;
  }

  .page-header-logo {
    position: absolute;
    left: 23px;
    top: 23px;
  }

  .page-header-menu-trigger {
    display: block;
    position: absolute;
    right: 23px;
    top: 23px;
    z-index: 11;
  }
}
</style>

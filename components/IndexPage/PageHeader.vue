<template>
  <header :class="{ 'page-header': true, 'with-menu': isMenuVisible }">
    <v-icon-button
      class="page-header-menu-trigger"
      :icon="triggerButonIcon"
      @click="onTriggerClick"
    ></v-icon-button>
    <section class="page-header-menu">
      <div class="page-header-logo">
        <v-svg-icon name="endpass"></v-svg-icon>
      </div>
      <nav class="page-header-menu-list">
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contacts</a></li>
      </nav>
      <ul class="page-header-menu-list">
        <li><a href="#">Support</a></li>
        <li><a href="#">Sign in</a></li>
      </ul>
    </section>
  </header>
</template>

<script>
import { debounce } from "throttle-debounce";
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";
import VIconButton from "@endpass/ui/kit/VIconButton";

export default {
  name: "Header",

  data: () => ({
    isMenuVisible: false
  }),

  computed: {
    triggerButonIcon() {
      if (!this.isMenuVisible) {
        return "menu";
      }

      return "close";
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

    onScreenResize() {},

    debouncedScreenResizeHandler() {
      debounce(150, () => {
        console.log(this);
      });
    }
  },

  components: {
    VSvgIcon,
    VIconButton
  }
};
</script>

<style lang="scss">
.page-header {
  padding: 27px 50px;
}

.page-header-menu-trigger {
  display: none;
}

.page-header-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.page-header-logo {
  width: 35px;
  height: 45px;
  color: var(--endpass-ui-color-white);
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

.page-header-menu-list a {
  font-size: 16px;
  line-height: 1.5;
  color: var(--endpass-ui-color-white);
}

.page-header-menu-trigger {
  color: var(--endpass-ui-color-white);
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
    padding-top: 62px;
    background: #fff;
    display: block;
  }

  .page-header.with-menu .page-header-menu-list {
    display: block;
  }

  .page-header.with-menu .page-header-menu-list a,
  .page-header.with-menu .page-header-logo,
  .page-header.with-menu .page-header-menu-trigger {
    color: #000;
  }

  .page-header.with-menu .page-header-menu-list li {
    margin-right: 0;
    text-align: center;
  }

  .page-header.with-menu .page-header-menu-list li:not(:last-child) {
    margin-bottom: 4px;
  }

  .page-header.with-menu .page-header-menu-list:not(:last-child) {
    margin-bottom: 48px;
  }

  .page-header-logo {
    position: absolute;
    left: 23px;
    top: 23px;
  }

  .page-header-menu-trigger {
    display: block;
    position: fixed;
    right: 23px;
    top: 23px;
    z-index: 11;
  }
}
</style>

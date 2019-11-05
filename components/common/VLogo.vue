<template>
  <component :is="componentTag" :href="logoLink" class="v-logo">
    <v-svg-icon name="endpass"></v-svg-icon>
  </component>
</template>

<script>
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";

export default {
  computed: {
    componentTag() {
      if ($nuxt.$route.name !== "landing") {
        return "a";
      }

      return "div";
    },

    logoLink() {
      if (this.componentTag !== "a") {
        return null;
      }

      return "/landing";
    }
  },

  components: {
    VSvgIcon
  }
};
</script>

<style lang="scss">
.v-logo {
  display: inline-block;
  vertical-align: middle;
  width: 35px;
  height: 45px;
  color: var(--endpass-ui-color-white);
}

a.v-logo:hover {
  color: var(--endpass-ui-color-white);
  cursor: pointer;
}
</style>

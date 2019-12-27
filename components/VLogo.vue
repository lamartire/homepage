<template>
  <nuxt-link to="/" class="v-logo">
    <v-svg-icon name="endpass"></v-svg-icon>
  </nuxt-link>
</template>

<script>
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";

export default {
  name: 'VLogo',

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

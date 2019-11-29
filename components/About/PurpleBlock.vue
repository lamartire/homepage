<template>
  <div class="purple-block">
    <div class="purple-block-content">
    <h2 class="purple-block-title">
      <slot />
    </h2>
    <div class="purple-block-buttons">
      <v-button-link>Partner with us</v-button-link>
      <v-button-link skin="ghost">Join our team</v-button-link>
    </div>

    </div>
      </div>
</template>

<script>
import VButtonLink from "~/components/common/VButtonLink";

export default {
  components: {
    VButtonLink
  }
}
</script>

<style lang="scss">
.purple-block {
  padding: 100px 0 111px;
  background-image: url(../../assets/img/backgrounds/about-join-us.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.purple-block-content {
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
}

.purple-block-title {
  margin-bottom: 59px;
  font-size: 44px;
  font-weight: bold;
  line-height: 1.09;
  color: var(--endpass-ui-color-white);
}

.purple-block-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.purple-block-buttons > *:not(:last-child) {
  margin-right: 30px;
}
</style>

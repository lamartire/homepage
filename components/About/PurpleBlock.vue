<template>
  <div class="purple-block">
    <div class="purple-block-content">
      <h2 class="purple-block-title">
        <slot />
      </h2>
      <ul class="purple-block-buttons">
        <li>
          <call-to-action skin="white">
            Partner with us
          </call-to-action>
        </li>
        <li>
          <v-button-link href="/careers" skin="ghost">
            Join our team
          </v-button-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CallToAction from "~/components/Landing/LeadForm/CallToAction.vue";
import VButtonLink from "~/components/VButtonLink";

export default {
  components: {
    CallToAction,
    VButtonLink
  }
};
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

.purple-block-buttons > li:not(:last-child) {
  margin-right: 30px;
}

@include touch {
  .purple-block-buttons {
    display: block;
    text-align: center;
  }

  .purple-block-buttons > li:not(:last-child) {
    margin-bottom: 15px;
    margin-right: 0;
  }
}
</style>

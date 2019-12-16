<template>
  <div class="pricing-card">
    <p class="pricing-card-title">
      <slot name="title"></slot>
    </p>
    <section class="pricing-card-price">
      <span class="pricing-card-amount">
        <slot name="amount"></slot>
      </span>
      <span class="pricing-card-count"> per user<br />identity verified </span>
    </section>
    <section class="pricing-card-list">
      <markered-list>
        <slot />
      </markered-list>
    </section>
    <section class="pricing-card-button-wrapper">
      <v-button-link href="#" :skin="buttonSkin" :fluid="true">
        Subscribe
      </v-button-link>
    </section>
  </div>
</template>

<script>
import MarkeredList from "~/components/MarkeredList";
import VButtonLink from "~/components/VButtonLink";

export default {
  name: "PricingCard",

  props: {
    isPrimary: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    buttonSkin() {
      if (this.isPrimary) {
        return "red";
      }

      return "primary";
    }
  },

  components: {
    MarkeredList,
    VButtonLink
  }
};
</script>

<style lang="scss" scoped>
.pricing-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px 36px 36px;
  border-radius: 6px;
  background-color: var(--endpass-ui-color-white);
  box-shadow: 0 2px 4px rgba(36, 42, 46, 0.1), 0 1px 1px rgba(36, 42, 46, 0.1);
}

.pricing-card-title {
  margin-bottom: 1px;
  font-size: 18px;
  line-height: 1.56;
  color: var(--endpass-ui-color-black);
}

.pricing-card-price {
  display: flex;
  align-items: flex-end;
  color: var(--endpass-ui-color-black);
  margin-bottom: 43px;
}

.pricing-card-amount {
  flex: 0 0 auto;
  margin-right: 12px;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.17;
  letter-spacing: -0.5px;
}

.pricing-card-count {
  flex: 0 0 auto;
  font-size: 16px;
  line-height: 1.25;
  color: #50565b;
  margin-bottom: 7px;
}

.pricing-card-list {
  margin-bottom: 93px;
}

.pricing-card-button-wrapper {
  margin-top: auto;
}
</style>

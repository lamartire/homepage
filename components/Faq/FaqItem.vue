<template>
  <div class="faq-item">
    <v-accordion-item v-bind="$attrs" v-on="$listeners">
      <slot name="title" slot="title" />
      <p class="faq-item-content">
        <slot/>
      </p>
    </v-accordion-item>
  </div>
</template>

<script>
import VAccordionItem from "@endpass/ui/kit/VAccordionItem";

export default {
  name: 'FaqItem',
  components: {
    VAccordionItem,
  }
};
</script>

<style lang="scss" scoped>

.faq-list {
  margin-top: 105px;
  background-color: var(--endpass-ui-color-white);
  border-radius: 6px;
  box-shadow: 5px 5px 16px 0 rgba(19, 23, 26, 0.12);
  overflow: hidden;
}

.faq-item-content {
  padding: 0 23px 17px;
  font-size: 16px;
  line-height: 1.5;
}
</style>

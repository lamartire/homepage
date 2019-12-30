<template>
  <div class="faq-list">
    <v-accordion v-bind="$attrs">
      <slot/>
    </v-accordion>
  </div>
</template>

<script>
import VAccordion from "@endpass/ui/kit/VAccordion";

export default {
  name: 'FaqList',
  components: {
    VAccordion,
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
</style>

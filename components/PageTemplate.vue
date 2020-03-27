<template>
  <section class="page-template">
    <section class="page-template-header">
      <page-header />
    </section>
    <section
      class="page-template-content"
      :style="{ 'min-height': contentMinHeight }"
    >
      <slot />
    </section>
    <section ref="footer" class="page-template-footer">
      <slot name="footer" />
    </section>
  </section>
</template>

<script>
import PageHeader from "./PageHeader";

export default {
  data: () => ({
    contentMinHeight: null
  }),

  mounted() {
    const footerHeight = this.$refs.footer.clientHeight;

    this.contentMinHeight = `calc(100vh - ${footerHeight}px)`;
  },

  components: {
    PageHeader
  }
};
</script>

<style lang="scss" scoped>
.page-template-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>

<style lang="scss">
.page-template-content > * {
  flex: 1 1 auto;
}
</style>

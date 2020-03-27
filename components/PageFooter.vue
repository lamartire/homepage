<template>
  <footer :class="{ 'page-footer': true, [skin]: !!skin }">
    <p class="page-footer-copyright">
      ©
      {{ currentYear }}.
      <slot name="copyright"></slot>
    </p>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",

  props: {
    skin: {
      type: String,
      default: ""
    }
  },

  data: () => ({
    currentYear: new Date().getFullYear()
  })
};
</script>

<style lang="scss" scoped>
.page-footer {
  padding: 56px 106px;
  background-image: url(../assets/img/backgrounds/footer.svg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  color: var(--endpass-ui-color-white);

  &.dull {
    background-image: none;
    color: #373d42;
  }
}

.page-footer-copyright {
  font-size: 12px;
  line-height: 1.5;
}
</style>

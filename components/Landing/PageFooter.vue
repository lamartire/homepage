<template>
  <footer class="page-footer">
    <p class="page-footer-copyright">
      ©
      {{ currentYear }}.
      <slot name="copyright"></slot>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',

  data: () => ({
    currentYear: new Date().getFullYear()
  })
}
</script>

<style lang="scss">
.page-footer {
  padding: 56px 106px;
  background-image: url(../../assets/img/backgrounds/footer.svg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  color: var(--endpass-ui-color-white);
}

.page-footer-copyright {
  font-size: 12px;
  line-height: 1.5;
}
</style>

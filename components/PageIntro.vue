<template>
  <div class="page-intro">
    <h3 class="title"><slot name="title" /></h3>
    <p class="description">
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
.page-intro {
  margin-top: 170px;
  margin-bottom: 129px;
  text-align: center;
  color: var(--endpass-ui-color-white);
  line-height: 1.17;
}

.title {
  margin-bottom: 37px;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.9px;
  color: var(--endpass-ui-color-white);
}

.description p {
  font-size: 24px;
}

.description a {
  text-decoration: underline;
}

@include touch {
  .page-intro {
    margin-top: 0;
    margin-bottom: 70px;
  }
}
</style>

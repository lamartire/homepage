<template>
  <section class="careers-page-labeled-section">
    <h4 class="careers-page-labeled-section-title">
      <slot name="title" />
    </h4>
    <section class="careers-page-labeled-section-content">
      <slot />
    </section>
  </section>
</template>

<style lang="scss">
.careers-page-labeled-section:not(:last-child) {
  margin-bottom: 71px;
}

.careers-page-labeled-section-title {
  margin-bottom: 27px;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -0.4px;
  color: var(--endpass-ui-color-primary-7);
}

@include touch {
  .careers-page-labeled-section:not(:last-child) {
    margin-bottom: 40px;
  }

  .careers-page-labeled-section-title {
    margin-bottom: 16px;
  }
}
</style>

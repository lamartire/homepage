<template>
  <a v-bind="$attrs" class="v-button">
    <slot />
  </a>
</template>

<style lang="scss">
a.v-button {
  display: inline-block;
  vertical-align: middle;
  padding: 16px 13px;
  min-width: 260px;
  font-size: 20px;
  line-height: 1.4;
  text-align: center;
  background-color: var(--endpass-ui-color-white);
  color: var(--endpass-ui-color-primary-7);
  border-radius: 6px;
}
</style>

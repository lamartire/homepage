<template>
  <a :class="{ 'v-button': true, [skin]: !!skin }">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    skin: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
a.v-button {
  display: inline-block;
  vertical-align: middle;
  padding: 16px 13px;
  min-width: 260px;
  font-size: 20px;
  line-height: 1.4;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: var(--endpass-ui-color-white);
  background-color: var(--endpass-ui-color-white);
  color: var(--endpass-ui-color-primary-7);
  border-radius: 6px;

  &.ghost {
    background-color: transparent;
    color: var(--endpass-ui-color-white);
  }
}

@include touch {
  a.v-button {
    padding: 12px 13px;
    font-size: 16px;
    font-weight: bold;
    min-width: 184px;
  }
}
</style>

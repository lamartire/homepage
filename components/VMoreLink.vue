<template>
  <a class="v-more-link" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "VMoreLink"
};
</script>

<style lang="scss">
.v-more-link {
  display: inline-flex;
  align-items: center;
}

.v-more-link:after {
  content: "→";
  margin-left: 10px;
}
</style>

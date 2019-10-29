<template>
  <a class="v-more-link" v-bind="$attrs">
    <slot></slot>
    <div class="v-more-link-icon">
      <v-svg-icon name="arrow-right" />
    </div>
  </a>
</template>

<script>
import VSvgIcon from '@endpass/ui/kit/VSvgIcon'

export default {
  name: "VMoreLink",

  components: {
    VSvgIcon
  }
};
</script>

<style lang="scss">
.v-more-link {
  display: inline-flex;
  align-items: center;
}

.v-more-link-icon {
  flex: 0 0 18px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  height: 20px;
}

.v-more-link:hover {
  color: initial;
}
</style>

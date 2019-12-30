<template>
  <li class="markered-list-item">
    <div class="markered-list-item-icon">
      <v-svg-icon name="check" />
    </div>
    <slot />
  </li>
</template>

<script>
import VSvgIcon from '@endpass/ui/kit/VSvgIcon'

export default {
  components: {
    VSvgIcon
  }
}
</script>

<style lang="scss" scoped>
.markered-list-item {
  display: flex;
  align-items: flex-start;
  font-size: 20px;
  line-height: 1.4;
  color: #373d42;
}

.markered-list-item:not(:last-child) {
	margin-bottom: 16px;
}

.markered-list-item-icon {
  flex: 0 0 auto;
  width: 17px;
  height: 17px;
  margin-right: 27px;
  margin-top: 2px;
  color: var(--endpass-ui-color-primary-7);
}
</style>

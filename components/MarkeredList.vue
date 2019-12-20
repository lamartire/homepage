<template>
  <div class="markered-list">
    <ul>
      <slot />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.markered-list li {
  font-size: 20px;
  line-height: 1.4;
  color: #373d42;
}

.markered-list li:not(:last-child) {
	margin-bottom: 16px;
}
</style>

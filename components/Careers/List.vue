<template>
  <div class="careers-page-list">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<style lang="scss">
.careers-page-list li {
  font-size: 20px;
  line-height: 1.4;
  color: #373d42;
}

.careers-page-list li:not(:last-child) {
	margin-bottom: 16px;
}
</style>

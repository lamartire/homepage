<template>
  <div :class="$style.base">
    <div :class="$style.image">
      <slot name="image"></slot>
    </div>
    <p :class="$style.text">
      <slot></slot>
    </p>
  </div>
</template>

<style lang="scss" module>
.image {
  width: 100%;
  height: 157px;
  margin-bottom: 12px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text {
  font-size: 16px;
  line-height: 1.5;
  color: #50565b;
}

@include touch {
  .base {
    text-align: center;
  }

  .image img {
    max-width: 320px;
  }
}
</style>

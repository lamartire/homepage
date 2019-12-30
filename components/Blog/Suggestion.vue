<template>
  <div class="blog-suggestion">
    <div class="blog-suggestion-image">
      <slot name="image"></slot>
    </div>
    <p class="blog-suggestion-text">
      <slot></slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.blog-suggestion-image {
  width: 100%;
  height: 157px;
  margin-bottom: 12px;
}

.blog-suggestion-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-suggestion-text {
  font-size: 16px;
  line-height: 1.5;
  color: #50565b;
}

@include touch {
  .blog-suggestion {
    text-align: center;
  }

  .blog-suggestion-image img {
    max-width: 320px;
  }
}
</style>

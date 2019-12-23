<template>
  <div class="blog-author">
    <div class="blog-author-avatar">
      <slot name="avatar"></slot>
    </div>
    <p class="blog-author-name">
      <slot name="author"></slot>
    </p>
    <time class="blog-author-date">
      <slot name="date"></slot>
    </time>
  </div>
</template>

<style lang="scss" scoped>
.blog-author-avatar {
  display: inline-block;
  vertical-align: middle;
  width: 36px;
  height: 36px;
  margin-bottom: 4px;
}

.blog-author-name {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  color: #13171a;
}

.blog-author-date {
  font-size: 16px;
  line-height: 1.5;
  color: #50565b;
}
</style>


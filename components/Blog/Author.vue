<template>
  <div :class="$style.base">
    <div :class="$style.avatar">
      <slot name="avatar"></slot>
    </div>
    <p :class="$style.name">
      <slot name="author"></slot>
    </p>
    <time :class="$style.date">
      <slot name="date"></slot>
    </time>
  </div>
</template>

<style lang="scss" module>
.base {

}

.avatar {
  display: inline-block;
  vertical-align: middle;
  width: 36px;
  height: 36px;
  margin-bottom: 4px;
}

.name {
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  color: #13171a;
}

.date {
  font-size: 16px;
  line-height: 1.5;
  color: #50565b;
}
</style>


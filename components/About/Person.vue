<template>
  <div class="person">
    <div class="person-image">
      <slot name="image" />
    </div>
    <h3 class="person-name">
      <slot name="name" />
    </h3>
    <p class="person-title">
      <slot name="title" />
    </p>
    <p class="person-description">
      <slot />
    </p>
  </div>
</template>

<style lang="scss">
.person-image img {
  margin-bottom: 12px;
  border-radius: 6px;
}

.person-name,
.person-title {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
}

.person-name {
  color: #13171a;
}

.person-title {
  margin-bottom: 20px;
  color: #868d95;
}

.person-description p {
  font-size: 16px;
  line-height: 1.5;
  color: #50565b;
}

.person-description p:not(:last-child) {
  margin-bottom: 24px;
}

@include touch {
  .person {
    padding: 30px 0;
  }

  .person-image {
    text-align: center;
  }
}
</style>

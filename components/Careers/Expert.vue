<template>
  <section class="careers-page-expert">
    <div class="careers-page-expert-image">
      <slot name="image" />
    </div>
    <div class="careers-page-expert-content">
      <h4 class="careers-page-expert-name">
        <slot name="name" />
      </h4>
      <p class="careers-page-expert-about">
        <slot />
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.careers-page-expert {
  display: flex;
  align-items: flex-start;
}

.careers-page-expert:not(:last-child) {
	margin-bottom: 40px;
}

.careers-page-expert-image {
  flex: 0 0 auto;
  width: 140px;
  height: 140px;
  margin-right: 55px;
  border-radius: 50%;
	overflow: hidden;
}

.careers-page-expert-name {
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.56;
  color: #13171a;
}

.careers-page-expert-about {
  font-size: 20px;
  line-height: 1.4;
  color: #373d42;
}
</style>

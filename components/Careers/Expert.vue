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

.careers-page-expert:first-child {
  margin-top: 50px;
}

.careers-page-expert:not(:last-child) {
  margin-bottom: 40px;
}

.careers-page-expert-image {
  flex: 0 0 auto;
  width: 140px;
  margin-right: 55px;
  overflow: hidden;
}

.careers-page-expert-image img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: contain;
}

.careers-page-expert-content {
  padding-top: 5px;
}

.careers-page-expert-name {
  margin-bottom: 11px;
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

@include touch {
  .careers-page-expert {
    display: block;
  }

  .careers-page-expert-image {
    width: 100%;
    margin-right: 0;
    margin-bottom: 25px;
    text-align: center;
  }
}
</style>

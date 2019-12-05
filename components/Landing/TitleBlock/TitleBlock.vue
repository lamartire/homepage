<template>
  <section class="title-block">
    <div class="title-block-polygons">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <welcome-part>
      <slot name="title" slot="title" />
      <slot name="subtitle" slot="subtitle" />
      <slot name="button" slot="button" />
      <slot name="link" slot="link" />
    </welcome-part>
    <features-part>
      <slot name="features-title" slot="title" />
      <slot name="features" slot="features" />
    </features-part>
  </section>
</template>

<script>
import WelcomePart from "./WelcomePart.vue";
import FeaturesPart from "./FeaturesPart.vue";

export default {
  name: "TitleBlock",

  components: {
    WelcomePart,
    FeaturesPart
  }
};
</script>

<style lang="scss">
.title-block {
  overflow: hidden;
  position: relative;
  padding: 120px 0 146px;
}

.title-block-polygons {
  overflow: hidden;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transform-origin: 0;
  transform: skewY(-30deg);
  background: linear-gradient(250.47deg, #9960e2 9.73%, #7f39db 80.97%);
}

.title-block-polygons span {
  display: block;
}

.title-block-polygons span:nth-child(1) {
  position: absolute;
  bottom: 0;
  left: 10%;
  z-index: 2;
  height: 100%;
  width: 400px;
  transform: skewX(26deg);
  background: linear-gradient(290.67deg, #8035e2 13.68%, #6003db 83.91%);
}

.title-block-polygons span:nth-child(2) {
  position: absolute;
  bottom: 300px;
  right: 0;
  z-index: 1;
  height: 300px;
  width: 70%;
  transform: skewX(26deg);
  background: linear-gradient(
    233.27deg,
    #8035e2 6.82%,
    #721fdf 36.26%,
    #6003db 79.07%
  );
  opacity: 0.75;
}

.title-block-polygons span:nth-child(3) {
  position: absolute;
  z-index: 1;
  width: 75%;
  transform: skewX(26deg);
  height: 300px;
  bottom: 0;
  right: -5%;
  z-index: 1;
  background: linear-gradient(250.47deg, #9960e2 9.73%, #7f39db 80.97%);
}

@media (max-width: 1435px) {
  .title-block-polygons {
    width: 150%;
    left: -40%;
  }
}

@include touch {
  .title-block {
    padding: 20px 0 0;
  }
}
</style>

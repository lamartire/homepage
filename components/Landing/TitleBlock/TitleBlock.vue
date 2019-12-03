<template>
  <section class="title-block">
    <div class="title-block-polygons">
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
  padding: 120px 0 152px;
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

@media (max-width: 1435px) {
  .title-block-polygons {
    width: 150%;
    left: -40%;
  }
}

@include touch {
  .title-block {
    background-position: center;
    padding-bottom: 0;
  }
}
</style>

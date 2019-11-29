<template>
  <section class="title-block">
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
  padding: 120px 0 152px;
  background-color: #f8f9fb;
  background-image: url(../../../assets/img/backgrounds/title-block.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
}

@include touch {
  .title-block {
    background-position: center;
    padding-bottom: 0;
  }
}
</style>

<template>
  <section class="title-block">
    <section class="title-block-header">
      <page-header></page-header>
    </section>
    <welcome-part></welcome-part>
    <features-part></features-part>
  </section>
</template>

<script>
import PageHeader from "../PageHeader";
import WelcomePart from "./WelcomePart.vue";
import FeaturesPart from "./FeaturesPart.vue";

export default {
  name: "TitleBlock",

  components: {
    PageHeader,
    WelcomePart,
    FeaturesPart,
  }
};
</script>

<style lang="scss">
.title-block {
  padding-bottom: 152px;
  background-color: #F8F9FB;
  background-image: url(../../../assets/img/backgrounds/title-block.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom left;
}

@include touch {
  .title-block {
    background-position: center;
    background-size: cover;
    padding-bottom: 0;
  }
}
</style>

<template>
  <div class="container features-part">
    <v-card class="features-part-card">
      <div class="columns is-variable is-4">
        <div class="column is-6 is-12-touch is-offset-1-desktop">
          <h3 class="v-page-subtitle">
            <slot name="title" />
          </h3>
        </div>
      </div>
      <ul class="columns is-variable is-4 features-part-list">
        <slot name="features" />
      </ul>
    </v-card>
  </div>
</template>

<script>
import VCard from "@endpass/ui/kit/VCard";
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";
import Feature from "~/components/Feature";

export default {
  name: "FeaturesPart",

  components: {
    VCard,
    VSvgIcon,
    Feature
  }
};
</script>

<style lang="scss">
.features-part-card {
  position: relative;
  z-index: 3;
  padding: 59px 0 93px;
}

.features-part-card:after {
  content: "";
  position: absolute;
  top: 0;
  z-index: 1;
  right: -1000px;
  display: block;
  background: #fff;
  height: 100%;
  width: 1000px;
  box-shadow: inherit;
}

.features-part-card:before {
  content: "";
  position: absolute;
  top: 0;
  z-index: 2;
  right: -5px;
  display: block;
  background: #fff;
  height: 100%;
  width: 10px;
}

.features-part-card h3 {
  margin-bottom: 68px;
}

.features-part-list {
  display: flex;
  align-items: flex-start;
}

@include touch {
  .container.features-part {
    padding: 0 !important;
  }

  .features-part-card h3 {
    margin-bottom: 40px;
  }

  .features-part .v-card.features-part-card {
    padding: 44px 23px 55px;
    border-radius: 0;
    box-shadow: none;
  }

  .features-part-list {
    flex-wrap: wrap;
  }

  .features-part-list li:not(:last-child) {
    margin-bottom: 33px;
  }

  .features-part-card:before,
  .features-part-card:after {
    display: none;
  }
}
</style>

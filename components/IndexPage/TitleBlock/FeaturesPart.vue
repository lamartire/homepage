<template>
  <div class="container features-part">
    <v-card class="features-part-card">
      <div class="columns is-variable is-4">
        <div class="column is-6 is-offset-1">
          <h3>
            How we delight you and your customers:
          </h3>
        </div>
      </div>
      <ul class="columns is-variable is-4 features-part-list">
        <li class="column is-3 is-offset-1">
          <div class="features-part-icon">
            <v-svg-icon name="feature-1"></v-svg-icon>
          </div>
          <p>
            Single click KYC verification for seamless customer onboarding
          </p>
        </li>
        <li class="column is-3">
          <div class="features-part-icon">
            <v-svg-icon name="feature-2"></v-svg-icon>
          </div>
          <p>Truly automated compliance without confusing setup</p>
        </li>
        <li class="column is-3">
          <div class="features-part-icon">
            <v-svg-icon name="feature-3"></v-svg-icon>
          </div>
          <p>Superpower your fraud detection with advanced AI</p>
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script>
import VCard from "@endpass/ui/kit/VCard";
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";

export default {
  name: "FeaturesPart",

  components: {
    VCard,
    VSvgIcon
  }
};
</script>

<style lang="scss">
.features-part-card {
  position: relative;
  z-index: 3;
  padding: 65px 0;
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
  font-size: 32px;
  line-height: 1.25;
  margin-bottom: 60px;
}

.features-part-list {
  display: flex;
  align-items: flex-start;
}

.features-part-list li p {
  font-size: 20px;
  line-height: 1.4;
}

.features-part-icon {
  width: 46px;
  height: 46px;
  margin-bottom: 30px;
}
</style>

<template>
  <div class="container features-part">
    <v-card class="features-part-card">
      <div class="columns is-variable is-4">
        <div class="column is-6 is-12-touch is-offset-1-desktop">
          <h3 class="v-page-subtitle">
            How we delight you and your customers:
          </h3>
        </div>
      </div>
      <ul class="columns is-variable is-4 features-part-list">
        <li class="column is-3 is-12-touch is-offset-1-desktop is-offset-0">
          <div class="features-part-icon">
            <v-svg-icon name="feature-1"></v-svg-icon>
          </div>
          <p>
            Single click KYC verification for seamless customer onboarding
          </p>
        </li>
        <li class="column is-3 is-12-touch">
          <div class="features-part-icon">
            <v-svg-icon name="feature-2"></v-svg-icon>
          </div>
          <p>Truly automated compliance without confusing setup</p>
        </li>
        <li class="column is-3 is-12-touch">
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

@include touch {
  .container.features-part {
    padding: 0 !important;
  }

  .features-part-card h3 {
    margin-bottom: 40px;
  }

  .features-part-list li p {
    font-size: 16px;
    line-height: 1.5;
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
    margin-bottom: 40px;
  }

  .features-part-icon {
    margin-bottom: 24px;
  }

  .features-part-card:before,
  .features-part-card:after {
    display: none;
  }
}
</style>

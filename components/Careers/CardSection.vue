<template>
  <v-card class="careers-page-card-section">
    <div class="columns is-variable is-4">
      <div class="column is-10 is-offset-1">
        <h3 class="careers-page-card-section-title"><slot name="title" /></h3>
      </div>
    </div>
    <div class="columns is-variable is-4">
      <div class="column is-offset-2 is-8">
        <section class="careers-page-card-section-content">
          <slot />
        </section>
      </div>
    </div>
  </v-card>
</template>

<script>
import VCard from "@endpass/ui/kit/VCard";

export default {
  components: {
    VCard
  }
};
</script>

<style lang="scss">
.careers-page-card-section {
  position: relative;
  z-index: 5;
  padding: 59px 0 79px;
}

.careers-page-card-section-title {
  margin-bottom: 72px;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.25;
  color: #50565b;
}

.careers-page-card-section:before {
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

.careers-page-card-section:after {
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

@include touch {
  .careers-page-card-section-title {
    margin-bottom: 60px;
  }

  .careers-page-card-section:before,
  .careers-page-card-section:after {
    display: none;
  }

  .careers-page-card-section {
    padding: 41px 20px 65px;
  }
}
</style>

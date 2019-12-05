<template>
  <v-card class="careers-page-card-centered-section">
    <div class="container">
      <div class="columns is-variable is-4">
        <div class="column is-6 is-offset-3">
          <h3 class="careers-page-card-centered-section-title">
            <slot name="title" />
          </h3>
        </div>
      </div>
      <div class="columns is-variable is-4">
        <div class="column is-offset-2 is-8">
          <section class="careers-page-card-centered-section-content">
            <slot />
          </section>
        </div>
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
.careers-page-card-centered-section {
  padding: 54px 0 137px;
}

.careers-page-card-centered-section-title {
  margin-bottom: 76px;
  font-size: 32px;
  line-height: 1.25;
  text-align: center;
  color: #50565b;
}

@include touch {
  .careers-page-card-centered-section {
    padding: 54px 0 70px;
  }

  .careers-page-card-centered-section-title {
    margin-bottom: 40px;
  }
}
</style>

<template>
  <section class="summary-block">
    <section class="container">
      <div class="columns is-variable is-4">
        <div class="column is-5 is-offset-1">
          <h3>Always stay compliant, event when you're on vacation.</h3>
          <p>
            Endpass automatically analyzes your customers’ documents and
            information to verify their identities with global databases.
          </p>
          <p>
            Our AI-powered data normalization and advanced validation logic has
            250% higher match accuracy, giving you world-class compliance with
            far less manual work.
          </p>
          <p>
            Unlike most compliance solutions that only check sanctions lists
            during registration, we continuously monitor all lists to ensure
            none of your customers are violating sanctions or anti money
            laundering laws.
          </p>
        </div>
        <div class="column is-5 is-offset-1">
          <image-card class="summary-block-image"></image-card>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ImageCard from "../ImageCard";

export default {
  name: "SummaryBlock",

  components: {
    ImageCard
  }
};
</script>

<style lang="scss">
.summary-block {
  padding-bottom: 120px;
  background-color: #f8f9fb;
  background-image: url(../../assets/img/backgrounds/summary-block.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;
}

.summary-block h3 {
  font-size: 32px;
  line-height: 1.25;
  margin-bottom: 44px;
}

.summary-block p {
  font-size: 18px;
  line-height: 1.55;
}

.summary-block p:not(:last-child) {
  margin-bottom: 28px;
}

.summary-block-image {
  height: 477px;
}
</style>

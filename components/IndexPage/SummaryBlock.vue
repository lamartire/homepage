<template>
  <section class="summary-block">
    <section class="container">
      <div class="columns is-variable is-4 summary-block-content">
        <div class="column is-5 is-12-touch is-offset-1-desktop is-offset-0">
          <h3 class="v-page-subtitle">
            Always stay compliant, even when you're on vacation.
          </h3>
          <div class="v-page-content">
            <p>
              Endpass automatically analyzes your customers’ documents and
              information to verify their identities with global databases.
            </p>
            <p>
              Our AI-powered data normalization and advanced validation logic
              has 250% higher match accuracy, giving you world-class compliance
              with far less manual work.
            </p>
            <p>
              Unlike most compliance solutions that only check sanctions lists
              during registration, we continuously monitor all lists to ensure
              none of your customers are violating sanctions or anti money
              laundering laws.
            </p>
          </div>
        </div>
        <div class="column is-5 is-12-touch is-offset-1-desktop is-offset-0">
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
  background-color: $bg-light-grey;
  background-image: url(../../assets/img/backgrounds/summary-block.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;
}

.summary-block h3 {
  margin-bottom: 44px;
}

.summary-block p:not(:last-child) {
  margin-bottom: 28px;
}

.summary-block-image {
  height: 477px;
}

@include touch {
  .summary-block {
    padding: 32px 0 60px;
    background-image: none;
  }

  .summary-block-content {
    display: flex;
    flex-wrap: wrap;
  }

  .summary-block-image {
    height: 320px;
    width: 100%;
    max-width: 340px;
    margin: 24px auto 0;
  }
}
</style>

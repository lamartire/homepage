<template>
  <section class="mission-block">
    <v-card class="container mission-block-card">
      <div class="columns is-variable is-4">
        <section class="column is-10 is-offset-1 is-centered mission-block-header">
          <div class="mission-block-icon">
            <v-svg-icon name="feature-6"></v-svg-icon>
          </div>
          <h2>Our mission against global fraud and cybercriminals</h2>
          <h3>Fraud and cybercrime are becoming more rampant than ever</h3>
        </section>
      </div>
      <section class="columns is-variable is-4 mission-block-content">
        <div class="column is-5 is-offset-1">
          <p>
            <strong
              >We believe better identity verification and more secure data
              storage practices are the key to defeating fraud.</strong
            >
          </p>
          <p>
            That’s why we built a digital identity verification platform powered
            by the most advanced Artificial Intelligence technology to help
            financial institutions and other businesses ensure their customers
            are who they say they are.
          </p>
        </div>
        <div class="column is-5">
          <p>
            As our AI reviews documents and detects instances of fraud, it
            develops “digital fingerprints” that can be used to correlate and
            eventually pinpoint fraudsters and forgers at their original source,
            stopping cybercrime in its tracks.
          </p>
          <a href="#">Join us in the fight against global fraud</a>
        </div>
      </section>
    </v-card>
  </section>
</template>

<script>
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";
import VCard from "@endpass/ui/kit/VCard";

export default {
  name: "MissionBlock",

  components: {
    VSvgIcon,
    VCard
  }
};
</script>

<style lang="scss">
.mission-block {
  padding: 105px 0 120px;
  background-color: #f8f9fb;
  background-image: url(../../assets/img/backgrounds/mission-block.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.mission-block-card {
  padding: 48px 0 70px;
}

.mission-block-header {
  text-align: center;
}

.mission-block-icon {
  width: 49px;
  height: 56px;
  margin: 0 auto 24px;
}

.mission-block-header h2 {
  font-size: 32px;
  line-height: 1.25;
  margin-bottom: 8px;
}

.mission-block-header h3 {
  font-size: 24px;
  line-height: 1.15;
  margin-bottom: 40px;
}

.mission-block-content {
  font-size: 18px;
  line-height: 1.55;
}

.mission-block-content p {
  margin-bottom: 28px;
}
</style>

<template>
  <section class="mission-block">
    <div class="container mission-block-content">
      <v-card class="mission-block-card">
        <div class="columns is-variable is-8">
          <section
            class="column is-10 is-offset-1-desktop is-12-touch is-offset-0 mission-block-header"
          >
            <div class="mission-block-icon">
              <v-svg-icon name="feature-6"></v-svg-icon>
            </div>
            <h2 class="v-page-subtitle">
              Our mission against global fraud and cybercriminals
            </h2>
            <h3 class="v-page-intro">
              Fraud and cybercrime are becoming more rampant than ever
            </h3>
          </section>
        </div>
        <section
          class="columns is-variable is-8 mission-block-content v-page-content"
        >
          <div class="column is-5 is-12-touch is-offset-1-desktop">
            <p>
              <strong
                >We believe better identity verification and more secure data
                storage practices are the key to defeating fraud.</strong
              >
            </p>
            <p>
              That’s why we built a digital identity verification platform
              powered by the most advanced Artificial Intelligence technology to
              help financial institutions and other businesses ensure their
              customers are who they say they are.
            </p>
          </div>
          <div class="column is-5 is-12-touch">
            <p>
              As our AI reviews documents and detects instances of fraud, it
              develops “digital fingerprints” that can be used to correlate and
              eventually pinpoint fraudsters and forgers at their original
              source, stopping cybercrime in its tracks.
            </p>
            <v-more-link href="#"
              >Join us in the fight against global fraud</v-more-link
            >
          </div>
        </section>
      </v-card>
    </div>
  </section>
</template>

<script>
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";
import VCard from "@endpass/ui/kit/VCard";
import VMoreLink from "~/components/common/VMoreLink";

export default {
  name: "MissionBlock",

  components: {
    VSvgIcon,
    VCard,
    VMoreLink
  }
};
</script>

<style lang="scss">
.mission-block {
  padding: 105px 0 120px;
  background-color: $bg-light-grey;
  background-image: url(../../assets/img/backgrounds/mission-block.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.mission-block .mission-block-card {
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
  margin-bottom: 8px;
}

.mission-block-header h3 {
  margin-bottom: 40px;
}

.mission-block-content p {
  margin-bottom: 28px;
}

@include touch {
  .mission-block {
    padding: 0;
    background-image: none;
  }

  .mission-block .mission-block-card {
    padding: 43px 22px 63px;
  }

  .mission-block-header {
    text-align: left;
  }

  .mission-block-icon {
    margin: 0 0 32px;
  }

  .mission-block-header h2 {
    margin-bottom: 8px;
  }

  .mission-block-header h3 {
    margin-bottom: 30px;
  }

  .mission-block-content {
    padding: 0 !important;
  }

  .mission-block-content p {
    margin-bottom: 25px;
  }
}
</style>

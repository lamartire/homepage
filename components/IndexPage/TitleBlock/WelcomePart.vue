<template>
  <div class="welcome-part">
    <div class="welcome-part-mockup"></div>
    <div class="container welcome-part-content">
      <div class="columns is-variable is-4">
        <div class="column is-7 is-12-touch">
          <h1 class="v-page-title">
            The identity verification AI that keeps financial compliance
            delightful.
          </h1>
          <p class="v-page-intro">Meet AML and KYC obligations with a single click.</p>
        </div>
      </div>
      <ul class="welcome-part-controls">
        <li class="welcome-part-controls-item">
          <v-button skin="tertiary">Request a demo</v-button>
        </li>
        <li class="welcome-part-controls-item">
          <v-more-link>
            Learn more
          </v-more-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VButton from "@endpass/ui/kit/VButton";
import VMoreLink from "~/components/VMoreLink";

export default {
  components: {
    VButton,
    VMoreLink
  }
};
</script>

<style lang="scss">
.welcome-part {
  position: relative;
  padding: 120px 0 0;
  margin-bottom: 120px;
}

.welcome-part-mockup {
  position: absolute;
  right: -10%;
  top: -80px;
  z-index: 4;
  width: 624px;
  height: 870px;
  background-image: url(../../../assets/img/tablet-mockup.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.welcome-part-content {
  color: var(--endpass-ui-color-white);
  margin-bottom: 120px;
}

.welcome-part-content h1 {
  margin-bottom: 32px;
}

.welcome-part-content p {
  margin-bottom: 48px;
}

.welcome-part-controls {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.welcome-part-controls-item {
  flex: 0 0 auto;
}

.welcome-part-controls-item:not(:last-child) {
  margin-right: 32px;
}

.welcome-part-controls-item a {
  color: var(--endpass-ui-color-white);
}

@include touch {
  .welcome-part {
    padding: 116px 0 50px;
    margin-bottom: 0;
  }

  .welcome-part-mockup {
    display: none;
  }
}
</style>

<template>
  <div class="welcome-part">
    <div class="welcome-part-mockup"></div>
    <div class="container welcome-part-content">
      <div class="columns is-variable is-4">
        <div class="column is-7">
          <h1>
            The identity verification AI that keeps financial comliance
            delightful.
          </h1>
          <p>Meet AML and KYC obligations with a single click.</p>
        </div>
      </div>
      <ul class="columns is-variable is-4 is-vcentered welcome-part-controls">
        <li class="column is-3 welcome-part-controls-item">
          <v-button skin="tertiary">Request a demo</v-button>
        </li>
        <li class="column is-2 welcome-part-controls-item">
          <a>Learn more</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VButton from "@endpass/ui/kit/VButton";

export default {
  components: {
    VButton
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
  font-size: 48px;
  line-height: 1.15;
}

.welcome-part-content p {
  margin-bottom: 48px;
}

.welcome-part-controls {
  list-style: none;
  margin: 0;
  padding: 0;
}

.welcome-part-controls-item a {
  color: var(--endpass-ui-color-white);
}

@media (min-width: 1440px) {
  .welcome-part-mockup {
    right: 0;
  }
}
</style>

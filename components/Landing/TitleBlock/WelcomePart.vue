<template>
  <div class="welcome-part">
    <div class="welcome-part-mockup"></div>
    <div class="container welcome-part-content">
      <div class="columns is-variable is-4">
        <div class="column is-7 is-12-touch">
          <h1 class="v-page-title">
            <slot name="title" />
          </h1>
          <p class="v-page-intro">
            <slot name="subtitle" />
          </p>
        </div>
      </div>
      <ul class="welcome-part-controls">
        <li class="welcome-part-controls-item">
          <call-to-action skin="white">
            Request demo
          </call-to-action>
        </li>
        <li class="welcome-part-controls-item">
          <v-more-link class="v-color-white">
            <slot name="link" />
          </v-more-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VButtonLink from "~/components/VButtonLink";
import VMoreLink from "~/components/VMoreLink";
import CallToAction from "~/components/Landing/LeadForm/CallToAction.vue";

export default {
  components: {
    CallToAction,
    VButtonLink,
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
  top: -20px;
  z-index: 4;
  width: 597px;
  height: 870px;
  background-image: url(../../../assets/img/tablet.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.welcome-part-content {
  color: var(--endpass-ui-color-white);
  margin-bottom: 120px;
}

.welcome-part-content h1 {
  margin-bottom: 37px;
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

@include desktop-only {
  .welcome-part-mockup {
    right: -20%;
  }
}

@include touch {
  .welcome-part {
    padding: 116px 0 50px;
    margin-bottom: 0;
  }

  .welcome-part-mockup {
    display: none;
  }

  .welcome-part-content h1 {
    margin-bottom: 23px;
  }

  .welcome-part-content p{
    margin-bottom: 28px;
  }
}

@include widescreen {
  .welcome-part-mockup {
    right: -5%;
  }
}

@include fullhd {
  .welcome-part-mockup {
    right: 0;
  }
}
</style>

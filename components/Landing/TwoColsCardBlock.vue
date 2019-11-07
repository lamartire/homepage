<template>
  <section class="two-cols-card-block">
    <div class="container two-cols-card-block-content">
      <v-card class="two-cols-card-block-card">
        <div class="columns is-variable is-8">
          <section
            class="column is-10 is-offset-1-desktop is-12-touch is-offset-0 two-cols-card-block-header"
          >
            <div class="two-cols-card-block-icon">
              <v-svg-icon name="feature-6"></v-svg-icon>
            </div>
            <h2 class="v-page-subtitle">
              <slot name="title"></slot>
            </h2>
            <h3 class="v-page-intro">
              <slot name="subtitle"></slot>
            </h3>
          </section>
        </div>
        <section
          class="columns is-variable is-8 two-cols-card-block-content v-page-content"
        >
          <div class="column is-5 is-12-touch is-offset-1-desktop">
            <slot name="col-1" />
          </div>
          <div class="column is-5 is-12-touch">
            <slot name="col-2" />
            <v-more-link href="#">
              <slot name="link" />
            </v-more-link>
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
  name: "TwoColsCardBlock",

  components: {
    VSvgIcon,
    VCard,
    VMoreLink
  }
};
</script>

<style lang="scss">
.two-cols-card-block {
  padding: 105px 0 120px;
  background-color: $bg-light-grey;
  background-image: url(../../assets/img/backgrounds/mission-block.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.two-cols-card-block .two-cols-card-block-card {
  padding: 48px 0 70px;
}

.two-cols-card-block-header {
  text-align: center;
}

.two-cols-card-block-icon {
  width: 49px;
  height: 56px;
  margin: 0 auto 24px;
}

.two-cols-card-block-header h2 {
  margin-bottom: 8px;
}

.two-cols-card-block-header h3 {
  margin-bottom: 40px;
}

.two-cols-card-block-content p {
  margin-bottom: 28px;
}

@include touch {
  .two-cols-card-block {
    padding: 0;
    background-image: none;
  }

  .two-cols-card-block .two-cols-card-block-card {
    padding: 43px 22px 63px;
  }

  .two-cols-card-block-header {
    text-align: left;
  }

  .two-cols-card-block-icon {
    margin: 0 0 32px;
  }

  .two-cols-card-block-header h2 {
    margin-bottom: 8px;
  }

  .two-cols-card-block-header h3 {
    margin-bottom: 30px;
  }

  .two-cols-card-block-content {
    padding: 0 !important;
  }

  .two-cols-card-block-content p {
    margin-bottom: 25px;
  }
}
</style>

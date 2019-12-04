<template>
  <section class="two-cols-features-block">
    <section class="container two-cols-features-block-content">
      <div class="columns is-variable is-4">
        <div class="column is-5 is-12-touch is-offset-1-desktop">
          <h2 class="v-page-subtitle">
            <slot name="title"></slot>
          </h2>
        </div>
      </div>
      <div class="columns is-variable is-4">
        <section
          class="column is-5 is-12-touch is-offset-1-desktop two-cols-features-block-description"
        >
          <h3 class="v-page-intro">
            <slot name="subtitle"></slot>
          </h3>
          <div class="v-page-content two-cols-features-block-content">
            <p>
              <slot name="description"></slot>
            </p>
            <ul class="two-cols-features-block-list">
              <slot name="features" />
            </ul>
          </div>
        </section>
        <div class="column is-5 is-12-touch is-offset-1-desktop">
          <slot name="image"></slot>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";
import Feature from "~/components/Feature";

export default {
  name: "TwoColsFeaturesBlock",

  components: {
    VSvgIcon,
    Feature
  }
};
</script>

<style lang="scss">
.two-cols-features-block {
  padding: 112px 0 148px;
  background-color: $bg-light-grey;
  background-image: url(../../assets/img/backgrounds/automation-block.svg);
  background-repeat: no-repeat;
  background-size: 100%;
}

.two-cols-features-block h2 {
  margin-bottom: 16px;
}

.two-cols-features-block h3 {
  margin-bottom: 30px;
}

.two-cols-features-block-content > p {
  margin-bottom: 48px;
}

.two-cols-features-block-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.two-cols-features-block-list li:not(:last-child) {
  margin-bottom: 38px;
}

.two-cols-features-block-image {
  height: 525px;
  width: 100%;
}

@include touch {
  .two-cols-features-block {
    padding: 50px 0 83px;
    background-image: none;
  }

  .two-cols-features-block-list {
    margin-bottom: 24px;
  }

  .two-cols-features-block-list li:not(:last-child) {
    margin-bottom: 32px;
  }

  .two-cols-features-block-image {
    height: 320px;
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }

  .two-cols-features-block-content > p {
    margin-bottom: 24px;
  }

  .two-cols-features-block h2 {
    margin-bottom: 16px;
  }

  .two-cols-features-block h3 {
    margin-bottom: 32px;
  }
}
</style>

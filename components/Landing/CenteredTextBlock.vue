<template>
  <section class="centered-text--block">
    <section class="container centered-text--block-content">
      <div class="columns is-variable is-4">
        <div class="column is-8 is-offset-2 is-centered">
          <h2 class="v-page-title">
            <slot name="title" />
          </h2>
          <p class="v-page-intro">
            <slot name="content"></slot>
          </p>
          <v-more-link href="#" class="v-color-white centered-text--block-link">
            <slot name="link"></slot>
          </v-more-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import VMoreLink from "~/components/VMoreLink";

export default {
  name: "ApiBlock",

  components: {
    VMoreLink
  }
};
</script>

<style lang="scss">
.centered-text--block {
  padding: 104px 0 126px;
  background-image: url(../../assets/img/backgrounds/api-block.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.centered-text--block-content {
  text-align: center;
  color: var(--endpass-ui-color-white);
}

.centered-text--block-content h2 {
  margin-bottom: 7px;
}

.centered-text--block-content p {
  margin-bottom: 42px;
}

.centered-text--block-link {
  display: flex;
  justify-content: center;
}

@include touch {
  .centered-text--block {
    padding: 31px 0 68px;
  }

  .centered-text--block-content {
    text-align: left;
  }

  .centered-text--block-content h2 {
    margin-bottom: 16px;
  }

  .centered-text--block-content p {
    margin-bottom: 16px;
  }
}
</style>

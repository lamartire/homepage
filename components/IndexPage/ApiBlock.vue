<template>
  <section class="api-block">
    <section class="container api-block-content">
      <div class="columns is-variable is-4">
        <div class="column is-8 is-offset-2 is-centered">
          <h2 class="v-page-title">
            Great security shouldn't be complicated to use or setup
          </h2>
          <p class="v-page-intro">
            Why not fortify your company’s security while making it easier for
            users to sign in or register with the option to use Endpass Single
            Sign On?
          </p>
          <div class="v-page-content">
            <v-more-link href="#"
              >Learn more about the benefits and how easy it is to install our
              API</v-more-link
            >
          </div>
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
.api-block {
  padding: 110px 0 120px;
  background-color: #f8f9fb;
  background-image: url(../../assets/img/backgrounds/api-block.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.api-block-content {
  text-align: center;
  color: var(--endpass-ui-color-white);
}

.api-block-content h2 {
  margin-bottom: 16px;
}

.api-block-content p {
  margin-bottom: 32px;
}

.api-block-content a {
  color: var(--endpass-ui-color-white);
}

@include touch {
  .api-block {
    padding: 30px 0 70px;
  }

  .api-block-content {
    text-align: left;
  }

  .api-block-content h2 {
    margin-bottom: 16px;
  }

  .api-block-content p {
    margin-bottom: 16px;
  }
}
</style>

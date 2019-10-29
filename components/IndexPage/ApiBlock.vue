<template>
  <section class="api-block">
    <section class="container api-block-content">
      <div class="columns is-variable is-4">
        <div class="column is-8 is-offset-2 is-centered">
          <h2>Great security shouldn't be complicated to use or setup</h2>
          <p>
            Why not fortify your company’s security while making it easier for
            users to sign in or register with the option to use Endpass Single
            Sign On?
          </p>
          <v-more-link href="#"
            >Learn more about the benefits and how easy it is to install our
            API</v-more-link
          >
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
  font-size: 48px;
  line-height: 1;
  margin-bottom: 16px;
  font-weight: bold;
}

.api-block-content p {
  font-size: 24px;
  line-height: 1.35;
  margin-bottom: 32px;
}

.api-block-content a {
  font-size: 18px;
  line-height: 1.55;
  color: var(--endpass-ui-color-white);
}

@include mobile {
  .api-block {
    padding: 30px 0 70px;
  }

  .api-block-content {
    text-align: left;
  }

  .api-block-content h2 {
    font-size: 24px;
    line-height: 1.3;
    margin-bottom: 16px;
  }

  .api-block-content p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 16px;
  }
}
</style>

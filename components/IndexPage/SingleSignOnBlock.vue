<template>
  <section class="single-sign-on-block">
    <div class="container">
      <div class="columns is-variable is-8">
        <section
          class="column is-10 is-12-touch is-offset-1-desktop is-offset-0 single-sign-on-block-header"
        >
          <h3 class="v-page-subtitle">
            Smart automation means smoother customer onboarding, happier
            customers, and lower costs for your business.
          </h3>
          <p class="v-page-intro">
            Unlike fraudsters, the identities of valid customers don’t change.
          </p>
        </section>
      </div>

      <section
        class="columns is-variable is-8 single-sign-on-block-content v-page-content"
      >
        <section
          class="column is-5 is-12-touch is-offset-1-desktop is-offset-0 single-sign-on-block-description"
        >
          <p>
            We know you have to verify your customers’ identities to meet KYC
            and AML requirements, but complicated registration processes could
            be costing you customers.
          </p>
          <p>
            According to Deloitte, 37% of financial customers will abandon
            signup if they feel onboarding takes too long. And over a quarter of
            customers pick financial institutions based on ease of enrollment
            and sign in.
          </p>
          <p>
            With Endpass, financial customers upload their documents for
            identity validation just once. After that, they can securely share
            their information to register or sign in with any Endpass-integrated
            institutions with a single click.
          </p>
        </section>
        <section class="column is-6 is-12-touch single-sign-on-block-lists">
          <p>This means:</p>
          <ul>
            <li>Reducing customer friction for a faster onboarding process</li>
            <li>No back and forth with your support team</li>
            <li>Cutting onboarding costs</li>
            <li>Lower abandonment during registration process</li>
            <li>Happier customers with higher NPS scores</li>
            <li>Higher verification accuracy</li>
            <li>Stronger fraud and risk protection for your institution</li>
          </ul>
          <p>
            We also offer secure Single Sign On options with Endpass.
            <v-more-link>Learn more</v-more-link>
          </p>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
import VMoreLink from "~/components/VMoreLink";

export default {
  name: "SignleSignOnBlock",

  components: {
    VMoreLink
  }
};
</script>

<style lang="scss">
.single-sign-on-block {
  background-color: var(--endpass-ui-color-white);
  padding: 80px 0 90px;
}

.single-sign-on-block-header {
  text-align: center;
  margin-bottom: 56px;
}

.single-sign-on-block-header h3 {
  margin-bottom: 16px;
}

.single-sign-on-block-description p:not(:last-child) {
  margin-bottom: 28px;
}

.single-sign-on-block-lists ul {
  list-style: none;
  columns: 2;
  column-gap: 56px;
  padding: 0;
  margin: 0 0 56px;
}

.single-sign-on-block-lists li {
  display: flex;
  margin-bottom: 14px;
}

.single-sign-on-block-lists li:before {
  content: "";
  flex: 0 0 auto;
  width: 16px;
  height: 16px;
  margin-top: 7px;
  margin-right: 8px;
  background-image: url(../../assets/img/check-list-marker.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.single-sign-on-block-lists p:first-child {
  margin-bottom: 30px;
}

@include touch {
  .single-sign-on-block {
    padding: 60px 0 70px;
  }

  .single-sign-on-block-lists ul {
    columns: initial;
  }

  .single-sign-on-block-header {
    text-align: left;
    margin-bottom: 45px;
  }

  .single-sign-on-block-lists ul {
    margin-bottom: 30px;
  }

  .single-sign-on-block-description {
    margin-bottom: 35px;
  }

  .single-sign-on-block-lists li:not(:last-child) {
    margin-bottom: 20px;
  }

  .single-sign-on-block-lists p:first-child {
    margin-bottom: 20px;
  }
}
</style>

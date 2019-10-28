<template>
  <section class="single-sign-on-block">
    <div class="container">
      <div class="columns is-variable is-4">
        <section
          class="column is-10 is-offset-1 is-centered single-sign-on-block-header"
        >
          <h3>
            Smart automation means smoother customer onboarding, happier
            customers, and lower costs for your business.
          </h3>
          <p>
            Unlike fraudsters, the identities of valid customers don’t change.
          </p>
        </section>
      </div>

      <section class="columns is-variable is-4 single-sign-on-block-content">
        <section
          class="column is-5 is-offset-1 single-sign-on-blockd-description"
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
        <section class="column is-6 single-sign-on-block-lists">
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
import VMoreLink from '~/components/VMoreLink'

export default {
  name: "SignleSignOnBlock",

  components: {
    VMoreLink,
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
  font-size: 32px;
  line-height: 1.25;
  margin-bottom: 16px;
}

.single-sign-on-block-header p {
  font-size: 24px;
  line-height: 1.15;
}

.single-sign-on-block-content {
  font-size: 18px;
  line-height: 1.55;
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
</style>

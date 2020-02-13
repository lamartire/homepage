<template>
  <theme-provider>
    <div class="landing-page">
      <title-block>
        <template slot="title">
          The identity verification AI that keeps financial compliance
          delightful.
        </template>
        <template slot="subtitle">
          Meet AML and KYC obligations with a single click.
        </template>
        <template slot="button">
          Request a demo
        </template>
        <v-more-link
          slot="link"
          class="v-color-white"
          href="https://developers.endpass.com/#introduction"
          target="_blank"
        >
          Learn more
        </v-more-link>
        <template slot="features-title">
          How we delight you & your customers:
        </template>
        <template slot="features">
          <li class="column is-3 is-12-touch is-offset-1-desktop is-offset-0">
            <feature icon="feature-1" is-big>
              Single click KYC verification for seamless customer onboarding
            </feature>
          </li>
          <li class="column is-3 is-12-touch">
            <feature icon="feature-8" is-big>
              Truly automated compliance without confusing setup
            </feature>
          </li>
          <li class="column is-3 is-12-touch">
            <feature icon="feature-7" is-big>
              Superpower your fraud detection with advanced AI
            </feature>
          </li>
        </template>
      </title-block>
      <two-cols-image-block>
        <img src="~/assets/img/compliant-image.png" slot="image" />
        <template slot="title">
          Always stay compliant, even when you're on vacation.
        </template>
        <template slot="content">
          <p>
            Endpass automatically analyzes your customers’ documents and
            information to verify their identities with global databases.
          </p>
          <p>
            Our AI-powered data normalization and advanced validation logic has
            250% higher match accuracy, giving you world-class compliance with
            far less manual work.
          </p>
          <p>
            Unlike most compliance solutions that only check sanctions lists
            during registration, we continuously monitor all lists to ensure
            none of your customers are violating sanctions or anti money
            laundering laws.
          </p>
        </template>
      </two-cols-image-block>
      <two-cols-with-list-block>
        <template slot="title">
          Smart automation means smoother customer onboarding, happier
          customers, and lower costs for your business.
        </template>
        <template slot="subtitle">
          Unlike fraudsters, the identities of valid customers don’t change.
        </template>
        <template slot="content">
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
        </template>
        <template slot="list-annotation">
          This means:</template
        >
        <template slot="list">
          <li>Reducing customer friction for a faster onboarding process</li>
          <li>Way less back and forth with your support team</li>
          <li>Cutting onboarding costs</li>
          <li>Lower abandonment during registration process</li>
          <li>Happier customers with higher NPS scores</li>
          <li>Higher verification accuracy</li>
          <li>Stronger fraud and risk protection for your institution</li>
        </template>
        <template slot="link-text">
          We also offer secure Single Sign On options with Endpass.
        </template>
        <v-more-link
          slot="link"
          href="https://develops.endpass.com"
          target="_blank"
        >
          Learn more
        </v-more-link>
      </two-cols-with-list-block>
      <two-cols-features-block>
        <img src="~/assets/img/automation-image.png" slot="image" />
        <template slot="title">
          The case for true automation in financial compliance
        </template>
        <template slot="subtitle">
          When was the last time you looked at the santions list?
        </template>
        <template slot="description">
          The data is unstructured and full of inconsistent formatting, creating
          a recipe for inaccuracy and mistakes.
        </template>
        <template slot="features">
          <li>
            <feature
              title="Advanced Data Science powered by AI"
              icon="feature-4"
              is-horizontal
            >
              While most solutions fail to account for these issues, Endpass’ AI
              both normalizes the data and applies advanced validation logic,
              giving you the highest degree of certainty that you haven’t
              accidentally missed something.
            </feature>
          </li>
          <li>
            <feature
              title="Eliminationg expensive false negatives"
              icon="feature-5"
              is-horizontal
            >
              Not only does true automation allow for a smoother customer
              onboarding experience, it also protects your business from
              potential fines or government enforcement actions that could come
              from inaccurate checks.
            </feature>
          </li>
        </template>
      </two-cols-features-block>
      <centered-text-block>
        <template slot="title">
          Great security shouldn't be complicated to use or setup
        </template>
        <template slot="content">
          Why not fortify your company’s security while making it easier for
          users to sign in or register with the option to use Endpass Single
          Sign On?
        </template>
        <v-more-link
          slot="link"
          class="v-color-white centered-text--block-link"
          href="https://developers.endpass.com/#introduction"
          target="_blank"
        >
          Learn more about the benefits and how easy it is to install our API
        </v-more-link>
      </centered-text-block>
      <two-cols-card-block>
        <template slot="title">
          Our mission against global fraud and cybercriminals:
        </template>
        <template slot="subtitle">
          Fraud and cybercrime are becoming more rampant than ever.
        </template>
        <template slot="col-1">
          <p>
            <strong
              >We believe better identity verification and more secure data
              storage practices are the key to defeating fraud.</strong
            >
          </p>
          <p>
            That’s why we built a digital identity verification platform powered
            by the most advanced Artificial Intelligence technology to help
            financial institutions and other businesses ensure their customers
            are who they say they are.
          </p>
        </template>
        <template slot="col-2">
          <p>
            As our AI reviews documents and detects instances of fraud, it
            develops “digital fingerprints” that can be used to correlate, and
            eventually pinpoint fraudsters and forgers at their original source,
            stopping cybercrime in its tracks.
          </p>
        </template>
        <v-more-link slot="link" href="/careers" target="_blank">
          Join us in the fight against global fraud
        </v-more-link>
        <template slot="link"> </template>
      </two-cols-card-block>
      <page-footer>
        <template slot="copyright">
          Endpass. All rights reserved
        </template>
      </page-footer>
    </div>
  </theme-provider>
</template>

<script>
import ThemeProvider from "@endpass/ui/kit/ThemeProvider";
import TitleBlock from "~/components/Landing/TitleBlock";
import TwoColsImageBlock from "~/components/Landing/TwoColsImageBlock";
import CenteredTextBlock from "~/components/Landing/CenteredTextBlock";
import TwoColsCardBlock from "~/components/Landing/TwoColsCardBlock";
import TwoColsWithListBlock from "~/components/Landing/TwoColsWithListBlock";
import TwoColsFeaturesBlock from "~/components/Landing/TwoColsFeaturesBlock";
import Feature from "~/components/Feature";
import PageFooter from "~/components/PageFooter";
import VMoreLink from "~/components/VMoreLink";

export default {
  name: "LandingPage",

  title: "automated identity verification",

  layout: "new",

  components: {
    ThemeProvider,
    TitleBlock,
    TwoColsImageBlock,
    CenteredTextBlock,
    TwoColsCardBlock,
    TwoColsWithListBlock,
    TwoColsFeaturesBlock,
    Feature,
    PageFooter,
    VMoreLink
  }
};
</script>

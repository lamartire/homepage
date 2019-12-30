<template>
  <section class="pricing-page">
    <div class="pricing-page-title container">
      <div class="columns is-variable is-4">
        <div class="column is-offset-2 is-8">
          <page-intro>
            <template slot="title">
              Finally, AI that makes your identity verification delightful
            </template>
            <p>Partner with Endpass to automate identity verification for
              your organization, and you'll also help fight global fraud
              and cybercrime.</p>
          </page-intro>
        </div>
      </div>
    </div>
    <div class="pricing-page-content container">
      <div class="pricing-page-cards columns is-variable is-4">
        <div class="pricing-page-price column is-offset-2 is-4">
          <pricing-card  :is-primary="true">
            <template slot="title">
              Pay as you grow
            </template>
            <template slot="amount">
              $1
            </template>
            <template slot="button">
              <v-button-link :href="pricingPageUrl" skin="red" :fluid="true" target="_blank">
                Get Started
              </v-button-link>
            </template>
            <markered-list-item>AI powered instant identity verification</markered-list-item>
            <markered-list-item>Automated KYC/AML compliance</markered-list-item>
            <markered-list-item>Continuous sanctions list monitoring</markered-list-item>
            <markered-list-item>Easy to use compliance dashboard</markered-list-item>
            <markered-list-item>OAuth standard single sign on</markered-list-item>
            <markered-list-item>Full API access</markered-list-item>
            <markered-list-item>Simple to integrate mobile SDK</markered-list-item>
            <markered-list-item>24/7 Support</markered-list-item>
          </pricing-card>
        </div>
        <div class="pricing-page-price column is-4">
          <pricing-card>
            <template slot="title">
              Enterprise
            </template>
            <template slot="amount">
              Custom
            </template>
            <template slot="button">
              <call-to-action skin="primary">
                Contact Us
              </call-to-action>
            </template>

            <markered-list-item><strong>Everything in the Pay as You Grow Plan</strong></markered-list-item>
            <markered-list-item>Corporate identity provider integration</markered-list-item>
            <markered-list-item>Full audit log</markered-list-item>
            <markered-list-item>Custom integrations</markered-list-item>
            <markered-list-item>Granular verification rules</markered-list-item>
            <markered-list-item>Real-time fraud alerts</markered-list-item>
            <markered-list-item>Uptime Guarantee SLA</markered-list-item>
            <markered-list-item>Personal success manager</markered-list-item>
          </pricing-card>
        </div>
      </div>
      <section class="pricing-page-faq container">
        <faq-list size="large">
          <faq-item v-for="f in faqs" :key="f._id">
            <template slot="title" >{{ f.title }} </template>
            <template> {{ f.description }} </template>
          </faq-item>
        </faq-list>
      </section>
    </div>
    <page-footer>
      <template slot="copyright">
        Endpass. All rights reserved
      </template>
    </page-footer>
  </section>
</template>

<script>
import FaqList from "~/components/Faq/FaqList.vue";
import FaqItem from "~/components/Faq/FaqItem.vue";
import VButtonLink from "~/components/VButtonLink";
import PageIntro from "~/components/PageIntro";
import PageFooter from "~/components/PageFooter";
import MarkeredListItem from "~/components/MarkeredListItem";
import PricingCard from "~/components/Pricing/PricingCard";
import CallToAction from "~/components/Landing/LeadForm/CallToAction.vue";

import cockpit from '~/plugins/cockpit.js';

export default {
  head() {
    return {
      title: "pricing"
    };
  },
  layout: "new",
  components: {
    FaqList,
    FaqItem,
    VButtonLink,
    CallToAction,
    PageFooter,
    PageIntro,
    MarkeredListItem,
    PricingCard
  },
  async asyncData () {
    let faqs = await cockpit.getCollection("faqs", {
      filter: { published: true, page: 'pricing' },
      sort: {number:1},
    });
    return { faqs }
  },
  computed: {
    pricingPageUrl() {
      return `${process.env.VAULT_URL}/#/profile/payment`
    }
  },
};
</script>

<style lang="scss" scoped>
.pricing-page {
  background-color: #f2f4f8;
  background-image: url(~assets/bg/desktop/header.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
}

.pricing-page-content {
  padding-bottom: 286px;
}

.pricing-page-cards {
  align-items: stretch;
}

@include touch {
  .pricing-page {
    background-image: none;
  }

  .pricing-page-title {
    padding-top: 120px;
    padding-bottom: 70px;
    margin-bottom: 70px;
    background-image: url(~assets/bg/api-block.svg);
    background-size: cover;
  }

  .pricing-page-price:not(:last-child) {
    margin-bottom: 32px;
  }

  .pricing-page-content {
    padding-bottom: 100px;
  }
}
</style>

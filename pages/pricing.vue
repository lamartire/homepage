<template>
  <section class="pricing-page">
    <div class="pricing-page-title container">
      <div class="columns is-variable is-4">
        <div class="column is-offset-2 is-8">
          <page-intro>
            <template slot="title">
              The right price for you,<br />whoever you are
            </template>
            <p>
              Whether you’re a freelancer or need Sketch for a whole team our
              pricing just makes sense. Renewing your license? We offer a
              discount for returning customers too.
            </p>
          </page-intro>
        </div>
      </div>
    </div>
    <div class="pricing-page-content container">
      <div class="pricing-page-cards columns is-variable is-4">
        <div class="pricing-page-price column is-offset-2 is-4">
          <pricing-card>
            <template slot="title">
              Startup
            </template>
            <template slot="amount">
              $80
            </template>
            <markered-list-item>Auto update mode</markered-list-item>
            <markered-list-item>Online operator 24/7</markered-list-item>
            <markered-list-item>International posting</markered-list-item>
            <markered-list-item>Unique newsletters</markered-list-item>
            <markered-list-item>Someting else</markered-list-item>
          </pricing-card>
        </div>
        <div class="pricing-page-price column is-4">
          <pricing-card :is-primary="true">
            <template slot="title">
              Pro
            </template>
            <template slot="amount">
              $298
            </template>
            <markered-list-item>Auto update mode</markered-list-item>
            <markered-list-item>Online operator 24/7</markered-list-item>
            <markered-list-item>International posting</markered-list-item>
            <markered-list-item>Unique newsletters</markered-list-item>
            <markered-list-item>Someting else</markered-list-item>
          </pricing-card>
        </div>
      </div>
      <section class="pricing-page-faq container">
        <v-accordion size="large">
          <v-accordion-item>
            <tempate slot="title"
              >How many times do i need to pay rep month?</tempate
            >
            <p class="pricing-page-faq-content">
              Don't worry about choosing the right gas price. Simply choose a
              priority level for your transaction and the wallet's prediction
              algorithms will select the optimal gas price. If a transaction
              does get stuck, you can resend it with a higher fee or cancel it
              in one click.
            </p>
          </v-accordion-item>
          <v-accordion-item>
            <tempate slot="title"
              >Where is repost button and how to delete account?</tempate
            >
            <p class="pricing-page-faq-content">
              Don't worry about choosing the right gas price. Simply choose a
              priority level for your transaction and the wallet's prediction
              algorithms will select the optimal gas price. If a transaction
              does get stuck, you can resend it with a higher fee or cancel it
              in one click.
            </p>
          </v-accordion-item>
          <v-accordion-item>
            <tempate slot="title"
              >The navigation design should communicate?</tempate
            >
            <p class="pricing-page-faq-content">
              Don't worry about choosing the right gas price. Simply choose a
              priority level for your transaction and the wallet's prediction
              algorithms will select the optimal gas price. If a transaction
              does get stuck, you can resend it with a higher fee or cancel it
              in one click.
            </p>
          </v-accordion-item>
          <v-accordion-item>
            <tempate slot="title">How to change password? </tempate>
            <p class="pricing-page-faq-content">
              Don't worry about choosing the right gas price. Simply choose a
              priority level for your transaction and the wallet's prediction
              algorithms will select the optimal gas price. If a transaction
              does get stuck, you can resend it with a higher fee or cancel it
              in one click.
            </p>
          </v-accordion-item>
        </v-accordion>
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
import VAccordion from "@endpass/ui/kit/VAccordion";
import VAccordionItem from "@endpass/ui/kit/VAccordionItem";
import PageIntro from "~/components/PageIntro";
import PageFooter from "~/components/PageFooter";
import MarkeredListItem from "~/components/MarkeredListItem";
import PricingCard from "~/components/Pricing/PricingCard";

export default {
  head() {
    return {
      title: "pricing"
    };
  },

  layout: "new",

  components: {
    VAccordion,
    VAccordionItem,
    PageFooter,
    PageIntro,
    MarkeredListItem,
    PricingCard
  }
};
</script>

<style lang="scss" scoped>
.pricing-page {
  background-color: #f2f4f8;
  background-image: url(../assets/bg/desktop/header.svg);
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

.pricing-page-faq {
  margin-top: 105px;
  background-color: var(--endpass-ui-color-white);
  border-radius: 6px;
  box-shadow: 5px 5px 16px 0 rgba(19, 23, 26, 0.12);
  overflow: hidden;
}

.pricing-page-faq-content {
  padding: 0 23px 17px;
  font-size: 16px;
  line-height: 1.5;
}

@include touch {
  .pricing-page {
    background-image: none;
  }

  .pricing-page-title {
    padding-top: 120px;
    padding-bottom: 70px;
    margin-bottom: 70px;
    background-image: url(../assets/bg/api-block.svg);
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

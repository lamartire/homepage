<template>
  <div class="about-page">
    <div class="about-page-content">
      <two-cols-block class="about-page-intro">
        <div slot="left">
          <h2 class="about-page-title big">About Endpass</h2>
        </div>
        <div slot="right" class="about-page-intro-content">
          <p><strong>How Endpass Was Born</strong></p>
          <p>
            Endpass CEO Heather R Morgan was inspired to create a better
            solution for identity verification after she experienced the clunky
            and confusing processes being used by cryptocurrency exchanges and
            online banks.
          </p>
          <p>
            Not only did she feel it hurt the customer experience, she worried
            that current identity verification methods were inaccurate and
            costly for financial institutions.
          </p>
          <p>
            Read Heather’s blog post to hear the full story and learn how
            automating financial compliance with Artificial Intelligence can
            both delight customers and prevent financial crime and identity
            theft:
          </p>
        </div>
      </two-cols-block>
      <two-cols-block class="about-page-founders">
        <div slot="left">
          <div class="about-page-relative-content">
            <h2 class="about-page-title">
              <strong>About the Endpass founders</strong>
            </h2>
            <p>
              Both founders are serial entrepreneurs, investors in high growth
              B2B software companies, and industry experts in multiple fields,
              as they have an appetite for growth and solving complex problems.
            </p>
          </div>
        </div>
        <div slot="right">
          <div class="about-page-relative-content">
            <div class="columns is-variable is-4">
              <div class="column is-6">
                <Person>
                  <img src="../assets/img/Heather.jpg" alt="" slot="image" />
                  <p slot="name">Heather R Morgan</p>
                  <p slot="title">CEO</p>
                  <template>
                    <p>
                      is a former economist, writer for both Forbes and Inc
                      magazine, top B2B sales and marketing expert, and even
                      raps. Before starting Endpass, she was the solo-founder of
                      profitable startup, SalesFolk. Under her leadership,
                      SalesFolk helped more than 830 companies optimize their
                      sales and marketing email campaigns, and pioneered many of
                      the standards and best practices for modern inside sales.
                    </p>
                    <p>
                      During her time as an economist, Heather specialized in
                      game theory and imperfect information, investigating
                      corruption and black markets in emerging markets.
                    </p>
                  </template>
                </Person>
              </div>
              <div class="column is-6">
                <Person>
                  <img src="../assets/img/Ilya.jpg" alt="" slot="image" />
                  <p slot="name">Dutch (Ilya) Lichtenstein</p>
                  <p slot="title">CTO</p>
                  <p>
                    is a security expert and technology enthusiast who is
                    obsessed with automation, who has been reverse engineering
                    hardware and writing code since age 9. Prior to Endpass, he
                    was the CEO of Mixrank, a Y Combinator startup backed by
                    investors such as Mark Cuban and Data Collective (DCVC).
                    Mixrank was one of the earliest sales automation tools of
                    its kind, acting as a powerful customer discovery platform
                    for sales teams.
                  </p>
                </Person>
              </div>
            </div>
          </div>
        </div>
      </two-cols-block>
      <div class="about-page-mission">
        <two-cols-block class="about-page-mission-content">
          <div slot="left">
            <div class="about-page-relative-content">
              <h2 class="about-page-title">
                Our Mission: <br />
                <strong>Fighting Global Fraud & Cybercrime</strong>
              </h2>
            </div>
          </div>
          <div slot="right" class="about-page-mission-text">
            <div class="about-page-relative-content">
              <p>
                <strong>
                  Technology is constantly advancing life quality<br />
                  and business efficiency.
                </strong>
              </p>
              <p>
                However, identity theft and other cybercrime are more rampant
                than the stagecoach and train robberies of the 1800’s.
                Unfortunately, government and its borders are not equipped to
                protect citizens from malicious actors around the world.
              </p>
              <p>
                Just as entrepreneurs have always risen to solve problems that
                governments and large organizations cannot, Endpass aims to make
                a dent in cybercrime and money laundering with Artificial
                Intelligence.
              </p>
              <p>
                We believe better identity verification methods and security
                protocols are the answer to defeating fraud and other identity
                theft.
              </p>
              <p>
                As the world becomes increasingly more digital, identity theft
                will only become a bigger global crisis.
              </p>
              <p>
                We’re building better automated financial compliance tools to
                help banks and cryptocurrency exchanges to more accurately and
                efficiently validate of identities. This means a seamless
                onboarding experience for legitimate customers doing KYC and
                AML, and stopping fraudsters and terrorists from slipping
                through the cracks.
              </p>
              <p>But this is just the start.</p>
              <p>
                Ultimately our AI will be able to develop
                <strong>“digital fingerprints”</strong> that correlate
                fraudulent documents and accounts to the original source, making
                a dent in global black markets. Not only can this be used by
                financial institutions, but by law enforcement and governments,
                as well as any organization that needs to validate the identity
                of its customers, vendors, and employees.
              </p>
            </div>
          </div>
        </two-cols-block>
      </div>
    </div>
    <div class="about-page-relative-content">
      <purple-block>
        Join us in the fight against global fraud
      </purple-block>
    </div>
    <page-footer skin="dull">
      <template slot="copyright">
        Endpass. All rights reserved
      </template>
    </page-footer>
  </div>
</template>

<script>
import TwoColsBlock from "~/components/About/TwoColsBlock";
import PurpleBlock from "~/components/About/PurpleBlock";
import Person from "~/components/About/Person";
import PageFooter from "~/components/PageFooter";

export default {
  name: "AboutPage",

  head() {
    return {
      title: "About"
    };
  },

  layout: "new",

  components: {
    TwoColsBlock,
    Person,
    PurpleBlock,
    PageFooter
  }
};
</script>

<style lang="scss">
.about-page {
  background-color: #f2f4f8;
  background-image: url(../assets/bg/desktop/header.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
}

.about-page-content {
  padding-top: 170px;
}

.about-page-title {
  font-size: 32px;
  line-height: 1.25;

  &.big {
    font-size: 48px;
    font-weight: 500;
    color: var(--endpass-ui-color-white);
  }
}

.about-page-title:not(:only-child) {
  margin-bottom: 33px;
}

.about-page-intro {
  margin-bottom: 228px;
}

.about-page-intro-content {
  padding-top: 106px;
  line-height: 1.56;
}

.about-page-intro p,
.about-page-intro strong {
  color: var(--endpass-ui-color-white);
}

.about-page-intro p:not(:last-child) {
  margin-bottom: 30px;
}

.about-page-founders {
  position: relative;
  padding-bottom: 210px;
}

.about-page-founders:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  height: 60%;
  width: 250px;
  bottom: 50px;
  left: 0;
  transform-origin: 0;
  transform: skewY(-33deg);
}

.about-page-founders:after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  height: 30%;
  width: 250px;
  top: -4%;
  right: 0;
  transform-origin: 0;
  transform: skewY(-33deg);
}

.about-page-mission {
  position: relative;
  padding-bottom: 221px;
}

.about-page-mission:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 2;
  bottom: 10%;
  left: 0;
  width: 25%;
  background: #7f39db;
  height: 50%;
  transform-origin: 0;
  transform: skewY(-33deg);
}

.about-page-mission:after {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  bottom: -20%;
  right: 0;
  width: 80%;
  background: #fff;
  height: 60%;
  transform-origin: 0;
  transform: skewY(-33deg);
}

.about-page-mission-text {
  font-size: 18px;
  line-height: 1.56;
}

.about-page-mission-text p:not(:last-child) {
  margin-bottom: 30px;
}

.about-page-relative-content {
  position: relative;
  z-index: 5;
}

@media (min-width: 1600px) {
  .about-page {
    background-image: url(../assets/bg/widescreen/header.svg);
    background-size: initial;
    background-position: top right;
  }
}

@include touch {
  .about-page {
    background: none;
  }

  .about-page-content {
    padding-top: 0;
  }

  .about-page-intro {
    padding-top: 110px;
    padding-bottom: 70px;
    margin-bottom: 70px;
    background-image: url(../assets/bg/api-block.svg);
    background-size: cover;
  }

  .about-page-intro-content {
    padding-top: 30px;
  }

  .about-page-founders {
    position: relative;
    padding-bottom: 140px;
  }

  .about-page-mission {
    position: relative;
    padding-bottom: 140px;
  }

  .about-page-mission:after,
  .about-page-mission:before,
  .about-page-founders:after,
  .about-page-founders:before {
    display: none;
  }
}
</style>

<template>
  <page-template>
    <section class="careers-page">
      <div class="container">
        <div class="columns is-variable is-4">
          <div class="column is-offset-2 is-8">
            <page-intro>
              <template slot="title">
                Fraudsters hate us. Banks thank us. Their customers love us
              </template>
              <p>
                Sound cool?
                <a class="v-color-white" href="#open-positions">
                  Why don’t you join us?
                </a>
              </p>
            </page-intro>
          </div>
        </div>
      </div>
      <div class="careers-page-perks">
        <div class="container">
          <card-section>
            <template slot="title">
              Some of the perks of working at Endpass:
            </template>
            <template>
              <labeled-section>
                <template slot="title">
                  Working remotely
                </template>
                <ul>
                  <markered-list-item>No commute!</markered-list-item>
                  <markered-list-item>
                    We get you — wearing a suit sucks. Come to work in your<br />
                    pajamas or a superhero costume; we don’t care
                  </markered-list-item>
                  <markered-list-item>
                    Want to work from a beach or cute cafe in Europe or Asia?<br />
                    As long as you have wifi and get shit done, we don’t care<br />
                    where you work from.
                  </markered-list-item>
                  <markered-list-item>
                    Spend more time with family — or don’t — we won’t tell them.
                  </markered-list-item>
                </ul>
              </labeled-section>
              <labeled-section>
                <template slot="title">
                  Startup culture, without the bro’s
                </template>
                <ul>
                  <markered-list-item>
                    Get the opportunity to work in a fast-paced startup that<br />
                    cares about personal growth and be early to join a team<br />
                    that’s on a path to becoming a billion dollar company.
                  </markered-list-item>
                  <markered-list-item>
                    Learn more than ever, faster than ever. Work in a place
                    that<br />
                    fosters high-growth of all kinds.
                  </markered-list-item>
                </ul>
              </labeled-section>
              <labeled-section>
                <template slot="title">
                  Learn from experts
                </template>
                <expert>
                  <img src="~/assets/img/Heather.jpg" alt="" slot="image" />
                  <template slot="name"
                    >Heather R Morgan</template
                  >
                  <template>
                    Learn sales and marketing best practices from the person who
                    developed many of the industry best practices, and continues
                    to pursue scientifically sound experiments (in persuasion)
                    to develop cutting edge strategies to stay ahead of the
                    competition and make algorithms favor you.
                  </template>
                </expert>
                <expert>
                  <img src="~/assets/img/Ilya.jpg" alt="" slot="image" />
                  <template slot="name"
                    >Dutch (Ilya) Lichtenstein</template
                  >
                  <template>
                    He’s been reverse engineering hardware and writing code
                    since age 9 and he pioneered many of the technology concepts
                    behind sales automation and growth marketing starting in
                    2011.
                  </template>
                </expert>
              </labeled-section>
            </template>
          </card-section>
        </div>
      </div>
      <div class="careers-page-culture">
        <two-cols-block>
          <h2 class="careers-page-section-title" slot="left">
            More on our team culture:
          </h2>
          <ul slot="right">
            <markered-list-item>
              We celebrate resourcefulness, creativity, and having deep empathy.
            </markered-list-item>
            <markered-list-item>
              We’re passionate about building technology that solves real
              problems and <strong>delights</strong> users.
            </markered-list-item>
            <markered-list-item>
              We believe in meritocracy and have no patience for office
              politics.
            </markered-list-item>
            <markered-list-item>
              We value new ideas and diverse thinking, but we’re obsessed with
              execution and thinking of new ways to increase efficiency and
              productivity.
            </markered-list-item>
            <markered-list-item>
              Endpass has a fully distributed team, currently based in the
              United States, Europe, and Asia. (This means you can work
              remotely, from anywhere, as long as you have good wifi.)
            </markered-list-item>
          </ul>
        </two-cols-block>
      </div>
      <div id="open-positions" class="careers-page-table">
        <card-centered-section>
          <template slot="title">
            Here are some of our current openings:
          </template>
          <!--<v-table>
          <v-table-body>
            <v-table-row>
              <v-table-cell class="careers-page-cell">
                Full Stack Developer
              </v-table-cell>
              <v-table-cell class="careers-page-cell careers-page-location-cell"
                >Everywhere</v-table-cell
              >
              <v-table-cell class="careers-page-cell careers-page-apply-cell"
                ><a href="#">Apply</a></v-table-cell
              >
            </v-table-row>
            <v-table-row>
              <v-table-cell class="careers-page-cell"
                >JavaScript Performance Engineer</v-table-cell
              >
              <v-table-cell class="careers-page-cell careers-page-location-cell"
                >New York</v-table-cell
              >
              <v-table-cell class="careers-page-cell careers-page-apply-cell"
                ><a href="#">Apply</a></v-table-cell
              >
            </v-table-row>
            <v-table-row>
              <v-table-cell class="careers-page-cell"
                >Security Engineer</v-table-cell
              >
              <v-table-cell class="careers-page-cell careers-page-location-cell"
                >New York</v-table-cell
              >
              <v-table-cell class="careers-page-cell careers-page-apply-cell"
                ><a href="#">Apply</a></v-table-cell
              >
            </v-table-row>
          </v-table-body>
        </v-table>-->
          <div class="careers-widget">
            <div id="BrzyHr_app"></div>
          </div>
        </card-centered-section>
      </div>
    </section>

    <page-footer slot="footer">
      <template slot="copyright">
        Endpass. All rights reserved
      </template>
    </page-footer>
  </page-template>
</template>

<script>
import TwoColsBlock from "~/components/About/TwoColsBlock";
import PageIntro from "~/components/PageIntro";
import PageFooter from "~/components/PageFooter";
import PageTemplate from "~/components/PageTemplate";
import CardSection from "~/components/Careers/CardSection";
import CardCenteredSection from "~/components/Careers/CardCenteredSecion";
import LabeledSection from "~/components/Careers/LabeledSection";
import MarkeredListItem from "~/components/MarkeredListItem";
import Expert from "~/components/Careers/Expert";

export default {
  head() {
    return {
      title: "careers",
      script: [
        {
          src: "https://endpass.breezy.hr/embed/js?link_external=true"
        }
      ]
    };
  },

  layout: "new",

  methods: {
    loadBreezyHr() {
      return new Promise(resolve => {
        const handler = () =>
          setTimeout(() => {
            if (!global._BrzyHr) return handler();

            return resolve(global._BrzyHr);
          }, 1000);

        handler();
      });
    }
  },

  async mounted() {
    const { load } = await this.loadBreezyHr();

    load();
  },

  components: {
    TwoColsBlock,
    PageIntro,
    PageFooter,
    PageTemplate,
    CardSection,
    CardCenteredSection,
    LabeledSection,
    MarkeredListItem,
    Expert
  }
};
</script>

<style lang="scss">
.careers-page {
  background-color: #f2f4f8;
  background-image: url(~assets/bg/desktop/header.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
}

.careers-page-perks {
  position: relative;
  margin-bottom: 135px;
}

.careers-page-perks:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  bottom: 10%;
  left: 0;
  width: 35%;
  background: #7f39db;
  height: 35%;
  transform-origin: 0;
  transform: skewY(-33deg);
}

.careers-page-table {
  margin-bottom: 160px;
}

.careers-page-section-title {
  font-size: 32px;
  line-height: 1.25;
}

.careers-page-cell {
  font-size: 18px !important;
}

.careers-page-location-cell {
  color: #697077 !important;
}

.careers-page-apply-cell {
  text-align: right !important;
}

.careers-page-culture {
  margin-bottom: 150px;
}

@include touch {
  .careers-page {
    padding-top: 0;
    background-image: none;
  }

  .careers-page-title {
    padding-top: 120px;
    padding-bottom: 70px;
    margin-bottom: 70px;
    background-image: url(~assets/bg/api-block.svg);
    background-size: cover;
  }

  .careers-page-perks:before {
    display: none;
  }

  .careers-page-perks {
    margin-bottom: 70px;
  }

  .careers-page-section-title {
    margin-bottom: 40px;
  }

  .careers-page-culture {
    margin-bottom: 70px;
  }
}
</style>

<template>
  <section class="careers-page">
    <div class="container">
      <div class="columns is-variable is-4">
        <div class="column is-offset-2 is-8">
          <section class="careers-page-title">
            <h3>Fraudsters hate us. Banks thank us. Their customers love us</h3>
            <p>
              Sound cool?
              <a class="v-color-white" href="#">Why don’t you join us?</a>
            </p>
          </section>
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
              <list>
                <list-item>No commute!</list-item>
                <list-item>
                  We get you — wearing a suit sucks. Come to work in your
                  pajamas or a superhero costume; we don’t care
                </list-item>
                <list-item>
                  Want to work from a beach or cute cafe in Europe or Asia? As
                  long as you have wifi and get shit done, we don’t care where
                  you work from.
                </list-item>
                <list-item>
                  Spend more time with family — or don’t — we won’t tell them.
                </list-item>
              </list>
            </labeled-section>
            <labeled-section>
              <template slot="title">
                Startup culture, without the bro’s
              </template>
              <list>
                <list-item>
                  Get the opportunity to work in a fast-paced startup that cares
                  about personal growth and be early to join a team that’s on a
                  path to becoming a billion dollar company.
                </list-item>
                <list-item>
                  Learn more than ever, faster than ever. Work in a place that
                  fosters high-growth of all kinds.
                </list-item>
              </list>
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
                  to pursue scientifically sound experiments (in persuasion) to
                  develop cutting edge strategies to stay ahead of the
                  competition and make algorithms favor you.
                </template>
              </expert>
              <expert>
                <img src="~/assets/img/Ilya.jpg" alt="" slot="image" />
                <template slot="name"
                  >Dutch (Ilya) Lichtenstein</template
                >
                <template>
                  He’s been doing [xyz] since [age y] and he pioneered many of
                  the technology concepts behind sales automation and growth
                  marketing [starting in 2011].
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
        <list slot="right">
          <list-item>
            We celebrate resourcefulness, creativity, and having deep empathy.
          </list-item>
          <list-item>
            We’re passionate about building technology that solves real problems
            and&nbsp;<strong>delights</strong>&nbsp;users.
          </list-item>
          <list-item>
            We believe in meritocracy and have no patience for office politics.
          </list-item>
          <list-item>
            We value new ideas and diverse thinking, but we’re obsessed with
            execution and thinking of new ways to increase efficiency and
            productivity.
          </list-item>
          <list-item>
            Endpass has a fully distributed team, currently based in the United
            States, Europe, and Asia. (This means you can work remotely, from
            anywhere, as long as you have good wifi.)
          </list-item>
        </list>
      </two-cols-block>
    </div>
    <div class="careers-page-table">
      <card-centered-section>
        <template slot="title">
          Here are some of our current openings:
        </template>
        <v-table>
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
        </v-table>
      </card-centered-section>
    </div>
    <page-footer>
      <template slot="copyright">
        Endpass. All rights reserved
      </template>
    </page-footer>
  </section>
</template>

<script>
import VTable from "@endpass/ui/kit/VTable";
import VTableRow from "@endpass/ui/kit/VTableRow";
import VTableCell from "@endpass/ui/kit/VTableCell";
import VTableBody from "@endpass/ui/kit/VTableBody";
import TwoColsBlock from "~/components/About/TwoColsBlock";
import PageFooter from "~/components/PageFooter";
import CardSection from "~/components/Careers/CardSection";
import CardCenteredSection from "~/components/Careers/CardCenteredSecion";
import LabeledSection from "~/components/Careers/LabeledSection";
import List from "~/components/Careers/List";
import ListItem from "~/components/Careers/ListItem";
import Expert from "~/components/Careers/Expert";

export default {
  head() {
    return {
      title: "careers"
    };
  },

  layout: "new",

  components: {
    TwoColsBlock,
    VTable,
    VTableRow,
    VTableCell,
    VTableBody,
    PageFooter,
    CardSection,
    CardCenteredSection,
    LabeledSection,
    List,
    ListItem,
    Expert
  }
};
</script>

<style lang="scss">
.careers-page {
  padding-top: 150px;
  background-color: #f2f4f8;
  background-image: url(../assets/bg/desktop/header.svg);
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

.careers-page-title {
  margin-bottom: 135px;
  text-align: center;
  color: var(--endpass-ui-color-white);
  line-height: 1.17;
}

.careers-page-title h3 {
  margin-bottom: 35px;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -0.9px;
}

.careers-page-title p {
  font-size: 24px;
}

.careers-page-title a {
  text-decoration: underline;
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
</style>

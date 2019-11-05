<template>
  <div class="landing">
    <title-block />
    <summary-block />
    <single-sign-on-block />
    <automation-block />
    <api-block />
    <mission-block />
  </div>
</template>

<script>
import TitleBlock from "~/components/Landing/TitleBlock";
import SummaryBlock from "~/components/Landing/SummaryBlock";
import ApiBlock from "~/components/Landing/ApiBlock";
import MissionBlock from "~/components/Landing/MissionBlock";
import SingleSignOnBlock from "~/components/Landing/SingleSignOnBlock";
import AutomationBlock from "~/components/Landing/AutomationBlock";

export default {
  name: "LandingPage",

  layout: 'new',

  components: {
    TitleBlock,
    SummaryBlock,
    ApiBlock,
    MissionBlock,
    SingleSignOnBlock,
    AutomationBlock
  }
};
</script>

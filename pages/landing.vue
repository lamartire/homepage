<template>
  <div>
    <title-block />
    <summary-block />
    <single-sign-on-block />
    <automation-block />
    <api-block />
    <mission-block />
  </div>
</template>

<script>
import TitleBlock from "~/components/IndexPage/TitleBlock";
import SummaryBlock from "~/components/IndexPage/SummaryBlock";
import ApiBlock from "~/components/IndexPage/ApiBlock.vue";
import MissionBlock from "~/components/IndexPage/MissionBlock.vue";
import SingleSignOnBlock from "~/components/IndexPage/SingleSignOnBlock.vue";
import AutomationBlock from "~/components/IndexPage/AutomationBlock.vue";

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

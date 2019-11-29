<template>
  <theme-provider>
    <page-header />
    <nuxt />
  </theme-provider>
</template>

<script>
import ThemeProvider from "@endpass/ui/kit/ThemeProvider";
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    ThemeProvider,
    PageHeader,
  }
};
</script>

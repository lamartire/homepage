<template>
  <div class="default-layout">
    <theme-provider>
      <page-header />
      <nuxt />
    </theme-provider>
  </div>
</template>

<script>
import ThemeProvider from "@endpass/ui/kit/ThemeProvider";
import PageHeader from "~/components/PageHeader";

export default {
  components: {
    ThemeProvider,
    PageHeader
  }
};
</script>


<template>
  <div class="default-layout">
    <theme-provider>
      <nuxt />
    </theme-provider>
  </div>
</template>

<script>
import ThemeProvider from "@endpass/ui/kit/ThemeProvider";

export default {
  components: {
    ThemeProvider
  }
};
</script>

<template>
  <v-card class="image-card">
    <img v-bind="$attrs" />
  </v-card>
</template>

<script>
import VCard from "@endpass/ui/kit/VCard";

export default {
  name: "ImageCard",

  components: {
    VCard
  }
};
</script>

<style lang="scss">
.image-card {
  height: 100%;
  width:  100%;
  object-fit: contain;
}
</style>

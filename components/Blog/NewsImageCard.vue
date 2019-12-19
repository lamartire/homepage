<template>
  <v-card :class="$style.base" :style="{ 'background-image': `url(${image})` }">
    <a :class="$style.link" :href="href" />
    <p :class="$style.author">
      <slot name="author" />
    </p>
    <h3 :class="$style.title">
      <slot name="title" />
    </h3>
    <p :class="$style.intro">
      <slot />
    </p>
  </v-card>
</template>

<script>
import VCard from "@endpass/ui/kit/VCard";

export default {
  props: {
    href: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    }
  },

  components: {
    VCard
  }
};
</script>

<style lang="scss" module>
.base {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 36px 32px;
  color: var(--endpass-ui-color-white);
  background-size: cover;
  background-position: center;
}

.autor {
  margin-bottom: 11px;
  font-size: 20px;
  line-height: 1.4;
}

.title {
  margin-bottom: 120px;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.17;
  letter-spacing: -0.9px;
}

.intro {
  margin-top: auto;
  font-size: 18px;
  line-height: 1.56;
  color: #ffffff;
}

.link {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>

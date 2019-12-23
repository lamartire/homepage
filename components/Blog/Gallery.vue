<template>
  <section>
    <vueper-slides :slide-ratio="1 / 2" :bullets="false" fixed-height="638px">
      <template v-slot:arrow-left>
        <img src="../../assets/img/gallery-arrow-left.svg" />
      </template>
      <template v-slot:arrow-right>
        <img src="../../assets/img/gallery-arrow-right.svg" />
      </template>
      <vueper-slide v-for="(img, i) in images" :key="i" :image="img" />
    </vueper-slides>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";

export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },

  components: {
    VueperSlides,
    VueperSlide,
    VSvgIcon
  }
};
</script>

<style lang="scss">
// Overriding external gallry styles
.vueperslides__arrow {
  transform: none;
  top: auto;
  left: auto;
  bottom: 32px;
  width: 48px;
  height: 48px;
}

.vueperslides__arrow img {
  width: 100%;
  height: 100%;
}

.vueperslides__arrow--next {
  right: 32px;
}

.vueperslides__arrow--prev {
  right: 90px;
}
</style>

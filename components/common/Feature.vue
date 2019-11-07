<template>
  <div
    :class="{ feature: true, 'is-horizontal': isHorizontal, 'is-big': isBig }"
  >
    <div class="feature-icon">
      <v-svg-icon :name="icon"></v-svg-icon>
    </div>
    <h4 v-if="title" class="feature-title">
      {{ title }}
    </h4>
    <p class="feature-content">
      <slot />
    </p>
  </div>
</template>

<script>
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";

export default {
  name: "Feature",

  props: {
    icon: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: ""
    },

    isHorizontal: {
      type: Boolean,
      default: false
    },

    isBig: {
      type: Boolean,
      default: false
    }
  },

  components: {
    VSvgIcon
  }
};
</script>

<style lang="scss">
.feature-icon {
  width: 46px;
  height: 46px;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 30px;
}

.feature.is-horizontal {
  position: relative;
}

.feature.is-horizontal .feature-icon {
  position: absolute;
  top: 0;
  left: calc(-42px - 30px);
  width: 42px;
  height: 42px;
}

.feature-title {
  font-weight: bold;
}

.feature.is-big {
  font-size: 20px;
  line-height: 1.4;
}

@include touch {
  .feature,
  .feature.is-big {
    font-size: 16px;
    line-height: 1.5;
  }

  .feature-icon {
    margin-bottom: 24px;
  }

  .feature.is-horizontal .feature-icon {
    position: static;
    margin-bottom: 16px;
  }
}
</style>

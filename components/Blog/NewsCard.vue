<template>
  <v-card :class="$style.base">
    <time :class="$style.date">
      <slot name="date" />
    </time>
    <h3 :class="$style.title">
      <slot name="title" />
    </h3>
    <p :class="$style.intro">
      <slot />
    </p>
    <a :class="$style.link" :href="href">
      <div :class="$style.icon">
        <v-svg-icon name="arrow-right" />
      </div>
      Read more
    </a>
  </v-card>
</template>

<script>
import VCard from "@endpass/ui/kit/VCard";
import VSvgIcon from "@endpass/ui/kit/VSvgIcon";

export default {
  props: {
    href: {
      type: String,
      required: true,
    }
  },

  components: {
    VCard,
    VSvgIcon
  }
};
</script>

<style lang="scss" module>
.base {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 28px 32px 36px;
}

.date {
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: #50565b;
}

.title {
  margin-bottom: auto;
  font-size: 32px;
  font-style: normal;
  line-height: 1.25;
  color: #50565b;
}

.intro {
	margin-top: 48px;
  margin-bottom: 70px;
  font-size: 18px;
  line-height: 1.56;
  color: #13171a;
}

.link {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #6e32c9;
}

.icon {
  position: relative;
  width: 17px;
  height: 14px;
  margin-right: 23px;
  margin-bottom: 7px;
}
</style>

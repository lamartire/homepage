<template>
  <v-card class="feature-card">
    <a :href="target">
      <div class="media">
        <div class="media-left">
          <div class="image is-48x48">
						<slot name="image"></slot>
          </div>
        </div>
        <div class="media-content">
          <h4 class="feature-title is-size-4">
            <slot name="title"></slot>
          </h4>
          <slot></slot>
        </div>
      </div>
    </a>
  </v-card>
</template>

<script>
import VCard from '~/components/VCard.vue'
export default {
  props: {
    target: String,
  },
  components: {
    VCard,
  },
}
</script>

<style lang="scss">
.feature-card {
  &.has-text-orange {
    .image svg {
      stroke: $orange;
    }
    .media-content {
      color: $orange;
    }
  }

  &.has-text-primary {
    .image svg {
      stroke: $primary;
    }
    .media-content {
      color: $primary;
    }
  }

  &.has-text-warning {
    .image svg {
      stroke: $warning;
    }
    .media-content {
      color: $warning;
    }
  }

  &.has-text-danger {
    .image svg {
      stroke: $danger;
    }
    .media-content {
      color: $danger;
    }
  }

  &.has-text-success {
    .image svg {
      stroke: $success;
    }
    .media-content {
      color: $success;
    }
  }

  &.has-text-info {
    .image svg {
      stroke: $info;
    }
    .media-content {
      color: $info;
    }
  }
}
</style>

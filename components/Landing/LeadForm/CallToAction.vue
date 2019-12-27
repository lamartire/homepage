<template>
  <div class="lead-cta-container">
    <v-button-link skin="white" @click.native="openModal">
      <slot>Learn More</slot>
    </v-button-link>
    <lead-form-modal
      v-if="isModalOpen"
      @close="closeModal"
     >
    </lead-form-modal>
  </div>
</template>

<script>
import VButtonLink from "~/components/VButtonLink";
import LeadFormModal from "~/components/Landing/LeadForm/Modal.vue";

export default {
  name: 'CallToAction',
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
  components: {
    VButtonLink,
    LeadFormModal,
  }
};
</script>

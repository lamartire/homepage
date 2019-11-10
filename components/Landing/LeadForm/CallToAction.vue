<template>
  <div class="lead-cta-container">
    <v-button skin="tertiary" @click="openModal">
      <slot>Learn More</slot>
    </v-button>
    <lead-form-modal
      v-if="isModalOpen"
      @close="closeModal"
     >
    </lead-form-modal>
  </div>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
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
    VButton,
    LeadFormModal,
  }
};
</script>

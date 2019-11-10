<template>
  <v-modal class="lead-form-modal">
    <v-modal-card
      is-closable
      @close="handleClose"
    >
      <template slot="title">
        <slot name="title">Learn More About Endpass</slot>
      </template>
      <lead-form></lead-form>
    </v-modal-card>
  </v-modal>
</template>

<script>
import VModal from '@endpass/ui/kit/VModal';
import VModalCard from "@endpass/ui/kit/VModalCard";
import LeadForm from "~/components/Landing/LeadForm/LeadForm.vue";

export default {
  name: 'LeadFormModal',
  methods: {
    handleClose() {
      this.$emit('close');
    },
  },
  components: {
    VModal,
    VModalCard,
    LeadForm,
  }
};
</script>

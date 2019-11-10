<template>
  <v-modal class="lead-form-modal">
    <v-modal-card
      is-closable
      @close="handleClose"
    >
      <span slot="title">{{ title }}</span>

      <lead-form
        v-if="!formSubmitted"
        @submit="handleSubmit"
      >
      </lead-form>
      <div class="lead-form-confirm" v-else>
        <p class="lead has-text-dark">
          Thank you for your interest! Someone from our team will be in
          touch soon.
        </p>
      </div>
    </v-modal-card>
  </v-modal>
</template>

<script>
import VModal from '@endpass/ui/kit/VModal';
import VModalCard from "@endpass/ui/kit/VModalCard";
import LeadForm from "~/components/Landing/LeadForm/LeadForm.vue";

export default {
  name: 'LeadFormModal',
  data() {
    return {
      title: 'Learn More About Endpass',
      formSubmitted: false,
    };
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleSubmit() {
      this.formSubmitted = true;
      this.title = 'Thank you';
      this.$emit('submit');
    },
  },
  components: {
    VModal,
    VModalCard,
    LeadForm,
  }
};
</script>

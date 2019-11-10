<template>
  <div class="lead-form">
    <v-form
      @submit="handleSubmit"
      v-if="!formSubmitted"
    >

      <v-input
        v-model="email"
        name="email"
        label="Work Email"
      />

      <v-input
        v-model="firstName"
        name="first_name"
        label="First Name"
      />

      <v-input
        v-model="lastName"
        name="last_name"
        label="Last Name"
      />

      <v-input
        v-model="company"
        name="company"
        label="Company"
      />


      <div class="controls">
        <v-button
          @click="handleSubmit"
          class="button"
          >
          Request Demo
        </v-button>
      </div>

    </v-form>

    <div class="lead-form-confirm" v-else>
    </div>

  </div>
</template>

<script>
import VForm from '@endpass/ui/components/VForm';
import VInput from '@endpass/ui/kit/VInput';
import VButton from '@endpass/ui/kit/VButton';

export default {
  name: 'LeadForm',
  data() {
    return {
      formSubmitted: false,
      email: '',
      firstName: '',
      lastName: '',
      company: '',
    };
  },
  methods: {
    handleSubmit() {
      // let formUrl = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
      let formUrl = 'https://httpbin.org/post';
      let params = {
        // SFDC form object id
        oid: "00D1U000000xyTE",
        // required by SFDC, not used for ajax
        retURL: "https://endpass.com",
        email: this.email,
        first_name: this.firstName,
        last_name: this.last,
        company: this.company
      };
    }
  },
  components: {
    VForm,
    VInput,
    VButton,
  }
}
</script>

<style lang="scss">
.lead-form {
  .controls {
    margin: 1em 0;
  }
}
</style>

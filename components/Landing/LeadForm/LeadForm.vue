<template>
  <div class="lead-form">

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
          :disabled="isSubmitting"
          class="button"
          >
          Request Demo
        </v-button>
      </div>

  </div>
</template>

<script>
import VInput from '@endpass/ui/kit/VInput';
import VButton from '@endpass/ui/kit/VButton';

import qs from 'qs';
import axios from 'axios';

export default {
  name: 'LeadForm',
  data() {
    return {
      isSubmitting: false,
      email: '',
      firstName: '',
      lastName: '',
      company: '',
    };
  },
  methods: {
    handleSubmit() {
      this.isSubmitting = true;
      let formUrl = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
      let params = {
        // SFDC form object id
        oid: "00D1U000000xyTE",
        // required by SFDC, not used for ajax
        retURL: "https://endpass.com",
        lead_source: "Web",
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
        company: this.company,
      };

      let options = {
        method: 'POST',
        url: formUrl,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(params),
      }
      axios(options)
      .catch(err => {
      })
      .finally(()=> {
        // always emit, there will be a CORS error but the lead will still
        // be submitted
        this.isSubmitting = false;
        this.$emit('submit');
      });
    }
  },
  components: {
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

<template>
  <div class="lead-form">

      <v-input
        v-model="email"
        name="email"
        label="Work Email"
        :error="errors.email"
        @change="clearError('email')"
      />

      <v-input
        v-model="firstName"
        name="first_name"
        label="First Name"
        :error="errors.firstName"
        @change="clearError('firstName')"
      />

      <v-input
        v-model="lastName"
        name="last_name"
        label="Last Name"
        :error="errors.lastName"
        @change="clearError('lastName')"
      />

      <v-input
        v-model="company"
        name="company"
        label="Company"
        :error="errors.company"
        @change="clearError('company')"
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

import formHelper from "@/plugins/form.js";


export default {
  name: 'LeadForm',
  data() {
    return {
      isSubmitting: false,
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      errors: {},
    };
  },
  methods: {
    handleSubmit() {
      this.validateForm();
      if (!this.isFormValid()) {
        return;
      }
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
    },
    validateForm() {
      this.errors = {};
      this.validateEmail();
      if (!this.firstName) {
        this.errors['firstName'] = 'Please fill in your first name';
      }
      if (!this.lastName) {
        this.errors['lastName'] = 'Please fill in your last name';
      }
      if (!this.company) {
        this.errors['company'] = 'Please fill in your company name';
      }
    },
    validateEmail() {
      // good enough
      this.email = this.email.toLowerCase();
      let re = /\S+@\S+\.\S+/;
      if (!re.test(this.email)) {
        this.errors['email'] = 'Please fill in a valid email address';
        return
      }
      let domain = this.email.substring(this.email.lastIndexOf('@')+1);
      if (formHelper.isForbiddenDomain(domain)) {
        this.errors['email'] = 'Please fill in a corporate email. Personal email addresses are not accepted';
        return
      }
    },
    isFormValid() {
      return Object.entries(this.errors).length === 0;
    },
    clearError(error) {
      this.$delete(this.errors, error);
    },
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

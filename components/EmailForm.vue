<template>
	<div class="email-form">
		<div v-if="isSubmitted">
			<p>Thanks! You're on the list</p>
		</div>
		<div v-else>
			<form class="control" @submit.prevent="submitForm">
				<div class="field has-addons">
					<div class="control">
				  	<input class="input is-medium" type="email" name="EMAIL" v-model="email"
				  	placeholder="Your Email Address" required>
					</div>
					<div class="control">
				  	<button type="submit" class="button is-primary is-medium" :class="{
				  	'is-loading': isLoading }">
							Submit
				  	</button>
					</div>
				</div>
				<slot></slot>
			</form>
		</div>
	</div>
</template>

<script>
// This component is optimized for Mailchimp forms
export default {
	data () {
		return {
			email: '',
			// Whether form has been submitted successfully
			isSubmitted: false,
			// Whether POST request is loading
			isLoading: false
		}
	},
	props: {
		// URL for the form to post to
		action: String
	},
	methods: {
		async submitForm() {
			this.isLoading = true
			let formData = new URLSearchParams()
			formData.append('EMAIL', this.email)

			try {
				await fetch(this.action, {
					method: 'POST',
					body: formData
				})
			} catch(err) {
				console.log(err)
			}
			this.isLoading = false
			this.isSubmitted = true
		}
	}
}
</script>

<style lang="scss">
</style>

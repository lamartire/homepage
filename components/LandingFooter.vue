<template>
  <div class="landing-footer">
    <div class="section section-cta is-dark">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="subtitle is-size-4 has-text-warning">
              Create your free Ethereum and token wallet today!
            </h2>
            <p class="subtitle is-size-5">Store all of your crypto tokens in
            one place and maintain control of your private keys.</p>
          </div>
          <div class="column is-one-third">
            <a class="button is-medium is-success"
              href="https://wallet.endpass.com">Get Started</a>
          </div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter.vue'

export default {
	components: {
		PageFooter
	}
}
</script>

<style lang="scss">
.is-dark {
  .subtitle {
    color: $light-grey;
  }
}
</style>

<template>
  <div class="landing-footer">
    <div class="section section-cta">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="subtitle">
              Create your free wallet today!
            </h2>
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

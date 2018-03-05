<template>
	<div class="about-page">
  	<section class="about-us section">
  		<div class="container is-narrow">
    		<h1 class="title">Our Mission</h1>
    		<p class="lead">
    		Our goal is to give people power over their personal data. We believe
    		that your personal data doesn't belong to greedy corporations or
    		surveillance states &mdash; it belongs to you!</p>
    		<p class="lead">That's why we're building a self-sovereign identity platform that
    		gives users control over personal information, without entrusting it
    		to third parties. Individual control over identity massively
    		increases privacy and security, protecting against data breaches and
    		hackers.
    		The future of identity is decentralized.
    		</p>
			<p class="lead">
				<nuxt-link to="/careers">We're hiring for our remote team - join us!</nuxt-link>
			</p>
  		</div>
  	</section>

  	<section id="contact-us" class="contact-us section">
  		<div class="container is-narrow">
    		<h1 class="title">Contact Us</h1>
    		<div class="columns">
    			<div class="column">
    				<p>Endpass is located in New York City.</p>
    				<address>
    					Endpass, Inc<br>
    					101 W 23rd St Ste 122<br>
    					New York, NY, 10011<br>
    					USA<br>
    				</address>
    				<p>Email us: <strong>contact [at] endpass.com</strong></p>
    			</div>
    			<div class="column">
    				<div class="map-image">
    					<img src="~/assets/img/map.png" height="200" width="200" alt="Endpass office location">
    				</div>
    			</div>
    		</div>
  		</div>
  	</section>
	</div>
</template>

<script>
export default {
	head () {
		return {
			title: 'About'
		}
	}
}
</script>

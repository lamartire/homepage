<template>
  <section class="careers-page section">
    <div class="container">
    	<h1 class="title">Work at Endpass</h1>
    	<p class="lead">
    	Be a part of creating the future of decentralized identity!
    	Our distributed, remote team is constantly growing. We're looking for
    	people all over the world who are interested in being a part of the next
    	generation of blockchain identity technology. We believe in moving and
    	improving fast, transparency in communication, and flexibility and
    	personal freedom.
    	</p>
    	<p class="lead">We are a distributed team, so <strong>all
    		positions are remote/ work from home.</strong> Applications from
    	anywhere in the world are welcome.</p>
    	<div class="careers-widget">
    		<h1 class="title">Open Positions</h1>
    		<div id="BrzyHr_app"></div>
    	</div>
    </div>
  </section>
</template>

<script>
export default {
	head () {
		return {
			title: 'Careers',
			script: [
				{src: 'https://endpass.breezy.hr/embed/js?link_external=true'}
			]
		}
	}
}
</script>


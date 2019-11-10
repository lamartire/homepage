<template>
  <div class="lead-form">
		<form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

			<input type=hidden name="oid" value="00D1U000000xyTE">
			<input type=hidden name="retURL" value="https://endpass.com">

			<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br>

			<label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br>

			<label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br>

			<label for="company">Company</label><input  id="company" maxlength="40" name="company" size="20" type="text" /><br>

			<input class="btc is-primary" type="submit" name="submit">

		</form>

  </div>
</template>

<script>
export default {
  name: 'LeadForm',
}
</script>

<template>
  <header class="page-header">
    <div class="page-header-logo">
      <v-svg-icon name="endpass"></v-svg-icon>
    </div>
    <nav class="page-header-menu">
      <li class="page-header-menu-item"><a href="#">Pricing</a></li>
      <li class="page-header-menu-item"><a href="#">About</a></li>
      <li class="page-header-menu-item"><a href="#">Careers</a></li>
      <li class="page-header-menu-item"><a href="#">Blog</a></li>
      <li class="page-header-menu-item"><a href="#">Contacts</a></li>
    </nav>
    <ul class="page-header-menu">
      <li class="page-header-menu-item"><a href="#">Support</a></li>
      <li class="page-header-menu-item"><a href="#">Sign in</a></li>
    </ul>
  </header>
</template>

<script>
import VSvgIcon from '@endpass/ui/kit/VSvgIcon'

export default {
  name: 'Header',

  components: {
    VSvgIcon
  }
}
</script>

<style lang="scss">
.page-header {
  max-width: 1340px;
}
</style>

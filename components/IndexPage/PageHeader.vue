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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 27px 50px;
}

.page-header-logo {
  width: 35px;
  height: 45px;
  color: var(--endpass-ui-color-white);
}

.page-header-menu {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.page-header-menu-item:not(:last-child) {
  margin-right: 42px;
}

.page-header-menu-item a {
  font-size: 16px;
  line-height: 1.5;
  color: var(--endpass-ui-color-white);
}
</style>

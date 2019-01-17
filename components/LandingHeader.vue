<template>
  <div class="landing-header">
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-item">
          <nuxt-link class="logo" to="/" exact>
            <img class="is-hidden-dark" src="~/assets/img/logo-light.png" alt="endpass">
            <img class="is-hidden-light" src="~/assets/img/logo-dark-blue.png" alt="endpass">
          </nuxt-link>
        </div>
      </div>

        <div class="navbar-menu">
          <div class="navbar-start"></div>

          <div class="navbar-end">
            <div class="navbar-item">
              <a class="button is-small"
                href="https://wallet.endpass.com">Login</a>
            </div>
            <div class="navbar-item">
              <a class="button is-small is-success"
                href="https://wallet.endpass.com">Sign Up Free</a>
            </div>
          </div>
        </div>


    </nav>
  </div>
</template>

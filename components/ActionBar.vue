<template>
  <div class="action-bar is-dark">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="action-bar-content">
            <slot></slot>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="buttons is-centered">
            <slot name="buttons">
              <a class="button is-medium is-success" href="https://wallet.endpass.com">
                Get Started
              </a>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.action-bar {
  .columns {
    align-items: center;
  }
  min-height: 4rem;
  padding: 1rem 1.5rem;

  .action-bar-content {
    font-size: 1.1rem;
  }
}
</style>

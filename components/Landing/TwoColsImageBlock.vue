<template>
  <section class="two-cols-image-block">
    <section class="container">
      <div class="columns is-variable is-4 two-cols-image-block-content">
        <div class="column is-5 is-12-touch is-offset-1-desktop is-offset-0">
          <h3 class="v-page-subtitle">
            <slot name="title" />
          </h3>
          <div class="v-page-content">
            <slot name="content" />
          </div>
        </div>
        <div class="column is-6 is-12-touch">
          <div class="two-cols-image-block-picture">
            <slot name="image"></slot>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss">
.two-cols-image-block {
  padding-bottom: 120px;
  background-color: $bg-light-grey;
  background-image: url(../../assets/img/backgrounds/summary-block.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;
}

.two-cols-image-block h3 {
  margin-bottom: 44px;
}

.two-cols-image-block p:not(:last-child) {
  margin-bottom: 28px;
}

.two-cols-image-block-picture {
  text-align: center;
  padding-top: 60px;
}

.two-cols-image-block-picture img {
  display: inline-block;
  vertical-align: middle;
  max-height: 360px;
}

@include touch {
  .two-cols-image-block {
    padding: 32px 0 60px;
    background-image: none;
  }

  .two-cols-image-block-content {
    display: flex;
    flex-wrap: wrap;
  }

  .two-cols-image-block-image {
    height: 320px;
    width: 100%;
    max-width: 340px;
    margin: 24px auto 0;
  }
}
</style>

<template>
  <section class="two-cols-with-list-block">
    <div class="container">
      <div class="columns is-variable is-8">
        <section
          class="column is-10 is-12-touch is-offset-1-desktop is-offset-0 two-cols-with-list-block-header"
        >
          <h3 class="v-page-subtitle">
            <slot name="title" />
          </h3>
          <p class="v-page-intro">
            <slot name="subtitle" />
          </p>
        </section>
      </div>

      <section
        class="columns is-variable is-8 two-cols-with-list-block-content v-page-content"
      >
        <section
          class="column is-5 is-12-touch is-offset-1-desktop is-offset-0 two-cols-with-list-block-description"
        >
          <slot name="content" />
        </section>
        <section class="column is-6 is-12-touch two-cols-with-list-block-lists">
          <p>
            <slot name="list-annotation"></slot>
          </p>
          <ul class="signle-sign-on-block-list">
            <slot name="list" />
          </ul>
          <p>
            <slot name="link-text" />
            <slot name="link" />
          </p>
        </section>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "TwoColsWithListBlock"
};
</script>

<style lang="scss">
.two-cols-with-list-block {
  background-color: var(--endpass-ui-color-white);
  padding: 74px 0 122px;
}

.two-cols-with-list-block-header {
  text-align: center;
  margin-bottom: 46px;
}

.two-cols-with-list-block-header h3 {
  margin-bottom: 16px;
}

.two-cols-with-list-block-description p:not(:last-child) {
  margin-bottom: 28px;
}

.two-cols-with-list-block-lists p:first-child {
  margin-bottom: 13px;
}

.two-cols-with-list-block-lists ul {
  list-style: none;
  columns: 2;
  column-gap: 56px;
  padding: 0;
  margin: 0 0 56px;
}

.two-cols-with-list-block-lists ul li {
  display: flex;
  margin-bottom: 14px;
}

.two-cols-with-list-block-lists ul li:before {
  content: "";
  flex: 0 0 auto;
  width: 16px;
  height: 16px;
  margin-top: 7px;
  margin-right: 8px;
  background-image: url(../../assets/img/check-list-marker.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

@include touch {
  .two-cols-with-list-block {
    padding: 60px 0 70px;
  }

  .two-cols-with-list-block-header {
    text-align: left;
    margin-bottom: 40px;
  }

  .two-cols-with-list-block-description {
    margin-bottom: 35px;
  }

  .two-cols-with-list-block-description p:not(:last-child) {
    margin-bottom: 24px;
  }

  .two-cols-with-list-block-lists p:first-child {
    margin-bottom: 22px;
  }

  .two-cols-with-list-block-lists ul {
    columns: initial;
    margin-bottom: 30px;
  }

  .two-cols-with-list-block-lists ul li:not(:last-child) {
    margin-bottom: 17px;
  }
}
</style>

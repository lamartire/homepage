<template>
  <div>
    <div class="container">
      <div class="columns is-variable is-4">
        <div class="column is-4">
          <slot name="left"></slot>
        </div>
        <div class="column is-8">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

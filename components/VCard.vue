<template>
  <div class="v-card card">
    <div v-if="$slots.header" class="card-header">
      <div class="card-header-title">
        <slot name="header"></slot>
      </div>
    </div>

    <div class="card-content">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="card-footer">
        <slot name="footer"></slot>
    </div>
  </div>
</template>

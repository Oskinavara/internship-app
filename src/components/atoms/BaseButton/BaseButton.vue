<template>
  <button 
    :class="[
      'base-button',
      {'base-button--danger': type === 'danger'},
      {'base-button--primary': type === 'primary'},
    ]" 
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      type: {
        type: String,
        default: '',
        required: false
      },
    },
  }
</script>

<style lang="scss" scoped>
  .base-button {
    height: $space-4;
    background: transparent;
    border: 2px solid $primary--darker;
    border-radius: 4px;
    color: $primary--darker;
    padding: 0 $space-2;
    line-height: $space-4;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;

    &--danger {
      border: 2px solid $button-danger;
      background: $button-danger;
      color: $white;
    }

    &--primary {
      border: 2px solid $button-primary;
      background: $button-primary;
      color: $white;
    }
  }
</style>
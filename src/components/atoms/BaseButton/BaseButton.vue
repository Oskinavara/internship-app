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
    padding: 0 $space-1;
    line-height: $space-4;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;

    &:focus {
      outline: 0; 
      box-shadow: 2px 2px 8px rgba($dark-gray, 0.6);
    }

    &--danger {
      border: 2px solid $button-danger;
      background: $button-danger;
      color: $white;
      width: 100%;
    }

    &--primary {
      border: 2px solid $button-primary;
      background: $button-primary;
      color: $white;
    }
  }
</style>
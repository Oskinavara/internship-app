<template>
  <button 
    :class="[
      'base-button',
      {'base-button--danger': type === 'danger'},
      {'base-button--primary': type === 'primary'},
      {'base-button--disabled': disabled},
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
      disabled: {
        type: Boolean,
        default: false,
        required: false
      }
    },
  }
</script>

<style lang="scss" scoped src='./BaseButton.scss'/>

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

<style lang="scss" scoped src='./BaseButton.scss'/>

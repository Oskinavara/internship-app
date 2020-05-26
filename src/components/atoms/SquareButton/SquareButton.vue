<template>
  <component 
    :is="link ? 'router-link' : 'button'"
    :to="link"
    :class="['square-button', {'square-button--danger': danger}]"
  >
    <img :src="iconSrc" alt="Edit icon" class="square-button__icon">
  </component>
</template>

<script>
  export default {
    name: 'SquareButton',
    props: {
      link: {
        type: String,
        default: ''
      },
      iconSrc: {
        type: String,
        default: '',
        required: false
      },
      danger: {
        type: Boolean,
        default: false,
        required: false
      }
    },
  }
</script>

<style lang="scss" scoped src='./SquareButton.scss' />

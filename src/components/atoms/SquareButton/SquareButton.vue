<template>
  <component 
    :is="link ? 'router-link' : 'button'"
    :to="link"
    class="square-button"
  >
    <img src="@/assets/icons/edit.svg" alt="Edit icon" class="square-button__icon">
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
    },
  }
</script>

<style lang="scss" scoped src='./SquareButton.scss' />

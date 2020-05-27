<template functional>
  <div :class="['intern-photo', {'intern-photo--rounded': props.rounded}]">
    <img :src="props.intern.avatar" alt="Intern photograph" class="intern-photo__image">
  </div>
</template>

<script>
  export default {
    name: 'InternPhoto',
    props: {
      intern: {
        type: Object,
        required: true
      },
      rounded: {
        type: Boolean,
        default: false,
        required: false
      }
    },
  }
</script>

<style lang="scss" scoped src="./InternPhoto.scss" />

<template functional>
  <div class="intern-photo">
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
      }
  },
  }
</script>

<style lang="scss" scoped src="./InternPhoto.scss" />

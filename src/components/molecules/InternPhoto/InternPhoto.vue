<template functional>
  <div class="intern-photo">
    <img :src="props.imageSrc" :alt="props.imageAlt" class="intern-photo__image">
  </div>
</template>

<script>
  export default {
    name: 'InternPhoto',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      imageAlt: {
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped src="./InternPhoto.scss" />

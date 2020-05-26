<template>
  <div class="default">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'DefaultLayout'
  }
</script>

<style lang="scss" scoped>
  .default {
    padding: $space-3 $space-2;
    background: linear-gradient(45deg, lighten($primary--lighter, 10), $primary--darker);
  }
</style>
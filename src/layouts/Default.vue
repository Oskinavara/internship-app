<template>
  <div class="default">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'DefaultLayout',
    created () {
      // This is to prevent editing non-existant intern after refresh
      this.$router.push('/');
    },
  }
</script>

<style lang="scss" scoped>
  .default {
    padding: $space-1 $space-2;
    background: linear-gradient(45deg, lighten($primary--lighter, 10), $primary--darker);
    min-height: 100vh;
  }
</style>
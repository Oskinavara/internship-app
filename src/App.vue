<template>
  <div id="app">
    <Default />
  </div>
</template>

<script>
import Default from '@/layouts/Default.vue';
export default {
  components: {
    Default,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

html, body {
  font-family: 'Open Sans', sans-serif;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>

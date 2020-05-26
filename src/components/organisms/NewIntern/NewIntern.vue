<template>
  <div class="new-intern">
    <div class="new-intern__circle" />
    <h3 class="new-intern__heading">
      Add intern
    </h3>
    <SquareButton 
      link="/add" 
      :iconSrc="require('@/assets/icons/plus.svg')"
      @click.native="clearForm()"
    />
  </div>
</template>

<script>
export default {
  name: 'NewIntern',
  components: {
    SquareButton: () => import(/* webpackChunkName: "SquareButton" */ '@/components/atoms/SquareButton/SquareButton.vue'),
  },
  methods: {
    clearForm() {
      this.$store.commit('clearForm')
    }
  },
};
</script>

<style lang="scss" scoped src="./NewIntern.scss" />

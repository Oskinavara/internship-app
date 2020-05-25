<template>
  <div class="intern-actions">
    <SquareButton :link="`/edit/${intern.id}`"/>
    <!-- <BaseButton /> -->
  </div>
</template>

<script>
  export default {
    name: 'InternActions',
    props: {
      intern: {
        type: Object,
        required: true
      },
    },
    components: {
      SquareButton: () => import(/* webpackChunkName: "SquareButton" */ '@/components/atoms/SquareButton/SquareButton.vue'),
    },
  }
</script>

<style lang="scss" scoped src="./InternActions.scss" />

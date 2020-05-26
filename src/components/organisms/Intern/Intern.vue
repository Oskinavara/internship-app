<template>
  <div class="intern">
    <InternPhoto :intern="intern" rounded />
    <InternDetails :intern="intern" />
    <InternActions :intern="intern" />
  </div>
</template>

<script>
export default {
  name: 'Intern',
  props: {
    intern: {
      type: Object,
      required: true
    }
  },
  components: {
    InternActions: () => import(/* webpackChunkName: "InternActions" */ '@/components/molecules/InternActions/InternActions.vue'),
    InternPhoto: () => import(/* webpackChunkName: "InternPhoto" */ '@/components/molecules/InternPhoto/InternPhoto.vue'),
    InternDetails: () => import(/* webpackChunkName: "InternDetails" */ '@/components/molecules/InternDetails/InternDetails.vue'),
  },
};
</script>

<style lang="scss" scoped src="./Intern.scss" />

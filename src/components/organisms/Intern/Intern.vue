<template>
  <div class="intern">
    <component 
      v-for="component in internComponents" 
      :key="component" 
      :is="component" 
      :intern="intern"
    />
  </div>
</template>

<script>
export default {
  name: 'Intern',
  data() {
    return {
      internComponents: [
        'InternPhoto',
        'InternDetails',
        'InternActions'
      ]
    }
  },
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

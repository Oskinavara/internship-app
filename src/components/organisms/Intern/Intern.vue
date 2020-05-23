<template>
  <div class="intern">
    <InternPhoto :imageSrc="intern.avatar" :imageAlt="imageAlt"/>
    <InternDetails :intern="intern"/>
    <InternActions />
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
    InternActions: () => import(/* webpackChunkName: "InternActions" */ '../../molecules/InternActions/InternActions.vue'),
    InternPhoto: () => import(/* webpackChunkName: "InternPhoto" */ '../../molecules/InternPhoto/InternPhoto.vue'),
    InternDetails: () => import(/* webpackChunkName: "InternDetails" */ '../../molecules/InternDetails/InternDetails.vue'),
  },
  computed: {
    imageAlt() {
      return `${this.intern.first_name} ${this.intern.last_name} photograph`
    }
  },
};
</script>

<style lang="scss" scoped src="./Intern.scss" />

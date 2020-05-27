<template functional>
  <div class="intern-details">
    <h3 class="intern-details__name">
      {{ `${props.intern.first_name} ${props.intern.last_name}` }}
    </h3>
    <p class="intern-details__email">
      {{ props.intern.email }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'InternDetails',
    props: {
      intern: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped src="./InternDetails.scss" />

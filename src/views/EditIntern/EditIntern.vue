<template>
  <div class="edit">
    <InternPhoto :intern="selectedIntern" v-if="isEditView"/>
    <EditForm :isEditView="isEditView"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    name: 'EditIntern',
    props: {
      isEditView: {
        type: Boolean,
        default: true,
        required: false
      },
    },
    computed: {
      ...mapState([
        'selectedIntern'
      ])
    },
    components: {
      InternPhoto: () => import(/* webpackChunkName: "InternPhoto" */ '@/components/molecules/InternPhoto/InternPhoto.vue'),
      EditForm: () => import(/* webpackChunkName: "EditForm" */ '@/components/organisms/EditForm/EditForm.vue'),
    },
  }
</script>

<style lang="scss" scoped>
  .edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $white;
    padding: $space-2;
  }
</style>
<template>
  <div class="intern-actions">
    <SquareButton 
      :link="`/edit/${intern.id}`" 
      :iconSrc="require('@/assets/icons/edit.svg')" 
      @click.native="edit(intern)" 
    />
    <!-- <BaseButton /> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

  export default {
    name: 'InternActions',
    props: {
      intern: {
        type: Object,
        required: true
      },
    },
    methods: {
    ...mapMutations([
      'selectIntern',
      'updateForm'
    ]),
    edit() {
      this.updateForm({
        firstName: this.intern.first_name,
        lastName: this.intern.last_name,
        email: this.intern.email,
        avatar: this.intern.avatar,
      });
      this.selectIntern(this.intern);
    }
  },
    components: {
      SquareButton: () => import(/* webpackChunkName: "SquareButton" */ '@/components/atoms/SquareButton/SquareButton.vue'),
    },
  }
</script>

<style lang="scss" scoped src="./InternActions.scss" />

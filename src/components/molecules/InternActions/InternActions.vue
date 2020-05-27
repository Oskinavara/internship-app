<template>
  <div class="intern-actions">
    <SquareButton 
      :iconSrc="require('@/assets/icons/pencil.svg')" 
      :link="`/edit/${intern.id}`" 
      @click.native="edit(intern)" 
    />
    <SquareButton 
      :iconSrc="require('@/assets/icons/trash.svg')" 
      @click.native="removeIntern(intern.id)" 
      danger
    />
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex';

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
      ...mapActions([
        'removeIntern'
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

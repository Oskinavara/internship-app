<template>
  <form @submit.prevent class="edit-form">
    <BaseInput 
      label="First Name" 
      v-model="formData.firstName"
    />
    <BaseInput 
      label="Last Name" 
      v-model="formData.lastName"
    />
    <BaseInput 
      label="E-mail" 
      v-model="formData.email"
    />
    <BaseInput 
      label="Avatar" 
      v-model="formData.avatar"
    />
    <div class="edit-form__buttons-wrapper">
      <BaseButton type="primary" primary @click.native="goBack">
        Save
      </BaseButton>
      <BaseButton @click.native="goBack">
        Cancel
      </BaseButton>
    </div >
    <BaseButton type="danger" @click.native="removeIntern">
      Remove
    </BaseButton>
  </form>
</template>

<script>
  export default {
    name: 'EditForm',
    data() {
      return {
        formData: {
          firstName: '',
          lastName: '',
          email: '',
          avatar: ''
        }
      }
    },
    components: {
      BaseInput: () => import(/* webpackChunkName: "BaseInput" */ '@/components/atoms/BaseInput/BaseInput.vue'),
      BaseButton: () => import(/* webpackChunkName: "BaseButton" */ '@/components/atoms/BaseButton/BaseButton.vue'),
    },
    watch: {
      formData: {
        handler() {
          this.$store.commit('updateForm', this.formData)
        },
        deep: true
      }
    },
    methods: {
      goBack() {
        this.$router.push('/')
      }
    },
    created () {
      setTimeout(() => {
        this.formData = {
          ...this.$store.state.formData
        }
      }, 0);
    },
  }
</script>

<style lang="scss" scoped src='./EditForm.scss'>

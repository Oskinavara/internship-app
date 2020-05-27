<template>
  <form @submit.prevent class="edit-form">
    <BaseInput 
      label="First Name" 
      v-model="$v.formData.firstName.$model"
      :validations="[
        {
          condition: !$v.formData.firstName.required,
          text: 'Field is required'
        },
        {
          condition: !$v.formData.firstName.alpha,
          text: 'Numbers are not allowed'
        },
        {
          condition: !$v.formData.firstName.minLength,
          text: 'Name must have at least 2 letters'
        }
      ]"
    />
    <BaseInput 
      label="Last Name"
      v-model="$v.formData.lastName.$model"
      :validations="[
        {
          condition: !$v.formData.lastName.required,
          text: 'Field is required'
        },
        {
          condition: !$v.formData.lastName.alpha,
          text: 'Numbers are not allowed'
        },
        {
          condition: !$v.formData.lastName.minLength,
          text: 'Name must have at least 2 letters'
        }
      ]"
    />
    <BaseInput 
      label="E-mail" 
      v-model="$v.formData.email.$model"
      :validations="[
        {
          condition: !$v.formData.email.required,
          text: 'Field is required'
        },
        {
          condition: !$v.formData.email.email,
          text: 'Please enter a valid e-mail address'
        },
      ]"
    />
    <BaseInput 
      label="Avatar" 
      v-model="$v.formData.avatar.$model"
      :validations="[
        {
          condition: !$v.formData.avatar.required,
          text: 'Field is required'
        },
        {
          condition: !$v.formData.avatar.url,
          text: 'It has to be a valid url'
        },
      ]"
    />
    <div class="edit-form__buttons-wrapper">
      <BaseButton type="primary" primary @click.native="saveIntern">
        Save
      </BaseButton>
      <BaseButton @click.native="goBack">
        Cancel
      </BaseButton>
    </div >
    <BaseButton 
      v-if="isEditView"
      type="danger" 
      @click.native="removeIntern"
    >
      Remove
    </BaseButton>
  </form>
</template>

<script>
  import { required, minLength, email, alpha, url } from 'vuelidate/lib/validators'

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
    props: {
      isEditView: {
        type: Boolean,
        default: false,
        required: false
      },
    },
    validations: {
      formData: {
        firstName: {
          required,
          minLength: minLength(2),
          alpha
        },
        lastName: {
          required,
          minLength: minLength(2),
          alpha
        },
        email: {
          required,
          email
        },
        avatar: {
          required,
          url
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
      },
      saveIntern() {
        if(this.isEditView) {
          let internID = this.$store.state.selectedIntern.id;
          this.$store.dispatch('editIntern', internID);
        }
        else {
          this.$store.dispatch('addIntern');
        }
        this.$router.push('/');
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

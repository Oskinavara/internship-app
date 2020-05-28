<template>
  <form @submit.prevent class="edit-form">
    <BaseInput 
      label="First Name" 
      v-model.trim="$v.form.firstName.$model"
      :validations="[
        {
          condition: !$v.form.firstName.required,
          text: 'Field is required'
        },
        {
          condition: !$v.form.firstName.alpha,
          text: 'Numbers are not allowed'
        },
        {
          condition: !$v.form.firstName.minLength,
          text: 'Name must have at least 2 letters'
        }
      ]"
    />
    <BaseInput 
      label="Last Name"
      v-model.trim="$v.form.lastName.$model"
      :validations="[
        {
          condition: !$v.form.lastName.required,
          text: 'Field is required'
        },
        {
          condition: !$v.form.lastName.alpha,
          text: 'Numbers are not allowed'
        },
        {
          condition: !$v.form.lastName.minLength,
          text: 'Name must have at least 2 letters'
        }
      ]"
    />
    <BaseInput 
      label="E-mail" 
      v-model.trim="$v.form.email.$model"
      :validations="[
        {
          condition: !$v.form.email.required,
          text: 'Field is required'
        },
        {
          condition: !$v.form.email.email,
          text: 'Please enter a valid e-mail address'
        },
      ]"
    />
    <BaseInput
      label="Avatar"
      v-model.trim="$v.form.avatar.$model"
      :validations="[
        {
          condition: !$v.form.avatar.required,
          text: 'Field is required'
        },
        {
          condition: !$v.form.avatar.url,
          text: 'It has to be a valid url'
        },
      ]"
    />
    <div class="edit-form__buttons-wrapper">
      <BaseButton 
        type="primary" 
        primary
        :disabled="$v.form.$invalid"
        @click.native="saveIntern"
      >
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
        form: {
          firstName: '',
          lastName: '',
          avatar: '',
          email: '',
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
      form: {
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
    created () {
      setTimeout(() => {
        this.form = {...this.$store.state.form}
      }, 0);
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
      },
      removeIntern() {
        this.$store.dispatch('removeIntern', this.$store.state.selectedIntern.id);
      }
    }
  }
</script>

<style lang="scss" scoped src='./EditForm.scss'>

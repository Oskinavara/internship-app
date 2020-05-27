<template>
  <div class="base-input">
    <label for="base-input" class="base-input__label">
      {{ label }}
    </label>
    <input 
      type="text" 
      @input="$emit('input', $event.target.value)" 
      :value="value" 
      name="base-input"
      class="base-input__input"
    >
    <transition name="fade">
      <p class="base-input__validation-message" v-if="shownValidationMessage">
        {{ shownValidationMessage }}
      </p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      value: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      validations: {
        type: Array,
        required: false
      }
    },
    computed: {
      shownValidationMessage() {
        let shownValidation = this.validations.find(validation => validation.condition);
        return shownValidation && shownValidation.text
      }
    },
  }
</script>

<style lang="scss" scoped src='./BaseInput.scss'>

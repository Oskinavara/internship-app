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
      }
    },
  }
</script>

<style lang="scss" scoped src='./BaseInput.scss'>

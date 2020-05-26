export default {
  selectIntern(state, intern) {
    state.selectedIntern = intern;
  },
  updateForm(state, newData) {
    state.formData = {
      ...newData
    }
  }
}
export default {
  selectIntern(state, intern) {
    state.selectedIntern = intern;
  },
  updateForm(state, newData) {
    state.formData = {
      ...newData
    }
  },
  clearForm(state) {
    state.formData = {
      firstName: '',
      lastName: '',
      email: '',
      avatar: ''
    }
  },
  getInterns(state, interns) {
    state.currentPage = [...interns]
  },
  setTotalPages(state, number) {
    state.totalPages = number
  }
}
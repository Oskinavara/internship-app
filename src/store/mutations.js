export default {

  selectIntern(state, intern) {
    state.selectedIntern = intern;
  },

  updateForm(state, newData) {
    state.form = {
      ...newData
    }
  },

  clearForm(state) {
    state.form = {
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
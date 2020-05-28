import axios from 'axios'
import { errorHandler } from '@/logic/helpers/errorHandler.js'
const BASE_URL = 'https://reqres.in/api/'

export default {
  async editIntern({ state }, id) {
    await axios.put(`${BASE_URL}users/${id}`, {
      id,
      email: state.form.email,
      first_name: state.form.firstName,
      last_name: state.form.lastName,
      avatar: state.form.avatar
    })
    .then(res => console.log(res))
    .catch(errorHandler)
  },

  async getInterns({ commit }, page) {
    let response = await axios
      .get(`${BASE_URL}users?per_page=6&page=${page}`)
      .catch(errorHandler)
    await commit('getInterns', response.data.data)
    await commit('setTotalPages', response.data.total_pages)
  },

  async removeIntern(context, id) {
    await axios.delete(`${BASE_URL}users/${id}`)
    .then(res => console.log(res))
    .catch(errorHandler)
  },

  async addIntern({ state }) {
    await axios.post(`${BASE_URL}users`, {
      first_name: state.form.firstName,
      last_name: state.form.lastName,
      avatar: state.form.avatar,
      email: state.form.email,
    })
    .then(res => console.log(res))
    .catch(errorHandler)
  }
}
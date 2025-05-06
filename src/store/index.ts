import { createStore } from 'vuex';

export default createStore({
  state: {
    formData: {},
  },
  mutations: {
    setFormData(state, payload) {
      state.formData = payload;
    },
  },
  actions: {
    saveFormData({ commit }, payload) {
      commit('setFormData', payload);
    },
  },
  getters: {
    getFormData: (state) => state.formData,
  },
});
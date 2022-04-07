import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    section1: {},
    section2: {}
  },
  actions: {
  },
  // data 가공
  getters: {

  },
  mutations: {
    SET_SECTION1_DATA(state, payload) {
      return state.section1 = payload
    },
    SET_SECTION2_DATA(state, payload) {
      return state.section2 = payload
    }
  },
})
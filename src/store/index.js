import Vue from 'vue'
import Vuex from 'vuex'
import {_} from 'vue-underscore';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    section1: [],
    section2: []
  },
  actions: {
    deleteData({ commit }, value) {
      console.log(value)
      console.log(commit)
    
      let list = _.map(value.data, (e)=> {
        if (e.id === value.id) e.isDelete = true
        return e
      })
      commit('DELETE_SECTION1_DATA', list)
    } 
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
    },
    DELETE_SECTION1_DATA(state, payload) {
      return state.section1 = payload
    }
  },
})
// store.js
import { createStore } from 'vuex'
import { isProxy, toRaw } from 'vue';

export default createStore({
  state: {
    mainCards: [],
    qualityCards:[],
    defectCards:[],
    futureCards:[],
    sex:null
  },
  getters: {
    cards: state => toRaw(state.mainCards),
    qualityCards: state => toRaw(state.qualityCards),
    defectCards: state => toRaw(state.defectCards),
    futureCards: state => toRaw(state.futureCards),
    sex: state => state.sex,
  },
  actions: {
    addCard({ commit }, card) {
      commit('addCard', card)
    },
    addQualityCard({ commit }, card) {
      commit('addQualityCard', card)
    },
    addDefectCard({ commit }, card) {
      commit('addDefectCard', card)
    },
    addFutureCard({ commit }, card) {
      commit('addFutureCard', card)
    },

    deleteFromMainCards({ commit }, card) {
      commit('deleteFromMainCards', card)
    },
    setSex({commit},sex){
      commit('setSex',sex)
    }

  },
  mutations: {
    addCard(state, card) {
      state.mainCards.push(card)
    },
    addQualityCard(state, card) {
      state.qualityCards.push(card)
    },
    addDefectCard(state, card) {
      state.defectCards.push(card)
    },
    addFutureCard(state, card) {
      state.futureCards.push(card)
    },
    setSex(state,sex) {
      state.sex = sex
    },
    deleteFromMainCards(state,card){
      state.mainCards = state.mainCards.filter(c => c.name_short !== card.name_short);
    }


  },
})
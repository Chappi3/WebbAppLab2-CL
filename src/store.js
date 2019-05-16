import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    legendOnes: false,
    legendTwos: false,
    legendThrees: false,
    legendFours: false,
    legendFives: false,
    legendSixes: false,
    legendBonus: false,
    legendPair: false,
    legendOfaKind: false,
    legendSmallStraight: false,
    legendLargeStraight: false,
    legendFullHouse: false,
    legendChance: false,
    legendYahtzee: false
  },
  getters: {
    getLegendOnes: state => state.legendOnes,
    getLegendTwos: state => state.legendTwos,
    getLegendThrees: state => state.legendThrees,
    getLegendFours: state => state.legendFours,
    getLegendFives: state => state.legendFives,
    getLegendSixes: state => state.legendSixes,
    getLegendBonus: state => state.legendBonus,
    getLegendPair: state => state.legendPair,
    getLegendOfaKind: state => state.legendOfaKind,
    getLegendSmallStraight: state => state.legendSmallStraight,
    getLegendLargeStraight: state => state.legendLargeStraight,
    getLegendFullHouse: state => state.legendFullHouse,
    getLegendChance: state => state.legendChance,
    getLegendYahtzee: state => state.legendYahtzee
  },
  mutations: {
    changeLegendOnes: state => {
      state.legendOnes = !state.legendOnes;
    },
    changeLegendTwos: state => {
      state.legendTwos = !state.legendTwos;
    },
    changeLegendThrees: state => {
      state.legendThrees = !state.legendThrees;
    },
    changeLegendFours: state => {
      state.legendFours = !state.legendFours;
    },
    changeLegendFives: state => {
      state.legendFives = !state.legendFives;
    },
    changeLegendSixes: state => {
      state.legendSixes = !state.legendSixes;
    },
    changeLegendBonus: state => {
      state.legendBonus = !state.legendBonus;
    },
    changeLegendPair: state => {
      state.legendPair = !state.legendPair;
    },
    changeLegendOfaKind: state => {
      state.legendOfaKind = !state.legendOfaKind;
    },
    changeLegendSmallStraight: state => {
      state.legendSmallStraight = !state.legendSmallStraight;
    },
    changeLegendLargeStraight: state => {
      state.legendLargeStraight = !state.legendLargeStraight;
    },
    changeLegendFullHouse: state => {
      state.legendFullHouse = !state.legendFullHouse;
    },
    changeLegendChance: state => {
      state.legendChance = !state.legendChance;
    },
    changeLegendYahtzee: state => {
      state.legendYahtzee = !state.legendYahtzee;
    }
  },
  actions: {
    changeLegendOnes: context => {
      context.commit('changeLegendOnes');
    },
    changeLegendTwos: context => {
      context.commit('changeLegendTwos');
    },
    changeLegendThrees: context => {
      context.commit('changeLegendThrees');
    },
    changeLegendFours: context => {
      context.commit('changeLegendFours');
    },
    changeLegendFives: context => {
      context.commit('changeLegendFives');
    },
    changeLegendSixes: context => {
      context.commit('changeLegendSixes');
    },
    changeLegendBonus: context => {
      context.commit('changeLegendBonus');
    },
    changeLegendPair: context => {
      context.commit('changeLegendPair');
    },
    changeLegendOfaKind: context => {
      context.commit('changeLegendOfaKind');
    },
    changeLegendSmallStraight: context => {
      context.commit('changeLegendSmallStraight');
    },
    changeLegendLargeStraight: context => {
      context.commit('changeLegendLargeStraight');
    },
    changeLegendFullHouse: context => {
      context.commit('changeLegendFullHouse');
    },
    changeLegendChance: context => {
      context.commit('changeLegendChance');
    },
    changeLegendYahtzee: context => {
      context.commit('changeLegendYahtzee');
    }
  }
})

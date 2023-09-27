// Utilities
// import { createPinia } from 'pinia'
// src/store/index.js

import Vue from "vue";
import Vuex from "vuex";
import { createStore } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Define your application state variables here
  },
  mutations: {
    // Define functions to modify the state here
  },
  actions: {
    // Define actions here to commit mutations
  },
  getters: {
    // Define getters to retrieve state variables
  },
});



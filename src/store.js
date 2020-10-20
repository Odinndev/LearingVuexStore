// import and vuex
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// create our store
export default new Vuex.Store({
 state: {
  message:
   "Hello, I am coming from your Vuex state that is why you can see me here and in every other component without passing props"
 },

 getters: {
  getMessage(state) {
   return state.message;
  }
 },

 mutations: {
  updateMessage (state, message) {
    state.obj.message = message
  }
 },

 actions: {
  actionA({ commit }) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
     commit("updateState");
     resolve();
     reject();
    }, 3000);
   });
  }
 } // actions
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    isAuthenticated: (state) => {
      return state.user !== null;
    },
    userName: (state, getters) => {
      if (getters.isAuthenticated) {
        return state.user.name;
      } else {
        return "";
      }
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    logIn(context, payload) {
      context.commit("setUser", payload);
    },
    logout(context) {
      localStorage.clear();
      context.commit("setUser", null);
    },
  },
});

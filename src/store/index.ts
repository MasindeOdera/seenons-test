import { createStore } from "vuex";

export default createStore({
  state: {
    menuOpen: false,
  },
  getters: {
    getMenuOpenStatus: (state) => state.menuOpen,
  },
  mutations: {
    updateMenuOpen(state, payload) {
      state.menuOpen = payload;
    },
  },
  actions: {
    async toggleMenuOpen({ commit }, status) {
      commit("updateMenuOpen", status);
    },
  },
  modules: {},
});

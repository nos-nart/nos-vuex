import Vue from "vue";
import Vuex from "vuex";
import todoStore from "./todoStore";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todo: todoStore
  }
});

export default store;
import Vuex from "vuex";
import Vue from "vue";

// Modules
import todos from "./modules/todos";

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    todos
  }
});

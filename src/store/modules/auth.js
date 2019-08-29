import qs from "qs";

import API from "@/api/imgur";
import router from "@/router";

const state = {
  token: window.localStorage.getItem("token")
};
const getters = {
  isLoggedIn: state => !!state.token
};
const actions = {
  login: () => API.login(),
  finalizeLogin: ({ commit }, hash) => {
    const obj = qs.parse(hash.replace("#", ""));
    commit("setToken", obj.access_token);
    window.localStorage.setItem("token", obj.access_token);
  },
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("token");
  }
};
const mutations = {
  setToken: (state, token) => {
    state.token = token;
    router.push("/");
  }
};

export default { state, getters, actions, mutations };

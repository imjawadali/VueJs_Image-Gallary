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
    const object = {
      token: obj.access_token,
      route: "/"
    };
    commit("setToken", object);
    window.localStorage.setItem("token", obj.access_token);
  },
  logout: ({ commit }) => {
    const object = {
      token: null,
      route: "/upload"
    };
    commit("setToken", object);
    window.localStorage.removeItem("token");
  }
};
const mutations = {
  setToken: (state, object) => {
    state.token = object.token;
    router.push(object.route);
  }
};

export default { state, getters, actions, mutations };

// import qs from "qs";

import API from "@/api/imgur";
// import router from "@/router";

const state = {
  images: []
};
const getters = {
  allImages: state => state.images
};
const actions = {
  fetchImages: () => API.login()
};
const mutations = {
  setToken: () => {}
};

export default { state, getters, actions, mutations };

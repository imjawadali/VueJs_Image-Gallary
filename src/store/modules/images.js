import API from "@/api/imgur";
import router from "@/router";

const state = {
  images: []
};
const getters = {
  allImages: state => state.images
};
const actions = {
  async fetchImages({ commit, rootState }) {
    const response = await API.fetchImages(rootState.auth.token);
    commit("setImages", response ? response.data.data : []);
  },
  async uploadImages({ rootState }, images) {
    await API.uploadImages(images, rootState.auth.token);
    router.push("/");
  }
};
const mutations = {
  setImages: (state, images) => (state.images = images)
};

export default { state, getters, actions, mutations };

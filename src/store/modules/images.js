import API from "@/api/imgur";

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
  async uploadImages({ commit, rootState }, images) {
    console.log(images);
    // const response = await API.uploadImages(rootState.auth.token);
    // commit("setImages", response ? response.data.data : []);
  }
};
const mutations = {
  setImages: (state, images) => (state.images = images)
};

export default { state, getters, actions, mutations };

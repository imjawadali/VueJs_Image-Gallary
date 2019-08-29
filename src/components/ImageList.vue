<template>
  <div class="imageList">
    <!-- eslint-disable-next-line -->
    <img v-for="image in allImages" :src="image.link" :alt="image.name" :key="image.id" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  methods: mapActions(["fetchImages"]),
  computed: mapGetters(["allImages"]),
  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.imageList {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>

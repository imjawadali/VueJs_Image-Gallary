<template>
  <div class="home">
    <ImageList v-if="isLoggedIn" />
    <h2 v-else>Please login first . . . !</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ImageList from "@/components/ImageList";

export default {
  name: "Home",
  components: {
    ImageList
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

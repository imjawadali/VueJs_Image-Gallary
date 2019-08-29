<template>
  <div id="app">
    <Header />
    <div class="ui container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

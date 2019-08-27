<template>
  <div class="ui secondary pointing menu">
    <!-- eslint-disable -->
    <router-link class="active item" :to="{ name: 'Home' }">Image Gallary</router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link class="item" to="/">Gallary</router-link>
        <router-link class="item" to="/upload">Upload</router-link>
        <a href="#" class="ui item" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  methods: mapActions(["login", "logout"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>

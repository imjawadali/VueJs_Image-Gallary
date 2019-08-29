<template>
  <div class="authHandler">
    <h1>Please wait . . . !</h1>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(window.location.hash);
  }
};
</script>

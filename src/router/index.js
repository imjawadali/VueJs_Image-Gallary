import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import AuthHandler from "@/views/AuthHandler";
import UploadForm from "@/views/UploadForm";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/upload",
      name: "UploadForm",
      component: UploadForm
    },
    {
      path: "/oauth2/callback",
      name: "Authhandler",
      component: AuthHandler
    }
  ]
});

<template>
  <v-row class="" justify="center" align="center" style="overflow: hidden">
    <div style="display: flex" class="ma-0 pa-0">
      <v-card
        elevation="19"
        width="337"
        height="509"
        class=""
        style="
          border-radius: 19px 19px 19px 19px;
          position: absolute;
          z-index: 10;
          margin-left: -1em;
        "
      >
        <v-main class="mt-n2">
          <loginSlider />
        </v-main>
      </v-card>
      <v-card
        elevation="10"
        width="400"
        height="486"
        style="border-radius: 3px 25px 25px 3px; margin-left: 21em"
        class="mt-3"
      >
        <v-tabs :color=maincolor.theme background-color="#FFFFFF" centered class="pt-10">
          <v-tabs-slider :color=maincolor.theme></v-tabs-slider>
          <v-tab @click="user_portalf()" style="text-transform: none"> Login </v-tab>
          <v-tab @click="admin_portalf()" style="text-transform: none"> Admin </v-tab>
          <v-tab @click="registerf()" style="text-transform: none"> Registrieren </v-tab>
        </v-tabs>
        <v-main class="mt-n5" v-if="registerok">
          <register />
        </v-main>
        <v-main class="ma-0 pa-0" v-if="userPortal">
          <userPortal />
        </v-main>
        <v-main class="ma-0 pa-0" v-if="adminPortal">
          <adminPortal />
        </v-main>
      </v-card>
    </div>
  </v-row>
</template>
<script>
// var fs = require("fs");
// const Cryptr = require("cryptr");
// const cryptr = new Cryptr("myTotalySecretKey");
// import store from "../store";
import loginSlider from "../components/loginSlider-m";
import adminPortal from "../components/adminPortal-m";
import userPortal from "../components/userPortal-m";
import register from "../components/register-m";
import { mapState } from "vuex";
export default {
  name: "login",
  components: {
    loginSlider,
    adminPortal,
    userPortal,
    register,
  },
  //data
  data: () => ({
    userPortal: true,
    registerok: false,
    adminPortal: false,
  }),
    methods: {
    registerf() {
      this.registerok = true;
      this.userPortal = false;
      this.adminPortal = false;
    },
    user_portalf() {
      this.registerok = false;
      this.userPortal = true;
      this.adminPortal = false;
    },
    admin_portalf() {
      this.registerok = false;
      this.userPortal = false;
      this.adminPortal = true;
    },
  },
  computed: {
     ...mapState(["maincolor"]),
     },
};
</script>

<style lang="scss" scoped>
.v-tab,
.v-tab:hover {
  color: #606060;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>  
  
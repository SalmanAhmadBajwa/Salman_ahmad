<template>
  <div class="">
    <v-row justify="center">
      <v-card rounded="lg" width="75%" max-height="0">
        <div class="mt-15" >
          <v-text-field
          dense
            color="#DADEE7"
            v-model="user_name"
            clearable
            outlined
            style="border-color:#DADEE7;"
            placeholder
            label="Nutzer_name"
            rounded
            class="pl-3 pr-3"
          ></v-text-field>
        </div>
        <v-text-field
        dense
          color="#DADEE7"
          v-model="user_email"
          clearable
             :rules="[rules.emailMatch]"
          outlined
          style="border-color:#DADEE7;"
          rounded
          placeholder
          label="Nutzer_email"
          class="pl-3 pr-3"
        ></v-text-field>

        <!-- <v-text-field
        dense
          color="#DADEE7"
          v-model="admin_name"
          clearable
          outlined
          style="border-color:#DADEE7;"
          rounded
          placeholder
          label="Administrator_name"
          class="pl-3 pr-3"
        ></v-text-field> -->

       
         <v-text-field
          dense
          color="#DADEE7"
          style="border-color:#DADEE7;"
          v-model="user_password"
          :append-icon="signupshow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="signupshow ? 'text' : 'Password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="signupshow = !signupshow"
          clearable
          outlined
          placeholder
          label="Passwort"
          class="pl-3 pr-3"
          rounded
        ></v-text-field>

   <v-row justify="center" class="mt-2">
          <v-btn :color=maincolor.theme class="white--text"  style="
                text-transform:none;
                padding-right: 80px;
                padding-left: 80px;
                padding-top: 20px;
                padding-bottom: 20px;
                border-radius:20px;
              " @click="user_login()">
            Login
          </v-btn>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>
<script>
import store from "../store";
const { dialog } = require('electron').remote;
import { remote } from 'electron'
import { mapState } from "vuex";
export default {
  name: "userPortal",
  data() {
    return {
      signupshow:false,
      dialog1: false,
      contract_list_of_user: [],
      user_name: "",
      user_email: "",
      // admin_name: "",
      user_password:"",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: (b) => /\S+@\S+.\S+/.test(b) || 'Email is not valid',
      },
    };
  },
  mounted() {},
  methods: {
    user_login() {
      var a = null;
      this.dialog1 = false;
      a = store.getters.finduser(this.user_name);
      if (a === undefined) {
      this.user_name = "";
      this.user_email = "";
      //this.admin_name = "";
      this.user_password=""
      dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Anmeldung Fehler', 
        detail: 'Kein Benutzername oder E-Mail gefunden', 
      });
      } 
      else if (a.email === this.user_email) {
        // if (a.admin_name === this.admin_name) {
          if(a.password === this.user_password){
            this.contract_list_of_user = store.getters.showusercontracts(
            this.user_name
            );
            this.$store.commit("setBuildproductionmode", false);
            this.$store.commit("setLogged", true);
            this.$store.commit("setIsAdmin", false);
            this.$store.commit("setcurrentusername",this.user_name);
            var recent_contracts_by_specific_user = store.getters.getrecentcontractsofuser(this.user_name);
            this.$store.commit("setcurrentuserrecentcontracts",recent_contracts_by_specific_user);
            this.$router.push({ path: "/contracts" }).catch(()=>{});
            this.$store.commit(
              "setContract_list_of_user",
              this.contract_list_of_user
            );
          }
          else {
            this.user_name = "";
            this.user_email = "";
            //this.admin_name = "";
            this.user_password=""
            dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Registrierungsfehler', 
        detail: 'Passwort stimmt nicht überein', 
      });
          }
      // }
      // else {
      //   this.user_name = "";
      //   this.user_email = "";
      //   this.admin_name = "";
      //   this.user_password=""
      //   dialog.showErrorBox('title here','Admin Name not found');
      // } 
      } else {
        this.user_name = "";
        this.user_email = "";
        //this.admin_name = "";
        this.user_password=""
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Anmeldung Fehler', 
        detail: 'E-Mails stimmt nicht überein', 
      });
      }
    },
  },
  computed: {
     ...mapState(["maincolor"]),
  },
};
</script>

<style lang="scss" scoped></style>
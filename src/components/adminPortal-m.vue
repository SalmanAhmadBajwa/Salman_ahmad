<template>
  <div class="">
    <v-row justify="center">
      <v-card rounded="lg" width="75%"  max-height="0">
        <div class="mt-15">
          <v-text-field
          dense
            color="#DADEE7"
            v-model="loginname"
            clearable
            outlined
            placeholder
            label="Name"
            rounded
              style="border-color:#DADEE7;"
            class="pl-3 pr-3"
          ></v-text-field>
        </div>
        <v-text-field
        dense
          color="#DADEE7"
          v-model="loginemail"
          clearable
          :rules="[rules.emailMatch]"
          outlined
          rounded
            style="border-color:#DADEE7;"
          placeholder
          label="Email Adresse"
          class="pl-3 pr-3"
        ></v-text-field>

        <v-text-field
        dense
          color="#DADEE7"
          v-model="loginPassword"
          :append-icon="loginshow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="loginshow ? 'text' : 'Password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="loginshow = !loginshow"
          clearable
          outlined
          placeholder
          rounded
            style="border-color:#DADEE7;"
          label="Passwort"
          class="pl-3 pr-3"
        ></v-text-field>
     <v-row justify="center" class="mt-2">
          <v-btn :color=maincolor.theme class="white--text"  style="
                padding-right: 80px;
                padding-left: 80px;
                padding-top: 20px;
                padding-bottom: 20px;
                border-radius:20px;
                 text-transform:none;
              "
               @click="login()">
            Login
          </v-btn>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import store from "../store";
import { mapState } from "vuex";
//var fs = require('fs');
//const Cryptr = require('cryptr');
//const cryptr = new Cryptr('myTotalySecretKey');
const { dialog } = require('electron').remote;
import { remote } from 'electron'
export default {
  name: "adminPortal",
  components: {},
  data() {
    return {
      loginshow: false,
      dialog1: false,
      dialog2: false,
      signupshow: false,
      signupconfirmshow: false,
      loginname: "",
      loginemail: "",
      loginPassword: "",
      signupname: "",
      signupemail: "",
      signuppassword: "",
      signupconfirmpassword: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: (b) => /\S+@\S+.\S+/.test(b) || 'Email is not valid',
      },
    };
  },
  //updated
  updated(){
     this.signupname = store.state.admin.name;
    this.signupemail = store.state.admin.email;
    this.signupassword = store.state.admin.password;
  },
  //mounted
  mounted() {
    this.signupname = store.state.admin.name;
    this.signupemail = store.state.admin.email;
    this.signupassword = store.state.admin.password;
  },
  methods: {
    login() {
      this.dialog2 = false;
      var a = null;
      a = store.getters.checkforloginName(this.loginname);
      if (a.length < 1) {
         this.loginname = "";
      this.loginemail = "";
      this.loginPassword = "";
     dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Anmeldung Fehler', 
        detail: 'Kein Benutzername oder E-Mail gefunden', 
      });
             return
      }
      else if(a[0].is_admin === false){
        this.loginname = "";
        this.loginemail = "";
        this.loginPassword = "";
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Anmeldung Fehler', 
        detail: 'Kein Benutzername oder E-Mail gefunden', 
      });
        return
      }
      else if (a[0].email === this.loginemail) {
        if (a[0].password === this.loginPassword) {
          if(a[0].is_superuser == false){
            this.$store.commit("setBuildproductionmode", false);
             this.$store.commit("setnavbardashboardicon", true);
            this.$store.commit("setLogged", true);
            this.$store.commit("setIsAdmin", true);
            this.$store.commit("setIsSuperUser", a[0].is_superuser);
            this.$store.commit("setcurrentadminname",this.loginname);
            var groups_by_specific_admin = store.getters.checkGroupByAdminName(this.loginname);
            this.$store.commit("setcurrentadmingroups",groups_by_specific_admin);
            var users_by_specific_admin = store.getters.getallusers();
            this.$store.commit("setcurrentadminusers",users_by_specific_admin);
            //var recent_contracts_by_specific_admin = store.getters.getrecentcontractsofadmin(this.loginname)
            //var version_by_specific_admin = store.getters.checkVersionByAdminName(this.loginname);
            //console.log(version_by_specific_admin[0].admin_version)
            this.$store.commit("setcurrentadminversions");
            this.$store.commit("setcurrentadminrecentcontracts",a[0].recent_contracts);
            //var deleted_by_specific_admin = store.getters.checkDeletedByAdminName(this.loginname);
            this.$store.commit("setcurrentadmindeleted");
            this.$store.commit("setcurrentadminprofilepic",a[0].profile_pic);
            this.$router.push({ path: '/contracts' }).catch(()=>{});
          } else {
            this.$store.commit("setBuildproductionmode", false);
            this.$store.commit("setLogged", true);
             this.$store.commit("setnavbardashboardicon", true);
            this.$store.commit("setIsAdmin", true);
            this.$store.commit("setIsSuperUser", a[0].is_superuser);
            this.$store.commit("setcurrentadminname",this.loginname);
            groups_by_specific_admin = store.getters.checkGroupByAdminName(this.loginname);
            this.$store.commit("setcurrentadmingroups",groups_by_specific_admin);
users_by_specific_admin = store.getters.getallusers();
            this.$store.commit("setcurrentadminusers",users_by_specific_admin);
            //var recent_contracts_by_specific_admin = store.getters.getrecentcontractsofadmin(this.loginname)
            //var version_by_specific_admin = store.getters.checkVersionByAdminName(this.loginname);
            //console.log(version_by_specific_admin[0].admin_version)
            this.$store.commit("setcurrentadminversions"); //chnaged in index.js
            this.$store.commit("setcurrentadminrecentcontracts",a[0].recent_contracts);
            //var deleted_by_specific_admin = store.getters.checkDeletedByAdminName(this.loginname);
            this.$store.commit("setcurrentadmindeleted");
            this.$store.commit("setcurrentadminprofilepic",a[0].profile_pic);
            //this.$router.push({ path: '/contracts' });
            //var all_admin = store.getters.getalladmin()
            //var user_and_admin = {}
            // var i;
            // for(i=0; i< all_admin.length; i++){
             // user_and_admin["admin"] = all_admin
            //}
            //for( i=0; i< users_by_specific_admin.length; i++){
             // user_and_admin["user"] = users_by_specific_admin
            //}
            
            //user_and_admin[0].push(users_by_specific_admin)
            //users_by_specific_admin.push(all_admin)
            var user_and_admin = store.getters.getallusersandadmins();
            this.$store.commit("set_user_and_admin",user_and_admin);
            this.$router.push({ path: '/contracts' }).catch(()=>{});
          }
        } else {
           this.loginname = "";
      this.loginemail = "";
      this.loginPassword = "";
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Anmeldung Fehler', 
        detail: 'Passwort stimmt nicht überein', 
      });
              return 
        }
      } else {
         this.loginname = "";
      this.loginemail = "";
      this.loginPassword = "";
       dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Anmeldung Fehler', 
        detail: 'E-Mails stimmt nicht überein', 
      });
              return
      }
    },
  },
   computed: {
     ...mapState(["maincolor"]),
   },
};
</script>

<style lang="scss" scoped></style>
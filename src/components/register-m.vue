<template>
  <div>
    <v-row justify="center">
      <v-card rounded="lg" width="75%" max-height="0">
        <div class="mt-15">
          <v-text-field
            dense
            style="border-color:#DADEE7;"
            color="#DADEE7"
            v-model="signupname"
            clearable
            outlined
            placeholder
            label="Name"
            class="px-3"
            rounded
          ></v-text-field>
        </div>
        <v-text-field
          dense
          style="border-color:#DADEE7;"
          color="#DADEE7"
          v-model="signupemail"
          clearable
          :rules="[rules.emailMatch]"
          outlined
          placeholder
          label="Email Adresse"
          class="pl-3 pr-3"
          rounded
        ></v-text-field>
        <v-text-field
          dense
          color="#DADEE7"
          style="border-color:#DADEE7;"
          v-model="signuppassword"
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
        <v-text-field
          dense
          color="#DADEE7"
          style="border-color:#DADEE7;"
          v-model="signupconfirmpassword"
          :append-icon="signupconfirmshow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="signupconfirmshow ? 'text' : 'Password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="signupconfirmshow = !signupconfirmshow"
          clearable
          outlined
          placeholder
          class="pl-3 pr-3 "
          label="Passwort wiederholen"
          rounded
        ></v-text-field>
         <!-- <v-text-field
          dense
          style="border-color:#DADEE7;"
          color="#DADEE7"
          v-model="signupadminname"
          clearable
          outlined
          placeholder
          label="Admin Name"
          class="pl-3 pr-3"
          rounded
        ></v-text-field> -->
        <v-row justify="center"  class="mt-2">
            <v-btn
              :color=maincolor.theme
              class="white--text"
              style="
                padding-right: 35px;
                padding-left: 35px;
                padding-top: 20px;
                padding-bottom: 20px;
                 border-radius:20px;
                  text-transform:none;
              "
              @click="add()"
            >
              Jetzt Registrieren
            </v-btn>
            <!-- <v-btn color="#FFA300" class="white--text"  style="
                padding-right: 80px;
                padding-left: 80px;
                padding-top: 20px;
                padding-bottom: 20px;
                border-radius:20px;
                 text-transform:none;
              "
               @click="login()">
            Login
          </v-btn> -->
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
  name: "register",
  components: {},
  data() {
    return {
      signupbutton:false,
      loginshow: false,
      dialog1: false,
      dialog2: false,
      signupshow: false,
      signupconfirmshow: false,
      signupname: "",
      signupemail: "",
      signuppassword: "",
      signupconfirmpassword: "",
      // signupadminname: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
       emailMatch: (b) => /\S+@\S+.\S+/.test(b) || 'Email is not valid',
      },
    };
  },
  //mounted
  mounted() {
  },
  methods: {
    add() {
      if(this.signupname.length == 0 || this.signupemail.length == 0 || this.signuppassword.length == 0 || this.signupconfirmpassword.length == 0){
        this.signupname = "";
        this.signupemail = "";
        this.signuppassword = "";
        this.signupconfirmpassword = "";
        return;
      }
      if(store.state.user.length > 5){
        dialog.showErrorBox('Limit has been breached',"Cant create more than 3 accounts");
        return;
      }
      this.dialog1 = false;
      var a = null;
      a = store.getters.checkByName(this.signupname);
      var b = null;
      b = store.getters.checkByEmail(this.signupemail);
      if (a.length !== 0) {
        this.signupname = "";
        this.signupemail = "";
        this.signuppassword = "";
        this.signupconfirmpassword = "";
        //this.signupadminname = ""
        dialog.showErrorBox('title here','Username already exists');
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Registrierungsfehler', 
        detail: 'Benutzername existiert bereits', 
      });
        return
      } else if (b.length !== 0) {
        this.signupname = "";
        this.signupemail = "";
        this.signuppassword = "";
        this.signupconfirmpassword = "";
        // this.signupadminname = ""
       dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Registrierungsfehler', 
        detail: 'E-Mail existiert bereits', 
      });
      } else if (this.signuppassword !== this.signupconfirmpassword) {
        this.signupname = "";
        this.signupemail = "";
        this.signuppassword = "";
        this.signupconfirmpassword = "";
        //this.signupadminname = ""
       dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Registrierungsfehler', 
        detail: 'Passwort stimmt nicht überein', 
      });
        return
      } 
      else {
       store.commit("adminsavefunc", {
              name: this.signupname,
              email: this.signupemail,
              password: this.signuppassword,
              is_superuser: false,
              is_admin: false,
              admin_version: null
          });
        this.signupname = "";
        this.signupemail = "";
        this.signuppassword = "";
        this.signupconfirmpassword = "";
        //this.signupadminname = ""
        store.dispatch("updatewritejson");
      }    
    }
  },
   computed: {
      ...mapState(["maincolor"]),
   },
};
</script>
<style lang="scss" scoped>
.lable {
  padding-left: 10px;
}
</style>
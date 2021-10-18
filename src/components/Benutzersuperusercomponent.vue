<template>
  <v-main class="ma-0 pa-0">
    <v-row class="">
      <v-col cols="3">
        <p
          class="mt-n1 ml-1"
          style="font-family: raleway; font-size: 18px; font-weight: 700"
        >
          Benutzer
          <v-menu
            :close-on-content-click="false"
            offset-x
            top
            rounded="xl"
            width="300"
            v-model="dialog1"
          >
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon class="" color="black">mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card elevation="0" width="300" height="390" class="ma-0 pa-0">
              <p
                class="ml-6 pt-3"
                style="font-family: raleway; font-size: 20px; font-weight: 700"
              >
                Benutzer hinzufügen
              </p>
              <p
                class="ml-6 mt-n2"
                style="font-family: raleway; font-size: 14px; font-weight: 700"
              >
                Admin : {{ current_admin_name | truncateEnd(10, "...") }}
              </p>
              <div style="width: 19em" class="ml-3">
                <v-text-field
                  dense
                  style="border-color: #dadee7"
                  color="#DADEE7"
                  v-model="signupname"
                  clearable
                  outlined
                  placeholder
                  label="Name"
                  class=""
                  rounded
                ></v-text-field>
              </div>
              <div style="width: 19em" class="ml-3">
                <v-text-field
                  dense
                  style="border-color: #dadee7"
                  color="#DADEE7"
                  v-model="signupemail"
                   :rules="[rules.emailMatch]"
                  clearable
                  outlined
                  placeholder
                  label="Email Adresse"
                  class=""
                  rounded
                ></v-text-field>
              </div>
              <div style="width: 19em" class="ml-3">
                <v-text-field
                  dense
                  color="#DADEE7"
                  style="border-color: #dadee7"
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
                  class=""
                  rounded
                ></v-text-field>
              </div>
              <div style="width: 19em" class="ml-3">
                <v-text-field
                  dense
                  color="#DADEE7"
                  style="border-color: #dadee7"
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
                  class=""
                  label="Passwort wiederholen"
                  rounded
                ></v-text-field>
              </div>
              <v-card-actions class="mt-n5">
                <v-spacer></v-spacer>
                <v-btn
                  text
                  style="text-transform: none"
                  color="#606060"
                  @click="create_user()"
                >
                  Anlegen
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </p>
      </v-col>
      <v-col cols="7"> </v-col>
      <v-col cols="2" class="mt-n2">
        <v-menu
          :close-on-content-click="false"
          offset-x
          bottom
          left
          rounded="xl"
          width="300"
          v-model="dialog5"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              text
              v-on="on"
              style="
                font-family: raleway;
                font-size: 14px;
                font-weight: 700;
                text-transform: none;
              "
              class="ml-n8"
            >
              <v-icon class="mr-2 mt-n1" color="black"
                >mdi-account-plus-outline</v-icon
              >Nutzer hinzufügen</v-btn
            >
          </template>
          <v-card elevation="0" width="300" height="390" class="ma-0 pa-0">
            <p
              class="ml-6 pt-3"
              style="font-family: raleway; font-size: 20px; font-weight: 700"
            >
              Benutzer hinzufügen
            </p>
            <p
              class="ml-6 mt-n2"
              style="font-family: raleway; font-size: 14px; font-weight: 700"
            >
              Admin : {{ current_admin_name | truncateEnd(10, "...") }}
            </p>
            <div style="width: 19em" class="ml-3">
              <v-text-field
                dense
                style="border-color: #dadee7"
                color="#DADEE7"
                v-model="signupname"
                clearable
                outlined
                placeholder
                label="Name"
                class=""
                rounded
              ></v-text-field>
            </div>
            <div style="width: 19em" class="ml-3">
              <v-text-field
                dense
                style="border-color: #dadee7"
                color="#DADEE7"
                v-model="signupemail"
                clearable
                outlined
                placeholder
                label="Email Adresse"
                class=""
                rounded
              ></v-text-field>
            </div>
            <div style="width: 19em" class="ml-3">
              <v-text-field
                dense
                color="#DADEE7"
                style="border-color: #dadee7"
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
                class=""
                rounded
              ></v-text-field>
            </div>
            <div style="width: 19em" class="ml-3">
              <v-text-field
                dense
                color="#DADEE7"
                style="border-color: #dadee7"
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
                class=""
                label="Passwort wiederholen"
                rounded
              ></v-text-field>
            </div>
            <v-card-actions class="mt-n5">
              <v-spacer></v-spacer>
              <v-btn
                text
                style="text-transform: none"
                color="#606060"
                @click="create_user()"
              >
                Anlegen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="super_user_data"
      item-key="tagID"
      class="elevation-0"
      :footer-props="{
        'items-per-page-text': 'Zeilen pro Seite',
      }"
    >
      <template v-slot:no-data>
        <p class="mt-4">Keine Elemente enthalten</p>
      </template>
      <template v-slot:[`item.name`]="{ item }">
        <div style="display: flex" class="mt-4">
          <p style="" class="" v-if="item.is_admin === true">
            <v-btn
              icon
              @mouseenter="recoverItem = item"
              @mouseleave="recoverItem = null"
            >
              <v-menu
                :close-on-content-click="false"
                offset-x
                top
                rounded="xl"
                width="293"
              >
                <template v-slot:activator="{ on }">
                  <div v-on="on">
                    <v-icon
                      class="pt-n2"
                      v-if="recoverItem === item && item.is_admin === true"
                      >mdi-pencil-outline</v-icon
                    >
                  </div>
                </template>
                <v-card elevation="0" width="293" height="297">
                  <p
                    class="ml-6 pt-4"
                    style="
                      font-family: raleway;
                      font-size: 20px;
                      font-weight: 700;
                    "
                  >
                    Benutzer bearbeiten
                  </p>
                  <div style="width: 19em" class="ml-3 mt-n1">
                    <v-text-field
                      dense
                      rounded
                      outlined
                      :label="item.name"
                      v-model="adminname"
                    >
                    </v-text-field>
                  </div>
                  <div style="width: 19em" class="ml-3">
                    <v-text-field
                      dense
                      color="#DADEE7"
                      style="border-color: #dadee7"
                      v-model="changepasswordadmin"
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
                      label="neues Passwort"
                      class=""
                      rounded
                    ></v-text-field>
                  </div>
                  <div style="width: 19em" class="ml-3">
                    <v-text-field
                      dense
                      color="#DADEE7"
                      style="border-color: #dadee7"
                      v-model="changeconfirmpasswordadmin"
                      :append-icon="
                        signupconfirmshow ? 'mdi-eye' : 'mdi-eye-off'
                      "
                      :rules="[rules.required, rules.min]"
                      :type="signupconfirmshow ? 'text' : 'Password'"
                      name="input-10-1"
                      hint="At least 8 characters"
                      counter
                      @click:append="signupconfirmshow = !signupconfirmshow"
                      clearable
                      outlined
                      placeholder
                      class=""
                      label="Passwort bestatigen"
                      rounded
                    ></v-text-field>
                  </div>
                  <v-card-actions class="mt-n3">
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      style="text-transform: none"
                      color="#606060"
                      @click="
                        change_name_and_password_admin(
                          item.name,
                          adminname,
                          changepasswordadmin,
                          changeconfirmpasswordadmin
                        )
                      "
                    >
                      Anlegen
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
              <v-icon
                class="mt-n2"
                v-if="recoverItem !== item && item.is_admin === true"
                >mdi-account-outline</v-icon
              >
            </v-btn>
            {{ item.name | truncateEnd(12, "...") }} |
          </p>
          <p style="" class="" v-if="item.is_admin === false">
            <v-btn
              icon
              @mouseenter="recoverItem = item"
              @mouseleave="recoverItem = null"
            >
              <v-menu
                :close-on-content-click="false"
                offset-x
                top
                rounded="xl"
                width="293"
              >
                <template v-slot:activator="{ on }">
                  <div v-on="on">
                    <v-icon
                      class="pt-n2"
                      v-if="recoverItem === item && item.is_admin === false"
                      >mdi-pencil-outline</v-icon
                    >
                  </div>
                </template>
                <v-card elevation="0" width="293" height="297">
                  <p
                    class="ml-6 pt-4"
                    style="
                      font-family: raleway;
                      font-size: 20px;
                      font-weight: 700;
                    "
                  >
                    Benutzer bearbeiten
                  </p>
                  <div style="width: 19em" class="ml-3 mt-n1">
                    <v-text-field
                      dense
                      rounded
                      outlined
                      :label="item.name"
                      v-model="changeusername"
                    >
                    </v-text-field>
                  </div>
                  <div style="width: 19em" class="ml-3">
                    <v-text-field
                      dense
                      color="#DADEE7"
                      style="border-color: #dadee7"
                      v-model="changepassword"
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
                      label="neues Passwort"
                      class=""
                      rounded
                    ></v-text-field>
                  </div>
                  <div style="width: 19em" class="ml-3">
                    <v-text-field
                      dense
                      color="#DADEE7"
                      style="border-color: #dadee7"
                      v-model="changeconfirmpassword"
                      :append-icon="
                        signupconfirmshow ? 'mdi-eye' : 'mdi-eye-off'
                      "
                      :rules="[rules.required, rules.min]"
                      :type="signupconfirmshow ? 'text' : 'Password'"
                      name="input-10-1"
                      hint="At least 8 characters"
                      counter
                      @click:append="signupconfirmshow = !signupconfirmshow"
                      clearable
                      outlined
                      placeholder
                      class=""
                      label="Passwort bestatigen"
                      rounded
                    ></v-text-field>
                  </div>
                  <v-card-actions class="mt-n3">
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      style="text-transform: none"
                      color="#606060"
                      @click="
                        change_name_and_password_admin(
                          item.name,
                          changeusername,
                          changepassword,
                          changeconfirmpassword
                        )
                      "
                    >
                      Anlegen
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
              <v-icon
                class="mt-n2"
                v-if="recoverItem !== item && item.is_admin === false"
                >mdi-account-outline</v-icon
              >
            </v-btn>
            {{ item.name | truncateEnd(12, "...") }} |
          </p>
          <p
            style=""
            class="ml-1 mt-2"
            v-if="recoverItem === item && item.is_admin === false"
          >
            {{ item.password | truncateEnd(12, "...") }}
          </p>
          <p
            style=""
            class="ml-1 mt-2"
            v-if="recoverItem === item && item.is_admin === true"
          >
            {{ item.password | truncateEnd(12, "...") }}
          </p>
          <p
            class="mt-2 ml-1"
            v-if="recoverItem !== item && item.is_admin === false"
          >
            ***********
          </p>
          <p
            class="mt-2 ml-1"
            v-if="recoverItem !== item && item.is_admin === true"
          >
            ***********
          </p>
        </div>
      </template>

      <template v-slot:[`item.time`]="{ item }">
        <p class="mt-4" v-if="item.is_admin === false">
          {{ item.date }} | {{ item.time }}
        </p>
        <p class="mt-4" v-if="item.is_admin === true">
          {{ item.date }} | {{ item.time }}
        </p>
      </template>

      <template v-slot:[`item.contracts`]="{ item }">
        <v-card
          elevation="0"
          width="500"
          color="transparent"
          min-height="1"
          class="mt-3"
        >
          <v-row class="ma-0 pa-0">
            <div v-for="(item1, index) in item.contracts" :key="index">
              <p
                v-if="item1.isedited === true"
                style="text-align: left"
                class="mt-1 mr-1"
              >
                <v-icon class="mt-n2">mdi-file-document-outline </v-icon>
                {{ item1.front_title | truncateEnd(15, "...") }}
                ,
              </p>
              <p
                v-if="item1.isedited === false"
                style="text-align: left"
                class="mt-1 mr-1"
              >
                <v-icon class="mt-n2">mdi-file-star-outline </v-icon>
                {{ item1.title | truncateEnd(8, "...") }}_original ,
              </p>
            </div>
          </v-row>
        </v-card>
      </template>
      <template v-slot:[`item.icon`]="{ item }">
        <v-btn icon v-if="item.is_admin === true">
          <v-icon @click="permanentdeleteadmin(item.id)"
            >mdi-delete-outline</v-icon
          >
        </v-btn>
        <v-btn icon v-if="item.is_admin === false">
          <v-icon @click="permanentdeleteuser(item.id)">mdi-delete-outline</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-main>
</template>

<script>
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
var fs = require("fs");
import store from "../store";
const { dialog } = require("electron").remote;
import { mapState } from "vuex";
import { remote } from "electron";
export default {
  name: "Benutzeradmincomponent",
  data: () => ({
    headers: [
      {
        text: "Benutzer | Passwort",
        value: "name",
        class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "Erstellungsdatum",
        value: "time",
        class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "Vertragzugriff",
        value: "contracts",
        class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "",
        align: "center",
        value: "icon",
        class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
    ],
    signupemail: "",
    signupname: "",
    signuppassword: "",
    signupconfirmpassword: "",
    signupshow: false,
    signupconfirmshow: false,
    changepassword: "",
    changeusername: "",
    changeconfirmpassword: "",
    changepasswordadmin: "",
    adminname: "",
    changeconfirmpasswordadmin: "",
    auto_users: [],
    group_title: "",
    checked: true,
    auto_contracts: [],
    admincard: [],
    admincardheading: "",
    recoverItem: null,
    dialog2: false,
    dialog5: false,
    dialog3: false,
    dialog4: false,
    all_users: [],
    groupName: "",
    menu4: false,
    menu1: false,
    menu2: false,
    menu3: false,
    admincarditems: [],
    midcardtext: [],
    all_contracts: [],
    isAdmin: false,
    contract_list_of_user: [],
    current_admin_name: "",
    current_admin_groups: [],
    current_admin_versions: [],
    current_admin_recent_contracts: [],
    current_user_recent_contracts: [],
    current_admin_users: [],
    super_user_data: [],
    // superuseritems:[],
    maincontracts: [
      "amazon",
      "shopify",
      "ebay",
      "consent",
      "consent1",
      "consentV",
    ],
    dialog1: false,
    is_superuser: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: (b) => /\S+@\S+.\S+/.test(b) || 'Email is not valid',
    },
  }),
  //COMPUTED
  computed: {
    ...mapState([
      "zuletztbearbeitetadmin",
      "Arbeitsbereicheadmin",
      "Benutzeradmin",
      "Papierkorbadmin",
      "Dashboardadmin",
      // "grid",
      // "list",
      "Zuletztbearbeitetuser",
      "Furmichfreigegebenuser",
      "Papierkorbuser",
    ]),
    // rules() {
    //   return [
    //     this.selected.length > 0 || "At least one item should be selected",
    //   ];
    // },
  },
  //updated
  updated() {},
  //mounted
  mounted() {
    this.isAdmin = store.state.isAdmin;
    this.is_superuser = store.state.is_superuser;
    this.all_users = store.state.user;
    this.all_contracts = store.state.contract;
    if (this.isAdmin === true) {
      this.super_user_data = store.state.super_user_data;
      // this.list = store.state.list;
      // this.grid = store.state.grid;
      this.current_admin_name = store.state.current_admin_name;
      this.read_data_for_admin(this.current_admin_name);
      this.current_admin_versions = store.state.current_admin_versions;
      this.current_admin_recent_contracts =
        store.state.current_admin_recent_contracts;
      this.current_admin_groups = store.state.current_admin_groups;
      this.current_admin_users = store.state.current_admin_users;
      this.watchfunctionforuser();
      // this.superuseritemsfunction();
      //this.admincard = store.state.group;
    } else {
      this.current_user_name = store.state.current_user_name;
      this.read_data_for_user(this.current_user_name);
      this.current_user_recent_contracts =
        store.state.current_user_recent_contracts;
      this.contract_list_of_user = store.state.contract_list_of_user;
    }
  },
  //filters
  filters: {
    truncateEnd: function (text, length, clamp) {
      clamp = clamp || "...";
      var node = document.createElement("div");
      node.innerHTML = text;
      var content = node.textContent;
      return content.length > length
        ? content.slice(0, length) + clamp
        : content;
    },
  },
  //methods
  methods: {
    watchfunctionforuser() {
      var users_by_specific_admin = store.getters.getallusers();
      this.$store.commit("setcurrentadminusers", users_by_specific_admin);
      this.super_user_data = store.getters.getallusersandadmins();
      var user = JSON.parse(JSON.stringify(this.super_user_data));
      var len = user.length;
      for (var i = 0; i < len; i++) {
        var array = []
        for (const [key,value] of Object.entries(user[i].contracts)) {
          console.log(key)
          for (var j = 0; j < value.length; j++) {
            var contract = store.getters.findcopycontract(value[j]);
            array.push(contract)
          }
        }
        user[i].contracts = array
      }
      this.super_user_data = user;
      store.dispatch("updatewritejson");
    },
    change_name_and_password_admin(
      oldname,
      adminname,
      changepasswordadmin,
      changeconfirmpasswordadmin
    ) {
      this.changepasswordadmin = "";
      this.adminname = "";
      this.changeconfirmpasswordadmin = "";
      this.changepassword = "";
      this.changeusername = "";
      this.changeconfirmpassword = "";
      if (
        adminname.length == 0 &&
        changepasswordadmin.length !== 0 &&
        changeconfirmpasswordadmin.length !== 0
      ) {
        if (changepasswordadmin === changeconfirmpasswordadmin) {
          store.commit("changeadminpassword", [oldname, changepasswordadmin]);
        } else {
          dialog.showMessageBox(remote.getCurrentWindow(), {
            type: "error",
            title: "Féhler",
            message: "Passwort AUSGABE",
            detail: "Passwörter stimmen nicht überein",
          });
        }
      }
      if (
        adminname.length !== 0 &&
        changepasswordadmin.length == 0 &&
        changeconfirmpasswordadmin.length == 0
      ) {
        var a = store.getters.checkByName(adminname);
        // console.log(a.length)
        if (a.length === 0) {
          store.commit("changeadminname", [oldname, adminname]);
        } else {
          dialog.showMessageBox(remote.getCurrentWindow(), {
            type: "error",
            title: "Féhler",
            message: "Admin AUSGABE",
            detail: adminname + "aist bereits vorhanden",
          });
        }
      } else if (
        changeconfirmpasswordadmin === changepasswordadmin &&
        adminname.length !== 0
      ) {
        a = store.getters.checkByName(adminname);
        if (a.length === 0) {
          store.commit("changeadminpassword", [oldname, changepasswordadmin]);
          store.commit("changeadminname", [oldname, adminname]);
        } else {
          dialog.showMessageBox(remote.getCurrentWindow(), {
            type: "error",
            title: "Féhler",
            message: "Problem mit dem Administratornamen",
            detail: adminname + "aist bereits vorhanden",
          });
        }
      }
      this.watchfunctionforuser()
      // var users_by_specific_admin = store.getters.getallusers();
      // this.current_admin_users = users_by_specific_admin;
      // this.$store.commit("setcurrentadminusers", users_by_specific_admin);
      // var groups_by_specific_admin = store.getters.checkGroupByAdminName(
      //   this.current_admin_name
      // );
      // store.commit("setcurrentadmingroups", groups_by_specific_admin);
      // this.current_admin_groups = store.state.current_admin_groups;
      // var user_and_admin = store.getters.getallusersandadmins();
      // this.$store.commit("set_user_and_admin", user_and_admin);
      // this.super_user_data = user_and_admin;
      // store.dispatch("updatewritejson");
    },
    permanentdeleteadmin(admin) {
      var confirm = this.delete_user_confirmation();
      confirm.then((x) => {
        if (x === 1) {
          store.commit("pushuserinpapierkorbfrombenutzer", admin);
          store.commit("deleteuserfromadminpanel", admin);
          this.watchfunctionforuser();
        }
      });
    },
    //   superuseritemsfunction(){
    //   var itemsP = [];
    //   for(var i=0;i<this.super_user_data.admin.length;i++){
    //     var obj = {};
    //     obj = this.super_user_data.admin[i];
    //     obj.tagP = "admin";
    //     obj.tagID = "admin" + obj.id;
    //     itemsP.push(obj);
    //   }
    //   for(var j=0;j<this.super_user_data.user.length;j++){
    //     var obj1 = {};
    //     obj1 = this.super_user_data.user[j];
    //     obj1.tagP = "user" ;
    //     obj1.tagID = "user"+obj1.user_id;
    //     itemsP.push(obj1);
    //   }
    //   this.superuseritems = itemsP;
    // },
    async delete_user_confirmation() {
      let options = {
        buttons: ["Nein", "Ja"],
        message: "Möchten Sie diesen Benutzer wirklich löschen?",
      };
      let response1 = await dialog.showMessageBox(options);
      return response1.response;
    },
    permanentdeleteuser(user) {
      var confirm = this.delete_user_confirmation();
      confirm.then((x) => {
        if (x === 1) {
          store.commit("pushuserinpapierkorbfrombenutzer", user);
          store.commit("deleteuserfromadminpanelingroups", user);
          store.commit("deleteuserfromadminpanel", user);
          this.watchfunctionforuser();
          // store.commit("pushuserinpapierkorbfrombenutzer", [
          //   user,
          //   this.current_admin_name,
          // ]);
          // store.commit("deleteuserfromadminpanelingroups", [
          //   user.name,
          //   this.current_admin_name,
          // ]);
          // store.commit("deleteuserfromadminpanel", user.name);
          // var users_by_specific_admin = store.getters.getallusers();
          // this.current_admin_users = users_by_specific_admin;
          // this.$store.commit("setcurrentadminusers", users_by_specific_admin);
          // var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          //   this.current_admin_name
          // );
          // store.commit("setcurrentadmingroups", groups_by_specific_admin);
          // this.current_admin_groups = store.state.current_admin_groups;
          // var admin_data = store.getters.checkByName(this.current_admin_name);
          // this.$store.commit(
          //   "setcurrentadmindeleted",
          //   admin_data[0].deleted_data
          // );
          // store.dispatch("updatewritejson");
        }
      });
    },
    create_user() {
      if (
        this.signupname.length === 0 ||
        this.signupemail.length === 0 ||
        this.signuppassword.length === 0 ||
        this.signupconfirmpassword.length === 0
      ) {
         dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Féhler', 
        message: 'Registrierungsfehler', 
        detail: 'Felder sind leer', 
      });
        return;
      }
      if (this.current_admin_users.length > 4) {
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Féhler', 
        message: 'Limit wurde überschritten', 
        detail: 'Es können nicht mehr als 5 Konten erstellt werden', 
      });
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
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Féhler', 
        message: 'Problem mit dem Benutzernamen', 
        detail: 'Benutzername existiert bereits', 
      });
        return;
      } else if (b.length !== 0) {
        this.signupname = "";
        this.signupemail = "";
        this.signuppassword = "";
        this.signupconfirmpassword = "";
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Féhler', 
        message: 'E-Mail-Problem', 
        detail: 'E-Mail ist bereits vorhanden', 
      });
      } else if (this.signuppassword !== this.signupconfirmpassword) {
        this.signupname = "";
        this.signupemail = "";
        this.signuppassword = "";
        this.signupconfirmpassword = "";
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Féhler', 
        message: 'Passwort AUSGABE', 
        detail: 'Passwörter stimmen nicht überein', 
      });
        return;
      } else {
        store.commit("adminsavefunc", {
          name: this.signupname,
          email: this.signupemail,
          password: this.signuppassword,
          is_superuser : false,
          is_admin: false,
          admin_version: null,
        });
        this.signupname = "";
        this.signupemail = "";
        this.signuppassword = "";
        this.signupconfirmpassword = "";
        this.watchfunctionforuser()
        // var users_by_specific_admin = store.getters.getallusers();
        // this.current_admin_users = users_by_specific_admin;
        // this.$store.commit("setcurrentadminusers",users_by_specific_admin);
        // store.dispatch("updatewritejson");

      }
    },
    change_password_only(oldusername, changepassword, changeconfirmpassword) {
      if (changepassword === changeconfirmpassword) {
        if (changepassword.length >= 8) {
          // just change password
          // a = store.getters.checkByUserName(this.signupname);
          store.commit("changepasswordofuserfromadminpanel", [
            oldusername,
            changepassword,
          ]);
          var users_by_specific_admin = store.getters.getallByAdminName(
            this.current_admin_name
          );
          this.$store.commit("setcurrentadminusers", users_by_specific_admin);
          this.current_admin_users = store.state.current_admin_users;
          store.dispatch("updatewritejson");
          return;
        } else {
          dialog.showMessageBox(remote.getCurrentWindow(), {
            type: "error",
            title: "Féhler",
            message: "Passwort AUSGABE",
            detail: "Die Passwortlänge ist zu kurz",
          });
          return;
        }
      } else if (changepassword !== changeconfirmpassword) {
        dialog.showMessageBox(remote.getCurrentWindow(), {
          type: "error",
          title: "Féhler",
          message: "Passwort AUSGABE",
          detail: "Passwörter stimmen nicht überein",
        });
        return;
      }
    },
    // change_password_only(oldusername, changepassword, changeconfirmpassword) {
    //   if (changepassword === changeconfirmpassword) {
    //     if (changepassword.length >= 8) {
    //       // just change password
    //       // a = store.getters.checkByUserName(this.signupname);
    //       store.commit("changepasswordofuserfromadminpanel", [
    //         oldusername,
    //         changepassword,
    //       ]);
    //       var users_by_specific_admin = store.getters.getallByAdminName(
    //         this.current_admin_name
    //       );
    //       this.$store.commit("setcurrentadminusers", users_by_specific_admin);
    //       this.current_admin_users = store.state.current_admin_users;
    //       store.dispatch("updatewritejson");
    //       return;
    //     } else {
    //       dialog.showErrorBox(
    //         "Passwort AUSGABE",
    //         "Die Passwortlänge ist zu kurz"
    //       );
    //       return;
    //     }
    //   } else if (changepassword !== changeconfirmpassword) {
    //     dialog.showErrorBox("Passwort AUSGABE", "Passwörter stimmen nicht überein");
    //     return;
    //   }
    // },
    change_user_name_only(oldusername, changeusername) {
      store.commit("changeusernameofuserfromadminpanel", [
        oldusername,
        changeusername,
      ]);
      var users_by_specific_admin = store.getters.getallByAdminName(
        this.current_admin_name
      );
      this.$store.commit("setcurrentadminusers", users_by_specific_admin);
      this.current_admin_users = store.state.current_admin_users;

      store.commit("changeusernameofuserfromadminpanelingroups", [
        oldusername,
        changeusername,
        this.current_admin_name,
      ]);
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
        this.current_admin_name
      );
      store.commit("setcurrentadmingroups", groups_by_specific_admin);
      this.current_admin_groups = store.state.current_admin_groups;
      store.dispatch("updatewritejson");
      return;
    },

    //  change_name_and_password(
    //     oldusername,
    //     changeusername,
    //     changepassword,
    //     changeconfirmpassword
    //   ) {
    //       console.log(oldusername,
    //     changeusername,
    //     changepassword,
    //     changeconfirmpassword)
    //     if (
    //       changeusername.length == 0 &&
    //       changepassword.length !== 0 &&
    //       changeconfirmpassword.length !== 0
    //     ) {
    //       this.change_password_only(
    //         oldusername,
    //         changepassword,
    //         changeconfirmpassword
    //       );
    //     }
    //     if (
    //       changeusername.length !== 0 &&
    //       changepassword.length == 0 &&
    //       changeconfirmpassword.length == 0
    //     ) {
    //       var a = store.getters.finduser(changeusername)
    //       if(a === undefined)
    //       {
    //         this.change_user_name_only(oldusername, changeusername);
    //       }
    //       else{
    //         dialog.showErrorBox("Gleicher Benutzername gefunden!", changeusername + " ist bereits vorhanden");
    //       }
    //     } else if (
    //       changepassword === changeconfirmpassword &&
    //       changeusername.length !== 0
    //     ) {
    //       a = store.getters.finduser(changeusername)
    //       if(a === undefined)
    //       {
    //            this.change_password_only(
    //           oldusername,
    //           changepassword,
    //           changeconfirmpassword
    //         );
    //         this.change_user_name_only(oldusername, changeusername);

    //       }
    //       else{
    //         dialog.showErrorBox("Gleicher Benutzername gefunden!", changeusername + " ist bereits vorhanden");
    //       }
    //     }
    //     this.changepassword = "";
    //     this.changeusername = "";
    //     this.changeconfirmpassword = "";
    //   },
    delete_user_permanently(user) {
      // console.log(user);
      store.commit("deleteuserfromadminpanel", user.user_name);
      store.commit("deleteuserfromadminpanelingroups", [
        user.user_name,
        this.current_admin_name,
      ]);
      var users_by_specific_admin = store.getters.getallByAdminName(
        this.current_admin_name
      );
      this.$store.commit("setcurrentadminusers", users_by_specific_admin);
      this.current_admin_users = store.state.current_admin_users;
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
        this.current_admin_name
      );
      store.commit("setcurrentadmingroups", groups_by_specific_admin);
      this.current_admin_groups = store.state.current_admin_groups;

      store.dispatch("updatewritejson");
    },
    read_data_for_admin(admin_name) {
      const path = "./" + admin_name + ".json";
      if (fs.existsSync(path)) {
        fs.readFile("./" + admin_name + ".json", "utf-8", function (err, data) {
          if (err) {
            console.log(err);
          }
          const decryptedString = cryptr.decrypt(data);
          localStorage.setItem("contracts of " + admin_name, decryptedString);
        });
      }
    },

    read_data_for_user(user_name) {
      const path = "./" + user_name + "- u.json";
      if (fs.existsSync(path)) {
        fs.readFile(
          "./" + user_name + "- u.json",
          "utf-8",
          function (err, data) {
            if (err) {
              console.log(err);
            }
            const decryptedString = cryptr.decrypt(data);
            localStorage.setItem("contracts of " + user_name, decryptedString);
          }
        );
      }
    },

    currentusercontracts(x, y, z) {
      //x : title
      //y : group_title
      //z : front_title
      for (var i = 0; i < this.current_user_recent_contracts.length; i++) {
        if (this.current_user_recent_contracts[i].contract_front_title === z) {
          var c = this.current_user_recent_contracts[i];
          this.current_user_recent_contracts.splice(i, 1);
          this.current_user_recent_contracts.unshift(c);
          store.commit(
            "setcurrentuserrecentcontracts",
            this.current_user_recent_contracts
          );
          this.route_path(x, y, z);
          return true;
        }
      }
      var obj = {
        contract_title: "",
        contract_url: "",
        group_title: "",
        contract_front_title: "",
      };
      obj.contract_title = x;
      obj.group_title = y;
      obj.contract_front_title = z;
      obj.contract_url =
        "./assets/" + z + "-" + y + "-" + this.current_user_name + "- u.png";
      if (this.current_user_recent_contracts.length === 5) {
        this.current_user_recent_contracts.pop();
        store.commit(
          "setcurrentuserrecentcontracts",
          this.current_user_recent_contracts
        );
      }
      this.current_user_recent_contracts.unshift(obj);
      store.commit(
        "setcurrentuserrecentcontracts",
        this.current_user_recent_contracts
      );
      this.route_path(x, y, z);
    },

    currentadmincontracts(x, y, z) {
      //x : title
      //y : group_title
      //z : front_title
      // alert(y);
      for (var i = 0; i < this.current_admin_recent_contracts.length; i++) {
        if (this.current_admin_recent_contracts[i].contract_front_title === z) {
          var c = this.current_admin_recent_contracts[i];
          this.current_admin_recent_contracts.splice(i, 1);
          this.current_admin_recent_contracts.unshift(c);
          store.commit(
            "setcurrentadminrecentcontracts",
            this.current_admin_recent_contracts
          );
          store.commit("setrecentcontractsinadmindata", [
            this.current_admin_name,
            this.current_admin_recent_contracts,
          ]);
          this.route_path(x, y, z);
          return true;
        }
      }
      var obj = {
        contract_title: "",
        contract_url: "",
        group_title: "",
        contract_front_title: "",
      };
      obj.contract_title = x;
      obj.group_title = y;
      obj.contract_front_title = z;
      obj.contract_url =
        "./assets/" + z + "-" + y + "-" + this.current_admin_name + ".png";
      if (this.current_admin_recent_contracts.length === 5) {
        this.current_admin_recent_contracts.pop();
        store.commit(
          "setcurrentadminrecentcontracts",
          this.current_admin_recent_contracts
        );
        store.commit("setrecentcontractsinadmindata", [
          this.current_admin_name,
          this.current_admin_recent_contracts,
        ]);
      }
      this.current_admin_recent_contracts.unshift(obj);
      store.commit(
        "setcurrentadminrecentcontracts",
        this.current_admin_recent_contracts
      );
      store.commit("setrecentcontractsinadmindata", [
        this.current_admin_name,
        this.current_admin_recent_contracts,
      ]);
      this.route_path(x, y, z);
    },

    recentcontractforadmin(x, y, z) {
      //x:contract_title
      //y:group_title
      //z:contract_front_title
      // alert(x);
      // alert(y);
      this.route_path(x, y, z);
    },
    route_path(x, y, z) {
      // x -> contract_title
      // y -> contract_group_title
      //z -> contract_front_title
      if (x === "amazon") {
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/amazon" }).catch(() => {});
      } else if (x === "shopify") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/shopify" }).catch(() => {});
      } else if (x === "ebay") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/ebay" }).catch(() => {});
      } else if (x === "consent") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/consent" }).catch(() => {});
      } else if (x === "consent1") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/consent1" }).catch(() => {});
      } else if (x === "consentV") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/consentV" }).catch(() => {});
      }
    },

    recentcontractforuser(x, y, z) {
      //x:contract_title
      //y:group_title
      //z:contract_front_title
      // alert(x);
      //  alert(y);
      //   alert(z);
      this.route_path(x, y, z);
    },

    delete_group(x) {
      var j;
      var groups_by_specific_admin;
      const group_title = x;
      var group = store.getters.findgroup(group_title);
      var confirmation = confirm(
        "Wollen Sie diesen Arbeitsbereich wirklich löschen?"
      );
      if (confirmation == true) {
        var Clength = group.contract.length;
        for (var l = 0; l < Clength; l++) {
          var Ctitle = group.contract[l].front_title;
          for (var i = 0; i < this.current_admin_recent_contracts.length; i++) {
            if (
              this.current_admin_recent_contracts[i].contract_front_title ===
              Ctitle
            ) {
              this.current_admin_recent_contracts.splice(i, 1);
              store.commit(
                "setcurrentadminrecentcontracts",
                this.current_admin_recent_contracts
              );
              store.commit("setrecentcontractsinadmindata", [
                this.current_admin_name,
                this.current_admin_recent_contracts,
              ]);
              break;
            }
          }
        }
        var length = group.user.length;
        for (j = length; j > 0; j--) {
          store.commit("deleteuserfromgroup", [group.user[j - 1], group]);
          groups_by_specific_admin = store.getters.checkGroupByAdminName(
            this.current_admin_name
          );
          store.commit("setcurrentadmingroups", groups_by_specific_admin);
          this.current_admin_groups = store.state.current_admin_groups;
          var users_by_specific_admin = store.getters.getallByAdminName(
            this.current_admin_name
          );
          this.$store.commit("setcurrentadminusers", users_by_specific_admin);
          this.current_admin_users = store.state.current_admin_users;
        }
        store.commit("deletegroup", group);
        store.dispatch("updatewritejson");
        groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        users_by_specific_admin = store.getters.getallByAdminName(
          this.current_admin_name
        );
        this.$store.commit("setcurrentadminusers", users_by_specific_admin);
        this.current_admin_users = store.state.current_admin_users;
        store.dispatch("updatewritejson");
        dialog.showErrorBox("title here", group.group_title + " is deleted ");
        this.group_title = "";
        this.auto_users = [];
        this.auto_contracts = [];
        this.$router.push({ path: "/contracts" }).catch(() => {});
      }
    },

    createcontract() {
      var a = null;
      var i = 0;
      for (i; i < this.maincontracts.length; i++) {
        var contract_title = this.maincontracts[i];
        // var contract_version = "Version" + i;
        // var contract_panel_field = "7";
        a = store.getters.checkByContractTitle(contract_title);
        if (a.length !== 0) {
          dialog.showErrorBox("title here", "Contract title already exists");
          return;
        } else {
          store.commit("contractsavefunc", {
            title: contract_title,
            // version: contract_version,
            // panel_field: contract_panel_field,
            // front_title: contract_title+"vertrag1",
            // groupTitle: this.group_title,
          });
          store.dispatch("updatewritejson");
        }
      }
    },

    all_contract_list(x) {
      this.groupName = x;
      const value = 1;
      this.all_contracts = store.getters.getallcontracts(value);
      // var i;
      // for (i = 1; i < this.all_contracts.length; i++) {
      //   console.log(this.all_contracts[i].contract_title);
      // }
    },

    add_contract_in_group_array(x) {
      for (var i = 0; i < x.length; i++) {
        this.add_contract_in_group(x[i]);
      }
    },

    copy_creation_of_contract(contract_title, group_title) {
      let obj = this.current_admin_versions.find(
        (o) => o.contract_title === contract_title
      );
      store.commit("copycontractsavefunc", {
        title: contract_title,
        front_title: contract_title + "_vertrag_" + obj.contract_total_version,
        group_title: group_title,
        admin_name: this.current_admin_name,
      });
      obj.contract_total_version = obj.contract_total_version + 1;
      this.current_admin_versions.find((o, i) => {
        if (o.contract_title === contract_title) {
          this.current_admin_versions[i] = {
            contract_title: contract_title,
            contract_total_version: obj.contract_total_version,
          };
          return true; // stop searching
        }
      });
      store.commit("updatedversionslist", [
        this.current_admin_versions,
        this.current_admin_name,
      ]);
      var b = store.getters.findcopycontract([contract_title, group_title]);
      return b;
    },

    add_contract_in_group(x) {
      const group_title = this.groupName;
      var a = store.getters.checkByGroupName(group_title);
      // const contract_title = x;
      //var b = store.getters.findcontract(contract_title);
      // var all_contracts = store.getters.getallcontracts(value);
      if (a[0].contract.length === 0) {
        var b = this.copy_creation_of_contract(x, group_title);
        store.commit("addcontractgroupfunc", [a[0], b]);
        var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        var users_by_specific_admin = store.getters.getallByAdminName(
          this.current_admin_name
        );
        this.$store.commit("setcurrentadminusers", users_by_specific_admin);
        this.current_admin_users = store.state.current_admin_users;
        store.dispatch("updatewritejson");
        if (a[0].user.length !== 0) {
          store.commit("addcontractinallusercontractsingroup", [a[0], b]);
          groups_by_specific_admin = store.getters.checkGroupByAdminName(
            this.current_admin_name
          );
          store.commit("setcurrentadmingroups", groups_by_specific_admin);
          this.current_admin_groups = store.state.current_admin_groups;
          users_by_specific_admin = store.getters.getallByAdminName(
            this.current_admin_name
          );
          this.$store.commit("setcurrentadminusers", users_by_specific_admin);
          this.current_admin_users = store.state.current_admin_users;
          store.dispatch("updatewritejson");
        }
      } else {
        var i;
        for (i = 0; i < a[0].contract.length; i++) {
          if (a[0].contract[i].title === x) {
            dialog.showErrorBox(
              "title here",
              "Contract is already existed in this group"
            );
            // alert("Contract is already existed in this group");
            return; //break
          }
        }
        b = this.copy_creation_of_contract(x, group_title);
        store.commit("addcontractgroupfunc", [a[0], b]);
        groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        users_by_specific_admin = store.getters.getallByAdminName(
          this.current_admin_name
        );
        this.$store.commit("setcurrentadminusers", users_by_specific_admin);
        this.current_admin_users = store.state.current_admin_users;
        store.dispatch("updatewritejson");
        if (a[0].user.length !== 0) {
          store.commit("addcontractinallusercontractsingroup", [a[0], b]);
          groups_by_specific_admin = store.getters.checkGroupByAdminName(
            this.current_admin_name
          );
          store.commit("setcurrentadmingroups", groups_by_specific_admin);
          this.current_admin_groups = store.state.current_admin_groups;
          users_by_specific_admin = store.getters.getallByAdminName(
            this.current_admin_name
          );
          this.$store.commit("setcurrentadminusers", users_by_specific_admin);
          this.current_admin_users = store.state.current_admin_users;
          store.dispatch("updatewritejson");
        }
      }
      this.auto_contracts = [];
      this.$router.push({ path: "/contracts" }).catch(() => {});
      return;
    },

    delete_contract_from_group(x, y) {
      const contract_title = x;
      // var contract = store.getters.findcopycontract(contract_title);
      var group_title = y;
      var group = store.getters.findgroup(group_title);
      var confirmation = confirm(
        "Wollen Sie" +
          " " +
          contract_title +
          " " +
          "wirklich aus" +
          " " +
          group_title +
          " " +
          "entfernen?"
      );
      if (confirmation == true) {
        for (var i = 0; i < this.current_admin_recent_contracts.length; i++) {
          if (
            this.current_admin_recent_contracts[i].contract_front_title === x
          ) {
            this.current_admin_recent_contracts.splice(i, 1);
            store.commit(
              "setcurrentadminrecentcontracts",
              this.current_admin_recent_contracts
            );
            store.commit("setrecentcontractsinadmindata", [
              this.current_admin_name,
              this.current_admin_recent_contracts,
            ]);
            break;
          }
        }
        store.commit("deletecontractfromgroup2", [contract_title, group]);
        var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        var users_by_specific_admin = store.getters.getallByAdminName(
          this.current_admin_name
        );
        this.$store.commit("setcurrentadminusers", users_by_specific_admin);
        this.current_admin_users = store.state.current_admin_users;
        store.dispatch("updatewritejson");
        dialog.showErrorBox(
          "title here",
          contract_title + " is deleted from " + group.group_title
        );
        return;
      }
      this.contract_title = "";
      this.$router.push({ path: "/contracts" }).catch(() => {});
      return;
    },

    all_user_created_by_specific_admin(x) {
      var admin = "admin";
      this.groupName = x;
      this.all_users = store.getters.getallByAdminName(admin);
    },

    add_user_in_group_array(x) {
      for (var i = 0; i < x.length; i++) {
        this.add_user_in_group(x[i]);
      }
    },

    add_user_in_group(x) {
      var group_title = this.groupName;
      var a = store.getters.checkByGroupName(group_title);
      // const check_admin_name = "ingmar";
      // var b = store.getters.getallByAdminName(check_admin_name);
      var c = store.getters.finduser(x);
      if (a[0].user.length === 0) {
        store.commit("addusergroupfunc", [a[0], c]);
        store.commit("userupdatecontractgroupfunc", [a[0], c]);
        var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        var users_by_specific_admin = store.getters.getallByAdminName(
          this.current_admin_name
        );
        this.$store.commit("setcurrentadminusers", users_by_specific_admin);
        this.current_admin_users = store.state.current_admin_users;
        store.dispatch("updatewritejson");
      } else {
        var i;
        for (i = 0; i < a[0].user.length; i++) {
          if (a[0].user[i].user_name === c.user_name) {
            dialog.showErrorBox(
              "title here",
              "User is already existed in this group"
            );
            return;
            // alert("User is already existed in this group");
            // return;
          }
        }
        store.commit("addusergroupfunc", [a[0], c]);
        store.commit("userupdatecontractgroupfunc", [a[0], c]);
        groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        users_by_specific_admin = store.getters.getallByAdminName(
          this.current_admin_name
        );
        this.$store.commit("setcurrentadminusers", users_by_specific_admin);
        this.current_admin_users = store.state.current_admin_users;
        store.dispatch("updatewritejson");
      }
      this.auto_users = [];
      this.$router.push({ path: "/contracts" }).catch(() => {});
      return;
    },

    delete_user_from_group_array(x, y) {
      for (var i = 0; i < x.length; i++) {
        this.delete_user_from_group(x[i], y);
      }
    },

    delete_user_from_group(x, y) {
      const user_name = x;
      var user = store.getters.finduser(user_name);
      const group_title = y;
      var group = store.getters.findgroup(group_title);
      var confirmation = confirm(
        "Wollen Sie" +
          " " +
          user_name +
          " " +
          "wirklich aus" +
          " " +
          group_title +
          " " +
          "entfernen?"
      );
      if (confirmation == true) {
        store.commit("deleteuserfromgroup", [user, group]);
        var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        var users_by_specific_admin = store.getters.getallByAdminName(
          this.current_admin_name
        );
        this.$store.commit("setcurrentadminusers", users_by_specific_admin);
        this.current_admin_users = store.state.current_admin_users;
        store.dispatch("updatewritejson");
        dialog.showErrorBox(
          "title here",
          user.user_name + " is deleted from " + group.group_title
        );
        this.$router.push({ path: "/contracts" }).catch(() => {});
        this.auto_users = [];
        this.group_title = "";
        return;
      }
    },

    submit1(x, y) {
      this.menu1 = false;
      var a,
        b,
        c,
        i,
        j = null;
      var contractarray = new Array(),
        userarray = new Array();
      a = this.$store.getters.checkByGroupName(this.group_title);
      let checking = this.$store.getters.checkByGroupNamesArray(
        this.group_title
      );
      if (checking === true || a.length !== 0) {
        dialog.showErrorBox("title here", "Group name already exists");
        return;
      } else {
        this.$store.commit("groupnamesarray", this.group_title);
        this.$store.commit("groupsavefunc", {
          title: this.group_title,
          user: [],
          contract: [],
          admin_name: this.current_admin_name,
        });
        store.dispatch("updatewritejson");
        var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        var users_by_specific_admin = store.getters.getallByAdminName(
          this.current_admin_name
        );
        this.$store.commit("setcurrentadminusers", users_by_specific_admin);
        this.current_admin_users = store.state.current_admin_users;
        a = store.getters.checkByGroupName(this.group_title);
        for (i = 0; i < x.length; i++) {
          contractarray[i] = x[i].toString();
          b = this.copy_creation_of_contract(
            contractarray[i],
            this.group_title
          );
          this.$store.commit("addcontractgroupfunctionforall", [a[0], b]);
          groups_by_specific_admin = store.getters.checkGroupByAdminName(
            this.current_admin_name
          );
          store.commit("setcurrentadmingroups", groups_by_specific_admin);
          this.current_admin_groups = store.state.current_admin_groups;
          users_by_specific_admin = store.getters.getallByAdminName(
            this.current_admin_name
          );
          this.$store.commit("setcurrentadminusers", users_by_specific_admin);
          this.current_admin_users = store.state.current_admin_users;
          store.dispatch("updatewritejson");
        }
        for (j = 0; j < y.length; j++) {
          userarray[j] = y[j].toString();
          c = store.getters.finduser(userarray[j]);
          this.$store.commit("addusergroupfunc", [a[0], c]);
          groups_by_specific_admin = store.getters.checkGroupByAdminName(
            this.current_admin_name
          );
          store.commit("setcurrentadmingroups", groups_by_specific_admin);
          this.current_admin_groups = store.state.current_admin_groups;
          users_by_specific_admin = store.getters.getallByAdminName(
            this.current_admin_name
          );
          this.$store.commit("setcurrentadminusers", users_by_specific_admin);
          this.current_admin_users = store.state.current_admin_users;
          store.dispatch("updatewritejson");
        }
        var group_contracts = store.getters.getgroupcontracts(this.group_title);
        for (j = 0; j < y.length; j++) {
          c = store.getters.finduser(userarray[j]);
          this.$store.commit("addcontractinuserviaonetime", [
            group_contracts,
            c,
          ]);
        }
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        users_by_specific_admin = store.getters.getallByAdminName(
          this.current_admin_name
        );
        this.$store.commit("setcurrentadminusers", users_by_specific_admin);
        this.current_admin_users = store.state.current_admin_users;
        store.dispatch("updatewritejson");
      }
      this.group_title = "";
      this.auto_contracts = [];
      this.auto_users = [];
      this.$router.push({ path: "/contracts" }).catch(() => {});
      return;
    },

    adduser() {
      var i = 0;
      for (i = 1; i < 5; i++) {
        var user_name = "user" + i;
        var user_email = "user" + i + "@gmail.com";
        var admin_name = "admin";
        var a = null;
        a = store.getters.checkByUserName(user_name);
        var b = null;
        b = store.getters.checkByUserEmail(user_email);
        if (a.length !== 0) {
          dialog.showErrorBox("title here", "Username already exists");
          return;
        } else if (b.length !== 0) {
          dialog.showErrorBox("title here", "Email already exists");
          return;
        } else {
          store.commit("usersavefunc", {
            name: user_name,
            email: user_email,
            admin_name: admin_name,
          });
          store.dispatch("updatewritejson");
        }
      }
    },
  },
};
</script>

<style scoped>
.expand::-webkit-scrollbar {
  width: 5px;
}
.expand {
  overflow-y: scroll;
  scrollbar-color: #a0a0a0 transparent;
  scrollbar-width: thin;
}
.expand::-webkit-scrollbar-track {
  background: transparent;
}
.expand::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 10px;
}
.expand1::-webkit-scrollbar {
  height: 5px;
}
.expand1 {
  overflow-x: scroll;
  scrollbar-color: #a0a0a0 transparent;
  scrollbar-width: thin;
}
.expand1::-webkit-scrollbar-track {
  background: transparent;
}
.expand1::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 10px;
}
.expand2::-webkit-scrollbar {
  height: 5px;
}
.expand2 {
  overflow-x: scroll;
  scrollbar-color: #a0a0a0 transparent;
  scrollbar-width: thin;
}
.expand2::-webkit-scrollbar-track {
  background: transparent;
}
.expand2::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 10px;
}
div.sticky {
  position: -webkit-sticky !important; /* Safari */
  position: sticky !important;
  top: 8%;
}
::v-deep .v-autocomplete__content > .v-list__tile {
  height: 100px !important;
}
</style>

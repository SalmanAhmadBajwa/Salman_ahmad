<template>
  <v-main class="ma-0 pa-0">
    <v-row class="">
      <v-col cols="2">
        <p
          class="ml-1"
          style="font-family:raleway; font-size: 20px; font-weight: 700"
        >
          Papierkorb
        </p>
      </v-col>
      <v-col cols="8"> </v-col>
      <v-col cols="2" class="mt-n5">
        <v-btn
          text
          @click="recyclebin()"
          class="ml-10"
          style="text-transform: none"
        >
          Papierkorb leeren
        </v-btn>
      </v-col>
    </v-row>
    <!-- datatable for contracts -->
    <v-data-table
     v-model="selectedpapierkorb"
     @contextmenu:row="papierkorbshow($event)"
      :headers="papierkorbheaders"
      :items="papierkorbItems"
      :single-select="singleSelect"
      item-key="tagID"
      show-select
      class="elevation-0"
      :items-per-page="15"
      :footer-props="{
           'items-per-page-text':'Zeilen pro Seite'
      }"
    >
    <template v-slot:no-data>
       <p class="mt-4">Keine Elemente enthalten</p> 
    </template>
    <template v-slot:header.data-table-select="{props,on}">
      <!-- COLOR Not working when props.indeterminate is true -->
      <v-simple-checkbox :color=maincolor.theme v-ripple v-bind="props" v-on="on"></v-simple-checkbox>
    </template>
    <template v-slot:item.data-table-select="{isSelected,select}">
      <v-simple-checkbox :color=maincolor.theme v-ripple :value="isSelected" @input="select($event)"></v-simple-checkbox>
    </template>
    <!-- <template v-slot:[`item.check`]="{ item }">
          <v-simple-checkbox
            v-model="item.selectedpapierkorb"
              color="#FFA300"
          ></v-simple-checkbox>
        </template> -->
    <template v-slot:[`item.icon`]="{ item }">
       <v-btn
       v-if="item.isedited===true && item.tagP === 'contract'"
            icon
            @mouseenter="recoverItem = item"
            @mouseleave="recoverItem = null"
          >
            <v-icon v-if="recoverItem === item" color="#474747" @click="restore_contract(item)"
              >mdi-restore
            </v-icon>
            <v-icon v-else color="#474747">mdi-file-document-outline </v-icon>
          </v-btn>
          <v-btn
        v-if="item.isedited===false && item.tagP === 'contract'"
            icon
            @mouseenter="recoverItem = item"
            @mouseleave="recoverItem = null"
          >
            <v-icon v-if="recoverItem === item" color="#474747" @click="restore_contract(item)"
              >mdi-restore
            </v-icon>
            <v-icon v-else color="#474747">mdi-file-star-outline</v-icon>
          </v-btn>
           <v-btn
          v-if="item.name && item.tagP === 'user'"
            icon
            @mouseenter="recoverItem = item"
            @mouseleave="recoverItem = null"
          >
            <v-icon
              class=""
              color="#474747"
              v-if="recoverItem === item"
              @click="restore_user(item)"
              >mdi-restore
            </v-icon>
            <v-icon v-else color="#474747" class="mt-n2">mdi-account-outline</v-icon>
          </v-btn>
          <v-btn
          v-if="item.group_title && item.tagP === 'group'"
            icon
            @mouseenter="recoverItem = item"
            @mouseleave="recoverItem = null"
          >
            <v-icon
              class=""
              color="#474747"
              v-if="recoverItem === item"
              @click="restore_group(item)"
              >mdi-restore
            </v-icon>
            <v-icon v-else color="#474747" class="mt-n2">mdi-file-document-multiple-outline</v-icon>
          </v-btn>
          <v-btn
          v-if="item.name && item.tagP === 'user_from_benutzer'"
            icon
            @mouseenter="recoverItem = item"
            @mouseleave="recoverItem = null"
          >
            <v-icon
              class=""
              color="#474747"
              v-if="recoverItem === item"
              @click="restore_user_from_benutzer(item)"
              >mdi-restore
            </v-icon>
            <v-icon v-else color="#474747" class="mt-n2"> mdi-account-check-outline</v-icon>
          </v-btn>
    </template>

      <template v-slot:[`item.front_title`]="{ item }">
       
        <p
        class="mt-3"
          v-if="item.isedited===true && item.tagP === 'contract'"
        >
          {{ item.front_title  }}
        </p>
        <p
        class="mt-3"
          v-if="item.isedited===false && !item.name && item.tagP === 'contract'"
        >
          {{ item.title }}_original
        </p>
        
       
          <p
          class="mt-3"
         v-if="item.tagP === 'user'"
        >
          {{ item.name }}
        </p>
        <p
          class="mt-3"
         v-if="item.tagP === 'group'"
        >
          {{ item.group_title }}_group
        </p>
         <p
          class="mt-3"
         v-if="item.tagP === 'user_from_benutzer'"
        >
          {{ item.name}}_user
        </p>
       
      </template>
      <template v-slot:[`item.time`]="{ item }">
       <p class="mt-2" v-if="!item.name && item.tagP === 'contract'">{{item.date}} | {{item.time}}</p>
       <p class="mt-2"  v-if="item.name && item.tagP === 'user'">{{item.date}} | {{item.time}}</p>
        <p class="mt-2" v-if="item.group_title && item.tagP === 'group'">{{item.date}} | {{item.time}}</p>
       <p class="mt-2"  v-if="item.name && item.tagP === 'user_from_benutzer'">{{item.date}} | {{item.time}}</p>
      </template>
      <template v-slot:[`item.admin_name`]="{ item }">
         <p class="mt-2" v-if="!item.name">{{item.admin_name }}</p>
      </template>
      <template v-slot:[`item.group_titl`]="{ item }">
         <p style="" class="mt-2"  >{{item.group_title }}</p>
      </template>
    </v-data-table>

    <!--showmenu -->
     <v-menu
        v-model="showMenu"
        :position-x="x"
        :position-y="y"
        absolute
        offset-y
        max-width="260"
      >
      <v-card
      elevation="0"
      width="260"
      height="100"
      rounded="lg"
      >
        <v-list class="mb-n6" dense>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="menuActionpapierkorb(item.title)"
          >
           <v-list-item-icon>
             <v-icon v-text="item.icon" color="#474747"></v-icon>
             </v-list-item-icon>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-item>
        </v-list>
        </v-card>
      </v-menu>
  </v-main>
</template>

<script>
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
var fs = require("fs");
import store from "../store";
const { dialog } = require("electron").remote;
import { mapState } from "vuex";
export default {
  name: "Papierkorbadmincomponent",
  data: () => ({
     singleSelect: false,
    //  singleSelectusers: false,
    //  selectedpapiekorbusers: [],
     selectedpapierkorb: [],
    papierkorbheaders: [
      // {
      //   text: "",
      //   align: "center",
      //   value: "check",
      // },
      {
        text: "",
        align: "center",
        value: "icon",
      },
      {
        text: "Objekt | Kunde",
        value: "front_title",
        class: '#5C5C5C--text subtitle-1 font-weight-bold'
      },
      {
        text: "Gelöscht | Zeitpunkt",
        value: "time",
        class: '#5C5C5C--text subtitle-1 font-weight-bold'
      },
      {
        text: "Bearbeiter",
        value: "admin_name",
        class: '#5C5C5C--text subtitle-1 font-weight-bold'
      },
      {
        text: "Arbeitsbereich",
        value: "group_title",
        class: '#5C5C5C--text subtitle-1 font-weight-bold'
      },
    ],
    showMenu: false,
    x: 0,
    y: 0,
    items: [
      { title: "Wiederherstellen", icon: "mdi-restore" },
      { title: "Unwiderruflich löschen", icon: "mdi-delete-outline" },
    ],
    auto_users: [],
    group_title: "",
    checked: true,
    auto_contracts: [],
    admincard: [],
    admincardheading: "",
    dialog2: false,
    dialog3: false,
    dialog4: false,
    all_users: [],
    groupName: "",
    menu1: false,
    menu2: false,
    menu3: false,
    admincarditems: [],
    midcardtext: [],
    all_contracts: [],
    isAdmin: false,
    is_superuser: false,
    contract_list_of_user: [],
    current_admin_name: "",
    current_admin_groups: [],
    current_admin_versions: [],
    current_admin_recent_contracts: [],
    current_user_recent_contracts: [],
    current_admin_users: [],
    current_admin_deleted_data: [],
    papierkorbItems:[],
    maincontracts: [
      "amazon",
      "shopify",
      "ebay",
      "consent",
      "consent1",
      "consentV",
    ],
    recoverItem: null,
  }),
  //COMPUTED
  computed: {
    ...mapState([
      "deleted",
      "zuletztbearbeitetadmin",
      "Arbeitsbereicheadmin",
      "Benutzeradmin",
      "Papierkorbadmin",
      "Dashboardadmin",
      "grid",
      // "list",
      "maincolor",
      "Zuletztbearbeitetuser",
      "Furmichfreigegebenuser",
      "Papierkorbuser",
    ]),
    rules() {
      return [
        this.selected.length > 0 || "At least one item should be selected",
      ];
    },
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
      // this.list = store.state.list;
      // this.grid = store.state.grid;
      this.current_admin_name = store.state.current_admin_name;
      this.read_data_for_admin(this.current_admin_name);
      this.current_admin_versions = store.state.current_admin_versions;
      this.current_admin_recent_contracts =
        store.state.current_admin_recent_contracts;
      this.current_admin_groups = store.state.current_admin_groups;
      this.current_admin_users = store.state.current_admin_users;
      this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      //this.enlistedAllPapierkorbItems();
      this.papierkorbItems = this.deleted;
      // let val = JSON.parse(
      //   localStorage.getItem("contracts of " + this.current_admin_name)
      // );
      // this.contractchecking = Object.keys(val);
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
    enlistedAllPapierkorbItems(){
      var itemsP = [];
      for(var i=0;i<this.current_admin_deleted_data.contract.length;i++){
        var obj = {};
        obj = this.current_admin_deleted_data.contract[i];
        obj.tagP = "contract";
        obj.tagID = "contract" + obj.id;
        itemsP.push(obj);
      }
      for(var j=0;j<this.current_admin_deleted_data.user.length;j++){
        var obj1 = {};
        obj1 = this.current_admin_deleted_data.user[j];
        obj1.tagP = "user" ;
        obj1.tagID = "user"+obj1.id;
        itemsP.push(obj1);
      }
      for(var k=0;k<this.current_admin_deleted_data.group.length;k++){
        var obj2 = {}
        obj2 = this.current_admin_deleted_data.group[k];
        obj2.tagP = "group" ;
        obj2.tagID = "group"+obj2.group_id;
        itemsP.push(obj2);
      }
      for(var l=0;l<this.current_admin_deleted_data.user_from_benutzer.length;l++){
        var obj3 = {}
        obj3 = this.current_admin_deleted_data.user_from_benutzer[l];
        obj3.tagP = "user_from_benutzer" ;
        obj3.tagID = "user_from_benutzer"+obj3.id;
        itemsP.push(obj3);
      }
      this.papierkorbItems = itemsP;
    },
     menuActionpapierkorb(x) {
        for(var i=0;i<this.selectedpapierkorb.length;i++){
            if (x === "Wiederherstellen") {
              if(this.selectedpapierkorb[i].tagP === 'contract'){
                this.restore_contract(this.selectedpapierkorb[i]);
              }
              else if(this.selectedpapierkorb[i].tagP === 'user'){
                this.restore_user(this.selectedpapierkorb[i]);
              }
              else if(this.selectedpapierkorb[i].tagP === 'group'){
                this.restore_group(this.selectedpapierkorb[i]);
              }
              else if(this.selectedpapierkorb[i].tagP === 'user_from_benutzer'){
                this.restore_user_from_benutzer(this.selectedpapierkorb[i]);
              }
            } else if (x === "Unwiderruflich löschen") {
              if(this.selectedpapierkorb[i].tagP === 'contract'){
                this.deleteforever_contract(this.selectedpapierkorb[i]);
              }
              else if(this.selectedpapierkorb[i].tagP === 'user'){
                this.deleteforever_user(this.selectedpapierkorb[i]);
              }
               else if(this.selectedpapierkorb[i].tagP === 'group'){
                this.deleteforever_group(this.selectedpapierkorb[i]);
              }
              else if(this.selectedpapierkorb[i].tagP === 'user_from_benutzer'){
                this.deleteforever_user_from_benutzer(this.selectedpapierkorb[i]);
              }
            }
       }
    },
    papierkorbshow(e) {  
      if(this.selectedpapierkorb.length!==0){
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
      }
    },
     async recyclebintest() {
      let options = {
        buttons: ["Nein", "Ja"],
        message: "Sollen die ausgewählten Inhalte unwiderruflich gelöscht werden?",
      };
      let response1 = await dialog.showMessageBox(options);
      return response1.response;
    },
    recyclebin() {
      var confirm = this.recyclebintest();
      confirm.then(() => {
        this.$store.commit("deletealldata");
        this.papierkorbItems = this.deleted;
        store.dispatch("updatewritejson");
        // this.delete_all_contract();
        // this.delete_all_user();
        // this.delete_all_group();
        // this.delete_all_user_from_benutzer();
      });
    },
    delete_all_group(){
      var len = this.current_admin_deleted_data.group.length;
        for (var i = len; i >= 0; i--) {
          this.current_admin_deleted_data.group.splice(i, 1);
        }
        var deleted_by_specific_admin = store.getters.checkByName(
          this.current_admin_name
        );
        this.$store.commit(
          "setcurrentadmindeleted",
          deleted_by_specific_admin[0].deleted_data
        );
        store.dispatch("updatewritejson");
        this.current_admin_deleted_data = store.state.current_admin_deleted_data;
        this.enlistedAllPapierkorbItems();
    },
    delete_all_contract(){
      var len = this.current_admin_deleted_data.contract.length;
        for (var i = len; i >= 0; i--) {
          this.current_admin_deleted_data.contract.splice(i, 1);
        }
        var deleted_by_specific_admin = store.getters.checkByName(
          this.current_admin_name
        );
        this.$store.commit(
          "setcurrentadmindeleted",
          deleted_by_specific_admin[0].deleted_data
        );
        store.dispatch("updatewritejson");
        this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      this.enlistedAllPapierkorbItems();
    },
    delete_all_user(){
      var len = this.current_admin_deleted_data.user.length;
        for (var i = len; i >= 0; i--) {
          this.current_admin_deleted_data.user.splice(i, 1);
        }
        var deleted_by_specific_admin = store.getters.checkByName(
          this.current_admin_name
        );
        this.$store.commit(
          "setcurrentadmindeleted",
          deleted_by_specific_admin[0].deleted_data
        );
        store.dispatch("updatewritejson");
        this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      this.enlistedAllPapierkorbItems();
    },
    delete_all_user_from_benutzer(){
      var len = this.current_admin_deleted_data.user_from_benutzer.length;
        for (var i = len; i >= 0; i--) {
          this.current_admin_deleted_data.user_from_benutzer.splice(i, 1);
        }
        var deleted_by_specific_admin = store.getters.checkByName(
          this.current_admin_name
        );
        this.$store.commit(
          "setcurrentadmindeleted",
          deleted_by_specific_admin[0].deleted_data
        );
        store.dispatch("updatewritejson");
        this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      this.enlistedAllPapierkorbItems();
    },
// restoreadmin(x) {
//       if (x.user_name !== undefined) {
//         this.restore_user(x);
//       } else if (x.title !== undefined) {
//         this.restore_contract(x);
//       }
//     },

    deleteforever_group(x) {
      store.commit("deletespecifcdata", x.tagID);
      this.papierkorbItems = this.deleted;
      store.dispatch("updatewritejson");
      // let len = this.current_admin_deleted_data.group.length;
      // for (var j = len - 1; j >= 0; j--) {
      //   if (
      //     this.current_admin_deleted_data.group[j].group_title === x.group_title
      //   ) {
      //     this.current_admin_deleted_data.group.splice(j, 1);
      //   }
      // }
      // var deleted_by_specific_admin = store.getters.checkByName(
      //   this.current_admin_name
      // );
      // this.$store.commit(
      //   "setcurrentadmindeleted",
      //   deleted_by_specific_admin[0].deleted_data
      // );
      // store.dispatch("updatewritejson");
      // this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      // this.enlistedAllPapierkorbItems();
    },
    deleteforever_user(x) {
      store.commit("deletespecifcdata", x.tagID);
      this.papierkorbItems = this.deleted;
      store.dispatch("updatewritejson");
      // let len = this.current_admin_deleted_data.user.length;
      // for (var j = len - 1; j >= 0; j--) {
      //   if (
      //     this.current_admin_deleted_data.user[j].name === x.name &&
      //     this.current_admin_deleted_data.user[j].group_title === x.group_title
      //   ) {
      //     this.current_admin_deleted_data.user.splice(j, 1);
      //   }
      // }
      // var deleted_by_specific_admin = store.getters.checkByName(
      //   this.current_admin_name
      // );
      // this.$store.commit(
      //   "setcurrentadmindeleted",
      //   deleted_by_specific_admin[0].deleted_data
      // );
      // store.dispatch("updatewritejson");
      // this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      // this.enlistedAllPapierkorbItems();
    },
    deleteforever_contract(x) {
      store.commit("deletespecifcdata", x.tagID);
      this.papierkorbItems = this.deleted;
      store.dispatch("updatewritejson");
      // let len = this.current_admin_deleted_data.contract.length;
      // for (var j = len - 1; j >= 0; j--) {
      //   if (
      //     this.current_admin_deleted_data.contract[j].front_title ===
      //     x.front_title
      //   ) {
      //     this.current_admin_deleted_data.contract.splice(j, 1);
      //   }
      // }
      // var deleted_by_specific_admin = store.getters.checkByName(
      //   this.current_admin_name
      // );
      // this.$store.commit(
      //   "setcurrentadmindeleted",
      //   deleted_by_specific_admin[0].deleted_data
      // );
      // store.dispatch("updatewritejson");
      // this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      // this.enlistedAllPapierkorbItems();
    },
    deleteforever_user_from_benutzer(x) {
      store.commit("deletespecifcdata", x.tagID);
      this.papierkorbItems = this.deleted;
      store.dispatch("updatewritejson");
      // let len = this.current_admin_deleted_data.user_from_benutzer.length;
      // for (var j = len - 1; j >= 0; j--) {
      //   if (
      //     this.current_admin_deleted_data.user_from_benutzer[j].name === x.name
      //   ) {
      //     this.current_admin_deleted_data.user_from_benutzer.splice(j, 1);
      //   }
      // }
      // var deleted_by_specific_admin = store.getters.checkByName(
      //   this.current_admin_name
      // );
      // this.$store.commit(
      //   "setcurrentadmindeleted",
      //   deleted_by_specific_admin[0].deleted_data
      // );
      // store.dispatch("updatewritejson");
      // this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      // this.enlistedAllPapierkorbItems();
    },
    restore_user(user) {
      //new 
      var group = store.getters.findgroupbyid(user.group_id)
      if (group.length !== 0){
        var obj = group.user.find((o) => o === user.id);
        if (obj === undefined) {
          this.$store.commit("addusergroupfunc", [group.group_id, user.id]);
          this.$store.commit("addcontractsinusergroupfunc", [
            group.contract,
            user.id,
            group.group_id
          ])
        store.commit("deletespecifcdata", user.tagID);
        this.papierkorbItems = this.deleted;
        store.dispatch("updatewritejson");
        }
        // store.commit("copycontractsavefuncrestore", JSON.parse(JSON.stringify(contract)));
        // this.$store.commit("addcontractgroupfunctionforall", [group.group_id,contract.id]);
        // var len = group.user.length;
        // for (var i = 0; i < len; i++) {
        //   this.$store.commit("addcontractsinusergroupfunc", [contract.id,group.user[i]]);
        // }
        // store.commit("deletespecifcdata", contract.tagID);
        // this.papierkorbItems = this.deleted;
        // store.dispatch("updatewritejson");
      }
      //old one 
      // var group = store.getters.findgroup(copy_user.group_title);
      // if (group === undefined) {
      //   // dialog.showErrorBox("Keine Gruppe gefunden");
      // } else if (group.length !== 0) {
      //   for (var i = 0; i < group.user.length; i++) {
          
      //     if (group.user[i].name === copy_user.name) {
            
      //       return;
      //     }
      //   }
      //   var user = store.getters.finduser(copy_user.name)
      //   store.commit("addusergroupfunc", [group, user]);
      //   store.commit("userupdatecontractgroupfunc", [group, user]);
      //   let groups_by_specific_admin = store.getters.checkGroupByAdminName(
      //     this.current_admin_name
      //   );
      //   store.commit("setcurrentadmingroups", groups_by_specific_admin);
      //   this.current_admin_groups = store.state.current_admin_groups;
      //   var users_by_specific_admin = store.getters.getallusers();
      //   this.current_admin_users = users_by_specific_admin;
      //   this.$store.commit("setcurrentadminusers",users_by_specific_admin);
      //   let len = this.current_admin_deleted_data.user.length - 1;
      //   for (var j = len; j >= 0; j--) {
      //     if (
      //       this.current_admin_deleted_data.user[j].name === copy_user.name &&
      //       this.current_admin_deleted_data.user[j].group_title === copy_user.group_title
      //     ) {
      //       this.current_admin_deleted_data.user.splice(j, 1);
      //     }
      //   }
      //   var deleted_by_specific_admin = store.getters.checkByName(
      //     this.current_admin_name
      //   );
      //   this.$store.commit(
      //     "setcurrentadmindeleted",
      //     deleted_by_specific_admin[0].deleted_data
      //   );
      //   store.dispatch("updatewritejson");
      // }
      // this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      // this.enlistedAllPapierkorbItems();
    },
    restore_contract(contract) {
      var group = store.getters.findgroupbyid(contract.group_id)
      if (group.length !== 0){
        store.commit("copycontractsavefuncrestore", JSON.parse(JSON.stringify(contract)));
        this.$store.commit("addcontractgroupfunctionforall", [group.group_id,contract.id]);
        var len = group.user.length;
        for (var i = 0; i < len; i++) {
          this.$store.commit("addcontractsinusergroupfunc", [contract.id,group.user[i],group.group_id]);
        }
        store.commit("deletespecifcdata", contract.tagID);
        this.papierkorbItems = this.deleted;
        store.dispatch("updatewritejson");
      }


      //old one
    //   var group = store.getters.findgroup(contract.group_title);
    //   if (group === undefined) {
    //     // dialog.showErrorBox("Keine Gruppe gefunden");
    //   } else if (group.length !== 0) {
    //     for (var i = 0; i < group.contract.length; i++) 
    //       if (
    //         group.contract[i].title ===
    //         contract.title
    //       ) {
    //         // dialog.showErrorBox(
    //         //  "Benutzer ist bereits hinzugefügt, Sie können diesen Benutzer nicht wieder hinzufügen"
    //         // );
    //         return;
    //       }
    //     }
    //     var d1 = new Date();
    //     var datetime = d1.toLocaleString("de-DE");
    //     const [date, time_ws] = datetime.split(",");
    //     var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
    //     contract.date = date;
    //     contract.time = time;
    //     store.commit("addcontractgroupfunc", [group, contract]);
    //     if (group.user.length !== 0) {
    //       store.commit("addcontractinallusercontractsingroup", [
    //         group,
    //         contract,
    //       ]);
    //     }
    //     let groups_by_specific_admin = store.getters.checkGroupByAdminName(
    //       this.current_admin_name
    //     );
    //     store.commit("setcurrentadmingroups", groups_by_specific_admin);
    //     this.current_admin_groups = store.state.current_admin_groups;
    //     var users_by_specific_admin = store.getters.getallusers();
    //     this.current_admin_users = users_by_specific_admin;
    //     this.$store.commit("setcurrentadminusers",users_by_specific_admin);
    //     for (var j = 0; j < this.current_admin_deleted_data.contract.length; j++) {
    //       //console.log(this.current_admin_deleted_data[i].front_title)
    //       if (
    //         this.current_admin_deleted_data.contract[j].front_title ===
    //         contract.front_title
    //       ) {
    //         this.current_admin_deleted_data.contract.splice(j, 1);
    //       }
    //     }
    //     var deleted_by_specific_admin = store.getters.checkByName(
    //       this.current_admin_name
    //     );
    //     this.$store.commit(
    //       "setcurrentadmindeleted",
    //       deleted_by_specific_admin[0].deleted_data
    //     );
    //     store.dispatch("updatewritejson");
    //   }
    //   this.current_admin_deleted_data = store.state.current_admin_deleted_data;
    //   this.enlistedAllPapierkorbItems();
    },
    restore_group(group){
      //new
      store.commit('groupsavefuncrestore',group)
      var lenC = group.contracts_deleted_data.length
      for(var i=0; i< lenC ;i++){
        store.commit("copycontractsavefuncrestore", JSON.parse(JSON.stringify(group.contracts_deleted_data[i])));
      }
      var lenU = group.user.length
      for(i=0; i< lenU ;i++){  
        var obj = store.getters.finduserbyid(group.user[i])
        if (obj !== undefined) {
          this.$store.commit("addcontractsinusergroupfunc", [group.contract,group.user[i],group.group_id])
        }
      }
      store.commit("deletespecifcdata", group.tagID);
      this.papierkorbItems = this.deleted;
      store.dispatch("updatewritejson");
      //old
      // // console.log(group)
      // store.commit('restoregroup',group)
      //  let groups_by_specific_admin = store.getters.(
      //     this.current_admin_name
      //   );
      //   store.commit("setcurrentadmingroups", groups_by_specific_admin);
      //   this.current_admin_groups = store.state.current_admin_groups;
      //   var users_by_specific_admin = store.getters.getallusers();
      //   this.current_admin_users = users_by_specific_admin;
      //   this.$store.commit("setcurrentadminusers",users_by_specific_admin);
      // for (var j = 0; j < this.current_admin_deleted_data.group.length; j++) {
      //     if (
      //       this.current_admin_deleted_data.group[j].group_title ===
      //       group.group_title
      //     ) {
      //       this.current_admin_deleted_data.group.splice(j, 1);
      //     }
      //   }
      //   var deleted_by_specific_admin = store.getters.checkByName(
      //     this.current_admin_name
      //   );
      //   this.$store.commit(
      //     "setcurrentadmindeleted",
      //     deleted_by_specific_admin[0].deleted_data
      //   );
      //   this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      //   this.enlistedAllPapierkorbItems();
       
      //   store.dispatch("updatewritejson");
    },
    restore_user_from_benutzer(user){
      
      store.commit('adminsavefuncrestore', user)
      store.commit("deletespecifcdata", user.tagID);
      this.papierkorbItems = this.deleted;
      store.dispatch("updatewritejson");
      //old
      // console.log(user)
      // store.commit('restoreuserfrombenutzer',user)
      // for (var j = 0; j < this.current_admin_deleted_data.user_from_benutzer.length; j++) {
      //     if (
      //       this.current_admin_deleted_data.user_from_benutzer[j].id ===
      //       user.id
      //     ) {
      //       this.current_admin_deleted_data.user_from_benutzer.splice(j, 1);
      //     }
      //   }
      //   var deleted_by_specific_admin = store.getters.checkByName(
      //     this.current_admin_name
      //   );
      //   this.$store.commit(
      //     "setcurrentadmindeleted",
      //     deleted_by_specific_admin[0].deleted_data
      //   );
      //   this.current_admin_deleted_data = store.state.current_admin_deleted_data;
      //   this.enlistedAllPapierkorbItems();
      //   var users_by_specific_admin = store.getters.getallusers();
      //   this.current_admin_users = users_by_specific_admin;
      //   this.$store.commit("setcurrentadminusers",users_by_specific_admin);
      //   store.dispatch("updatewritejson");
      //   if(this.is_superuser === true){
      //     var user_and_admin = store.getters.getallusersandadmins();
      //     this.$store.commit("set_user_and_admin",user_and_admin);
      //     //this.super_user_data = user_and_admin;
      //   }
    },
    //  restoreadmin(x,y,z){
    //    console.log(x);
    //  },
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
        fs.readFile("./" + user_name + "- u.json", "utf-8", function (err, data) {
          if (err) {
            console.log(err);
          }
          const decryptedString = cryptr.decrypt(data);
          localStorage.setItem("contracts of " + user_name, decryptedString);
        });
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
        this.$router.push({ path: "/amazon" }).catch(()=>{});
      } else if (x === "shopify") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/shopify" }).catch(()=>{});
      } else if (x === "ebay") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/ebay" }).catch(()=>{});
      } else if (x === "consent") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/consent" }).catch(()=>{});
      } else if (x === "consent1") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/consent1" }).catch(()=>{});
      } else if (x === "consentV") {
        localStorage.setItem("current_contract_title", x);
        this.$router.push({ path: "/consentV" }).catch(()=>{});
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
      var confirmation = confirm("Are you sure?");
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
        }
        store.commit("deletegroup", group);
        store.dispatch("updatewritejson");
        groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        store.dispatch("updatewritejson");
        dialog.showErrorBox("title here", group.group_title + " is deleted ");
        this.group_title = "";
        this.auto_users = [];
        this.auto_contracts = [];
        this.$router.push({ path: "/contracts" }).catch(()=>{});
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
        store.dispatch("updatewritejson");
        if (a[0].user.length !== 0) {
          store.commit("addcontractinallusercontractsingroup", [a[0], b]);
          groups_by_specific_admin = store.getters.checkGroupByAdminName(
            this.current_admin_name
          );
          store.commit("setcurrentadmingroups", groups_by_specific_admin);
          this.current_admin_groups = store.state.current_admin_groups;
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
        store.dispatch("updatewritejson");
        if (a[0].user.length !== 0) {
          store.commit("addcontractinallusercontractsingroup", [a[0], b]);
          groups_by_specific_admin = store.getters.checkGroupByAdminName(
            this.current_admin_name
          );
          store.commit("setcurrentadmingroups", groups_by_specific_admin);
          this.current_admin_groups = store.state.current_admin_groups;
          store.dispatch("updatewritejson");
        }
      }
      this.auto_contracts = [];
      this.$router.push({ path: "/contracts" }).catch(()=>{});
      return;
    },

    delete_contract_from_group(x, y) {
      const contract_title = x;
      // var contract = store.getters.findcopycontract(contract_title);
      var group_title = y;
      var group = store.getters.findgroup(group_title);
      var confirmation = confirm("Are you sure?");
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
        store.dispatch("updatewritejson");
        dialog.showErrorBox(
          "title here",
          contract_title + " is deleted from " + group.group_title
        );
        return;
      }
      this.contract_title = "";
      this.$router.push({ path: "/contracts" }).catch(()=>{});
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
        store.dispatch("updatewritejson");
      }
      this.auto_users = [];
      this.$router.push({ path: "/contracts" }).catch(()=>{});
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
      var confirmation = confirm("Are you sure?");
      if (confirmation == true) {
        store.commit("deleteuserfromgroup", [user, group]);
        var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        store.dispatch("updatewritejson");
        dialog.showErrorBox(
          "title here",
          user.user_name + " is deleted from " + group.group_title
        );
        this.$router.push({ path: "/contracts" }).catch(()=>{});
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
        store.dispatch("updatewritejson");
      }
      this.group_title = "";
      this.auto_contracts = [];
      this.auto_users = [];
      this.$router.push({ path: "/contracts" }).catch(()=>{});
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

<style scoped lang="scss" >
@import url("https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700,800,900%22");
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
// tbody {
//      tr:hover {
//         background-color: yellow !important;
//      }
//   }
//   .v-table tr:hover:not(.v-table__expanded__content) {
//   color: yellow !important;
// }
// .theme--light.v-data-table
//   tbody
//   tr:hover:not(.v-data-table__expanded__content) {
//   background: yellow;
// }
// .v-data-table td:hover(.v-table__expanded__content) {
//   background-color: yellow !important;
// }


</style>

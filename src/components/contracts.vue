<!-- @format -->

<template>
    <v-main class="">
      <!-- <v-app-bar fixed dense elevation="0" class="mt-7"  color="transparent" >
        <v-spacer></v-spacer>
        <div  style="text-align:right;" class="mt-7">
          
            <v-btn icon @click="listf()" class="">
              <v-icon size="28"> mdi-view-list </v-icon>
            </v-btn>
            <v-btn icon @click="gridf()" class="mr-4">
              <v-icon size="28"> mdi-apps </v-icon>
            </v-btn>
          </div>
      </v-app-bar> -->
     
         <v-row class="ml-1 mt-14 " >
         
        <v-col cols="12" class="" style="" >
          <!-- dashboard for admin -->
          <div   v-if="isAdmin && Dashboardadmin">
            <dashboardadmincomponent ></dashboardadmincomponent>
          </div>
          <!-- recent contract of admin -->
        <div v-if="isAdmin && zuletztbearbeitetadmin">
          <zuletztbearbeitetadmincomponent></zuletztbearbeitetadmincomponent>
          </div>
                
          <!-- this for admin benutzer -->
          <div v-if="isAdmin && Benutzeradmin && !is_superuser" class="">
          <benutzeradmincomponent></benutzeradmincomponent>
          </div>
          <div v-if="isAdmin && Benutzeradmin && is_superuser" class="">
          <benutzersuperusercomponent></benutzersuperusercomponent>
          </div>

           <!-- this for admin Papierkorb -->
           <div v-if="isAdmin && Papierkorbadmin " class="">
           <papierkorbadmincomponent></papierkorbadmincomponent>
          </div>

          <!-- this is for admin and its Arbeitsberiech -->
          <div v-if="isAdmin && Arbeitsbereicheadmin" class="mt-2">
        <arbeitsbereicheadmincomponent></arbeitsbereicheadmincomponent>
          </div>


              <!-- section  for user  -->
              <!-- this is for user and Furmichfreigegebenuser -->
          <div v-if="!isAdmin && Furmichfreigegebenuser" class="mt-5">
          <furmichfreigegebenusercomponent></furmichfreigegebenusercomponent>
          </div>
        
          <!-- recent file for users-->
                  <div v-if="!isAdmin && Zuletztbearbeitetuser">
             <zuletztbearbeitetusercomponent></zuletztbearbeitetusercomponent>
          </div>
          
          <!-- this is for popikorbuser-->
                  <div v-if="!isAdmin && Papierkorbuser">
             <papierkorbusercomponent></papierkorbusercomponent>
          </div>
           <div v-if="!isAdmin && Dashboarduser">
             <dashboardusercomponent></dashboardusercomponent>
          </div>
        </v-col>
      </v-row>
         <sidenavigationbar_admin v-if="isAdmin && side_navigation_bar" ></sidenavigationbar_admin>
          <sidenavigationbar_user v-if="!isAdmin && side_navigation_bar"></sidenavigationbar_user>
    </v-main>
</template>
<script>
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var fs = require("fs");
import store from "../store";
const { dialog  } = require("electron").remote;
import { mapState } from 'vuex';
import sidenavigationbar_admin from "../components/sidenavigationbar_admin";
import sidenavigationbar_user from "../components/sidenavigationbar_user";
import dashboardadmincomponent from "../components/dashboardadmincomponent";
import dashboardusercomponent from "../components/dashboardusercomponent";
import zuletztbearbeitetadmincomponent from "../components/zuletztbearbeitetadmincomponent";
import benutzeradmincomponent from "../components/Benutzeradmincomponent";
import benutzersuperusercomponent from "../components/Benutzersuperusercomponent";
import papierkorbadmincomponent from "../components/Papierkorbadmincomponent";
import papierkorbusercomponent from "../components/Papierkorbusercomponent";
import arbeitsbereicheadmincomponent from "../components/Arbeitsbereicheadmincomponent";
import furmichfreigegebenusercomponent from "../components/Furmichfreigegebenusercomponent";
import zuletztbearbeitetusercomponent from "../components/Zuletztbearbeitetusercomponent"

export default {
  name: "contracts",
  components: {
    sidenavigationbar_admin,
     sidenavigationbar_user,
     dashboardadmincomponent,
     dashboardusercomponent,
     zuletztbearbeitetadmincomponent,
     benutzeradmincomponent,
     papierkorbadmincomponent,
     arbeitsbereicheadmincomponent,
     furmichfreigegebenusercomponent,
     zuletztbearbeitetusercomponent,
     papierkorbusercomponent,
     benutzersuperusercomponent,
  },
  data: () => ({
  }),
  //COMPUTED
  computed: {
     ...mapState(["zuletztbearbeitetadmin","Arbeitsbereicheadmin","Benutzeradmin","side_navigation_bar",
     "Papierkorbadmin","Dashboardadmin","Dashboarduser","Zuletztbearbeitetuser",
     "Furmichfreigegebenuser","Papierkorbuser","isAdmin","is_superuser"]),
    rules() {
      return [
        this.selected.length > 0 || "At least one item should be selected",
      ];
    },
  },
  //updated
  updated() {
  
  },
  //mounted
   mounted() {
     console.log("ssssssss")
  //   this.isAdmin = store.state.isAdmin;
  //   this.all_users = store.state.user;
  //   this.all_contracts = store.state.contract;
  //   this.is_superuser = store.state.is_superuser;
  //   if(this.isAdmin === true){
  //     this.current_admin_name = store.state.current_admin_name;
  //     this.read_data_for_admin(this.current_admin_name)
  //     this.current_admin_versions = store.state.current_admin_versions;
  //     this.current_admin_recent_contracts = store.state.current_admin_recent_contracts;
  //     this.current_admin_groups = store.state.current_admin_groups;
  //     this.current_admin_users = store.state.current_admin_users;
  //     let val = JSON.parse(
  //       localStorage.getItem("contracts of " + this.current_admin_name)
  //     );
  //     this.contractchecking = Object.keys(val);
  //     //this.admincard = store.state.group;
  //   }
  //   else{
  //     this.current_user_name = store.state.current_user_name;
  //     this.read_data_for_user(this.current_user_name)
  //     this.current_user_recent_contracts = store.state.current_user_recent_contracts
  //     this.contract_list_of_user = store.state.contract_list_of_user;
  //   }
  },
  //methods
  methods: {

    read_data_for_admin(admin_name){
      fs.readFile('./'+ admin_name +'.json', 'utf-8', function(err, data) {
      if(err){console.log(err)}
      const decryptedString = cryptr.decrypt(data);
      localStorage.setItem("contracts of " + admin_name,decryptedString )
    });
    },

    read_data_for_user(user_name){
      fs.readFile('./'+ user_name + '- u.json', 'utf-8', function(err, data) {
      if(err){console.log(err)}
      const decryptedString = cryptr.decrypt(data);
      localStorage.setItem("contracts of " + user_name,decryptedString )
    });
    },

    currentusercontracts(x,y,z){
       //x : copy_contract_title
      //y : copy_contract_group_title
      //z : copy_contract_front_title
      for(var i=0;i<this.current_user_recent_contracts.length ; i++){
        if(this.current_user_recent_contracts[i].contract_front_title === z){
          var c = this.current_user_recent_contracts[i]
          this.current_user_recent_contracts.splice(i, 1);
          this.current_user_recent_contracts.unshift(c);
          store.commit("setcurrentuserrecentcontracts",this.current_user_recent_contracts);
          store.commit(
        "setrecentcontractsinuserdata",[
        this.current_user_name,
        this.current_user_recent_contracts
        ]);
          this.route_path(x,y,z)
          return true
        }
      }
      var obj = {
        contract_title: "",
        contract_url: "",
        group_title:"",
        contract_front_title: "",
      };
      obj.contract_title = x;
       obj.group_title = y ;
      obj.contract_front_title = z;
      obj.contract_url =
        "./assets/"+ z + "-" + y + "-" + this.current_user_name + "- u.png"
      if (this.current_user_recent_contracts.length === 5) {
        this.current_user_recent_contracts.pop();
        store.commit(
          "setcurrentuserrecentcontracts",
          this.current_user_recent_contracts
        );
        store.commit(
        "setrecentcontractsinuserdata",[
        this.current_user_name,
        this.current_user_recent_contracts
        ]);
      }
      this.current_user_recent_contracts.unshift(obj);
      store.commit(
        "setcurrentuserrecentcontracts",
        this.current_user_recent_contracts
      );
      store.commit(
        "setrecentcontractsinuserdata",[
        this.current_user_name,
        this.current_user_recent_contracts
        ]);
       this.route_path(x,y,z);
    },

    currentadmincontracts(x,y,z) {
      //x : copy_contract_title
      //y : group_title
      //z : copy_contract_front_title
     // alert(y);
     for(var i=0;i<this.current_admin_recent_contracts.length ; i++){
        if(this.current_admin_recent_contracts[i].contract_front_title === z){
          var c = this.current_admin_recent_contracts[i]
          this.current_admin_recent_contracts.splice(i, 1);
          this.current_admin_recent_contracts.unshift(c);
          store.commit("setcurrentadminrecentcontracts",this.current_admin_recent_contracts);
          store.commit("setrecentcontractsinadmindata",[this.current_admin_name,this.current_admin_recent_contracts])
          this.route_path(x,y,z);
          return true
        }
      }
      var obj = {
        contract_title: "",
        contract_url: "",
        group_title:"",
        contract_front_title: "",
      };
      obj.contract_title = x;
      obj.group_title = y ;
      obj.contract_front_title = z;
      obj.contract_url =
        "./assets/" + z + "-" + y + "-" + this.current_admin_name + ".png";
      if (this.current_admin_recent_contracts.length === 5) {
        this.current_admin_recent_contracts.pop();
        store.commit(
          "setcurrentadminrecentcontracts",
          this.current_admin_recent_contracts
        );
        store.commit("setrecentcontractsinadmindata",[this.current_admin_name,this.current_admin_recent_contracts])

      }
      this.current_admin_recent_contracts.unshift(obj);
      store.commit(
        "setcurrentadminrecentcontracts",
        this.current_admin_recent_contracts
      );
      store.commit("setrecentcontractsinadmindata",[this.current_admin_name,this.current_admin_recent_contracts])
       this.route_path(x,y,z);
    },

    recentcontractforadmin(x,y,z) {
      //x:contract_title
      //y:group_title
      //z:contract_front_title
      // alert(x);
      // alert(y);
       this.route_path(x,y,z);
    },
    route_path(x,y,z){
      // x -> contract_title
      // y -> contract_group_title
      //z -> contract_front_title
      if (x === "amazon") {
            localStorage.setItem("current_contract_group_title", y);
            localStorage.setItem("current_contract_title", z);
            this.$router.push({ path: "/amazon" }).catch(()=>{});
          } else if (x === "shopify") {
            localStorage.setItem("current_contract_group_title", y);
            localStorage.setItem("current_contract_title", z);
            this.$router.push({ path: "/shopify" }).catch(()=>{});
          } else if (x === "ebay") {
            localStorage.setItem("current_contract_group_title", y);
            localStorage.setItem("current_contract_title", z);
            this.$router.push({ path: "/ebay" }).catch(()=>{});
         } else if (x === "consent") {
            localStorage.setItem("current_contract_group_title", y);
            localStorage.setItem("current_contract_title", z);
            this.$router.push({ path: "/consent" }).catch(()=>{});
          } else if (x === "consent1") {
            localStorage.setItem("current_contract_group_title", y);
            localStorage.setItem("current_contract_title", z);
            this.$router.push({ path: "/consent1" }).catch(()=>{});
          } else if (x === "consentV") {
            localStorage.setItem("current_contract_group_title", y);
            localStorage.setItem("current_contract_title", z);
            this.$router.push({ path: "/consentV" }).catch(()=>{});
          }
    },

      recentcontractforuser(x,y,z) {
      //x:contract_title
      //y:group_title
      //z:contract_front_title
      // alert(x);
      //  alert(y);
      //   alert(z);
        this.route_path(x,y,z);
    },

    delete_group(x) {
      var j;
      var groups_by_specific_admin;
      const group_title = x;
      var group = store.getters.findgroup(group_title);
      var confirmation = confirm("Are you sure?");
      if (confirmation == true) {
        var Clength = group.contract.length;
        for(var l=0 ; l<Clength; l++)
      {
          var Ctitle = group.contract[l].copy_contract_front_title
          for(var i=0;i<this.current_admin_recent_contracts.length ; i++)
          {
          if(this.current_admin_recent_contracts[i].contract_front_title === Ctitle)
            {
            this.current_admin_recent_contracts.splice(i, 1);
            store.commit("setcurrentadminrecentcontracts",this.current_admin_recent_contracts);
            store.commit("setrecentcontractsinadmindata",[this.current_admin_name,this.current_admin_recent_contracts]);
            store.commit(
        "setrecentcontractsinuserdata",[
        this.current_user_name,
        this.current_user_recent_contracts
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
        store.dispatch('updatewritejson');
        // dialog.showErrorBox("title here", group.group_title + " is deleted ");
       this.group_title = "" ;
      this.auto_users = [] ;
      this.auto_contracts = [] ;
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

    copy_creation_of_contract(contract_title,group_title){
      let obj = this.current_admin_versions.find(o => o.contract_title === contract_title);
      store.commit("copycontractsavefunc",{
        title: contract_title ,
        front_title: contract_title + "_vertrag_" + obj.contract_total_version ,
        group_title: group_title ,
        admin_name: this.current_admin_name
      })
      obj.contract_total_version = obj.contract_total_version + 1
      this.current_admin_versions.find((o, i) => {
        if (o.contract_title === contract_title) {
        this.current_admin_versions[i] = { contract_title: contract_title, contract_total_version: obj.contract_total_version };
        return true; // stop searching
        }
      });
      store.commit("updatedversionslist",[this.current_admin_versions,this.current_admin_name])
      var b = store.getters.findcopycontract([contract_title,group_title]);
      return b
    },

    add_contract_in_group(x) {
      const group_title = this.groupName;
      var a = store.getters.checkByGroupName(group_title);
     // const contract_title = x;
      //var b = store.getters.findcontract(contract_title);
      // var all_contracts = store.getters.getallcontracts(value);
      if (a[0].contract.length === 0) {
        var b = this.copy_creation_of_contract(x,group_title);
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
          if (a[0].contract[i].copy_contract_title === x) {
            dialog.showErrorBox(
              "title here",
              "Contract is already existed in this group"
            );
            // alert("Contract is already existed in this group");
            return; //break
          }
        }
         b = this.copy_creation_of_contract(x,group_title);
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
        for(var i=0;i<this.current_admin_recent_contracts.length ; i++){
          if(this.current_admin_recent_contracts[i].contract_front_title === x){
            this.current_admin_recent_contracts.splice(i, 1);
            store.commit("setcurrentadminrecentcontracts",this.current_admin_recent_contracts);
            store.commit("setrecentcontractsinadmindata",[this.current_admin_name,this.current_admin_recent_contracts]);
            store.commit(
        "setrecentcontractsinuserdata",[
        this.current_user_name,
        this.current_user_recent_contracts
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
        this.group_title = "" ;
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
      let checking = this.$store.getters.checkByGroupNamesArray(this.group_title);
      if (checking === true || a.length !== 0) {
        dialog.showErrorBox("title here", "Group name already exists");
        return;
      } else {
        this.$store.commit("groupnamesarray", this.group_title)
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
          b = this.copy_creation_of_contract(contractarray[i],this.group_title)
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
          this.$store.commit("addcontractinuserviaonetime", [group_contracts, c]);
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
        var user_name = "user" + i ;
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
    gridf() {
       this.$store.commit("setlist", false);
        this.$store.commit("setgrid", true);
    },
    listf() {
       this.$store.commit("setlist", true);
        this.$store.commit("setgrid", false);
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
div.stuck {
  position: -webkit-sticky !important;
  position: sticky !important ;
  /* z-index: 1000 !important; */
}

::v-deep .v-autocomplete__content > .v-list__tile {
  height: 100px !important;
}
</style>

<template>
  <v-container>
    <v-card >
      <v-navigation-drawer
        
        enable-resize-watcher
        app
        light
        width="220"
        class="mt-12"
      >
        <!-- <template >
          <v-list-item class="">
            <v-list-item-avatar>
               <img
              style="cursor:pointer;"
                src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
              <v-menu
            :close-on-content-click="false"
            offset-x
            
            right
            rounded="xl"
            max-width="350"
          >
            <template v-slot:activator="{ on }"
            >
             
            </template>
            <v-card
            elevation="5"
              class="ma-0 pa-0"
              rounded="xl"
              width="350"
              min-height="200"
              style="overflow: hidden"
            >

            </v-card>
              </v-menu>
            </v-list-item-avatar> -->
            
            <!-- <v-list-item-content class="ml-1">
              
              <v-list-item-title style="font-family:Raleway;font-weight:600;color:#5C5C5C;">{{current_user_name}}</v-list-item-title>
              
               <v-list-item-subtitle class="" style="font-family:Raleway;font-size:12px;font-weight:500;color:#5C5C5C;">User</v-list-item-subtitle>
            </v-list-item-content> -->
           <!-- <v-btn text small style="height:3.3em;" @click="logout()" class="">
              <span
                class="mdi mdi-logout"
                style="color:#474747; font-size: 23px"
              ></span>
            </v-btn> -->
          <!-- </v-list-item>
        </template> -->
   <!-- <v-banner class="ml-4" height="2" width="213" dark color="grey"></v-banner> -->
        <!-- <v-divider class="mx-2" style="height:1vh !important;"></v-divider> -->
        <v-list dense class="ml-n1">
          <v-list-item v-for="item in localitem" :key="item.title" >
            <v-btn text style="text-transform:none;">
              <div style="width:17.4em;display:flex;"  @click="sidenavigationuser(item.title)">
            <v-list-item-icon>
              <!-- <v-btn icon> -->
                <v-icon class="mt-n1 ml-n3" size="25" color="#474747" >{{ item.icon }}</v-icon>
              <!-- </v-btn> -->
            </v-list-item-icon>
            <v-list-item-content class=" ml-n5">
              <v-list-item-title
             
               style="text-align:left;font-family:Raleway;font-size:16px;color:#5C5C5C;font-weight:500;" class="">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
           </div>
            </v-btn>
          </v-list-item>
        </v-list>
        <v-card 
         style="position:absolute; bottom:6.5em;left:3.6em;"
         elevation="0" width="125" height="50" color="transparent">
        <v-img width="125" height="50" src="/assets/king.png"> </v-img>
      </v-card>
         <div style="position:absolute; bottom:2.9em;left:5.4em;">
           <p style="color:grey;">{{version}}</p>
           </div>
        <!-- <div style="position:absolute; bottom:5.5em;left:2.4em;">
        <v-row justify="center" align="center">
    <v-btn color="#FFA300" class="white--text"  @click="logout()" style="
                padding-right: 80px;
                padding-left: 80px;
                padding-top: 3px;
                padding-bottom: 3px;
                border-radius:24px;
                 text-transform:none;
              ">
              Logoutcc
            </v-btn>
            </v-row>
            </div> -->
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script>
import store from "../store"
export default {
  name: "sidenavigationbar_user",
  data() {
    return {
      version:"",
      current_user_name:"",
     localitem: [
       { title: "Dashboard", icon:"mdi-view-quilt-outline", },
        // { title: "zuletzt bearbeitet", icon:"mdi-folder-edit-outline", },
        // { title: "Fur mich freigegeben", icon:" mdi-account-outline" ,},
        // { title: "Arbeitsbereiche", icon:" mdi-apps" ,},
        // { title: "Papierkorb", icon:"mdi-delete-outline", },
        // { title: "Trash", icon:"mdi-delete-outline", },
      ],
    };
  },
  //methods
  methods: {
    sidenavigationuser(x){
   if(x==="zuletzt bearbeitet")
    { 
      this.$store.commit("setZuletztbearbeitetusercheck", true);
      this.$store.commit("setFurmichfreigegebenusercheck", false);
      this.$store.commit("setDashboardusercheck", false);
    }
    else if(x==="Fur mich freigegeben")
    {
     this.$store.commit("setZuletztbearbeitetusercheck", false);
      this.$store.commit("setFurmichfreigegebenusercheck", true);
      this.$store.commit("setDashboardusercheck", false);
    }
    else if(x==="Dashboard") {
    {
     this.$store.commit("setZuletztbearbeitetusercheck", false);
      this.$store.commit("setFurmichfreigegebenusercheck", false);
       this.$store.commit("setDashboardusercheck", true);
    }
    }
    },
    back() {
      this.$router.push({ path: "/contracts" }).catch(()=>{});
    },
    logout() {
      this.$store.commit("setBuildproductionmode", true);
      this.$store.commit("setLogged", false);
      this.$store.commit("setIsAdmin", false);
      this.$router.push({ path: "/" }).catch(()=>{});
    },
  },
  //mounted
  mounted() {
    this.version = this.$version;
  this.current_user_name = store.state.current_user_name;
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700,800,900%22");
</style>
<template>
  <v-container>
    <v-card >
      <v-navigation-drawer
        enable-resize-watcher
        app
      
        light
        width="220"
        class="mt-13"
      >
        <template >
          <!-- <v-list-item class="">
            <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          offset-y
          top
          content-class="my-avatar-menu"
          left
          width="220"
        >
          <template v-slot:activator="{ on, attrs }">
           <v-list-item-avatar v-on="on" v-bind="attrs">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-list-item-avatar>
          </template>
          <v-card
          
            elevation="0"
            class="ma-0 pa-0"
            width="220"
            min-height="320"
            style="border-radius: 15px 15px 15px 15px;"
          >
          <v-row justify="center" class="pt-3 ml-3">
             <v-list-item-avatar size="95" v-on="on" v-bind="attrs">
              <img  src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-list-item-avatar>
          </v-row>
          
          <v-icon style="position:absolute;top:1.6em;left:1em;" size="45" :color="maincolor.theme">
            mdi-circle
          </v-icon>
           <v-icon style="position:absolute;top:2.67em;left:1.71em;" size="30" color="white">
           mdi-camera-outline
          </v-icon>
               <p style="text-align:center;" class="h2 mt-5"><b>{{current_admin_name}}</b></p>
          <p style="text-align:center" class="h3 mt-n4">Admin</p>
          <v-list dense class="mt-n5"> 
        <v-list-item-group
          color="grey"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" color="#474747"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-menu
             v-if="item.title==='Einstellungen'"
          :close-on-content-click="false"
          offset-y
          top
          content-class="my-list-menu"
          left
          width="220"
        >
          <template v-slot:activator="{ on}" >
            <v-list-item-subtitle  v-text="item.title" v-on="on" ></v-list-item-subtitle>
          </template>
          <v-card
            elevation="0"
            class="ma-0 pa-0"
            width="220"
            min-height="320"
        style="border-radius: 15px 15px 15px 15px;"
          >
           <div style="display:flex;background-color:#E8E8E8;border-radius: 15px 15px 0px 0px;"  class="pt-3">
          <v-icon class="pl-4 mt-n4" color="#474747">mdi-account-outline</v-icon>
          <p class="body-2 pl-8">Einstellungen</p>
           </div>
              <h3 class="pl-4 pt-3" style="color:black">Farbkonfiguration</h3>
           <div class="pl-2" style="display:flex;">
             <v-btn icon @click="changemaincolorfunct(item.color)" v-for="item in coloritem1" :key="item.icon">
          <v-icon :color="item.color">{{item.icon}}</v-icon>
             </v-btn>
            <p style="font-size:32px;color:grey" class="mt-n2">|</p>
            <v-btn icon  v-for="item in coloritem2" :key="item.icon">
          <v-icon :color="item.color">{{item.icon}}</v-icon>
             </v-btn>
           </div>
            <h3 class="pl-3 mt-n2" style="color:black">Sicherheit</h3>
                 <v-list dense>
        <v-list-item-group
          color="grey"
        >
          <v-list-item
            v-for="(item, i) in Einstellungenitems"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" color="#474747"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-subtitle v-text="item.title">

              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
                 </v-list>
          </v-card>
              </v-menu>
             <v-list-item-subtitle  v-if="item.title!=='Einstellungen'"  v-text="item.title" v-on="on" ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
          </v-card>
            </v-menu>
            
            <v-list-item-content class=" mt-6">
              
              <p style="font-family:Raleway;font-weight:700;color:#5C5C5C;">{{current_admin_name}}</p>
             
               <p class="body-1" style="color:#5C5C5C;" >Admin</p>
            </v-list-item-content>
           <v-btn text small style="height:3.3em;" @click="logout()" class="">
              <span
                class="mdi mdi-logout"
                style="color:#474747; font-size: 28px"
              ></span>
            </v-btn>
          </v-list-item> -->
        </template>
        <v-list dense class="ml-n4">
          <v-list-item v-for="item in localitem" :key="item.title" >
            <v-btn text style="text-transform:none;">
              <div style="width:18.4em;display:flex;" class="pt-3 pl-3" @click="sidenavigationadmin(item.title)">
            <v-list-item-icon>
              <!-- <v-btn icon> -->
                <v-icon class="mt-n2 ml-n3" size="25" color="#474747" >{{ item.icon }}</v-icon>
              <!-- </v-btn> -->
            </v-list-item-icon>
            <v-list-item-content class=" ml-n5">
              <p
               style="text-align:left;font-family:Raleway;font-size:16px;color:#5C5C5C;font-weight:400;" class="">{{ item.title }}</p>
            </v-list-item-content>
           </div>
            </v-btn>
          </v-list-item>
        </v-list>
         <!-- <v-card 
         style="position:absolute; bottom:6.5em;left:3.6em;"
         elevation="0" width="125" height="50" color="transparent">
        <v-img width="125" height="50" src="/assets/king.png"> </v-img>
      </v-card> -->
       <v-card 
         style="position:absolute; bottom:6.5em;left:1.6em;"
         elevation="0" width="195" height="50" color="transparent">
        <v-img width="195" height="50" src="/assets/new.png"> </v-img>
      </v-card>
      <!-- <v-btn text @click="mypdffunc()" >save png</v-btn>
      <object id="jj" data="file:///D:/projects/cleverContracts/my.pdf" type="application/pdf" width="600" height="400">
        alt : <a href="file:///D:/projects/cleverContracts/my.pdf">PDF TITLE</a>
    </object> -->
      <!-- <iframe src="file:///D:/projects/cleverContracts/my.pdf"   width="200" height="200"></iframe> -->
      <!-- <embed :src="filepathpdf" width="200" height="225" 
 type="application/pdf"> -->
      <!-- <embed :src="filepathpdf"   width="200" height="200"/> -->
      <!-- <iframe src="https://www.w3schools.com/" title="W3Schools Free Online Web Tutorials"> -->
<!-- </iframe> -->
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
const fs = require("fs");
const { BrowserWindow} = require("electron").remote;
//import colors from 'vuetify/es5/util/colors';
//const {getCurrentWindow} = require('electron').remote;
import { mapState } from "vuex";
import store from "../store"
export default {
  name: "sidenavigationbar_admin",
  data() {
    return {
      //maincolor: store.state.maincolor,
      version:"",
      current_admin_name:"",
      Einstellungenitems:[
        {title:"Passwort ändern",icon:"mdi-account-key-outline",},
        {title:"Passwort zurücksetzen",icon:"mdi-account-convert-outline",},
        {title:"Name ändern",icon:"mdi-account-edit-outline",},
      ],
      coloritem1:[
        // {icon:"mdi-circle",color:"blue"},
        {icon:"mdi-circle",color:"#EAAD35"},
        {icon:"mdi-circle",color:"#41BB95"},
      ],
      coloritem2:[
        {icon:"mdi-circle",color:"#000000"},
        {icon:"mdi-circle",color:"#7C7C7C"},
        {icon:"mdi-circle",color:"#EEEEEE"},
      ],
      items:[
       {title:"Einstellungen",icon:"mdi-account-settings-outline",},
       {title:"Programme verbinden",icon:"mdi-tools",},
       {title:"Datenbank verbinden",icon:"mdi-database-sync",},
       {title:"Log Out",icon:"mdi-login",}
      ],
     localitem: [
       { title: "Contract Creator", icon:"mdi-file-document-edit-outline", },
        { title: "Dashboard", icon:"mdi-view-quilt-outline", },
        // { title: "zuletzt bearbeitet", icon:"mdi-folder-edit-outline", },
        // { title: "Arbeitsbereiche", icon:" mdi-apps" ,},
          { title: "Benutzer", icon:"mdi-account-outline", },
        { title: "Papierkorb", icon:"mdi-delete-outline", },

      ],
    };
  },
  //methods
  methods: {
     mypdffunc(){
        var k = document.getElementsByTagName("object")[0].contentWindow;
        k.scrollTo(0,200)
//  this.$("#outerdiv").scrollTop(1400);
let win = BrowserWindow.getFocusedWindow();
      // let wid = win.getSize()[0];
      win.webContents
        .capturePage(
        //   {
        //   x: wid - Math.round(wid / 1.85),
        //   y: 50,
        //   width: wid,
        //   height: win.getSize()[1],
        // }
        )
        .then((img) => {
          var dir = "./pdfimage";
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          fs.writeFileSync(
            dir +
              "/" +
              "pdftestimage.png",
            img.toPNG(),
            { encoding: "utf8", flag: "w" }
          );
        });

      },
    changemaincolorfunct(color){
     // this.$maincolor = color;
     if(color==="#EAAD35")
     {
       var color1=["#EAAD35","#FBEFD7"]
      store.commit('changemaincolor',color1);
     }
     else{
       var color2=["#41BB95","#D9F1EA"]
 store.commit('changemaincolor',color2);
      
     }
      store.dispatch("updatewritejson");
    },
    sidenavigationadmin(x){
      if(x==='Contract Creator'){
         store.commit("settitlenewcontract",true)
         this.$store.commit("setnavbardashboardicon", false);
         this.$store.commit("setnavbarcontractcreatoricon", true);
      this.$router.push({ path: "/newcontractcreate" });
      }
     if(x==="zuletzt bearbeitet")
    { 
      this.$store.commit("setzuletztbearbeitetadmincheck", true);
      this.$store.commit("setArbeitsbereicheadmincheck", false);
       this.$store.commit("setBenutzeradmincheck", false);
        this.$store.commit("setPapierkorbadmincheck", false);
        this.$store.commit("setDashboardadmincheck", false);
        this.back();
        this.$store.commit("setnavbarcontractcreatoricon", false);
    }
    else if(x==="Arbeitsbereiche")
    {
      this.$store.commit("setzuletztbearbeitetadmincheck", false);
      this.$store.commit("setArbeitsbereicheadmincheck", true);
       this.$store.commit("setBenutzeradmincheck", false);
        this.$store.commit("setPapierkorbadmincheck", false);
         this.$store.commit("setDashboardadmincheck", false);
         this.back();
         this.$store.commit("setnavbarcontractcreatoricon", false);
    }
    else if(x==="Benutzer")
    {
      this.$store.commit("setzuletztbearbeitetadmincheck", false);
      this.$store.commit("setArbeitsbereicheadmincheck", false);
       this.$store.commit("setBenutzeradmincheck", true);
        this.$store.commit("setPapierkorbadmincheck", false);
         this.$store.commit("setDashboardadmincheck", false);
         this.$store.commit("setnavbardashboardicon", false);
         this.back();
         this.$store.commit("setnavbarcontractcreatoricon", false);
    }
    else if(x==="Papierkorb")
    {
      this.$store.commit("setzuletztbearbeitetadmincheck", false);
      this.$store.commit("setArbeitsbereicheadmincheck", false);
       this.$store.commit("setBenutzeradmincheck", false);
        this.$store.commit("setPapierkorbadmincheck", true);
         this.$store.commit("setDashboardadmincheck", false);
         this.$store.commit("setnavbardashboardicon", false);
         this.back();
         this.$store.commit("setnavbarcontractcreatoricon", false);
    }
     else if(x==="Dashboard") {
       this.back();
        this.$store.commit("setnavbarcontractcreatoricon", false);
      this.$store.commit("setzuletztbearbeitetadmincheck", false);
      this.$store.commit("setArbeitsbereicheadmincheck", false);
       this.$store.commit("setBenutzeradmincheck", false);
        this.$store.commit("setPapierkorbadmincheck", false);
         this.$store.commit("setDashboardadmincheck", true);
         this.$store.commit("setnavbardashboardicon", true);
    }
    },
    back() {
     
       
      this.$router.push({ path: "/contracts" });
    },
    logout() {
      this.$store.commit("setBuildproductionmode", true);
      this.$store.commit("setLogged", false);
      this.$store.commit("setIsAdmin", false);
      this.$store.commit("setzuletztbearbeitetadmincheck", false);
      this.$store.commit("setArbeitsbereicheadmincheck", false);
       this.$store.commit("setBenutzeradmincheck", false);
        this.$store.commit("setPapierkorbadmincheck", false);
         this.$store.commit("setDashboardadmincheck", true);
         this.$store.commit("setnavbardashboardicon", true);
         this.$store.commit("seteyecheck", false);
          this.$store.commit("settitlenewcontract",false)
      this.$router.push({ path: "/" });

    },
  },
  //mounted
  mounted() {
    this.version = this.$version;
    this.current_admin_name = store.state.current_admin_name;
  },
  watch:{
   
  },
   computed: {
     ...mapState(["maincolor", "filepathpdf","Dashboardadmin" ]),
    //  maincolor : function(){
    //   return this.$maincolor; 
    // }, 
    
  },
     
};
</script>

<style  scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700,800,900");
@import url("https://fonts.googleapis.com/css?family=OpenSans:200,300,400,600,700,800,900");
.my-avatar-menu {
  margin-top: 55px;
  margin-left:-3px ;
  contain: initial;
  overflow: visible;
  border-radius: 15px 15px 15px 15px;
}
.my-list-menu {
  margin-top: 222px;
  margin-left:-3px ;
  contain: initial;
  overflow: visible;
  border-radius: 15px 15px 15px 15px;
}
</style>

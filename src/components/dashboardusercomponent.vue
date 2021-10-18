<template>
  <v-main class="ma-0 pa-0">
    <!-- <v-app-bar dense class="mt-14 mr-2" elevation="0" fixed color="transparent">
      <v-spacer></v-spacer>
         <v-card 
          v-if="magnifyicongeneralsearch"
        elevation="0" width="800" height="1"
        class="mr-3 mt-n4"
        style="display: flex; flex-direction: row-reverse;">
          <div
            v-for="(item, index) in chipdatageneralsearchadmin"
            :key="index"
          >
            <v-chip
              v-if="item"
              style="border-color: #ffa300"
              outlined
              small
              close
              color="#FFA300"
              @click:close="closedatageneralsearch(item)"
              class="mt-1 ml-3"
            >
              {{ item | truncateEnd(16, "...") }}
            </v-chip>
          </div>
        </v-card>
      <div style="width: 20em" class="mt-7 mr-3"  v-if="magnifyicongeneralsearch">
          <v-text-field
            v-model="searchdatageneralsearch"
            prepend-inner-icon="mdi-magnify"
            label="Filtern"
            dense
            color="#FFA300"
            @keyup.enter="enterdatageneralsearch(searchdatageneralsearch)"
            rounded="xl"
            outlined
          ></v-text-field>
        </div>
    </v-app-bar> -->
      <!-- <v-btn icon @click="magnifyiconf()">
        <v-icon color="black" size="26">mdi-magnify</v-icon>
      </v-btn> -->
    <!-- 1st heading -->
    <v-row class="">
      <v-col cols="11" style="display: flex">
        <p style="font-family: raleway; font-size: 18px; font-weight: 700">
          Zuletzt bearbeitet
        </p>
        <div
          @click="zuletztbearbeitetmenudown = !zuletztbearbeitetmenudown"
          class="ml-2 mt-n1"
        >
          <v-btn icon v-if="zuletztbearbeitetmenudown">
            <v-icon class="" color="#474747" size="28"> mdi-menu-down</v-icon>
          </v-btn>
          <v-btn icon v-if="!zuletztbearbeitetmenudown">
            <v-icon class="" color="#474747" size="28"> mdi-menu-right</v-icon>
          </v-btn>
        </div>
         <!-- v-if="magnifyicon" -->
         <v-btn
          @click="
            magnifyiconsearchrecentcontracts = !magnifyiconsearchrecentcontracts
          "
          class="mt-n1"
          icon
        >
          <v-icon color="#474747" size="26">mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          v-if="sortdateascending_rcu"
          class="mt-n1"
          icon
          @contextmenu="changedatetoalphabet_rcu($event)"
          @click ="changevalue1_rcu()"
        >
          <v-icon color="black" size="26">mdi-sort-calendar-ascending</v-icon>
        </v-btn>
        <v-btn
          v-if="sortdatedescending_rcu"
          class="mt-n1"
          icon
          @contextmenu="changedatetoalphabet_rcu($event)"
          @click ="changevalue2_rcu()"
        >
          <v-icon color="#474747" size="26">mdi-sort-calendar-descending</v-icon>
        </v-btn>
        <v-btn
          v-if="sortalphascending_rcu"
          class="mt-n1"
          icon
          @contextmenu="changealphabettodate_rcu($event)"
          @click ="changevalue3_rcu()"
        >
          <v-icon color="#474747" size="26">mdi-sort-alphabetical-ascending</v-icon>
        </v-btn>
        <v-btn
          v-if="sortalphadescending_rcu"
          class="mt-n1"
          icon
          @contextmenu="changealphabettodate_rcu($event)"
          @click ="changevalue4_rcu()"
        >
          <v-icon color="#474747" size="26">mdi-sort-alphabetical-descending</v-icon>
        </v-btn>
        
        <!-- v-if="magnifyicongeneralsearch" -->
         <!-- -->
        <div  v-if="magnifyiconsearchrecentcontracts"  style="width: 20em" class="ml-2 mt-n4">
          <v-text-field
            v-model="searchdatarecentcontracts"
            prepend-inner-icon="mdi-magnify"
            label="Filtern"
            dense
            :color=maincolor.theme
            @keyup.enter="enterdatarecentcontracts(searchdatarecentcontracts)"
            :rounded="true"
            outlined
          ></v-text-field>
        </div>
         <!-- v-if="magnifyiconsearchrecentcontracts"  -->
        <v-card 
        elevation="0" width="300" height="1" style="display: flex">
          <div
            v-for="(item, index) in chipdatarecentcontractsadmin"
            :key="index"
          >
            <v-chip
              v-if="item"
              outlined
              small
              close
              :color=maincolor.theme
              @click:close="closedatarecentcontracts(item)"
              class=" ml-3"
            >
              {{ item | truncateEnd(16, "...") }}
            </v-chip>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- recent file for admin-->
    <div style="display: flex" v-if="zuletztbearbeitetmenudown">
      <div v-for="(item, index) in current_user_recent_contracts_search" :key="index">
        <v-card
          class="mr-4 mt-4"
          elevation="6"
          height="200"
          width="200"
          style="border-radius: 18px 18px 12px 12px;cursor:pointer;"
          @click="currentusercontracts_v2(item)"
        >
          <!-- @click="recentcontractforadmin(item.contract_title,item.group_title,item.contract_front_title)" -->
          <v-img
            :src="item.preview"
            height="200"
            width="200"
            style="border-radius: 10px"
          ></v-img>
          <!-- :src="item.contract_url" -->
          <!-- <v-row class="pl-3">
                <v-col cols="2">
                  <v-icon size="18" class="ml-1">mdi-file-document</v-icon>
                </v-col>
                <v-col cols="4">
                  <p
                    class="mt-1"
                    style="color: white; font-size: 9px; font-weight: 550"
                  >
                    Name
                  </p>
                </v-col>
                <v-col cols="2">
                  <v-card
                    elevation="0"
                    class="ml-n4 mt-1"
                    width="2"
                    height="12"
                    color="white"
                  ></v-card>
                </v-col>
                <v-col cols="4">
                  <p
                    class="ml-n6 mt-1"
                    style="font-size: 9px; font-weight: 550"
                  >
                    Kunde
                  </p>
                </v-col>
              </v-row>
              <p class="mt-n6 ml-9" style="color: white; font-size: 12px">
                Arbeitsvertrag
              </p> -->

          <!-- <v-row class="pl-4">
                <v-col cols="2">
                  <v-icon size="18">mdi-file-document</v-icon>
                </v-col>
                <v-col cols="9">
                  <p class="mt-1" style="font-size: 10px; font-weight: 550">
                    Zuletzt bearbeitet
                  </p>
                </v-col>
              </v-row> -->
          <v-card
            elevation="0"
            width="200"
            height="40"
            style="position: absolute; bottom: 2.2em; left:0;"
          >
            <div class="ml-3">
              <p style="color: black">
                <v-icon size="17" class="mt-n1 mr-2" color="#474747"
                  >mdi-account-outline</v-icon
                >{{ item.last_edited }}
              </p>
              <p class="mt-n4" style="font-size: 11px">
                bearbeitet: {{ item.date }} | {{ item.time }}
              </p>
            </div>
          </v-card>
          <v-card
            elevation="0"
            width="200"
            height="30"
            color="#EEEEEE"
            style="
              position: absolute;
              bottom: 0;
              left: 0;
              border-radius: 2px 2px 11px 11px;
            "
          >
            <div style="display: flex " class="mt-1">
              
              <p
               v-if="item.isedited===true"
                class="pt-1 pl-2"
                style="font-size: 12px; font-weight: 500"
              >
               <v-icon class="" 
               style="margin-top:-0.4em;"
               color="#474747"
               size="17"
                >mdi-file-document-outline</v-icon
              >
                {{ item.front_title | truncateEnd(22, "...") }}
              </p>
              <p
               v-if="item.isedited===false"
                class="pt-1 pl-2"
                style="font-size: 12px; font-weight: 500"
              >
              <v-icon class=""
              style="margin-top:-0.4em;"
              color="#474747"
               size="17"
                >  mdi-file-star-outline</v-icon
              >
                {{ item.title | truncateEnd(16, "...") }}
              </p>
            </div>
          </v-card>
        </v-card>
      </div>
    </div>
    <!-- <v-banner class="mt-10 " height="2" width="1580" dark color="grey"></v-banner> -->
    <!-- <v-divider class="mt-10 mr-6" color="grey" v-if="zuletztbearbeitetmenudown" ></v-divider> -->
    <!-- 2nd hading -->
    <v-row class="mt-4 mr-2 mb-3">
      <v-col cols="11" style="display: flex">
        <p
          class=""
          style="font-family: raleway; font-size: 18px; font-weight: 690"
        >
          Arbeitsbereich
        </p>
        <div
          @click="Arbeitsbereichemenudown = !Arbeitsbereichemenudown"
          class="ml-2 mt-n1"
        >
          <v-btn icon v-if="Arbeitsbereichemenudown" >
            <v-icon size="28" color="#474747" class=""> mdi-menu-down </v-icon>
          </v-btn>
          <v-btn icon v-if="!Arbeitsbereichemenudown">
            <v-icon size="28" color="#474747" class=""> mdi-menu-right </v-icon>
          </v-btn>
        </div>
         <!-- v-if="magnifyicon" -->
        <v-btn
          @click="magnifyiconsearchgroups = !magnifyiconsearchgroups"
          class="mt-n1"
          icon
        >
          <v-icon color="#474747" size="26">mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          v-if="sortdateascending_ggu"
          class="mt-n1"
          icon
          @contextmenu="changedatetoalphabet_ggu($event)"
          @click ="changevalue1_ggu()"
        >
          <v-icon color="#474747" size="26">mdi-sort-calendar-ascending</v-icon>
        </v-btn>
        <v-btn
          v-if="sortdatedescending_ggu"
          class="mt-n1"
          icon
          @contextmenu="changedatetoalphabet_ggu($event)"
          @click ="changevalue2_ggu()"
        >
          <v-icon color="#474747" size="26">mdi-sort-calendar-descending</v-icon>
        </v-btn>
        <v-btn
          v-if="sortalphascending_ggu"
          class="mt-n1"
          icon
          @contextmenu="changealphabettodate_ggu($event)"
          @click ="changevalue3_ggu()"
        >
          <v-icon color="#474747" size="26">mdi-sort-alphabetical-ascending</v-icon>
        </v-btn>
        <v-btn
          v-if="sortalphadescending_ggu"
          class="mt-n1"
          icon
          @contextmenu="changealphabettodate_ggu($event)"
          @click ="changevalue4_ggu()"
        >
          <v-icon color="#474747" size="26">mdi-sort-alphabetical-descending</v-icon>
        </v-btn>
        <!--   v-if="magnifyicongeneralsearch" -->
        <!-- -->
        <div  v-if="magnifyiconsearchgroups"  style="width: 20em" class="ml-2 mt-n4">
          <v-text-field
            v-model="searchdatagroups"
            prepend-inner-icon="mdi-magnify"
            label="Filtern"
            dense
            :color=maincolor.theme
            @keyup.enter="enterdatagroups(searchdatagroups)"
            :rounded="true"
            outlined
          ></v-text-field>
        </div>
        <!--  v-if="magnifyiconsearchgroups"  -->
        <v-card 
        elevation="0" width="300" height="1" style="display: flex">
          <div v-for="(item, index) in chipdatagroupsadmin" :key="index">
            <v-chip
              v-if="item"
              outlined
              small
              close
              :color=maincolor.theme
              @click:close="closedatagroups(item)"
              class=" ml-3"
            >
              {{ item | truncateEnd(16, "...") }}
            </v-chip>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- main cards -->

    <div
      class="mb-3 mt-n4 expand2"
      style="display: flex; width: 99%"
      v-if="Arbeitsbereichemenudown"
    >
      <div v-for="(item, index) in current_admin_groups_search" :key="index" class="mb-3">
        <v-card
          width="270"
          height="340"
          outlined
          elevation="0"
          style="border-radius: 15px 15px 15px 15px"
          class="mr-5"
        >
          <!-- uper card -->
          <v-card
            height="45"
            width="270"
            :color=maincolor.bar
            outlined
            elevation="0"
          >
            <v-row class="pt-2">
              <v-col cols="9">
                <h3 class="ml-3">
                  {{ item.group_title | truncateEnd(19, "...") }}
                </h3>
              </v-col>
            </v-row>
          </v-card>
          <!-- mid card textfild -->
          <v-card
            elevation="0"
            height="255"
            width="270"
            class="expand pt-3"
            style="overflow-x: hidden"
            color="transparent"
          >
            <div>
              <div v-for="(item1, index) in item.contract" :key="index">
                <v-row>
                  <v-col cols="1" class="ml-2" style="cursor: pointer">
                     <v-icon
                      v-if="item1.isedited===true"
                      @click="
                        currentusercontracts_v2(item1)
                      "
                      class="mt-n1"
                     color="#474747"
                    >
                      mdi-file-document-outline
                    </v-icon>
                    <v-icon
                      v-if="item1.isedited===false"
                      @click="
                        currentusercontracts_v2(item1)
                      "
                      class="mt-n1"
                     color="#474747"
                    >
                      mdi-file-star-outline
                    </v-icon>
                    
                  </v-col>
                  <v-col cols="9" class="" style="cursor: pointer">
                    <h5
                      @click="
                        currentusercontracts_v2(item1)
                      "
                      class="mt-1 ml-1"
                     v-if="item1.isedited===true"
                    >
                      {{
                        item1.front_title | truncateEnd(22, "...")
                      }}
                    </h5>
                    <h5
                      @click="
                        currentusercontracts_v2(item1)
                      "
                      class="mt-1 ml-1"
                     v-if="item1.isedited===false"
                    >
                      {{
                        item1.title | truncateEnd(22, "...")
                      }}
                    </h5>
                  </v-col>

                  
                </v-row>
              </div>
            </div>
          </v-card>
          <!-- lower card -->
          <v-card
            style="position: absolute; bottom: 0em; left: 3.5%"
            height="40"
            width="270"
            color="transparent"
            outlined
            elevation="0"
          >
            <v-row class="mt-n2">
              <v-col cols="8">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-on="on" v-bind="attrs"
                        color="#474747"
                          >mdi-account-outline</v-icon
                        >
                      </template>
                      <span>{{ current_user_name}}</span>
                    </v-tooltip>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </div>
    </div>
    <v-row class="">
          <v-col cols="11" style="display:flex;">
            <p
          class="ml-1"
          style="font-family: raleway; font-size: 18px; font-weight: 700"
        >
         Für mich freigegeben 
         </p>
         <div  @click="liston=!liston" class="mt-n1 pl-2">
        <v-btn v-if="liston" icon>
            <v-icon  color="#474747" size="28"> mdi-menu-down</v-icon>
        </v-btn>
        <v-btn v-if="!liston" icon>
         <v-icon  color="#474747" size="28"> mdi-menu-right</v-icon>
          </v-btn>
         </div>
          <v-btn
          @click="magnifyiconsearchdatatable = !magnifyiconsearchdatatable"
          
          class="mt-n1"
          icon
        >
          <v-icon color="#474747" size="26">mdi-magnify</v-icon>
        </v-btn>
          <!-- style="background-color: grey; opacity: 0.4; color: black" -->
          <v-btn
            v-if="listdash"
            icon
            @click="listdashboard()"
            @contextmenu="listdashboard()"
            class="mt-n1"
          >
            <v-icon size="28" color="#474747">mdi-apps  </v-icon>
          </v-btn>
          <!-- <v-btn v-if="!listdash" icon @click="listdashboard()" class="">
            <v-icon size="28"> mdi-view-list </v-icon>
          </v-btn> -->
           <!-- style="background-color: grey; opacity: 0.4; color: black" -->
          <v-btn
            v-if="griddash"
            icon
            @click="griddashboard()"
           @contextmenu="griddashboard()"
            class="mt-n1"
          >
            <v-icon size="28" color="#474747"> mdi-view-list </v-icon>
          </v-btn>
         <!-- style="background-color:grey;opacity:0.4;color:black;" -->
         <!-- <v-btn 
           v-if="listdash"
          icon @click="listdashboard()" 
          
           class="">
            <v-icon size="28" color="grey"> mdi-apps </v-icon>
          </v-btn> -->
          <!-- <v-btn 
      v-if="!listdash"
          icon @click="listdashboard()"  class="">
            <v-icon size="28"> mdi-view-list </v-icon>
          </v-btn> -->
            <!-- style="background-color:grey;opacity:0.4;color:black;" -->
          <!-- <v-btn 
          v-if="griddash"
          icon @click="griddashboard()" 
        
          class="">
            <v-icon size="28" color="grey"> mdi-view-list </v-icon>
          </v-btn> -->
              <!-- <v-btn 
       v-if="!griddash"
          icon @click="griddashboard()" class="">
            <v-icon size="28"> mdi-apps </v-icon>
          </v-btn> -->
          <!-- v-if="magnifyicon" -->
           <!-- <v-btn
          @click="magnifyiconsearchdatatable = !magnifyiconsearchdatatable"
          
          class=""
          icon
        >
          <v-icon color="black" size="26">mdi-magnify</v-icon>
        </v-btn> -->
        <!-- v-if="magnifyicongeneralsearch" -->
        <!--  -->
           <div  v-if="magnifyiconsearchdatatable" style="width:20em;" class="ml-2 mt-n4">
       <v-text-field
          v-model="searchdatatable"
          prepend-inner-icon="mdi-magnify"
          label="Filtern"
        dense
        :color=maincolor.theme
        @keyup.enter="enterdatatable(searchdatatable)"
        :rounded="true"
          outlined
        ></v-text-field>
        </div>
        <!-- v-if="magnifyiconsearchdatatable" -->
        <v-card
        elevation="0"
        width="300"
        height="1"
          style="display:flex;"
          
        >
        <div
                                v-for="(item, index) in chipdatatableadmin"
                                :key="index"
                              >
                                <v-chip
                                 v-if="item"
                                  outlined
                                  small
                                  dense
                                  close
                                  :color=maincolor.theme
                                 @click:close="closedatatable(item)"
                                  class=" ml-3"
                                >
                                  {{ item | truncateEnd(16, "...") }}
                                </v-chip>
                              </div>
        
        </v-card>
          </v-col>
      </v-row>

      <div class="">
     
 <v-data-table
 v-if="listdash && liston"
      :headers="headersuser"
      :items="contract_list_of_user_search"
      class="elevation-0"
      :items-per-page="15"
      :footer-props="{
           'items-per-page-text':'Zeilen pro Seite'
      }"
      
    >
  <template v-slot:no-data>
       <p class="mt-4">Keine Elemente enthalten</p> 
    </template>
    <template v-slot:[`item.front_title`]="{ item }">
      <p 
      style="cursor:pointer"
      @click="currentusercontracts_v2(item)"
      v-if="item.isedited===false" class="mt-4">
        <v-icon class="mt-n2" color="#474747">mdi-file-star-outline</v-icon>
        {{item.title}}
      </p>
       <p 
       style="cursor:pointer"
        @click="currentusercontracts_v2(item)"
       v-if="item.isedited===true" class="mt-4">
        <v-icon class="mt-n2" color="#474747">mdi-file-document-outline</v-icon>
        {{item.front_title}}
      </p>
    </template>
    <template v-slot:[`item.time`]="{ item }" >
      <p class="mt-4"  style="cursor:pointer"
      @click="currentusercontracts_v2(item)">{{item.date}} | {{item.time}}</p>
    </template>
    <template v-slot:[`item.percentage`]="{ item }">
      <p class="mt-4"  style="cursor:pointer"
      @click="currentusercontracts_v2(item)">{{item.status}} | {{item.percentage}} %</p>
    </template>
    <template v-slot:[`item.group_title`]="{ item }">
      <p class="mt-4"  style="cursor:pointer"
      @click="currentusercontracts_v2(item)">{{item.group_title}}</p>
    </template>
 </v-data-table>
 </div>
     <div v-if="griddash && liston" >
      <div class="row mt-n8 mb-8" >
        <v-card
          v-for="(item, index) in contract_list_of_user"
          :key="index"
          light
          class="ml-4 mt-8"
          elevation="6"
          height="180"
          width="180"
          style="border-radius: 16px 16px 16px 16px"
        >
            <v-row class="pl-2 pt-3">
              <v-col cols="1" class="" style="cursor: pointer">
                    <v-icon
                      v-if="item.isedited===true"
                      @click="
                       currentusercontracts_v2(item)
                      "
                      class=""
                      color="#474747"
                    >
                      mdi-file-document-outline
                    </v-icon>
                    <v-icon
                      v-if="item.isedited===false"
                      @click="
                        currentusercontracts_v2(item)
                      "
                      class=""
                      color="#474747"
                    >
                      mdi-file-star-outline
                    </v-icon>
                  </v-col>
              <v-col cols="8">
                <p
            @click="
             currentusercontracts_v2(item)
            "
               v-if="item.isedited===true"
                  class="pt-1 pl-1"
                  style="font-size: 12px; font-weight: 500;cursor: pointer;"
                >
                  {{ item.front_title | truncateEnd(10, "...") }}
                </p>
                <p
            @click="
             currentusercontracts_v2(item)
            "
                v-if="item.isedited===false"
                  class="pt-1 pl-1"
                  style="font-size: 12px; font-weight: 500;cursor: pointer;"
                >
                  {{
                    item.title | truncateEnd(6, "...")
                  }}
                </p>
              </v-col>
              <!-- <v-col cols="1">
                <v-icon
                size="18"
                  class="ml-n2"
                  color="black"
                  @click="
                    delete_contract_from_group(
                      item.front_title,
                      item.group_title
                    )
                  "
                  >mdi-delete-outline</v-icon
                >
              </v-col> -->

            </v-row>
            <v-card
            elevation="0"
            
            class=""
            color="transparent"
            min-height="2"
            max-height="60"
            width="169"
            >
          <v-row class="ma-0 pa-0">
       <p class="ml-3" style="word-break: break-word;">{{item.group_title | truncateEnd(40, "...")}}</p>
          </v-row>
            </v-card>
           
            <p class="ml-3 mt-n3">
              {{ item.date }} | {{ item.time }}
            </p>
          <v-card
            elevation="0"
            width="180"
            height="30"
            color="#EEEEEE"
            style="position: absolute; bottom: 0; left: 0; cursor: pointer"
          >
            <div style="display:flex;" class="pt-1 ml-2">
              
                <p style="font-size:12px;font-weight:500;margin-top:0.15em;"
                class="">{{item.status}}</p>
               <v-spacer></v-spacer>
                <p style="font-size: 14px;color:grey;font-weight:500;" class="mr-2">
                  |  {{ item.percentage }} %
                </p>
            </div>
          </v-card>
        </v-card>
      </div>
    </div>
  </v-main>
</template>

<script>
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
var fs = require("fs");
import store from "../store";
const path = require("path");
const { dialog } = require("electron").remote;
import { mapState } from "vuex";
import { remote } from 'electron';
export default {
  components: {},
  name: "dashboardadmincomponent",
  //data
  data: () => ({
    searchdatageneralsearch: "",
    chipdatageneralsearchadmin: [],
    searchdatatable: "",
    chipdatatableadmin: [],
    searchdatagroups: "",
    current_admin_groups_search: "",
    chipdatagroupsadmin: [],
    current_admin_recent_contracts_search: "",
    searchdatarecentcontracts: "",
    chipdatarecentcontractsadmin: [],
    allcontracts : [],
    // computedcheckfooter:true,
     headersuser:[
    {
      text: "Name | Kunde",
        value: "front_title",
        class: '#5C5C5C--text subtitle-1 font-weight-bold'
    },
    {
      text: "Datum | Zeit",
        value: "time",
        class: '#5C5C5C--text subtitle-1 font-weight-bold'
    },
    {
      text: "Status | Fortschritt",
        value: "percentage",
        class: '#5C5C5C--text subtitle-1 font-weight-bold'
    },
    {
      text: "Arbeitsbereich",
        value: "group_title",
        class: '#5C5C5C--text subtitle-1 font-weight-bold'
    }
  ],
  liston:true,
     headers: [
      {
        text: "Name | Kunde",
        value: "front_title",
         class: '#5C5C5C--text subtitle-1 font-weight-bold',
      },
      {
        text: "Datum | Zeit",
        value: "time",
        class: '#5C5C5C--text subtitle-1 font-weight-bold',
      },
      {
        text: "Status | Fortschritt",
        value: "percentage",
        class: '#5C5C5C--text subtitle-1 font-weight-bold',
      },
      {
        text: "Arbeitsbereich",
        value: "group_title",
        class: '#5C5C5C--text subtitle-1 font-weight-bold',
      },
      {
        text: "",
        value: "icon",
      },
      
    ],
    sortdateascending_rcu : true,
    sortdatedescending_rcu : false,
    sortalphascending_rcu : false,
    sortalphadescending_rcu : false,
    sortdateascending_ggu : true,
    sortdatedescending_ggu : false,
    sortalphascending_ggu : false,
    sortalphadescending_ggu : false,
    iconcheck:false,
    originalmenu:false,
    auto_users: [],
    group_title: "",
    checked: true,
    auto_contracts: [],
    griddash: false,
    listdash: true,
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
    zuletztbearbeitetmenudown: true,
    isAdmin: false,
    contract_list_of_user: [],
    current_admin_name: "",
    current_admin_groups: [],
    current_admin_versions: [],
    current_admin_users: [],
    Arbeitsbereichemenudown: true,
    Vertragsübersichtmenudown: true,
    current_admin_recent_contracts: [],
    current_user_recent_contracts: [],
    contractmenu: false,
    copycontract: [],
    changegrouptitlename: "",
     is_superuser:false,
      magnifyicon: false,
    magnifyiconsearchrecentcontracts: false,
    magnifyiconsearchgroups: false,
    magnifyiconsearchdatatable: false,
    magnifyicongeneralsearch:false,
    current_user_recent_contracts_search:"",
    contract_list_of_user_search:[],
    maincontracts: [
      "AGB Amazon",
      "AGB Shopify",
      "AGB Ebay",
      "Einwilligung Mitarbeiterfotos/videos",
      "Einwilligung Fotos/Videos",
      "Einwilligung Fotos/Videos Veranstaltungen",
      // "Arbeitsvertrag",
     // "Vertraulichkeitserklärung",
     // "Arbeitsvertrag befristet",
     // "Arbeitsvertrag geringfügig",
     // "Aufhebungsvertrag",
     // "Vertrag freie Mitarbeit",
     // "Geschäftsführer Anstellungsvertrag",
     // "Leitender Angestelltenvertrag",
     // "Placeholder",
    ],
  }),
  //COMPUTED
  computed: {
    computedcheckfooter: function(){
      var checkfooter ;
      if(this.contractsLength<9){
        checkfooter = true;
      }
      return checkfooter;
    },
    contractsLength: function(){
      var i;
    var count=0;
    for( i=0; i< store.state.current_admin_groups.length; i++){
      count = store.state.current_admin_groups[i].contract.length + count
    }
    return count;
    },
    

    ...mapState([
      "zuletztbearbeitetadmin",
      "Arbeitsbereicheadmin",
      "Benutzeradmin",
      "Papierkorbadmin",
      "Dashboardadmin",
      "grid",
      "list",
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
    // computedCurrent_admin_groups_contract() {
    //   let contractsGridsearch = [] ;
    //   let contractsGrid = [];
    //   let i;
    //   let len;
    //   for (i = 0, len = this.current_admin_groups.length; i < len; i++) {
    //     let j;
    //     let lenJ;
    //     for (
    //       j = 0, lenJ = this.current_admin_groups[i].contract.length;
    //       j < lenJ;
    //       j++
    //     ) {
    //       var cont = this.current_admin_groups[i].contract[j];
    //       cont.keep_original_contract = this.current_admin_groups[
    //         i
    //       ].keep_original_contract;
    //       contractsGrid.push(cont);
    //     }
    //   }
    //    if(this.chipdatatableadmin.length>0){
    //   for(i=0; i< this.chipdatatableadmin.length; i++){
    //     for(var j=0; j < contractsGrid.length; j++){
    //       if(contractsGrid[j].front_title.includes(this.chipdatatableadmin[i])){
    //         let obj = contractsGridsearch.find(o => o.front_title === contractsGrid[j].front_title);
    //         if(obj === undefined){
    //          contractsGridsearch.push(contractsGrid[j])
    //         }
    //       }
    //     }
    //   }
    //     return contractsGridsearch
    //   }else{
    //     return contractsGrid;
    //    }
    // },
  },
  //mounted
  mounted() {
    this.isAdmin = store.state.isAdmin;
    this.is_superuser = store.state.is_superuser;
    this.all_users = store.state.user;
    this.all_contracts = store.state.contract;
    if (this.isAdmin === true) {
      this.list = store.state.list;
      this.grid = store.state.grid;
      this.current_admin_name = store.state.current_admin_name;
      this.copycontract = store.state.copycontract;
      this.read_data_for_admin(this.current_admin_name);
      this.current_admin_versions = store.state.current_admin_versions;
      this.current_admin_recent_contracts =
        store.state.current_admin_recent_contracts;
      this.current_admin_groups = store.state.current_admin_groups;
      this.current_admin_users = store.state.current_admin_users;
      //this.admincard = store.state.group;
    } else {
      this.current_user_name = store.state.current_user_name;
      this.chipdatatableadmin = store.getters.getchipdatatableadmin(this.current_user_name)
      this.chipdatagroupsadmin = store.getters.getchipdatagroupsadmin(this.current_user_name)
      this.chipdatarecentcontractsadmin =
        store.getters.getchipdatarecentcontractsadmin(this.current_user_name)
      this.chipdatageneralsearchadmin =
        store.getters.getchipdatageneralsearchadmin(this.current_user_name)
      this.read_data_for_user(this.current_user_name);
      this.current_user_recent_contracts =
        store.state.current_user_recent_contracts;
      this.contract_list_of_user = store.state.contract_list_of_user;
      this.contract_list_of_user_search = this.contract_list_of_user
      
      this.current_admin_groups = this.check_group()
      //
      this.contract_list_of_user = this.allcontracts;
      this.contract_list_of_user_search = this.contract_list_of_user
      //
      this.current_admin_groups_search = this.current_admin_groups
      this.recentcontracts_user()
       
      // this.function_for_tag_search_recent_contracts(this.chipdatarecentcontractsadmin)
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
    recentcontracts_user(){
      var obj = JSON.parse(
        JSON.stringify(store.state.current_user_recent_contracts)
      );
      var len = obj.length;
      for (var i = 0; i < len; i++) {
        var contract = store.getters.findcopycontract(obj[i]);
        obj.splice(i, 1, contract);
      }
      this.current_user_recent_contracts = obj;
      this.current_user_recent_contracts_search =
        this.current_user_recent_contracts;
    },
changedatetoalphabet_ggu(e){
      console.log(e)
      this.sortdateascending_ggu = false;
      this.sortdatedescending_ggu = false;
      this.sortalphascending_ggu = true;
      this.sortalphadescending_ggu = false;
    },
    changealphabettodate_ggu(e){
      console.log(e)
      this.sortdateascending_ggu = true;
      this.sortdatedescending_ggu = false;
      this.sortalphascending_ggu = false;
      this.sortalphadescending_ggu = false;
    },
    changevalue1_ggu(){
      this.sortdateascending_ggu = false;
      this.sortdatedescending_ggu = true;
      this.sortalphascending_ggu = false;
      this.sortalphadescending_ggu = false;
      this.current_admin_groups_search.reverse()
      //couldn't find a solution because we don't have time property in user groups
      // will look into deep to find some solution
      // var arr = this.current_admin_groups_search
      // arr.sort((a, b) => a.group_title.localeCompare(b.group_title))
      // arr.reverse()
      // this.current_admin_groups_search = arr   
    },
    changevalue2_ggu(){
      this.sortdateascending_ggu = true;
      this.sortdatedescending_ggu = false;
      this.sortalphascending_ggu = false;
      this.sortalphadescending_ggu = false;
      this.current_admin_groups_search.reverse()
      //couldn't find a solution because we don't have time property in user groups
      // will look into deep to find some solution
      //now working only with 
      // var arr = this.current_admin_groups_search
      // arr.sort((a, b) => a.group_title.localeCompare(b.group_title))
      // this.current_admin_groups_search = arr
    },
    changevalue3_ggu(){
      this.sortdateascending_ggu = false;
      this.sortdatedescending_ggu = false;
      this.sortalphascending_ggu = false;
      this.sortalphadescending_ggu = true;
      var arr = this.current_admin_groups_search
      arr.sort((a, b) => a.group_title.localeCompare(b.group_title))
      this.current_admin_groups_search = arr
    },
    changevalue4_ggu(){
      this.sortdateascending_ggu = false;
      this.sortdatedescending_ggu = false;
      this.sortalphascending_ggu = true;
      this.sortalphadescending_ggu = false;
      var arr = this.current_admin_groups_search
      arr.sort((a, b) => a.group_title.localeCompare(b.group_title))
      arr.reverse()
      this.current_admin_groups_search = arr
    },
    //1
    changedatetoalphabet_rcu(e){
      console.log(e)
      this.sortdateascending_rcu = false;
      this.sortdatedescending_rcu = false;
      this.sortalphascending_rcu = true;
      this.sortalphadescending_rcu = false;
    },
    changealphabettodate_rcu(e){
      console.log(e)
      this.sortdateascending_rcu = true;
      this.sortdatedescending_rcu = false;
      this.sortalphascending_rcu = false;
      this.sortalphadescending_rcu = false;
    },
    changevalue1_rcu(){
      this.sortdateascending_rcu = false;
      this.sortdatedescending_rcu = true;
      this.sortalphascending_rcu = false;
      this.sortalphadescending_rcu = false;
      var arr = this.current_user_recent_contracts_search
      var len = this.current_user_recent_contracts_search.length
      for(var i=0; i< len ; i++){
        arr[i].dateplustime = this.change_date_time_for_sorting(arr[i].date,arr[i].time)
      }
      arr.sort(function(a,b){
       if (a.dateplustime > b.dateplustime) return 1;
       if (a.dateplustime < b.dateplustime) return -1;
       return 0;
      })
      for(i=0; i< len ; i++){
        delete arr[i].dateplustime
      }
      this.current_user_recent_contracts_search = arr      
    },
    change_date_time_for_sorting(time_string,date_string){
      var time = time_string.split(".")
      var time_v2 = date_string.split(":")
        
      var date1 = new Date(time[2],time[1],time[0],time_v2[0],time_v2[1])
      
      return date1
    },
    changevalue2_rcu(){
      this.sortdateascending_rcu = true;
      this.sortdatedescending_rcu = false;
      this.sortalphascending_rcu = false;
      this.sortalphadescending_rcu = false;
      var arr = this.current_user_recent_contracts_search
      var len =this.current_user_recent_contracts_search.length
      for(var i=0; i< len ; i++){
        arr[i].dateplustime = this.change_date_time_for_sorting(arr[i].date,arr[i].time)
      }
      arr.sort(function(a,b){
       if (a.dateplustime > b.dateplustime) return 1;
       if (a.dateplustime < b.dateplustime) return -1;
       return 0;
      })
      for(i=0; i< len ; i++){
        delete arr[i].dateplustime
      }
      arr.reverse()
     this.current_user_recent_contracts_search = arr
    },
    changevalue3_rcu(){
      this.sortdateascending_rcu = false;
      this.sortdatedescending_rcu = false;
      this.sortalphascending_rcu = false;
      this.sortalphadescending_rcu = true;
      var arr = this.current_user_recent_contracts_search
      arr.sort((a, b) => a.front_title.localeCompare(b.front_title))
     this.current_user_recent_contracts_search = arr
    },
    changevalue4_rcu(){
      this.sortdateascending_rcu = false;
      this.sortdatedescending_rcu = false;
      this.sortalphascending_rcu = true;
      this.sortalphadescending_rcu = false;
      var arr = this.current_user_recent_contracts_search
      arr.sort((a, b) => a.front_title.localeCompare(b.front_title))
      arr.reverse()
     this.current_user_recent_contracts_search = arr
    },
    magnifyiconf(){
      this.magnifyicon = !this.magnifyicon;
      this.magnifyiconsearchrecentcontracts = false;
      this.magnifyiconsearchgroups = false;
      this.magnifyiconsearchdatatable = false;
       this.magnifyicongeneralsearch = !this.magnifyicongeneralsearch;
    },
    closedatageneralsearch(y) {
      this.$store.commit("adminchipdatageneralsearchremove",[y, this.current_user_name]);
      this.function_for_tag_search_recent_contracts(this.chipdatageneralsearchadmin)
      this.function_for_tag_search(this.chipdatageneralsearchadmin);
      this.function_for_tag_search_contact_list_of_user(this.chipdatageneralsearchadmin)
    },
    enterdatageneralsearch(x) {
      var i ; 
      this.searchdatageneralsearch = "";
      this.$store.commit("setchipdatageneralsearchadmin",[x, this.current_user_name]);
      this.chipdatageneralsearchadmin = store.getters.getchipdatageneralsearchadmin(this.current_user_name)
      for(i  = this.chipdatarecentcontractsadmin.length -1 ; i >= 0 ; i-- ){
            this.closedatarecentcontracts(this.chipdatarecentcontractsadmin[i])
      }
      for(i  = this.chipdatagroupsadmin.length -1 ; i >= 0 ; i-- ){
            this.closedatagroups(this.chipdatagroupsadmin[i])
      }
      for(i  = this.chipdatatableadmin.length -1 ; i >= 0 ; i-- ){
            this.closedatatable(this.chipdatatableadmin[i])
      }
      this.function_for_tag_search_recent_contracts(this.chipdatageneralsearchadmin)
      this.function_for_tag_search(this.chipdatageneralsearchadmin) 
      this.function_for_tag_search_contact_list_of_user(this.chipdatageneralsearchadmin)
    },
  closedatatable(y) {
      this.$store.commit("adminchipdatatableremove",  [y, this.current_user_name]);
      this.function_for_tag_search_contact_list_of_user(this.chipdatatableadmin)
    },
    enterdatatable(x) {
      for(var i  = this.chipdatageneralsearchadmin.length -1 ; i >= 0 ; i-- ){
            this.closedatageneralsearch(this.chipdatageneralsearchadmin[i])
      }
      this.$store.commit("setchipdatatableadmin", [x, this.current_user_name]);
      this.function_for_tag_search_contact_list_of_user(this.chipdatatableadmin)
      this.searchdatatable = "";
    },
    closedatagroups(y) {
      this.$store.commit("adminchipdatagroupsremove", [y, this.current_user_name]);
      this.function_for_tag_search(this.chipdatagroupsadmin) 
    },
    enterdatagroups(x) {
      for(var i  = this.chipdatageneralsearchadmin.length -1 ; i >= 0 ; i-- ){
            this.closedatageneralsearch(this.chipdatageneralsearchadmin[i])
      }
          this.$store.commit("setchipdatagroupsadmin", [x, this.current_user_name]);
          this.function_for_tag_search(this.chipdatagroupsadmin)
          this.searchdatagroups = "" 
    },
    function_for_tag_search(chips){
    if(chips.length>0){
      this.current_admin_groups_search = []
      for(var i=0; i< chips.length ; i++){
        for(var j=0; j < this.current_admin_groups.length ; j++){
          if(this.current_admin_groups[j].group_title.includes(chips[i])){
            let obj = this.current_admin_groups_search.find(o => o.group_title === this.current_admin_groups[j].group_title);
            if(obj === undefined){
              this.current_admin_groups_search.push(this.current_admin_groups[j])
            }
          }
          else{
            for ( var k =0 ; k< this.current_admin_groups[j].contract.length ; k++){
              if( this.current_admin_groups[j].contract[k].title.includes(chips[i])){
                let obj = this.current_admin_groups_search.find(o => o.group_title === this.current_admin_groups[j].group_title);
                if(obj === undefined){
                  this.current_admin_groups_search.push(this.current_admin_groups[j])
                }
              }
            }
          }
        }
      }
    }
    else{
      this.current_admin_groups_search = this.current_admin_groups
    }
    // console.log(this.current_admin_groups_search)
    },
    function_for_tag_search_recent_contracts(chips){
    if(chips.length>0){
      this.current_user_recent_contracts_search = []
      for(var i=0; i< chips.length ; i++){
        for(var j=0; j < this.current_user_recent_contracts.length ; j++){
          if(this.current_user_recent_contracts[j].front_title.includes(chips[i])){
            let obj = this.current_user_recent_contracts_search.find(o => o.front_title === this.current_user_recent_contracts[j].front_title);
            if(obj === undefined){
              this.current_user_recent_contracts_search.push(this.current_user_recent_contracts[j])
            }
          }
        }
      }
    }
    else{
      this.current_user_recent_contracts_search = this.current_user_recent_contracts
    }
    },
    function_for_tag_search_contact_list_of_user(chips){
    if(chips.length>0){
      this.contract_list_of_user_search = []
      for(var i=0; i< chips.length ; i++){
        for(var j=0; j < this.contract_list_of_user.length ; j++){
          if(this.contract_list_of_user[j].front_title.includes(chips[i])){
            let obj = this.contract_list_of_user_search.find(o => o.front_title === this.contract_list_of_user[j].front_title);
            if(obj === undefined){
              this.contract_list_of_user_search.push(this.contract_list_of_user[j])
            }
          }
        }
      }
    }
    else{
      
      this.contract_list_of_user_search = this.contract_list_of_user
    }
    },
    closedatarecentcontracts(y) {
      this.$store.commit("adminchipdatarecentcontractsremove",[y, this.current_user_name]);
      this.function_for_tag_search_recent_contracts(this.chipdatarecentcontractsadmin)
    },
    enterdatarecentcontracts(x) {
      for(var i  = this.chipdatageneralsearchadmin.length -1 ; i >= 0 ; i-- ){
            this.closedatageneralsearch(this.chipdatageneralsearchadmin[i])
      }
      this.$store.commit("setchipdatarecentcontractsadmin",[x, this.current_user_name]);
      this.function_for_tag_search_recent_contracts(this.chipdatarecentcontractsadmin)
      this.searchdatarecentcontracts = "";
    },
    check_group(){
      var groups = []
      var all_contracts = []
      for (let [key,value] of Object.entries(this.contract_list_of_user)) {
        var contracts_array = []
        var group = store.getters.findgroupbyid(parseInt(key))
        if(group!== undefined){
          for(var i=0; i< value.length ; i++){
            var contract = store.getters.findcopycontract(value[i]);
            contracts_array.push(contract)
            all_contracts.push(contract)
          }
          var obj = {
            group_title : group.group_title, 
            contract : contracts_array,
            user : [{ name : this.current_user_name }]
          }
          groups.push(obj)
        }
      }
      this.allcontracts = all_contracts
      return groups
       
      // for(var i=0 ; i< this.contract_list_of_user.length ; i++){
      //   var x = groups.find(o => o.group_title ===this.contract_list_of_user[i].group_title)
      //   if(x === undefined){
      //     var obj = {
      //       group_title : this.contract_list_of_user[i].group_title,
      //       contract : [],
      //       user : [{ name : this.current_user_name }]
      //       }
      //     groups.push(obj)
      //   } 
      // }
      // for(i=0 ; i< this.contract_list_of_user.length ; i++){
      // for(var j = 0 ; j< groups.length ; j++){
      //   if(this.contract_list_of_user[i].group_title === groups[j].group_title){
      //       groups[j].contract.push(this.contract_list_of_user[i])
      //       break;
      //   }
      // }
    //}
    },
     listdashboard() {
      this.listdash = false;
      this.griddash = true;
    },
    griddashboard() {
      this.listdash = true;
      this.griddash = false;
    },
    recent_contracts_change_group_name(old_group_title, new_group_title) {
      var contracts = localStorage.getItem(
        "contracts of " + this.current_admin_name
      );
      if (contracts !== null) {
        var obj_name = JSON.parse(contracts);
        for (var key in obj_name) {
          var key_substr = key.substring(key.lastIndexOf("-") + 1);
          if (key_substr === old_group_title) {
            localStorage.removeItem("contracts of " + this.current_admin_name);
            var key_substr2 = key.substring(0, key.lastIndexOf("-") + 1);
            var new_contract_name = key_substr2 + new_group_title;
            var temp = obj_name[key];
            delete obj_name[key];
            obj_name[new_contract_name] = temp;
            localStorage.setItem(
              "contracts of " + this.current_admin_name,
              JSON.stringify(obj_name)
            );
          }
        }
      }
    },
    change_group_title(old_group_title, new_group_title) {
      store.commit("changegrouptitle_contract", [
        old_group_title,
        new_group_title,
      ]);
      store.commit("changegrouptitle_user", [old_group_title, new_group_title]);
      store.commit("changegrouptitle_recentcontracts", [
        old_group_title,
        new_group_title,
      ]);
      this.recent_contracts_change_group_name(old_group_title, new_group_title);
    },
    add_contract_in_group_array_test(
      old_group_title,
      new_group_title,
      contracts,
      keep_original_contract
    ) {
      var group = store.getters.findgroup(old_group_title)
      if(group.keep_original_contract !== keep_original_contract){
        store.commit('changekeeporiginalcontractingroup',[group.title,keep_original_contract])
      }
      if (new_group_title.length == 0) {
        this.add_contract_in_group_array(contracts);
      } else {
        let checking = this.$store.getters.checkByGroupNamesArray(
          new_group_title
        );
        if (checking === true) {
          return;
        }
        this.$store.commit("groupnamesarray", new_group_title);
        this.change_group_title(old_group_title, new_group_title);
        this.groupName = new_group_title;
        this.add_contract_in_group_array(contracts);
      }
      this.changegrouptitlename = "";
      this.$router.push({ path: "/contracts" }).catch(()=>{});
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
        fs.readFile("./" + user_name + "- u.json", "utf-8", function (err, data) {
          if (err) {
            console.log(err);
          }
          const decryptedString = cryptr.decrypt(data);
          localStorage.setItem("contracts of " + user_name, decryptedString);
        });
      }
    },

   currentusercontracts_v2(contract){
      var contractcc = store.getters.findcopycontract(contract.id);
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE");
      const [date, time_ws] = datetime.split(",");
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      store.commit("setrecentcontractsincopycontract", [
        this.current_user_name,
        contractcc,
        date,
        time,
      ]);
      store.commit("setrecentcontractsinuserdata", [
        this.current_user_name,
        contractcc.id,
      ]);
      this.route_path_v2(contract)
    },
    route_path_v2(contract) {
      localStorage.setItem("contract_org_name", contract.title);
      localStorage.setItem("current_contract_group_title", contract.group_id);
      localStorage.setItem("current_contract_title", contract.id);
      this.$router.push({ path: "/amazon" }).catch(()=>{});
    },
    currentusercontracts(x,y,z){
       //x : title
      //y : group_title
      //z : front_title
      for(var i=0;i<this.current_user_recent_contracts.length ; i++){
        if(this.current_user_recent_contracts[i].front_title === z){
          var c = this.current_user_recent_contracts[i]
          var d1 = new Date();
          var datetime = d1.toLocaleString("de-DE");
          const [date, time_ws] = datetime.split(",");
          var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
          c.date = date;
          c.time = time;
          this.current_user_recent_contracts.splice(i, 1);
          this.current_user_recent_contracts.unshift(c);

          store.commit("setcurrentuserrecentcontracts",this.current_user_recent_contracts);
          store.commit("setrecentcontractsinuserdata", [
            this.current_user_name,
            this.current_user_recent_contracts,
          ]);
          this.route_path(x,y,z)
          return true
        }
      }
      var d = new Date();
      datetime = d.toLocaleString("de-DE");
      const [date, time_ws] = datetime.split(",");
      time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      var obj = {
        title: "",
        url: "",
        group_title: "",
        front_title: "",
        date: "",
        time: "",
        last_edited: "",
        isedited:false,
      };
      // let location2 = path.join(process.cwd(), "thumbnails");
      // location2 = location2.replace(/\\/g, "/");
      obj.title = x;
      obj.group_title = y;
      obj.front_title = z;
      obj.last_edited = this.current_user_name;
      // obj.url =
      //   "local-resource://" +
      //   location2 +
      //   "/" +
      //   z +
      //   "-" +
      //   y +
      //   "-" +
      //   this.current_user_name +
      //   "-u.png";
      // "./assets/" + z + "-" + y + "-" + this.current_admin_name + ".png";
      obj.date = date;
      obj.time = time;
      if (this.current_user_recent_contracts.length === 5) {
        this.current_user_recent_contracts.pop();
        store.commit(
          "setcurrentuserrecentcontracts",
          this.current_user_recent_contracts
        );
        store.commit("setrecentcontractsinuserdata", [
            this.current_user_name,
            this.current_user_recent_contracts,
          ]);
      }
      this.current_user_recent_contracts.unshift(obj);
      store.commit(
        "setcurrentuserrecentcontracts",
        this.current_user_recent_contracts
      );
      store.commit("setrecentcontractsinuserdata", [
            this.current_user_name,
            this.current_user_recent_contracts,
          ]);
       this.route_path(x,y,z);
    },
    currentadmincontracts(x, y, z) {
      //x : title
      //y : group_title
      //z : front_title
      for (var i = 0; i < this.current_admin_recent_contracts.length; i++) {
        if (this.current_admin_recent_contracts[i].front_title === z) {
          var c = this.current_admin_recent_contracts[i];
          var d1 = new Date();
          var datetime = d1.toLocaleString("de-DE");
          const [date, time_ws] = datetime.split(",");
          var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
          c.date = date;
          c.time = time;

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
      var d = new Date();
      datetime = d.toLocaleString("de-DE");
      const [date, time_ws] = datetime.split(",");
      time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      var obj = {
        title: "",
        url: "",
        group_title: "",
        front_title: "",
        date: "",
        time: "",
        last_edited: "",
        isedited:false,
      };
      let location2 = path.join(process.cwd(), "thumbnails");
      location2 = location2.replace(/\\/g, "/");
      obj.title = x;
      obj.group_title = y;
      obj.front_title = z;
      obj.last_edited = this.current_admin_name;
      obj.url =
        "local-resource://" +
        location2 +
        "/" +
        z +
        "-" +
        y +
        "-" +
        this.current_admin_name +
        ".png";
      // "./assets/" + z + "-" + y + "-" + this.current_admin_name + ".png";
      obj.date = date;
      obj.time = time;
      //  z + "-" + y + "-" + this.current_admin_name + ".png"
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

    //  recentcontractforadmin(x,y,z) {
    recentcontractforadmin(c) {
      //x:contract_title
      //y:group_title
      //z:contract_front_title
      //  this.route_path(x,y,z);
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE");
      const [date, time_ws] = datetime.split(",");
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      c.date = date;
      c.time = time;
      this.route_path(c.title, c.group_title, c.front_title);
    },
    route_path(x, y, z) {
      // x -> title
      // y -> group_title
      //z -> front_title
      localStorage.setItem("contract_org_name", x);
      localStorage.setItem("current_contract_group_title", y);
      localStorage.setItem("current_contract_title", z);
      this.$router.push({ path: "/amazon" }).catch(()=>{});
      // if (x === "AGB Amazon") {
      //   localStorage.setItem("contract_org_name", x);
      //   localStorage.setItem("current_contract_group_title", y);
      //   localStorage.setItem("current_contract_title", z);
      //   this.$router.push({ path: "/amazon" });
      // } else if (x === "AGB Shopify") {
      //   localStorage.setItem("contract_org_name", x);
      //   localStorage.setItem("current_contract_group_title", y);
      //   localStorage.setItem("current_contract_title", z);
      //   this.$router.push({ path: "/shopify" });
      // } else if (x === "AGB Ebay") {
      //   localStorage.setItem("contract_org_name", x);
      //   localStorage.setItem("current_contract_group_title", y);
      //   localStorage.setItem("current_contract_title", z);
      //   this.$router.push({ path: "/ebay" });
      // } else if (x === "Einwilligung Mitarbeiter_Fotos_Videos") {
      //   localStorage.setItem("contract_org_name", x);
      //   localStorage.setItem("current_contract_group_title", y);
      //   localStorage.setItem("current_contract_title", z);
      //   this.$router.push({ path: "/consent" });
      // } else if (x === "Einwilligung Fotos_Videos") {
      //   localStorage.setItem("contract_org_name", x);
      //   localStorage.setItem("current_contract_group_title", y);
      //   localStorage.setItem("current_contract_title", z);
      //   this.$router.push({ path: "/consent1" });
      // } else if (x === "Einwilligung Fotos_Videos Veranstaltungen") {
      //   localStorage.setItem("contract_org_name", x);
      //   localStorage.setItem("current_contract_group_title", y);
      //   localStorage.setItem("current_contract_title", z);
      //   this.$router.push({ path: "/consentV" });
      // }
       /*
      } else if (x === "Arbeitsvertrag") {
        localStorage.setItem("contract_org_name", x);
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/employment" });
      } else if (x === "Vertraulichkeitserklärung") {
        localStorage.setItem("contract_org_name", x);
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/confidential" });
      } else if (x === "Arbeitsvertrag befristet") {
        localStorage.setItem("contract_org_name", x);
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/limited" });
      } else if (x === "Arbeitsvertrag geringfügig") {
        localStorage.setItem("contract_org_name", x);
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/marginal" });
      } else if (x === "Aufhebungsvertrag") {
        localStorage.setItem("contract_org_name", x);
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/termination" });
      } else if (x === "Vertrag freie Mitarbeit") {
        localStorage.setItem("contract_org_name", x);
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/free" });
      } else if (x === "Geschäftsführer Anstellungsvertrag") {
        localStorage.setItem("contract_org_name", x);
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/managing" });
      } else if (x === "Leitender Angestelltenvertrag") {
        localStorage.setItem("contract_org_name", x);
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/line" });
      } else if (x === "Placeholder") {
        localStorage.setItem("contract_org_name", x);
        localStorage.setItem("current_contract_group_title", y);
        localStorage.setItem("current_contract_title", z);
        this.$router.push({ path: "/placeholder" });
        */
    },

    recentcontractforuser(x, y, z) {
      //x:contract_title
      //y:group_title
      //z:contract_front_title
      this.route_path(x, y, z);
    },
    async delete_grouptest() {
      let options = {
        buttons: ["Nein", "Ja"],
        message: "Wollen Sie diesen Arbeitsbereich wirklich löschen?",
      };
      let response1 = await dialog.showMessageBox(options);
      return response1.response;
    },

  delete_group(x) {
      var j;
      //var groups_by_specific_admin;
      const group_title = x;
      var group = store.getters.findgroup(group_title);
      // console.log(group)
      var group2 = {}
      Object.assign(group2,group);
      var confirm = this.delete_grouptest();
      confirm.then((x) => {
        if (x === 1) {
          store.commit('pushgroupinpapierkorb',[this.current_admin_name,group2])
          var Clength = group.contract.length;
          for (var l = 0; l < Clength; l++) {
            var Ctitle = group.contract[l].front_title;
            for (
              var i = 0;
              i < this.current_admin_recent_contracts.length;
              i++
            ) {
              if (
                this.current_admin_recent_contracts[i].front_title ===
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
                store.commit("setrecentcontractsinuserdata", [
                  this.current_user_name,
                  this.current_user_recent_contracts,
                ]);
                break;
              }
            }
          }
          var length = group.user.length;
          for (j = length; j > 0; j--) {
            store.commit("deleteuserfromgroup", [group.user[j - 1].name, group.contract]);
            
          }
          store.commit("deletegroup", group);
          var admin_data = store.getters.checkByName(this.current_admin_name);
          this.$store.commit(
            "setcurrentadmindeleted",
            admin_data[0].deleted_data
          );
          var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
          );
          store.commit("setcurrentadmingroups", groups_by_specific_admin);
          this.current_admin_groups = store.state.current_admin_groups;
          store.dispatch("updatewritejson");
        }
      });
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
      this.contractmenu = false;
      for (var i = 0; i < x.length; i++) {
        this.add_contract_in_group(x[i]);
      }
    },

    copy_creation_of_contract(contract_title, group_title) {
      let obj = this.current_admin_versions.find(
        (o) => o.contract_title === contract_title
      );

      let front_title =
        contract_title + "_Verträge_" + obj.contract_total_version;

      store.commit("copycontractsavefunc", {
        title: contract_title,
        front_title: front_title,
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
      var b = store.getters.findcopycontract([front_title, group_title]);
      // console.log(b);
      return b;
    },

   add_contract_in_group(x) {
      this.contractmenu = false;
      const group_title = this.groupName;
      var a = store.getters.checkByGroupName(group_title);
      if (a[0].contract.length === 0) {
        var b = this.copy_creation_of_contract(x, group_title);
        store.commit("addcontractgroupfunc", [a[0], b]);
        if (a[0].user.length !== 0) {
          store.commit("addcontractinallusercontractsingroup", [a[0], b]);
        }
      } else {
        var i;
        for (i = 0; i < a[0].contract.length; i++) {
          if (a[0].contract[i].title === x) {
            return; 
          }
        }
        b = this.copy_creation_of_contract(x, group_title);
        store.commit("addcontractgroupfunc", [a[0], b]);
        if (a[0].user.length !== 0) {
          store.commit("addcontractinallusercontractsingroup", [a[0], b]);
        }
       
      }
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
            this.current_admin_name
          );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        store.dispatch("updatewritejson");
      this.auto_contracts = [];
      this.$router.push({ path: "/contracts" }).catch(()=>{});
      return;
    },
    //   async delete_contract_from_grouptest(){
    //     let options  = {
    //     buttons: ["Ja","Nein",],
    //          message: "Wollen Sie diesen Arbeitsbereich wirklich löschen?"
    //     }
    //     let response1 = await dialog.showMessageBox(options)
    //      console.log(response1.response);
    //     return response1.response;
    // },
   delete_contract_from_group(x, y) {
      const contract_title = x;
      var group_title = y;
      var group = store.getters.findgroup(group_title);
      var contract = store.getters.findcopycontractfordeletion([contract_title,this.current_admin_name]);
      store.commit("deleted_data", [this.current_admin_name, contract]);
      for (var i = 0; i < this.current_admin_recent_contracts.length; i++) {
        if (this.current_admin_recent_contracts[i].front_title === x) {
          this.current_admin_recent_contracts.splice(i, 1);
          store.commit(
            "setcurrentadminrecentcontracts",
            this.current_admin_recent_contracts
          );
          store.commit("setrecentcontractsinadmindata", [
            this.current_admin_name,
            this.current_admin_recent_contracts,
          ]);
          store.commit("setrecentcontractsinuserdata", [
            this.current_user_name,
            this.current_user_recent_contracts,
          ]);
          break;
        }
      }
      var admin_data = store.getters.checkByName(this.current_admin_name);
      this.$store.commit(
        "setcurrentadmindeleted",
        admin_data[0].deleted_data
      );
      store.commit("deletecontractfromgroup2", [contract_title, group]);
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
        this.current_admin_name
      );
      store.commit("setcurrentadmingroups", groups_by_specific_admin);
      this.current_admin_groups = store.state.current_admin_groups;
      store.dispatch("updatewritejson");
      this.contract_title = "";
      this.$router.push({ path: "/contracts" }).catch(()=>{});
      return;
    },
  add_user_in_group_array(x){
    for(var i=0; i< x.length; i++){
      this.add_user_in_group(x[i])
    }
  },
  add_user_in_group(x) {
      var group_title = this.groupName;
      var a = store.getters.checkByGroupName(group_title);
      var c = store.getters.finduser(x);
      if (a[0].user.length === 0) {
        store.commit("addusergroupfunc", [a[0], c]);
        store.commit("userupdatecontractgroupfunc", [a[0], c]);
      } else {
        var i;
        for (i = 0; i < a[0].user.length; i++) {
          if (a[0].user[i].name === c.name) {
            return;
          }
        }
        store.commit("addusergroupfunc", [a[0], c]);
        store.commit("userupdatecontractgroupfunc", [a[0], c]);
      }
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        store.dispatch("updatewritejson");
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
      store.commit("deleteuserfromgroupdeletion", [
        user,
        group,
        this.current_admin_name,
      ]);
     var admin_data =store.getters.checkByName(this.current_admin_name) 
      this.$store.commit(
        "setcurrentadmindeleted",
        admin_data[0].deleted_data
      );
      // store.commit("deleteuserfromgroup", [user, group]);
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
        this.current_admin_name
      );
      store.commit("setcurrentadmingroups", groups_by_specific_admin);
      this.current_admin_groups = store.state.current_admin_groups;
      // var users_by_specific_admin = store.getters.getallByAdminName(
      //   this.current_admin_name
      // );
      // this.$store.commit("setcurrentadminusers", users_by_specific_admin);
      // this.current_admin_users = store.state.current_admin_users;
      store.dispatch("updatewritejson");
      // dialog.showErrorBox(
      //   "title here",
      //   user.user_name + " is deleted from " + group.group_title
      // );
      this.$router.push({ path: "/contracts" }).catch(()=>{});
      this.auto_users = [];
      this.group_title = "";
      return;
      // }
    },

    submit1(x, y) {
      this.menu1 = false;
      this.menu2 = false;
      this.originalmenu = false;
      var a,
        b,
        c,
        i,
        j = null;
      var contractarray = new Array(),
        userarray = new Array();
      a = this.$store.getters.checkByGroupName(this.group_title);
      if(this.group_title.length === 0)
      {
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'fehlende Beschreibung', 
        detail: 'Bitte fügen sie eine Beschreibung hinzu', 
      });
        return;
      }
      let checking = this.$store.getters.checkByGroupNamesArray(
        this.group_title
      );
      if (checking === true || a.length !== 0) {
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
        type: 'error', 
        title: 'Fehler', 
        message: 'Dieser Name existiert bereits als Arbeitsbereich', 
        detail: 'Bitte andere Beschreibung hinzufügen', 
      });
        return;
      } else {
        this.$store.commit("groupnamesarray", this.group_title);
        this.$store.commit("groupsavefunc", {
          title: this.group_title,
          user: [],
          contract: [],
          admin_name: this.current_admin_name,
          keep_original_contract : this.iconcheck//true/false,
        });
        a = store.getters.checkByGroupName(this.group_title);
        for (i = 0; i < x.length; i++) {
          contractarray[i] = x[i].toString();
          b = this.copy_creation_of_contract(
            contractarray[i],
            this.group_title
          );
          this.$store.commit("addcontractgroupfunctionforall", [a[0], b]);
        }
        for (j = 0; j < y.length; j++) {
          userarray[j] = y[j].toString();
          c = store.getters.finduser(userarray[j]);
          this.$store.commit("addusergroupfunc", [a[0], c]);
        }
        var group_contracts = store.getters.getgroupcontracts(this.group_title);
        for (j = 0; j < y.length; j++) {
          c = store.getters.finduser(userarray[j]);
          
          this.$store.commit("addcontractinuserviaonetime", [
            group_contracts,
            c,
          ]);
        }
        var groups_by_specific_admin = store.getters.checkGroupByAdminName(
          this.current_admin_name
        );
        store.commit("setcurrentadmingroups", groups_by_specific_admin);
        this.current_admin_groups = store.state.current_admin_groups;
        store.dispatch("updatewritejson");
      }

      this.group_title = "";
      this.auto_contracts = [];
      this.auto_users = [];
      this.iconcheck = false;
      this.$router.push({ path: "/contracts" }).catch(()=>{});
      return;
    },

    all_user_created_by_specific_admin(x) {
      var admin = "Eva Vonau";
      this.groupName = x;
      this.all_users = store.getters.getallByAdminName(admin);
    },
    // Eva Vonau
    // admin
    adduser() {
      var i = 0;
      for (i = 1; i < 5; i++) {
        var user_name = "user" + i;
        var user_email = "user" + i + "@gmail.com";
        var admin_name = "Eva Vonau";
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
            password: "123456789",
          });
          store.dispatch("updatewritejson");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700,800,900%22");
.expand::-webkit-scrollbar {
  width: 5px;
}
.expand {
  overflow-y: auto;
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

.expandd::-webkit-scrollbar {
  height: 5px;
}
.expandd {
  overflow-x: auto !important;
  scrollbar-color: #a0a0a0 transparent;
  scrollbar-width: thin;
}
.expandd::-webkit-scrollbar-track {
  background: transparent;
}
.expandd::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 10px;
}
.expand1::-webkit-scrollbar {
  height: 5px;
}
.expand1 {
  overflow-x: auto;
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
div.expand2::-webkit-scrollbar {
  width: 1px !important;
  height: 5px;
}
div.expand2 {
  overflow-x: auto !important;
  overflow-y: hidden;
  scrollbar-color: #a0a0a0;
  scrollbar-width: thin;
}
div.expand2::-webkit-scrollbar-track {
  background: transparent;
}
div.expand2::-webkit-scrollbar-thumb {
  background-color: #a0a0a0;
  border-radius: 10px;
}
div.sticky {
  position: -webkit-sticky !important; /* Safari */
  position: sticky !important;
}
::v-deep .v-autocomplete__content > .v-list__tile {
  height: 100px !important;
}
.div_hover { background-color: transparent; }

.div_hover:hover { background-color: #EEEEEE; }

// #no-background-hover::after {
//    background-color: #FFA300 !important;
//    opacity: 0.6;
//    color: black;
// }
</style>

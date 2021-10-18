<template>
  <v-main class="ma-0 pa-0">
    <div style="display:flex;">
    <v-card
      elevation="3"
    
      v-bind:class="[
        group_details ? 'group_details_Active' : 'group_details_DeActive',
      ]"
    >
     <!-- border: '1px solid',
          borderColor: group.group_color,
          borderRadius: '1px', -->
      <!-- left side data -->
      <div
        class="ma-0 pa-0"
        :style="{
          width: '80%',
          height: '90vh',
         
          backgroundColor: group.group_lightcolor,
          position: relative,
        }"
      >
        <v-app-bar flat :color="group.group_color" elevation="2">
          <v-btn icon @click="back_func()">
            <v-icon color="white" 
            >mdi-keyboard-backspace</v-icon
          >
          </v-btn>
          <div style="display: flex;" >
             <v-menu
                  offset-y
                  bottom
                  :close-on-content-click="false"
                  content-class="handshake"
                  max-width="38"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon class="ml-3"
                    style="margin-top:2px;"
                      v-on="on"
                      v-bind="attrs">
                  <v-icon
                      
                      color="white"
                      >{{ group.group_icon }}</v-icon
                    >
                    </v-btn>
                   
                  </template>
                  <v-card elevation="0" width="38" min-height="160">
                    <v-btn
                      icon
                      v-for="(item_icon, index) in list_of_icons"
                      :key="index"
                      @click="changegroupicon(item_icon.icon, group)"
                    >
                      <v-icon v-if="item_icon.icon !== group.group_icon">{{
                        item_icon.icon
                      }}</v-icon>
                      <v-icon
                        v-if="item_icon.icon === group.group_icon"
                        :color="group.group_color"
                        >{{ item_icon.icon }}</v-icon
                      >
                    </v-btn>
                    <v-menu
                      offset-y
                      bottom
                      right
                      :close-on-content-click="false"
                      content-class="addgroupiconcss"
                      max-width="200"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon>
                          <v-icon v-on="on" v-bind="attrs">mdi-plus</v-icon>
                        </v-btn>
                      </template>
                      <v-card elevation="0" width="200" height="100">
                        <v-row class="pt-5 pl-5">
                          <v-btn
                            @click="addgroupicon(add_icon, group)"
                            icon
                            v-for="(add_icon, index) in group_list_of_icons"
                            :key="index"
                          >
                            <v-icon v-if="add_icon.icon !== group.group_icon">{{
                              add_icon.icon
                            }}</v-icon>
                            <v-icon
                              v-if="add_icon.icon === group.group_icon"
                              :color="group.group_color"
                              >{{ add_icon.icon }}</v-icon
                            >
                          </v-btn>
                        </v-row>
                      </v-card>
                    </v-menu>
                  </v-card>
                </v-menu>
            <!-- <v-icon color="white">{{ group.group_icon }}</v-icon> -->
             <v-menu
                  :close-on-content-click="false"
                  offset-x
                  right
                  max-width="330"
                  content-class="uppercardmenu"
                  rounded="xl"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <p style="color: white" class="ml-5 mt-4" v-on="on" v-bind="attrs">
              {{ group.group_title }}
            </p>
                  </template>
                  <v-card
                    elevation="0"
                    width="330"
                    min-height="100"
                    rounded="xl"
                    class=""
                    outlined
                  >
                    <div style="width: 23em" class="pl-4 pr-2 pt-8">
                      <v-text-field
                        :label="group.group_title"
                        v-model="changegrouptitlename"
                        outlined
                        dense
                        :color="group.group_color"
                        rounded
                      >
                      </v-text-field>
                    </div>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        class="mt-n4"
                       :style="{
                         textTransform: none,
                         fontFamily:raleway,
                         fontSize: 18,
                         fontWeight: 700,
                         color:group.group_color}"
                        text
                        @click="
                        add_contract_in_group_array_test(
                            group.group_id,
                            changegrouptitlename,
                            auto_contracts,
                            group.keep_original_contract
                          )
                        "
                      >
                        Anlegen 
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
           
          </div>
          <v-spacer></v-spacer>
          <div style="display: flex">
            <v-menu
              :close-on-content-click="false"
              offset-y
              bottom
              left
              content-class="my-menu1"
              max-width="350"
                >
                  <template v-slot:activator="{ on, attrs }">
                     <v-btn
                  text
                  style="color: white; border-color: white; border: solid;margin-top:5px"
                  class="mr-1"
                  v-on="on"
                  v-bind="attrs"
                >
                  <v-icon color="white">mdi-plus</v-icon>
               NEUER VERTRAG
                </v-btn>
                  </template>
                  <v-card
                   elevation="5"
                class="ma-0 pa-0"
                width="350"
                min-height="100"
                style="overflow: hidden; border-radius: 18px 18px 18px 18px"
                  >
                    <v-row justify="center" class="pt-9">
                    <div class="" style="width:21em">
                  <v-card
                  elevation="0"
                  outlined
                  width="350"
                  :style="{borderColor:group.group_color}"
                  rounded="xl"
                  min-height="10"
                  class=" mb-4"
                >
                <v-card
                v-if="auto_contracts.length!==0"
                          elevation="0"
                          color="transparent"
                          min-height="1"
                          width="350"
                          class="pt-4 pl-4 pb-3"
                        >
                          <v-row>
                            <div
                              v-for="(item, indexj) in auto_contracts"
                              :key="indexj"
                              class="ml-3"
                            >
                              <v-chip
                                :style="{borderColor:group.group_color}"
                                outlined
                                small
                                class="mt-1"
                              >
                                <v-icon size="12" class="mr-1"
                                :color="group.group_color"
                                  >mdi-file-document-outline</v-icon
                                >
                                {{ item | truncateEnd(31, "...") }}
                              </v-chip>
                            </div>
                          </v-row>
                        </v-card>
                  <v-expansion-panels   accordion  flat>
                    <v-expansion-panel
                      class=" "
                    
                      style="background-color:transparent"
                    >
                      <v-expansion-panel-header   style="height:1em;border-radius:20px;">
                        <v-icon @click.stop="onClick()"  :color="group.group_color" class="ml-n2 mr-2">mdi-magnify</v-icon>
                        <v-text-field
                        dense
                        @click.stop="onClick()"
                        v-model="searchallcontracts"
                        class="pt-4 pl-n1 some-style"
                        placeholder="Verträge"
                        :color="group.group_color"
                        >
                        </v-text-field>
                        <template v-slot:actions >
                          <v-icon  class="mr-1" :color="group.group_color">mdi-menu-down</v-icon>
                        </template>
                      </v-expansion-panel-header >
                      <v-expansion-panel-content style="">
                        <v-divider
                          :style="{backgroundColor:group.group_color}"
                          class="mt-n2 mb-2 ml-n1 mr-3"
                        ></v-divider>
                        <v-card
                          elevation="0"
                          class="expand ml-n2"
                          height="190"
                          width="340"
                          style="overflow-x: hidden"
                        >
                          <div
                            class="pt-4 ml-n1"
                            v-for="(item) in all_contracts_search"
                            :key="item.contract_title"
                          >
                            <v-row class="mt-n6 mb-n6">
                              <v-col cols="1">
                                <v-icon size="21" class="mt-n3 ml-1"
                                :color="group.group_color"
                                  >mdi-file-document-outline</v-icon
                                >
                              </v-col>
                              <v-col cols="9">
                                <p
                                  class="ml-2"
                                  style="font-size: 11px; font-weight: 500"
                                >
                                  {{
                                    item.contract_title | truncateEnd(29, "...")
                                  }}
                                </p>
                              </v-col>
                            
                              <v-col cols="1">
                                <v-checkbox
                                 :color="group.group_color"
                                 v-model="auto_contracts"
                                  :value="item.contract_title"
                                  class="mt-n2 ml-n3"
                                ></v-checkbox>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card>
                    </div>
                    </v-row>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        class=""
                       :style="{
                         textTransform: none,
                       fontFamily:raleway,
                        fontSize: 18,
                         fontWeight: 700,
                         color:group.group_color}"
                        text
                        @click="
                          add_contract_in_group_array_updated(
                            group.group_id,
                            auto_contracts,
                          )
                        "
                      >
                        Anlegen
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
            <v-menu
              offset-y
              bottom
              z-index="0"
              left
              :close-on-content-click="false"
              content-class="group_settings_css"
              max-width="150"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-on="on" v-bind="attrs" class="ml-1 mr-n2">
                  <v-icon color="white"> mdi-cog-outline </v-icon>
                </v-btn>
              </template>
              <v-card elevation="0" width="150" height="178">
                <v-list dense>
                  <v-list-item
                    @click="groupsetting(group,item)"
                    v-for="(item, index) in group_settings_main"
                    :key="index"
                  >
                    <v-list-item-icon v-if="item.icon==='mdi-information-outline' || item.icon==='mdi-delete-outline' || item.icon==='mdi-file-multiple-outline'">
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-subtitle
                        v-if="item.title==='information' || item.title==='Löschen'  || item.title==='Kopie erstellen' "
                      class="ml-n4 mt-1"
                      v-text="item.title"
                    >
                    </v-list-item-subtitle>
                     <v-menu
                          v-if="
                            item.title === 'Farbe' &&
                            item.icon === 'mdi-circle'
                          "
                          :close-on-content-click="false"
                          offset-y
                          bottom
                          content-class="my-color-list"
                          left
                          width="230"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-list-item  v-on="on"
                              v-bind="attrs" class="ml-n4 mr-n4" >
                               <v-list-item-icon >
                              <v-icon
                                :color="group.group_color"
                                v-text="item.icon"
                              ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-subtitle
                              v-text="item.title"
                              class="ml-n3"
                             
                            ></v-list-item-subtitle>
                           
                            </v-list-item>
                            
                          </template>
                          <v-card elevation="0" width="230" height="113">
                            <v-row class="pl-5 pt-5">
                              <v-btn
                                icon
                                class="ml-1 mt-1 mr-1"
                                @click="changecolor(group, itemcolor)"
                                v-for="(itemcolor, index) in list_of_color_item"
                                :key="index"
                              >
                                <v-icon :color="itemcolor.iconcolor"
                                  >mdi-circle</v-icon
                                >
                              </v-btn>
                            </v-row>
                          </v-card>
                        </v-menu>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </div>
        </v-app-bar>
        <div
          style="background-color: white; height: 6vh; display: flex"
          class=""
        >
          <div
            style="
              background-color: transparent;
              display: flex;
              overflow: hidden;
              max-width: 70em;
            "
          >
            <div class="tabs-group">
              <draggable
                :list="tabs"
                v-bind="dragOptions"
                :style="tabsWidth"
              >
                <transition-group class="tabs">
                  <template v-for="tab in tabs">
                   
                    <div
                      :style="cssVars"
                      :class="[active(tab.id), 'tab']"
                      :key="tab.id"
                      @mousedown="changeTab(tab.id)"
                    >
                      <v-icon  class="mt-n4  mr-2"
                        >mdi-file-document-outline</v-icon
                      >

                      <p class="text mt-1" v-if="tab.name==='alle Unterlagen'">
                        {{ tab.name | truncateEnd(15, "..") }}
                      </p>
                       <p class="text mt-1" v-if="tab.name!=='alle Unterlagen'">
                        {{ tab.name | truncateEnd(10, "..") }}
                      </p>
                     <v-spacer></v-spacer>
                      <v-icon
                      v-if="tab.id>1"
                        small
                        class=" mt-n3"
                        @mousedown="beforeCloseTab($event)"
                        @click="closeTab(tab)"
                        >mdi-close</v-icon
                      >

                      <v-icon small class="mt-n3 mr-2"
                             v-if="tab.id>1"
                        >mdi-dots-vertical</v-icon
                      >
                    </div>
                  </template>
                </transition-group>
              </draggable>
              <!-- <v-btn icon key="add-button" class="mt-n3 ml-3" @click="addTab">
                <v-icon>mdi-plus</v-icon>
              </v-btn> -->
            </div>
          </div>
          <v-spacer></v-spacer>
          <div style="display:block" class="mr-2 mt-2">
            <v-menu
              v-model="menu3"
              :close-on-content-click="false"
              offset-y
              bottom
              left
              content-class="my-menu2"
              max-width="300"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-on="on" v-bind="attrs" class="ml-2 mb-1 ">
                  <v-icon class="">mdi-magnify</v-icon>
                </v-btn>
              </template>
              <v-card elevation="0" width="300" min-height="180" style="overflow:hidden">
                <div class="ml-3 pt-6">
                  <v-text-field
                    style="width: 17em"
                    :color="group.group_color"
                    clearable
                    outlined
                    dense
                    placeholder
                    v-model="add_tab_chip_model"
                    label="add Firm"
                    prepend-inner-icon="mdi-magnify"
                    rounded
                    @keyup.enter="addtabchipdata()"
                    class=""
                  ></v-text-field>
                  <v-row style="width: 19em" class="ml-3 mb-3">
                    <v-chip-group v-for="(itemchip, index) in group.add_tab_chip" :key="index">
                      <v-chip @click="addtabchipingrouptab(itemchip)" :color="group.group_color" outlined small close  @click:close="removetabchipdata(itemchip)"> {{itemchip}} </v-chip>
                    </v-chip-group>
                  </v-row>
                </div>
              </v-card>
            </v-menu>
            <v-icon class="mx-2 md-2">mdi-check-box-multiple-outline</v-icon>
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              offset-y
              bottom
              left
              content-class="my-menu2"
              max-width="380"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn  
                icon v-on="on" 
                v-bind="attrs" 
                class="ml-2 mt-1"
                >
                  <v-icon>mdi-upload-outline</v-icon>
                </v-btn>
              </template>
              <v-card
                elevation="0"
                class="ma-0 pa-0"
                width="380"
                min-height="200"
                style="overflow: hidden; border-radius: 18px 18px 18px 18px"
              >
                <p
                  class="ml-5 pt-2"
                  style="
                    font-family: raleway;
                    font-size: 18px;
                    font-weight: 700;
                    color: #474747;
                  "
                >
                  Unterlage hochladen
                </p>
                <div style="display: flex" class="mt-4">
                  <v-card
                    class="ml-4 mr-2"
                    elevation="0"
                    width="250"
                    height="110"
                    outlined
                  >
                    <v-row justify="center">
                      <v-btn
                      @click.stop="pdf_png_import"
                     
                      class="mt-11"
                      elevation="false"
                      color="#ffffff"
                      >
                      <v-icon  x-large
                     >mdi-upload-outline</v-icon>
                      </v-btn>
                    </v-row>
                  </v-card>

                  <div style="width: 17em">
                    <v-text-field
                      style="width: 14em"
                      color="#767577"
                      v-model="group_title"
                      :items="admincarditems"
                      clearable
                      outlined
                      dense
                      placeholder
                      label="add Name"
                      rounded
                      class=""
                    ></v-text-field>
                    <v-row class="mt-n6">
                      <v-col cols="11" class="ml-n4">
                        <v-card
                          elevation="0"
                          outlined
                          width="300"
                          style="border-color: #767577"
                          rounded="xl"
                          min-height="20"
                          class="ml-5 mb-7"
                        >
                          <v-card
                            v-if="auto_users.length !== 0"
                            elevation="0"
                            color="transparent"
                            min-height="1"
                            width="300"
                            class="pb-3 pt-4 pl-5"
                          >
                            <v-row>
                              <div
                                v-for="(item, index) in auto_users"
                                :key="index"
                                class="ml-3"
                              >
                                <v-chip
                                  style="border-color: #767577"
                                  outlined
                                  small
                                  class="mt-1"
                                >
                                  <v-icon size="12" class="mr-1" color="#474747"
                                    >mdi-account-outline</v-icon
                                  >
                                  {{ item | truncateEnd(18, "...") }}
                                </v-chip>
                              </div>
                            </v-row>
                          </v-card>
                          <v-expansion-panels flat accordion>
                            <v-expansion-panel
                              class=""
                              style="background-color: transparent"
                            >
                              <v-expansion-panel-header
                                style="height: 1em; border-radius: 20px"
                              >
                                <!-- <v-icon @click.stop="onClick()" class="ml-n2 mr-2" color="#474747">mdi-magnify</v-icon> -->

                                <v-text-field
                                  dense
                                  @click.stop="onClick()"
                                  v-model="searchcurrentadminusers"
                                  class="pt-4 pl-n1 some-style"
                                  placeholder="Unterlagen Sorten"
                                >
                                </v-text-field>
                                <template v-slot:actions>
                                  <v-icon class="mr-n3" color="#474747"
                                    >mdi-menu-down</v-icon
                                  >
                                </template>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <v-divider
                                  style="background-color: #767577"
                                  class="mt-n2 mb-2 ml-n1 mr-3"
                                ></v-divider>
                                <v-card
                                  elevation="0"
                                  class="expand ml-n3 pr-n3"
                                  height="190"
                                  width="340"
                                  style="overflow-x: hidden"
                                >
                                  <div
                                    class="pt-4"
                                    v-for="item in current_admin_users_search"
                                    :key="item.name"
                                  >
                                    <v-row class="mt-n6 mb-n6">
                                      <v-col cols="1">
                                        <v-icon
                                          size="21"
                                          class="ml-1 mt-n1"
                                          color="#474747"
                                          >mdi-account-outline</v-icon
                                        >
                                      </v-col>
                                      <v-col cols="8">
                                        <p class="ml-2">
                                          {{
                                            item.name | truncateEnd(18, "...")
                                          }}
                                        </p>
                                      </v-col>
                                      <v-col cols="1">
                                        <v-checkbox
                                          :color="maincolor.theme"
                                          v-model="auto_users"
                                          :value="item.name"
                                          class="mt-n2 ml-n3"
                                        ></v-checkbox>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </v-card>
                              </v-expansion-panel-content>
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="mt-n2"
                    style="
                      text-transform: none;
                      font-family: raleway;
                      font-size: 18px;
                      font-weight: 700;
                      color: #474747;
                    "
                    text
                    @click="submit1(auto_contracts, auto_users)"
                  >
                    Anlegen
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </div>
        </div>
  
         
        

          <template v-for="tab in $data.tabs">
        <div :class="[active(tab.id), 'tab-content']" :key="tab.id">
        <v-card
        elevation="0"
        color="white"
        min-width="60%"
        min-height="70vh"
        class="ml-3 mt-3 mr-3 pt-3 mb-5"
      
        >
         <!-- 'items-per-page-options': [5,10, 20, 30, 40, 50,-1] -->
           <v-data-table
             
             
              :headers="headerstest"
              :items="tab.contracts"
              class="mt-14"
         
               :items-per-page="5"
      :footer-props="{
           'items-per-page-text':'Zeilen pro Seite11',
          
           
      }"
     
     
              item-key="front_title"
            >
             
            <template v-slot:body="{ items }">
        <tbody>
          <tr :class="key === selectedRow ? 'custom-highlight-row' : ''" @click="rowSelect(key,item)" v-for="(item, key) in items" :key="item.front_title"  :style="cssVars">
          
            <td style="cursor: pointer; "><p
                  style="cursor: pointer; "
                  class="mt-4"
                  v-if="item.isedited === true"
                >
                  {{ item.front_title | truncateEnd(12, "...") }}
                </p>
                <p
                  style="cursor: pointer; "
                 class="mt-4"
                  v-if="item.isedited === false"
                >
                  {{ item.title | truncateEnd(13, "...") }}
                </p></td>
                <!-- <td>  <img :src="'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'" style="width: 50px; height: 50px" /></td> -->
            <td style="cursor: pointer; "> <p class="mt-4" style="">{{ item.contract_partner.Firmennamemodel }}</p></td>
            <td style="cursor: pointer; "><p class="mt-4" style="" v-if="item.deadline">{{ item.deadline }}</p>
           <p class="mt-4" style=""  v-if="!item.deadline">-</p></td>
            <td style="cursor: pointer; ">
              <div style="display: flex" class="mt-4">  <p class="" style="">{{ item.date }}</p>
               <p class="ml-1 mr-1" style=""> | </p>
               <p class="" style="">{{ item.time }}</p>
              </div>
              </td>
            <td style="cursor: pointer; "> <div style="display: flex" class="mt-4">
            <p style="">{{ item.status }}</p>
            <v-card
              elevation="0"
              width="2"
              height="20"
              color="grey"
              class="ml-2"
            >
            </v-card>
            <p class="ml-2" style="">{{ item.percentage }} %</p>
          </div></td>
            <td style="cursor: pointer; "><p class="mt-3" style="">{{ item.type }}</p></td>
            <td style="cursor: pointer; "><v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-on="on" v-bind="attrs"   :color="group.group_color"
                          >mdi-account-circle</v-icon
                        >
                      </template>
                      <span v-if="item.last_edited">{{ item.last_edited }}</span>
                      <span v-else>{{ item.creator }}</span>
                    </v-tooltip></td>
            <td>
               <v-menu
              :close-on-content-click="false"
              offset-y
              bottom
              left
              content-class=""
              max-width="170"
            >
              <template v-slot:activator="{ on, attrs }">
              <v-btn class="" icon v-on="on" v-bind="attrs">
            <v-icon
              >mdi-dots-vertical</v-icon
            ></v-btn
          ></template>
          <v-card elevation="0"
          width="170"
          min-height="100"
          >
         <v-list dense>
           <v-list-item @click="verticaldotsfunc(itemdots,item.id,item.group_id)" v-for="(itemdots,index) in vertical_dots_item" :key="index">
              
             <v-list-item-icon v-if="itemdots.icon==='mdi-delete-outline' || itemdots.icon==='mdi-logout-variant'">
           <v-icon v-text="itemdots.icon"></v-icon>
             </v-list-item-icon>
             <v-list-item-subtitle class="ml-n2" v-if="itemdots.title==='Löschen' || itemdots.title==='Exportieren'" v-text="itemdots.title">

             </v-list-item-subtitle>
           <v-menu
           v-if="itemdots.title==='Frist' && itemdots.icon==='mdi-calendar-edit'"
              :close-on-content-click="false"
              offset-x
              bottom
              left
              content-class="frist-css"
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-list-item v-on="on" v-bind="attrs"  class="ml-n4 mr-n4">
                  <v-list-item-icon >
           <v-icon v-text="itemdots.icon"></v-icon>
             </v-list-item-icon>
                <v-list-item-subtitle class="ml-n2"  v-text="itemdots.title">
             </v-list-item-subtitle>

             </v-list-item>
              </template>
              <v-card elevation="0"
              width="290"
              min-height="120"
              >
              <v-date-picker v-model="item.deadline" :color="group.group_color"   :show-current="false"  >
                <v-spacer></v-spacer>
          <v-btn
            text
       :color="group.group_color"
           @click="clear_due_date(item)"
          >
           Clear Due Date
          </v-btn>
              </v-date-picker>
              </v-card>
           </v-menu>

<v-menu
 v-if="itemdots.title==='Vertragspartner'  && itemdots.icon==='mdi-account-supervisor'"
              :close-on-content-click="false"
              offset-x
              bottom
              left
              content-class="Vertragspartner-css"
              max-width="370"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-list-item v-on="on" v-bind="attrs" class="ml-n4 mr-n4">
                <v-list-item-icon  >
           <v-icon v-text="itemdots.icon"></v-icon>
             </v-list-item-icon>
                <v-list-item-subtitle class="ml-n2" v-text="itemdots.title">

             </v-list-item-subtitle>
              </v-list-item>
              </template>
              <v-card elevation="0"
              width="370"
              min-height="120"
              >
    <div style="width: 23em" class="pl-4 pr-2 pt-8">
                     <v-text-field
                                        label="Firmenname"
                                        v-model="Firmennamemodel"
                                        outlined
                                        dense
                                        :placeholder="item.contract_partner.Firmennamemodel"
                                        :color="group.group_color"
                                        rounded
                                      >
                                      </v-text-field>

                    </div>
                     <div style="width: 23em" class="pl-4 pr-2">
                     <v-text-field
                                        label="Adresse"
                                        v-model="Adressemodel"
                                        outlined
                                        :placeholder="item.contract_partner.Adressemodel"
                                        dense
                                        :color="group.group_color"
                                        rounded
                                      >
                                      </v-text-field>

                    </div>
                     <div style="width: 23em" class="pl-4 pr-2">
                     <v-text-field
                                        label="Website"
                                        v-model="Websitemodel"
                                        :placeholder="item.contract_partner.Websitemodel"
                                        outlined
                                        dense
                                        :color="group.group_color"
                                        rounded
                                      >
                                      </v-text-field>

                    </div>
                     <div style="width: 23em" class="pl-4 pr-2">
                     <v-text-field
                                        label="Telefon"
                                        v-model="Telefonmodel"
                                        outlined
                                        :placeholder="item.contract_partner.Telefonmodel"
                                        dense
                                        :color="group.group_color"
                                        rounded
                                      >
                                      </v-text-field>

                    </div>
                     <div style="width: 23em" class="pl-4 pr-2">
                     <v-text-field
                                        label="Kontaktperson"
                                        v-model="Kontaktpersonmodel"
                                        outlined
                                        dense
                                        :placeholder="item.contract_partner.Kontaktpersonmodel"
                                        :color="group.group_color"
                                        rounded
                                      >
                                      </v-text-field>

                    </div>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        class="mt-n4"
                       :style="{
                         textTransform: none,
                       fontFamily:raleway,
                        fontSize: 18,
                         fontWeight: 700,
                         color:group.group_color}"
                        text
                        @click="
                                          change_contract_partner_in_contract(
                                           item,Firmennamemodel,Adressemodel,Websitemodel,Telefonmodel,Kontaktpersonmodel
                                          )
                                        "
                      >
                        Anlegen
                      </v-btn>
                    </v-card-actions>
              </v-card>
           </v-menu>

           </v-list-item>
         </v-list>
          </v-card>
               </v-menu>
          </td>
          </tr>
        </tbody>
      </template>
            </v-data-table>
        </v-card>
         </div>
          </template>
      </div>

      <!--  right icon -->
      <div
        @click="right_side_close_func()"
        v-if="left_right_icon_close"
        style="
          cursor: pointer;
          background-color: #fdeef1;
          position: absolute;
          top: 45%;
          z-index: 3;
          right: -1.9em;
          height: 6em;
        "
      >
        <v-icon class="mt-7">mdi-chevron-right</v-icon>
      </div>
      <!-- right side data -->
      <div
        class="mt-n2"
        v-if="right_side_close && !information"
        style="width: 45.8%; height: 70vh;position:relative;min-width:30%"
      >
      <v-card height="452" class="pt-2 mt-2" elevation="0"  width="480">
    <v-img v-if="preview_src" :src="preview_src" width="480"  ></v-img>
      </v-card>
      
      <v-row
          @click="right_side_close_func()"
          v-if="!left_right_icon_close"
          style="
            cursor: pointer;
            background-color: #fdeef1;
            position: absolute;
            top: 47%;
            z-index: 3;
            left: 13px;
            height: 6em;
          "
        >
          <v-icon class="">mdi-chevron-left</v-icon>
        </v-row>
        <v-card
         width="482"
          elevation="0"
          style="
            position: absolute;
            bottom: -8px;
            left: 0px;
          "
          color="#F2F2F2"
          min-height="140"
        >
          <v-row  class="ma-0 pa-0"  >
            <v-col cols="8">
              <div style="display: flex" class="">
                <p style="font-size: 13px" class="mr-2">Freigegeben für:</p>
                 <v-row
                  class="mt-n1 ml-2"
                >
                  <div v-for="(itemff, indexi) in group.user" :key="indexi">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-on="on" v-bind="attrs"   
                          >mdi-account-circle-outline</v-icon
                        >
                      </template>
                      <span>{{ itemff}}</span>
                    </v-tooltip>
                  </div>
                </v-row>
                <v-row class="mt-n2" >
                   <v-menu
                  rounded="xl"
                  offset-y
                  bottom
                  content-class="lowercardplususermenu"
                  :close-on-content-click="false"
                  width="310"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon>
 <v-icon
                      
                      size="24"
                      v-on="on"
                      v-bind="attrs"
                      @click="
                        all_user_created_by_specific_admin(group.group_title)
                      "
                    >
                      mdi-plus
                    </v-icon>
                    </v-btn>
                  </template>
                  <v-card
                    elevation="0"
                    width="310"
                    min-height="70"
                    rounded="xl"
                    class="ma-0 pa-0"
                  >
                    <h4 class="pt-3 ml-6">Mitarbeiter/in hinzufügen</h4>
                    <v-row class="ml-3 pt-3 mb-2">
                      <div style="width: 19.5em" class="ml-3">
                        <v-card
                          elevation="0"
                          outlined
                          width="340"
                          :style="{borderColor:group.group_color}"
                          rounded="xl"
                          min-height="20"
                          class="mb-2"
                        >
                          <v-card
                            v-if="auto_users.length !== 0"
                            elevation="0"
                            color="transparent"
                            min-height="1"
                            width="340"
                            class="pb-3 pt-4 pl-5"
                          >
                            <v-row>
                              <div
                                v-for="(items, index) in auto_users"
                                :key="index"
                                class="ml-3"
                              >
                                <v-chip
                                  :style="{borderColor:group.group_color}"
                                  outlined
                                  small
                                  class="mt-1"
                                >
                                  <v-icon size="12" class="mr-1" :color="group.group_color"
                                    >mdi-account-outline</v-icon
                                  >
                                  {{ items | truncateEnd(18, "...") }}
                                </v-chip>
                              </div>
                            </v-row>
                          </v-card>
                          <v-expansion-panels flat accordion>
                            <v-expansion-panel
                              class=""
                              style="background-color: transparent"
                            >
                              <v-expansion-panel-header
                                style="height: 1em; border-radius: 20px"
                              >
                                <v-icon
                                  @click.stop="onClick()"
                                  class="ml-n2 mr-2"
                                  :color="group.group_color"
                                  >mdi-magnify</v-icon
                                >

                                <v-text-field
                                  dense
                                  :color="group.group_color"
                                  @click.stop="onClick()"
                                  v-model="searchcurrentadminusers"
                                  class="pt-4 pl-n1 some-style"
                                  placeholder="Mitarbeiter"
                                >
                                </v-text-field>
                                <template v-slot:actions>
                                  <v-icon class="mr-1"  :color="group.group_color"
                                    >mdi-menu-down</v-icon
                                  >
                                </template>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <v-divider
                                  :style="{backgroundColor:group.group_color}"
                                  class="mt-n2 mb-2 ml-n1 mr-3"
                                ></v-divider>
                                <v-card
                                  elevation="0"
                                  class="expand ml-n3 pr-n3"
                                  height="190"
                                  width="340"
                                  style="overflow-x: hidden"
                                >
                                  <div
                                    class="pt-4"
                                    v-for="itemd in current_admin_users_search"
                                    :key="itemd.name"
                                  >
                                    <v-row class="mt-n6 mb-n6">
                                      <v-col cols="1">
                                        <v-icon
                                          size="21"
                                          class="ml-1 mt-n1"
                                           :color="group.group_color"
                                          >mdi-account-outline</v-icon
                                        >
                                      </v-col>
                                      <v-col cols="8">
                                        <p class="ml-3">
                                          {{
                                            itemd.name | truncateEnd(18, "...")
                                          }}
                                        </p>
                                      </v-col>
                                      <v-col cols="1">
                                        <v-checkbox
                                          :color="group.group_color"
                                          v-model="auto_users"
                                          :value="itemd.name"
                                          class="mt-n2 ml-3"
                                        ></v-checkbox>
                                      </v-col>
                                    </v-row>
                                  </div>
                                </v-card>
                              </v-expansion-panel-content>
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-card>
                      </div>
                    </v-row>
                    <v-card-actions class="mt-n3">
                      <v-spacer></v-spacer>
                      <v-btn
                        class=""
                        :style="{
                             textTransform:none,
                          fontFamily: raleway,
                          fontSize:18,
                          fontWeight: 700,
                          color: group.group_color
                        }
                         
                        "
                        text
                        @click="add_user_in_group_array(auto_users)"
                      >
                        Anlegen
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
                </v-row>
              </div>
              <div>
                <p style="font-size: 13px" class="mt-14" v-if="contract_in_lower_right_side===''">
                  Erstellet: {{group.date}}
                </p>
                <p style="font-size: 13px" class="mt-14" v-else>
                  Erstellet: {{contract_in_lower_right_side.date}}
                </p>
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="4">
            <div class="">
              <v-btn
                small
                color="white"
                class="black--text mt-7 mr-6"
                style="text-transform: none; width: 10em; font-weight: 350"
                >Set als Vorlage</v-btn
              ><br />
              <v-btn

                small
                color="white"
                class="black--text mt-2 mr-6"
                style="text-transform: none; width: 10em; font-weight: 350"
                @click="currentadmincontracts(contract_in_lower_right_side)"
                >Bearbeiten</v-btn
              >
            </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
      <!-- information div -->
      <div
        class=""
        v-if="right_side_close && information"
        style="width: 46.8%; height: 70vh; position: relative"
      >
      <!-- <v-img  :src="preview_src" width="532" height="552"></v-img> -->
    <v-row justify="center" class="pt-9"><p style="font-size:20px;font-weight:700;">{{group.group_title}}</p></v-row>
    <v-card elevation="0"
    class="ml-7 mr-1 expand1"
    min-width="150"
    width="440"
    height="70vh"
    >
   <div >
     <p style="font-size:15px;font-weight:700;">Details</p>
     <div style="display:flex;" class="mt-n2" >
       <v-card outlined elevation="0" width="250" height="132"  v-if="group.group_preview!== ''" > <img  :src="group.group_preview" width="247" height="130"/></v-card>
       <div class=" mt-3" v-if="group.group_preview=== ''" >
          <div style="display:flex;" class="mt-n3" >
         <p style="font-size:12px;font-weight:400;">Verträge Menge :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{group.contract.length}}</p> 
         </div> 
          <div style="display:flex;" class="mt-n3">
         <p style="font-size:12px;font-weight:400;">Erstellt am :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{group.date}}</p> 
         </div> 
          <div style="display:flex;" class="mt-n3">
         <p style="font-size:12px;font-weight:400;">Beschreibung :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{group.group_description}}</p> 
         </div> 
      </div>  
       <div class="ml-3 mt-3" v-if="group.group_preview!== ''" >
          <div style="display:flex;" class="mt-n3" >
         <p style="font-size:12px;font-weight:400;">Verträge Menge :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{group.contract.length}}</p> 
         </div> 
          <div style="display:flex;" class="mt-n3">
         <p style="font-size:12px;font-weight:400;">Erstellt am :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{group.date}}</p> 
         </div> 
          <div style="display:flex;" class="mt-n3">
         <p style="font-size:12px;font-weight:400;">Beschreibung :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{group.group_description}}</p> 
         </div> 
      </div>  
     </div>
   </div>

   <div class="mt-9">
     <p style="font-size:15px;font-weight:700;">Vertragspartner Daten</p>
     <div style="display:flex;" class="mt-5" v-for="(contract,index) in group.contract" :key="index">
       <v-card outlined elevation="0" width="250" height="138"> <img  :src="contract.preview" width="247" height="136"/></v-card>
       <div class="ml-3">
          <div style="display:flex;" >
         <p style="font-size:12px;font-weight:400;">Firmenname  :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{contract.contract_partner.Firmennamemodel}}</p> 
         </div> 
          <div style="display:flex;" class="mt-n3">
         <p style="font-size:12px;font-weight:400;">Adresse  :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{contract.contract_partner.Adressemodel}}</p> 
         </div> 
          <div style="display:flex;" class="mt-n3">
         <p style="font-size:12px;font-weight:400;">Website :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{contract.contract_partner.Websitemodel}}</p> 
         </div> 
          <div style="display:flex;" class="mt-n3">
         <p style="font-size:12px;font-weight:400;">Telefon :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{contract.contract_partner.Telefonmodel}}</p> 
         </div> 
          <div style="display:flex;" class="mt-n3">
         <p style="font-size:12px;font-weight:400;">Kontaktperson :</p> 
         <p style="font-size:12px;font-weight:400;" class="ml-2">{{contract.contract_partner.Kontaktpersonmodel}}</p> 
         </div> 
      </div>  
     </div>
   </div>
    </v-card>
      <v-row
          @click="right_side_close_func()"
          v-if="!left_right_icon_close"
          style="
            cursor: pointer;
            background-color: #fdeef1;
            position: absolute;
            top: 47%;
            z-index: 3;
            left: 13px;
            height: 6em;
          "
        >
          <v-icon class="">mdi-chevron-left</v-icon>
        </v-row>
      </div>
    </v-card>
      <div
        style="margin-top: 21%; margin-left: 3em; height: 3vh"
      >
        <v-menu
          v-model="menu8"
          :close-on-content-click="false"
          offset-x
          bottom
          content-class="my-menu2"
          width="350"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="" large icon v-on="on" v-bind="attrs">
              <v-icon size="38" color="#474747" class=""> mdi-plus </v-icon>
            </v-btn>
          </template>
          <v-card
            elevation="5"
            class="ma-0 pa-0"
            width="350"
            min-height="200"
            style="overflow: hidden; border-radius: 18px 18px 18px 18px"
          >
            <p
              class="ml-5 pt-2"
              style="
                font-family: raleway;
                font-size: 18px;
                font-weight: 700;
                color: #474747;
              "
            >
              Neuer Arbeitsbereich

              <v-btn icon @click="iconcheck = !iconcheck" class="mt-n2">
                <v-icon size="25" color="#474747" v-if="!iconcheck">
                  mdi-star-outline
                </v-icon>
                <v-icon size="25" color="#474747" v-if="iconcheck">
                  mdi-file-star-outline
                </v-icon>
              </v-btn>
            </p>
            <v-text-field
              color="#767577"
              v-model="group_title"
              :items="admincarditems"
              clearable
              outlined
              dense
              placeholder
              label="Beschreibung hinzufügen"
              rounded
              class="pl-5 pr-3 mt-n3"
            ></v-text-field>
            <v-row class="mt-n7">
              <v-col cols="1">
                <v-icon size="26" color="#474747" class="pl-5 mr-2 mt-3"
                  >mdi-file-document-outline</v-icon
                >
              </v-col>
              <v-col cols="10">
                <v-card
                  elevation="0"
                  outlined
                  width="350"
                  style="border-color: #767577"
                  rounded="xl"
                  min-height="10"
                  class="ml-5 mb-4"
                >
                  <v-card
                    v-if="auto_contracts.length !== 0"
                    elevation="0"
                    color="transparent"
                    min-height="1"
                    width="350"
                    class="pt-4 pl-4 pb-3"
                  >
                    <v-row>
                      <div
                        v-for="(item, indexaa) in auto_contracts"
                        :key="indexaa"
                        class="ml-1"
                      >
                        <v-chip
                          style="border-color: #767577; margin-left: 10%"
                          outlined
                          small
                          class="mt-1"
                        >
                          <v-icon size="12" class="mr-1" color="#474747"
                            >mdi-file-document-outline</v-icon
                          >
                          {{ item | truncateEnd(31, "...") }}
                        </v-chip>
                      </div>
                    </v-row>
                  </v-card>
                  <v-expansion-panels accordion flat>
                    <v-expansion-panel
                      class=""
                      style="background-color: transparent"
                    >
                      <v-expansion-panel-header
                        style="height: 1em; border-radius: 20px"
                      >
                        <v-icon
                          @click.stop="onClick()"
                          color="#474747"
                          class="ml-n2 mr-2"
                          >mdi-magnify</v-icon
                        >
                        <v-text-field
                          dense
                          @click.stop="onClick()"
                          v-model="searchallcontracts"
                          class="pt-4 pl-n1 some-style"
                          placeholder="Verträge"
                        >
                        </v-text-field>
                        <template v-slot:actions>
                          <v-icon class="mr-1" color="#474747"
                            >mdi-menu-down</v-icon
                          >
                        </template>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content style="">
                        <v-divider
                          style="background-color: #767577"
                          class="mt-n2 mb-2 ml-n1 mr-3"
                        ></v-divider>
                        <v-card
                          elevation="0"
                          class="expand ml-n2"
                          height="190"
                          width="340"
                          style="overflow-x: hidden"
                        >
                          <div
                            class="pt-4 ml-n1"
                            v-for="item in all_contracts_search"
                            :key="item.contract_title"
                          >
                            <v-row class="mt-n6 mb-n6">
                              <v-col cols="1">
                                <v-icon
                                  size="21"
                                  class="mt-n3 ml-1"
                                  color="#474747"
                                  >mdi-file-document-outline</v-icon
                                >
                              </v-col>
                              <v-col cols="9">
                                <p
                                  class="ml-2"
                                  style="font-size: 11px; font-weight: 500"
                                >
                                  {{
                                    item.contract_title | truncateEnd(29, "...")
                                  }}
                                </p>
                              </v-col>
                              <!--  v-model="auto_contracts" -->
                              <v-col cols="1">
                                <v-checkbox
                                  :color="maincolor.theme"
                                  v-model="auto_contracts"
                                  :value="item.contract_title"
                                  class="mt-n2 ml-n3"
                                ></v-checkbox>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="mt-n9">
              <v-col cols="1">
                <v-icon size="26" class="pl-5 mr-2 mt-3" color="#474747"
                  >mdi-account-outline</v-icon
                >
              </v-col>
              <v-col cols="10">
                <v-card
                  elevation="0"
                  outlined
                  width="340"
                  style="border-color: #767577"
                  rounded="xl"
                  min-height="20"
                  class="ml-5 mb-7"
                >
                  <v-card
                    v-if="auto_users.length !== 0"
                    elevation="0"
                    color="transparent"
                    min-height="1"
                    width="340"
                    class="pb-3 pt-4 pl-5"
                  >
                    <v-row>
                      <div
                        v-for="(item, index) in auto_users"
                        :key="index"
                        class="ml-1"
                      >
                        <v-chip
                          style="border-color: #767577; margin-left: 10%"
                          outlined
                          small
                          class="mt-1"
                        >
                          <v-icon size="12" class="mr-1" color="#474747"
                            >mdi-account-outline</v-icon
                          >
                          {{ item | truncateEnd(18, "...") }}
                        </v-chip>
                      </div>
                    </v-row>
                  </v-card>
                  <v-expansion-panels flat accordion>
                    <v-expansion-panel
                      class=""
                      style="background-color: transparent"
                    >
                      <v-expansion-panel-header
                        style="height: 1em; border-radius: 20px"
                      >
                        <v-icon
                          @click.stop="onClick()"
                          class="ml-n2 mr-2"
                          color="#474747"
                          >mdi-magnify</v-icon
                        >

                        <v-text-field
                          dense
                          @click.stop="onClick()"
                          v-model="searchcurrentadminusers"
                          class="pt-4 pl-n1 some-style"
                          placeholder="Mitarbeiter"
                        >
                        </v-text-field>
                        <template v-slot:actions>
                          <v-icon class="mr-1" color="#474747"
                            >mdi-menu-down</v-icon
                          >
                        </template>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-divider
                          style="background-color: #767577"
                          class="mt-n2 mb-2 ml-n1 mr-3"
                        ></v-divider>
                        <v-card
                          elevation="0"
                          class="expand ml-n3 pr-n3"
                          height="190"
                          width="340"
                          style="overflow-x: hidden"
                        >
                          <div
                            class="pt-4"
                            v-for="item in current_admin_users_search"
                            :key="item.name"
                          >
                            <v-row class="mt-n6 mb-n6">
                              <v-col cols="1">
                                <v-icon
                                  size="21"
                                  class="ml-1 mt-n1"
                                  color="#474747"
                                  >mdi-account-outline</v-icon
                                >
                              </v-col>
                              <v-col cols="8">
                                <p class="ml-3">
                                  {{ item.name | truncateEnd(18, "...") }}
                                </p>
                              </v-col>
                              <v-col cols="1">
                                <v-checkbox
                                  :color="maincolor.theme"
                                  v-model="auto_users"
                                  :value="item.name"
                                  class="mt-n2 ml-3"
                                ></v-checkbox>
                              </v-col>
                            </v-row>
                          </div>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card>
              </v-col>
            </v-row>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="mt-n7"
                style="
                  text-transform: none;
                  font-family: raleway;
                  font-size: 18px;
                  font-weight: 700;
                  color: #474747;
                "
                text
                @click="submit1(auto_contracts, auto_users)"
              >
                Anlegen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
      </div>
  </v-main>
</template>

<script>
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
var fs = require("fs");
import store from "../store";
// const path = require("path");
const { dialog } = require("electron").remote;
import { mapState } from "vuex";
import { remote } from "electron";
const { createWorker } = require("tesseract.js");
// import store from "../store";
export default {
  props: {
    updatedgroup: Number,
  },
  data: () => ({
    group: "",
    lightcolor:"",
    contract_in_lower_right_side:"",
    information: true,
    Adressemodel : "",
    Websitemodel : "",
    Telefonmodel : "",
    Kontaktpersonmodel : "",
    Firmennamemodel: "",
   //  picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    vertical_dots_item:[
      {title:"Löschen",icon:"mdi-delete-outline"},
      {title:"Exportieren",icon:"mdi-logout-variant"},
       {title:"Frist",icon:"mdi-calendar-edit"},
      {title:"Vertragspartner",icon:"mdi-account-supervisor"},
    ],
    preview_src:"",
    add_tab_chip_model:"",
     selectedRow: null,
     headerstest: [
      {
        text: "Name",
        value: "front_title",
         class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "Vertragspartner",
        value: "contract_partner",
           class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "Frist",
        value: "deadline",
             class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
       {
        text: "Datum | Zeit",
        value: "time",
             class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "Status | Fortschritt",
        value: "percentage",
             class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "Type",
        value: "type",
       class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
       {
        text: "Ersteller",
        value: "creator",
          class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "",
        value: "icon",
          
      },
    ],
    list_of_color_item: [
      { iconcolor: "#000000" },
      { iconcolor: "#85C186" },
      { iconcolor: "#FF0000" },
      { iconcolor: "#808080" },
      { iconcolor: "#00FF00" },
      { iconcolor: "#FFA500" },
      { iconcolor: "#4B0082" },
      { iconcolor: "#EAAD35" },
      { iconcolor: "#41BB95" },
      { iconcolor: "#e75480" },
    ],
    currentTabId: 1,
    nextTabId: 2,
    tabs: [
      // {
      //   id: 1,
      //   name: "jjj",
      // },
    ],
    group_settings_main: [
      { icon: "mdi-information-outline", title: "information" },
      { icon: "mdi-delete-outline", title: "Löschen" },
      { icon: "mdi-file-multiple-outline", title: "Kopie erstellen" },
      { icon: "mdi-circle", title: "Farbe" },
    ],
    group_details: true,
    right_side_close: true,
    left_right_icon_close: false,
    group_settings: [
      { icon: "mdi-delete-outline", title: "Löschen" },
      { icon: "mdi-file-multiple-outline", title: "Kopie erstellen" },
      { icon: "mdi-circle", title: "Farbe" },
    ],
     group_list_of_icons: [
      { icon: "mdi-handshake-outline" },
      { icon: "mdi-home-city-outline" },
      { icon: "mdi-account-multiple-outline" },
      { icon: "mdi-skull-outline" },
      { icon: "mdi-home-circle-outline" },
      { icon: "mdi-cloud-outline" },
      { icon: "mdi-lightbulb-on-outline" },
      { icon: "mdi-lightning-bolt-outline" },
      { icon: "mdi-bag-personal-outline" },
      { icon: "mdi-power-plug-outline" },
    ],
    list_of_icons: [
      { icon: "mdi-handshake-outline" },
      { icon: "mdi-home-city-outline" },
      { icon: "mdi-account-multiple-outline" },
    ],
    searchcurrentadminusers: "",
    searchallcontracts: "",
    // computedcheckfooter:true,
    searchdatageneralsearch: "",
    chipdatageneralsearchadmin: [],
    sortdateascending_rc: true,
    sortdatedescending_rc: false,
    sortalphascending_rc: false,
    sortalphadescending_rc: false,
    sortdateascending_gg: true,
    sortdatedescending_gg: false,
    sortalphascending_gg: false,
    sortalphadescending_gg: false,
    searchdatatable: "",
    chipdatatableadmin: [],
    searchdatagroups: "",
    current_admin_groups_search: "",
    chipdatagroupsadmin: [],
    current_admin_recent_contracts_search: "",
    searchdatarecentcontracts: "",
    chipdatarecentcontractsadmin: [],
    iconcheck: false,
    originalmenu: false,
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
    is_superuser: false,
    magnifyicon: false,
    magnifyiconsearchrecentcontracts: false,
    magnifyiconsearchgroups: false,
    magnifyiconsearchdatatable: false,
    magnifyicongeneralsearch: false,
    all_contracts_search: [],
    current_admin_users_search: [],
    searchgroupuserfordeletiondata_search: [],
    searchgroupuserfordeletiondata: [],
    searchgroupuserfordeletion: "",
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
  methods: {
    pdf_png_import(x) {
      if(x !== 'Vertrag & Abschnitt importieren'){
      this.pdfwaitdialog=true;
      // this.isloading=true;
        let filePath = dialog.showOpenDialogSync({
        title: "Select the File to Open",
        defaultPath: "./",
        buttonLabel: "open",
        filters: [{ name: 'Files', extensions: ['png', 'pdf'] },],
        properties: [],
      });
      if(filePath!==undefined){
        this.$vToastify.loader("Verladen...");
        // this.$vToastify.error("body", "title"); 
        // this.isloading=true;
       
        setTimeout(() => {
          // this.isloading=false;
         setTimeout(()=>{this.$vToastify.stopLoader();},1000)
          
        this.$vToastify.success("Erfolg Importieren !","Erfolg");
        
        // this.$vToastify.success("Erfolg","IMPORT SUCCESS !!");
        }, 3000);
        console.log(this.isloading);
        var type = filePath[0]
        var result = type.substring(type.length - 3);
        if(result === 'pdf'){
          var newT=new Date();
          console.log(newT)
          var notificationS={}
        notificationS.id=Date.now();
        notificationS.title=`PDF IMPORTED  -----   ${newT.getHours() + ":" + newT.getMinutes()}`
        this.notifications.push(notificationS);
          // store.commit("addsecondwindow",true);
          var str = "file://"+ filePath[0]+"#zoom=90"
          store.commit("addfilepath",str);
          // ipcRenderer.send("openTaskForm");
          
        }
        else if(result === 'png' || result === 'PNG'){
          var notificationA={}
        notificationA.id=Date.now();
        notificationA.title="IMAGE IMPORTED ";
        this.notifications.push(notificationA);
          var local_array=[]
          var filepath= fs.readFileSync(filePath[0])
          const worker = createWorker({
          // cachePath: path.join(process.cwd(), 'lang-data'),
          // logger: (m) => console.log(m),
          });
          (async () => {
            await worker.load();
            await worker.loadLanguage("eng");
            await worker.initialize("eng"); 
            const { data: { text } } = await worker.recognize(filepath)
            local_array.push(text)
            await worker.terminate()
          this.isloading=false;
            this.import_data_from_pdf_array_right_side=local_array;
            // console.log(this.import_data_from_pdf_array_right_side)
            store.commit("add_import_pdf_png_content",this.import_data_from_pdf_array_right_side)
            this.pdfwaitdialog=false;
            
          })();
        }
      }
      else if(filePath===undefined){
        setTimeout(() => (this.isloading = false), 1000)
      }
      }
      else if(x === 'Vertrag & Abschnitt importieren'){
         console.log("k1")
      }
    },

    add_contract_in_group_array(x) {
      this.contractmenu = false;
      for (var i = 0; i < x.length; i++) {
        this.add_contract_in_group(x[i]);
      }
    },
    add_contract_in_group(x) {
      this.contractmenu = false;
      var group_id = this.groupName;
      var group = store.getters.checkByGroupId(group_id);
      this.copy_creation_of_contract_new(x,group.group_id,group.group_title);
      var contract = this.$store.getters.findlatestcopycontract()
      this.$store.commit("addcontractgroupfunctionforall", [group.group_id, contract.id]);
      var len = group.user.length
      for (var i =0 ; i< len ; i++){
        this.$store.commit("addcontractsinusergroupfunc", [contract.id, group.user[i]]);
      }
      this.filter_work_mounted()
      // var groups_by_specific_admin = store.getters.checkGroupByAdminName(
      //   this.current_admin_name
      // );
      // store.commit("setcurrentadmingroups", groups_by_specific_admin);
      // this.current_admin_groups = store.state.current_admin_groups;
      // this.current_admin_groups_search = this.current_admin_groups;
      // store.dispatch("updatewritejson");
      this.auto_contracts = [];
      // this.$router.push({ path: "/contracts" }).catch(() => {});
      //return;
    },
    add_contract_in_group_array_test(
      group_id,
      new_group_title,
      contracts,
      keep_original_contract
    ) {
      var group = store.getters.checkByGroupId(group_id);
      if (group.keep_original_contract !== keep_original_contract) {
        store.commit("changekeeporiginalcontractingroup", [
          group.group_id,
          keep_original_contract,
        ]);
      }
      this.groupName =group.group_id;
      this.add_contract_in_group_array(contracts);
      if (new_group_title.length !== 0) {
        this.change_group_title(group, new_group_title);
      }
      this.changegrouptitlename = "";
      this.$router.push({ path: "/contracts" }).catch(() => {});
    },
    change_group_title(group, new_group_title) {
      // var len = group.contract.length
      // console.log('group.contract')
      // console.log(group.contract)
      // for( var i=0 ; i< len ; i++){
      //   var contract = this.$store.getters.findcopycontract(group.contract[i].id)
      //   store.commit("changegrouptitle_contract", [contract.id,new_group_title]);
      // }
      store.commit("changegrouptitle", [group.group_id,new_group_title]);
      this.filter_work_mounted()
      // store.commit("changegrouptitle_user", [old_group_title, new_group_title]);
      // store.commit("changegrouptitle_recentcontracts", [
      //   old_group_title,
      //   new_group_title,
      // ]);
      //this.recent_contracts_change_group_name(old_group_title, new_group_title);
    },
    add_contract_in_group_array_updated(group_id, contracts) {
      this.contractmenu = false;
      for (var i = 0; i < contracts.length; i++) {
        this.add_contract_in_group_updated(group_id,contracts[i]);
      }
    },
    add_contract_in_group_updated(group_id,x) {


      this.contractmenu = false;
      var group = store.getters.checkByGroupId(group_id);
      this.copy_creation_of_contract_new(x,group.group_id,group.group_title);
      var contract = this.$store.getters.findlatestcopycontract()
      this.$store.commit("addcontractgroupfunctionforall", [group.group_id, contract.id]);
      var len = group.user.length
      for (var i =0 ; i< len ; i++){
        this.$store.commit("addcontractsinusergroupfunc", [contract.id, group.user[i].id]);
      }
      this.filter_work_mounted()
      // var groups_by_specific_admin = store.getters.checkGroupByAdminName(
      //   this.current_admin_name
      // );
      // store.commit("setcurrentadmingroups", groups_by_specific_admin);
      // this.current_admin_groups = store.state.current_admin_groups;
      // this.current_admin_groups_search = this.current_admin_groups;
      // store.dispatch("updatewritejson");
      this.auto_contracts = [];
      // this.$router.push({ path: "/contracts" }).catch(() => {});
      //return;
      
    },
    copy_creation_of_contract_new(contract_title,group_id,group_title){
      let obj = this.current_admin_versions.find(
        (o) => o.title === contract_title
      );
      let front_title =
        contract_title + "_Vertrag_" + obj.version;
      store.commit("copycontractsavefunc", {
        title: contract_title,
        front_title: front_title,
        group_id: group_id,
        group_title: group_title,
        admin_name: this.current_admin_name,
      });
      var version = obj.version + 1;
      this.current_admin_versions.find((o, i) => {
        if (o.title === contract_title) {
          this.current_admin_versions[i] = {
            title: contract_title,
            version: version,
          };
          return true; // stop searching
        }
      });
      store.commit("updatedversionslist", this.current_admin_versions);
      return
    },
    //above updated
    clear_due_date(contract){
      var cc = store.getters.findcopycontract(contract.id)
      this.$store.commit("clearduedate",cc.id);
      this.filter_work_mounted()
    },
    change_contract_partner_in_contract(contract,Firmennamemodel,Adressemodel,Websitemodel,Telefonmodel,Kontaktpersonmodel){
      var n1,n2,n3,n4,n5
      if(Firmennamemodel.length === 0 ) n1 = contract.contract_partner.Firmennamemodel
      else n1= Firmennamemodel
      if(Adressemodel.length === 0 ) n2 = contract.contract_partner.Adressemodel
      else n2= Adressemodel
      if(Websitemodel.length === 0 ) n3 = contract.contract_partner.Websitemodel
      else n3 = Websitemodel
      if(Telefonmodel.length === 0 ) n4 = contract.contract_partner.Telefonmodel
      else n4 = Telefonmodel
      if(Kontaktpersonmodel.length === 0 ) n5 = contract.contract_partner.Kontaktpersonmodel
      else n5 = Kontaktpersonmodel

      var obj = {
        Firmennamemodel : n1,
        Adressemodel : n2,
        Websitemodel : n3,
        Telefonmodel : n4,
        Kontaktpersonmodel : n5,
      }
       var cc = store.getters.findcopycontract(contract.id)
      this.$store.commit("changecontractpartner", [cc.id,obj]);
      this.Firmennamemodel="";
      this.Adressemodel="";
      this.Websitemodel="";
      this.Telefonmodel="";
      this.Kontaktpersonmodel="";
    },
  //   change_contract_partner_in_contract(contract,contract_partner){
  //   this.$store.commit("changecontractpartner", [contract.admin_name,contract.front_title,contract.group_title,contract_partner]);
  //   this.Firmennamemodel="";
  // },
  addgroupicon(icon, group) {
      var icon1 = JSON.parse(JSON.stringify(icon));
      if (this.list_of_icons.find((o) => o.icon === icon1.icon) === undefined) {
        this.list_of_icons.unshift(icon1);
        this.list_of_icons.length = 3;
      }
      this.changegroupicon(icon1.icon, group);
      this.filter_work_mounted()
    },
    changegroupicon(icon, group) {
      this.$store.commit("changegroupicon", [icon, group.group_id]);
      this.filter_work_mounted()
    },
    // add_contracts_in_group_updated() {
    //   var i_len;
    //   console.log(contracts);
    //   for (i_len = 0; i_len < contracts.length; i_len++) {
    //     console.log("contract_title");
    //     console.log(contracts[i_len]);
    //     var a = store.getters.checkByGroupName(group_title);
    //     if (a[0].contract.length === 0) {
    //       var b = this.copy_creation_of_contract(contracts[i_len], group_title);
    //       store.commit("addcontractgroupfunc", [a[0], b]);
    //       if (a[0].user.length !== 0) {
    //         store.commit("addcontractinallusercontractsingroup", [a[0], b]);
    //       }
    //     } else {
    //       var c = 0,
    //         i;
    //       for (i = 0; i < a[0].contract.length; i++) {
    //         if (a[0].contract[i].title === contracts[i_len]) {
    //           c++;
    //         }
    //       }
    //       if (c === 0) {
    //         b = this.copy_creation_of_contract(contracts[i_len], group_title);
    //         store.commit("addcontractgroupfunc", [a[0], b]);
    //         if (a[0].user.length !== 0) {
    //           store.commit("addcontractinallusercontractsingroup", [a[0], b]);
    //         }
    //       }
    //       var groups_by_specific_admin = store.getters.checkGroupByAdminName(
    //         this.current_admin_name
    //       );
    //       store.commit("setcurrentadmingroups", groups_by_specific_admin);
    //       this.current_admin_groups = store.state.current_admin_groups;
    //       this.current_admin_groups_search = this.current_admin_groups;
    //       store.dispatch("updatewritejson");
    //       this.auto_contracts = [];
    //       // this.$router.push({ path: "/contracts" }).catch(() => {});
    //       // return;
    //     }
    //   }
    // },
    
    verticaldotsfunc(dotsitem,contractid,groupid){
     if(dotsitem.title==='Löschen'){
      this.delete_contract_from_group(contractid,groupid)
      this.filter_work_mounted()
     }
     if (dotsitem.title==='Exportieren'){
     console.log(dotsitem)
     }
    },
    preview_image(j){
   console.log(j)
    },

    filter_work_mounted(){
      var j;
      var group = JSON.parse(JSON.stringify(store.getters.findgroupbyid(this.updatedgroup)))
        var lenC = group.contract.length
        for(j=0 ; j< lenC; j++){
          var idC = group.contract[j]
          var contract = store.getters.findcopycontract(idC)
          group.contract.splice(j, 1, contract);
          //.splice(index, 0, "white");  -> for adding at specific index
        }
        var lenU = group.user.length
        for(j=0 ; j< lenU; j++){
          var idU = group.user[j]
          var user = store.getters.finduserbyid(idU)
          group.user.splice(j, 1, user.name);
        }
      this.group = group
      this.tabs=[]
      var len = this.group.filter.length
      var obj = {
        id: 1,
        name: "alle Unterlagen",
        filter: "",
        contracts:this.group.contract
      }
      this.currentTabId = 1,
      this.nextTabId= 2,
      this.tabs.push(obj)
      for(var i=0; i< len ; i++){
        obj = {
            id: this.nextTabId,
            name: this.group.filter[i],
            filter: this.group.filter[i],
            contracts: this.function_for_tag_search_in_group(this.group.filter[i])      
          }
        this.nextTabId = this.nextTabId + 1
        this.tabs.push(obj)
      }
    },
    function_for_tag_search_in_group(chip) {
      var array = []
      for (var i = 0; i < this.group.contract.length; i++) {
        if (this.group.contract[i].front_title.includes(chip)) {
          array.push(this.group.contract[i])  
        }
      }
      return array
    },
    addtabchipingrouptab(chip){
      var obj1 = this.group.filter.find(o=> o === chip)
      if(obj1 === undefined){
        this.$store.commit("addtabchipinfilter",[chip,this.group.group_id])
         var obj = {
            id: this.nextTabId,
            name: chip,
            filter: chip,
            contracts: this.function_for_tag_search_in_group(chip)      
          }
        this.nextTabId = this.nextTabId + 1
        this.tabs.push(obj)
        this.tabs.length = 5
      }
      this.filter_work_mounted()
    },
    removetabchipdata(chip){
      this.$store.commit("removetabchip",[chip,this.group.group_id])
      this.filter_work_mounted()
    },
    addtabchipdata(){
      if(this.add_tab_chip_model!=="" && this.group.add_tab_chip.find(o=> o === this.add_tab_chip_model)=== undefined){
        this.$store.commit("addtabchip",[this.add_tab_chip_model,this.group.group_id])
      }
      this.add_tab_chip_model=""
      this.filter_work_mounted()
    },
   rowSelect(idx,contract) {
      this.information = false;
      this.selectedRow = idx;
      this.preview_src = contract.preview
      this.contract_in_lower_right_side = contract
      
    },
     groupsetting(group, property) {
      if (property.title === "Löschen") {
          this.delete_group(group.group_title);
      }
     if (property.title === "information") {
          this.information =! this.information
      }
      // else if (property.title === "Kopie erstellen")
      //   console.log("Need to talk this issue");
      // else if(property.title === "Farbe") console.log("CC")
    },
     changecolor(group, colorname) {
      
      if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(colorname.iconcolor)){
      var c= colorname.iconcolor.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      var lightcolor = 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.4)';
      }
      this.$store.commit("changegroupcolor", [
        colorname.iconcolor,
        group.group_id,
      ]);
      this.lightcolor=lightcolor
      this.filter_work_mounted()
    },
    changeTab(id) {
      this.$data.currentTabId = id;
       this.selectedRow = null;
    },
    beforeCloseTab(e) {
      e.stopPropagation();
    },
    
    closeTab(tab) {
      this.$store.commit("removetabchipinfilter",[tab.filter,this.group.group_id])
      var id = tab.id
      this.$data.tabs.forEach((tab, index) => {
        tab.id === id &&
          this.$data.tabs.splice(index, 1) &&
          this.$data.currentTabId === id &&
          (this.$data.currentTabId = this.$data.tabs[index]
            ? this.$data.tabs[index].id
            : this.$data.tabs[index - 1].id);
      });
    },
    right_side_close_func() {
      this.right_side_close = !this.right_side_close;
      this.left_right_icon_close = !this.left_right_icon_close;
      this.group_details = !this.group_details;
    },
    back_func() {
      store.commit("set_group_component", false);
    },
    search_user_in_group_add(user) {
      this.searchgroupuserfordeletiondata = JSON.parse(JSON.stringify(user));
      this.searchgroupuserfordeletiondata_search =
        this.searchgroupuserfordeletiondata;
    },
    onClick() {
      /*this will toggle only by icon click. at the same time, will prevent toggle 
      by clicking on header. */
      const curr = this.panel;
      this.panel = curr === undefined ? 0 : undefined;
    },
    tiptaptesting() {
      this.$router.push({ path: "/tiptaptesting" }).catch(() => {});
    },
    newcontractcreate() {
      store.commit("seteyecheck", true);
      store.commit("settitlenewcontract", true);
      this.$store.commit("setnavbardashboardicon", false);
      this.$store.commit("setnavbarcontractcreatoricon", true);
      this.$router.push({ path: "/newcontractcreate" }).catch(() => {});
    },
    changedatetoalphabet_rc(e) {
      console.log(e);
      this.sortdateascending_rc = false;
      this.sortdatedescending_rc = false;
      this.sortalphascending_rc = true;
      this.sortalphadescending_rc = false;
    },
    changealphabettodate_rc(e) {
      console.log(e);
      this.sortdateascending_rc = true;
      this.sortdatedescending_rc = false;
      this.sortalphascending_rc = false;
      this.sortalphadescending_rc = false;
    },
    changevalue1_rc() {
      this.sortdateascending_rc = false;
      this.sortdatedescending_rc = true;
      this.sortalphascending_rc = false;
      this.sortalphadescending_rc = false;
      var arr = this.current_admin_recent_contracts_search;
      var len = this.current_admin_recent_contracts_search.length;
      for (var i = 0; i < len; i++) {
        arr[i].dateplustime = this.change_date_time_for_sorting(
          arr[i].date,
          arr[i].time
        );
      }
      arr.sort(function (a, b) {
        if (a.dateplustime > b.dateplustime) return 1;
        if (a.dateplustime < b.dateplustime) return -1;
        return 0;
      });
      for (i = 0; i < len; i++) {
        delete arr[i].dateplustime;
      }
      this.current_admin_recent_contracts_search = arr;
    },
    change_date_time_for_sorting(time_string, date_string) {
      var time = time_string.split(".");
      var time_v2 = date_string.split(":");

      var date1 = new Date(time[2], time[1], time[0], time_v2[0], time_v2[1]);

      return date1;
    },
    changevalue2_rc() {
      this.sortdateascending_rc = true;
      this.sortdatedescending_rc = false;
      this.sortalphascending_rc = false;
      this.sortalphadescending_rc = false;
      var arr = this.current_admin_recent_contracts_search;
      var len = this.current_admin_recent_contracts_search.length;
      for (var i = 0; i < len; i++) {
        arr[i].dateplustime = this.change_date_time_for_sorting(
          arr[i].date,
          arr[i].time
        );
      }
      arr.sort(function (a, b) {
        if (a.dateplustime > b.dateplustime) return 1;
        if (a.dateplustime < b.dateplustime) return -1;
        return 0;
      });
      for (i = 0; i < len; i++) {
        delete arr[i].dateplustime;
      }
      arr.reverse();
      this.current_admin_recent_contracts_search = arr;
    },
    changevalue3_rc() {
      this.sortdateascending_rc = false;
      this.sortdatedescending_rc = false;
      this.sortalphascending_rc = false;
      this.sortalphadescending_rc = true;
      var arr = this.current_admin_recent_contracts_search;
      arr.sort((a, b) => a.front_title.localeCompare(b.front_title));
      this.current_admin_recent_contracts_search = arr;
    },
    changevalue4_rc() {
      this.sortdateascending_rc = false;
      this.sortdatedescending_rc = false;
      this.sortalphascending_rc = true;
      this.sortalphadescending_rc = false;
      var arr = this.current_admin_recent_contracts_search;
      arr.sort((a, b) => a.front_title.localeCompare(b.front_title));
      arr.reverse();
      this.current_admin_recent_contracts_search = arr;
    },
    changedatetoalphabet_gg(e) {
      console.log(e);
      this.sortdateascending_gg = false;
      this.sortdatedescending_gg = false;
      this.sortalphascending_gg = true;
      this.sortalphadescending_gg = false;
    },
    changealphabettodate_gg(e) {
      console.log(e);
      this.sortdateascending_gg = true;
      this.sortdatedescending_gg = false;
      this.sortalphascending_gg = false;
      this.sortalphadescending_gg = false;
    },
    changevalue1_gg() {
      this.sortdateascending_gg = false;
      this.sortdatedescending_gg = true;
      this.sortalphascending_gg = false;
      this.sortalphadescending_gg = false;
      var arr = this.current_admin_groups_search;
      var len = this.current_admin_groups_search.length;
      for (var i = 0; i < len; i++) {
        arr[i].dateplustime = this.change_date_time_for_sorting(
          arr[i].date,
          arr[i].time
        );
      }
      arr.sort(function (a, b) {
        if (a.dateplustime > b.dateplustime) return 1;
        if (a.dateplustime < b.dateplustime) return -1;
        return 0;
      });
      for (i = 0; i < len; i++) {
        delete arr[i].dateplustime;
      }
      this.current_admin_groups_search = arr;
    },
    changevalue2_gg() {
      this.sortdateascending_gg = true;
      this.sortdatedescending_gg = false;
      this.sortalphascending_gg = false;
      this.sortalphadescending_gg = false;
      var arr = this.current_admin_groups_search;
      var len = this.current_admin_groups_search.length;
      for (var i = 0; i < len; i++) {
        arr[i].dateplustime = this.change_date_time_for_sorting(
          arr[i].date,
          arr[i].time
        );
      }
      arr.sort(function (a, b) {
        if (a.dateplustime > b.dateplustime) return 1;
        if (a.dateplustime < b.dateplustime) return -1;
        return 0;
      });
      for (i = 0; i < len; i++) {
        delete arr[i].dateplustime;
      }
      arr.reverse();
      this.current_admin_groups_search = arr;
    },
    changevalue3_gg() {
      this.sortdateascending_gg = false;
      this.sortdatedescending_gg = false;
      this.sortalphascending_gg = false;
      this.sortalphadescending_gg = true;
      var arr = this.current_admin_groups_search;
      arr.sort((a, b) => a.group_title.localeCompare(b.group_title));
      this.current_admin_groups_search = arr;
    },
    changevalue4_gg() {
      this.sortdateascending_gg = false;
      this.sortdatedescending_gg = false;
      this.sortalphascending_gg = true;
      this.sortalphadescending_gg = false;
      var arr = this.current_admin_groups_search;
      arr.sort((a, b) => a.group_title.localeCompare(b.group_title));
      arr.reverse();
      this.current_admin_groups_search = arr;
    },

    magnifyiconf() {
      this.magnifyicon = !this.magnifyicon;
      this.magnifyiconsearchrecentcontracts = false;
      this.magnifyiconsearchgroups = false;
      this.magnifyiconsearchdatatable = false;
      this.magnifyicongeneralsearch = !this.magnifyicongeneralsearch;
    },
    closedatageneralsearch(y) {
      this.$store.commit("adminchipdatageneralsearchremove", [
        y,
        this.current_admin_name,
      ]);
      this.function_for_tag_search_recent_contracts(
        this.chipdatageneralsearchadmin
      );
      this.function_for_tag_search(this.chipdatageneralsearchadmin);
    },
    enterdatageneralsearch(x) {
      var i;
      this.searchdatageneralsearch = "";
      this.$store.commit("setchipdatageneralsearchadmin", [
        x,
        this.current_admin_name,
      ]);
      this.chipdatageneralsearchadmin =
        store.getters.getchipdatageneralsearchadmin(this.current_admin_name);
      for (i = this.chipdatarecentcontractsadmin.length - 1; i >= 0; i--) {
        this.closedatarecentcontracts(this.chipdatarecentcontractsadmin[i]);
      }
      for (i = this.chipdatagroupsadmin.length - 1; i >= 0; i--) {
        this.closedatagroups(this.chipdatagroupsadmin[i]);
      }
      for (i = this.chipdatatableadmin.length - 1; i >= 0; i--) {
        this.closedatatable(this.chipdatatableadmin[i]);
      }
      this.function_for_tag_search_recent_contracts(
        this.chipdatageneralsearchadmin
      );
      this.function_for_tag_search(this.chipdatageneralsearchadmin);
    },
    closedatatable(y) {
      this.$store.commit("adminchipdatatableremove", [
        y,
        this.current_admin_name,
      ]);
    },
    enterdatatable(x) {
      for (var i = this.chipdatageneralsearchadmin.length - 1; i >= 0; i--) {
        this.closedatageneralsearch(this.chipdatageneralsearchadmin[i]);
      }
      this.$store.commit("setchipdatatableadmin", [x, this.current_admin_name]);
      this.searchdatatable = "";
    },
    closedatagroups(y) {
      this.$store.commit("adminchipdatagroupsremove", [
        y,
        this.current_admin_name,
      ]);
      this.function_for_tag_search(this.chipdatagroupsadmin);
    },
    enterdatagroups(x) {
      for (var i = this.chipdatageneralsearchadmin.length - 1; i >= 0; i--) {
        this.closedatageneralsearch(this.chipdatageneralsearchadmin[i]);
      }
      this.$store.commit("setchipdatagroupsadmin", [
        x,
        this.current_admin_name,
      ]);
      this.function_for_tag_search(this.chipdatagroupsadmin);
      this.searchdatagroups = "";
    },
    function_for_tag_search(chips) {
      if (chips.length > 0) {
        this.current_admin_groups_search = [];
        for (var i = 0; i < chips.length; i++) {
          for (var j = 0; j < this.current_admin_groups.length; j++) {
            if (this.current_admin_groups[j].group_title.includes(chips[i])) {
              let obj = this.current_admin_groups_search.find(
                (o) =>
                  o.group_title === this.current_admin_groups[j].group_title
              );
              if (obj === undefined) {
                this.current_admin_groups_search.push(
                  this.current_admin_groups[j]
                );
              }
            } else {
              for (
                var k = 0;
                k < this.current_admin_groups[j].contract.length;
                k++
              ) {
                if (
                  this.current_admin_groups[j].contract[k].title.includes(
                    chips[i]
                  )
                ) {
                  let obj = this.current_admin_groups_search.find(
                    (o) =>
                      o.group_title === this.current_admin_groups[j].group_title
                  );
                  if (obj === undefined) {
                    this.current_admin_groups_search.push(
                      this.current_admin_groups[j]
                    );
                  }
                }
              }
            }
          }
        }
      } else {
        this.current_admin_groups_search = this.current_admin_groups;
      }
      // console.log(this.current_admin_groups_search)
    },
    function_for_tag_search_recent_contracts(chips) {
      if (chips.length > 0) {
        this.current_admin_recent_contracts_search = [];
        for (var i = 0; i < chips.length; i++) {
          for (var j = 0; j < this.current_admin_recent_contracts.length; j++) {
            if (
              this.current_admin_recent_contracts[j].front_title.includes(
                chips[i]
              )
            ) {
              let obj = this.current_admin_recent_contracts_search.find(
                (o) =>
                  o.front_title ===
                  this.current_admin_recent_contracts[j].front_title
              );
              if (obj === undefined) {
                this.current_admin_recent_contracts_search.push(
                  this.current_admin_recent_contracts[j]
                );
              }
            }
          }
        }
      } else {
        this.current_admin_recent_contracts_search =
          this.current_admin_recent_contracts;
      }
    },
    closedatarecentcontracts(y) {
      this.$store.commit("adminchipdatarecentcontractsremove", [
        y,
        this.current_admin_name,
      ]);
      this.function_for_tag_search_recent_contracts(
        this.chipdatarecentcontractsadmin
      );
    },
    enterdatarecentcontracts(x) {
      for (var i = this.chipdatageneralsearchadmin.length - 1; i >= 0; i--) {
        this.closedatageneralsearch(this.chipdatageneralsearchadmin[i]);
      }
      this.$store.commit("setchipdatarecentcontractsadmin", [
        x,
        this.current_admin_name,
      ]);
      this.function_for_tag_search_recent_contracts(
        this.chipdatarecentcontractsadmin
      );
      this.searchdatarecentcontracts = "";
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
        "contracts data"
      );
      if (contracts !== null) {
        var obj_name = JSON.parse(contracts);
        for (var key in obj_name) {
          var key_substr = key.substring(key.lastIndexOf("-") + 1);
          if (key_substr === old_group_title) {
            localStorage.removeItem("contracts data");
            var key_substr2 = key.substring(0, key.lastIndexOf("-") + 1);
            var new_contract_name = key_substr2 + new_group_title;
            var temp = obj_name[key];
            delete obj_name[key];
            obj_name[new_contract_name] = temp;
            localStorage.setItem(
              "contracts data",
              JSON.stringify(obj_name)
            );
          }
        }
      }
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
      // "./"+ z + "-" + y + "-" + this.current_user_name + "- u.png"

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
currentadmincontracts(contract){
    var contractcc = store.getters.findcopycontract(contract.id)
    var d1 = new Date();
    var datetime = d1.toLocaleString("de-DE");
    const [date, time_ws] = datetime.split(",");
    var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
    store.commit("setrecentcontractsincopycontract",[this.current_admin_name,contractcc,date,time]);
    store.commit("setrecentcontractsinadmindata",[this.current_admin_name,contractcc.id]);
    store.commit("setcurrentadminrecentcontracts",store.getters.getrecentcontractsofadmin(this.current_admin_name));
    this.route_path(contract);
  },
    // currentadmincontracts(x, y, z) {
    //   //x : title
    //   //y : group_title
    //   //z : front_title
    //   for (var i = 0; i < this.current_admin_recent_contracts.length; i++) {
    //     if (this.current_admin_recent_contracts[i].front_title === z) {
    //       var c = this.current_admin_recent_contracts[i];
    //       var d1 = new Date();
    //       var datetime = d1.toLocaleString("de-DE");
    //       const [date, time_ws] = datetime.split(",");
    //       var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
    //       c.date = date;
    //       c.time = time;

    //       this.current_admin_recent_contracts.splice(i, 1);
    //       this.current_admin_recent_contracts.unshift(c);
    //       store.commit(
    //         "setcurrentadminrecentcontracts",
    //         this.current_admin_recent_contracts
    //       );
    //       store.commit("setrecentcontractsinadmindata", [
    //         this.current_admin_name,
    //         this.current_admin_recent_contracts,
    //       ]);
    //       this.route_path(x, y, z);
    //       return true;
    //     }
    //   }
    //   var d = new Date();
    //   datetime = d.toLocaleString("de-DE");
    //   const [date, time_ws] = datetime.split(",");
    //   time = time_ws.substring(0, time_ws.lastIndexOf(":"));
    //   var obj = {
    //     title: "",
    //     url: "",
    //     group_title: "",
    //     front_title: "",
    //     date: "",
    //     time: "",
    //     last_edited: "",
    //     isedited: false,
    //   };
    //   // let location2 = path.join(process.cwd(), "thumbnails");
    //   // location2 = location2.replace(/\\/g, "/");
    //   obj.title = x;
    //   obj.group_title = y;
    //   obj.front_title = z;
    //   obj.last_edited = this.current_admin_name;
    //   // obj.url="";
    //   // obj.url =
    //   //   "local-resource://" +
    //   //   location2 +
    //   //   "/" +
    //   //   z +
    //   //   "-" +
    //   //   y +
    //   //   "-" +
    //   //   this.current_admin_name +
    //   //   ".png";
    //   // "./assets/" + z + "-" + y + "-" + this.current_admin_name + ".png";
    //   obj.date = date;
    //   obj.time = time;
    //   //  z + "-" + y + "-" + this.current_admin_name + ".png"
    //   if (this.current_admin_recent_contracts.length === 5) {
    //     this.current_admin_recent_contracts.pop();
    //     store.commit(
    //       "setcurrentadminrecentcontracts",
    //       this.current_admin_recent_contracts
    //     );
    //     store.commit("setrecentcontractsinadmindata", [
    //       this.current_admin_name,
    //       this.current_admin_recent_contracts,
    //     ]);
    //   }
    //   this.current_admin_recent_contracts.unshift(obj);
    //   store.commit(
    //     "setcurrentadminrecentcontracts",
    //     this.current_admin_recent_contracts
    //   );
    //   store.commit("setrecentcontractsinadmindata", [
    //     this.current_admin_name,
    //     this.current_admin_recent_contracts,
    //   ]);
    //   this.route_path(x, y, z);
    // },

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
     route_path(contract) {

      localStorage.setItem("contract_org_name", contract.title);
      localStorage.setItem("current_contract_group_title", contract.group_id);
      localStorage.setItem("current_contract_title", contract.id);
      localStorage.setItem("opened_contract", true);
      this.$store.commit("setnavbardashboardicon", false);
      this.$store.commit("setnavbarcontractcreatoricon", false);
      this.$router.push({ path: "/amazon" }).catch(() => {});

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
      var group2 = {};
      Object.assign(group2, group);
      var confirm = this.delete_grouptest();
      confirm.then((x) => {
        if (x === 1) {
          store.commit("pushgroupinpapierkorb", [
            this.current_admin_name,
            group2,
          ]);
          var Clength = group.contract.length;
          for (var l = 0; l < Clength; l++) {
            var Ctitle = group.contract[l].front_title;
            for (
              var i = 0;
              i < this.current_admin_recent_contracts.length;
              i++
            ) {
              if (
                this.current_admin_recent_contracts[i].front_title === Ctitle
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
            store.commit("deleteuserfromgroup", [
              group.user[j - 1].name,
              group.contract,
            ]);
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
          this.current_admin_groups_search = this.current_admin_groups;
          store.dispatch("updatewritejson");
        }
        
        store.commit("set_group_component", false);
         this.$router.push({ path: "/contracts" }).catch(() => {});
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
      // const value = 1;
      this.all_contracts = store.getters.getallcontracts();
      // var i;
      // for (i = 1; i < this.all_contracts.length; i++) {
      //   console.log(this.all_contracts[i].contract_title);
      // }
    },

    

    copy_creation_of_contract(contract_title, group_title) {
      let obj = this.current_admin_versions.find(
        (o) => o.contract_title === contract_title
      );
      let front_title =
        contract_title + "_Vertrag_" + obj.contract_total_version;

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
   delete_contract_from_group(contract_id, group_id) {
      store.commit("deleted_data", contract_id);
      store.commit("deletecontractfromgroup", [contract_id, group_id]);
      this.watchfunctionforgroups();
      // const contract_title = x;
      // var group_title = y;
      // var group = store.getters.findgroup(group_title);
      // var contract = store.getters.findcopycontractfordeletion([
      //   contract_title,
      //   this.current_admin_name,
      // ]);
      // store.commit("deleted_data", [this.current_admin_name, contract]);
      // for (var i = 0; i < this.current_admin_recent_contracts.length; i++) {
      //   if (this.current_admin_recent_contracts[i].front_title === x) {
      //     this.current_admin_recent_contracts.splice(i, 1);
      //     store.commit(
      //       "setcurrentadminrecentcontracts",
      //       this.current_admin_recent_contracts
      //     );
      //     store.commit("setrecentcontractsinadmindata", [
      //       this.current_admin_name,
      //       this.current_admin_recent_contracts,
      //     ]);
      //     store.commit("setrecentcontractsinuserdata", [
      //       this.current_user_name,
      //       this.current_user_recent_contracts,
      //     ]);
      //     break;
      //   }
      // }
      // var admin_data = store.getters.checkByName(this.current_admin_name);
      // this.$store.commit("setcurrentadmindeleted", admin_data[0].deleted_data);
      // store.commit("deletecontractfromgroup2", [contract_title, group]);
      // var groups_by_specific_admin = store.getters.checkGroupByAdminName(
      //   this.current_admin_name
      // );
      // store.commit("setcurrentadmingroups", groups_by_specific_admin);
      // this.current_admin_groups = store.state.current_admin_groups;
      // this.current_admin_groups_search = this.current_admin_groups;
      // store.dispatch("updatewritejson");
      // this.contract_title = "";
      // this.$router.push({ path: "/contracts" }).catch(() => {});
      // return;
    },
    watchfunctionforgroups() {
      var obj = "";
      obj = JSON.parse(JSON.stringify(store.state.group));
      var len = store.state.group.length;
      var i, j;
      for (i = 0; i < len; i++) {
        var lenC = store.state.group[i].contract.length;
        for (j = 0; j < lenC; j++) {
          var idC = store.state.group[i].contract[j];
          var contract = store.getters.findcopycontract(idC);
          obj[i].contract.splice(j, 1, contract);
        }
        var lenU = store.state.group[i].user.length;
        for (j = 0; j < lenU; j++) {
          var idU = store.state.group[i].user[j];
          var user = store.getters.finduserbyid(idU);
          obj[i].user.splice(j, 1, user.name);
        }
      }
      this.current_admin_groups = JSON.parse(JSON.stringify(obj));
      this.current_admin_groups_search = this.current_admin_groups;
      this.groupcopycontracts = store.state.copycontract;
      // recent_contracts
      obj = JSON.parse(
        JSON.stringify(store.state.current_admin_recent_contracts)
      );
      len = obj.length;
      for (i = 0; i < len; i++) {
        contract = store.getters.findcopycontract(obj[i]);
        obj.splice(i, 1, contract);
      }
      this.current_admin_recent_contracts = obj;
      this.current_admin_recent_contracts_search =
        this.current_admin_recent_contracts;
      // recent_contracts finish
      this.function_for_tag_search_recent_contracts(
        this.chipdatarecentcontractsadmin
      );
      this.function_for_tag_search(this.chipdatagroupsadmin);

      store.dispatch("updatewritejson");
    },
    // delete_contract_from_group(x, y) {
    //   const contractid = x;
    //   var groupid = y;
    //   var group = store.getters.findgroup(groupid);
    //   var contract = store.getters.findcopycontractfordeletion([
    //     contractid,
    //     this.current_admin_name,
    //   ]);
    //   store.commit("deleted_data", [this.current_admin_name, contract]);
    //   for (var i = 0; i < this.current_admin_recent_contracts.length; i++) {
    //     if (this.current_admin_recent_contracts[i].front_title === x) {
    //       this.current_admin_recent_contracts.splice(i, 1);
    //       store.commit(
    //         "setcurrentadminrecentcontracts",
    //         this.current_admin_recent_contracts
    //       );
    //       store.commit("setrecentcontractsinadmindata", [
    //         this.current_admin_name,
    //         this.current_admin_recent_contracts,
    //       ]);
    //       store.commit("setrecentcontractsinuserdata", [
    //         this.current_user_name,
    //         this.current_user_recent_contracts,
    //       ]);
    //       break;
    //     }
    //   }
    //   var admin_data = store.getters.checkByName(this.current_admin_name);
    //   this.$store.commit("setcurrentadmindeleted", admin_data[0].deleted_data);
    //   store.commit("deletecontractfromgroup2", [contractid, group]);
    //   var groups_by_specific_admin = store.getters.checkGroupByAdminName(
    //     this.current_admin_name
    //   );
    //   store.commit("setcurrentadmingroups", groups_by_specific_admin);
    //   this.current_admin_groups = store.state.current_admin_groups;
    //   this.current_admin_groups_search = this.current_admin_groups;
    //   store.dispatch("updatewritejson");
    //   this.contract_title = "";
    //   this.$router.push({ path: "/contracts" }).catch(() => {});
    //   return;
    // },
    add_user_in_group_array(x) {
      for (var i = 0; i < x.length; i++) {
        this.add_user_in_group(x[i]);
      }
    },
    add_user_in_group(x) {
      var group_id = this.group.group_id
      var group = store.getters.checkByGroupId(group_id);
      var user = store.getters.finduser(x);
      var obj = group.user.find( o=> o === user.id)
      if(obj === undefined){
        this.$store.commit("addusergroupfunc", [group_id, user.id]);
        this.$store.commit("addcontractsinusergroupfunc", [group.contract, user.id]);
      }
      this.auto_users = []
      this.filter_work_mounted()
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
      var admin_data = store.getters.checkByName(this.current_admin_name);
      this.$store.commit("setcurrentadmindeleted", admin_data[0].deleted_data);
      // store.commit("deleteuserfromgroup", [user, group]);
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
        this.current_admin_name
      );
      store.commit("setcurrentadmingroups", groups_by_specific_admin);
      this.current_admin_groups = store.state.current_admin_groups;
      this.current_admin_groups_search = this.current_admin_groups;
      group = store.getters.findgroup(group_title);
      this.searchgroupuserfordeletiondata = JSON.parse(
        JSON.stringify(group.user)
      );
      this.searchgroupuserfordeletiondata_search =
        this.searchgroupuserfordeletiondata;
      this.searchgroupuserfordeletion = "";
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
      this.$router.push({ path: "/contracts" }).catch(() => {});
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
      if (this.group_title.length === 0) {
        dialog.showMessageBox(remote.getCurrentWindow(), {
          type: "error",
          title: "Fehler",
          message: "Fehlende Beschreibung",
          detail: "Bitte fügen Sie eine Beschreibung hinzu",
        });
        return;
      }
      let checking = this.$store.getters.checkByGroupNamesArray(
        this.group_title
      );
      if (checking === true || a.length !== 0) {
        dialog.showMessageBox(remote.getCurrentWindow(), {
          type: "error",
          title: "Fehler",
          message: "Dieser Name existiert bereits als Arbeitsbereich",
          detail: "Bitte andere Beschreibung hinzufügen",
        });
        return;
      } else {
        this.$store.commit("groupnamesarray", this.group_title);
        this.$store.commit("groupsavefunc", {
          title: this.group_title,
          user: [],
          contract: [],
          admin_name: this.current_admin_name,
          keep_original_contract: this.iconcheck, //true/false,
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
        this.current_admin_groups_search = this.current_admin_groups;
        store.dispatch("updatewritejson");
      }

      this.group_title = "";
      this.auto_contracts = [];
      this.auto_users = [];
      this.iconcheck = false;
      this.$router.push({ path: "/contracts" }).catch(() => {});
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
  mounted() {
    
    // console.log(this.group);
    
        // console.log(this.lightcolor);
    this.isAdmin = store.state.isAdmin;
    this.is_superuser = store.state.is_superuser;
    this.all_users = store.state.user;
    this.all_contracts = store.state.contract;
    this.all_contracts_search = store.state.contract;
    this.current_admin_users_search = store.state.current_admin_users;
    if (this.isAdmin === true) {
      // searchdatagroups();
      this.current_admin_name = store.state.current_admin_name;
      this.chipdatatableadmin = store.getters.getchipdatatableadmin(
        this.current_admin_name
      );
      this.chipdatagroupsadmin = store.getters.getchipdatagroupsadmin(
        this.current_admin_name
      );
      this.chipdatarecentcontractsadmin =
        store.getters.getchipdatarecentcontractsadmin(this.current_admin_name);
      this.chipdatageneralsearchadmin =
        store.getters.getchipdatageneralsearchadmin(this.current_admin_name);
      //  this.list = store.state.list;
      //   this.grid = store.state.grid;
      this.copycontract = store.state.copycontract;
      this.read_data_for_admin(this.current_admin_name);
      this.current_admin_versions = store.state.current_admin_versions;
      this.current_admin_recent_contracts =
        store.state.current_admin_recent_contracts;
      this.current_admin_recent_contracts_search =
        this.current_admin_recent_contracts;
      this.current_admin_groups = store.state.current_admin_groups;
      this.current_admin_groups_search = store.state.current_admin_groups;
      this.current_admin_users = store.state.current_admin_users;
      //this.admincard = store.state.group;
      // new group work
       this.filter_work_mounted()
       this.lightcolor= this.group.group_lightcolor;
      
    } else {
      this.current_user_name = store.state.current_user_name;
      this.read_data_for_user(this.current_user_name);
      this.current_user_recent_contracts =
        store.state.current_user_recent_contracts;
      this.contract_list_of_user = store.state.contract_list_of_user;
    }
  },
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
  watch: {
    searchgroupuserfordeletionfunction: function () {
      var all_contracts_search = [];
      if (this.searchgroupuserfordeletion !== "") {
        for (var j = 0; j < this.searchgroupuserfordeletiondata.length; j++) {
          if (
            this.searchgroupuserfordeletiondata[j].name.includes(
              this.searchgroupuserfordeletion
            )
          ) {
            all_contracts_search.push(this.searchgroupuserfordeletiondata[j]);
          }
        }
        this.searchgroupuserfordeletiondata_search = all_contracts_search;
      } else {
        this.searchgroupuserfordeletiondata_search =
          this.searchgroupuserfordeletiondata;
      }
    },
    allcontractssearchfunction: function () {
      var all_contracts_search = [];
      if (this.searchallcontracts !== "") {
        for (var j = 0; j < this.all_contracts.length; j++) {
          if (
            this.all_contracts[j].contract_title.includes(
              this.searchallcontracts
            )
          ) {
            all_contracts_search.push(this.all_contracts[j]);
          }
        }
        this.all_contracts_search = all_contracts_search;
      } else {
        this.all_contracts_search = store.state.contract;
      }
    },
    currentadminuserssearchfunction: function () {
      var all_user_search = [];
      if (this.searchcurrentadminusers !== "") {
        for (var j = 0; j < this.current_admin_users.length; j++) {
          if (
            this.current_admin_users[j].name.includes(
              this.searchcurrentadminusers
            )
          ) {
            all_user_search.push(this.current_admin_users[j]);
          }
        }
        this.current_admin_users_search = all_user_search;
      } else {
        this.current_admin_users_search = store.state.current_admin_users;
      }
    },
    // searchdatagroups: function (value) {
    //   if (value.length === 0) {
    //     this.current_admin_groups_search = this.current_admin_groups;
    //   } else if (value.length > 0) {
    //     var x = this.current_admin_groups;
    //     var x1 = x.filter(function (item) {
    //       var x2 = item.contract.filter(function (item2) {
    //         return item2.front_title.includes(value);
    //       });
    //       if (x2.length !== 0) {
    //         return x2;
    //       }
    //     });
    //     this.current_admin_groups_search = x1;
    //   }
    // },
    // searchdatarecentcontracts: function (value) {
    //   if (value.length === 0) {
    //     this.current_admin_recent_contracts_search = this.current_admin_recent_contracts;
    //   } else if (value.length > 0) {
    //     var x = this.current_admin_recent_contracts;
    //     var x1 = x.filter(function (item) {
    //       return item.front_title.includes(value);
    //     });
    //     this.current_admin_recent_contracts_search = x1;
    //   }
    // },
  },
  computed: {
    cssVars() {
      return {
        /* variables you want to pass to css */
        "--lightcolor": this.lightcolor,
      };
    },
    active() {
      return (id) => id === this.$data.currentTabId && "-active";
    },
    dragOptions() {
      return {
        animation: 250,
        disabled: false,
        // ghostClass: "-dragging"
      };
    },
    tabsWidth() {
      return {
        maxWidth: this.$data.tabs.length * 190 + "px",
        width: "100%",
        minWidth: "0px",
        transition: "max-width 0.2s",
      };
    },
    searchgroupuserfordeletionfunction: function () {
      return this.searchgroupuserfordeletion, new Date();
    },
    allcontractssearchfunction: function () {
      return this.searchallcontracts, new Date();
    },
    currentadminuserssearchfunction: function () {
      return this.searchcurrentadminusers, new Date();
    },
    ...mapState([
      "group_component",
      "zuletztbearbeitetadmin",
      "Arbeitsbereicheadmin",
      "Benutzeradmin",
      "Papierkorbadmin",
      "Dashboardadmin",
      "Dashboarduser",
      // "grid",
      "maincolor",
      // "list",
      "Zuletztbearbeitetuser",
      "Furmichfreigegebenuser",
      "Papierkorbuser",
    ]),
    computedcheckfooter: function () {
      var checkfooter;
      if (this.contractsLength < 9) {
        checkfooter = true;
      }
      return checkfooter;
    },
    contractsLength: function () {
      var i;
      var count = 0;
      for (i = 0; i < store.state.current_admin_groups.length; i++) {
        count = store.state.current_admin_groups[i].contract.length + count;
      }
      return count;
    },

    rules() {
      return [
        this.selected.length > 0 || "At least one item should be selected",
      ];
    },
    computedCurrent_admin_groups_contract() {
      let contractsGridsearch = [];
      let contractsGrid = [];
      let i, j;
      let len;
      for (i = 0, len = this.current_admin_groups.length; i < len; i++) {
        let j;
        let lenJ;
        for (
          j = 0, lenJ = this.current_admin_groups[i].contract.length;
          j < lenJ;
          j++
        ) {
          var cont = this.current_admin_groups[i].contract[j];
          cont.keep_original_contract =
            this.current_admin_groups[i].keep_original_contract;
          contractsGrid.push(cont);
        }
      }
      if (this.chipdatatableadmin.length > 0) {
        for (i = 0; i < this.chipdatatableadmin.length; i++) {
          for (j = 0; j < contractsGrid.length; j++) {
            if (
              contractsGrid[j].front_title.includes(this.chipdatatableadmin[i])
            ) {
              let obj = contractsGridsearch.find(
                (o) => o.front_title === contractsGrid[j].front_title
              );
              if (obj === undefined) {
                contractsGridsearch.push(contractsGrid[j]);
              }
            }
          }
        }
        return contractsGridsearch;
      } else if (this.chipdatageneralsearchadmin.length > 0) {
        for (i = 0; i < this.chipdatageneralsearchadmin.length; i++) {
          for (j = 0; j < contractsGrid.length; j++) {
            if (
              contractsGrid[j].front_title.includes(
                this.chipdatageneralsearchadmin[i]
              )
            ) {
              let obj = contractsGridsearch.find(
                (o) => o.front_title === contractsGrid[j].front_title
              );
              if (obj === undefined) {
                contractsGridsearch.push(contractsGrid[j]);
              }
            }
          }
        }
        return contractsGridsearch;
      } else {
        return contractsGrid;
      }
    },
  },
};
</script>

<style   scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700,800,900");


.my-menu1 {
  border-radius: 18px 18px 18px 18px;
  margin-left: 3.3%;
  margin-top: 10px;
}
.my-menu2 {
  border-radius: 18px 18px 18px 18px;
  margin-left: 0.4%;
  margin-top: 1px;
}
.group_details_Active {
  display: flex;
  /* border: 1px solid grey; */
  width: 95%;
}
.group_details_DeActive {
  display: flex;
  /* border: 1px solid grey; */
  width: 94%;
}
.group_settings_css {
  margin-top: 10px;
  margin-left: 15px;
}
.tabs {
  display: inline-flex;
  align-items: flex-end;
  box-sizing: border-box;
  line-height: 1;
  position: relative;
  z-index: 1;
  user-select: none;
  width: 100%;
}
.tabs-group {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 12px;
  min-width: 0px;
}

.tab {
  position: relative;
  background-color: transparent;
  padding: 14px 12px;
  border-radius: 0px 0px 0 0;
  font-size: 15px;
  display: block;
  max-width: 250px;
  width: 155px;
  transition: background-color 0.2s;
  cursor: default;
  position: relative;
  margin-right: 0px;
  white-space: nowrap;
  flex: 1;
  overflow: hidden;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
.tab:hover {
    background-color: var(--lightcolor);
    /* &::before {
      background-color: transparent;
      right: 0;
    } */
}
.tab.-active {
   background-color: var(--lightcolor) ;
    /* &::before {
      background-color: transparent;
      right: 0;
    } */
}
.tab-content {
  display: none;
  box-sizing: border-box;
}
 .tab-content.-active {
    display: block;
  }
.custom-highlight-row{
  background-color: var(--lightcolor)
}
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
.expand1::-webkit-scrollbar {
  width: 5px;
}
.expand1 {
  overflow-y: auto;
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
.frist-css{
  margin-left: -2px;
  margin-top: -2px;
}
.Vertragspartner-css{
   margin-left: -2px;
  margin-top: -2px;
}
</style>


<template>
  <v-main class="ma-0 pa-0">
    <!-- 1st heading -->
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
      <div style="width: 20em" class="mt-7 mr-3">
          <v-text-field
v-if="magnifyicongeneralsearch"
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
        <v-icon color="#474747" size="26">mdi-magnify</v-icon>
      </v-btn> -->
    <div v-if="!group_component" class="">
      <v-row>
        <v-col cols="11" style="display: flex">
          <p style="font-family: Raleway; font-size: 18px; font-weight: 700">
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
              <v-icon class="" color="#474747" size="28">
                mdi-menu-right</v-icon
              >
            </v-btn>
          </div>
          <!-- v-if="magnifyicon" -->
          <v-btn
            @click="
              magnifyiconsearchrecentcontracts =
                !magnifyiconsearchrecentcontracts
            "
            class="mt-n1"
            icon
          >
            <v-icon color="#474747" size="26">mdi-magnify</v-icon>
          </v-btn>
          <v-btn
            v-if="sortdateascending_rc"
            class="mt-n1"
            icon
            @contextmenu="changedatetoalphabet_rc($event)"
            @click="changevalue1_rc()"
          >
            <v-icon color="#474747" size="26"
              >mdi-sort-calendar-ascending</v-icon
            >
          </v-btn>
          <v-btn
            v-if="sortdatedescending_rc"
            class="mt-n1"
            icon
            @contextmenu="changedatetoalphabet_rc($event)"
            @click="changevalue2_rc()"
          >
            <v-icon color="#474747" size="26"
              >mdi-sort-calendar-descending</v-icon
            >
          </v-btn>
          <v-btn
            v-if="sortalphascending_rc"
            class="mt-n1"
            icon
            @contextmenu="changealphabettodate_rc($event)"
            @click="changevalue3_rc()"
          >
            <v-icon color="#474747" size="26"
              >mdi-sort-alphabetical-ascending</v-icon
            >
          </v-btn>
          <v-btn
            v-if="sortalphadescending_rc"
            class="mt-n1"
            icon
            @contextmenu="changealphabettodate_rc($event)"
            @click="changevalue4_rc()"
          >
            <v-icon color="#474747" size="26"
              >mdi-sort-alphabetical-descending</v-icon
            >
          </v-btn>

          <!-- v-if="magnifyiconsearchrecentcontracts" -->
          <!-- search1 -->
          <div
            v-if="magnifyiconsearchrecentcontracts"
            style="width: 20em"
            class="ml-2 mt-n3"
          >
            <!-- v-if="magnifyicongeneralsearch" -->
            <v-text-field
              v-model="searchdatarecentcontracts"
              prepend-inner-icon="mdi-magnify"
              label="Filtern"
              dense
              :color="maincolor.theme"
              @keyup.enter="enterdatarecentcontracts(searchdatarecentcontracts)"
              :rounded="true"
              outlined
            ></v-text-field>
          </div>
          <!-- v-if="magnifyicongeneralsearch" -->
          <v-card elevation="0" width="300" height="1" style="display: flex">
            <div
              v-for="(item, index) in chipdatarecentcontractsadmin"
              :key="index"
            >
              <v-chip
                v-if="item"
                outlined
                small
                close
                :color="maincolor.theme"
                @click:close="closedatarecentcontracts(item)"
                class="ml-3"
              >
                {{ item | truncateEnd(16, "...") }}
              </v-chip>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- recent file for admin-->
      <div style="display: flex" v-if="zuletztbearbeitetmenudown" class="mt-n6">
        <div
          v-for="(item, indexbb) in current_admin_recent_contracts_search"
          :key="indexbb"
        >
          <v-card
            class="mr-4 mt-4"
            elevation="6"
            height="200"
            width="200"
            style="border-radius: 18px 18px 12px 12px"
          >
            <!-- @click="recentcontractforadmin(item.contract_title,item.group_title,item.contract_front_title)" -->
            <v-img
              :src="item.preview"
              height="200"
              width="200"
              @click="currentadmincontracts(item)"
              style="border-radius: 10px; cursor: pointer"
            ></v-img>
            <v-card
              elevation="0"
              width="200"
              height="40"
              style="position: absolute; bottom: 2.2em; left: 0%"
            >
              <div class="" style="margin-left: 5%">
                <p style="color: #474747; margin-left: -0.8%">
                  <v-icon
                    size="17"
                    class="mt-n1"
                    style="margin-right: 3%"
                    color="#474747"
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
              <div style="display: flex; margin-top: 0.15em" class="">
                <v-icon
                  v-if="item.isedited === true"
                  color="#474747"
                  class="mt-n3 ml-2"
                  size="14"
                  >mdi-file-document-outline</v-icon
                >
                <v-icon
                  v-if="item.isedited === false"
                  class="mt-n3 ml-2"
                  color="#474747"
                  size="14"
                >
                  mdi-file-star-outline</v-icon
                >

                <p
                  v-if="item.isedited === true"
                  class="pt-1 pl-1"
                  style="font-size: 12px; font-weight: 500"
                >
                  {{ item.front_title | truncateEnd(22, "...") }}
                </p>
                <p
                  v-if="item.isedited === false"
                  class="pt-1 pl-1"
                  style="font-size: 12px; font-weight: 500"
                >
                  {{ item.title | truncateEnd(16, "...") }}
                </p>

                <!-- <p class="pt-1 pl-1" style="font-size: 12px">14:22</p>
                    <v-card
                      elevation="0"
                      class="mt-1 ml-1"
                      width="2"
                      height="20"
                      color="#474747"
                    ></v-card>
                    <p class="mt-1 ml-1" style="font-size: 12px">4/8</p> -->
              </div>
            </v-card>
          </v-card>
        </div>
      </div>
      <!-- <v-banner class="mt-10 " height="2" width="1580" dark color="grey"></v-banner> -->
      <!-- <v-divider class="mt-10 mr-6" color="grey" v-if="zuletztbearbeitetmenudown" ></v-divider> -->
      <!-- 2nd hading -->
      <v-row class="mt-4 mr-2">
        <v-col cols="11" style="display: flex">
          <p
            class=""
            style="font-family: Raleway; font-size: 18px; font-weight: 690"
          >
            Arbeitsbereich
          </p>
          <div
            @click="Arbeitsbereichemenudown = !Arbeitsbereichemenudown"
            class="ml-2 mt-n1"
          >
            <v-btn icon v-if="Arbeitsbereichemenudown">
              <v-icon size="28" color="#474747" class="">
                mdi-menu-down
              </v-icon>
            </v-btn>
            <v-btn icon v-if="!Arbeitsbereichemenudown">
              <v-icon size="28" color="#474747" class="">
                mdi-menu-right
              </v-icon>
            </v-btn>
          </div>
          <v-btn
            @click="magnifyiconsearchgroups = !magnifyiconsearchgroups"
            class="mt-n1"
            icon
          >
            <v-icon color="#474747" size="26">mdi-magnify</v-icon>
          </v-btn>

          <!-- v-if="magnifyicon" -->
          <v-btn
            v-if="sortdateascending_gg"
            class="mt-n1"
            icon
            @contextmenu="changedatetoalphabet_gg($event)"
            @click="changevalue1_gg()"
          >
            <v-icon color="#474747" size="26"
              >mdi-sort-calendar-ascending</v-icon
            >
          </v-btn>
          <v-btn
            v-if="sortdatedescending_gg"
            class="mt-n1"
            icon
            @contextmenu="changedatetoalphabet_gg($event)"
            @click="changevalue2_gg()"
          >
            <v-icon color="#474747" size="26"
              >mdi-sort-calendar-descending</v-icon
            >
          </v-btn>
          <v-btn
            v-if="sortalphascending_gg"
            class="mt-n1"
            icon
            @contextmenu="changealphabettodate_gg($event)"
            @click="changevalue3_gg()"
          >
            <v-icon color="#474747" size="26"
              >mdi-sort-alphabetical-ascending</v-icon
            >
          </v-btn>
          <v-btn
            v-if="sortalphadescending_gg"
            class="mt-n1"
            icon
            @contextmenu="changealphabettodate_gg($event)"
            @click="changevalue4_gg()"
          >
            <v-icon color="#474747" size="26"
              >mdi-sort-alphabetical-descending</v-icon
            >
          </v-btn>
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            offset-x
            bottom
            content-class="my-menu1"
            width="350"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mt-n1" icon v-on="on" v-bind="attrs">
                <v-icon size="28" color="#474747" class=""> mdi-plus </v-icon>
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
                  font-family: Raleway;
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
                      class="pt-4 pl-4 pb-3 pr-4"
                    >
                      <v-row >
                        <div
                          v-for="(item, indexf) in auto_contracts"
                          :key="indexf"
                          class="ml-3"
                        >
                          <v-chip
                            style="border-color: #767577"
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
                                      item.contract_title
                                        | truncateEnd(29, "...")
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
                    font-family: Raleway;
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

          <!-- v-if="magnifyicongeneralsearch" -->
          <!-- search2 -->
          <div
            v-if="magnifyiconsearchgroups"
            style="width: 20em"
            class="ml-2 mt-n3"
          >
            <v-text-field
              v-model="searchdatagroups"
              prepend-inner-icon="mdi-magnify"
              label="Filtern"
              dense
              :color="maincolor.theme"
              @keyup.enter="enterdatagroups(searchdatagroups)"
              :rounded="true"
              outlined
            ></v-text-field>
          </div>
          <!-- v-if="magnifyiconsearchgroups" -->
          <v-card elevation="0" width="300" height="1" style="display: flex">
            <div v-for="(item, index) in chipdatagroupsadmin" :key="index">
              <v-chip
                v-if="item"
                style="border-color: maincolor"
                outlined
                small
                close
                :color="maincolor.theme"
                @click:close="closedatagroups(item)"
                class="ml-3"
              >
                {{ item | truncateEnd(16, "...") }}
              </v-chip>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- main cards -->

      <div
        class="mb-5 pb-4 mt-1 expand2"
        style="display: flex; width: 99%"
        v-if="Arbeitsbereichemenudown"
      >
        <div
          v-for="(itemgroup, indexyy) in current_admin_groups_search"
          :key="indexyy"
        >
          <v-card
           @mouseenter="newItemGroup(itemgroup)"
            width="290"
            height="390"
            outlined
            elevation="0"
            :style="{
              borderColor: itemgroup.group_color,

              borderRadius: '15px',
            }"
            class="mr-5"
          >
            <!-- :color="itemgroup.group_color" -->
            <!-- uper card -->
            <v-card
              height="55"
              class="mt-3"
              @contextmenu="show"

              @click="groupcomponentfunc(itemgroup)"
              :style="{
                backgroundColor: itemgroup.group_color,
                borderRadius: '14px 14px 0px 0px',
              }"
              elevation="0"
            >
<v-menu
v-model="rightClickMenu"
:position-x="x"
:position-y="y"
absolute
offset-y

      >
<v-list  style="max-width:180px; margin:auto 0">

<v-btn
@click="DeleteThisGroup(newItem.group_id, `löschen`)"
style="background-color:white" elevation="0">
<v-icon>mdi-delete</v-icon>
<v-spacer></v-spacer>
Löschen</v-btn>


<v-btn v-on="on"
@click="duplicategroup($store.state,newItem)"
style="background-color:white" elevation="0">
<v-icon>mdi-content-duplicate</v-icon>
<v-spacer></v-spacer>
 Duplizieren</v-btn>

<v-btn v-on="on"
    @click="changegrouptitlefromrightclick = !changegrouptitlefromrightclick"
    style="background-color:white"
    elevation="0"
    >
    <v-icon>mdi-account-edit</v-icon>

    <v-spacer></v-spacer>
    umbenennen
    </v-btn> 

        </v-list>
      </v-menu>
 
  <div
    v-if = "changegrouptitlefromrightclick"
  >

            <v-menu
                  :close-on-content-click="true"
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
                 elevation="5"
                  width="330"
                  min-height="100"
                  rounded="xl"
                  class="ml-15"
                  outlined
                  :style="{borderColor:itemgroup.group_color}"
                >
                <div style="width: 23em" class="pl-4 pr-2 pt-8">
                <v-text-field
                        :label="itemgroup.group_title"
                        v-model="changegrouptitlename"
                        outlined

                        :color="itemgroup.group_color"
                >
                </v-text-field>
                </div>

                </v-card>
                </v-menu>

            
  </div>

  
     
              <!-- :style="{ borderColor: itemgroup.group_color, border: solid , borderRadius: '15px 15px 0px 0px',}" -->
              <v-row class="">
                <v-col cols="2" class="mt-n1">
                  <v-menu
                    offset-y
                    bottom
                    :close-on-content-click="false"
                    content-class="handshake"
                    max-width="38"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn icon v-on="on" v-bind="attrs" class="ml-2">
                        <v-icon color="white">{{
                          itemgroup.group_icon
                        }}</v-icon>
                      </v-btn>
                    </template>
                    <v-card elevation="0" width="38" min-height="160">
                      <v-btn
                        icon
                        v-for="(item_icon, index) in list_of_icons"
                        :key="index"
                        @click="changegroupicon(item_icon.icon, itemgroup)"
                      >
                        <v-icon
                          v-if="item_icon.icon !== itemgroup.group_icon"
                          >{{ item_icon.icon }}</v-icon
                        >
                        <v-icon
                          v-if="item_icon.icon === itemgroup.group_icon"
                          :color="itemgroup.group_color"
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
                              @click="addgroupicon(add_icon, itemgroup)"
                              icon
                              v-for="(add_icon, index) in group_list_of_icons"
                              :key="index"
                            >
                              <v-icon
                                v-if="add_icon.icon !== itemgroup.group_icon"
                                >{{ add_icon.icon }}</v-icon
                              >
                              <v-icon
                                v-if="add_icon.icon === itemgroup.group_icon"
                                :color="itemgroup.group_color"
                                >{{ add_icon.icon }}</v-icon
                              >
                            </v-btn>
                          </v-row>
                        </v-card>
                      </v-menu>
                    </v-card>
                  </v-menu>
                </v-col>

                <v-col
                  cols="8"
                  style="cursor: pointer; text-align: left"
                  class="edit ml-n3"
                >
                  <h3 class="ml-3 mt-1" style="color: white; cursor: pointer">
                    {{ itemgroup.group_title | truncateEnd(15, "...") }}
                  </h3>

                  <v-menu
                    :close-on-content-click="false"

                    offset-x
                    right
                    bottom
                    max-width="330"
                    content-class="uppercardmenu"
                    rounded="xl"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                      id="primaryButton"
                        icon
                        class="mt-n1 mr-1 editbutton"
                        style="position: absolute; right: 39px; top: 11px"
                        v-bind="attrs"
                        v-on="on"
                        @click="all_contract_list(newItem.group_id)"
                      >
                        <v-icon color="white">mdi-plus</v-icon>
                      </v-btn>
                    </template>
                    <v-card
                      elevation="0"
                      width="330"
                      min-height="120"
                      rounded="xl"
                      class=""
                      outlined
                    >
                      <p
                        class="pt-5 pl-5"
                        style="
                          font-family: Raleway;
                          font-size: 18px;
                          font-weight: 700;
                        "
                      >
                        Arbeitsbereich bearbeiten
                        <v-btn
                          icon
                          @click="
                            itemgroup.keep_original_contract =
                              !itemgroup.keep_original_contract
                          "
                        >
                          <v-icon
                            size="25"
                            color="#474747"
                            v-if="!itemgroup.keep_original_contract"
                          >
                            mdi-star-outline
                          </v-icon>
                          <v-icon
                            size="25"
                            color="#474747"
                            v-if="itemgroup.keep_original_contract"
                          >
                            mdi-file-star-outline
                          </v-icon>
                        </v-btn>
                      </p>
                      <div style="width: 23em" class="pl-4 pr-2 mt-n2">
                        <v-text-field
                          :label="itemgroup.group_title"
                          v-model="changegrouptitlename"
                          outlined
                          :color="itemgroup.group_color"
                          rounded
                        >
                        </v-text-field>
                      </div>
                      <v-row justify="center">
                        <div class="" style="width: 21em">
                          <v-card
                            elevation="0"
                            outlined
                            width="350"
                            :style="{ borderColor: itemgroup.group_color }"
                            rounded="xl"
                            min-height="10"
                            class="mb-4"
                          >
                            <v-card
                              v-if="auto_contracts.length !== 0"
                              elevation="0"
                              color="transparent"
                              min-height="1"
                              width="350"
                              class="pt-4 pl-4 pr-4 pb-3"
                            >
                              <v-row >
                                <div
                                  v-for="(item, indexj) in auto_contracts"
                                  :key="indexj"
                                  class="ml-3"
                                >
                                  <v-chip
                                    :style="{
                                      borderColor: itemgroup.group_color,
                                    }"
                                    outlined
                                    small
                                    class="mt-1"
                                  >
                                    <v-icon
                                      size="12"
                                      class="mr-1"
                                      :color="itemgroup.group_color"
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
                                    :color="itemgroup.group_color"
                                    class="ml-n2 mr-2"
                                    >mdi-magnify</v-icon
                                  >
                                  <v-text-field
                                    dense
                                    @click.stop="onClick()"
                                    v-model="searchallcontracts"
                                    class="pt-4 pl-n1 some-style"
                                    placeholder="Verträge"
                                    :color="itemgroup.group_color"
                                  >
                                  </v-text-field>
                                  <template v-slot:actions>
                                    <v-icon
                                      class="mr-1"
                                      :color="itemgroup.group_color"
                                      >mdi-menu-down</v-icon
                                    >
                                  </template>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content style="">
                                  <v-divider
                                    :style="{
                                      backgroundColor: itemgroup.group_color,
                                    }"
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
                                            :color="itemgroup.group_color"
                                            >mdi-file-document-outline</v-icon
                                          >
                                        </v-col>
                                        <v-col cols="9">
                                          <p
                                            class="ml-2"
                                            style="
                                              font-size: 11px;
                                              font-weight: 500;
                                            "
                                          >
                                            {{
                                              item.contract_title
                                                | truncateEnd(29, "...")
                                            }}
                                          </p>
                                        </v-col>

                                        <v-col cols="1">
                                          <v-checkbox
                                            :color="itemgroup.group_color"
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
                            fontFamily: Raleway,
                            fontSize: 18,
                            fontWeight: 700,
                            color: itemgroup.group_color,
                          }"
                          text
                          @click="
                            add_contract_in_group_array_test(
                              itemgroup.group_id,
                              changegrouptitlename,
                              auto_contracts,
                              itemgroup.keep_original_contract
                            )
                          "
                        >
                          Anlegen
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-col>
                <v-col cols="2">
                  <v-menu
                    offset-y
                    bottom
                    z-index="0"
                    left
                    :close-on-content-click="false"
                    content-class="group_notification"
                    max-width="180"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-on="on"
                        v-bind="attrs"
                        class="mt-n1"
                        :color="itemgroup.group_color"
                        fab
                        x-small
                      >
                        <span class="white--text" style="font-size: 11.5px"
                          >36</span
                        >
                      </v-btn>
                      <!-- <v-avatar
                v-on="on"_group
                v-bind="attrs"
      :color=maincolor.theme
      size="26"
       style="margin-left:16px"
    >
      <span class="white--text" style="font-size:11px">36</span>
    </v-avatar> -->
                    </template>
                    <v-card elevation="0" width="180" height="335">
                      <p class="pt-3 pl-3">Aktivität</p>
                    </v-card>
                  </v-menu>
                  <!-- <v-icon
                  class="mt-1 ml-n2"
                  color="#474747"
                  @click="delete_group(item.group_title)"
                >
                  mdi-delete-outline
                </v-icon> -->
                </v-col>
                <!-- <v-col cols="1">
                <v-menu
                  :close-on-content-click="false"
                  offset-x
                  right
                  max-width="330"
                  content-class="uppercardmenu"
                  rounded="xl"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-on="on"
                      v-bind="attrs"
                      color="#474747"
                      class="mt-1 ml-n2 material-icons-outlined"
                      @click="all_contract_list(item.group_title)"
                    >
                      mdi-pencil-outline
                    </v-icon>
                  </template>

                  <v-card
                    elevation="0"
                    width="330"
                    min-height="120"
                    rounded="xl"
                    class=""
                    outlined
                  >
                    <p
                      class="pt-5 pl-5"
                      style="
                        font-family: Raleway;
                        font-size: 18px;
                        font-weight: 700;
                      "
                    >
                      Arbeitsbereich bearbeiten
                      <v-btn
                        icon
                        @click="
                          item.keep_original_contract = !item.keep_original_contract
                        "
                      >
                        <v-icon size="25" color="#474747" v-if="!item.keep_original_contract">
                          mdi-star-outline
                        </v-icon>
                        <v-icon size="25" color="#474747" v-if="item.keep_original_contract">
                          mdi-file-star-outline
                        </v-icon>
                      </v-btn>
                    </p>
                    <div style="width: 23em" class="pl-4 pr-2 mt-n2">
                      <v-text-field
                        :label="item.group_title"
                        v-model="changegrouptitlename"
                        outlined
                        rounded
                      >
                      </v-text-field>
                    </div>
                    <v-row justify="center">
                    <div class="" style="width:21em">
<v-card
                  elevation="0"
                  outlined
                  width="350"
                  style="border-color: #767577"
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
                                style="border-color: #767577;"
                                outlined
                                small
                                class="mt-1"
                              >
                                <v-icon size="12" class="mr-1"
                                color="#474747"
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
                        <v-icon @click.stop="onClick()" color="#474747" class="ml-n2 mr-2">mdi-magnify</v-icon>
                        <v-text-field
                        dense
                        @click.stop="onClick()"
                        v-model="searchallcontracts"
                        class="pt-4 pl-n1 some-style"
                        placeholder="Verträge"
                        >
                        </v-text-field>
                        <template v-slot:actions >
                          <v-icon  class="mr-1" color="#474747">mdi-menu-down</v-icon>
                        </template>
                      </v-expansion-panel-header >
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
                            v-for="(item) in all_contracts_search"
                            :key="item.contract_title"
                          >
                            <v-row class="mt-n6 mb-n6">
                              <v-col cols="1">
                                <v-icon size="21" class="mt-n3 ml-1"
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

                              <v-col cols="1">
                                <v-checkbox
                                  :color=maincolor.theme
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
                       style="text-transform: none;font-family:Raleway; font-size: 18px; font-weight: 700;color:#474747"
                        text

                        @click="
                          add_contract_in_group_array_test(
                            item.group_title,
                            changegrouptitlename,
                            auto_contracts,
                            item.keep_original_contract
                          )
                        "
                      >
                        Anlegen
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </v-col> -->
              </v-row>
            </v-card>
            <!-- mid card textfild -->
            <v-card
              elevation="0"
              height="289"
              width="290"
              class="expand pt-3"
              style="overflow-x: hidden"
              color="transparent"
            >
              <img

              v-if="itemgroup.group_preview!== ''"
                :src="itemgroup.group_preview"
                height="156"
                style="margin-left: 3%"
                class="mb-3"
                width="270"
              />
              <!-- @contextmenu:row="midcarditemshow($event,itemgroup.contract)" -->
              <v-data-table
                style="width: 18.8em !important; cursor: pointer"
                dense
                 v-model="selectmidcarditem"
                :headers="headerstest"
                :items="itemgroup.contract"
                class="elevation-0 ml-3 mt-n1"
                hide-default-footer
              >
                 <!-- <template v-slot:[`item.front_title`]="{ item }">
        <p
         @click="currentadmincontracts(item)"
         @contextmenu="midcarditemshow(item.id)"
                          style="cursor: pointer"
                          class="mt-3"
                          v-if="item.isedited === true"
                        >
                          {{ item.front_title | truncateEnd(15, "...") }}
                        </p>
                        <p
                         @contextmenu="midcarditemshow(item.id)"
                         @click="currentadmincontracts(item)"
                          style="cursor: pointer"
                          class="mt-3"
                          v-if="item.isedited === false"
                        >
                          {{ item.title | truncateEnd(17, "...") }}
                        </p>
      </template>
       <template v-slot:[`item.deadline`]="{ item }">
        <p class="mt-3" style="" v-if="item.deadline">
                          {{ item.deadline }}
                        </p>
                        <p class="mt-3" style="" v-if="!item.deadline">-</p>
      </template> -->
                <template v-slot:body="{ items }">
                  <tbody>
                       <!-- @contextmenu="midcarditemshow(item.id,$event)" -->
                    <tr

                      style="cursor: pointer"
                      @click="currentadmincontracts(item)"
                      v-for="(item, index) in items"
                      :key="index"
                    >

                      <td>
                        <p
                          style="cursor: pointer"
                          class="mt-3"
                          v-if="item.isedited === true"
                        >
                          {{ item.front_title | truncateEnd(15, "...") }}
                        </p>
                        <p
                          style="cursor: pointer"
                          class="mt-3"
                          v-if="item.isedited === false"
                        >
                          {{ item.title | truncateEnd(17, "...") }}
                        </p>
                      </td>
                      <td>
                         <!-- @contextmenu.prevent="on.click" @contextmenu="midcarditemshow(item.id,$event)" -->
                            <v-menu


        max-width="260"
      >
       <template v-slot:activator="{attrs,on }">
        <p class="mt-3" style="" @contextmenu.prevent="on.click" v-bind="attrs" v-if="item.deadline">
                          {{ item.deadline }}
                        </p>
                        <p class="mt-3" @contextmenu.prevent="on.click" v-bind="attrs" style="" v-if="!item.deadline">-</p>
       </template>
      <v-card
      elevation="0"
      width="260"
      height="60"
      rounded="lg"
      >
        <v-list class="mb-n6" dense>
          <v-list-item
            v-for="(item11, index) in midcarditems"
            :key="index"
          >
             <!-- v-if="item.title==='Frist' && item.icon==='mdi-calendar-edit'" -->
             <v-menu
              :close-on-content-click="true"
              offset-x
              bottom
              left
              content-class="frist-css"
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-list-item v-on="on" v-bind="attrs"  class="ml-n4 mr-n4">
                   <v-list-item-icon >
           <v-icon v-text="item11.icon"></v-icon>
             </v-list-item-icon>
                <v-list-item-subtitle class="ml-n2"  v-text="item11.title">
             </v-list-item-subtitle>
             </v-list-item>
              </template>
              <v-card elevation="0"
              width="290"
              min-height="120"
              >

              <v-date-picker v-model="item.deadline"  :color="itemgroup.group_color"   :show-current="false"  >
                <v-spacer></v-spacer>
          <v-btn
            text
           @click="clear_due_date(item)"
          >
           Clear Due Date
          </v-btn>
              </v-date-picker>
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

              <!-- <div>
              <div v-for="(item1, index) in item.contract" :key="index">
                <v-row>
                  <v-col cols="1" class="ml-2" style="cursor: pointer">
                    <v-icon
                      v-if="item1.isedited === true"
                      @click="
                        currentadmincontracts(
                          item1.title,
                          item.group_title,
                          item1.front_title
                        )
                      "
                      class="mt-n1"
                      color="#474747"
                    >
                      mdi-file-document-outline
                    </v-icon>
                    <v-icon
                      v-if="item1.isedited === false"
                      @click="
                        currentadmincontracts(
                          item1.title,
                          item.group_title,
                          item1.front_title
                        )
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
                        currentadmincontracts(
                          item1.title,
                          item.group_title,
                          item1.front_title
                        )
                      "
                      class="mt-1 ml-1"
                      v-if="item1.isedited === true"
                    >
                      {{ item1.front_title | truncateEnd(22, "...") }}
                    </h5>
                    <h5
                      @click="
                        currentadmincontracts(
                          item1.title,
                          item.group_title,
                          item1.front_title
                        )
                      "
                      class="mt-1 ml-1"
                      v-if="item1.isedited === false"
                    >
                      {{ item1.title | truncateEnd(22, "...") }}
                    </h5>
                  </v-col>

                  <v-col cols="1" class="">
                    <v-icon
                    color="#474747"
                      size="19"
                      @click="
                        delete_contract_from_group(
                          item1.front_title,
                          item.group_title
                        )
                      "
                      class="ml-n3"
                      >mdi-close</v-icon
                    >
                  </v-col>
                </v-row>
              </div>
            </div> -->
            </v-card>
            <!-- lower card -->
            <v-card
              style="position: absolute; bottom: 0em; left: 3.5%"
              height="40"
              width="290"
              color="transparent"
              outlined
              elevation="0"
            >
              <v-row class="mt-n2">
                <v-col cols="1">
                  <v-menu
                    rounded="xl"
                    offset-y
                    bottom
                    :close-on-content-click="false"
                    max-width="310"
                    content-class="lowercardminususermenu"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        @click="search_user_in_group_add(itemgroup.user)"
                        class="ml-n1"
                        v-on="on"
                        :color="itemgroup.group_color"
                        v-bind="attrs"
                        size="24"
                        >mdi-account-minus-outline</v-icon
                      >
                    </template>
                    <v-card
                      elevation="0"
                      width="310"
                      class="ma-0 pa-0"
                      rounded="xl"
                      style="overflow: hidden"
                      min-height="130"
                    >
                      <h4 class="pt-3 ml-6">Mitarbeiter/in entfernen</h4>
                      <v-row class="pt-3 mb-2" justify="center">
                        <!-- <v-card
                        elevation="0"
                        outlined
                        width="310"
                        style="border-color: #767577"
                        rounded="xl"
                        min-height="20"
                        class=""
                      >
                        <v-expansion-panels flat>
                          <v-expansion-panel
                            class=" "
                            style="background-color: transparent"
                          >
                            <v-expansion-panel-header>
                              <div
                                style="display: flex"
                                class="mb-n4 mt-n4"
                                v-if="auto_users.length === 0"
                              >
                                <v-icon size="23" class="mr-3 ml-n2 mt-n1"
                                color="#474747"
                                  >mdi-magnify</v-icon
                                >
                                <p
                                  style="
                                    font-size: 18px;
                                    color: #757575;
                                    opacity: 0.5;
                                  "
                                  class="pt-3"
                                >
                                  Mitarbeiter
                                </p>
                              </div>
                              <v-card
                                elevation="0"
                                color="transparent"
                                min-height="1"
                                width="310"
                                class="ml-n1 mb-3"
                              >
                                <v-row>
                                  <div
                                    v-for="(item, index) in auto_users"
                                    :key="index"
                                  >
                                    <v-chip
                                      style="border-color: #767577"
                                      outlined
                                      small
                                      class="mt-1 ml-1"
                                    >
                                      <v-icon size="12" class="mr-1"
                                      color="#474747"
                                        >mdi-account-outline</v-icon
                                      >
                                      {{ item | truncateEnd(18, "...") }}
                                    </v-chip>
                                  </div>
                                </v-row>
                              </v-card>
                              <template v-slot:actions>
                                <v-icon class="mr-1" color="#474747">mdi-menu-down</v-icon>
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
                                width="400"
                                style="overflow-x: hidden"
                              >
                                <div
                                  class="pt-4"
                                  v-for="(item, index) in item.user"
                                  :key="index"
                                >
                                  <v-row class="mt-n6 mb-n6">
                                    <v-col cols="1">
                                      <v-icon size="21" class="ml-1 mt-n1"
                                      color="#474747"
                                        >mdi-account-outline</v-icon
                                      >
                                    </v-col>
                                    <v-col cols="9">
                                      <p class="ml-2">
                                        {{ item.name | truncateEnd(18, "...") }}
                                      </p>
                                    </v-col>
                                    <v-col cols="1">
                                      <v-checkbox
                                        :color=maincolor.theme
                                        v-model="auto_users"
                                        :value="item.name"
                                        class="mt-n2 ml-n2"
                                      ></v-checkbox>
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-card>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-card> -->

                        <div style="width: 19.8em" class="ml-3">
                          <v-card
                            elevation="0"
                            outlined
                            width="340"
                            :style="{ borderColor: itemgroup.group_color }"
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
                                    :style="{
                                      borderColor: itemgroup.group_color,
                                    }"
                                    outlined
                                    small
                                    class="mt-1"
                                  >
                                    <v-icon
                                      size="12"
                                      class="mr-1"
                                      :color="itemgroup.group_color"
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
                                    :color="itemgroup.group_color"
                                    >mdi-magnify</v-icon
                                  >

                                  <v-text-field
                                    dense
                                    :color="itemgroup.group_color"
                                    v-model="searchgroupuserfordeletion"
                                    @click.stop="onClick()"
                                    class="pt-4 pl-n1 some-style"
                                    placeholder="Mitarbeiter"
                                  >
                                  </v-text-field>
                                  <template v-slot:actions>
                                    <v-icon
                                      class="mr-1"
                                      :color="itemgroup.group_color"
                                      >mdi-menu-down</v-icon
                                    >
                                  </template>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  <v-divider
                                    :style="{
                                      backgroundColor: itemgroup.group_color,
                                    }"
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
                                      v-for="itemd in searchgroupuserfordeletiondata_search"
                                      :key="itemd"
                                    >
                                      <v-row class="mt-n6 mb-n6">
                                        <v-col cols="1">
                                          <v-icon
                                            size="21"
                                            class="ml-1 mt-n1"
                                            :color="itemgroup.group_color"
                                            >mdi-account-outline</v-icon
                                          >
                                        </v-col>
                                        <v-col cols="8">
                                          <p class="ml-3">
                                            {{ itemd | truncateEnd(18, "...") }}
                                          </p>
                                        </v-col>
                                        <v-col cols="1">
                                          <v-checkbox
                                            :color="itemgroup.group_color"
                                            v-model="auto_users"
                                            :value="itemd"
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
                            textTransform: none,
                            fontFamily: Raleway,
                            fontSize: 18,
                            fontWeight: 700,
                            color: itemgroup.group_color,
                          }"
                          text
                          @click="
                            delete_user_from_group_array(
                              auto_users,
                              itemgroup.group_id
                            )
                          "
                        >
                          Anlegen
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-col>
                <v-col cols="1" class="ml-n2">
                  <v-menu
                    rounded="xl"
                    offset-y
                    bottom
                    content-class="lowercardplususermenu"
                    :close-on-content-click="false"
                    width="310"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        class="ml-1"
                        size="24"
                        :color="itemgroup.group_color"
                        v-on="on"
                        v-bind="attrs"
                        @click="
                        search_user_in_group_add(itemgroup.user);
                        all_user_created_by_specific_admin(itemgroup.group_id)
                        "
                      >
                        mdi-account-plus-outline
                      </v-icon>
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
                            :style="{ borderColor: itemgroup.group_color }"
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
                                    :style="{
                                      borderColor: itemgroup.group_color,
                                    }"
                                    outlined
                                    small
                                    class="mt-1"
                                  >
                                    <v-icon
                                      size="12"
                                      class="mr-1"
                                      :color="itemgroup.group_color"
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
                                    :color="itemgroup.group_color"
                                    >mdi-magnify</v-icon
                                  >

                                  <v-text-field
                                    dense
                                    :color="itemgroup.group_color"
                                    @click.stop="onClick()"
                                    v-model="searchcurrentadminusers"
                                    class="pt-4 pl-n1 some-style"
                                    placeholder="Mitarbeiter"
                                  >
                                  </v-text-field>
                                  <template v-slot:actions>
                                    <v-icon
                                      class="mr-1"
                                      :color="itemgroup.group_color"
                                      >mdi-menu-down</v-icon
                                    >
                                  </template>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  <v-divider
                                    :style="{
                                      backgroundColor: itemgroup.group_color,
                                    }"
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
                                      v-for="itemd in current_admin_users_search.filter(a => searchgroupuserfordeletiondata_search.indexOf(a.name) < 0)"
                                      :key="itemd.name"
                                    >
                                      <v-row  class="mt-n6 mb-n6">
                                        <v-col cols="1">
                                          <v-icon
                                            size="21"
                                            class="ml-1 mt-n1"
                                            :color="itemgroup.group_color"
                                            >mdi-account-outline</v-icon
                                          >
                                        </v-col>
                                        <v-col cols="8">
                                          <p class="ml-3">
                                            {{
                                              itemd.name
                                                | truncateEnd(18, "...")
                                            }}
                                          </p>
                                        </v-col>
                                        <v-col cols="1">
                                          <v-checkbox
                                            :color="itemgroup.group_color"
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
                        <!-- <v-card
                        elevation="0"
                        outlined
                        width="310"
                        style="border-color: #767577"
                        rounded="xl"
                        min-height="20"
                        class=""
                      >
                        <v-expansion-panels flat>
                          <v-expansion-panel
                            class=" "
                            style="background-color: transparent"
                          >
                            <v-expansion-panel-header>
                              <div
                                style="display: flex"
                                class="mb-n4 mt-n4"
                                v-if="auto_users.length === 0"
                              >
                                <v-icon size="23" class="mr-3 ml-n2 mt-n1"
                                color="#474747"
                                  >mdi-magnify</v-icon
                                >
                                <p
                                  style="
                                    font-size: 18px;
                                    color: #757575;
                                    opacity: 0.5;
                                  "
                                  class="pt-3"
                                >
                                  Mitarbeiter
                                </p>
                              </div>
                              <v-card
                                elevation="0"
                                color="transparent"
                                min-height="1"
                                width="310"
                                class="ml-n1 mb-3"
                              >
                                <v-row>
                                  <div
                                    v-for="(item, index) in auto_users"
                                    :key="index"
                                  >
                                    <v-chip
                                      style="border-color: #767577"
                                      outlined
                                      small
                                      class="mt-1 ml-1"
                                    >
                                      <v-icon size="12" class="mr-1"
                                      color="#474747"
                                        >mdi-account-outline</v-icon
                                      >
                                      {{ item | truncateEnd(18, "...") }}
                                    </v-chip>
                                  </div>
                                </v-row>
                              </v-card>
                              <template v-slot:actions>
                                <v-icon class="mr-1" color="#474747">mdi-menu-down</v-icon>
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
                                width="400"
                                style="overflow-x: hidden"
                              >
                                <div
                                  class="pt-4"
                                  v-for="(item, index) in current_admin_users"
                                  :key="index"
                                >
                                  <v-row class="mt-n6 mb-n6">
                                    <v-col cols="1">
                                      <v-icon size="21" class="ml-1 mt-n1"
                                      color="#474747"
                                        >mdi-account-outline</v-icon
                                      >
                                    </v-col>
                                    <v-col cols="9">
                                      <p class="ml-2">
                                        {{ item.name | truncateEnd(18, "...") }}
                                      </p>
                                    </v-col>
                                    <v-col cols="1">
                                      <v-checkbox
                                        :color=maincolor.theme
                                        v-model="auto_users"
                                        :value="item.name"
                                        class="mt-n2 ml-n2"
                                      ></v-checkbox>
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-card>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-card> -->
                      </v-row>
                      <v-card-actions class="mt-n3">
                        <v-spacer></v-spacer>
                        <v-btn
                          class=""
                          :style="{
                            textTransform: none,
                            fontFamily: Raleway,
                            fontSize: 18,
                            fontWeight: 700,
                            color: itemgroup.group_color,
                          }"
                          text
                          @click="add_user_in_group_array(auto_users)"
                        >
                          Anlegen
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-col>
                <v-col cols="7" class="ml-2">
                  <div
                    style="
                      display: flex;
                      overflow-y: hidden;
                      text-align: right;
                      margin-top: 1px;
                    "
                    class="expand1"
                  >
                    <div
                      v-for="(itemff, indexi) in itemgroup.user"
                      :key="indexi"
                    >
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-on="on"
                            v-bind="attrs"
                            :color="itemgroup.group_color"
                            >mdi-account-outline</v-icon
                          >
                        </template>
                        <span>{{ itemff }}</span>
                      </v-tooltip>
                    </div>
                  </div>
                </v-col>
                <v-col cols="1">
                  <v-menu
                    offset-y
                    bottom
                    z-index="0"
                    right
                    :close-on-content-click="false"
                    content-class="group_settings_css"
                    max-width="150"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        class="ml-2"
                        v-on="on"
                        :color="itemgroup.group_color"
                        v-bind="attrs"
                      >
                        mdi-cog-outline
                      </v-icon>
                    </template>
                    <v-card elevation="0" width="150" height="138">
                      <v-list dense>
                        <v-list-item
                          @click="groupsetting(itemgroup, itemgg)"
                          v-for="(itemgg, index) in group_settings"
                          :key="index"
                        >
                          <v-list-item-icon
                            v-if="
                              itemgg.icon === 'mdi-delete-outline' ||
                              itemgg.icon === 'mdi-file-multiple-outline'
                            "
                          >
                            <v-icon v-text="itemgg.icon"></v-icon>
                          </v-list-item-icon>
                          <v-list-item-subtitle
                            class="ml-n4 mt-1"
                            v-if="
                              itemgg.title === 'Löschen' ||
                              itemgg.title === 'Kopie erstellen'
                            "
                            v-text="itemgg.title"
                          >
                          </v-list-item-subtitle>
                          <v-menu
                            v-if="
                              itemgg.title === 'Farbe' &&
                              itemgg.icon === 'mdi-circle'
                            "
                            :close-on-content-click="false"
                            offset-y
                            bottom
                            content-class="my-color-list"
                            left
                            width="230"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-list-item
                                class="ml-n4 mr-n4"
                                v-on="on"
                                v-bind="attrs"
                              >
                                <v-list-item-icon
                                  class=""
                                  v-on="on"
                                  v-bind="attrs"
                                >
                                  <v-icon
                                    :color="itemgroup.group_color"
                                    v-text="itemgg.icon"
                                  ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-subtitle
                                  v-text="itemgg.title"
                                  class="ml-n3"
                                ></v-list-item-subtitle>
                              </v-list-item>
                            </template>
                            <v-card elevation="0" width="230" height="113">
                              <v-row class="pl-5 pt-5">
                                <v-btn
                                  icon
                                  class="ml-1 mt-1 mr-1"
                                  @click="changecolor(itemgroup, itemcolor)"
                                  v-for="(
                                    itemcolor, index
                                  ) in list_of_color_item"
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
                </v-col>
              </v-row>
            </v-card>
          </v-card>
        </div>
        <!-- plus btn sid v-card -->
        <div
          v-if="current_admin_groups_search.length !== 0"
          style="margin-top: 11.9%; margin-left: 1em; height: 3vh"
        >

          <v-menu

            v-model="menu2"
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
                  font-family: Raleway;
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
                      class="pt-4 pl-4 pb-3 pr-4 ml-n3"
                    >

                    <!--  -->
                      <v-row >
                        <div
                          v-for="(item, indexaa) in auto_contracts"
                          :key="indexaa"
                          class="ml-3"
                        >
                          <v-chip
                            style="border-color: #767577; margin-left: 10%"
                            outlined
                            small
                            class="mt-1"
                          >
                            <v-icon size="11" class="mr-1" color="#474747"
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
                                      item.contract_title
                                        | truncateEnd(29, "...")
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
                    font-family: Raleway;
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
    </div>
    <v-main v-if="group_component" style="width: 99%" class="ma-0 pa-0 mb-6">
      <groupdetailscomponent :updatedgroup="parsedata" class="ml-n1 mr-3">
      </groupdetailscomponent>
    </v-main>
    <!-- <div style="display:flex;background-color:yellow;width:98%;height:330px;overflow-x:auto !imporatnt;overflow-y:hidden;" v-if="Arbeitsbereichemenudown">
              <div v-for="(item, index) in current_admin_groups"
                :key="index"
                class=""
              >
                <v-card
                  width="250"
                  height="300"
                  outlined
                  elevation="0"
                  rounded="lg"
                  class=" mr-3"
                >
                          <v-col cols="1" class="ml-n4" >
                            <v-menu
                  :close-on-content-click="false"
                  offset-x
                  top
                  rounded="xl"
                  width="270"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon class="ml-n1" size="19" v-on="on" v-bind="attrs" >
                      mdi-pencil-outline
                    </v-icon>
                  </template>
                  <v-card elevation="0"
                  width="270"
                  rounded="xl"
                  height="140"
                  class="ma-0 pa-0"
                  >
                  </v-card>
                            </v-menu>
                              </v-col>
                </v-card>
              </div>
            </div> -->
    <!-- <v-banner class="mt-10 " height="2" width="1200" dark color="grey"></v-banner> -->
    <!-- <v-divider class="mt-10 mr-6" color="grey" ></v-divider> -->
    <v-row class="mb-n6">
      <v-col cols="10" style="display: flex">
        <!-- @click="adduser()"  -->
        <p
          @click="adduser()"
          style="font-family: Raleway; font-size: 18px; font-weight: 690"
        >
          Vertragsübersicht
        </p>
        <div
          @click="Vertragsübersichtmenudown = !Vertragsübersichtmenudown"
          class="ml-2 mt-n1"
        >
          <v-btn icon v-if="Vertragsübersichtmenudown">
            <v-icon color="#474747" size="28" class=""> mdi-menu-down </v-icon>
          </v-btn>
          <v-btn icon v-if="!Vertragsübersichtmenudown">
            <v-icon color="#474747" size="28" class=""> mdi-menu-right </v-icon>
          </v-btn>
        </div>
        <div style="text-align: right" class="mt-n1">
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
            class=""
          >
            <v-icon size="28" color="#474747">mdi-apps </v-icon>
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
            class=""
          >
            <v-icon size="28" color="#474747"> mdi-view-list </v-icon>
          </v-btn>
          <!-- <v-btn v-if="!griddash" icon @click="griddashboard()" class="">
            <v-icon size="28"> mdi-apps </v-icon>
          </v-btn> -->
          <v-btn icon @click="newcontractcreate()" class="">
            <v-icon size="28" color="#474747"> mdi-plus </v-icon>
          </v-btn>
          <!-- <v-btn icon @click="tiptaptesting()" class="">
            <v-icon size="28" color="#474747"> mdi-cash-check </v-icon>
          </v-btn> -->
        </div>
        <!-- v-if="magnifyicon" -->

        <!-- v-if="magnifyicongeneralsearch" -->
        <!-- search3 -->
        <div
          v-if="magnifyiconsearchdatatable"
          style="width: 20em"
          class="mt-n4 ml-2"
        >
          <v-text-field
            v-model="searchdatatable"
            prepend-inner-icon="mdi-magnify"
            label="Filtern"
            dense
            :color="maincolor.theme"
            @keyup.enter="enterdatatable(searchdatatable)"
            :rounded="true"
            outlined
          ></v-text-field>
        </div>
        <!-- v-if="magnifyiconsearchdatatable" -->
        <v-card elevation="0" width="300" height="1" style="display: flex">
          <div v-for="(item, index) in chipdatatableadmin" :key="index">
            <v-chip
              v-if="item"
              style="border-color: maincolor.theme"
              outlined
              small
              close
              :color="maincolor.theme"
              @click:close="closedatatable(item)"
              class="ml-3"
            >
              {{ item | truncateEnd(16, "...") }}
            </v-chip>
          </div>
        </v-card>
      </v-col>
    </v-row>
    
    <div v-if="listdash && Vertragsübersichtmenudown">
      <v-data-table
        v-if="groupcopycontracts.length !== 0"
        :headers="headers"
        :items="groupcopycontracts"
        class="elevation-0"
        :hide-default-footer="computedcheckfooter"
        :footer-props="{
          'items-per-page-text': 'Zeilen pro Seite',
        }"
      >
        <template v-slot:[`item.front_title`]="{ item }">
          <p
            style="cursor: pointer"
            class="mt-4"
            v-if="item.isedited === true"
            @click="currentadmincontracts(item)"
          >
            <v-icon class="mt-n1" color="#474747"
              >mdi-file-document-outline
            </v-icon>
            {{ item.front_title }}
          </p>
          <p
            class="mt-4"
            style="cursor: pointer"
            v-if="item.isedited === false"
            @click="currentadmincontracts(item)"
          >
            <v-icon class="mt-n1" color="#474747">
              mdi-file-star-outline
            </v-icon>
            {{ item.title }}
          </p>
        </template>

        <template v-slot:[`item.time`]="{ item }">
          <p
            class="mt-4"
            @click="currentadmincontracts(item)"
            style="cursor: pointer"
          >
            {{ item.date }} | {{ item.time }}
          </p>
        </template>

        <template v-slot:[`item.percentage`]="{ item }">
          <div
            style="display: flex; cursor: pointer"
            class="mt-3"
            @click="currentadmincontracts(item)"
          >
            <p>{{ item.status }}</p>
            <v-card
              elevation="0"
              width="2"
              height="20"
              color="grey"
              class="ml-2"
            >
            </v-card>
            <p class="ml-2">{{ item.percentage }} %</p>
          </div>
        </template>

        <template v-slot:[`item.group_title`]="{ item }">
          <p
            class="mt-3"
            @click="currentadmincontracts(item)"
            style="cursor: pointer"
          >
            {{ item.group_title | truncateEnd(22, "...") }}
          </p>
        </template>

        <template v-slot:[`item.icon`]="{ item }">
          <v-btn class="" icon>
            <v-icon
              color="#474747"
              @click="delete_contract_from_group(item.id, item.group_id)"
              >mdi-delete-outline</v-icon
            ></v-btn
          >
        </template>
      </v-data-table>
      <v-divider
        class="mb-3"
        v-if="
          contractsLength > 0 &&
          contractsLength < 9 &&
          chipdatatableadmin.length === 0 &&
          chipdatageneralsearchadmin.length === 0
        "
      ></v-divider>
      <v-row
        class="ml-2"
        v-if="
          contractsLength === 0 &&
          !searchdatatable &&
          chipdatatableadmin.length === 0 &&
          chipdatatableadmin.length === 0 &&
          chipdatageneralsearchadmin.length === 0
        "
      >
        <v-col cols="5">
          <p class="subtitle-1 font-weight-bold" style="color: #5c5c5c">
            Name | Kunde
          </p>
        </v-col>
        <v-col cols="2">
          <p class="ml-n2 subtitle-1 font-weight-bold" style="color: #5c5c5c">
            Datum | Zeit
          </p>
        </v-col>
        <v-col cols="2">
          <p class="ml-n4 subtitle-1 font-weight-bold" style="color: #5c5c5c">
            Status | Fortschritt
          </p>
        </v-col>
        <v-col cols="3">
          <p class="ml-5 subtitle-1 font-weight-bold" style="color: #5c5c5c">
            Arbeitsbereich
          </p>
        </v-col>
      </v-row>
      <v-divider
        class="mb-3"
        v-if="
          contractsLength === 0 &&
          !searchdatatable &&
          chipdatatableadmin.length === 0 &&
          chipdatatableadmin.length === 0 &&
          chipdatageneralsearchadmin.length === 0
        "
      ></v-divider>
      <div
        v-if="
          contractsLength < 9 &&
          !searchdatatable &&
          chipdatatableadmin.length === 0 &&
          chipdatatableadmin.length === 0 &&
          chipdatageneralsearchadmin.length === 0
        "
      >
        <div
          v-for="(item, indexd) in all_contracts"
          :key="indexd"
          class="div_hover"
        >
          <v-row class="ml-1" style="cursor: pointer">
            <v-col cols="3" class="mt-2">
              <v-menu
                :close-on-content-click="false"
                offset--x
                bottom
                content-class="my-menu3"
                max-width="350"
              >
                <template v-slot:activator="{ on }">
                  <p v-on="on" v-if="!current_admin_groups.length" style="">
                    <v-icon class="mt-n1" color="#474747"
                      >mdi-file-star-outline
                    </v-icon>
                    {{ item.contract_title }}
                  </p>
                  <p v-else style="">
                    <v-icon class="mt-n1" color="#474747"
                      >mdi-file-star-outline
                    </v-icon>
                    {{ item.contract_title }}
                  </p>
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
                      font-family: Raleway;
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
                      <v-icon size="26" class="pl-5 mr-2 mt-3" color="#474747"
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
                              v-for="(item, indexw) in auto_contracts"
                              :key="indexw"
                              class="ml-3"
                            >
                              <v-chip
                                style="border-color: #767577"
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
                                class="expand ml-n1"
                                height="190"
                                width="320"
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
                                        class="mt-n3"
                                        color="#474747"
                                        >mdi-file-document-outline</v-icon
                                      >
                                    </v-col>
                                    <v-col cols="9">
                                      <p
                                        class="ml-2"
                                        style="
                                          font-size: 11px;
                                          font-weight: 500;
                                        "
                                      >
                                        {{
                                          item.contract_title
                                            | truncateEnd(29, "...")
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
                              v-for="(item, indexu) in auto_users"
                              :key="indexu"
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
                                        :value="item"
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
                        font-family: Raleway;
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
            </v-col>
            <v-col cols="2">
              <!-- <p class="ml-n2">-----</p> -->
            </v-col>
            <v-col cols="2">
              <!-- <p class="ml-n4">-----</p> -->
            </v-col>
            <v-col cols="2">
              <!-- <p class="ml-6">-----</p> -->
            </v-col>
            <v-col cols="1">
              <!-- <p class="ml-2">-----</p> -->
            </v-col>
          </v-row>
          <v-divider class="mb-3"></v-divider>
        </div>
      </div>
    </div>
    <div v-if="griddash && Vertragsübersichtmenudown">
      <div class="row mt-n8 mb-8">
        <v-card
          v-for="item in groupcopycontracts"
          :key="item.title"
          light
          class="ml-4 mt-8"
          @click="currentadmincontracts(item)"
          elevation="6"
          height="180"
          width="180"
          style="border-radius: 16px 16px 16px 16px"
        >
          <v-row class="pl-2 pt-3">
            <v-col cols="1" class="" style="cursor: pointer">
              <v-icon
                v-if="item.isedited === true"
                @click="currentadmincontracts(item)"
                class=""
                color="#474747"
              >
                mdi-file-document-outline
              </v-icon>
              <v-icon
                v-if="item.isedited === false"
                @click="currentadmincontracts(item)"
                class=""
                color="#474747"
              >
                mdi-file-star-outline
              </v-icon>
            </v-col>
            <v-col cols="8">
              <p
                @click="currentadmincontracts(item)"
                v-if="item.isedited === true"
                class="pt-1 pl-1"
                style="font-size: 12px; font-weight: 500; cursor: pointer"
              >
                {{ item.front_title | truncateEnd(10, "...") }}
              </p>
              <p
                @click="currentadmincontracts(item)"
                v-if="item.isedited === false"
                class="pt-1 pl-1"
                style="font-size: 12px; font-weight: 500; cursor: pointer"
              >
                {{ item.title | truncateEnd(6, "...") }}
              </p>
            </v-col>
            <v-col cols="1">
              <v-icon
                size="18"
                class="ml-n2"
                color="#474747"
                @click="delete_contract_from_group(item.id, item.group_id)"
                >mdi-delete-outline</v-icon
              >
            </v-col>
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
              <p class="ml-3" style="word-break: break-word">
                {{ item.group_title | truncateEnd(40, "...") }}
              </p>
            </v-row>
          </v-card>

          <p class="ml-3 mt-n3">{{ item.date }} | {{ item.time }}</p>
          <v-card
            elevation="0"
            width="180"
            height="30"
            color="#EEEEEE"
            style="position: absolute; bottom: 0; left: 0; cursor: pointer"
          >
            <div style="display: flex" class="pt-1 ml-2">
              <p
                style="font-size: 12px; font-weight: 500; margin-top: 0.15em"
                class=""
              >
                {{ item.status }}
              </p>
              <v-spacer></v-spacer>
              <p
                style="font-size: 14px; color: grey; font-weight: 500"
                class="mr-2"
              >
                | {{ item.percentage }} %
              </p>
            </div>
          </v-card>
        </v-card>
        <div
          v-for="(item, index1) in all_contracts"
          :key="index1"
          class="ml-4 mt-14"
        >
          <v-card
            v-if="
              chipdatatableadmin.length === 0 &&
              contractsLength < 9 &&
              chipdatatableadmin.length === 0 &&
              chipdatageneralsearchadmin.length === 0
            "
            light
            elevation="6"
            height="180"
            width="180"
            style="border-radius: 16px 16px 16px 16px"
          >
            <p class="mt-n6 ml-9" style="color: white; font-size: 12px">
              Arbeitsvertrag
            </p>
            <div style="cursor: pointer">
              <v-row class="pl-2 pt-1">
                <v-col cols="1">
                  <v-icon size="" color="#474747">mdi-file-star-outline</v-icon>
                </v-col>
                <v-col cols="9">
                  <p
                    style="font-size: 12px; font-weight: 500"
                    class="mt-1 ml-1"
                  >
                    {{ item.contract_title | truncateEnd(16, "...") }}
                  </p>
                </v-col>
              </v-row>
              <!-- <h4 style="text-align:center" class="mt-5">Original</h4> -->
            </div>
            <v-card
              elevation="0"
              width="180"
              height="30"
              color="#EEEEEE"
              style="position: absolute; bottom: 0; left: 0; cursor: pointer"
            >
              <v-row justify="center" class="mt-1">
                <!-- <p>Original</p> -->
              </v-row>
            </v-card>
          </v-card>
        </div>
      </div>
    </div>
  </v-main>
</template>





<script>
import $ from "jquery";
const electron = require("electron");
const path = require("path");
//const electron = require("electron");
// import {StaleWhileRevalidate} from 'workbox-strategies';
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
var fs = require("fs");
import store from "../store";
// const path = require("path");
const { dialog } = require("electron").remote;
import { mapState } from "vuex";
import { remote } from "electron";
import Groupdetailscomponent from "./groupdetailscomponent.vue";
export default {
  components: {
    Groupdetailscomponent,

  },
  name: "dashboardadusercomponent",
  //data
  data: () => ({

    absolute: true,
    opacity : 1,
    overlay: false,
    rename:false,
    newItem:"",
     rightClickMenu: false,
    x: 0,
    y: 0,

      showMenu: false,
    selectmidcarditem:[],
    midcarditems:[
       {title:"Frist",icon:"mdi-calendar-edit"},
    ],
    imagecontracttitle:"",
    parsedata: [],
    groupcopycontracts: [],
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
    group_settings: [
      { icon: "mdi-delete-outline", title: "Löschen" },
      { icon: "mdi-file-multiple-outline", title: "Kopie erstellen" },
      { icon: "mdi-circle", title: "Farbe" },
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
    headerstest: [
      {
        text: "Name",
        value: "front_title",
        class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "Frist",
        value: "deadline",
        class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
    ],
    headers: [
      {
        text: "Name | Kunde",
        value: "front_title",
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
        text: "Arbeitsbereich",
        value: "group_title",
        class: "#5C5C5C--text subtitle-1 font-weight-bold",
      },
      {
        text: "",
        value: "icon",
      },
    ],
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
    add_users:[],
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
    Vertragsübersichtmenudown: false,
    current_admin_recent_contracts: [],
    current_user_recent_contracts: [],
    contractmenu: false,
    copycontract: [],
    changegrouptitlename: "",
    is_superuser: false,
    magnifyicon: false,
    magnifyiconsearchrecentcontracts: false,
    magnifyiconsearchgroups: false,
    changegrouptitlefromrightclick:false,
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
  //COMPUTED
  computed: {
    setgroupdetailscomponent: function () {
      return this.group_component, new Date();
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
    // computedCurrent_admin_groups_contract_v1_for_groups() {
    //   return store.state.group, new Date();
    //   // let contractsGridsearch = [];
    //   // let contractsGrid = [];
    //   // let i, j;
    //   // let len;
    //   // for (i = 0, len = this.current_admin_groups.length; i < len; i++) {
    //   //   let j;
    //   //   let lenJ;
    //   //   for (
    //   //     j = 0, lenJ = this.current_admin_groups[i].contract.length;
    //   //     j < lenJ;
    //   //     j++
    //   //   ) {
    //   //     var cont = this.current_admin_groups[i].contract[j];
    //   //     cont.keep_original_contract =
    //   //       this.current_admin_groups[i].keep_original_contract;
    //   //     contractsGrid.push(cont);
    //   //   }
    //   // }
    //   // if (this.chipdatatableadmin.length > 0) {
    //   //   for (i = 0; i < this.chipdatatableadmin.length; i++) {
    //   //     for (j = 0; j < contractsGrid.length; j++) {
    //   //       if (
    //   //         contractsGrid[j].front_title.includes(this.chipdatatableadmin[i])
    //   //       ) {
    //   //         let obj = contractsGridsearch.find(
    //   //           (o) => o.front_title === contractsGrid[j].front_title
    //   //         );
    //   //         if (obj === undefined) {
    //   //           contractsGridsearch.push(contractsGrid[j]);
    //   //         }
    //   //       }
    //   //     }
    //   //   }
    //   //   return contractsGridsearch;
    //   // } else if (this.chipdatageneralsearchadmin.length > 0) {
    //   //   for (i = 0; i < this.chipdatageneralsearchadmin.length; i++) {
    //   //     for (j = 0; j < contractsGrid.length; j++) {
    //   //       if (
    //   //         contractsGrid[j].front_title.includes(
    //   //           this.chipdatageneralsearchadmin[i]
    //   //         )
    //   //       ) {
    //   //         let obj = contractsGridsearch.find(
    //   //           (o) => o.front_title === contractsGrid[j].front_title
    //   //         );
    //   //         if (obj === undefined) {
    //   //           contractsGridsearch.push(contractsGrid[j]);
    //   //         }
    //   //       }
    //   //     }
    //   //   }
    //   //   return contractsGridsearch;
    //   // } else {
    //   //   return contractsGrid;
    //   // }
    // },
    // computedCurrent_admin_groups_contract() {
    //   let contractsGridsearch = [];
    //   let contractsGrid = [];
    //   let len,i,j;
    //   for (i = 0, len = this.current_admin_groups.length; i < len; i++) {
    //     let j;
    //     let lenJ;
    //     for (
    //       j = 0, lenJ = this.current_admin_groups[i].contract.length;
    //       j < lenJ;
    //       j++
    //     ) {
    //       var cont = this.current_admin_groups[i].contract[j];
    //       cont.keep_original_contract =
    //         this.current_admin_groups[i].keep_original_contract;
    //       contractsGrid.push(cont);
    //     }
    //   }
    //   if (this.chipdatatableadmin.length > 0) {
    //     for (i = 0; i < this.chipdatatableadmin.length; i++) {
    //       for (j = 0; j < contractsGrid.length; j++) {
    //         if (
    //           contractsGrid[j].front_title.includes(this.chipdatatableadmin[i])
    //         ) {
    //           let obj = contractsGridsearch.find(
    //             (o) => o.front_title === contractsGrid[j].front_title
    //           );
    //           if (obj === undefined) {
    //             contractsGridsearch.push(contractsGrid[j]);
    //           }
    //         }
    //       }
    //     }
    //     return contractsGridsearch;
    //   } else if (this.chipdatageneralsearchadmin.length > 0) {
    //     for (i = 0; i < this.chipdatageneralsearchadmin.length; i++) {
    //       for (j = 0; j < contractsGrid.length; j++) {
    //         if (
    //           contractsGrid[j].front_title.includes(
    //             this.chipdatageneralsearchadmin[i]
    //           )
    //         ) {
    //           let obj = contractsGridsearch.find(
    //             (o) => o.front_title === contractsGrid[j].front_title
    //           );
    //           if (obj === undefined) {
    //             contractsGridsearch.push(contractsGrid[j]);
    //           }
    //         }
    //       }
    //     }
    //     return contractsGridsearch;
    //   } else {
    //     return contractsGrid;
    //   }
    // },
  },
  //mounted
  mounted() {
    this.mounted_hook_function();
    this.watchfunctionforgroups();
    (console.log)("kkk")
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
  watch: {

    // computedCurrent_admin_groups_contract_v1_for_groups: {
    //   handler: function () {

    //   },
    //   deep: true
    // },
    setgroupdetailscomponent: function () {
      if (this.group_component === false) {
        this.mounted_hook_function();
        this.watchfunctionforgroups();
      }
    },
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
            all_user_search.push(this.current_admin_users[j].name);
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
  //methods
  methods: {

    show (e) {
      this.rightClickMenu = false
      e.preventDefault()
      this.rightClickMenu = false
      this.x = e.clientX
      this.y = e.clientY
      this.$nextTick(() => {
        this.rightClickMenu = true
      })
    },
      midcarditemshow(e) {
      e.preventDefault();
       this.showMenu = true;
      this.x = e.clientX;
      this.y = e.clientY;
      // this.$nextTick(() => {
      //   this.showMenu = y;
      // });
    },
    //      handelscroolfuncmid(){
    //     var  mouseWheel = document.querySelector('.expand')
    //     mouseWheel.addEventListener('wheel', function(e) {
    //     const race = 15; // How many pixels to scroll
    //     if (e.deltaY > 0) // Scroll right
    //         mouseWheel.scrollTop += race;
    //     else // Scroll left
    //         mouseWheel.scrollTop -= race;
    // 		e.preventDefault();
    // })
    //     },
    //     handelscroolfunc(){
    //     var  mouseWheel = document.querySelector('.expand2')
    //     mouseWheel.addEventListener('wheel', function(e) {
    //     const race = 15; // How many pixels to scroll
    //     if (e.deltaY > 0) // Scroll right
    //         mouseWheel.scrollLeft += race;
    //     else // Scroll left
    //         mouseWheel.scrollLeft -= race;
    // 		e.preventDefault();
    // })
    //     },
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
    mytest1() {
      var contracts = ["AGB Ebay", "AGB Shopify"];
      var user = [];
      this.group_title = "NEW GROUP";
      this.submit1(contracts, user);
    },
    submit1(contracts_field, users_field) {
      this.menu1 = false;
      this.menu2 = false;
      this.originalmenu = false;
      this.group_title = this.group_title.replace(/[^a-zA-Z0-9]/g, '');
      if (this.group_title === null || this.group_title.length === 0) {
        dialog.showMessageBox(remote.getCurrentWindow(), {
          type: "error",
          title: "Fehler",
          message: "Fehlende Beschreibung",
          detail: "Bitte fügen Sie eine Beschreibung hinzu",
        });
        return;
      }
      this.$store.commit("groupsavefunc", {
        title: this.group_title,
        user: [],
        contract: [],
        admin_name: this.current_admin_name,
        keep_original_contract: this.iconcheck, //true/false,
      });
      var id = this.$store.getters.findlatestgroup();
      //writegroupinfilesystem
      this.writeinfilesystem('group',this.group_title,id,null)
      var total_contracts = [];
      var len = contracts_field.length;
      for (var i = 0; i < len; i++) {
        this.copy_creation_of_contract_new(
          contracts_field[i],
          id,
          this.group_title
        );
        var contract = this.$store.getters.findlatestcopycontract();

        this.writeinfilesystem('contract',this.group_title,id,contract)
        total_contracts.push(contract.id);
      }
      this.$store.commit("addcontractgroupfunctionforall", [
        id,
        total_contracts,
      ]);
      len = users_field.length;
      for (i = 0; i < len; i++) {
        var user = this.$store.getters.finduser(users_field[i]);
        this.$store.commit("addusergroupfunc", [id, user.id]);
        this.$store.commit("addcontractsinusergroupfunc", [
          total_contracts,
          user.id,
          id
        ]);
      }
      this.group_title = "";
      this.auto_contracts = [];
      this.auto_users = [];
      this.iconcheck = false;
      this.watchfunctionforgroups();
      // this.$router.push({ path: "/contracts" }).catch(() => {});
    },
    writeinfilesystem(type,value1,value2,value3){
      //value3 will be used only in contract and its a contract object
      const configDir =  (electron.app || electron.remote.app).getPath('userData')
      var filepath_dir = path.join(configDir,this.$version_data)
      if (!fs.existsSync(filepath_dir)){
        fs.mkdirSync(filepath_dir);
      }
      var group_title,group_id,folder,filepath,filename,filepath_contract,contract_id,contract_title,contract_front_title
      if(type === 'group'){
        group_title = value1
        group_id = value2
        folder = group_title + '_' + group_id
        filepath = path.join(filepath_dir,folder)
        if (!fs.existsSync(filepath)){
          fs.mkdirSync(filepath);
        }
      }
      if(type === 'contract'){
        group_title = value1
        group_id = value2
        contract_id = value3.id
        contract_title = value3.title
        contract_front_title = value3.front_title
        folder = group_title + '_' + group_id
        filepath = path.join(filepath_dir,folder)
        if (!fs.existsSync(filepath)){
          fs.mkdirSync(filepath);
        }
        else{
          var data = store.getters.getcontractsdatafromstore(contract_title);
          data = JSON.stringify(data);
          const encrypteddata = cryptr.encrypt(data);
          filename  = contract_front_title + '_' + contract_id + '_' + group_id + ".json";
          filepath_contract  = path.join(filepath,filename)
          fs.writeFileSync(filepath_contract, encrypteddata); //needs to be changed for a minute
        }
      }
      if(type=== 'changegrouptitle'){
        //value1-> old_group_title,value2 ->group_id,value3->new_group_title
        var filepath_latest;
        group_title = value1
        group_id = value2
        folder = group_title + '_' + group_id
        filepath = path.join(filepath_dir,folder)
        group_title = value3
        group_id = value2
        folder = group_title + '_' + group_id
        filepath_latest = path.join(filepath_dir,folder)
        fs.renameSync(filepath, filepath_latest)
      }
    },
    submit1old(x, y) {
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
      return b;
    },
    copy_creation_of_contract_new(contract_title, group_id, group_title) {
      let obj = this.current_admin_versions.find(
        (o) => o.title === contract_title
      );
      let front_title = contract_title + "_Vertrag_" + obj.version;
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
      return;
    },
    add_user_in_group_array(x) {
      console.log(x)
      console.log(this.current_admin_users_search)
//    for (let j = 0; j <this.current_admin_users_search.length; j++) {
//      if(this.current_admin_users_search[j].name===x[0])
// {
// this.current_admin_users_search.splice(j,1);
// }
//    }
   for (var i = 0; i < x.length; i++) {
        this.add_user_in_group(x[i]);
}
    },
    add_user_in_group(x) {
      var group_id = this.groupName;
      var group = store.getters.checkByGroupId(group_id);
      var user = store.getters.finduser(x);
      var obj = group.user.find((o) => o === user.id);
      if (obj === undefined) {
        this.$store.commit("addusergroupfunc", [group_id, user.id]);
        this.$store.commit("addcontractsinusergroupfunc", [
          group.contract,
          user.id,
          group.group_id
        ]);
      }
      this.auto_users = [];
      this.watchfunctionforgroups();
      // var groups_by_specific_admin = store.getters.checkGroupByAdminName(
      //   this.current_admin_name
      // );
      // store.commit("setcurrentadmingroups", groups_by_specific_admin);
      // this.current_admin_groups = store.state.current_admin_groups;
      // this.current_admin_groups_search = this.current_admin_groups;
      // store.dispatch("updatewritejson");
      // this.$router.push({ path: "/contracts" }).catch(() => {});
      // return;
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
      this.copy_creation_of_contract_new(x, group.group_id, group.group_title);
      var contract = this.$store.getters.findlatestcopycontract();
      this.$store.commit("addcontractgroupfunctionforall", [
        group.group_id,
        contract.id,
      ]);
      this.writeinfilesystem('contract',group.group_title,group.group_id,contract)
      var len = group.user.length;
      for (var i = 0; i < len; i++) {
        this.$store.commit("addcontractsinusergroupfunc", [
          contract.id,
          group.user[i],
          group.group_id
        ]);
      }
      this.watchfunctionforgroups();
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
      this.groupName = group.group_id;



      this.add_contract_in_group_array(contracts);
      if (new_group_title.length !== 0) {
        new_group_title = new_group_title.replace(/[^a-zA-Z0-9]/g, '');
        this.writeinfilesystem('changegrouptitle',group.group_title,group.group_id,new_group_title)
        this.change_group_title(group, new_group_title);
      }
      this.changegrouptitlename = "";
      this.$router.push({ path: "/contracts" }).catch(() => {});
    },
    change_group_title(group, new_group_title) {
      // var len = group.contract.length
      // for( var i=0 ; i< len ; i++){
      //   var contract = this.$store.getters.findcopycontract(group.contract[i].id)
      //   store.commit("changegrouptitle_contract", [contract.id,new_group_title]);
      // }

      console.log("HERE FROM THE CHANGE_GROUP");
      store.commit("changegrouptitle", [group.group_id, new_group_title]);
      console.log(this.changegrouptitle);
      this.watchfunctionforgroups();
      // store.commit("changegrouptitle_user", [old_group_title, new_group_title]);
      // store.commit("changegrouptitle_recentcontracts", [
      //   old_group_title,
      //   new_group_title,
      // ]);
      //this.recent_contracts_change_group_name(old_group_title, new_group_title);
    },
    // working

    mounted_hook_function() {
      this.isAdmin = store.state.isAdmin;
      this.is_superuser = store.state.is_superuser;
      this.all_users = store.state.user;
      this.all_contracts = store.state.contract;
      this.all_contracts_search = store.state.contract;
      this.current_admin_users_search = store.state.current_admin_users;
      store.commit("set_group_component", false);
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
          store.getters.getchipdatarecentcontractsadmin(
            this.current_admin_name
          );
        this.chipdatageneralsearchadmin =
          store.getters.getchipdatageneralsearchadmin(this.current_admin_name);
        //  this.list = store.state.list;
        //   this.grid = store.state.grid;
        this.copycontract = store.state.copycontract;
        this.read_data_for_admin();
        this.current_admin_versions = store.state.current_admin_versions;
        this.current_admin_recent_contracts =
          store.state.current_admin_recent_contracts;
        this.current_admin_recent_contracts_search =
          this.current_admin_recent_contracts;
        this.current_admin_groups = store.state.current_admin_groups;
        this.current_admin_groups_search = store.state.current_admin_groups;
        this.current_admin_users = store.state.current_admin_users;
        //this.admincard = store.state.group;
      } else {
        this.current_user_name = store.state.current_user_name;
        this.read_data_for_user();
        this.current_user_recent_contracts =
          store.state.current_user_recent_contracts;
        this.contract_list_of_user = store.state.contract_list_of_user;
      }
    },
    changecolor(group, colorname) {

      this.$store.commit("changegroupcolor", [
        colorname.iconcolor,
        group.group_id,
      ]);
      this.watchfunctionforgroups();
    },
    DeleteThisGroup(id,name){
      console.log(id)
      if (name === "löschen") this.delete_group(id);
    },
    groupsetting(group, property) {

      if (property.title === "Löschen") this.delete_group(group.group_id);

      else if (property.title === "Kopie erstellen")
      {
        // console.log(group)
      this.duplicategroup(store.state,group);

      }

      // else if(property.title === "Farbe") )

    },
  //  duplicate_group(group_id){
  //    this.$store.commit("duplicategroup",group_id);
      duplicategroup(state,value)
      {
        // console.log("HERE IN DUPLICATE");
       // group.group_id= ++state.group_counter;
        // console.log(state.group_counter);
        var group = JSON.parse(JSON.stringify(state.group.find(o=>o.group_id === value.group_id)));
        // console.log(group)
        // console.log(state.group_counter);
        var d1 = new Date();
        var datetime = d1.toLocaleString("de-DE");
        const [date,time_ws] = datetime.split(',');
        var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
        group.date = date;
        group.time = time;
          var unique=state.group_counter
        // console.log(time);
        // console.log(value.contract)
        for (let i = 0; i < value.contract.length; i++) {
          var id=value.contract[i].id;
          value.contract[i].date=date;
          value.contract[i].time=time;
          value.contract[i].id=`${id}_copy_${unique}`
          value.contract[i].group_id=(state.group_counter+1);
         state.copycontract.push(value.contract[i])
        }
        // state.group.push(group);
//       };
  //  state.group_counter =  ++state.group_counter;
 this.$store.commit("groupsavefunc", {
   title: group.group_title,
        user: group.user,
        contract: group.contract,
        admin_name: group.admin_name,
        keep_original_contract: group.keep_original_contract, //true/false,
      });

      let currentGroup=state.group.filter(g=>g.group_id===state.group_counter)
      currentGroup[0].group_preview=group.group_preview;
      currentGroup[0].group_color=group.group_color;
      currentGroup[0].group_icon=group.group_icon;
      currentGroup[0].group_lightcolor=group.group_lightcolor;
      currentGroup[0].user=group.user;
      currentGroup[0].contract=group.contract;
        console.log(currentGroup)
      for (let i = 0; i < currentGroup[0].contract.length; i++) {
        currentGroup[0].contract[i]=`${currentGroup[0].contract[i]}_copy_${unique}`
      }
      console.log(currentGroup)

      this.watchfunctionforgroups();
      // var id = this.$store.getters.findlatestgroup();
      // writegroupinfilesystem
      // this.writeinfilesystem('group',currentGroup[0].group_title,currentGroup[0].group_id,null)
      // var total_contracts = [];
      // var len = currentGroup[0].contract.length;
      // for (var i = 0; i < len; i++) {
      //   this.copy_creation_of_contract_new(
      //     currentGroup[0].contract[i].name,
      //     currentGroup[0].group_id,
      //   currentGroup[0].group_title,
      //   );
      //   var contract = this.$store.getters.findlatestcopycontract();

      //   this.writeinfilesystem('contract',currentGroup[0].group_title,currentGroup[0].group_id,contract)
      //   total_contracts.push(contract.id);
      // }
      // this.$store.commit("addcontractgroupfunctionforall", [
      //   currentGroup[0].group_id,
      //   total_contracts,
      // ]);

      // this.watchfunctionforgroups();
      // this.$router.push({ path: "/contracts" }).catch(() => {});









      },


    addgroupicon(icon, group) {
      var icon1 = JSON.parse(JSON.stringify(icon));
      if (this.list_of_icons.find((o) => o.icon === icon1.icon) === undefined) {
        this.list_of_icons.unshift(icon1);
        this.list_of_icons.length = 3;
      }
      this.changegroupicon(icon1.icon, group);
      this.watchfunctionforgroups();
    },
    changegroupicon(icon, group) {
      this.$store.commit("changegroupicon", [icon, group.group_id]);
      this.watchfunctionforgroups();
    },
    groupcomponentfunc(item) {
      console.log(item)
      store.commit("set_group_component", true);
      this.parsedata = item.group_id;
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
      this.function_for_tag_search_data_table(this.chipdatatableadmin);
    },
    enterdatatable(x) {
      for (var i = this.chipdatageneralsearchadmin.length - 1; i >= 0; i--) {
        this.closedatageneralsearch(this.chipdatageneralsearchadmin[i]);
      }
      this.$store.commit("setchipdatatableadmin", [x, this.current_admin_name]);
      this.function_for_tag_search_data_table(this.chipdatatableadmin);
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
      console.log(x)
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
                (o) => o.group_id === this.current_admin_groups[j].group_id
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
    function_for_tag_search_data_table(chips) {
      if (chips.length > 0) {
        var array = [];
        for (var i = 0; i < chips.length; i++) {
          for (var j = 0; j < store.state.copycontract.length; j++) {
            if (
              store.state.copycontract[j].front_title.includes(chips[i]) ||
              store.state.copycontract[j].group_title.includes(chips[i])
            ) {
              var bool = array.indexOf(store.state.copycontract[j]);
              if (bool === -1) {
                array.push(store.state.copycontract[j]);
              }
            }
          }
        }
        this.groupcopycontracts = array;
      } else {
        this.groupcopycontracts = store.state.copycontract;
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
      var contracts = localStorage.getItem("contracts data");
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
            localStorage.setItem("contracts data", JSON.stringify(obj_name));
          }
        }
      }
    },
    // working here
    read_data_for_admin() {
      const configDir = (electron.app || electron.remote.app).getPath(
        "userData"
      );
      var k = "CCcontractsdata.json";
      var filepath = path.join(configDir, this.$version, k);
      if (fs.existsSync(filepath)) {
        var data = fs.readFileSync(filepath, "utf-8");
        if (data !== undefined) {
          const decryptedString = cryptr.decrypt(data);
          localStorage.setItem("contracts data", decryptedString);
        }
      }
    },

    read_data_for_user() {
      const configDir = (electron.app || electron.remote.app).getPath(
        "userData"
      );
      var k = "CCcontractsdata.json";
      var filepath = path.join(configDir, this.$version, k);
      if (fs.existsSync(filepath)) {
        var data = fs.readFileSync(filepath, "utf-8");
        if (data !== undefined) {
          const decryptedString = cryptr.decrypt(data);
          localStorage.setItem("contracts data", decryptedString);
        }
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
    currentadmincontracts(contract) {
      this.imagecontracttitle = contract.front_title;
      var contractcc = store.getters.findcopycontract(contract.id);
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE");
      const [date, time_ws] = datetime.split(",");
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      store.commit("setrecentcontractsincopycontract", [
        this.current_admin_name,
        contractcc,
        date,
        time,
      ]);
      store.commit("setrecentcontractsinadmindata", [
        this.current_admin_name,
        contractcc.id,
      ]);
      store.commit(
        "setcurrentadminrecentcontracts",
        store.getters.getrecentcontractsofadmin(this.current_admin_name)
      );
      this.route_path(contract);
    },
    currentadmincontracts_v2(x, y, z) {
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
        isedited: false,
      };
      // let location2 = path.join(process.cwd(), "thumbnails");
      // location2 = location2.replace(/\\/g, "/");
      obj.title = x;
      obj.group_title = y;
      obj.front_title = z;
      obj.last_edited = this.current_admin_name;
      // obj.url="";
      // obj.url =
      //   "local-resource://" +
      //   location2 +
      //   "/" +
      //   z +
      //   "-" +
      //   y +
      //   "-" +
      //   this.current_admin_name +
      //   ".png";
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
    route_path(contract) {
      localStorage.setItem("contract_org_name", contract.title);
      localStorage.setItem("current_contract_group_title", contract.group_id);
      localStorage.setItem("current_contract_title", contract.id);
      localStorage.setItem("contract_for_file_system", JSON.stringify(contract));
      localStorage.setItem("opened_contract", true);
      this.$store.commit("setnavbardashboardicon", false);
      this.$store.commit("setnavbarcontractcreatoricon", false);
      this.$router.push({ path: "/amazon" }).catch(() => {});
    },
    route_path_v2(x, y, z) {
      localStorage.setItem("contract_org_name", x);
      localStorage.setItem("current_contract_group_title", y);
      localStorage.setItem("current_contract_title", z);
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
    delete_group(group_id) {
      var confirm = this.delete_grouptest();
      confirm.then((x) => {
        if (x === 1) {
          var i, len;
          var group = JSON.parse(
            JSON.stringify(store.getters.findgroupbyid(group_id))
          );
          store.commit("pushgroupinpapierkorb", group);
          var group_user = group.user;
          len = group_user.length;
          // for (i = 0; i < len; i++) {
          //   store.commit("deleteuserfromgroupdeletion", [
          //     group_user[i],
          //     group_id,
          //   ]);
          // }
          var group_contract = group.contract;
          len = group_contract.length;
          for (i = 0; i < len; i++) {
            store.commit("deletecontractfromgroup", [
              group_contract[i],
              group_id,
              true
            ]);
          }
          store.commit("deletegroup", group_id);
          this.watchfunctionforgroups();
        }
      });
      // var j;
      // //var groups_by_specific_admin;
      // const group_title = x;
      // var group = store.getters.findgroup(group_title);
      // var group2 = {};
      // Object.assign(group2, group);
      // var confirm = this.delete_grouptest();
      // confirm.then((x) => {
      //   if (x === 1) {
      //     store.commit("pushgroupinpapierkorb", [
      //       this.current_admin_name,
      //       group2,
      //     ]);
      //     var Clength = group.contract.length;
      //     for (var l = 0; l < Clength; l++) {
      //       var Ctitle = group.contract[l].front_title;
      //       for (
      //         var i = 0;
      //         i < this.current_admin_recent_contracts.length;
      //         i++
      //       ) {
      //         if (
      //           this.current_admin_recent_contracts[i].front_title === Ctitle
      //         ) {
      //           this.current_admin_recent_contracts.splice(i, 1);
      //           store.commit(
      //             "setcurrentadminrecentcontracts",
      //             this.current_admin_recent_contracts
      //           );
      //           store.commit("setrecentcontractsinadmindata", [
      //             this.current_admin_name,
      //             this.current_admin_recent_contracts,
      //           ]);
      //           store.commit("setrecentcontractsinuserdata", [
      //             this.current_user_name,
      //             this.current_user_recent_contracts,
      //           ]);
      //           break;
      //         }
      //       }
      //     }
      //     var length = group.user.length;
      //     for (j = length; j > 0; j--) {
      //       store.commit("deleteuserfromgroup", [
      //         group.user[j - 1].name,
      //         group.contract,
      //       ]);
      //     }
      //     store.commit("deletegroup", group);
      //     var admin_data = store.getters.checkByName(this.current_admin_name);
      //     this.$store.commit(
      //       "setcurrentadmindeleted",
      //       admin_data[0].deleted_data
      //     );
      //     var groups_by_specific_admin = store.getters.checkGroupByAdminName(
      //       this.current_admin_name
      //     );
      //     store.commit("setcurrentadmingroups", groups_by_specific_admin);
      //     this.current_admin_groups = store.state.current_admin_groups;
      //     this.current_admin_groups_search = this.current_admin_groups;
      //     store.dispatch("updatewritejson");
      //   }
      // });
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
      console.log("primarybutton")
      this.groupName = x;
      // const value = 1;
      this.all_contracts = store.getters.getallcontracts();
      // var i;
      // for (i = 1; i < this.all_contracts.length; i++) {
      // }
    },

    //   async delete_contract_from_grouptest(){
    //     let options  = {
    //     buttons: ["Ja","Nein",],
    //          message: "Wollen Sie diesen Arbeitsbereich wirklich löschen?"
    //     }
    //     let response1 = await dialog.showMessageBox(options)
    //     return response1.response;
    // },

    delete_contract_from_group(contract_id, group_id) {
      store.commit("deleted_data", contract_id);
      store.commit("deletecontractfromgroup", [contract_id, group_id, false]);
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
    delete_user_from_group_array(x, y) {
      for (var i = 0; i < x.length; i++) {
        this.delete_user_from_group(x[i], y);
      }
    },

    delete_user_from_group(name, group_id) {
      const user_name = name;
      var user = store.getters.finduser(user_name);
      //var group = store.getters.findgroupid(group_id);
      store.commit("deleteuserfromgroupdeletion", [user.id, group_id]);
      this.watchfunctionforgroups();
      // var admin_data = store.getters.checkByName(this.current_admin_name);
      // this.$store.commit("setcurrentadmindeleted", admin_data[0].deleted_data);
      // // store.commit("deleteuserfromgroup", [user, group]);
      // var groups_by_specific_admin = store.getters.checkGroupByAdminName(
      //   this.current_admin_name
      // );
      // store.commit("setcurrentadmingroups", groups_by_specific_admin);
      // this.current_admin_groups = store.state.current_admin_groups;
      // this.current_admin_groups_search = this.current_admin_groups;
      // group = store.getters.findgroup(group_title);
      // this.searchgroupuserfordeletiondata = JSON.parse(
      //   JSON.stringify(group.user)
      // );
      // this.searchgroupuserfordeletiondata_search =
      //   this.searchgroupuserfordeletiondata;
      // this.searchgroupuserfordeletion = "";
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

      newItemGroup(newgroup){
        // console.log(newgroup)
        if(this.newItem!==newgroup){
        console.log(this.rightClickMenu)
        this.rightClickMenu=false;
        }
        if(this.rightClickMenu===false){
      this.newItem=newgroup;
      console.log(this.newItem)}
      },
      clickbutton(){
  $( "#primaryButton" ).click();
      },
    all_user_created_by_specific_admin(x) {
      var admin = "Eva Vonau";
      this.groupName = x;
      this.all_users = store.getters.getallByAdminName(admin);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700,800,900,");
.expand {
  width: 240px;
  height: 200px;
  overflow-y: scroll;
  // background-color: #f6f6f6;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0px;
  }
}
.expand:hover {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a0a0a0;
    // border-radius: 10px;
  }
}
@media (hover: none) {
  .expand {
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: #a0a0a0;
      // border-radius: 10px;
    }
  }
}
// .expand::-webkit-scrollbar:hover {
//   width: 5px;
// }
// .expand:hover {
//   overflow-y: auto;
//   scrollbar-color: #a0a0a0 transparent;
//   scrollbar-width: thin;
// }
// .expand::-webkit-scrollbar-track:hover {
//   background: transparent;
// }
// .expand::-webkit-scrollbar-thumb:hover {
//   background: #a0a0a0;
//   border-radius: 10px;
// }

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

div.expand2 {
  overflow-x: auto !important;
  // overflow-y: hidden;
  scrollbar-color: #a0a0a0;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 1px !important;
    height: 5px;
  }
}
div.expand2:hover {
  &::-webkit-scrollbar {
    width: 1px !important;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a0a0a0;
    overflow-x: auto !important;
    // border-radius: 10px;
  }
}
@media (hover: none) {
  div.expand2 {
    &::-webkit-scrollbar {
      width: 1px !important;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: #a0a0a0;
      // border-radius: 10px;
    }
  }
}

// div.expand2::-webkit-scrollbar {
//   width: 1px !important;
//   height: 5px;
// }
// div.expand2 {
//   overflow-x: auto !important;
//   overflow-y: hidden;
//   scrollbar-color: #a0a0a0;
//   scrollbar-width: thin;
// }
// div.expand2::-webkit-scrollbar-track {
//   background: transparent;
// }
// div.expand2::-webkit-scrollbar-thumb {
//   background-color: #a0a0a0;
//   border-radius: 10px;
// }
div.sticky {
  position: -webkit-sticky !important; /* Safari */
  position: sticky !important;
}
::v-deep .v-autocomplete__content > .v-list__tile {
  height: 100px !important;
}
.div_hover {
  background-color: transparent;
}

.div_hover:hover {
  background-color: #eeeeee;
}
.my-menu1 {
  //contain: initial;
  // overflow: visible;
  border-radius: 18px 18px 18px 18px;
  margin-left: -2%;
}
.my-menu2 {
  margin-left: -45px;
  // position: relative !important;
  //contain: initial;
  // overflow: visible;
  border-radius: 18px 18px 18px 18px;
}
.handshake {
  margin-top: 12px;
  margin-left: -8px;
}
.group_notification {
  margin-top: 11px;
  margin-left: 10px;
}
.group_settings_css {
  margin-top: 13px;
}
.uppercardmenu {
  margin-left: -1.5%;
  margin-top: -0.5%;
}
.lowercardminususermenu {
  margin-left: -0.5%;
  margin-top: -1.5%;
}
.lowercardplususermenu {
  margin-left: -0.5%;
  margin-top: -1.5%;
}
.my-menu3 {
  //contain: initial;
  // overflow: visible;
  border-radius: 18px 18px 18px 18px;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}
.my-color-list {
  margin-top: -32px;
  margin-left: -30px;
}
// #no-background-hover::after {
//    background-color: #FFA300 !important;
//    opacity: 0.6;
//    color: black;
// }
.editbutton {
  display: none;
}
.edit:hover .editbutton {
  display: block;
}
</style>

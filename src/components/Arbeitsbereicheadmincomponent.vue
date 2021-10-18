<template>
  <v-content class="ma-0 pa-0">
      <!-- 2nd hading -->
            <v-row class="mb-3">
              <v-col cols="1">
                <p class="ml-1" style="font-family:railway;font-size:18px;font-weight:690;">Arbeitsbereich</p>
              </v-col>
              <v-col cols="1">
                <v-icon class="ml-7" color="black" size="28"> mdi-menu-down </v-icon>
              </v-col>
              <v-col cols="1" class="">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  offset-x
                  top
                  rounded="xl"
                  width="290"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-on="on" size="28" color="black" v-bind="attrs" class="ml-n4">
                      mdi-plus
                    </v-icon>
                  </template>
                  <v-card
                    elevation="5"
                    class="ma-0 pa-0"
                    rounded="xl"
                    width="290"
                    min-height="200"
                    style="overflow: hidden"
                  >
                    <h3 class="ml-5 pt-2">Neuer Arbeitsbereich</h3>
                    <v-text-field
                      color="#767577"
                      v-model="group_title"
                      :items="admincarditems"
                      clearable
                      outlined
                      placeholder
                      label="Beschreibung hinzufügen"
                      rounded
                      class="pl-3 pr-3"
                    ></v-text-field>
                    <v-row class="mt-n7">
                      <v-col cols="1">
                        <v-icon size="21" class="ml-2 mr-1 mt-4"
                          >mdi-file-document-outline</v-icon
                        >
                      </v-col>
                      <v-col cols="10">
                        <v-card
                          elevation="0"
                          outlined
                          width="260"
                          style="border-color: #767577"
                          rounded="xl"
                          min-height="20"
                          class="ml-2 mb-4"
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
                                  v-if="auto_contracts.length === 0"
                                >
                                  <v-icon size="23" class="mr-3 ml-n2 mt-n1"
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
                                    Verträge 
                                  </p>
                                </div>
                                <v-card
                                  elevation="0"
                                  color="transparent"
                                  min-height="1"
                                  width="330"
                                  class="mb-3 ml-n1"
                                >
                                  <v-row>
                                    <div
                                      v-for="(item, index) in auto_contracts"
                                      :key="index"
                                    >
                                      <v-chip
                                        style="border-color: #767577"
                                        outlined
                                        small
                                        class="mt-1 ml-1"
                                      >
                                        <v-icon size="12" class="mr-1"
                                          >mdi-file-document-outline</v-icon
                                        >
                                        {{ item }}
                                      </v-chip>
                                    </div>
                                  </v-row>
                                </v-card>
                                <template v-slot:actions>
                                  <v-icon class="mr-1">mdi-menu-down</v-icon>
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
                                    v-for="(item, index) in all_contracts"
                                    :key="index"
                                  >
                                    <v-row class="mt-n6 mb-n6">
                                      <v-col cols="1">
                                        <v-icon size="21" class="ml-1 mt-n1"
                                          >mdi-file-document-outline</v-icon
                                        >
                                      </v-col>
                                      <v-col cols="6">
                                        <p class="ml-2">
                                          {{ item.contract_title }}
                                        </p>
                                      </v-col>
                                      <v-col cols="1">
                                        <v-checkbox
                                          v-model="auto_contracts"
                                          :value="item.contract_title"
                                          class="mt-n2"
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
                        <v-icon size="21" class="ml-2 mr-1 mt-4"
                        >mdi-account-outline</v-icon
                        >
                      </v-col>
                      <v-col cols="10">
                        <v-card
                          elevation="0"
                          outlined
                          width="260"
                          style="border-color: #767577"
                          rounded="xl"
                          min-height="20"
                          class="ml-2 mb-7"
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
                                  width="330"
                                  class="mb-3 ml-n1"
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
                                          >mdi-account-outline</v-icon
                                        >
                                        {{ item }}
                                      </v-chip>
                                    </div>
                                  </v-row>
                                </v-card>
                                <template v-slot:actions>
                                  <v-icon class="mr-1">mdi-menu-down</v-icon>
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
                                          >mdi-account-outline</v-icon
                                        >
                                      </v-col>
                                      <v-col cols="6">
                                        <p class="ml-2">{{ item.user_name }}</p>
                                      </v-col>
                                      <v-col cols="1">
                                        <v-checkbox
                                          v-model="auto_users"
                                          :value="item.user_name"
                                          class="mt-n2"
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
                        color="#606060"
                        style=" text-transform:none;"
                        text
                        @click="submit1(auto_contracts, auto_users)"
                      >
                        Anlegen
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </v-col>
            </v-row>
              
            <!-- main cards -->
            <div style="display: flex; overflow-y: hidden" class="expand2 " >
              <!-- add card by clicking buttton -->
              <!-- card 1 -->
              <div
                v-for="(item, index) in current_admin_groups"
                :key="index"
                class="ml-2"
              >
                <v-card
                  width="250"
                  height="300"
                  outlined
                  elevation="0"
                  rounded="lg"
                  class="mb-3"
                >
                  <!-- uper card -->
                  <v-card
                    height="50"
                    width="250"
                    color="transparent"
                    outlined
                    elevation="0"
                  >
                    <v-row>
                      <v-col cols="7">
                        <h3 class="ml-3">{{ item.group_title }}</h3>
                      </v-col>
                      <v-col cols="2">
                        <v-icon
                          class="ml-6 mt-1"
                          @click="delete_group(item.group_title)"
                        >
                         mdi-delete-outline
                        </v-icon>
                      </v-col>
                      <v-col cols="3">
                        <v-menu
                          :close-on-content-click="false"
                          offset-y
                          max-width="290"
                          rounded="xl"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="ml-3 mt-1 material-icons-outlined"
                              v-on="on"
                              v-bind="attrs"
                              @click="all_contract_list(item.group_title)"
                            >
                           mdi-pencil-outline
                            </v-icon>
                          </template>
                          <v-card
                            elevation="0"
                            width="290"
                            min-height="120"
                            rounded="xl"
                            class="ma-0 pa-0"
                          >
                            <v-row class="ma-0 pa-0 ml-4 pt-5">
                              <v-card
                                elevation="0"
                                outlined
                                width="250"
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
                                        v-if="auto_contracts.length === 0"
                                      >
                                        <v-icon
                                          size="23"
                                          class="mr-3 ml-n2 mt-n1"
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
                                          Verträge 
                                        </p>
                                      </div>
                                      <v-card
                                        elevation="0"
                                        color="transparent"
                                        min-height="1"
                                        width="330"
                                        class="mb-3 ml-n1"
                                      >
                                        <v-row>
                                          <div
                                            v-for="(
                                              item, index
                                            ) in auto_contracts"
                                            :key="index"
                                          >
                                            <v-chip
                                              style="border-color: #767577"
                                              outlined
                                              small
                                              class="mt-1 ml-1"
                                            >
                                              <v-icon size="12" class="mr-1"
                                                >mdi-file-document-outline</v-icon
                                              >
                                              {{ item }}
                                            </v-chip>
                                          </div>
                                        </v-row>
                                      </v-card>
                                      <template v-slot:actions>
                                        <v-icon class="mr-1"
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
                                        width="400"
                                        style="overflow-x: hidden"
                                      >
                                        <div
                                          class="pt-4"
                                          v-for="(item, index) in all_contracts"
                                          :key="index"
                                        >
                                          <v-row class="mt-n6 mb-n6">
                                            <v-col cols="1">
                                              <v-icon
                                                size="21"
                                                class="ml-1 mt-n1"
                                                >mdi-file-document-outline</v-icon
                                              >
                                            </v-col>
                                            <v-col cols="6">
                                              <p class="ml-2">
                                                {{ item.contract_title }}
                                              </p>
                                            </v-col>
                                            <v-col cols="1">
                                              <v-checkbox
                                                v-model="auto_contracts"
                                                :value="item.contract_title"
                                                class="mt-n2"
                                              ></v-checkbox>
                                            </v-col>
                                          </v-row>
                                        </div>
                                      </v-card>
                                    </v-expansion-panel-content>
                                  </v-expansion-panel>
                                </v-expansion-panels>
                              </v-card>
                            </v-row>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                class=""
                                color="secondary"
                                text
                                 style=" text-transform:none;"
                                @click="
                                  add_contract_in_group_array(auto_contracts)
                                "
                              >
                               Anlegen
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-menu>
                      </v-col>
                    </v-row>
                  </v-card>
                  <!-- mid card textfild -->
                  <v-card
                    elevation="0"
                    height="210"
                    width="250"
                    class="expand"
                    style="overflow-x: hidden"
                    color="transparent"
                  >
                    <div>
                      <div v-for="(item1, index) in item.contract" :key="index">
                        <v-row>
                          <v-col cols="3" class="ml-2">
                            <v-icon class="">
                              mdi-file-document-outline
                            </v-icon>
                          </v-col>
                          <v-col cols="6" class="">
                            <h4 class="mt-1 ml-n7" v-if="contractchecking.includes(item1.copy_contract_front_title +'-'+ item1.copy_contract_group_title)">{{ item1.copy_contract_front_title }}</h4>
                             <h4 class="mt-1 ml-n7" v-if="!contractchecking.includes(item1.copy_contract_front_title +'-'+ item1.copy_contract_group_title)">{{ item1.copy_contract_title }}_original</h4>
                          </v-col>
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
                            <v-col cols="1" class="" >
                            <v-icon
                              size="19"
                              @click="
                                delete_contract_from_group(
                                  item1.copy_contract_front_title,
                                  item.group_title
                                )
                              "
                              class=""
                              >mdi-close</v-icon
                            >
                            
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-card>
                  <!-- lower card -->
                  <v-card
                    style="position: absolute; bottom: 0; left: 0"
                    height="40"
                    width="250"
                    color="transparent"
                    outlined
                    elevation="0"
                  >
                    <v-row class="mt-n2">
                      <v-col cols="8">
                        <div
                          style="
                            display: flex;
                            overflow-y: hidden;
                            text-align: right;
                          "
                          class="expand1"
                        >
                          <div v-for="(item, index) in item.user" :key="index">
                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon v-on="on" v-bind="attrs"
                                >mdi-account-outline</v-icon
                                >
                              </template>
                              <span>{{ item.user_name }}</span>
                            </v-tooltip>
                          </div>
                        </div>
                      </v-col>
                      <v-col cols="2">
                        <v-menu
                          rounded="xl"
                          offset-y
                          top
                          :close-on-content-click="false"
                          max-width="287"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon v-on="on" v-bind="attrs" class="ml-2" size="24"
                              >mdi-account-minus-outline</v-icon
                            >
                          </template>
                          <v-card
                            elevation="0"
                            width="287"
                            class="ma-0 pa-0"
                            rounded="xl"
                            style="overflow: hidden"
                            min-height="130"
                          >
                            <v-row class="ml-4 pt-9 mb-4">
                              <v-card
                                elevation="0"
                                outlined
                                width="250"
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
                                        <v-icon
                                          size="23"
                                          class="mr-3 ml-n2 mt-n1"
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
                                        width="330"
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
                                                >mdi-account-outline</v-icon
                                              >
                                              {{ item }}
                                            </v-chip>
                                          </div>
                                        </v-row>
                                      </v-card>
                                      <template v-slot:actions>
                                        <v-icon class="mr-1"
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
                                              <v-icon
                                                size="21"
                                                class="ml-1 mt-n1"
                                                >mdi-account-outline</v-icon
                                              >
                                            </v-col>
                                            <v-col cols="6">
                                              <p class="ml-2">
                                                {{ item.user_name }}
                                              </p>
                                            </v-col>
                                            <v-col cols="1">
                                              <v-checkbox
                                                v-model="auto_users"
                                                :value="item.user_name"
                                                class="mt-n2"
                                              ></v-checkbox>
                                            </v-col>
                                          </v-row>
                                        </div>
                                      </v-card>
                                    </v-expansion-panel-content>
                                  </v-expansion-panel>
                                </v-expansion-panels>
                              </v-card>
                            </v-row>
                            <v-card-actions class="mt-n3">
                              <v-spacer></v-spacer>
                              <v-btn
                                class=""
                                color="secondary"
                                text
                                 style=" text-transform:none;"
                                @click="
                                  delete_user_from_group_array(
                                    auto_users,
                                    item.group_title
                                  )
                                "
                              >
                             Anlegen
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-menu>
                      </v-col>
                      <v-col cols="2" class="ml-n3">
                        <v-menu
                          rounded="xl"
                          offset-y
                          top
                          :close-on-content-click="false"
                          width="270"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              size="24"
                              v-on="on"
                              v-bind="attrs"
                              @click="
                                all_user_created_by_specific_admin(
                                  item.group_title
                                )
                              "
                            >
                             mdi-account-plus-outline
                            </v-icon>
                          </template>
                          <v-card
                            elevation="0"
                            width="270"
                            min-height="70"
                            rounded="xl"
                            class="ma-0 pa-0"
                          >
                            <h4 class="pt-3 ml-6">Mitarbeiter/in hinzufügen</h4>
                            <v-row class="ml-3 pt-2 mb-4">
                              <v-card
                                elevation="0"
                                outlined
                                width="240"
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
                                        <v-icon
                                          size="23"
                                          class="mr-3 ml-n2 mt-n1"
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
                                        width="330"
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
                                                >mdi-account-outline</v-icon
                                              >
                                              {{ item }}
                                            </v-chip>
                                          </div>
                                        </v-row>
                                      </v-card>
                                      <template v-slot:actions>
                                        <v-icon class="mr-1"
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
                                        width="400"
                                        style="overflow-x: hidden"
                                      >
                                        <div
                                          class="pt-4"
                                          v-for="(
                                            item, index
                                          ) in current_admin_users"
                                          :key="index"
                                        >
                                          <v-row class="mt-n6 mb-n6">
                                            <v-col cols="1">
                                              <v-icon
                                                size="21"
                                                class="ml-1 mt-n1"
                                                >mdi-account-outline</v-icon
                                              >
                                            </v-col>
                                            <v-col cols="6">
                                              <p class="ml-2">
                                                {{ item.user_name }}
                                              </p>
                                            </v-col>
                                            <v-col cols="1">
                                              <v-checkbox
                                                v-model="auto_users"
                                                :value="item.user_name"
                                                class="mt-n2"
                                              ></v-checkbox>
                                            </v-col>
                                          </v-row>
                                        </div>
                                      </v-card>
                                    </v-expansion-panel-content>
                                  </v-expansion-panel>
                                </v-expansion-panels>
                              </v-card>
                            </v-row>
                            <v-card-actions class="mt-n3">
                              <v-spacer></v-spacer>
                              <v-btn
                                class=""
                                color="secondary"
                                text
                                 style=" text-transform:none;"
                                @click="add_user_in_group_array(auto_users)"
                              >
                                Anlegen
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-menu>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-card>
              </div>
              <v-row
                style="
                  height: 1vh !important;
                  margin-top: 10em;
                  margin-left: 1em;
                "
              >
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  offset-y
                  top
                  rounded="xl"
                  width="270"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-on="on" v-bind="attrs" size="34" color="black" class="">
                      mdi-plus
                    </v-icon>
                  </template>
                  <v-card
                    elevation="5"
                    class="ma-0 pa-0"
                    rounded="xl"
                    width="270"
                    min-height="200"
                    style="overflow: hidden"
                  >
                    <h3 class="ml-5 pt-2">Neuer Arbeitsbereich</h3>
                    <v-text-field
                      color="#767577"
                      v-model="group_title"
                      :items="admincarditems"
                      clearable
                      outlined
                      placeholder
                      label="Beschreibung hinzufügen"
                      rounded
                      class="pl-3 pr-3"
                    ></v-text-field>
                    <v-row class="mt-n7">
                      <v-col cols="1">
                        <v-icon size="21" class="ml-2 mr-1 mt-4"
                          >mdi-file-document-outline</v-icon
                        >
                      </v-col>
                      <v-col cols="10">
                        <v-card
                          elevation="0"
                          outlined
                          style="border-color: #767577"
                          rounded="xl"
                          min-height="20"
                          class="ml-2 mb-4"
                        >
                          <v-expansion-panels flat>
                            <v-expansion-panel
                              class=" "
                              style="width: 14vw; background-color: transparent"
                            >
                              <v-expansion-panel-header>
                                <div
                                  style="display: flex"
                                  class="mb-n4 mt-n4"
                                  v-if="auto_contracts.length === 0"
                                >
                                  <v-icon size="23" class="mr-3 ml-n2 mt-n1"
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
                                    Verträge 
                                  </p>
                                </div>
                                <v-card
                                  elevation="0"
                                  color="transparent"
                                  min-height="1"
                                  width="330"
                                  class="mb-3 ml-n1"
                                >
                                  <v-row>
                                    <div
                                      v-for="(item, index) in auto_contracts"
                                      :key="index"
                                    >
                                      <v-chip
                                        style="border-color: #767577"
                                        outlined
                                        small
                                        class="mt-1 ml-1"
                                      >
                                        <v-icon size="12" class="mr-1"
                                          >mdi-file-document-outline</v-icon
                                        >
                                        {{ item }}
                                      </v-chip>
                                    </div>
                                  </v-row>
                                </v-card>
                                <template v-slot:actions>
                                  <v-icon class="mr-1">mdi-menu-down</v-icon>
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
                                    v-for="(item, index) in all_contracts"
                                    :key="index"
                                  >
                                    <v-row class="mt-n6 mb-n6">
                                      <v-col cols="1">
                                        <v-icon size="21" class="ml-1 mt-n1"
                                          >mdi-file-document-outline</v-icon
                                        >
                                      </v-col>
                                      <v-col cols="6">
                                        <p class="ml-2">
                                          {{ item.contract_title }}
                                        </p>
                                      </v-col>
                                      <v-col cols="1">
                                        <v-checkbox
                                          v-model="auto_contracts"
                                          :value="item.contract_title"
                                          class="mt-n2"
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
                        <v-icon size="21" class="ml-2 mr-1 mt-4"
                          >mdi-account-outline</v-icon
                        >
                      </v-col>
                      <v-col cols="10">
                        <v-card
                          elevation="0"
                          outlined
                          style="border-color: #767577"
                          rounded="xl"
                          min-height="20"
                          class="ml-2 mb-7"
                        >
                          <v-expansion-panels flat>
                            <v-expansion-panel
                              class=" "
                              style="width: 14vw; background-color: transparent"
                            >
                              <v-expansion-panel-header>
                                <div
                                  style="display: flex"
                                  class="mb-n4 mt-n4"
                                  v-if="auto_users.length === 0"
                                >
                                  <v-icon size="23" class="mr-3 ml-n2 mt-n1"
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
                                  width="330"
                                  class="mb-3 ml-n1"
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
                                          >mdi-account-outline</v-icon
                                        >
                                        {{ item }}
                                      </v-chip>
                                    </div>
                                  </v-row>
                                </v-card>
                                <template v-slot:actions>
                                  <v-icon class="mr-1">mdi-menu-down</v-icon>
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
                                          >mdi-account-outline</v-icon
                                        >
                                      </v-col>
                                      <v-col cols="6">
                                        <p class="ml-2">{{ item.user_name }}</p>
                                      </v-col>
                                      <v-col cols="1">
                                        <v-checkbox
                                          v-model="auto_users"
                                          :value="item.user_name"
                                          class="mt-n2"
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
                        color="secondary"
                        text
                         style=" text-transform:none;"
                        @click="submit1(auto_contracts, auto_users)"
                      >
                       Anlegen
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </v-row>
            </div>

  </v-content>
</template>

<script>
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var fs = require("fs");
import store from "../store";
const { dialog  } = require("electron").remote;
import { mapState } from 'vuex';
export default {
name: "arbeitsbereicheadmincomponent",

data: () => ({
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
    contract_list_of_user: [],
    current_admin_name: "",
    current_admin_groups:[],
     current_admin_versions: [],
     current_admin_recent_contracts:[],
     current_user_recent_contracts:[],
     contractchecking: [],
     current_admin_users:[],
    maincontracts: [
      "amazon",
      "shopify",
      "ebay",
      "consent",
      "consent1",
      "consentV",
    ],
  }),
  //COMPUTED
  computed: {
     ...mapState(["zuletztbearbeitetadmin","Arbeitsbereicheadmin","Benutzeradmin",
     "Papierkorbadmin","Dashboardadmin","grid","list","Zuletztbearbeitetuser","Furmichfreigegebenuser","Papierkorbuser",]),
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
    this.isAdmin = store.state.isAdmin;
    this.all_users = store.state.user;
    this.all_contracts = store.state.contract;
    if(this.isAdmin === true){
      this.current_admin_name = store.state.current_admin_name;
      this.read_data_for_admin(this.current_admin_name)
      this.current_admin_versions = store.state.current_admin_versions;
      this.current_admin_recent_contracts = store.state.current_admin_recent_contracts;
      this.current_admin_groups = store.state.current_admin_groups;
      this.current_admin_users = store.state.current_admin_users;
      let val = JSON.parse(
        localStorage.getItem("contracts of " + this.current_admin_name)
      );
      this.contractchecking = Object.keys(val);
      //this.admincard = store.state.group;
    }
    else{
      this.current_user_name = store.state.current_user_name;
      this.read_data_for_user(this.current_user_name)
      this.current_user_recent_contracts = store.state.current_user_recent_contracts
      this.contract_list_of_user = store.state.contract_list_of_user;
    }
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
      }
      this.current_user_recent_contracts.unshift(obj);
      store.commit(
        "setcurrentuserrecentcontracts",
        this.current_user_recent_contracts
      );
       this.route_path(x,y,z);
    },

    currentadmincontracts(x,y,z) {
      //x : copy_contract_title
      //y : group_title
      //z : copy_contract_front_title
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
            this.$router.push({ path: "/amazon" });
          } else if (x === "shopify") {
            localStorage.setItem("current_contract_title", x);
            this.$router.push({ path: "/shopify" });
          } else if (x === "ebay") {
            localStorage.setItem("current_contract_title", x);
            this.$router.push({ path: "/ebay" });
         } else if (x === "consent") {
            localStorage.setItem("current_contract_title", x);
            this.$router.push({ path: "/consent" });
          } else if (x === "consent1") {
            localStorage.setItem("current_contract_title", x);
            this.$router.push({ path: "/consent1" });
          } else if (x === "consentV") {
            localStorage.setItem("current_contract_title", x);
            this.$router.push({ path: "/consentV" });
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
        dialog.showErrorBox("title here", group.group_title + " is deleted ");
       this.group_title = "" ;
      this.auto_users = [] ;
      this.auto_contracts = [] ;
      this.$router.push({ path: "/contracts" });
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
       this.$router.push({ path: "/contracts" });
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
       this.$router.push({ path: "/contracts" });
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
       this.$router.push({ path: "/contracts" });
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
         this.$router.push({ path: "/contracts" });
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
      this.$router.push({ path: "/contracts" });
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
  },

}
</script>

<style lang="scss" scoped>
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

</style>
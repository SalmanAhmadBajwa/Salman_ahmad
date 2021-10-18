<template>
  <v-app>
    <v-app-bar v-if="logged" dense flat fixed :color="maincolor.bar">
      <!-- color="#FBEFD7" -->
      <!-- color="#FCF2DF" -->
      <!-- <v-card elevation="0" width="100" height="40" color="transparent">
        <v-img width="100" height="40" src="/assets/king.png"> </v-img>
      </v-card> -->
      <!-- <v-btn icon color="blue" @click="test1()">
        <v-icon color="#606060">mdi-delete</v-icon>
      </v-btn> -->

      <!-- <v-btn icon color="blue" @click="dohtml_test()">
        <v-icon :color="testcolor">mdi-circle</v-icon>
      </v-btn> -->
     <v-btn
         icon
          @click="sidenavigationbar()"
          class=""
        >
        <v-icon>mdi-menu</v-icon>
        </v-btn>
          <v-btn
          v-if="!isAdmin"
          text
          small
          style="height: 3em"
          @click="logout_from_contracts()"
          class="ml-n2 mr-2"
        >
          <span
            class="mdi mdi-logout"
            style="color: #474747; font-size: 27px"
          ></span>
        </v-btn>
      <div style="display: flex">
        <v-list-item class="">
          <v-menu
          v-if="isAdmin"
            :close-on-content-click="false"
            offset-y
            top
            content-class="my-avatar-menu"
            left
            width="220"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-avatar class="ml-n5" v-on="on" v-bind="attrs">
                <img
                  :src="current_admin_profile_pic"
                  alt="John"
                />
              </v-list-item-avatar>
            </template>
            <v-card
              elevation="0"
              class="ma-0 pa-0"
              width="220"
              min-height="320"
              style="border-radius: 15px 15px 15px 15px"
            >
              <v-row justify="center" class="pt-3 ml-3">
                <v-list-item-avatar size="95" >
                  <img
                    :src="current_admin_profile_pic"
                    alt="John"
                  />
                </v-list-item-avatar>
              </v-row>
              <v-icon
                style="position: absolute; top: 1.6em; left: 1em;pointer:cursor;"
                @click="changeprofilepic()"
                size="45"
                :color="maincolor.theme"
              >
                mdi-circle
              </v-icon>
              <v-icon
                style="position: absolute; top: 2.67em; left: 1.71em;pointer:cursor;"
                size="30"
                 @click="changeprofilepic()"
                color="white"
              >
                mdi-camera-outline
              </v-icon>
              <p style="text-align: center" class="h2 mt-5">
                <b>{{ current_admin_name }}</b>
              </p>
              <p style="text-align: center" class="h3 mt-n4">Admin</p>
              <v-list dense class="mt-n5">
                  <v-list-item v-for="(item, i) in itemsd" :key="i" @click="setting_func(item)">
                    <v-list-item-icon  v-if="item.icon !== 'mdi-account-settings-outline'">
                      <v-icon v-text="item.icon" color="#474747"></v-icon>
                    </v-list-item-icon>
                     <v-list-item-subtitle
                        v-if="item.title !== 'Einstellungen'"
                        v-text="item.title"
                      ></v-list-item-subtitle>
                      <v-menu
                        v-if="item.title === 'Einstellungen' && item.icon=== 'mdi-account-settings-outline'"
                        :close-on-content-click="false"
                        offset-y
                        top
                        content-class="my-list-menuside"
                        left
                        width="220"
                      >
                        <template v-slot:activator="{ on , attrs}">
                         <v-list-item  v-on="on" v-bind="attrs" class="ml-n4 mr-n4">
                            <v-list-item-icon>
                      <v-icon v-text="item.icon" color="#474747"></v-icon>
                    </v-list-item-icon>
                          <v-list-item-subtitle
                            v-text="item.title"
                            v-on="on"
                          ></v-list-item-subtitle>
                         
                      </v-list-item>
                        </template>
                        <v-card
                          elevation="0"
                          class="ma-0 pa-0"
                          width="220"
                          min-height="320"
                          style="border-radius: 15px 15px 15px 15px"
                        >
                          <div
                            style="
                              display: flex;
                              background-color: #e8e8e8;
                              border-radius: 15px 15px 0px 0px;
                            "
                            class="pt-3"
                          >
                            <v-icon class="pl-4 mt-n4" color="#474747"
                              >mdi-account-outline</v-icon
                            >
                            <p class="body-2 pl-8">Einstellungen</p>
                          </div>
                          <h3 class="pl-4 pt-3" style="color: black">
                            Farbkonfiguration
                          </h3>
                          <div class="pl-2" style="display: flex">
                            <v-btn
                              icon
                              @click="changemaincolorfunct(item1.color)"
                              v-for="item1 in coloritem1"
                              :key="item1.color"
                            >
                              <v-icon :color="item1.color">{{
                                item1.icon
                              }}</v-icon>
                            </v-btn>
                            <p
                              style="font-size: 32px; color: grey"
                              class="mt-n2"
                            >
                              |
                            </p>
                            <v-btn
                              icon
                              v-for="item in coloritem2"
                              :key="item.color"
                            >
                              <v-icon :color="item.color">{{
                                item.icon
                              }}</v-icon>
                            </v-btn>
                          </div>
                          <h3 class="pl-3 mt-n2" style="color: black">
                            Sicherheit
                          </h3>
                          <div v-for="(item, i) in Einstellungenitems"
                                :key="i" class="mb-n2 ma-0 pa-0">
                          <v-list dense style="background-color:transparent;border-radius: 15px 15px 15px 15px">
                              <v-list-item
                                
                                @click="changepassword(item.title)"
                              >
                                <v-list-item-icon>
                                  <v-icon
                                    v-text="item.icon"
                                    color="#474747"
                                  ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-list-item-subtitle v-text="item.title">
                                  </v-list-item-subtitle>
                                
                                   <!-- <div v-if="namechange">
                                  <v-text-field >

                                  </v-text-field>
                                  <v-text-field >

                                  </v-text-field>
                                  </div>
                                   <div v-if="resetpassword">
                                 
                                  </div> -->

                                </v-list-item-content>
                                  
                              </v-list-item>
                           
                          </v-list>
                          <v-card
                                 elevation="0"
                                 color="transparent"
                                  class=""
                                  v-if="passwordchange && item.title==='Passwort ändern'">
                                  <v-text-field 
                                  dense
                                  color="#DADEE7"
                                      height="15"
                                       :append-icon="passwordshow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="passwordshow ? 'text' : 'Password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="passwordshow = !passwordshow"
          clearable
                                  outlined
                                  v-model="Altes_Passwort"
                                  label="Altes Passwort"
                                  class="ml-2 mt-2 mr-2"
                                 style="border-radius: 22px 22px 22px 22px"
                                  >

                                  </v-text-field>
                                  <v-text-field 
                                  dense
                                  color="#DADEE7"
                                    label="Neu Passwort"
                                  class="ml-2 mt-n2 mr-2"
                                      height="15"
                                      v-model="Neu_Passwort"
                                       :append-icon="Neupasswordshow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="Neupasswordshow ? 'text' : 'Password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="Neupasswordshow = !Neupasswordshow"
          clearable
                                 style="border-radius: 22px 22px 22px 22px"
                                  outlined>

                                  </v-text-field>
                                   <v-text-field 
                                  dense
                                  color="#DADEE7"
                                  label="Bestätige Neues Passwort"
                                  height="15"
                                  v-model="Bestätige_Neues_Passwort"
                                   :append-icon="BestätigeNeupasswordshow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="BestätigeNeupasswordshow ? 'text' : 'Password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="BestätigeNeupasswordshow = !BestätigeNeupasswordshow"
          clearable
                                  class="ml-2 mt-n2 mr-2"
                                 style="border-radius: 22px 22px 22px 22px"
                                  outlined
                                  
                                 >

                                  </v-text-field>
                                  <v-card-actions class="mt-n7">
                                    <v-spacer></v-spacer>
                                    <v-btn text @click="password_change_func(Altes_Passwort,Neu_Passwort,Bestätige_Neues_Passwort)">
                                      Anlegen
                                    </v-btn>
                                  </v-card-actions>
                                  </v-card>
                                  <v-card
                                 elevation="0"
                                 color="transparent"
                                  class=""
                                  v-if="namechange && item.title==='Name ändern'">
                                  <v-text-field 
                                  dense
                                  :label="current_admin_name"
                                      height="15"
                                      v-model="new_name"
                                  outlined
                                  color="#DADEE7"
                                  class="ml-2 mt-2 mr-2"
                                 style="border-radius: 22px 22px 22px 22px"
                                  >

                                  </v-text-field>
                                  <v-text-field 
                                  dense
                                  color="#DADEE7"
                                  v-model="Passwort"
                                  :append-icon="anyadminpasswordshow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="anyadminpasswordshow ? 'text' : 'Password'"
          name="input-10-1"
          hint="At least 8 characters"
          counter
          @click:append="anyadminpasswordshow = !anyadminpasswordshow"
          clearable
                                  label="Passwort"
                                  class="ml-2 mt-n2 mr-2"
                                      height="15"
                                 style="border-radius: 22px 22px 22px 22px"
                                  outlined>

                                  </v-text-field>
                                  <v-card-actions class="mt-n7">
                                    <v-spacer></v-spacer>
                                    <v-btn text @click="name_reset(current_admin_name,new_name,Passwort)">
                                      Anlegen
                                    </v-btn>
                                  </v-card-actions>
                                  </v-card>
                          </div> 
                        </v-card>
                      </v-menu>
                  </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
          <v-list-item-avatar class="ml-n5">
           <img
           v-if="!isAdmin"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
                </v-list-item-avatar>
          <v-list-item-content class="mt-5 ml-n5">
            <p
            v-if="isAdmin"
              class="mt-1"
              style="
                font-family: Raleway;
                font-weight: 700;
                color: #5c5c5c;
                font-size: 15px !important;
              "
            >
              {{ current_admin_name }}
            </p>
            <p
            v-if="!isAdmin"
              class="mt-1 ml-5"
              style="
                font-family: Raleway;
                font-weight: 700;
                color: #5c5c5c;
                font-size: 15px !important;
              "
            >
              {{ current_user_name }}
            </p>
            <p
            v-if="isAdmin"
              class="body-1 mt-n1"
              style="color: #5c5c5c; font-size: 11px !important"
            >
              Admin
            </p>
            <p
            v-if="!isAdmin"
              class="body-1 mt-n1 ml-5"
              style="color: #5c5c5c; font-size: 11px !important"
            >
              User
            </p>
          </v-list-item-content>
        </v-list-item>
       
        <!-- <v-btn
          text
          small
          style="height: 3em"
          @click="logout_from_contracts()"
          class="mt-8 ml-n4"
        >
          <span
            class="mdi mdi-pencil"
            style="color: #474747; font-size: 27px"
          ></span>
        </v-btn> -->
      </div>
      <v-spacer></v-spacer>
   
       <!-- <v-row>
         <v-textarea>

         </v-textarea>
         <p v-for="(item,index) in import_data_from_pdf_array_right_side" :key="index">{{item}}</p>
       </v-row> -->
          <!-- <v-btn @click="left_right_side_binding()">left_right_side_bind</v-btn> -->
            <!-- <v-btn @click="test5()">test5</v-btn> -->
        <v-spacer></v-spacer>
      <!-- <v-btn @click="importpdftest4()">importpdf</v-btn> -->
        <!-- <v-btn @click="checking()">pdfpages</v-btn> -->
      <!-- <v-btn @click="ismail()">ismail</v-btn>
      <v-btn @click="ismail2()">second_window</v-btn> -->
      <!-- <v-btn @click="pdftoimage()">PDF 2 IMG NPM</v-btn> -->
      <v-row
        v-if="title_new_contract && !text_field_opener"
        justify="end"
        align="center"
        class="mt-3"
        style="margin-right: 12%"
      >
        <p class="mr-3">Titel:</p>

        <p
          class=""
          style="text-align: center; font-weight: 700; font-size: 16px"
          @dblclick="open_text_field()"
        >
          {{ title | truncateEnd(30, "...") }}
        </p>

        <v-icon
          :color="maincolor.theme"
          v-if="eyecheck"
          class="mt-n3 pl-2"
          @click="eyefunction()"
          >mdi-eye-plus-outline</v-icon
        >
        <v-icon
          :color="maincolor.theme"
          v-if="!eyecheck"
          class="mt-n3 pl-2"
          @click="eyefunction()"
          >mdi-eye-minus-outline</v-icon
        >
      </v-row>
      <v-row
        v-if="title_new_contract && text_field_opener"
        justify="end"
        align="center"
        class="mt-3"
        style="margin-right: 8%"
      >
        <p class="mr-3">Titel:</p>
        <div style="width: 30%">
       
        </div>
        <!-- <v-icon>mdi-pencil</v-icon> -->
        <v-icon
          :color="maincolor.theme"
          v-if="eyecheck"
          class="mt-n3 pl-2"
          @click="eyefunction()"
          >mdi-eye-plus-outline</v-icon
        >
        <v-icon
          :color="maincolor.theme"
          v-if="!eyecheck"
          class="mt-n3 pl-2"
          @click="eyefunction()"
          >mdi-eye-minus-outline</v-icon
        >
        <!-- <v-icon color="#606060" v-if="!eyecheck" class="mt-n3 pl-2" @click="eyefunction()">mdi-eye-minus-outline</v-icon> -->
      </v-row>
      

       <!-- NOTIFICATION BUTTON -->
      <v-toolbar-items class="hidden-sm-and-down">
      
        <v-menu offset-y>
            <template v-slot:activator="{ on }">
         <div class="badge"> 
            <v-btn
              dark
              icon
              v-on="on"
            >
              <v-badge
          :content="notifications.length"
          :value="notifications.length"
          color="red"
          overlap
        >
          <v-icon v-if="notifications.length===0" :color="maincolor.theme" >mdi-bell-outline</v-icon>  
            <v-icon v-else :color="maincolor.theme" class="shake" >mdi-bell</v-icon>
        </v-badge>
           
            
            
            <!-- <a href="" class="aside-panel-trigger icon action mdi mdi-bell"><span class="badge red">9</span></a> -->
            </v-btn>
            </div>
          </template>
        <v-card
          elevation="0"
          class="ma-0 pa-0"
          width="300"
          min-height="320"
          max-height="500"
          style="border-radius: 15px 15px 15px 15px"
        >
         
              <v-subheader>Notifications  <v-spacer></v-spacer> ({{notifications.length}})
          <v-spacer></v-spacer>      
              <v-icon v-if="notifications.length!==0"  @click="empty(notifications)">mdi-delete</v-icon> </v-subheader>
             
              <v-divider></v-divider>
              <v-list
                v-for="notification in notifications"
                :key="`notification-key-${notification.id}`"
              >
                <v-list-item>
                  {{ notification.title }}
                </v-list-item>
              </v-list>
           
          </v-card>
        </v-menu>
      </v-toolbar-items>


<v-btn icon @click="back()">
 <v-tooltip bottom><template v-slot:activator="{ on, attrs }">
        <v-icon v-on="on" v-bind="attrs" color="#474747">mdi-arrow-left-bold-outline</v-icon>
    </template>
  <span class="ml-2 mr-2">back</span></v-tooltip>
 
</v-btn>


      <v-btn icon v-if="navbardashboardicon" @click="back_dashboardadmin()">
        <v-tooltip bottom><template v-slot:activator="{ on, attrs }">
        <v-icon v-on="on" v-bind="attrs" :color="maincolor.theme">mdi-view-quilt-outline</v-icon>
         </template>
  <span class="ml-2 mr-2">you are here</span></v-tooltip>
      </v-btn>

      <v-btn icon v-if="!navbardashboardicon" @click="back_dashboardadmin()">
        <v-tooltip bottom><template v-slot:activator="{ on, attrs }">
        <v-icon v-on="on" v-bind="attrs" color="#474747">mdi-view-quilt-outline</v-icon>
         </template>
  <span class="ml-2 mr-2">Dashboard</span></v-tooltip>
      </v-btn>
     
     
      
      <v-btn icon v-if="isAdmin && navbarcontractcreatoricon" @click="back_2()">
        <v-tooltip bottom><template v-slot:activator="{ on, attrs }">
        <v-icon v-on="on" v-bind="attrs" :color="maincolor.theme">mdi-file-document-edit-outline</v-icon>
        </template>
  <span class="ml-2 mr-2">Back to Dashboard</span></v-tooltip>
        <!-- <v-icon v-if="!edit1" color="">mdi-document-outline</v-icon> -->
      </v-btn>

      <v-btn icon v-if="isAdmin && !navbarcontractcreatoricon" @click="editf()">
        <v-tooltip bottom><template v-slot:activator="{ on, attrs }">
        <v-icon v-on="on" v-bind="attrs" color="#474747">mdi-file-document-edit-outline</v-icon>
        </template>
  <span class="ml-2 mr-2">Contract Editor</span></v-tooltip>
        <!-- <v-icon v-if="!edit1" color="">mdi-document-outline</v-icon> -->
      </v-btn>
      <!-- <v-btn icon v-if="isAdmin && !navbarcontractcreatoricon" @click="editf()">
        <v-icon color="#474747">mdi-file-document-edit-outline</v-icon>
        <v-icon v-if="!edit1" color="">mdi-document-outline</v-icon>
      </v-btn> -->
      <!-- 
      <v-btn icon color="#999999" v-if="isAdmin" @click="editf()">
        <v-icon :color="maincolor.theme">mdi-file-document-edit-outline</v-icon>
        <v-icon v-if="!edit1" color="">mdi-document-outline</v-icon>
      </v-btn> -->

      <v-btn icon @click="helpf()">
        <v-tooltip bottom><template v-slot:activator="{ on, attrs }">
        <v-icon v-on="on" v-bind="attrs" color="#474747">mdi-progress-question</v-icon>
        </template>
  <span class="ml-2 mr-2">Help</span></v-tooltip>
      </v-btn>

      <v-menu
        bottom
        offset-y
        content-class="my-list-menu"
        :close-on-content-click="false"
        width="220"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :color="maincolor.theme"
            class="white--text"
            style="text-transform: none"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Export & Import
          </v-btn>
        </template>
        <v-card
          elevation="0"
          class="ma-0 pa-0"
          width="220"
          min-height="320"
          style="border-radius: 15px 15px 15px 15px"
        >
          <h2 class="pl-5 pt-2">Exportieren</h2>
          <v-list flat dense class="mt-n4">
            <!-- <v-list-item-group
        > -->
            <v-list-item
              v-for="(item, index) in fileFormats1"
              :key="index"
              @click="writeToFile(item.title)"
              id="printbtn"
              value
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content class="ml-n4">
                <v-list-item-subtitle v-text="item.title">
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <!-- </v-list-item-group> -->
          </v-list>
            <h2 class="pl-5 pt-2">Importieren</h2>
          <v-list flat dense class="mt-n4">
  
              <v-list-item
               value
                style="cursor:pointer"
                v-for="item in fileFormats2"
                :key="item.title"
             @click="pdf_png_import(item.title)"
              >
                <v-list-item-icon v-if="item.icon !== 'mdi-file-import-outline' ">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                 <v-list-item-subtitle 
                 class="ml-n4"
                     v-text="item.title"
                      v-if="item.title!=='Vertrag & Abschnitt importieren'"
         >
                      </v-list-item-subtitle>
             
                  <v-menu
                   v-if="item.title==='Vertrag & Abschnitt importieren' && item.icon === 'mdi-file-import-outline' "
                    rounded="xl"
                    offset-x
                    right
                    bottom
                    content-class="Importieren-menu"
                    :close-on-content-click="false"
                    max-width="370"
                  >
                    <template v-slot:activator="{ on,attrs }">
                          <v-list-item v-on="on"  v-bind="attrs"  @click="importieren(item.title)" class="ml-n4 mr-n4">
                             <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                      <v-list-item-subtitle 
                    class="ml-n4"
                     
         >{{item.title | truncateEnd(22, "..")}}
                      </v-list-item-subtitle>
                </v-list-item>
                    </template>
                     <v-card
                              elevation="0"
                              width="370"
                              min-height="190"
                              rounded="xl"
                              class="ma-0 pa-0"
                              outlined
                            >
                              <div style="display: flex" class="pt-2">
                                <h5
                                  class="mt-3 ml-6"
                                  style="font-weight: 700; font-size: 16px"
                                >
                                  <strong
                                    >Vertrag & Paragraph Importieren</strong
                                  >
                                </h5>
                                <v-spacer></v-spacer>
                                <v-icon
                                  color="#7C7C7C"
                                 
                                  style=""
                                  class="mt-1 mr-7"
                                >
                                  mdi-file-import-outline</v-icon
                                >
                              </div>

                              <div style="display: flex" class="mt-4">
                                <v-icon size="24" class="ml-5 mt-n3"
                                  >mdi-file-document-outline</v-icon
                                >
                                <div style="width: 21em">
                                  <v-card
                                    elevation="0"
                                    outlined
                                    max-width="340"
                                    style="border-color: #767577"
                                    rounded="xl"
                                    min-height="20"
                                    class="mb-2 ml-2"
                                  >
                                    <v-expansion-panels flat accordion>
                                      <v-expansion-panel
                                        class=" "
                                        style="background-color: transparent"
                                      >
                                        <v-expansion-panel-header
                                          style="
                                            height: 1em;
                                            border-radius: 20px;
                                          "
                                        >
                                          <v-icon
                                            @click.stop="onClick()"
                                            class="ml-n2 mr-2"
                                            >mdi-magnify</v-icon
                                          >

                                          <v-text-field
                                            dense
                                            v-model="contract_name"
                                            @click.stop="onClick()"
                                            class="pt-4 pl-n1 some-style"
                                            placeholder="Vertrag selektieren"
                                          >
                                          </v-text-field>
                                          <template v-slot:actions>
                                            <v-icon class="mr-2"
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
                                              v-for="item in items_search"
                                              :key="item"
                                            >
                                              <v-row class="mt-n3 mb-n9">
                                                <v-col cols="1">
                                                  <v-icon
                                                    size="21"
                                                    class="ml-1 mt-n1"
                                                    >mdi-file-document-outline</v-icon
                                                  >
                                                </v-col>
                                                <v-col
                                                  style="cursor: pointer"
                                                  @click="contract_name = item"
                                                  cols="10"
                                                >
                                                  <p class="ml-5">
                                                    {{
                                                      item
                                                        | truncateEnd(18, "...")
                                                    }}
                                                  </p>
                                                </v-col>
                                              </v-row>
                                            </div>
                                          </v-card>
                                        </v-expansion-panel-content>
                                      </v-expansion-panel>
                                    </v-expansion-panels>
                                  </v-card>
                                </div>
                              </div>

                              <div style="display: flex" class="mt-3">
                                <v-icon size="24" class="ml-5 mt-n1"
                                  >mdi-card-bulleted-outline</v-icon
                                >
                                <div style="width: 21em">
                                  <v-card
                                    elevation="0"
                                    outlined
                                    max-width="340"
                                    style="border-color: #767577"
                                    rounded="xl"
                                    min-height="20"
                                    class="mb-1 ml-2"
                                  >
                                    <v-expansion-panels flat accordion>
                                      <v-expansion-panel
                                        class=" "
                                        style="background-color: transparent"
                                      >
                                        <v-expansion-panel-header
                                          style="
                                            height: 1em;
                                            border-radius: 20px;
                                          "
                                        >
                                          <v-icon
                                            @click.stop="onClick()"
                                            class="ml-n2 mr-2"
                                            >mdi-magnify</v-icon
                                          >

                                          <v-text-field
                                            dense
                                            v-model="card_name"
                                            @click.stop="onClick()"
                                            class="pt-4 pl-n1 some-style"
                                            placeholder="Abschnitt selektieren"
                                          >
                                          </v-text-field>
                                          <template v-slot:actions>
                                            <v-icon class="mr-2"
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
                                              v-for="item in items2_search"
                                              :key="item"
                                            >
                                              <v-row class="mt-n3 mb-n9">
                                                <v-col cols="1">
                                                  <v-icon
                                                    size="21"
                                                    class="ml-1 mt-n1"
                                                    >mdi-file-document-outline</v-icon
                                                  >
                                                </v-col>
                                                <v-col
                                                  style="cursor: pointer"
                                                  cols="10"
                                                  @click="card_name = item"
                                                >
                                                  <p class="ml-5">
                                                    {{
                                                      item
                                                        | truncateEnd(18, "...")
                                                    }}
                                                  </p>
                                                </v-col>
                                              </v-row>
                                            </div>
                                          </v-card>
                                        </v-expansion-panel-content>
                                      </v-expansion-panel>
                                    </v-expansion-panels>
                                  </v-card>
                                </div>
                              </div>
                              <div
                              v-if="items3.length!==0"
                               style="display: flex" class="ml-5 ">
                              <v-icon 
                              
                              :color="maincolor.theme"
                               class="mr-2 mt-5">
                               mdi-bookmark-multiple
                              </v-icon>
                              <v-card
                              elevation="0"
                           
                              width="285"
                              min-height="10"
                              >
                              <div  
                              class="mt-5 ml-5 mb-n6"
                              v-for="(item,index) in items3" :key="index"
                              style="display: flex">
                              <p v-if="!item.selected" class="mt-n1" style="font-size:16px;">§</p>
                                <p v-if="!item.selected" class="pl-3" >{{item.name | truncateEnd(20)}}</p>
                                <p v-if="item.selected" class="mt-n1" style="font-size:16px;font-weight:700;">§</p>
                                <p v-if="item.selected" class="pl-3" style="font-weight:700;">{{item.name | truncateEnd(20)}}</p>
                                <v-spacer></v-spacer>
                                <v-checkbox 
                                v-model="items3checkbox"
                                :color="maincolor.theme"
                                :value="item.name"
                                class="mr-2 mt-n2"></v-checkbox>
                              </div>
                              </v-card>
                              </div>
                              <div style="display: flex" class="mr-5 pb-2 mt-2">
                                <v-spacer></v-spacer>
                                <v-btn
                                  class=""
                                  text
                                  :color="maincolor.theme"
                                  style="text-transform: none"
                                  @click="
                                   importcardfromanothercomponenttwoways(
                                      card_name,
                                      contract_name,
                                      items3checkbox
                                    )
                                  "
                                >
                                  Importieren
                                </v-btn>
                              </div>
                            </v-card>
                  </v-menu>
                  
                        <!-- <v-dialog
                        persistent
                         
                  v-model="pdfwaitdialog"
        max-width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <div v-on="on" v-bind="attrs">
         
                      </div>
        </template>
        <v-card max-width="500"
        elevation="0"
        class="ma-0 pa-0"
       :color="maincolor.bar"
        style="overflow:hidden"
      min-height="350"
        >
        <v-card
        elevation="0"
        color="transparent"
        width="250"
        height="150"
        style="position:absolute;top:40%;left:28%"
        >
       <v-list color="transparent">
         <v-list-item>
        
           <h1 style="color:black;font-weight:700;">Warten Sie mal</h1>
         </v-list-item>
       </v-list>
        </v-card>
        <v-row justify="center" style="margin-top:5%">
        <v-progress-circular
      :size="290"
      width="12"
     :color="maincolor.theme"
      indeterminate
    ></v-progress-circular>
        </v-row>

       </v-card>
      </v-dialog> -->
               
              </v-list-item>
           
          </v-list>
          <h2 class="pl-5 pt-2">Aktualisieren</h2>
          <v-list dense class="mt-n4">
            <!-- <v-list-item-group
          color="grey"
        > -->
            <v-list-item v-for="(item, index) in fileFormats3" :key="index">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content class="ml-n4">
                <v-list-item-subtitle v-text="item.title">
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <!-- </v-list-item-group> -->
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    
     <v-progress-linear
      style="position: absolute; top: 44px; left: 0px; z-index: 5"
      color="#EAAD35"
      v-if="logged && pdfwaitdialog"
      indeterminate
      rounded
      height="6"
     v-show="isloading"
    ></v-progress-linear>
    <!-- <v-content class="ma-0 pa-0"> -->
    <!-- <login-m v-if="buildproductionmode"></login-m> -->
    <!-- <test2 v-if="$secondwindow"></test2> -->
    <!-- <login-m ></login-m> -->
    <!-- <keep-alive :exclude="exclude"> -->
    <router-view class=""></router-view>
    <!-- </keep-alive> -->
    <!-- </v-content> -->
   
  </v-app>
          <!-- <sidenavigationbar_user v-if="!isAdmin && side_navigation_bar"></sidenavigationbar_user> -->
</template>
<script>
const electron = require("electron");
 const path = require("path");
//  const path = require('path');
// import Vue from 'vue'
const { dialog} = require("electron").remote;
// import {BrowserWindow}  from 'electron';
// const {app} = require('electron');
//const fs = require("fs");
// var PDFImage = require("pdf-image").PDFImage;
var fs = require("fs");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
// import store from "../store";
//import { remote } from 'electron';
// var pdf2img = require('pdf-img-convert');
import store from "./store";
// const { session } = require('electron');
// import {clearCache} from "clear-cache"((
import { mapState } from "vuex";
//const {session}   = require('electron');
// const app = require('electron')
//import loginm from './components/login-m';
//  import LoginM from "./components/login-m.vue";
// import test1 from "./components/test1.vue";
// import test1 from './components/test1';
// import test2 from '@/components/test2';
// import newd from './components/amazon.vue';
// import sidenavigationbar_admin from "../src/components/sidenavigationbar_admin";
// import sidenavigationbar_user from "../components/sidenavigationbar_user";
import { bus } from "./main";
//const { ipcRenderer } = require('electron')
import { ipcRenderer} from "electron";
import { remote } from 'electron';
const { createWorker } = require("tesseract.js");
// const { webFrame } = require('electron')
//var mammoth = require("mammoth");
//var pdf2image = require('pdf2image');
// import { getPageCount } from 'docx-pdf-pagecount';
// const pdfjsLib = require('pdfjs-dist');
// import { app} from 'electron'
// const { app } = require ('electron');


// const remote1 = require('electron').remote;
// const app = remote1.app;


export default {
  name: "App",
  components: {
     
  },
  data: function () {
    return {
       notifications: [
       
      ],
      isloading:false,
      pdfwaitdialog:false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      import_data_from_pdf_array_right_side:[],
      anyadminpasswordshow:"",
      BestätigeNeupasswordshow:"",
      Neupasswordshow:"",
      passwordshow:"",
      Altes_Passwort:"",
      Neu_Passwort:"",
      Bestätige_Neues_Passwort:"",
      new_name:"",
      Passwort:"",
      passwordchange:false,
      namechange:false,
      resetpassword:false,
      Vertrag_Abschnitt_importieren:false,
      items3checkbox:[],
      imgSelected: false,
      Einstellungenitems: [
        { title: "Passwort ändern", icon: "mdi-account-key-outline" },
        { title: "Passwort zurücksetzen", icon: "mdi-account-convert-outline" },
        { title: "Name ändern", icon: "mdi-account-edit-outline" },
      ],
      coloritem1: [
        // {icon:"mdi-circle",color:"blue"},
        { icon: "mdi-circle", color: "#EAAD35" },
        { icon: "mdi-circle", color: "#41BB95" },
      ],
      coloritem2: [
        { icon: "mdi-circle", color: "#000000" },
        { icon: "mdi-circle", color: "#7C7C7C" },
        { icon: "mdi-circle", color: "#EEEEEE" },
      ],
      itemsd: [
        { title: "Einstellungen", icon: "mdi-account-settings-outline" },
        { title: "Programme verbinden", icon: "mdi-tools" },
        { title: "Datenbank verbinden", icon: "mdi-database-sync" },
        { title: "Log Out", icon: "mdi-login" },
      ],
      localitem: [
        { title: "Contract Creator", icon: "mdi-file-document-edit-outline" },
        { title: "Dashboard", icon: "mdi-view-quilt-outline" },
        // { title: "zuletzt bearbeitet", icon:"mdi-folder-edit-outline", },
        // { title: "Arbeitsbereiche", icon:" mdi-apps" ,},
        { title: "Benutzer", icon: "mdi-account-outline" },
        { title: "Papierkorb", icon: "mdi-delete-outline" },
      ],
      card_name: "",
      contract_name: "",
      items: [],
      items2: [],
      items3:[],
      items_search: [],
      items2_search: [],
      // eyecheck: true,
      selectedItem: 1,
      fileFormats1: [
        { title: "PDF Dokument", icon: "mdi-file-pdf-outline" },
        { title: "Open Office Dokument", icon: "mdi-file-document-outline" },
        { title: "Word Dokument", icon: "mdi-file-document-outline" },
        // { title: "ODT-UTF8" },
      ],
      fileFormats2: [
        { title: "Clever Contracts Import", icon: "mdi-file-upload-outline" },
        {
          title: "Vertrag & Abschnitt importieren",
          icon: "mdi-file-import-outline",
        },
      ],
      fileFormats3: [
        { title: "Mail Daten anfordern ", icon: "mdi-email-send-outline" },
        { title: "Mail Daten aktualisieren", icon: "mdi-email-sync-outline" },
        { title: "Vertrag aktualisieren", icon: "mdi-file-sync-outline" },
      ],
      title: "Contract Vertrag",
      title2: "Contract 2 Vertrag",
      example: "haga",
      help1: false,
      // edit1: false,
      text_field_opener: false,
    };
  },
  computed: {
     items3checkboxfunc: function(){
      return this.items3checkbox, new Date();
    },
    pushcontractinsearchtextfield: function () {
      return this.contract_name, new Date();
    },
    pushcardnameinsearchtextfield: function () {
      return this.card_name, new Date();
    },
    ...mapState([
      "side_navigation_bar",
      "secondwindowtest",
      "Papierkorbadmin",
      "Benutzeradmin",
      "navbardashboardicon",
      "navbarcontractcreatoricon",
      "eyecheck",
      "logged",
      "buildproductionmode",
      "isAdmin",
      "title_new_contract",
      "maincolor",
      "Dashboardadmin",
      "Dashboarduser",
      "current_admin_name",
      "current_user_name",
      "current_admin_profile_pic",
    ]),
    // exclude() {
    //   if (process.env.NODE_ENV === "production") {
    //     return "";
    //   }
    //   return /.+/;
    // },
    card_name_wrt_contract: function () {
      return this.contract_name, new Date();
    },
  },
  beforeCreate() {
   
    
  },
  // beforeDestroy() {
  // },
  created() {
    ipcRenderer.on('imagecreatedsignalpt2',(event,imagepages)=>{
    const worker = createWorker({
        // cachePath: path.join(process.cwd(), 'lang-data'),
        // logger: (m) => console.log(m),
      });
      (async () => {
        var local_array=[]
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        for(var i=1;i<=imagepages;i++){
          var k= fs.readFileSync("./pdfimage/pdftestimage"+i+".png")
          const { data: { text } } = await worker.recognize(k)
          local_array.push(text)
          }
        await worker.terminate();
        this.import_data_from_pdf_array_right_side=local_array;
        // console.log(this.import_data_from_pdf_array_right_side)
        store.commit("add_import_pdf_png_content",this.import_data_from_pdf_array_right_side)
        this.pdfwaitdialog=false;
        var dir = "./pdfimage"
        fs.rmdirSync(dir, { recursive: true });
      })();
  })
    if(this.secondwindowtest === false){
      this.Create_first()
    }
    else if(this.secondwindowtest === true){
      this.Create_second()
    }
    bus.$on("newcontracttitle", (value) => {
      this.change_contract_title(value);
    });
  },
  mounted() {
    this.help1 = store.state.help;
    this.edit1 = store.state.edit;
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
     items3checkboxfunc: function(){
      for(var i=0; i< this.items3.length ;i++){
        if(this.items3checkbox.includes(this.items3[i].name)){
          this.items3[i].selected = true
        }
        else{
          this.items3[i].selected = false
        }
      }
    },
    pushcontractinsearchtextfield: function () {
      var all_contracts_search = [];
      if (this.contract_name !== "") {
        for (var j = 0; j < this.items.length; j++) {
          if (this.items[j].includes(this.contract_name)) {
            all_contracts_search.push(this.items[j]);
          }
        }
        this.items_search = all_contracts_search;
      } else {
        this.items_search = this.items;
      }
    },
    pushcardnameinsearchtextfield: function () {
      var all_contracts_search = [];
      if (this.card_name !== "") {
        for (var j = 0; j < this.items2.length; j++) {
          if (this.items2[j].includes(this.card_name)) {
            all_contracts_search.push(this.items2[j]);
          }
        }
        this.items2_search = all_contracts_search;
      } else {
        this.items2_search = this.items2;
      }
    },
    card_name_wrt_contract: function () {
      this.items2 = [];
      this.items3 = [];
      for (var i = 0; i < store.state.contract_card_details.length; i++) {
        if (
          this.contract_name ===
          store.state.contract_card_details[i].contract_name
        ) {
          for (
            var j = 0;
            j <
            store.state.contract_card_details[i].document.leftSide.card.length;
            j++
          ) {
            this.items2.push(
              store.state.contract_card_details[i].document.leftSide.card[j]
                .name
            );
            if(store.state.contract_card_details[i].document.leftSide.card[j].import_counter>0){
               var obj = {
              name : store.state.contract_card_details[i].document.leftSide.card[j].name,
              import_counter : store.state.contract_card_details[i].document.leftSide.card[j].import_counter,
              selected:false,
            }

            this.items3.push(obj)
            }
          }
          this.items3.sort(function(a, b) {
            return a.import_counter - b.import_counter;
          });
          this.items3.reverse()
          // for (
          //   var j = 0;
          //   j <
          //   store.state.contract_card_details[i].document.leftSide.card.length;
          //   j++
          // ) {
          //   this.items2.push(
          //     store.state.contract_card_details[i].document.leftSide.card[j]
          //       .name
          //   );
          // }
          this.items2_search = this.items2;
          break;
        }
      }
    },
  },
  methods: {
    sidenavigationbar(){
      store.commit("set_side_navigation_bar")  
    },
    setting_func(settingitem){
    if(settingitem.title === 'Log Out')
     this.logout_from_contracts()
    }, 
    // test5(){
    //        this.$router.push({ path: "/test5" }).catch(()=>{});
    // },

    // left_right_side_binding(){
      
    //   this.$router.push({ path: "/left_right_side_binding" }).catch(()=>{});
    // },
  //  importpdftest4(){
  //    this.$router.push({ path: "/test4" }).catch(()=>{});
  //  },
// checking(){
//     // this.pdfwaitdialog=true;
//         let filePath = dialog.showOpenDialogSync({
//         title: "Select the File to Open",
//         defaultPath: "./",
//         buttonLabel: "Open",
//         filters: [{ name: 'Files', extensions: ['png', 'pdf'] },],
//         properties: [],
//       });
//       console.log(filePath[0])
  
//   // for(var i=1;i<3;i++){
// //  var k= fs.readFileSync("./pdfimage/pdftestimage"+1+".png")
// //      console.log(k)
// //      var confirm = this.teseract(k);
// //      confirm.then((x) => {console.log(x) })
//   // }
//   // 
// },
// async teseract(k) {
// const worker = createWorker({
//         // cachePath: path.join(process.cwd(), 'lang-data'),
//         logger: (m) => console.log(m),
//       });
//       (async () => {
//         // console.log("1")
//         await worker.load();
//         // console.log("2")
//         await worker.loadLanguage("eng");
//         // console.log("3")
//         await worker.initialize("eng");
//         // console.log("4")
//         const { data: { text } } = await worker.recognize(k)
        
//         console.log(text)
//         // console.log("5")
//         await worker.terminate();

//         // console.log("6")
//         // return text
//       })();
//       // console.log(foo)
// },

     onClick() {
      /*this will toggle only by icon click. at the same time, will prevent toggle 
      by clicking on header. */


      const curr = this.panel
      this.panel = curr === undefined ? 0 : undefined
    },
    change_contract_title(value) {
      this.contract_title = value;
    },
    logout_from_contracts(){
       this.$router.push({ path: "/contracts" }).catch(()=>{});
       setTimeout(()=> {this.logout() },2000);
    },
    name_reset(old_name,new_name,password){
      this.new_name=""
      this.Passwort=""
      if (old_name.length === 0 ||password.length === 0) {
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
          type: 'error', 
          title: 'Fehler', 
          message: 'Fehler bei Namensänderung', 
          detail: 'Felder sind leer', 
        });
        return;
      }
      var admin_data = store.getters.checkByName(old_name);
      if(password !== admin_data[0].password){
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
          type: 'error', 
          title: 'Fehler', 
          message: 'Fehler bei Namensänderung', 
          detail: 'Passwort stimmt nicht überein', 
        });
        return;
      }
      this.$store.commit("changeadminnamefromappvue",[old_name,new_name])
      var contracts_data = localStorage.getItem("contracts of " + old_name)
      localStorage.removeItem("contracts of " + old_name);
      localStorage.setItem("contracts of " + new_name, contracts_data);
      fs.unlinkSync("./"+old_name+".json")
      const encrypteddata = cryptr.encrypt(contracts_data);
      fs.writeFileSync("./"+new_name.json,encrypteddata)
      store.dispatch('updatewritejson')
    },
    password_change_func(old_password,new_password,confirm_new_password){
      this.Altes_Passwort="";
      this.Neu_Passwort="";
      this.Bestätige_Neues_Passwort="";
      if (old_password.length === 0 ||new_password.length === 0 ||confirm_new_password.length === 0) {
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
          type: 'error', 
          title: 'Fehler', 
          message: 'Passwort ändern Fehler', 
          detail: 'Felder sind leer', 
        });
        return;
      }
      if(new_password !== confirm_new_password){
        dialog.showMessageBox(remote.getCurrentWindow(),{ 
          type: 'error', 
          title: 'Fehler', 
          message: 'Passwort ändern Fehler', 
          detail: 'Passwort stimmt nicht überein', 
        });
        return;
      }
      this.$store.commit("changeadminpasswordfromappvue",[this.current_admin_name,new_password])
      store.dispatch('updatewritejson')
    },
    changepassword(item){
    // alert(item)
    if(item==='Passwort ändern')
    {
this.passwordchange=!this.passwordchange;
    this.resetpassword=false;
    this.namechange=false;
    }
    if(item==='Name ändern')
    {
this.namechange=!this.namechange;
    this.resetpassword=false;
    this.passwordchange=false;
    }
    if(item==='Passwort zurücksetzen')
    {
this.resetpassword=!this.resetpassword;
    this.resetpassword=false;
    this.passwordchange=false;
    }
    },
    changeprofilepic(){
      let filePath = dialog.showOpenDialogSync({
        title: "Select the Picture to Upload As Profile Photo",
        defaultPath: "./",
        buttonLabel: "Open",
        filters: [{ name: "png", extensions: ["png"] },
                  {name: "jpg", extensions: ["jpg"] }],
        properties: [],
      });

      var img_data = fs.readFileSync(filePath[0], {encoding: 'base64'})

      var lastThree = filePath[0].substr(filePath[0].length - 4);

      var img_data_uri = "data:image/"+lastThree+";base64, "+ img_data

      this.$store.commit("changeprofilepic",[this.current_admin_name,img_data_uri])
      this.$store.commit("setcurrentadminprofilepic",img_data_uri);
      this.$store.dispatch('updatewritejson')     
    },
   Create_second(){
      this.$router.push({ path: "/test3" }).catch(()=>{});
    },
   
   Create_first(){
     //file system folder
      const configDir =  (electron.app || electron.remote.app).getPath('userData')
      var filepath_dir = path.join(configDir,this.$version_data)
      if (!fs.existsSync(filepath_dir)){
        fs.mkdirSync(filepath_dir);
      }
      //
      const filename = "CC.json";
      var filepath = path.join(configDir,this.$version,filename)
    if (fs.existsSync(filepath)) {
      var data = fs.readFileSync(filepath, "utf-8")
      if(data!== undefined){
        const decryptedString = cryptr.decrypt(data);
        // console.log(decryptedString)
        // console.log(JSON.parse(decryptedString))
        store.commit("setdatawhenopen", JSON.parse(decryptedString));
      }
    this.$store.commit("seteyecheck", false);
    this.$store.commit("settitlenewcontract", false);
    this.$store.commit("setnavbarcontractcreatoricon", false);
    this.$store.commit("setBuildproductionmode", true);
    this.$store.commit("setIsSuperUser", false);
    this.$store.commit("setLogged", false);
    this.$store.commit("setIsAdmin", false);
    this.$store.commit("setzuletztbearbeitetadmincheck", false);
    this.$store.commit("setArbeitsbereicheadmincheck", false);
    this.$store.commit("setBenutzeradmincheck", false);
    this.$store.commit("setPapierkorbadmincheck", false);
    this.$store.commit("setDashboardadmincheck", true);
    this.$store.commit("setnavbardashboardicon", true);
    this.$store.commit("set_group_component", false);
    } else {
      store.commit("clearalldata", 0);
      let admin_data = [
        {
          name: "Eva Vonau",
          email: "eva.vonau@slopek-vonau.com",
          password: "WLRSV#2021!1",
          is_admin: true,
          is_superuser: false,
          admin_version: [
            { contract_title: "AGB Amazon", contract_total_version: 1 },
            { contract_title: "AGB Shopify", contract_total_version: 1 },
            { contract_title: "AGB Ebay", contract_total_version: 1 },
            {
              contract_title: "Einwilligung Mitarbeiter_Fotos_Videos",
              contract_total_version: 1,
            },
            {
              contract_title: "Einwilligung Fotos_Videos",
              contract_total_version: 1,
            },
            {
              contract_title: "Einwilligung Fotos_Videos Veranstaltungen",
              contract_total_version: 1,
            },
          ],
        },
        {
          name: "Wiebke Hansen",
          email: "wiebke.hansen@slopek-vonau.com",
          password: "WLRSV#2021!2",
          is_superuser: false,
          is_admin: true,
          admin_version: [
            { contract_title: "AGB Amazon", contract_total_version: 1 },
            { contract_title: "AGB Shopify", contract_total_version: 1 },
            { contract_title: "AGB Ebay", contract_total_version: 1 },
            {
              contract_title: "Einwilligung Mitarbeiter_Fotos_Videos",
              contract_total_version: 1,
            },
            {
              contract_title: "Einwilligung Fotos_Videos",
              contract_total_version: 1,
            },
            {
              contract_title: "Einwilligung Fotos_Videos Veranstaltungen",
              contract_total_version: 1,
            },
          ],
        },
        {
          name: "admin",
          email: "admin@gmail.com",
          password: "adminadmin",
          is_superuser: false,
          is_admin: true,
          admin_version: [
            { contract_title: "AGB Amazon", contract_total_version: 1 },
            { contract_title: "AGB Shopify", contract_total_version: 1 },
            { contract_title: "AGB Ebay", contract_total_version: 1 },
            {
              contract_title: "Einwilligung Mitarbeiter_Fotos_Videos",
              contract_total_version: 1,
            },
            {
              contract_title: "Einwilligung Fotos_Videos",
              contract_total_version: 1,
            },
            {
              contract_title: "Einwilligung Fotos_Videos Veranstaltungen",
              contract_total_version: 1,
            },
          ],
        },
        {
          name: "superuser",
          email: "superuser@gmail.com",
          password: "superuser",
          is_superuser: true,
          is_admin: true,
          admin_version: [
            { contract_title: "AGB Amazon", contract_total_version: 1 },
            { contract_title: "AGB Shopify", contract_total_version: 1 },
            { contract_title: "AGB Ebay", contract_total_version: 1 },
            {
              contract_title: "Einwilligung Mitarbeiter_Fotos_Videos",
              contract_total_version: 1,
            },
            {
              contract_title: "Einwilligung Fotos_Videos",
              contract_total_version: 1,
            },
            {
              contract_title: "Einwilligung Fotos_Videos Veranstaltungen",
              contract_total_version: 1,
            },
          ],
        },
      ];
      let maincontracts = [
        "AGB Amazon",
        "AGB Shopify",
        "AGB Ebay",
        "Einwilligung Mitarbeiter_Fotos_Videos",
        "Einwilligung Fotos_Videos",
        "Einwilligung Fotos_Videos Veranstaltungen",
        // "Arbeitsvertrag",
        // "Vertraulichkeitserklärung",
        // "Arbeitsvertrag befristet",
        // "Arbeitsvertrag geringfügig",
        // "Aufhebungsvertrag",
        // "Vertrag freie Mitarbeit",
        // "Geschäftsführer Anstellungsvertrag",
        // "Leitender Angestelltenvertrag",
        // "Placeholder",
      ];
      let contract_card_details = [
        {
          contract_title: "AGB Amazon",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:3,
                  section: [
                    {
                      eid: "s1",
                      statement:
                        "Unter welchem Namen betreiben Sie Ihren Amazon-Shop?",
                      type: "textfield",
                      length: 1,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s2",
                      statement:
                        "Handelt es sich bei dem Vertragspartner des Kunden um eine natürliche oder juristische Person?",
                      type: "dropselect",
                      length: 2,
                      value: "",
                      choices: ["Natürliche Person", "Juristische Person"],
                      dropselect_display: true,
                      textfieldapproval: false,
                      fields_display: false,
                      ishelp: false,
                      dropselect: [
                        {
                          tiptapedit: false,
                          on_which_to_show: "Natürliche Person",
                          eid: "s2-ms1",
                          statement:
                            "Wer soll Vertragspartner des Kunden werden?",
                          type: "dropselect",
                          length: 2,
                          value: "",
                          choices: ["keine Angabe", "Frau", "Herr"],
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s3",
                      statement: "Wer soll Vertragspartner des Kunden werden?",
                      type: "textfield",
                      length: 6,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      fields: [
                        {
                          eid: "s3-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s3-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s3-ms3",
                          line: "Strasse",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s3-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s3-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-2",
                        },
                        {
                          eid: "s3-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-5",
                        },
                        // {
                        //   eid: "s3-ms7",
                        //   line: "Email",
                        //   value: "",
                        //   size: "col-5",
                        // },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:8,
                  section: [
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      eid: "s1",
                      statement:
                        "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insb. hins. des Preises)",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Hiervon ist abhängig, wann der Vertragsschluss zustande kommt. Sind Ihre Angebote bereits bindend, kommt der Vertragsschluss mit der Bestellung durch den Kunden zustande. Wir empfehlen grundsätzlich die Angebote als nicht bindend einzuordnen, da Sie sich hiermit die Möglichkeit offenhalten, Bestellungen aus verschiedensten Gründen (z.B. Lieferengpass etc.) nicht zu bestätigen",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                    {
                      tiptapedit: false,
                      editcontent: false,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      eid: "s2",
                      statement:
                        "Bieten Sie dem Kunden die „1-Click Bestellfunktion“ an?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      textfieldapproval: false,
                      editcontent: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      eid: "s3",
                      statement: "Erhält der Kunde eine Eingangsbestätigung?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      ishelp: false,
                      eid: "s4",
                      statement:
                        "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Sprache wählen",
                          line: "Sprache wählen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Keine weitere Sprache",
                          line: "Keine weitere Sprache",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms3",
                          on_which_to_show: "Sprache wählen", // will have to look on which to show
                          line: "Sprache auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      fields_display: true,
                      eid: "s5",
                      editcontent: false,
                      statement: "Erfolgt eine Speicherung des Vertragstextes?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sie sind nicht verpflichtet den Vertragstext zu speichern. Sofern Sie dies jedoch tun, muss der Kunde in den AGB hierüber informiert werden",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s5-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s5-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                      dropselect_display: true,
                      dropselect: [
                        {
                          tiptapedit: false,
                          on_which_to_show: "Ja",
                          eid: "s5-ms3",
                          statement:
                            "Wie lange wird der Vertragstext gespeichert?",
                          type: "dropselect",
                          length: 2,
                          value: "",
                          choices: [
                            "2 Jahre",
                            "5 Jahre ",
                            "10 Jahre ",
                            "Abweichende Speicherdauer ",
                          ],
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      ishelp: false,
                      eid: "s6",
                      statement:
                        "Wie wird dem Kunden der Vertragstext zugänglich gemacht?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s6-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      editcontent: false,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      eid: "s7",
                      statement:
                        "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s7-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      eid: "s8",
                      statement:
                        "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Dies ist eine Information, die Sie dem Kunden laut Gesetz erteilen müssen. Sofern der Vertragsschluss über den normalen amazon-Ablauf zustande kommt, empfehlen wir die folgende Auswahl:",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s8-ms1",
                          value:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                          line:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                        {
                          tiptapedit: false,
                          eid: "s8-ms2",
                          value: "Sonstiges",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s8-ms3",
                          on_which_to_show: "Sonstiges", // will have to look on which to show
                          line: "",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  name_edit:false,
                  total_fields: 4,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:4,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Enthalten die Preise jeweils die gültige gesetzliche Umsatzsteuer?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile. Hierzu sind Sie nur dann nicht verpflichtet, wenn Sie Kleinunternehmer iSd §19 UstG sind.",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                          line:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Kleinunternehmer iSd § 19 UstG",
                          line: "Kleinunternehmer iSd § 19 UstG",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Fallen Liefer- oder Versandkosten an? Wenn ja, wie hoch sind diese?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          line: "Höhe auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Hat der Kunde im Falle eines Widerrufs die Kosten für eine Rücksendung zu tragen?",
                      type: "radio",
                      length: 2,
                      ishelp: true,
                      ishelpstatement:
                        "Laut Gesetz trägt grundsätzlich der Verbraucher die Kosten der Rücksendung, sofern der Unternehmer diesen über diese Kostentragungspflicht unterrichtet hat. Dies gilt dann nicht, wenn der Unternehmer sich ausdrücklich dazu bereit erklärt hat die Kosten zu tragen.",
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:1,
                  section: [
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s1",
                      statement:
                        "Wollen Sie die versandten Produkte bis zur vollständigen Zahlung in Ihrem Eigentum behalten?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: true,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:1,
                  section: [
                    {
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "Europäische Streitschlichtungsplattform",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:1,
                  section: [
                    {
                      tiptapedit: false,
                      editcontent: false,
                      dropselect_display: false,
                      ishelp: false,
                      fields_display: true,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "Schlussbestimmungen",
                  name_edit:false,
                  total_fields: 2,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:2,
                  section: [
                    {
                      tiptapedit: false,
                      editcontent: false,
                      dropselect_display: false,
                      ishelp: false,
                      fields_display: true,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                    {
                      tiptapedit: false,
                      editcontent: false,
                      dropselect_display: false,
                      ishelp: false,
                      fields_display: true,
                      eid: "s2",
                      statement:
                        "Unterliegen Sie speziellen Verhaltenskodizies?",
                      type: "radio",
                      length: 2,
                      value: "",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          statement:
                            "Unternehmenseigene oder sonstige Verhaltenskodizies (Name Zweck, ggf. Domain zum Text des Verhaltenskodexes)",
                          line: "Verhaltenskodizies",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Unterschrift",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                  signaturename:"",
                  signaturedate:null,
                  signatureposition:"center",
                  positionitem:[
      {label:"Links ",value:"start"},
      {label:"Mitte ",value:"center"},
      {label:"Rechts",value:"end"},
    ],
                  type :"signature_card",
                  section_id_length:0,
                  section:[],
                },                
              ],
            },
            rightSide: {
              title: "Allgemeine Geschäftsbedingungen",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display: "<h2><strong>[[0]]</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: center; font-weight: 700; font-size: 18.72px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Vertragspartner</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s2-ms1",
                        "s3-ms1",
                        "s3-ms2",
                        "s3-ms3",
                        "s3-ms4",
                        "s3-ms5",
                        "s3-ms6",
                        
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            "Vertragspartner des Kunden für die über den Amazon Shop [[0]] abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            { "s2-ms1": ["Frau", "Herr"] },
                            "s3-ms1",
                            "s3-ms2",
                          ],
                          display: " <h2><strong>[[0]]  [[1]] [[2]]</strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s3-ms1", "s3-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3", "s3-ms4"],
                          display: "<h2><strong> [[0]]  [[1]] </strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s3-ms3", "s3-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms5", "s3-ms6"],
                          display: "<h2><strong>[[0]]  [[1]] </strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s3-ms5", "s3-ms6" ],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Vertragsschluss</strong><h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {"s1": "Ja"},
                        {"s1": "Nein"},
                        {"s2": "Ja"},
                        {"s2": "Nein"},
                        {"s3": "Ja"},
                        {"s3": "Nein"},
                        {"s4": "Sprache wählen"},
                        {"s4": "Keine weitere Sprache"},
                        {"s5": "Ja"},
                        {"s5": "Nein"},
                        "s6-ms1",
                        "s7-ms1",
                        {"s8": "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers"},
                        {"s8": "Sonstiges"},
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die im Rahmen von Amazon vorgebrachten Angebote des Anbieters stellen verbindliche Angebote zum Abschluss eines Kaufvertrages dar.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde kann die einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse gehen“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen. Anschließend gibt der Kunde über den Button „Jetzt kaufen“ ein verbindliches Angebot zum Abschluss eines Kaufvertrages an den Anbieter ab.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der Amazon Europe Core S.à r.l. (Société à responsabilité limitée): https://www.amazon.de/gp/help/customer/display.html?ie=UTF8&nodeId=201909000&ref_=footer_cou.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "<P>Die bei Amazon eingestellten Produktseiten des Anbieters stellen unverbindliche Aufforderungen zum Abschluss eines Kaufvertrages dar.</p><p>Der Kunde kann die einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse gehen“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen. Anschließend gibt der Kunde über den Button „Jetzt kaufen“ ein verbindliches Angebot zum Abschluss eines Kaufvertrages an den Anbieter ab.</p><p>Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der Amazon Europe Core S.à r.l. (Société à responsabilité limitée): https://www.amazon.de/gp/help/customer/display.html?ie=UTF8&nodeId=201909000&ref_=footer_cou.</p>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Des Weiteren kann der Kunde durch die Betätigung des Buttons „Jetzt mit 1-Click® kaufen“ unmittelbar von der Produktdetailseite aus ein verbindliches Angebot zum Abschluss eines Kaufvertrages abgeben.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die Annahme des Angebots erfolgt durch eine E-Mail der Amazon Europe Core S.à r.l., welche den Versand der Ware bestätigt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    //Als Vertragssprache stehen deutsch, zur Verfügung.
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s4-ms3"],
                          display:
                            "Als Vertragssprache stehen deutsch [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Sprache wählen" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Die Vertragssprache ist Deutsch.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Keine weitere Sprache" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            {
                              "s5-ms3": [
                                "2 Jahre",
                                "5 Jahre ",
                                "10 Jahre ",
                              ],
                            },
                          ],
                          display:
                            "Der Vertragstext wird im Anschluss an den Vertragsschluss vom Anbieter gespeichert. Die Speicherung erfolgt für [[0]].",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5% display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertragsschluss wird vom Anbieter nicht gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s6-ms1"],
                          display:
                            "Der Kunde erhält den Vertragstext über [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s6-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s7-ms1"],
                          display:
                            "Der Vertragstext ist dem Kunden auch im Anschluss an den Vertragsschluss noch über [[0]] zugänglich.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s7-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Rahmen des Vertragsschlusses über den amazon-Warenkorb kann der Kunde seine Daten, nachdem er diese in das amazon-Formular eingegeben hat jederzeit löschen oder die Löschung der eingegebenen Daten durch das Schließen des Browsers erreichen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s8:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " Im Rahmen der „1-Click“-Bestelloption kann der Bestellvorgang über die Zurück-Funktion oder das Schließen des Browsers abgebrochen werden.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s8:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s8-ms3"],
                          display: "[[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s8: "Sonstiges" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Bezahlung</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", 
                        {"s2": "Keine Besonderheiten [Angebote gegenüber Verbrauchern]"},
                        {"s2": "Kleinunternehmer iSd § 19 UstG"},
                        {"s3": "Ja"},
                        {"s3": "Nein"},
                        {"s4": "Ja"},
                        {"s4": "Nein"},
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            " Als Zahlungsart steht/stehen dem Kunden [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die für die Waren angegebenen Preise enthalten die jeweils gültige gesetzliche Mehrwertsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s2:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Aufgrund der Kleinunternehmereigenschaft des Anbieters iSd § 19 UstG enthalten die angegebenen Preise keine Mehrwertsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        { s2: "Kleinunternehmer iSd § 19 UstG" },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3"],
                          display:
                            "Die Versandkosten betragen [[0]] je Bestellung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Wir liefern versandkostenfrei.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde hat im Falle eines Widerrufs die unmittelbaren Kosten der Rücksendung zu tragen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Eigentumsvorbehalt</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Bis zur vollständigen Bezahlung verbleiben die gelieferten Waren im Eigentum des Anbieters.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Gewährleistung</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      contentedit: false,
                      tiptapedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "Europäische Streitschlichtungsplattform",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Europäische Streitschlichtungsplattform</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "Schlussbestimmungen",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Schlussbestimmungen</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" },{ s2: "Ja" }, { s2: "Nein" } ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbesondere des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Speziellen Verhaltenskodizies unterliegen wir nicht.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms3"],
                          display:
                            "Wir unterliegen den folgenden Verhaltenskodizies: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Unterschrift",
                  section_inner_value_counter_greater_than_one:false,
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                  signaturename:"",
                  signaturedate:null,
                  signatureposition:"",
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "AGB Shopify",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  isedited: false,
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  name_edit:false,
                  total_fields: 7,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:2,
                  section: [
                    {
                      textfieldapproval: false,
                      editcontent: false,
                      dropselect_display: false,
                      fields_display: false,
                      ishelp: false,
                      tiptapedit: false,
                      value: "",
                      eid: "s1",
                      statement:
                        "Wer soll Vertragspartner des Kunden werden? (Vorname, Nachname [bei juristischen Personen: Name und Rechtsform], Adresse, PLZ, Ort)",
                      type: "dropselect",
                      length: 1,
                      choices: ["keine Angabe", "Frau", "Herr"],
                      fields: [],
                    },
                    {
                      textfieldapproval: false,
                      editcontent: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement: "",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s2-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s2-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s2-ms3",
                          line: "Strasse",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s2-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                       {
                          eid: "s2-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-2",
                        },
                        {
                          eid: "s2-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-5",
                        },
                        // {
                        //   eid: "s2-ms7",
                        //   line: "Email",
                        //   value: "",
                        //   size: "col-5",
                        // },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  name_edit:false,
                  total_fields: 6,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:6,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s1",
                      statement:
                        "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insb. hins. des Preises)",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s2",
                      statement:
                        "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Sprache wählen",
                          line: "Sprache wählen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Keine weitere Sprache",
                          line: "Keine weitere Sprache",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms3",
                          on_which_to_show: "Sprache wählen",
                          line: "Sprache auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement: "Erfolgt eine Speicherung des Vertragstextes?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          statement:
                            "Wie lange wird der Vertragstext gespeichert?",
                          eid: "s3-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          line: "Dauer auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s4",
                      statement:
                        "Wie wird dem Kunden der Vertragstext zugänglich gemacht?",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s4-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s5",
                      statement:
                        "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies?",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s5-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s6",
                      editcontent: false,
                      statement:
                        "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s6-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s6-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  name_edit:false,
                  total_fields: 4,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  section_id_length:4,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s1",
                      statement:
                        "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s2",
                      statement:
                        "Enthalten die Preise jeweils die gültige gesetzliche Umsatzsteuer?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s3",
                      statement:
                        "Fallen Liefer- oder Versandkosten an? Wenn ja, wie hoch sind diese?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          line: "Höhe auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      editcontent: false,
                      statement:
                        "Hat der Kunde im Falle eines Widerrufs die Kosten für eine Rücksendung zu tragen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      editcontent: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Wollen Sie die versandten Produkte bis zur vollständigen Zahlung in Ihrem Eigentum behalten?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: true,
                  isedited: false,
                  import_counter: 0,
                  section_id_length:1,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      editcontent: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "Europäische Streitschlichtungsplattform",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  section_id_length:1,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      editcontent: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "Schlussbestimmungen",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  section_id_length:1,
                  signaturecard: false,
                  section: [
                    {
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Unterliegen Sie speziellen Verhaltenskodizies?",
                      type: "radio",
                      length: 2,
                      value: "",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          statement: "",
                          line: "Verhaltenskodizies",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Unterschrift",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                   signaturename:"",
                  signaturedate:null,
                  signatureposition:"center",
                  positionitem:[
      {label:"Links ",value:"start"},
      {label:"Mitte ",value:"center"},
      {label:"Rechts",value:"end"},
    ],
                  section_id_length:0,
                  type :"signature_card",
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "Allgemeine Geschäftsbedingungen",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Vertragspartner</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1",
                        "s2-ms1",
                        "s2-ms2",
                        "s2-ms3",
                        "s2-ms4",
                        "s2-ms5",
                        "s2-ms6",
                        "s2-ms7",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "​Vertragspartner des Kunden für die über shopify abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            { s1: ["Frau", "Herr"] },
                            "s2-ms1",
                          ],
                          display: "<h2><strong>[[0]]  [[1]] </strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s1", "s2-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms3", "s2-ms4"],
                          display: "<h2><strong>[[0]]  [[1]] </strong></h2> ",
                        },
                      ],
                      values_on_which_depend: ["s2-ms3", "s2-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms5", "s2-ms6"],
                          display: "<h2><strong>[[0]]  [[1]] </strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s2-ms5", "s2-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Vertragsschluss</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {"s1": "Ja"},
                        {"s1": "Nein"},
                        {"s2":"Sprache wählen"},
                        {"s2": "Keine weitere Sprache"},
                        {"s3": "Ja"},
                        {"s3": "Nein"},
                        "s4-ms1",
                        "s5-ms1",
                        {"s6": "Ja"},
                        {"s6": "Nein"},
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die im Rahmen von Amazon vorgebrachten Angebote des Anbieters stellen verbindliche Angebote zum Abschluss eines Kaufvertrages dar.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde kann die einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse gehen“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen. Anschließend gibt der Kunde über den Button „Jetzt kaufen“ ein verbindliches Angebot zum Abschluss eines Kaufvertrages an den Anbieter ab.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{"s1": "Ja"},
                        {"s1": "Nein"}],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{"s1": "Ja"},
                        {"s1": "Nein"}],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms3"],
                          display: "Als Vertragssprache stehen deutsch sowie [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Sprache wählen" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Die Vertragssprache ist Deutsch.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Keine weitere Sprache" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertragstext wird im Anschluss an den Vertragsschluss vom Anbieter gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3"],
                          display:
                            "Dieser Vertrag wird vom Anbieter [[0]] gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertragsschluss wird vom Anbieter nicht gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s4-ms1"],
                          display:
                            "Der Kunde erhält den Vertragstext über [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s4-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s5-ms1"],
                          display:
                            "Der Vertragstext ist dem Kunden auch im Anschluss an den Vertragsschluss noch über [[0]] zugänglich.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s5-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde kann seine Daten, nachdem er diese in das Formular im Rahmen des Bestellvorgangs eingegeben hat jederzeit löschen oder die Löschung der eingegebenen Daten durch das Schließen des Browsers erreichen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s6: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Bezahlung</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", {"s2": "Ja"},
                        {"s2": "Nein"},
                        {"s3": "Ja"},
                        {"s3": "Nein"},
                        {"s6": "Ja"},
                        {"s6": "Nein"}],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            " Als Zahlungsart steht/stehen dem Kunden [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die für die Waren angegebenen Preise enthalten die jeweils gültige gesetzliche Umsatzsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3"],
                          display:
                            "Die Versandkosten betragen [[0]] je Bestellung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Wir liefern versandkostenfrei.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde hat im Falle eines Widerrufs die unmittelbaren Kosten der Rücksendung zu tragen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Eigentumsvorbehalt</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Bis zur vollständigen Bezahlung verbleiben die gelieferten Waren im Eigentum des Anbieters.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Gewährleistung</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "Europäische Streitschlichtungsplattform",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Europäische Streitschlichtungsplattform</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_value_display: "",
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      displayed: false,
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "Schlussbestimmungen",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Schlussbestimmungen</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{"s1": "Ja"},
                        {"s1": "Nein"}],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbes. des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms3"],
                          display:
                            "Der Anbieter unterliegt dem speziellen Verhaltenskodex: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Speziellen Verhaltenskodizies unterliegen wir nicht",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Unterschrift",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                  signaturename:"",
                  signaturedate:null,
                  signatureposition:"",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "AGB Ebay",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:3,
                  section: [
                    {
                      textfieldapproval: false,
                      editcontent: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Unter welchem Namen betreiben Sie Ihren ebay-Shop?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      editcontent: false,
                      fields_display: false,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Handelt es sich bei dem Vertragspartner des Kunden um eine natürliche oder juristische Person?",
                      type: "dropselect",
                      length: 2,
                      value: "",
                      choices: ["Natürliche Person", "Juristische Person"],
                      dropselect_display: true,
                      dropselect: [
                        {
                          on_which_to_show: "Natürliche Person",
                          eid: "s2-ms1",
                          statement:
                            "Wer soll Vertragspartner des Kunden werden?",
                          type: "dropselect",
                          length: 2,
                          value: "",
                          choices: ["keine Angabe", "Frau", "Herr"],
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      editcontent: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement: "Wer soll Vertragspartner des Kunden werden?",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s3-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s3-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s3-ms3",
                          line: "Strasse",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s3-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s3-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-2",
                        },
                        {
                          eid: "s3-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-5",
                        },
                        // {
                        //   eid: "s3-ms7",
                        //   line: "Email",
                        //   value: "",
                        //   size: "col-5",
                        // },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  name_edit:false,
                  total_fields: 11,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:11,
                  section: [
                    {
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insb. hins. des Preises)",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Vertragsschluss zustande kommt. Sind Ihre Angebote bereits bindend, kommt der Vertragsschluss mit der Bestellung durch den Kunden zustande. Wir empfehlen grundsätzlich die Angebote als nicht bindend einzuordnen, da Sie sich hiermit die Möglichkeit offenhalten, Bestellungen aus verschiedensten Gründen (z.B. Lieferengpass etc.) nicht zu bestätigen, sodass es nicht zu einem Vertragsschluss mit gegenseitigen Verpflichtungen hieraus kommt",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Kann der Vertragsschluss über eine „Sofort-Kaufen“-Option zu zustande kommen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Kann der Vertrag über ein Warenkorb-System zustande kommen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                          tiptapedit: false,
                        },
                        {
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                          tiptapedit: false,
                        },
                      ],
                    },
                    //Stellen Sie dem Kunden den Button „sofort bezahlen“ zur Verfügung?
                    {
                      textfieldapproval: false,
                      editcontent: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Stellen Sie dem Kunden den Button „sofort bezahlen“ zur Verfügung?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s5",
                      statement:
                        "Stellen Sie dem Kunden den Button „sofort bezahlen“ zur Verfügung?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s5-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s5-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s6",
                      statement:
                        "Wie erfolgt die Annahme des Vertragsangebots?",
                      type: "textfield",
                      length: 1,
                      ishelp: true,
                      ishelpstatement:
                        "Sie sind nicht verpflichtet den Vertragstext zu speichern. Sofern Sie dies jedoch tun, muss der Kunde in den AGB hierüber informiert werden",
                      fields: [
                        {
                          eid: "s6-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s7",
                      statement:
                        "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s7-ms1",
                          value: "Sprache wählen",
                          line: "Sprache wählen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s7-ms2",
                          value: "Keine weitere Sprache",
                          line: "Keine weitere Sprache",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s7-ms3",
                          on_which_to_show: "Sprache wählen", // will have to look on which to show
                          line: "Sprache auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      fields_display: true,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s8",
                      statement: "Erfolgt eine Speicherung des Vertragstextes?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sie sind nicht verpflichtet den Vertragstext zu speichern. Sofern Sie dies jedoch tun, muss der Kunde in den AGB hierüber informiert werden",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s8-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s8-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,

                      dropselect_display: true,
                      dropselect: [
                        {
                          tiptapedit: false,
                          on_which_to_show: "Ja",
                          eid: "s8-ms3",
                          statement:
                            "Wie lange wird der Vertragstext gespeichert?",
                          type: "dropselect",
                          length: 2,
                          value: "",
                          choices: [
                            "2 Jahre",
                            "5 Jahre ",
                            "10 Jahre ",
                            "Abweichende Speicherdauer ",
                          ],
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s9",
                      statement:
                        "Wie wird dem Kunden der Vertragstext zugänglich gemacht?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s9-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s10",
                      statement:
                        "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s10-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s11",
                      statement:
                        "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Dies ist eine Information, die Sie dem Kunden laut Gesetz erteilen müssen. Sofern der Vertragsschluss über den normalen ebay-Ablauf zustande kommt, empfehlen wir die folgende Auswahl",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s11-ms1",
                          value:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                          line:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                        {
                          tiptapedit: false,
                          eid: "s11-ms2",
                          value: "Sonstiges",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s11-ms3",
                          on_which_to_show: "Sonstiges", // will have to look on which to show
                          line: "",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  name_edit:false,
                  total_fields: 4,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:4,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Enthalten die Preise jeweils die gültige gesetzliche Umsatzsteuer?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile. Hierzu sind Sie nur dann nicht verpflichtet, wenn Sie Kleinunternehmer iSd §19 UstG sind.",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                          line:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Kleinunternehmer iSd § 19 UstG",
                          line: "Kleinunternehmer iSd § 19 UstG",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Fallen Liefer- oder Versandkosten an? Wenn ja, wie hoch sind diese?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          line: "Höhe auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Hat der Kunde im Falle eines Widerrufs die Kosten für eine Rücksendung zu tragen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Laut Gesetz trägt grundsätzlich der Verbraucher die Kosten der Rücksendung, sofern der Unternehmer diesen über diese Kostentragungspflicht unterrichtet hat. Dies gilt dann nicht, wenn der Unternehmer sich ausdrücklich dazu bereit erklärt hat die Kosten zu tragen.",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  section_id_length:1,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s1",
                      editcontent: false,
                      statement:
                        "Wollen Sie die versandten Produkte bis zur vollständigen Zahlung in Ihrem Eigentum behalten?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Dies ist gängige Praxis, da hierdurch die Rückabwicklung im Falle einer unterbleibenden Zahlung erleichtert wird.",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: true,
                  isedited: false,
                  section_id_length:1,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "Europäische Streitschlichtungsplattform",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  section_id_length:1,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "Schlussbestimmungen",
                  name_edit:false,
                  total_fields: 2,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  section_id_length:2,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      editcontent: false,
                      eid: "s2",
                      statement:
                        "Unterliegen Sie speziellen Verhaltenskodizies?",
                      type: "radio",
                      length: 2,
                      value: "",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          statement:
                            "Unternehmenseigene oder sonstige Verhaltenskodizies (Name, Zweck, ggf. Domain zum Text des Verhaltenskodexes)",
                          line: "Verhaltenskodizies",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Unterschrift",
                  
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  section_id_length:0,
                  signaturedata: "",
                   signaturename:"",
                  signaturedate:null,
                  signatureposition:"center",
                   positionitem:[
      {label:"Links ",value:"start"},
      {label:"Mitte ",value:"center"},
      {label:"Rechts",value:"end"},
    ],
                  type :"signature_card",
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "Allgemeine Geschäftsbedingungen",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display: "<h2><strong>[[0]]</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: center; font-weight: 700; font-size: 18.72px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Vertragspartner</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s2-ms1",
                        "s3-ms1",
                        "s3-ms2",
                        "s3-ms3",
                        "s3-ms4",
                        "s3-ms5",
                        "s3-ms6",
                        "s3-ms7",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            "Vertragspartner des Kunden für die über den Amazon Shop [[0]] abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            { "s2-ms1": ["Frau", "Herr"] },
                            "s3-ms1",
                          ],
                          display: "<h2><strong>[[0]]  [[1]] </strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s3-ms1", "s3-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3", "s3-ms4"],
                          display: "<h2><strong>[[0]]  [[1]] </strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s3-ms3", "s3-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms5", "s3-ms6","s3-ms7"],
                          display: "<h2><strong>[[0]]  [[1]] [[2]]</strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s3-ms5", "s3-ms6","s3-ms7"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Vertragsschluss</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {"s1": "Ja"},
                        {"s1": "Nein"},
                        {"s2": "Ja"},
                        {"s2": "Nein"},
                        {"s3": "Ja"},
                        {"s3": "Nein"},
                        {"s4": "Ja"},
                        {"s4": "Nein"},
                        {"s5": "Ja"},
                        {"s5": "Nein"},
                        {"s11": "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers"},
                        {"s11": "Sonstiges"},
                        "s6-ms1",
                        {"s7": "Sprache wählen"},
                        {"s7": "Keine weitere Sprache"},
                        {"s8": "Ja"},
                        {"s8": "Nein"},
                        "s9-ms1",
                        "s10-ms1",
                        {"s11": "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers"},
                        {"s11": "Sonstiges"},
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die im Rahmen von ebay vorgebrachten Angebote des Anbieters stellen verbindliche Angebote für den Abschluss eines Kaufvertrages dar.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die im Rahmen von ebay vorgebrachten Angebote des Anbieters stellen unverbindliche Einladungen zur Abgabe eines Angebotes durch den Kunden dar.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Für den Abschluss des Vertrages stehen dem Kunden folgende Möglichkeiten offen:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "a) Der Kunde kann durch die Betätigung des Buttons „Sofort-Kaufen“ das Angebot des Anbieters direkt annehmen. Ein Kaufvertrag kommt in diesem Fall durch das Anklicken des „Sofort-Kaufen“-Buttons, sowie die anschließende Bestätigung zustande.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "b) Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der ebay GmbH: <a href= https://www.ebay.de/help/policies/member-behavior-policies/allgemeine-geschftsbedingungen-fr-die-nutzung-der-deutschen-ebaydienste?id=4259",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "a) Der Kunde kann die Artikel in den Warenkorb legen. Die Annahme erfolgt in diesem Fall durch den Abschluss des anschließenden Zahlungsvorgangs.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "b) Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der ebay GmbH: https://www.ebay.de/help/policies/member-behavior-policies/allgemeine-geschftsbedingungen-fr-die-nutzung-der-deutschen-ebaydienste?id=4259",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "c) Sofern der Anbieter die Option „Sofortige Bezahlung“ eröffnet, nimmt der Kunde das Angebot durch die Betätigung des Buttons, sowie den Abschluss des nachfolgenden Zahlungsvorgangs an.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde nimmt das Angebot des Anbieters durch die Abgabe eines Gebots an. Die Annahme ist dahingehend aufschiebend bedingt, dass der Kunde nach Ablauf der Angebotsdauer Höchstbietender ist. Ein Gebot erlischt, wenn ein anderer Kunde während der Angebotsdauer Höchstbietender ist.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der ebay GmbH: https://www.ebay.de/help/policies/member-behavior-policies/allgemeine-geschftsbedingungen-fr-die-nutzung-der-deutschen-ebaydienste?id=4259",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s6-ms1"],
                          display:
                            "Die Annahme des Vertragsangebots erfolgt über [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s6-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s7-ms3"],
                          display:
                            "Als Vertragssprache stehen deutsch [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s7: "Sprache wählen" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Die Vertragssprache ist Deutsch.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s7: "Keine weitere Sprache" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            {
                              "s8-ms3": [
                                "2 Jahre",
                                "5 Jahre ",
                                "10 Jahre ",
                              ],
                            },
                          ],
                          display:
                            "Der Vertragstext wird im Anschluss an den Vertragsschluss vom Anbieter gespeichert. Die Speicherung erfolgt für [[0]].",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s8: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertragsschluss wird vom Anbieter nicht gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s8: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s9-ms1"],
                          display:
                            "Der Kunde erhält den Vertragstext über [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s9-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s10-ms1"],
                          display:
                            "Der Vertragstext ist dem Kunden auch im Anschluss an den Vertragsschluss noch über [[0]] zugänglich.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s10-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Rahmen des Vertragsschlusses über den amazon-Warenkorb kann der Kunde seine Daten, nachdem er diese in das amazon-Formular eingegeben hat jederzeit löschen oder die Löschung der eingegebenen Daten durch das Schließen des Browsers erreichen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s11:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " Im Rahmen der „1-Click“-Bestelloption kann der Bestellvorgang über die Zurück-Funktion oder das Schließen des Browsers abgebrochen werden.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s11:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s11-ms3"],
                          display: "[[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s11: "Sonstiges" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Bezahlung</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1",{"s2": "Keine Besonderheiten [Angebote gegenüber Verbrauchern]"},
                        {"s2": "Kleinunternehmer iSd § 19 UstG"},
                        {"s3": "Ja"},
                        {"s3": "Nein"},
                        {"s4": "Ja"},
                        ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            " Als Zahlungsart steht/stehen dem Kunden [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die für die Waren angegebenen Preise enthalten die jeweils gültige gesetzliche Mehrwertsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s2:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Aufgrund der Kleinunternehmereigenschaft des Anbieters iSd § 19 UstG enthalten die angegebenen Preise keine Mehrwertsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        { s2: "Kleinunternehmer iSd § 19 UstG" },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3"],
                          display:
                            "Die Versandkosten betragen [[0]] je Bestellung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Wir liefern versandkostenfrei.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde hat im Falle eines Widerrufs die unmittelbaren Kosten der Rücksendung zu tragen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Eigentumsvorbehalt</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Bis zur vollständigen Bezahlung verbleiben die gelieferten Waren im Eigentum des Anbieters.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Gewährleistung</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "Europäische Streitschlichtungsplattform",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Europäische Streitschlichtungsplattform</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "Schlussbestimmungen",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Schlussbestimmungen</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" } , { s2: "Ja" }, { s2: "Nein" } ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbesondere des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_value_display: "",
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Speziellen Verhaltenskodizies unterliegen wir nicht.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_value_display: "",
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms3"],
                          display:
                            "Wir unterliegen den folgenden Verhaltenskodizies: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_value_display: "",
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                      contentedit: false,
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Unterschrift",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                   signaturename:"",
                  signaturedate:null,
                  signatureposition:"",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "Einwilligung Mitarbeiter_Fotos_Videos",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  name_edit:false,
                  total_fields: 6,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:5,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie bitte den vollständigen Namen Ihres Unternehmens an",
                      type: "textfield",
                      length: 2,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "Firmenname",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s1-ms2",
                          line: "Rechtsform",
                          value: "",
                          size: "col-4",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Sollen von den Personen Fotos oder Videos erstellt werden?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Fotos",
                          line: "Fotos",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Videos",
                          line: "Videos",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Geben Sie eine Addresse, eine Telefonnummer und eine E-Mail Addresse Ihres Unternehmens an",
                      type: "checkbox",
                      value: [],
                      length: 4,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          line: "Internetseite des Unternehmens",
                          value: " auf unserer Internetseite",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          line: "Social-Media-Kanäle",
                          value: " auf unseren Social-Media-Kanälen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          line: "Gedruckte Werbematerialien",
                          value: " auf gedruckten Werbematerialien",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms4",
                          line: "Pressemitteilungen",
                          value: " in Pressemitteilungen",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement: "",
                      type: "radio",
                      length: 1,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          on_which_to_show: 0,
                          line: "Sonstiges",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s5",
                      statement:
                        "Sollen die Namen der auf den Bildern abgebildeten Mitarbeiter unter dem Bild genannt werden?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Datenschutzhinweise",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:1,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie die Informationen des Verantwortlichen für die Datenverarbeitung an",
                      ishelp: true,
                      ishelpstatement:
                        'Bei dem "Verantwortlichen für Datenschutz" handelt es sich meist um ihr Unternehmen selbst.',
                      type: "textfield",
                      length: 8,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s1-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s1-ms3",
                          line: "Straße",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s1-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s1-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-3",
                        },
                        {
                          eid: "s1-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-9",
                        },
                        {
                          eid: "s1-ms7",
                          line: "Telefonnummer",
                          value: "",
                          size: "col-6",
                        },
                        {
                          eid: "s1-ms8",
                          line: "Email",
                          value: "",
                          size: "col-6",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Unterschrift",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                   signaturename:"",
                  signaturedate:null,
                  signatureposition:"center",
                  positionitem:[
      {label:"Links ",value:"start"},
      {label:"Mitte ",value:"center"},
      {label:"Rechts",value:"end"},
    ],
                  type :"signature_card",
                  section_id_length:0,
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "<h2><strong>Einwilligung in die Verwendung von Mitarbeiter [[0]]</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s1-ms2",
                        { s5: "Ja" },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700 ; font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s1-ms1",
                            "s1-ms2",
                            "s3",
                            "s4-ms2",
                            "s2",
                          ],
                          display:
                            "  Die [[0]] [[1]] beabsichtigt, zur Darstellung des Unternehmens [[2]] [[3]] [[4]] zu erstellen und zu veröffentlichen, auf denen Mitarbeiter zu sehen sind.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [], // if value is two times in string it should come two times in that array
                          display:
                            "Im Rahmen dieser Veröffentlichung sollen die abgebildeten Mitarbeiter auch vorgestellt werden. Hierdurch soll eine bessere Kundenbindung erreicht werden, indem die Kunden sich ein besseres Bild von ihrem Ansprechpartner machen können.",
                        },
                      ],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [], // if value is two times in string it should come two times in that array
                          display:
                            "Dabei erfolgt keine Nennung der Namen der abgebildeten Mitarbeiter und es werden nicht gezielt einzelne Mitarbeiter vorgestellt.",
                        },
                      ],
                      values_on_which_depend: [{ s5: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 5,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3", "s4-ms2", "s2"],
                          display:
                            "1. Ich willige ein, dass zu diesem Zweck die Videos, in denen ich zu sehen bin, [[0]] [[1]] auf unserer Internetseite abgebildet werden. Soweit sich aus den [[2]] Videos Hinweise auf meine ethnische Herkunft, Religion oder Gesundheit ergeben (z. B. Hautfarbe, Kopfbedeckung, Brille), bezieht sich meine Einwilligung auch auf diese Angaben.",
                        },
                      ],
                      values_on_which_depend: [ {"s5": "Ja"},
                        {"s5": "Nein"},],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "2. Mir ist bekannt, dass Informationen im Internet weltweit zugänglich sind, mit Suchmaschinen gefunden und mit anderen Informationen verknüpft werden können, woraus sich unter Umständen Persönlichkeitsprofile über mich erstellen lassen. Ins Internet gestellte Informationen, einschließlich Fotos, können problemlos kopiert und weiterverbreitet werden. Es gibt spezialisierte Archivierungsdienste, deren Ziel es ist, den Zustand bestimmter Websites zu bestimmten Terminen dauerhaft zu dokumentieren. Dies kann dazu führen, dass im Internet veröffentlichte Informationen auch nach ihrer Löschung auf der Ursprungs-Seite weiterhin aufzufinden sind.",
                        },
                      ],
                      values_on_which_depend: [ {"s5": "Ja"},
                        {"s5": "Nein"},],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "3. Die Einwilligung in die Nutzung zum oben genannten Zweck ist freiwillig. Wenn der Mitarbeiter in die Verwendung des [[0]] nicht einwilligt, so wirkt sich dies nicht negativ auf das Arbeitsverhältnis zwischen den Parteien aus.",
                        },
                      ],
                      values_on_which_depend: [ {"s5": "Ja"},
                        {"s5": "Nein"},],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                            "s2",
                            "s2",
                            "s2",
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                          ],
                          display:
                            "4. Ich kann meine Einwilligung jederzeit in Textform (z. B. Brief, E-Mail) widerrufen. [[0]], in denen ich erkennbar bin und die im Wesentlichen nur mich zeigen (z. B. beim Telefonieren oder bei einer typischen Tätigkeit), werden dann unverzüglich aus dem Internetangebot [[1]] [[2]] entfernt und nicht mehr für neue Drucksachen verwendet. Sofern ich auf einem der [[3]], zusammen mit anderen Personen abgebildet bin, müssen diese [[4]] nicht entfernt werden, sondern es genügt, wenn ich unverzüglich auf den [[5]] unkenntlich gemacht werde (z. B. durch Verpixelung). Bin ich auf einem der [[6]] zusammen mit anderen Personen abgebildet und möchte die [[7]] [[8]] die Möglichkeit zur Verpixelung nicht nutzen, beträgt die Frist für den Austausch des Fotos sechs Monate, bei einem Video 1 Jahr.",
                        },
                      ],
                      values_on_which_depend: [ {"s5": "Ja"},
                        {"s5": "Nein"},],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 5,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "____________________________" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "____________________________ ",
                        },
                      ],
                      values_on_which_depend: [ {"s5": "Ja"},
                        {"s5": "Nein"},],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Ort, Datum" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "Unterschrift",
                        },
                      ],
                      values_on_which_depend: [ {"s5": "Ja"},
                        {"s5": "Nein"},],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " __________________________________________________________________",
                        },
                      ],
                      values_on_which_depend: [ {"s5": "Ja"},
                        {"s5": "Nein"},],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Name in Druckbuchstaben</strong></h2>",
                        },
                      ],
                      values_on_which_depend: [ {"s5": "Ja"},
                        {"s5": "Nein"},],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Datenschutzhinweise",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Hinweise zum Datenschutz</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s1-ms2",
                        "s1-ms3",
                        "s1-ms4",
                        "s1-ms5",
                        "s1-ms6",
                        "s1-ms7",
                        "s1-ms8",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: center; font-weight: 700",
                      isStrong: true,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "1. Rechtsgrundlage für die Speicherung, sowie die Verarbeitung der vertragsgegenständlichen ist Ihre Einwilligung in Verbindung mit Art. 6 Abs. 1 S. 1 lit. a DSGVO.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "2. Verantwortlicher für die Speicherung und die Verarbeitung der vertragsgegenständlichen iSd DSGVO ist:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1", "s1-ms2"],
                          display: "<h2><strong>[[0]] [[1]]</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms3", "s1-ms4"],
                          display: "<h2><strong>[[0]] [[1]]</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms3", "s1-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms5", "s1-ms6"],
                          display: "<h2><strong>[[0]] [[1]]</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms5", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms7", "s1-ms8"],
                          display: "<h2><strong>[[0]] [[1]]</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms7", "s1-ms8"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "3. Die Speicherung und Verarbeitung der Videoserfolgt für die Dauer, die für Erreichung des oben dargestellten Nutzungszwecks erforderlich sind oder bis sie Ihre Einwilligung gemäß dieses Vertrages widerrufen haben.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "4. Nach den Regelungen des Bundesdatenschutzgesetzes und der Datenschutzgrundverordnung stehen Ihnen verschiedene Rechte in Bezug auf die vertragsgegenständlichen Videos zu:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(1) Aus Art. 15 Abs. 1 DSGVO haben Sie einen Anspruch auf konstenlose Auskunfserteilung über Ihre gespeicherten Daten, sowie gemäß Art. 15 Abs. 3 DSGVO das Recht auf eine Kopie dieser Datenaufstellung zu erhalten.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(2) Gemäß Art. 16 DSGVO stehen Ihnen auch ein Anspruch auf Berichtigung der von uns verarbeiteten Daten zu. Demnach sind Sie dazu berechtigt, Ihre Daten zu berichtigen oder vervollständigen, wenn sie falsch oder unvollständig sind.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(3) Gemäß Art. 17 DSGVO haben Sie das Recht, von uns die Löschung Ihrer von uns verarbeiteten personenbezogenen Daten zu verlangen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(4) Nach Art. 18 DSGVO können Sie von uns unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(5) Nach Art. 21 DSGVO haben Sie unter bestimmten Umständen ein Widerspruchsrecht gegen die Verarbeitung Sie betreffender personenbezogener Daten.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms8"],
                          display:
                            "(6) Möchten Sie ihre Rechte geltend machen, wenden Sie sich bitte per E-Mail an: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms8"],
                          display:
                            "(7) Gemäß Art. 77 DSGVO haben Sie dann, wenn Sie von unserer Datenverarbeitung selbst betroffen sind, das Recht Beschwerde bei einer Aufsichtsbehörde zu erheben, sofern Sie der Ansicht sind, dass unsere Verarbeitung von personenbezogenen Daten gegen die Datenschutzgrundverordnung (DSGVO) verstößt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Unterschrift",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                   signaturename:"",
                  signaturedate:null,
                  signatureposition:"",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "Einwilligung Fotos_Videos",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  name_edit:false,
                  total_fields: 5,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:4,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie bitte den vollständigen Namen Ihres Unternehmens an",
                      type: "textfield",
                      length: 2,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "Firmenname",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s1-ms2",
                          line: "Rechtsform",
                          value: "",
                          size: "col-4",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Sollen von den Personen Fotos oder Videos erstellt werden?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Fotos",
                          line: "Fotos",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Videos",
                          line: "Videos",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Geben Sie eine Addresse, eine Telefonnummer und eine E-Mail Addresse Ihres Unternehmens an",
                      type: "checkbox",
                      value: [],
                      length: 4,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          line: "Internetseite des Unternehmens",
                          value: " auf unserer Internetseite",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          line: "Social-Media-Kanäle",
                          value: "auf unseren Social-Media-Kanälen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          line: "Gedruckte Werbematerialien",
                          value: "auf gedruckten Werbematerialien",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms4",
                          line: "Pressemitteilungen",
                          value: " in Pressemitteilungen",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement: "",
                      type: "radio",
                      length: 1,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          on_which_to_show: 0,
                          line: "Sonstiges",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Datenschutzhinweise",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:1,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie die Informationen des Verantwortlichen für die Datenverarbeitung an",
                      type: "textfield",
                      length: 8,
                      ishelp: true,
                      ishelpstatement:
                        'Bei dem "Verantwortlichen für Datenschutz" handelt es sich meist um ihr Unternehmen selbst.',
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s1-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s1-ms3",
                          line: "Straße",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s1-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s1-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-3",
                        },
                        {
                          eid: "s1-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-9",
                        },
                        {
                          eid: "s1-ms7",
                          line: "Telefonnummer",
                          value: "",
                          size: "col-6",
                        },
                        {
                          eid: "s1-ms8",
                          line: "Email",
                          value: "",
                          size: "col-6",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Unterschrift",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                   signaturename:"",
                  signaturedate:null,
                  signatureposition:"center",
                  positionitem:[
      {label:"Links ",value:"start"},
      {label:"Mitte ",value:"center"},
      {label:"Rechts",value:"end"},
    ],
                  type :"signature_card",
                  section_id_length:0,
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "<h2><strong>Einwilligung in die Verwendung von Mitarbeiter [[0]]</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700 ; font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s1-ms1",
                            "s1-ms2",
                            "s3",
                            "s4-ms2",
                            "s2",
                          ],
                          display:
                            "  Die [[0]] [[1]] beabsichtigt, zur Darstellung des Unternehmens [[2]] [[3]] [[4]] zu erstellen und zu veröffentlichen, auf denen Mitarbeiter zu sehen sind.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3", "s4-ms2", "s2"],
                          display:
                            "1. Ich willige ein, dass zu diesem Zweck die Videos, in denen ich zu sehen bin, [[0]] [[1]] auf unserer Internetseite abgebildet werden. Soweit sich aus den [[2]] Videos Hinweise auf meine ethnische Herkunft, Religion oder Gesundheit ergeben (z. B. Hautfarbe, Kopfbedeckung, Brille), bezieht sich meine Einwilligung auch auf diese Angaben.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "2. Mir ist bekannt, dass Informationen im Internet weltweit zugänglich sind, mit Suchmaschinen gefunden und mit anderen Informationen verknüpft werden können, woraus sich unter Umständen Persönlichkeitsprofile über mich erstellen lassen. Ins Internet gestellte Informationen, einschließlich Fotos, können problemlos kopiert und weiterverbreitet werden. Es gibt spezialisierte Archivierungsdienste, deren Ziel es ist, den Zustand bestimmter Websites zu bestimmten Terminen dauerhaft zu dokumentieren. Dies kann dazu führen, dass im Internet veröffentlichte Informationen auch nach ihrer Löschung auf der Ursprungs-Seite weiterhin aufzufinden sind.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "3. Die Einwilligung in die Nutzung zum oben genannten Zweck ist freiwillig. Wenn der Mitarbeiter in die Verwendung des [[0]] nicht einwilligt, so wirkt sich dies nicht negativ auf das Arbeitsverhältnis zwischen den Parteien aus.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                            "s2",
                            "s2",
                            "s2",
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                          ],
                          display:
                            "4. Ich kann meine Einwilligung jederzeit in Textform (z. B. Brief, E-Mail) widerrufen. [[0]], in denen ich erkennbar bin und die im Wesentlichen nur mich zeigen (z. B. beim Telefonieren oder bei einer typischen Tätigkeit), werden dann unverzüglich aus dem Internetangebot [[1]] [[2]] entfernt und nicht mehr für neue Drucksachen verwendet. Sofern ich auf einem der [[3]], zusammen mit anderen Personen abgebildet bin, müssen diese [[4]] nicht entfernt werden, sondern es genügt, wenn ich unverzüglich auf den [[5]] unkenntlich gemacht werde (z. B. durch Verpixelung). Bin ich auf einem der [[6]] zusammen mit anderen Personen abgebildet und möchte die [[7]] [[8]] die Möglichkeit zur Verpixelung nicht nutzen, beträgt die Frist für den Austausch des Fotos sechs Monate, bei einem Video 1 Jahr.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 5,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "____________________________" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "____________________________ ",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Ort, Datum" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "Unterschrift",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " __________________________________________________________________",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Name in Druckbuchstaben</strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Datenschutzhinweise",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Hinweise zum Datenschutz</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s1-ms2",
                        "s1-ms3",
                        "s1-ms4",
                        "s1-ms5",
                        "s1-ms6",
                        "s1-ms7",
                        "s1-ms8",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: center; font-weight: 700",
                      isStrong: true,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "1. Rechtsgrundlage für die Speicherung, sowie die Verarbeitung der vertragsgegenständlichen ist Ihre Einwilligung in Verbindung mit Art. 6 Abs. 1 S. 1 lit. a DSGVO.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "2. Verantwortlicher für die Speicherung und die Verarbeitung der vertragsgegenständlichen iSd DSGVO ist:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1", "s1-ms2"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms3", "s1-ms4"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms3", "s1-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms5", "s1-ms6"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms5", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms7", "s1-ms8"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms7", "s1-ms8"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "3. Die Speicherung und Verarbeitung der Videoserfolgt für die Dauer, die für Erreichung des oben dargestellten Nutzungszwecks erforderlich sind oder bis sie Ihre Einwilligung gemäß dieses Vertrages widerrufen haben.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "4. Nach den Regelungen des Bundesdatenschutzgesetzes und der Datenschutzgrundverordnung stehen Ihnen verschiedene Rechte in Bezug auf die vertragsgegenständlichen Videos zu:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(1) Aus Art. 15 Abs. 1 DSGVO haben Sie einen Anspruch auf konstenlose Auskunfserteilung über Ihre gespeicherten Daten, sowie gemäß Art. 15 Abs. 3 DSGVO das Recht auf eine Kopie dieser Datenaufstellung zu erhalten.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(2) Gemäß Art. 16 DSGVO stehen Ihnen auch ein Anspruch auf Berichtigung der von uns verarbeiteten Daten zu. Demnach sind Sie dazu berechtigt, Ihre Daten zu berichtigen oder vervollständigen, wenn sie falsch oder unvollständig sind.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(3) Gemäß Art. 17 DSGVO haben Sie das Recht, von uns die Löschung Ihrer von uns verarbeiteten personenbezogenen Daten zu verlangen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(4) Nach Art. 18 DSGVO können Sie von uns unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(5) Nach Art. 21 DSGVO haben Sie unter bestimmten Umständen ein Widerspruchsrecht gegen die Verarbeitung Sie betreffender personenbezogener Daten.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms8"],
                          display:
                            "(6) Möchten Sie ihre Rechte geltend machen, wenden Sie sich bitte per E-Mail an: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms8"],
                          display:
                            "(7) Gemäß Art. 77 DSGVO haben Sie dann, wenn Sie von unserer Datenverarbeitung selbst betroffen sind, das Recht Beschwerde bei einer Aufsichtsbehörde zu erheben, sofern Sie der Ansicht sind, dass unsere Verarbeitung von personenbezogenen Daten gegen die Datenschutzgrundverordnung (DSGVO) verstößt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Unterschrift",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                   signaturename:"",
                  signaturedate:null,
                  signatureposition:"",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "Einwilligung Fotos_Videos Veranstaltungen",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  name_edit:false,
                  total_fields: 12,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section_id_length:6,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie bitte den vollständigen Namen Ihres Unternehmens an",
                      type: "textfield",
                      length: 2,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          line: "Firmenname",
                          value: "",
                          size: "col-8",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          line: "Rechtsform",
                          value: "",
                          size: "col-4",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Sollen von den Personen Fotos oder Videos erstellt werden?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Fotos",
                          line: "Fotos",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Videos",
                          line: "Videos",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Geben Sie eine Addresse, eine Telefonnummer und eine E-Mail Addresse Ihres Unternehmens an",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s3-ms1",
                          line: "Straße",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s3-ms2",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s3-ms3",
                          line: "PLZ",
                          value: "",
                          size: "col-3",
                        },
                        {
                          eid: "s3-ms4",
                          line: "Ort",
                          value: "",
                          size: "col-9",
                        },
                        {
                          eid: "s3-ms5",
                          line: "Telefonnummer",
                          value: "",
                          size: "col-6",
                        },
                        {
                          eid: "s3-ms6",
                          line: "Email",
                          value: "",
                          size: "col-6",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      editcontent: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Geben Sie eine Addresse, eine Telefonnummer und eine E-Mail Addresse Ihres Unternehmens an",
                      type: "checkbox",
                      value: [],
                      length: 4,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          line: "Internetseite des Unternehmens",
                          value: " auf unserer Internetseite",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          line: "Social-Media-Kanäle",
                          value: " auf unseren Social-Media-Kanälen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms3",
                          line: "Gedruckte Werbematerialien",
                          value: " auf gedruckten Werbematerialien",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms4",
                          line: "Pressemitteilungen",
                          value: " in Pressemitteilungen",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      editcontent: false,
                      tiptapedit: false,
                      eid: "s5",
                      statement: "",
                      type: "radio",
                      length: 1,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s5-ms1",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          eid: "s5-ms2",
                          on_which_to_show: 0,
                          line: "Sonstiges",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      editcontent: false,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s6",
                      statement:
                        "Geben Sie bitte den vollständigen Namen Ihres Unternehmens an",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s6-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Unterschrift",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                   signaturename:"",
                  signaturedate:null,
                  signatureposition:"center",
                  positionitem:[
      {label:"Links ",value:"start"},
      {label:"Mitte ",value:"center"},
      {label:"Rechts",value:"end"},
    ],
                  type :"signature_card",
                  section_id_length:0,
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "<h2><strong>Einwilligungserklärung zur Verwendung von [[0]] von Veranstaltungen</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700 ; font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s1-ms1",
                            "s1-ms2",
                            "s3-ms1",
                            "s3-ms2",
                            "s3-ms3",
                            "s3-ms4",
                            "s3-ms5",
                            "s3-ms6",
                            "s2",
                            "s4",
                            "s5-ms2",
                          ],
                          display:
                            " Ich willige ein, dass zu Werbezwecken der [[0]] , [[1]] , [[2]] ,  [[3]] , [[4]] , [[5]] , [[6]] , [[7]] , in denen ich zu sehen bin, [[8]] [[9]] [[10]].Dabei erfolgt keine Nennung der Namen der abgebildeten Personen  Soweit sich aus den pop Hinweise auf meine ethnische Herkunft, Religion oder Gesundheit ergeben (z. B. Hautfarbe, Kopfbedeckung, Brille), bezieht sich  meine Einwilligung auch auf diese Angaben.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                          ], // if value is two times in string it should come two times in that array
                          display:
                            "Ich kann meine Einwilligung jederzeit in Textform (z. B. Brief, E-Mail) widerrufen.Die  [[0]], in denen ich erkennbar bin und die im Wesentlichen nur mich zeigen (z. B. beim Telefonieren oder bei einer typischen Tätigkeit), werden dann unverzüglich aus dem Internetangebot der [[1]] [[2]]  entfernt und nicht mehr für neue Drucksachen verwendet. Bin ich auf den [[3]], zusammen mit anderen Personen abgebildet und möchte die [[4]] [[5]] die Möglichkeit zur Verpixelung nicht nutzen, beträgt die Frist für den Austausch der Fotos 6 Monate, bei einem Video 1 Jahr. ",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 5,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "____________________________" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "____________________________ ",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Ort, Datum" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "Unterschrift",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " __________________________________________________________________",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Name in Druckbuchstaben</strong></h2>",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s6-ms1"],
                          display:
                            "Zusätzliche Informationen: Bei der Verwendung von 8 auf denen Sie abgebildet sind, haben sie nach Art. 13 DSGVO verschiedene Betroffenenrechte, wie etwa einen Auskunftsanspruch oder einen Löschungsanspruch. Näheres hierzu finden Sie unter [[0]]",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                      contentedit: false,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Unterschrift",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                   signaturename:"",
                  signaturedate:null,
                  signatureposition:"",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
      ];
      for (var i = 0; i < admin_data.length; i++) {
        if (i == 0) {
          var j = 0;
          for (j; j < maincontracts.length; j++) {
            var contract_title = maincontracts[j];
            store.commit("contractsavefunc", {
              title: contract_title,
            });
            store.commit("versionsavefunc", {
              title: contract_title,
            });
          }
          for (j = 0; j < contract_card_details.length; j++) {
            store.commit("contractcardsavefunc", {
              title: contract_card_details[j].contract_title,
              document: contract_card_details[j].document,
            });
          }
          // var a = {
          //   'contract' : [],
          //   'user_from_group': [],
          //   'group': [],
          //   'user_from_benutzer': [],
          // }
          //store.commit('deletedsavefunc',a)
        }
        store.commit("adminsavefunc", {
          name: admin_data[i].name,
          email: admin_data[i].email,
          password: admin_data[i].password,
          is_superuser: admin_data[i].is_superuser,
          is_admin: admin_data[i].is_admin,
          admin_version: admin_data[i].admin_version,
        });
      }
      store.dispatch("updatewritejson");
    }
     this.$router.push({ path: "/" }).catch(()=>{});
    },
    
    importieren(x){
      if(x === 'Vertrag & Abschnitt importieren'){
        // console.log("p")
        this.items=[];
        for (var i = 0; i < store.state.contract_card_details.length; i++) {
          this.items.push(store.state.contract_card_details[i].contract_name);
        }
        this.items_search = this.items;
        // console.log(this.items_search)
          // this.Vertrag_Abschnitt_importieren=!this.Vertrag_Abschnitt_importieren;
      }
      else if(x !== 'Vertrag & Abschnitt importieren'){
      //  console.log("pd")
      }
    },
    // pdftoimage(){
    //   console.log("A")
    //   let filePath = dialog.showOpenDialogSync({
    //     title: "Select the File to Open",
    //     defaultPath: "./",
    //     buttonLabel: "Open",
    //     filters: [{ name: "pdf", extensions: ["pdf"] }],
    //     properties: [],
    //   });
    //   var k= fs.readFileSync(filePath[0])
    //   console.log(k)
    //   var k1 = k.toString('base64')
    //   console.log(k1)
    //   fs.writeFileSync("./test.png",k1)
    //   console.log("2")
    // },
    ismail() {
      let filePath = dialog.showOpenDialogSync({
        title: "Select the File to Open",
        defaultPath: "./",
        buttonLabel: "Open",
        filters: [{ name: "png", extensions: ["png"] }],
        properties: [],
      });
      var k= fs.readFileSync(filePath[0])
      const worker = createWorker({
        // cachePath: path.join(process.cwd(), 'lang-data'),
        logger: (m) => console.log(m),
      });
      (async () => {
        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        const { data: { text } } = await worker.recognize(k)
        console.log(text)
        await worker.terminate();
      })();
    },
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
    // testhasan() {
    //   this.$store.commit("addsecondwindow", true);
    //   //  Vue.prototype.$secondwindow = true;
    //   //  alert(this.$secondwindow)

    //   ipcRenderer.send("openTaskForm");
    //   //    const BrowserWindow = electron.remote.BrowserWindow;
    //   // const win = new BrowserWindow({ width: 800, height: 600 })
    //   // const filepathlocal = path.join(__dirname, '../index.html');
    //   // // Load a remote URL
    //   // win.loadURL(process.env.WEBPACK_DEV_SERVER_URL+'/#/amazon')
    //   //        const BrowserWindow = electron.remote.BrowserWindow;
    //   //        let win = BrowserWindow.getFocusedWindow();
    //   //        const filepathlocal = path.join(__dirname, '../kiki/page.html');
    //   //       //  console.log(filepathlocal)
    //   //         win.webContents.fromId().savePage(filepathlocal, 'HTMLComplete').then(() => {
    //   //     console.log('Page was saved successfully.')
    //   // }).catch(err => {
    //   //     console.log(err);
    //   // });
    //   //   let file = new File([document.documentElement.innerHTML]
    //   //          , "file-" + new Date().getTime() + ".html"
    //   //          , {type:"text/html", lastModified:new Date().getTime()});
    //   //          var a = document.createElement("a");
    //   // a.href = URL.createObjectURL(file);
    //   // a.download = "your-download-here.html";
    //   // a.hidden = true;
    //   // document.body.appendChild(a);
    //   // a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
    //   // a.click();
    // },
  importcardfromanothercomponenttwoways(card_name, contract_name, checkboxvalue){
      var value;
      var leftrightobj_MAJOR = new Array();
      var local_array = [];
      if(checkboxvalue.length >0){
        local_array = checkboxvalue
      }
      if(card_name!== ""){
        if(!checkboxvalue.includes(card_name)){
          local_array.push(card_name)
        }
      }
      for(var i=0; i< local_array.length ;  i++){
       value = this.importcardfromanothercomponent(local_array[i],contract_name)
       leftrightobj_MAJOR.push(value)
      }
      // console.log(leftrightobj_MAJOR)
      store.commit('importcontract',leftrightobj_MAJOR)
      this.card_name = "";
      this.contract_name = "";
      this.checkboxvalue = [];
      this.items3checkbox=[];
    },
    importcardfromanothercomponent(card_name, contract_name) {
      var leftrightobj = new Array();
      
      var obj, obj2, left_copy_of_card, right_copy_of_card;
      if (card_name !== "" && contract_name !== "") {
        for (var i = 0; i < store.state.contract_card_details.length; i++) {
          if (
            this.contract_name ===
            store.state.contract_card_details[i].contract_name
          ) {
            store.commit("addcontractimportcounter",[contract_name,card_name])
            obj = store.state.contract_card_details[
              i
            ].document.leftSide.card.find((o) => o.name === card_name);
            obj2 = store.state.contract_card_details[
              i
            ].document.rightSide.card.find((o) => o.name === card_name);
            break;
          }
        }
        left_copy_of_card = JSON.parse(JSON.stringify(obj));
        left_copy_of_card.id = null;
        left_copy_of_card.isactive = false;
        left_copy_of_card.import_counter = 0;
        right_copy_of_card = JSON.parse(JSON.stringify(obj2));
        right_copy_of_card.id = null;
        leftrightobj.push(left_copy_of_card);
        leftrightobj.push(right_copy_of_card);
        return leftrightobj
      }
      // this.card_name = "";
      // this.contract_name = "";
    },
    eyefunction() {
      if (this.eyecheck === false) {
        store.commit("seteyecheck", true);
      } else if (this.eyecheck === true) {
        store.commit("seteyecheck", false);
      }
    },
    add_value_in_contract_title(value) {
      this.title = "Contract Vertrag" + value;
      this.title2 = this.title;
    },
    save_contract_title() {
      this.text_field_opener = false;
      if (this.title.length === 0) {
        //this.title = this.title2
        this.title = "Contract Vertrag";
      } else {
        var contract_check = store.getters.checkByContractTitle(this.title);
        if (contract_check.length != 0) {
          this.title = "Contract Vertrag";
        } else {
          bus.$emit("newcontracttitle", this.title);
        }
      }
    },
    open_text_field() {
      this.text_field_opener = true;
    },
   empty(array){
while(array.length > 0) {
    array.pop();
}
   },
  dohtml_test(){
  //   var col = "#85C186"
  //   var amt = 75

  //   var usePound = false;
  
  //   if (col[0] == "#") {
  //       col = col.slice(1);
  //       usePound = true;
  //   }
 
  //   var num = parseInt(col,16);
 
  //   var r = (num >> 16) + amt;
 
  //   if (r > 255) r = 255;
  //   else if  (r < 0) r = 0;
 
  //   var b = ((num >> 8) & 0x00FF) + amt;
 
  //   if (b > 255) b = 255;
  //   else if  (b < 0) b = 0;
 
  //   var g = (num & 0x0000FF) + amt;
 
  //   if (g > 255) g = 255;
  //   else if (g < 0) g = 0;
 
  //  this.testcolor = (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16)
  //   // return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  //  console.log(this.testcolor)


    },

    dohtml() {
      // const BrowserWindow = electron.remote.BrowserWindow;
      // let win = BrowserWindow.getAllWindows()[0]
      // win.webContents.savePage('./tmp/test.html', 'HTMLComplete').then(() => {
      //   console.log('Page was saved successfully.')
      // }).catch(err => {
      //   console.log(err);
      // });

      // var mimeType = 'text/html';
      // var filename =  'tags.html';
      // var id = 'printme2'
      // var elHtml = document.getElementById(id).;
      // var link = document.createElement('a');
      // mimeType = mimeType || 'text/plain';
      // link.setAttribute('download', filename);
      // link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
      // link.click();

      var htmlContent = document.getElementById("printme2").innerHTML;
      //var htmlContent = [ "<head><meta charset='utf-8'><title>Test</title></head>", "<style>.container{max-width: 940px;margin: 0 auto;}</style>", "<body><div class="container">'Content Here'</div></body>"];
      var bl = new Blob(htmlContent, { type: "text/html" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(bl);
      a.download = "your-download-name-here.html";
      a.hidden = true;
      document.body.appendChild(a);
      a.innerHTML =
        "something random - nobody will see this, it doesn't matter what you put here";
      a.click();
    },
    test1() {
      let filePath = dialog.showOpenDialogSync({
        title: "Select the File to Open",
        defaultPath: "./",
        buttonLabel: "Open",
        filters: [{ name: "JSON", extensions: ["json"] }],
        properties: [],
      });
      //console.log(filePath)
      let data = JSON.parse(
        fs.readFileSync(filePath[0], { encoding: "utf8", flag: "r" })
      );
      //console.log(data)
      //console.log(data.name)
      //this.example  = data
      bus.$emit("newchange3", data);
    },
    back() {
      var count = 1;
      store.commit("settitlenewcontract", false);
      this.title = "Contract Vertrag";
      this.$store.commit("setHelp", false);
      this.$store.commit("setEdit", false);
      if (store.state.Papierkorbadmin === true) {
        count = count + 1;
      }
      if (store.state.Benutzeradmin === true) {
        count = count + 1;
      }
      if (count === 1) {
        this.$store.commit("setnavbardashboardicon", true);
        
      }
      this.$store.commit("setnavbarcontractcreatoricon", false);
      this.$contractopencreator = false;
      this.$store.commit("set_group_component", false);
      localStorage.removeItem("opened_contract")
      this.$router.push({ path: "/contracts" }).catch(()=>{});
      //  this.edit1=false;
    },
     back_2() {
      var count = 1;
      store.commit("settitlenewcontract", false);
      this.title = "Contract Vertrag";
      this.$store.commit("setHelp", false);
      this.$store.commit("setEdit", false);
      if (store.state.Papierkorbadmin === true) {
        count = count + 1;
      }
      if (store.state.Benutzeradmin === true) {
        count = count + 1;
      }
      if (count === 1) {
        this.$store.commit("setnavbardashboardicon", true); 
      }
      this.$store.commit("setnavbarcontractcreatoricon", false);
      this.$contractopencreator = false;
      this.$store.commit("set_group_component", false);
      var cnt = localStorage.getItem("opened_contract")
      if(cnt){
        this.$store.commit("setnavbardashboardicon", false);
        // localStorage.removeItem("opened_contract")
        this.$router.push({ path: "/amazon" }).catch(()=>{});
      }
      else{
        this.$router.push({ path: "/contracts" }).catch(()=>{});
      }
            //  this.edit1=false;
    },
    back_dashboardadmin() {
      this.$store.commit("setzuletztbearbeitetadmincheck", false);
      this.$store.commit("setArbeitsbereicheadmincheck", false);
      this.$store.commit("setBenutzeradmincheck", false);
      this.$store.commit("setPapierkorbadmincheck", false);
      this.$store.commit("setDashboardadmincheck", true);
      store.commit("settitlenewcontract", false);
      this.$store.commit("setnavbardashboardicon", true);
      this.$store.commit("setnavbarcontractcreatoricon", false);
      this.title = "Contract Vertrag";
      this.$store.commit("setHelp", false);
      this.$store.commit("setEdit", false);
      this.$contractopencreator = false;
      localStorage.removeItem("opened_contract")
      this.$router.push({ path: "/contracts" }).catch(()=>{});
      // this.edit1=false;
    },
    clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          // Chrome
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) {
          // Firefox
          window.getSelection().removeAllRanges();
        }
      } else if (document.selection) {
        // IE
        document.selection.empty();
      }
    },
    writeToFile(value) {
      if (value === "PDF Dokument") {
        let file_name = "Portable Document Format";
        let file_extension = "pdf";
        localStorage.setItem("print_type", file_name);
        localStorage.setItem("print_extension", file_extension);
        
      } else if (value === "ODT-UTF8") {
        let file_name = "Open Document Text";
        let file_extension = "odt";
        localStorage.setItem("print_type", file_name);
        localStorage.setItem("print_extension", file_extension);
        localStorage.setItem("odt_extension", "utf8");
      } else if (value === "Open Office Dokument") {
        let file_name = "Open Document Text";
        let file_extension = "odt";
        localStorage.setItem("print_type", file_name);
        localStorage.setItem("print_extension", file_extension);
        localStorage.setItem("odt_extension", "ascii");
      } else if (value === "Word Dokument") {
        
        var header =
          "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
          "xmlns:w='urn:schemas-microsoft-com:office:word' " +
          "xmlns='http://www.w3.org/TR/REC-html40%27%3E%22'" +
          "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        var footer = "</body></html>";
        var sourceHTML =
          header + document.getElementById("printme").innerHTML + footer;

        var source =
          "data:application/vnd.ms-word;charset=utf-8," +
          encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download =
          localStorage.getItem("current_contract_title") + ".doc";
        fileDownload.click();
        document.body.removeChild(fileDownload);
        return;
      }
      //selecting div text

      /* select image */
      // var s = window.getSelection();
      // var range = document.createRange();
      // console.log(this.document.rightSide.signaturedata)
      // range.selectNode(this.document.rightSide.signaturedata);
      //  range.selectNode(document.getElementById("printme"));
      // s.addRange(range);
      // s.removeAllRanges();
      // this.innerHTML = "Deselect";

      var range = document.createRange();
      range.selectNode(document.getElementById("printme"));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      //printing starts
      const BrowserWindow = electron.remote.BrowserWindow;
      // console.log(BrowserWindow);
      var options = {
        marginsType: 0,
        pageSize: "A4",
        printBackground: true,
        printSelectionOnly: true, //must true
        landscape: false,
      };
      // console.log(options);
      let win = BrowserWindow.getFocusedWindow();

      dialog
        .showSaveDialog({
          title: "Select the File Path to save",
          defaultPath: "./" + localStorage.getItem("current_contract_title"),
          buttonLabel: "Save",
          filters: [
            {
              name: localStorage.getItem("print_type"),
              extensions: [localStorage.getItem("print_extension")],
            },
          ],
          properties: [],
        })
        .then((file) => {
          if (!file.canceled) {
            if (localStorage.getItem("print_extension") === "pdf") {
              win.webContents
                .printToPDF(options)
                .then((data) => {
                  fs.writeFileSync(file.filePath.toString(), data );
                })
                .catch((error) => {
                  console.log(error);
                });
            } else if (localStorage.getItem("print_extension") === "odt") {
              fs.writeFileSync(
                file.filePath.toString(),
                document.getElementById("printme").innerHTML,
                {
                  encoding: localStorage.getItem("odt_extension").toString(),
                  flag: "a+",
                  mode: 0o666,
                }
              );
            }
            //       else if(localStorage.getItem("print_extension") === 'doc'){
            //         fs.writeFile(file.filePath.toString(), document.getElementById('printme').innerHTML, function (err) {
            //         if (err) {
            //           console.log(err);
            //         } else {
            //           console.log('Generated Successfully');
            //         }
            // });
            //       }
            localStorage.removeItem("print_type");
            localStorage.removeItem("print_extension");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    T1() {
      this.$router.push({ path: "/contracts" }).catch(()=>{});
    },
    T2() {
      this.$router.push({ path: "/" }).catch(()=>{});
    },

    fun(x) {
      if (x === "contracts") {
        this.T1();
      } else if (x === "mainpage") {
        this.T2();
      }
    },
    helpf() {
      this.help1 = !this.help1;
      this.$store.commit("setHelp", this.help1);
    },
    editf() {
      // this.edit1 = !this.edit1;
      // this.$store.commit("setEdit", this.edit1);

      this.$store.commit("setnavbardashboardicon", false);
      this.$store.commit("setnavbarcontractcreatoricon", true);
      store.commit("settitlenewcontract", true);
      this.$router.push({ path: "/newcontractcreate" }).catch(()=>{});
    },
    logout() {
      store.commit("settitlenewcontract", false);
      this.$store.commit("setIsSuperUser", false);
      this.$store.commit("setnavbarcontractcreatoricon", false);
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
      localStorage.removeItem("opened_contract")
      this.$router.push({ path: "/" }).catch(()=>{});
    },
    changemaincolorfunct(color) {
      // this.$maincolor = color;
      if (color === "#EAAD35") {
        var color1 = ["#EAAD35", "#FBEFD7"];
        store.commit("changemaincolor", color1);
      } else {
        var color2 = ["#41BB95", "#D9F1EA"];
        store.commit("changemaincolor", color2);
      }
      store.dispatch("updatewritejson");
    },
  },
};

</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:200,300,400,600,700,800,900");

@-webkit-keyframes shake {
    0% { -webkit-transform: translate(2px, 1px) rotate(0deg); } 
    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }
    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); }
    30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }
    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); }
    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); }
    70% { -webkit-transform: translate(2px, 1px) rotate(-1deg); }
    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); }
    90% { -webkit-transform: translate(2px, 2px) rotate(0deg); }
    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); }
}
.shake {
    -webkit-animation-name: shake;
    -webkit-animation-duration: 1s;
    -webkit-transform-origin:50% 50%;
    -webkit-animation-iteration-count: 1;
}
// .shake:hover {
//     -webkit-animation-name: shake;
//     -webkit-animation-duration: 0.5s;
//     -webkit-transform-origin:50% 50%;
//     -webkit-animation-iteration-count: infinite;
// }
.my-avatar-menu {
  margin-top: 2px;
  margin-left: -3px;
  contain: initial;
  overflow: visible;
  border-radius: 15px 15px 15px 15px;
}
.my-list-menuside {
  margin-top: 165px;
  margin-left: -3px;
  contain: initial;
  overflow: visible;
  border-radius: 15px 15px 15px 15px;
}
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
.my-list-menu {
  margin-top: 4px;
  margin-left: -3px;
  contain: initial;
  overflow: visible;
  border-radius: 15px 15px 15px 15px;
}
.Importieren-menu {
  margin-top: -9px;
  /* margin-left:-57px ; */
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
  border-style: none !important;
}
</style>



<template>
  <v-container >
     
      <v-row justify="center" class="mt-15">
          <v-btn @click="savehtml()">save as html</v-btn>
      </v-row>
        <v-expansion-panels class="mt-5">
        <div  style="width:50vw !important;min-height:2.5vw !important;"
           v-for="item in document.leftSide.card"
                    :key="item.id" class="mt-3 mb-2">
            <v-expansion-panel >
                <v-expansion-panel-header
                v-on:click="disable_and_enable_properties(item)"
                        >
                          <template v-slot:actions>
              <v-icon>
               
              </v-icon>
                          </template>
                          <div style="padding-left: 2%">
                            
                            <v-icon
                              v-if="item.isactive === false"
                              color="#d8d8d8"
                              style="font-size: 10px"
                             
                              >mdi-checkbox-blank-circle
                            </v-icon>
                            
                            <v-icon
                              v-if="item.isactive === true"
                              :color="maincolor.theme"
                              style="font-size: 10px"
                           
                              >mdi-checkbox-blank-circle
                            </v-icon>
                          </div>

                          <strong>{{
                            item.name | truncateEnd(36, "...")
                          }}</strong>
                          <div
                            style="position: absolute; right: 15px; top: 13px"
                            v-if="item.completed_fields === 0"
                          >
                            <v-chip
                              class=""
                              color="#606060"
                              style="width: 7em; height: 1.8em"
                              small
                            >
                              <p
                                class="pt-4 pl-5"
                                style="color: white;"
                                v-if="item.total_fields < 9"
                              >
                                {{ item.completed_fields }} /
                                {{ item.total_fields }}
                              </p>
                              <p
                                class="pt-4 pl-5"
                                style="color: white;"
                                v-if="item.total_fields > 9"
                              >
                                {{ item.completed_fields }} /{{
                                  item.total_fields
                                }}
                              </p>
                            </v-chip>
                          </div>
                          <div
                            style="position: absolute; right: 15px; top: 13px"
                            v-if="item.completed_fields !== 0"
                          >
                            <v-chip
                              class=""
                              :color="maincolor.theme"
                              style="width: 7em; height: 1.8em"
                              small
                            >
                              <p
                                class="pt-4 pl-5"
                                style="color: white"
                                v-if="item.total_fields < 9"
                              >
                                {{ item.completed_fields }} /
                                {{ item.total_fields }}
                              </p>
                              <p
                                class="pt-4 pl-5"
                                style="color: white"
                                v-if="item.total_fields > 9"
                              >
                                {{ item.completed_fields }} /{{
                                  item.total_fields
                                }}
                              </p>
                            </v-chip>
                          </div>
                        </v-expansion-panel-header>
                <v-expansion-panel-content>
                          <div
                            style=""
                            class=""
                            v-for="(item1, j) in item.section"
                            :key="j"
                          >
                            <div v-if="!item1.ishelp" class="">
                               <p
                              style="word-break: break-word"
                              :inner-html.prop="item1.statement"
                            ></p>
                            </div>
                            <div v-if="item1.ishelp">
                              <div v-if="help" style="display: flex">
                                 <p
                              style="word-break: break-word"
                              :inner-html.prop="item1.statement"
                            ></p>
                                <v-menu offset-x width="300" rounded="lg">
                                  <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" icon class="mt-n2">
                                      <v-icon
                                        color="black"
                                        style="transform: rotate(180deg)"
                                        >mdi-alert-circle-outline</v-icon
                                      >
                                    </v-btn>
                                  </template>
                                  <v-card
                                    elevation="0"
                                    width="300"
                                    rounded="lg"
                                    class="expand ma-0 pa-0"
                                    min-height="80"
                                    color="white"
                                    outlined
                                  >
                                    <v-card-text class="ma-0 pa-0">
                                      <v-list>
                                        <v-list-item>
                                          <p
                                            style="text-align:left"
                                            class=""
                                          >
                                            {{ item1.ishelpstatement }}
                                          </p>
                                        </v-list-item>
                                      </v-list>
                                    </v-card-text>
                                  </v-card>
                                </v-menu>
                              </div>
                            </div>
                            <div v-if="item1.ishelp" class="">
                              <div v-if="!help">
                                <p
                              style="word-break: break-word"
                              :inner-html.prop="item1.statement"
                            ></p>
                              </div>
                            </div>
                            <div class="row" v-if="item1.type === 'textfield'">
                              <div
                                style=""
                                :class="item2.size"
                                v-for="(item2, k) in item1.fields"
                                :key="k"
                              >
                                <v-text-field
                                  rounded
                                  dense
                                  clearable
                                  class=""
                                  :color="maincolor.theme"
                                  outlined
                                  :label="item2.line"
                                  v-model="item2.value"
                                >
                                </v-text-field>
                              </div>
                            </div>
                            <div class="row" v-if="item1.type === 'dropselect'">
                              <div style="" class="col-12">
                                <v-select
                                  v-model="item1.value"
                                  :items="item1.choices"
                                  return-object
                                  item-text="value"
                                  item-value="id"
                                  dense
                                  class="mb-3"
                                  outlined
                                  rounded
                                  :menu-props="{ bottom: true, offsetY: true }"
                                  :color="maincolor.theme"
                                ></v-select>
                                <div v-if="item1.dropselect_display === true">
                                  <div
                                    style=""
                                    class="col-12"
                                    v-for="(item3, l) in item1.dropselect"
                                    :key="l"
                                  >
                                    <div
                                      v-if="
                                        item3.on_which_to_show === item1.value
                                      "
                                    >
                                       <p
                              style="word-break: break-word"
                              :inner-html.prop="item3.statement"
                            ></p>
                                      <v-select
                                        v-model="item3.value"
                                        :items="item3.choices"
                                        return-object
                                        item-text="value"
                                        item-value="id"
                                        dense
                                        class="mb-3"
                                        outlined
                                        rounded
                                        :menu-props="{
                                          bottom: true,
                                          offsetY: true,
                                        }"
                                        :color="maincolor.theme"
                                      ></v-select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="" v-if="item1.type === 'radio'">
                              <v-radio-group v-model="item1.value">
                                <div
                                  style=""
                                  class="mt-2"
                                  v-for="(item2, k) in item1.fields"
                                  :key="k"
                                >
                                  <v-radio
                                    :color="maincolor.theme"
                                    class=""
                                    :rules="rules"
                                    :value="item2.value"
                                  >
                                  <template v-slot:label>
                                        <li
                                          :inner-html.prop="
                                            item2.line | truncateEnd(36)
                                          "
                                        ></li> </template>
                                  </v-radio>
                                </div>
                              </v-radio-group>
                              <div v-if="item1.textfieldapproval === true">
                                <div
                                  style=""
                                  class="col-12"
                                  v-for="(
                                    item3, l
                                  ) in item1.textfieldapprovalfields"
                                  :key="l"
                                >
                                  <div
                                    v-if="
                                      item3.on_which_to_show === item1.value
                                    "
                                  >
                                     <p
                              style="word-break: break-word"
                              :inner-html.prop="item3.statement"
                            ></p>
                                    <v-text-field
                                      rounded
                                      dense
                                      clearable
                                      :color="maincolor.theme"
                                      outlined
                                      :label="item3.line"
                                      v-model="item3.value"
                                    >
                                    </v-text-field>
                                  </div>
                                </div>
                              </div>

                              <div v-if="item1.dropselect_display === true">
                                <div
                                  style=""
                                  class="col-12"
                                  v-for="(item3, l) in item1.dropselect"
                                  :key="l"
                                >
                                  <div
                                    v-if="
                                      item3.on_which_to_show === item1.value
                                    "
                                  >
                                     <p
                              style="word-break: break-word"
                              :inner-html.prop="item3.statement"
                            ></p>
                                    <v-select
                                      v-model="item3.value"
                                      :items="item3.choices"
                                      return-object
                                      item-text="value"
                                      item-value="id"
                                      dense
                                      class="mb-3"
                                      outlined
                                      rounded
                                      :menu-props="{
                                        bottom: true,
                                        offsetY: true,
                                      }"
                                      :color="maincolor.theme"
                                    ></v-select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row" v-if="item1.type === 'checkbox'">
                              <div
                                style=""
                                class="col-12"
                                v-for="(item2, k) in item1.fields"
                                :key="k"
                              >
                                <v-checkbox
                                  :color="maincolor.theme"
                                  v-model="item1.value"
                              
                                  :value="item2.value"
                                >
                                <template v-slot:label>
                                   
                                        <li
                                          :inner-html.prop="
                                            item2.line | truncateEnd(36)
                                          "
                                        ></li> </template>
                                </v-checkbox>
                              </div>
                            </div>
                          </div>
                        </v-expansion-panel-content>
            </v-expansion-panel>
            </div>
        </v-expansion-panels>
              
       
  </v-container>
</template>

<script>
import Vue from 'vue'
import path from 'path' ;
//import { showAt, hideAt } from "vue-breakpoints";
import Cryptr from "cryptr";
import electron from "electron";
import fs from "fs";
import store from "../store";
const cryptr = new Cryptr("myTotalySecretKey");
import { mapState } from "vuex";
//import CountryFlag from "@dzangolab/vue-country-flag-icon";
// import "@dzangolab/vue-country-flag-icon/dist/CountryFlag.css"; // import stylesheet
// import draggable from "vuedraggable";

// var vuetojs = require('vue-to-js');
export default {
  name: "test1",
  components: {
    // draggable,
    //showAt, hideAt,
    //CountryFlag,
  },
  beforeCreate(){
    console.log("hasan")
  },
  created() {
    var data = store.getters.getcontractsdatafromstore(
      localStorage.getItem("contract_org_name")
    );
    this.document = JSON.parse(JSON.stringify(data));
  },
  beforeDestroy() {

    if (store.state.isAdmin === true) {
      this.disable_isactive_property();
      this.org_value2 = JSON.parse(JSON.stringify(this.document));
      if (JSON.stringify(this.org_value2) !== JSON.stringify(this.org_value1)) {
        this.add_percentage_admin();
        
        this.writefileandscreenshot_admin();
      }
    } else {
      this.disable_isactive_property();
      this.org_value2 = JSON.parse(JSON.stringify(this.document));
      if (JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)) {
        this.add_percentage_user();
        this.writefileandscreenshot_user();
      }
    }
  //   const BrowserWindow = electron.remote.BrowserWindow;
  // let mainWindow = BrowserWindow.getFocusedWindow();
  //   mainWindow.webContents.reloadIgnoringCache();
  },

  // mounted
  mounted() {
    console.log("ok")
    if (store.state.isAdmin === true) {
      // this.$contractopencreator=true
      Vue.prototype.$contractopencreator = true
      console.log( this.$contractopencreator);
      this.org_value1 = JSON.parse(JSON.stringify(this.document));
      this.mounted_admin();
    } else {
      this.org_value1 = JSON.parse(JSON.stringify(this.document));
      this.mounted_user();
    }
  },
  //Data:
  data: () => ({
    current_admin_name: "",
    current_admin_versions: [],
    org_value2: {},
    org_value1: {},
    document: "",
    circleactive: false,
    dragging: false,
    opened_pannal: null,
    pannal_active_drag_check: "",
  }),
  //watch
  watch: {
    pannalprogress1: function () {
      var count =0
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        var pannalfields = this.complete_fields_checker_v2(
          this.document.leftSide.card[i].section
        );
        this.document.leftSide.card[
          i
        ].completed_fields = this.complete_fields_checker(pannalfields);
        if (this.document.leftSide.card[i].completed_fields > 0) {
          this.document.leftSide.card[i].havesomevalue = true;
          count = count + 1
        } else if (this.document.leftSide.card[i].completed_fields === 0) {
          this.document.leftSide.card[i].havesomevalue = false;
        }
      }
      if(count !==0){
        this.document.rightSide.title_access = true
      }
      else if(count ===0){
        this.document.rightSide.title_access = false
      }
    },
    pannalprogress2: function () {
      var value_counter = 1;
      for (var i = 0; i < this.document.rightSide.card.length; i++) {
        var array = new Array();
        var section_counter = 1;
        for (
          var j = 0;
          j < this.document.rightSide.card[i].section.length;
          j++
        ) {
          [
            this.document.rightSide.card[i].section[j].value,
            this.document.rightSide.card[i].section[j].display,
          ] = this.getting_values_and_setting_values(
            this.document.rightSide.card[i].section[j].values_on_which_depend,
            i,
            this.document.rightSide.card[i].section[j].dependent_values
          );
          array.push(this.document.rightSide.card[i].section[j].value);
          if (this.document.rightSide.card[i].section[j].value > 0) {
            this.document.rightSide.card[i].section[j].displayed = true;
          } else {
            this.document.rightSide.card[i].section[j].displayed = false;
          }
        }
        if (array.some((el) => el > 0)) {
          if (this.document.leftSide.card[i].havesomevalue === true) {
            for (
              j = 0;
              j < this.document.rightSide.card[i].section.length;
              j++
            ) {
              if (
                this.document.rightSide.card[i].section[j]
                  .heading_property_number === true
              ) {
                //if(this.document.rightSide.card[i].){
                this.document.rightSide.card[i].section[
                  j
                ].heading_value = value_counter;
                value_counter++;
                //break;
                //}
              }
              if (
                this.document.rightSide.card[i].section[j]
                  .inner_heading_property_number === true
              ) {
                if (
                  this.document.rightSide.card[i].section[j].displayed === true
                ) {
                  this.document.rightSide.card[i].section[
                    j
                  ].inner_heading_value = section_counter;
                  section_counter++;
                }
              }
            }
          }
        }
      }
    },
    pannalprogress3: function () {
      var per_expansion_value = 100 / this.document.leftSide.card.length;
      var count = 0;
      var value = 0;
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        this.document.leftSide.card[i].linearprogressvalue =
          per_expansion_value * (i + 1);
        if (this.document.leftSide.card[i].isactive === true) {
          count = count + 1;
          value = this.document.leftSide.card[i].linearprogressvalue;
          break;
        }
      }
      if (count === 0) {
        this.document.leftSide.linearprogressvalue = 0;
      } else if (count === 1) {
        this.document.leftSide.linearprogressvalue = value;
      }
    },
    amazon_special: function () {
      if (
        this.document.leftSide.card[0].section[1].value === "Juristische Person"
      ) {
        this.document.leftSide.card[0].section[2].fields[0].line = "Firmenname";
        this.document.leftSide.card[0].section[2].fields[0].size = "col-8";
        this.document.leftSide.card[0].section[2].fields[1].line = "Rechtsform";
        this.document.leftSide.card[0].section[2].fields[1].size = "col-4";
        this.document.leftSide.card[0].section[1].dropselect[0].value = "";
      }
      if (
        this.document.leftSide.card[0].section[1].value === "Natürliche Person"
      ) {
        this.document.leftSide.card[0].section[2].fields[0].line = "Vorname";
        this.document.leftSide.card[0].section[2].fields[0].size = "col-5";
        this.document.leftSide.card[0].section[2].fields[1].line = "Nachname";
        this.document.leftSide.card[0].section[2].fields[1].size = "col-7";
      }
    },
    // pannal_drag_drop : function (){

    //  var i,x,y;
    //   var rar = new Array()
    //   for (i=0;i<this.document.leftSide.card.length;i++)
    //   {
    //     y = this.document.leftSide.card[i]
    //     x= this.document.rightSide.card.find(k => k.id === y.id)
    //     rar.push(x)
    //   }
    //   this.document.rightSide.card = rar;
    //   //panal progress 2
    //  // this.pannalprogress2();
    //  var value_counter = 1;
    //   for ( i = 0; i < this.document.rightSide.card.length; i++) {
    //     var array = new Array();
    //     var section_counter = 1;
    //     for (var j = 0; j < this.document.rightSide.card[i].section.length; j++) {
    //       [
    //         this.document.rightSide.card[i].section[j].value,
    //         this.document.rightSide.card[i].section[j].display,
    //       ] = this.getting_values_and_setting_values(
    //         this.document.rightSide.card[i].section[j].values_on_which_depend,
    //         i,
    //         this.document.rightSide.card[i].section[j].dependent_values
    //       );
    //       array.push(this.document.rightSide.card[i].section[j].value);
    //       if (this.document.rightSide.card[i].section[j].value > 0) {
    //         this.document.rightSide.card[i].section[j].displayed = true;
    //       } else {
    //         this.document.rightSide.card[i].section[j].displayed = false;
    //       }
    //     }
    //     if (array.some((el) => el > 0)) {
    //       if (this.document.leftSide.card[i].havesomevalue === true) {
    //         for (j = 0; j < this.document.rightSide.card[i].section.length; j++) {
    //           if (
    //             this.document.rightSide.card[i].section[j].heading_property_number ===
    //             true
    //           ) {
    //             //if(this.document.rightSide.card[i].){
    //             this.document.rightSide.card[i].section[j].heading_value = value_counter;
    //             value_counter++;
    //             //break;
    //             //}
    //           }
    //           if (
    //             this.document.rightSide.card[i].section[j]
    //               .inner_heading_property_number === true
    //           ) {
    //             if (this.document.rightSide.card[i].section[j].displayed === true) {
    //               this.document.rightSide.card[i].section[
    //                 j
    //               ].inner_heading_value = section_counter;
    //               section_counter++;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    // },
    circle_active: function () {
      var count = 0;
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        if (this.document.leftSide.card[i].isactive === true) {
          count = count + 1;
          break;
        }
      }
      if (count == 0) {
        this.circleactive = false;
      } else {
        this.circleactive = true;
      }
    },
    contract_open_in_creator: function () {
      Vue.prototype.$contractopencreatordocdata=this.document;
      // console.log(this.$contractopencreatordocdata)
    },
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
      savehtml(){
          const BrowserWindow = electron.remote.BrowserWindow;
           let win = BrowserWindow.getFocusedWindow();
           const filepathlocal = path.join(__dirname, '../jjdddd/page.html');
        //    console.log(filepathlocal)
            win.webContents.savePage(filepathlocal, 'HTMLComplete').then(() => {
        console.log('Page was saved successfully.')
    }).catch(err => {
        console.log(err);
    });
  //          let file = new File([document.documentElement.innerHTML]
  //          , "file-" + new Date().getTime() + ".html"
  //          , {type:"text/html", lastModified:new Date().getTime()});
  //          var a = document.createElement("a");
  // a.href = URL.createObjectURL(file);
  // a.download = "your-download-heressss.html";
  // a.hidden = true;
  // document.body.appendChild(a);
  // a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
  // a.click();
//   console.log("ju");
//    const filepathlocal = path.resolve(__dirname, './components/test1.vue');
//         console.log(filepathlocal)
//   var code = vuetojs.generateCode(filepathlocal, 'amd');
// console.log(code);

// vuetojs.compile({
//     resource: 'src/components/*.vue',
//     dest: 'dest',
//     mode: 'amd'
// });
      },
    drag_functionstart() {
      this.dragging = true;
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        if (this.document.leftSide.card[i].isactive == true) {
          this.pannal_active_drag_check = this.document.leftSide.card[i].name;
          console.log(this.pannal_active_drag_check);
          return;
        }
      }
      this.pannal_active_drag_check = "";
    },
    drag_function() {
      this.dragging = false;
      var i, x, y;
      var rar = new Array();
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        y = this.document.leftSide.card[i]; //leftSide
        x = this.document.rightSide.card.find((k) => k.id === y.id);
        rar.push(x);
      }
      this.document.rightSide.card = rar;
      var id_count = 1;
      var rar_id = new Array();
      var lar_id = new Array();
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        var l1 = this.document.leftSide.card[i];
        l1.id = id_count;
        l1.isactive = false;
        lar_id.push(l1);
        var r1 = this.document.rightSide.card[i];
        r1.id = id_count;
        rar_id.push(r1);
        id_count++;
      }
      if (this.pannal_active_drag_check.length > 0) {
        for (i = 0; i < lar_id.length; i++) {
          if (lar_id[i].name == this.pannal_active_drag_check) {
            lar_id[i].isactive = true;
            this.opened_pannal = lar_id[i].id - 1;
            break;
          }
        }
      } else {
        this.opened_pannal = null;
      }
      this.document.leftSide.card = lar_id;
      this.document.rightSide.card = rar_id;
    },
    disable_isactive_property() {
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        this.document.leftSide.card[i].isactive = false;
      }
    },
    disable_and_enable_properties(item) {
      for (var i = 0; i < this.document.leftSide.card.length; i++) {
        if (this.document.leftSide.card[i].name === item.name) {
          this.document.leftSide.card[i].isactive = !this.document.leftSide
            .card[i].isactive;
        } else {
          this.document.leftSide.card[i].isactive = false;
        }
      }
    },
    // getvalue() {
    //   console.log(this.document);
    // },
    getting_values_and_setting_values(values, card_no, dependent_values) {
      var array = new Array();
      for (var i = 0; i < values.length; i++) {
        if (typeof values[i] === "object") {
          for (const [key, value] of Object.entries(values[i])) {
            // console.log(key)
            // console.log(value)
            var e = this.find_in_left_side(
              key,
              this.document.leftSide.card[card_no].section
            );
            //console.log(e)
            if (e === value) {
              array.push(e);
            }
          }
        } else {
          var a = this.find_in_left_side(
            values[i],
            this.document.leftSide.card[card_no].section
          );
          array.push(a);
        }
      }
      var string = this.select_which_string_to_display(
        dependent_values,
        card_no
      );
      //console.log(array)
      var count = 0;
      for (var k = 0; k < array.length; k++) {
        if (array[k] !== undefined && array[k] !== "" && array[k] !== null) {
          if (array[k].length !== 0) {
            //  console.log(array[k].length)
            count = count + 1;
          } else {
            //console.log("a" +array[k].length)
            count = count + 1;
          }
        }
      }
      //console.log("c" + count)
      return [count, string];
    },
    select_which_string_to_display(dependent_values, card_no) {
      var i, j;
      var values_that_edit_string_array = new Array();
      for (i = 0; i < dependent_values.length; i++) {
        for (j = 0; j < dependent_values[i].depend_upon.length; j++) {
          if (typeof dependent_values[i].depend_upon[j] === "object") {
            for (const [key, value] of Object.entries(
              dependent_values[i].depend_upon[j]
            )) {
              // console.log(key)
              console.log(value);
              var e = this.find_in_left_side(
                key,
                this.document.leftSide.card[card_no].section
              );
              var count_to_check_value_exist = 0;
              for (var k = 0; k < value.length; k++) {
                if (e === value[k]) {
                  values_that_edit_string_array.push(e);
                  count_to_check_value_exist++;
                  break;
                }
              }
              if (count_to_check_value_exist === 0) {
                values_that_edit_string_array.push(null);
              }
            }
          }
          //console.log(dependent_values[i].depend_upon[j])
          else {
            var values_that_edit_string = this.find_in_left_side(
              dependent_values[i].depend_upon[j],
              this.document.leftSide.card[card_no].section
            );
            values_that_edit_string_array.push(values_that_edit_string);
          }
        }
      }
      //console.log(values_that_edit_string_array)
      for (i = 0; i < dependent_values.length; i++) {
        var a = dependent_values[i].display;
        if (dependent_values[i].depend_upon.length === 0) {
          return a;
        }

        for (j = 0; j < values_that_edit_string_array.length; j++) {
          //console.log(dependent_values[i].depend_upon[j])
          //console.log(dependent_values[i].display)
          var val = values_that_edit_string_array[j];
          // console.log(val)
          if (val === null || val === "") {
            var res = a.split("[[" + j + "]]");
            var res1 = res[0].concat(res[1]);
            a = res1;
          } else {
            res = a.split("[[" + j + "]]");
            res1 = res[0].concat(val);
            res1 = res1.concat(res[1]);
            a = res1;
          }
        }
      }
      return a;
    },
    find_in_left_side(value, section) {
      for (var i = 0; i < section.length; i++) {
        if (section[i].type === "textfield") {
          for (var j = 0; j < section[i].fields.length; j++) {
            if (section[i].fields[j].eid === value) {
              return section[i].fields[j].value;
              //alert("aa")
            }
          }
        } else if (section[i].type === "radio") {
          if (section[i].eid === value) {
            return section[i].value;
          }
          if (section[i].textfieldapproval === true) {
            for (
              var k = 0;
              k < section[i].textfieldapprovalfields.length;
              k++
            ) {
              if (section[i].textfieldapprovalfields[k].eid === value) {
                return section[i].textfieldapprovalfields[k].value;
              }
            }
          } else if (section[i].dropselect_display === true) {
            for (k = 0; k < section[i].dropselect.length; k++) {
              if (section[i].dropselect[k].eid === value) {
                return section[i].dropselect[k].value;
              }
            }
          }
        } else if (section[i].type === "dropselect") {
          if (section[i].eid === value) {
            return section[i].value;
          }
          if (section[i].dropselect_display === true) {
            for (k = 0; k < section[i].dropselect.length; k++) {
              if (section[i].dropselect[k].eid === value) {
                return section[i].dropselect[k].value;
              }
            }
          }
        } else if (section[i].type === "checkbox") {
          if (section[i].eid === value) {
            if (section[i].value.length > 0) {
              return section[i].value;
            } else {
              return null;
            }
          }
        }
      }
    },
    complete_fields_checker_v2(section) {
      var array = [];
      for (var i = 0; i < section.length; i++) {
        if (section[i].type === "textfield") {
          for (var j = 0; j < section[i].fields.length; j++) {
            array.push(section[i].fields[j].value);
          }
        } else if (section[i].type === "radio") {
          array.push(section[i].value);
        } else if (section[i].type === "checkbox") {
          if (section[i].value.length !== 0) {
            array.push("checkbox");
          }
        } else if (section[i].type === "dropselect") {
          array.push(section[i].value);
        }
      }
      return array;
    },
    mounted_user() {
      var val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_user_name)
      );
      if (val != null) {
        if (
          val[
            localStorage.getItem("current_contract_title") +
              "-" +
              localStorage.getItem("current_contract_group_title")
          ] !== undefined
        ) {
          this.document = JSON.parse(
            val[
              localStorage.getItem("current_contract_title") +
                "-" +
                localStorage.getItem("current_contract_group_title")
            ]
          );
        }
        // else{
        //  this.preselectoption();
        // }
      }
      // else{
      //   this.preselectoption();
      // }
    },
    writefileandscreenshot_user() {
      let val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_user_name)
      );
      if (val == null) {
        val = {};
      }
      var a1 = localStorage.getItem("current_contract_title");
      var a2 = localStorage.getItem("current_contract_group_title");
      let b = JSON.stringify(this.document);
      val[a1 + "-" + a2] = b;
      localStorage.setItem(
        "contracts of " + store.state.current_user_name,
        JSON.stringify(val)
      );
      this.contractsdataforuser();
      store.dispatch("updatewritejson");
      //screenshot functionality
      const BrowserWindow = electron.remote.BrowserWindow;
      let win = BrowserWindow.getFocusedWindow();
      let wid = win.getSize()[0];
      //console.log(wid);
      win.webContents
        .capturePage({
          x: wid - Math.round(wid / 1.85),
          y: 50,
          width: wid,
          height: win.getSize()[1],
        })
        .then((img) => {
          var dir = "./thumbnails";
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          fs.writeFileSync(
            dir +
              "/" +
              a1 +
              "-" +
              a2 +
              "-" +
              store.state.current_user_name +
              "-u.png",
            img.toPNG(),
            { encoding: "utf8", flag: "w" }
          );
        });
    },
    contractsdataforuser() {
      var user_name = store.state.current_user_name;
      var data = localStorage.getItem("contracts of " + user_name);
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile(
        "./" + user_name + "- u.json",
        encrypteddata,
        function () {}
      );
    },
    add_percentage_user() {
      var a1 = localStorage.getItem("current_contract_title");
      var value = this.updatecontractpercentage_admin();
      store.commit("updatecontractpercentageuser", [
        a1,
        store.state.current_user_name,
        value,
      ]);
      store.commit("changeiseditedrecentcontracts", [
        a1,
        store.state.current_user_name,
      ]);
    },

    create_copy_of_contract_when_selected_specific_condition_admin() {
      var a1 = localStorage.getItem("contract_org_name");
      // console.log(a1)
      var a2 = localStorage.getItem("current_contract_group_title");
      // console.log(a2)
      this.add_original_contract_when_one_contract_updates(a1, a2);
    },
    add_original_contract_when_one_contract_updates(
      contact_org_name,
      group_title
    ) {
      var a = store.getters.checkByGroupName(group_title);
      if (a[0].keep_original_contract === true) {
        var b = this.copy_creation_of_contract(contact_org_name, group_title);
        // console.log(b)
        store.commit("addcontractgroupfunc", [a[0], b]);
        if (a[0].user.length !== 0) {
          store.commit("addcontractinallusercontractsingroup", [a[0], b]);
        }
        this.store_commited();
      }
    },
    store_commited() {
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
        store.state.current_admin_name
      );
      store.commit("setcurrentadmingroups", groups_by_specific_admin);
      //this.current_admin_groups = store.state.current_admin_groups;
      var users_by_specific_admin = store.getters.getallByAdminName(
        store.state.current_admin_name
      );
      store.commit("setcurrentadminusers", users_by_specific_admin);
      //this.current_admin_users = store.state.current_admin_users;
      store.dispatch("updatewritejson");
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
      return b;
    },
    add_percentage_admin() {
      var a1 = localStorage.getItem("current_contract_title");
      var value = this.updatecontractpercentage_admin();
      // store.commit("updatecontractpercentage",[a1,store.state.current_admin_name,value])
      store.commit("updatecontractpercentageingroups", [
        a1,
        store.state.current_admin_name,
        value,
      ]);
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(
        store.state.current_admin_name
      );
      this.$store.commit("setcurrentadmingroups", groups_by_specific_admin);
      store.commit("changeiseditedrecentcontracts", [
        a1,
        store.state.current_admin_name,
      ]);
    },
    updatecontractpercentage_admin() {
      var i;
      var sum_array_total = new Array();
      var sum_array_completed = new Array();
      for (i = 0; i < this.document.leftSide.card.length; i++) {
        sum_array_total.push(this.document.leftSide.card[i].total_fields);
        sum_array_completed.push(
          this.document.leftSide.card[i].completed_fields
        );
      }
      var obt_sum = 0;
      var total_sum = 0;
      for (i = 0; i < sum_array_total.length; i++) {
        obt_sum = obt_sum + sum_array_completed[i];
        total_sum = total_sum + sum_array_total[i];
      }
      var answer = Math.round(this.percentage(obt_sum, total_sum));
      return answer;
    },
    percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    },
    complete_fields_checker(arr) {
      var data = arr;
      var counter = 0;
      var total_length = data.length;
      for (var i = 0; i < total_length; i++) {
        if (data[i]) {
          counter++;
        } else if (data[i] === false) {
          counter++;
        } else if (data[i] === 0) {
          counter++;
        }
      }
      // console.log("Filled = "+ counter)
      // console.log("Total = " + total_length)
      return counter;
    },
    mounted_admin() {
      this.current_admin_name = store.state.current_admin_name;
      this.current_admin_versions = store.state.current_admin_versions;
      var val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_admin_name)
      );
      if (val != null) {
        if (
          val[
            localStorage.getItem("current_contract_title") +
              "-" +
              localStorage.getItem("current_contract_group_title")
          ] !== undefined
        ) {
          this.document = JSON.parse(
            val[
              localStorage.getItem("current_contract_title") +
                "-" +
                localStorage.getItem("current_contract_group_title")
            ]
          );
        }
        // else{
        //  this.preselectoption();
        // }
      }
      // else{
      //   this.preselectoption();
      // }
    },
    writefileandscreenshot_admin() {
      let val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_admin_name)
      );
      if (val == null) {
        val = {};
      }
      //console.log(store.state.current_admin_name);
      //console.log(localStorage.getItem("current_contract_title"));
      var a1 = localStorage.getItem("current_contract_title");
      var a2 = localStorage.getItem("current_contract_group_title");
      let b = JSON.stringify(this.document);

      if (!(a1 + "-" + a2 in val)) {
        this.create_copy_of_contract_when_selected_specific_condition_admin();
      }
      val[a1 + "-" + a2] = b;
      //console.log(val);
      //console.log(this.contract);
      //this.contract_array.push(this.contract)
      localStorage.setItem(
        "contracts of " + store.state.current_admin_name,
        JSON.stringify(val)
      );
      this.contractsdataforadmin();
      store.dispatch("updatewritejson");
      //screenshot functionality
      const BrowserWindow = electron.remote.BrowserWindow;
      let win = BrowserWindow.getFocusedWindow();
      let wid = win.getSize()[0];
      //console.log(wid);
      win.webContents
        .capturePage({
          x: wid - Math.round(wid / 1.85),
          y: 50,
          width: wid,
          height: win.getSize()[1],
        })
        .then((img) => {
          var dir = "./thumbnails";
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          fs.writeFileSync(
            dir +
              "/" +
              a1 +
              "-" +
              a2 +
              "-" +
              store.state.current_admin_name +
              ".png",
            img.toPNG(),
            { encoding: "utf8", flag: "w" }
          );
        });
      // localStorage.removeItem("current_contract_title");
      // localStorage.removeItem("current_contract_group_title");
    },
    contractsdataforadmin() {
      var admin_name = store.state.current_admin_name;
      var data = localStorage.getItem("contracts of " + admin_name);
      //console.log(admin_name)
      //console.log(data)
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile("./" + admin_name + ".json", encrypteddata, function () {});
    },
    // arrangePos(arr1) {
    //   let count = 0;
    //   let arrIn = [];
    //   let newArr = [];
    //   let returnArr = [0, 0, 0, 0, 0, 0, 0];
    //   for (var i = 0; i < arr1.length; i++) {
    //     if (arr1[i] !== 0) {
    //       arrIn.push(i);
    //       count = count + 1;
    //     }
    //   }
    //   for (var y = 0; y < count; y++) {
    //     newArr.push(y + 1);
    //   }
    //   for (var z = 0; z < arr1.length; z++) {
    //     for (var x = 0; x < newArr.length; x++) {
    //       if (z === arrIn[x]) {
    //         returnArr[z] = newArr[x];
    //       }
    //     }
    //   }
    //   return returnArr;
    // },
    // print() {
    //   // Pass the element id here
    //   this.$htmlToPaper("printMe");
    //   this.$htmlToPaper("printMe", null, () => {
    //     //console.log("Printing completed or was cancelled!");
    //   });
    // },
    //pannal for 1
    // addresspannalchangevalue() {
    //   if (this.addresspannalBox === true) {
    //     this.addresspannalBox = false;
    //     this.value = "0";
    //     this.addresspannalnumber = "0/1";
    //     this.addresspannaliconcolor = "#d8d8d8";
    //     document
    //       .getElementById("prefirstLine")
    //       .classList.remove("changelengthcolor");
    //     document
    //       .getElementById("prefirstLine")
    //       .classList.add("originallengthcolor");
    //     document
    //       .getElementById("firstCircle2")
    //       .classList.remove("c3changecolor");
    //     document
    //       .getElementById("firstCircle2")
    //       .classList.add("c3originalcolor");
    //     setTimeout(function () {
    //       let addresspannalid = document.getElementById("addresspannalid");
    //       let addresspannalidheight = addresspannalid.clientHeight;
    //       document.getElementById("prefirstLine").setAttribute("style", "");
    //       document.getElementById("prefirstLine").style.height =
    //         addresspannalidheight + "px";
    //     }, 500);
    //   } else if (this.addresspannalBox === false) {
    //     this.auctionpannalBox = false;
    //     this.offerpannalBox = false;
    //     this.conclusionpannalBox = false;
    //     this.contracttextpannalBox = false;
    //     this.contractcustomerpannalBox = false;
    //     this.shipcostpannalBox = false;
    //     this.auctionpannaliconcolor = "#d8d8d8";
    //     this.offerpannaliconcolor = "#d8d8d8";
    //     this.conclusionpannaliconcolor = "#d8d8d8";
    //     this.contracttextpannaliconcolor = "#d8d8d8";
    //     this.contractcustomerpannaliconcolor = "#d8d8d8";
    //     this.shipcostpannaliconcolor = "#d8d8d8";
    //     this.auctionpannalnumber = "0/7";
    //     this.offerpannalnumber = "0/7";
    //     this.conclusionpannalnumber = "0/7";
    //     this.contracttextpannalnumber = "0/7";
    //     this.contractcustomerpannalnumber = "0/7";
    //     this.shipcostpannalnumber = "0/7";
    //     this.addresspannalBox = true;
    //     this.value = "14";
    //     this.addresspannalnumber = "1/1";
    //     this.addresspannaliconcolor = "#ffa300";
    //     document
    //       .getElementById("prefirstLine")
    //       .classList.remove("originallengthcolor");
    //     document
    //       .getElementById("prefirstLine")
    //       .classList.add("changelengthcolor");
    //     document
    //       .getElementById("firstCircle2")
    //       .classList.remove("c3originalcolor");
    //     document.getElementById("firstCircle2").classList.add("c3changecolor");
    //     setTimeout(function () {
    //       let addresspannalid = document.getElementById("addresspannalid");
    //       let addresspannalidheight = addresspannalid.clientHeight;
    //       document.getElementById("prefirstLine").setAttribute("style", "");
    //       document.getElementById("prefirstLine").style.height =
    //         addresspannalidheight / 2 + "px";
    //     }, 500);
    //     // pannal  2 for dissable
    //     setTimeout(function () {
    //       let offerpannalid = document.getElementById("offerpannalid");
    //       let offerpannalidheight = offerpannalid.clientHeight;
    //       document.getElementById("firstLine").setAttribute("style", "");
    //       document.getElementById("firstLine").style.height =
    //         offerpannalidheight + "px";
    //       document
    //         .getElementById("firstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("firstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 3 for dissable
    //     setTimeout(function () {
    //       let conclusionpannalid = document.getElementById(
    //         " conclusionpannalid"
    //       );
    //       let conclusionpannalidheight = conclusionpannalid.clientHeight;
    //       document.getElementById("secondLine").setAttribute("style", "");
    //       document.getElementById("secondLine").style.height =
    //         conclusionpannalidheight + "px";
    //       document
    //         .getElementById("secondLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("secondLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 4 for dissable
    //     setTimeout(function () {
    //       let auctionpannalid = document.getElementById("auctionpannalid");
    //       let auctionpannalidheight = auctionpannalid.clientHeight;
    //       document.getElementById("thirdLine").setAttribute("style", "");
    //       document.getElementById("thirdLine").style.height =
    //         auctionpannalidheight + "px";
    //       document
    //         .getElementById("thirdLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("thirdLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 5 for dissable
    //     setTimeout(function () {
    //       let contracttextpannalid = document.getElementById(
    //         "contracttextpannalid"
    //       );
    //       let contracttextpannalidheight = contracttextpannalid.clientHeight;
    //       document.getElementById("fourthLine").setAttribute("style", "");
    //       document.getElementById("fourthLine").style.height =
    //         contracttextpannalidheight + "px";
    //       document
    //         .getElementById("fourthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fourthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     //pannal 6 for dissable
    //     setTimeout(function () {
    //       let contractcustomerpannalid = document.getElementById(
    //         "contractcustomerpannalid"
    //       );
    //       let contractcustomerpannalidheight =
    //         contractcustomerpannalid.clientHeight;
    //       document.getElementById("fifthLine").setAttribute("style", "");
    //       document.getElementById("fifthLine").style.height =
    //         contractcustomerpannalidheight + "px";
    //       document
    //         .getElementById("fifthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fifthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // 7 pannal for dissable
    //     setTimeout(function () {
    //       let shipcostpannalid = document.getElementById("shipcostpannalid");
    //       let shipcostpannalidheight = shipcostpannalid.clientHeight;
    //       document.getElementById("sixLine").setAttribute("style", "");
    //       document.getElementById("sixLine").style.height =
    //         shipcostpannalidheight + "px";
    //       document
    //         .getElementById("sixLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("sixLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //   }
    // },
    // //pannal for 2
    // offerpannalchangevalue() {
    //   if (this.offerpannalBox === true) {
    //     this.offerpannalBox = false;
    //     this.value = "0";
    //     this.offerpannalnumber = "0/7";
    //     this.offerpannaliconcolor = "#d8d8d8";
    //     document
    //       .getElementById("firstLine")
    //       .classList.remove("changelengthcolor");
    //     document
    //       .getElementById("firstLine")
    //       .classList.add("originallengthcolor");
    //     document
    //       .getElementById("secondCircle2")
    //       .classList.remove("c3changecolor");
    //     document
    //       .getElementById("secondCircle2")
    //       .classList.add("c3originalcolor");
    //     setTimeout(function () {
    //       let offerpannalid = document.getElementById("offerpannalid");
    //       let offerpannalidheight = offerpannalid.clientHeight;
    //       document.getElementById("firstLine").setAttribute("style", "");
    //       document.getElementById("firstLine").style.height =
    //         offerpannalidheight + "px";
    //     }, 500);
    //   } else if (this.offerpannalBox === false) {
    //     this.auctionpannalBox = false;
    //     this.addresspannalBox = false;
    //     this.conclusionpannalBox = false;
    //     this.contracttextpannalBox = false;
    //     this.contractcustomerpannalBox = false;
    //     this.shipcostpannalBox = false;
    //     this.auctionpannaliconcolor = "#d8d8d8";
    //     this.addresspannaliconcolor = "#d8d8d8";
    //     this.conclusionpannaliconcolor = "#d8d8d8";
    //     this.contracttextpannaliconcolor = "#d8d8d8";
    //     this.contractcustomerpannaliconcolor = "#d8d8d8";
    //     this.shipcostpannaliconcolor = "#d8d8d8";
    //     this.auctionpannalnumber = "0/1";
    //     this.addresspannalnumber = "0/1";
    //     this.conclusionpannalnumber = "0/7";
    //     this.contracttextpannalnumber = "0/7";
    //     this.contractcustomerpannalnumber = "0/7";
    //     this.shipcostpannalnumber = "0/7";
    //     this.offerpannalBox = true;
    //     this.value = "24";
    //     this.offerpannalnumber = "2/7";
    //     this.offerpannaliconcolor = "#ffa300";
    //     document
    //       .getElementById("firstLine")
    //       .classList.remove("originallengthcolor");
    //     document.getElementById("firstLine").classList.add("changelengthcolor");
    //     document
    //       .getElementById("secondCircle2")
    //       .classList.remove("c3originalcolor");
    //     document.getElementById("secondCircle2").classList.add("c3changecolor");
    //     setTimeout(function () {
    //       let offerpannalid = document.getElementById("offerpannalid");
    //       let offerpannalidheight = offerpannalid.clientHeight;
    //       document.getElementById("firstLine").setAttribute("style", "");
    //       document.getElementById("firstLine").style.height =
    //         offerpannalidheight / 2 + "px";
    //     }, 500);
    //     // pannal 1 for dissable
    //     setTimeout(function () {
    //       let addresspannalid = document.getElementById("addresspannalid");
    //       let addresspannalidheight = addresspannalid.clientHeight;
    //       document.getElementById("prefirstLine").setAttribute("style", "");
    //       document.getElementById("prefirstLine").style.height =
    //         addresspannalidheight + "px";
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 3 for dissable
    //     setTimeout(function () {
    //       let conclusionpannalid = document.getElementById(
    //         "conclusionpannalid"
    //       );
    //       let conclusionpannalidheight = conclusionpannalid.clientHeight;
    //       document.getElementById("secondLine").setAttribute("style", "");
    //       document.getElementById("secondLine").style.height =
    //         conclusionpannalidheight + "px";
    //       document
    //         .getElementById("secondLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("secondLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 4 for dissable
    //     setTimeout(function () {
    //       let auctionpannalid = document.getElementById("auctionpannalid");
    //       let auctionpannalidheight = auctionpannalid.clientHeight;
    //       document.getElementById("thirdLine").setAttribute("style", "");
    //       document.getElementById("thirdLine").style.height =
    //         auctionpannalidheight + "px";
    //       document
    //         .getElementById("thirdLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("thirdLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 5 for dissable
    //     setTimeout(function () {
    //       let contracttextpannalid = document.getElementById(
    //         "contracttextpannalid"
    //       );
    //       let contracttextpannalidheight = contracttextpannalid.clientHeight;
    //       document.getElementById("fourthLine").setAttribute("style", "");
    //       document.getElementById("fourthLine").style.height =
    //         contracttextpannalidheight + "px";
    //       document
    //         .getElementById("fourthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fourthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     //pannal 6 for dissable
    //     setTimeout(function () {
    //       let contractcustomerpannalid = document.getElementById(
    //         "contractcustomerpannalid"
    //       );
    //       let contractcustomerpannalidheight =
    //         contractcustomerpannalid.clientHeight;
    //       document.getElementById("fifthLine").setAttribute("style", "");
    //       document.getElementById("fifthLine").style.height =
    //         contractcustomerpannalidheight + "px";
    //       document
    //         .getElementById("fifthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fifthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // 7 pannal for dissable
    //     setTimeout(function () {
    //       let shipcostpannalid = document.getElementById("shipcostpannalid");
    //       let shipcostpannalidheight = shipcostpannalid.clientHeight;
    //       document.getElementById("sixLine").setAttribute("style", "");
    //       document.getElementById("sixLine").style.height =
    //         shipcostpannalidheight + "px";
    //       document
    //         .getElementById("sixLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("sixLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //   }
    // },
    // //pannal for 3
    // conclusionpannalchangevalue() {
    //   if (this.conclusionpannalBox === true) {
    //     this.conclusionpannalBox = false;
    //     this.value = "0";
    //     this.conclusionpannalnumber = "0/7";
    //     this.conclusionpannaliconcolor = "#d8d8d8";
    //     document
    //       .getElementById("secondLine")
    //       .classList.remove("changelengthcolor");
    //     document
    //       .getElementById("secondLine")
    //       .classList.add("originallengthcolor");
    //     document
    //       .getElementById("thirdCircle2")
    //       .classList.remove("c3changecolor");
    //     document
    //       .getElementById("thirdCircle2")
    //       .classList.add("c3originalcolor");
    //     setTimeout(function () {
    //       let conclusionpannalid = document.getElementById(
    //         "conclusionpannalid"
    //       );
    //       let conclusionpannalidheight = conclusionpannalid.clientHeight;
    //       document.getElementById("secondLine").setAttribute("style", "");
    //       document.getElementById("secondLine").style.height =
    //         conclusionpannalidheight + "px";
    //     }, 500);
    //   } else if (this.conclusionpannalBox === false) {
    //     this.auctionpannalBox = false;
    //     this.addresspannalBox = false;
    //     this.offerpannalBox = false;
    //     this.contracttextpannalBox = false;
    //     this.contractcustomerpannalBox = false;
    //     this.shipcostpannalBox = false;
    //     this.auctionpannaliconcolor = "#d8d8d8";
    //     this.addresspannaliconcolor = "#d8d8d8";
    //     this.offerpannaliconcolor = "#d8d8d8";
    //     this.contracttextpannaliconcolor = "#d8d8d8";
    //     this.contractcustomerpannaliconcolor = "#d8d8d8";
    //     this.shipcostpannaliconcolor = "#d8d8d8";
    //     this.auctionpannalnumber = "0/1";
    //     this.addresspannalnumber = "0/1";
    //     this.offerpannalnumber = "0/7";
    //     this.contracttextpannalnumber = "0/7";
    //     this.contractcustomerpannalnumber = "0/7";
    //     this.shipcostpannalnumber = "0/7";
    //     this.conclusionpannalBox = true;
    //     this.value = "36";
    //     this.conclusionpannalnumber = "3/7";
    //     this.conclusionpannaliconcolor = "#ffa300";
    //     document
    //       .getElementById("secondLine")
    //       .classList.remove("originallengthcolor");
    //     document
    //       .getElementById("secondLine")
    //       .classList.add("changelengthcolor");
    //     document
    //       .getElementById("thirdCircle2")
    //       .classList.remove("c3originalcolor");
    //     document.getElementById("thirdCircle2").classList.add("c3changecolor");
    //     setTimeout(function () {
    //       let conclusionpannalid = document.getElementById(
    //         "conclusionpannalid"
    //       );
    //       let conclusionpannalidheight = conclusionpannalid.clientHeight;
    //       document.getElementById("secondLine").setAttribute("style", "");
    //       document.getElementById("secondLine").style.height =
    //         conclusionpannalidheight / 2 + "px";
    //     }, 500);
    //     // pannal 1 for dissable
    //     setTimeout(function () {
    //       let addresspannalid = document.getElementById("addresspannalid");
    //       let addresspannalidheight = addresspannalid.clientHeight;
    //       document.getElementById("prefirstLine").setAttribute("style", "");
    //       document.getElementById("prefirstLine").style.height =
    //         addresspannalidheight + "px";
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal  2 for dissable
    //     setTimeout(function () {
    //       let offerpannalid = document.getElementById("offerpannalid");
    //       let offerpannalidheight = offerpannalid.clientHeight;
    //       document.getElementById("firstLine").setAttribute("style", "");
    //       document.getElementById("firstLine").style.height =
    //         offerpannalidheight + "px";
    //       document
    //         .getElementById("firstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("firstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 4 for dissable
    //     setTimeout(function () {
    //       let auctionpannalid = document.getElementById("auctionpannalid");
    //       let auctionpannalidheight = auctionpannalid.clientHeight;
    //       document.getElementById("thirdLine").setAttribute("style", "");
    //       document.getElementById("thirdLine").style.height =
    //         auctionpannalidheight + "px";
    //       document
    //         .getElementById("thirdLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("thirdLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 5 for dissable
    //     setTimeout(function () {
    //       let contracttextpannalid = document.getElementById(
    //         "contracttextpannalid"
    //       );
    //       let contracttextpannalidheight = contracttextpannalid.clientHeight;
    //       document.getElementById("fourthLine").setAttribute("style", "");
    //       document.getElementById("fourthLine").style.height =
    //         contracttextpannalidheight + "px";
    //       document
    //         .getElementById("fourthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fourthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     //pannal 6 for dissable
    //     setTimeout(function () {
    //       let contractcustomerpannalid = document.getElementById(
    //         "contractcustomerpannalid"
    //       );
    //       let contractcustomerpannalidheight =
    //         contractcustomerpannalid.clientHeight;
    //       document.getElementById("fifthLine").setAttribute("style", "");
    //       document.getElementById("fifthLine").style.height =
    //         contractcustomerpannalidheight + "px";
    //       document
    //         .getElementById("fifthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fifthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // 7 pannal for dissable
    //     setTimeout(function () {
    //       let shipcostpannalid = document.getElementById("shipcostpannalid");
    //       let shipcostpannalidheight = shipcostpannalid.clientHeight;
    //       document.getElementById("sixLine").setAttribute("style", "");
    //       document.getElementById("sixLine").style.height =
    //         shipcostpannalidheight + "px";
    //       document
    //         .getElementById("sixLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("sixLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //   }
    // },
    // //pannal for 4
    // auctionpannalchangevalue() {
    //   if (this.auctionpannalBox === true) {
    //     this.auctionpannalBox = false;
    //     this.value = "0";
    //     this.auctionpannalnumber = "0/7";
    //     this.auctionpannaliconcolor = "#d8d8d8";
    //     document
    //       .getElementById("thirdLine")
    //       .classList.remove("changelengthcolor");
    //     document
    //       .getElementById("thirdLine")
    //       .classList.add("originallengthcolor");
    //     document
    //       .getElementById("fourthCircle2")
    //       .classList.remove("c3changecolor");
    //     document
    //       .getElementById("fourthCircle2")
    //       .classList.add("c3originalcolor");
    //     setTimeout(function () {
    //       let auctionpannalid = document.getElementById("auctionpannalid");
    //       let auctionpannalidheight = auctionpannalid.clientHeight;
    //       document.getElementById("thirdLine").setAttribute("style", "");
    //       document.getElementById("thirdLine").style.height =
    //         auctionpannalidheight + "px";
    //     }, 500);
    //   } else if (this.auctionpannalBox === false) {
    //     this.conclusionpannalBox = false;
    //     this.addresspannalBox = false;
    //     this.offerpannalBox = false;
    //     this.contracttextpannalBox = false;
    //     this.contractcustomerpannalBox = false;
    //     this.shipcostpannalBox = false;
    //     this.conclusionpannaliconcolor = "#d8d8d8";
    //     this.addresspannaliconcolor = "#d8d8d8";
    //     this.offerpannaliconcolor = "#d8d8d8";
    //     this.contracttextpannaliconcolor = "#d8d8d8";
    //     this.contractcustomerpannaliconcolor = "#d8d8d8";
    //     this.shipcostpannaliconcolor = "#d8d8d8";
    //     this.conclusionpannalnumber = "0/1";
    //     this.addresspannalnumber = "0/1";
    //     this.offerpannalnumber = "0/7";
    //     this.contracttextpannalnumber = "0/7";
    //     this.contractcustomerpannalnumber = "0/7";
    //     this.shipcostpannalnumber = "0/7";
    //     this.auctionpannalBox = true;
    //     this.value = "48";
    //     this.auctionpannalnumber = "4/7";
    //     this.auctionpannaliconcolor = "#ffa300";
    //     document
    //       .getElementById("thirdLine")
    //       .classList.remove("originallengthcolor");
    //     document.getElementById("thirdLine").classList.add("changelengthcolor");
    //     document
    //       .getElementById("fourthCircle2")
    //       .classList.remove("c3originalcolor");
    //     document.getElementById("fourthCircle2").classList.add("c3changecolor");
    //     setTimeout(function () {
    //       let auctionpannalid = document.getElementById("auctionpannalid");
    //       let auctionpannalidheight = auctionpannalid.clientHeight;
    //       document.getElementById("thirdLine").setAttribute("style", "");
    //       document.getElementById("thirdLine").style.height =
    //         auctionpannalidheight / 2 + "px";
    //     }, 500);
    //     // pannal 1 for dissable
    //     setTimeout(function () {
    //       let addresspannalid = document.getElementById("addresspannalid");
    //       let addresspannalidheight = addresspannalid.clientHeight;
    //       document.getElementById("prefirstLine").setAttribute("style", "");
    //       document.getElementById("prefirstLine").style.height =
    //         addresspannalidheight + "px";
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal  2 for dissable
    //     setTimeout(function () {
    //       let offerpannalid = document.getElementById("offerpannalid");
    //       let offerpannalidheight = offerpannalid.clientHeight;
    //       document.getElementById("firstLine").setAttribute("style", "");
    //       document.getElementById("firstLine").style.height =
    //         offerpannalidheight + "px";
    //       document
    //         .getElementById("firstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("firstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 3 for dissable
    //     setTimeout(function () {
    //       let conclusionpannalid = document.getElementById(
    //         "conclusionpannalid"
    //       );
    //       let conclusionpannalidheight = conclusionpannalid.clientHeight;
    //       document.getElementById("secondLine").setAttribute("style", "");
    //       document.getElementById("secondLine").style.height =
    //         conclusionpannalidheight + "px";
    //       document
    //         .getElementById("secondLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("secondLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 5 for dissable
    //     setTimeout(function () {
    //       let contracttextpannalid = document.getElementById(
    //         "contracttextpannalid"
    //       );
    //       let contracttextpannalidheight = contracttextpannalid.clientHeight;
    //       document.getElementById("fourthLine").setAttribute("style", "");
    //       document.getElementById("fourthLine").style.height =
    //         contracttextpannalidheight + "px";
    //       document
    //         .getElementById("fourthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fourthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     //pannal 6 for dissable
    //     setTimeout(function () {
    //       let contractcustomerpannalid = document.getElementById(
    //         "contractcustomerpannalid"
    //       );
    //       let contractcustomerpannalidheight =
    //         contractcustomerpannalid.clientHeight;
    //       document.getElementById("fifthLine").setAttribute("style", "");
    //       document.getElementById("fifthLine").style.height =
    //         contractcustomerpannalidheight + "px";
    //       document
    //         .getElementById("fifthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fifthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // 7 pannal for dissable
    //     setTimeout(function () {
    //       let shipcostpannalid = document.getElementById("shipcostpannalid");
    //       let shipcostpannalidheight = shipcostpannalid.clientHeight;
    //       document.getElementById("sixLine").setAttribute("style", "");
    //       document.getElementById("sixLine").style.height =
    //         shipcostpannalidheight + "px";
    //       document
    //         .getElementById("sixLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("sixLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //   }
    // },
    // //pannal for 5
    // contracttextpannalchangevalue() {
    //   if (this.contracttextpannalBox === true) {
    //     this.contracttextpannalBox = false;
    //     this.value = "0";
    //     this.contracttextpannalnumber = "0/7";
    //     this.contracttextpannaliconcolor = "#d8d8d8";
    //     document
    //       .getElementById("fourthLine")
    //       .classList.remove("changelengthcolor");
    //     document
    //       .getElementById("fourthLine")
    //       .classList.add("originallengthcolor");
    //     document
    //       .getElementById("fifthCircle2")
    //       .classList.remove("c3changecolor");
    //     document
    //       .getElementById("fifthCircle2")
    //       .classList.add("c3originalcolor");
    //     setTimeout(function () {
    //       let contracttextpannalid = document.getElementById(
    //         "contracttextpannalid"
    //       );
    //       let contracttextpannalidheight = contracttextpannalid.clientHeight;
    //       document.getElementById("fourthLine").setAttribute("style", "");
    //       document.getElementById("fourthLine").style.height =
    //         contracttextpannalidheight + "px";
    //     }, 500);
    //   } else if (this.contracttextpannalBox === false) {
    //     this.conclusionpannalBox = false;
    //     this.addresspannalBox = false;
    //     this.offerpannalBox = false;
    //     this.auctionpannalBox = false;
    //     this.contractcustomerpannalBox = false;
    //     this.shipcostpannalBox = false;
    //     this.conclusionpannaliconcolor = "#d8d8d8";
    //     this.addresspannaliconcolor = "#d8d8d8";
    //     this.offerpannaliconcolor = "#d8d8d8";
    //     this.auctionpannaliconcolor = "#d8d8d8";
    //     this.contractcustomerpannaliconcolor = "#d8d8d8";
    //     this.shipcostpannaliconcolor = "#d8d8d8";
    //     this.conclusionpannalnumber = "0/1";
    //     this.addresspannalnumber = "0/1";
    //     this.offerpannalnumber = "0/7";
    //     this.auctionpannalnumber = "0/7";
    //     this.contractcustomerpannalnumber = "0/7";
    //     this.shipcostpannalnumber = "0/7";
    //     this.contracttextpannalBox = true;
    //     this.value = "60";
    //     this.contracttextpannalnumber = "5/7";
    //     this.contracttextpannaliconcolor = "#ffa300";
    //     document
    //       .getElementById("fourthLine")
    //       .classList.remove("originallengthcolor");
    //     document
    //       .getElementById("fourthLine")
    //       .classList.add("changelengthcolor");
    //     document
    //       .getElementById("fifthCircle2")
    //       .classList.remove("c3originalcolor");
    //     document.getElementById("fifthCircle2").classList.add("c3changecolor");
    //     setTimeout(function () {
    //       let contracttextpannalid = document.getElementById(
    //         "contracttextpannalid"
    //       );
    //       let contracttextpannalidheight = contracttextpannalid.clientHeight;
    //       document.getElementById("fourthLine").setAttribute("style", "");
    //       document.getElementById("fourthLine").style.height =
    //         contracttextpannalidheight / 2 + "px";
    //     }, 500);
    //     // pannal 1 for dissable
    //     setTimeout(function () {
    //       let addresspannalid = document.getElementById("addresspannalid");
    //       let addresspannalidheight = addresspannalid.clientHeight;
    //       document.getElementById("prefirstLine").setAttribute("style", "");
    //       document.getElementById("prefirstLine").style.height =
    //         addresspannalidheight + "px";
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal  2 for dissable
    //     setTimeout(function () {
    //       let offerpannalid = document.getElementById("offerpannalid");
    //       let offerpannalidheight = offerpannalid.clientHeight;
    //       document.getElementById("firstLine").setAttribute("style", "");
    //       document.getElementById("firstLine").style.height =
    //         offerpannalidheight + "px";
    //       document
    //         .getElementById("firstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("firstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 3 for dissable
    //     setTimeout(function () {
    //       let conclusionpannalid = document.getElementById(
    //         "conclusionpannalid"
    //       );
    //       let conclusionpannalidheight = conclusionpannalid.clientHeight;
    //       document.getElementById("secondLine").setAttribute("style", "");
    //       document.getElementById("secondLine").style.height =
    //         conclusionpannalidheight + "px";
    //       document
    //         .getElementById("secondLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("secondLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 4 for dissable
    //     setTimeout(function () {
    //       let auctionpannalid = document.getElementById("auctionpannalid");
    //       let auctionpannalidheight = auctionpannalid.clientHeight;
    //       document.getElementById("thirdLine").setAttribute("style", "");
    //       document.getElementById("thirdLine").style.height =
    //         auctionpannalidheight + "px";
    //       document
    //         .getElementById("thirdLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("thirdLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     //pannal 6 for dissable
    //     setTimeout(function () {
    //       let contractcustomerpannalid = document.getElementById(
    //         "contractcustomerpannalid"
    //       );
    //       let contractcustomerpannalidheight =
    //         contractcustomerpannalid.clientHeight;
    //       document.getElementById("fifthLine").setAttribute("style", "");
    //       document.getElementById("fifthLine").style.height =
    //         contractcustomerpannalidheight + "px";
    //       document
    //         .getElementById("fifthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fifthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // 7 pannal for dissable
    //     setTimeout(function () {
    //       let shipcostpannalid = document.getElementById("shipcostpannalid");
    //       let shipcostpannalidheight = shipcostpannalid.clientHeight;
    //       document.getElementById("sixLine").setAttribute("style", "");
    //       document.getElementById("sixLine").style.height =
    //         shipcostpannalidheight + "px";
    //       document
    //         .getElementById("sixLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("sixLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //   }
    // },
    // //pannal for 6
    // contractcustomerpannalchangevalue() {
    //   if (this.contractcustomerpannalBox === true) {
    //     this.contractcustomerpannalBox = false;
    //     this.value = "0";
    //     this.contractcustomerpannalnumber = "0/7";
    //     this.contractcustomerpannaliconcolor = "#d8d8d8";
    //     document
    //       .getElementById("fifthLine")
    //       .classList.remove("changelengthcolor");
    //     document
    //       .getElementById("fifthLine")
    //       .classList.add("originallengthcolor");
    //     document.getElementById("sixCircle2").classList.remove("c3changecolor");
    //     document.getElementById("sixCircle2").classList.add("c3originalcolor");
    //     setTimeout(function () {
    //       let contractcustomerpannalid = document.getElementById(
    //         "contractcustomerpannalid"
    //       );
    //       let contractcustomerpannalidheight =
    //         contractcustomerpannalid.clientHeight;
    //       document.getElementById("fifthLine").setAttribute("style", "");
    //       document.getElementById("fifthLine").style.height =
    //         contractcustomerpannalidheight + "px";
    //     }, 500);
    //   } else if (this.contractcustomerpannalBox === false) {
    //     this.conclusionpannalBox = false;
    //     this.addresspannalBox = false;
    //     this.offerpannalBox = false;
    //     this.auctionpannalBox = false;
    //     this.contracttextpannalBox = false;
    //     this.shipcostpannalBox = false;
    //     this.conclusionpannaliconcolor = "#d8d8d8";
    //     this.addresspannaliconcolor = "#d8d8d8";
    //     this.offerpannaliconcolor = "#d8d8d8";
    //     this.auctionpannaliconcolor = "#d8d8d8";
    //     this.contracttextpannaliconcolor = "#d8d8d8";
    //     this.shipcostpannaliconcolor = "#d8d8d8";
    //     this.conclusionpannalnumber = "0/1";
    //     this.addresspannalnumber = "0/1";
    //     this.offerpannalnumber = "0/7";
    //     this.auctionpannalnumber = "0/7";
    //     this.contracttextpannalnumber = "0/7";
    //     this.shipcostpannalnumber = "0/7";
    //     this.contractcustomerpannalBox = true;
    //     this.value = "72";
    //     this.contractcustomerpannalnumber = "6/7";
    //     this.contractcustomerpannaliconcolor = "#ffa300";
    //     document
    //       .getElementById("fifthLine")
    //       .classList.remove("originallengthcolor");
    //     document.getElementById("fifthLine").classList.add("changelengthcolor");
    //     document
    //       .getElementById("sixCircle2")
    //       .classList.remove("c3originalcolor");
    //     document.getElementById("sixCircle2").classList.add("c3changecolor");
    //     setTimeout(function () {
    //       let contractcustomerpannalid = document.getElementById(
    //         "contractcustomerpannalid"
    //       );
    //       let contractcustomerpannalidheight =
    //         contractcustomerpannalid.clientHeight;
    //       document.getElementById("fifthLine").setAttribute("style", "");
    //       document.getElementById("fifthLine").style.height =
    //         contractcustomerpannalidheight / 2 + "px";
    //     }, 500);
    //     // pannal 1 for dissable
    //     setTimeout(function () {
    //       let addresspannalid = document.getElementById("addresspannalid");
    //       let addresspannalidheight = addresspannalid.clientHeight;
    //       document.getElementById("prefirstLine").setAttribute("style", "");
    //       document.getElementById("prefirstLine").style.height =
    //         addresspannalidheight + "px";
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal  2 for dissable
    //     setTimeout(function () {
    //       let offerpannalid = document.getElementById("offerpannalid");
    //       let offerpannalidheight = offerpannalid.clientHeight;
    //       document.getElementById("firstLine").setAttribute("style", "");
    //       document.getElementById("firstLine").style.height =
    //         offerpannalidheight + "px";
    //       document
    //         .getElementById("firstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("firstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 3 for dissable
    //     setTimeout(function () {
    //       let conclusionpannalid = document.getElementById(
    //         "conclusionpannalid"
    //       );
    //       let conclusionpannalidheight = conclusionpannalid.clientHeight;
    //       document.getElementById("secondLine").setAttribute("style", "");
    //       document.getElementById("secondLine").style.height =
    //         conclusionpannalidheight + "px";
    //       document
    //         .getElementById("secondLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("secondLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 4 for dissable
    //     setTimeout(function () {
    //       let auctionpannalid = document.getElementById("auctionpannalid");
    //       let auctionpannalidheight = auctionpannalid.clientHeight;
    //       document.getElementById("thirdLine").setAttribute("style", "");
    //       document.getElementById("thirdLine").style.height =
    //         auctionpannalidheight + "px";
    //       document
    //         .getElementById("thirdLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("thirdLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 5 for dissable
    //     setTimeout(function () {
    //       let contracttextpannalid = document.getElementById(
    //         "contracttextpannalid"
    //       );
    //       let contracttextpannalidheight = contracttextpannalid.clientHeight;
    //       document.getElementById("fourthLine").setAttribute("style", "");
    //       document.getElementById("fourthLine").style.height =
    //         contracttextpannalidheight + "px";
    //       document
    //         .getElementById("fourthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fourthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // 7 pannal for dissable
    //     setTimeout(function () {
    //       let shipcostpannalid = document.getElementById("shipcostpannalid");
    //       let shipcostpannalidheight = shipcostpannalid.clientHeight;
    //       document.getElementById("sixLine").setAttribute("style", "");
    //       document.getElementById("sixLine").style.height =
    //         shipcostpannalidheight + "px";
    //       document
    //         .getElementById("sixLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("sixLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sevenCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //   }
    // },
    // //pannalfor 7
    // shipcostpannalchangevalue() {
    //   if (this.shipcostpannalBox === true) {
    //     this.shipcostpannalBox = false;
    //     this.value = "0";
    //     this.shipcostpannalnumber = "0/7";
    //     this.shipcostpannaliconcolor = "#d8d8d8";
    //     document
    //       .getElementById("sixLine")
    //       .classList.remove("changelengthcolor");
    //     document.getElementById("sixLine").classList.add("originallengthcolor");
    //     document
    //       .getElementById("sevenCircle2")
    //       .classList.remove("c3changecolor");
    //     document
    //       .getElementById("sevenCircle2")
    //       .classList.add("c3originalcolor");
    //     setTimeout(function () {
    //       let shipcostpannalid = document.getElementById("shipcostpannalid");
    //       let shipcostpannalidheight = shipcostpannalid.clientHeight;
    //       document.getElementById("sixLine").setAttribute("style", "");
    //       document.getElementById("sixLine").style.height =
    //         shipcostpannalidheight + "px";
    //     }, 500);
    //   } else if (this.shipcostpannalBox === false) {
    //     this.conclusionpannalBox = false;
    //     this.addresspannalBox = false;
    //     this.offerpannalBox = false;
    //     this.auctionpannalBox = false;
    //     this.contracttextpannalBox = false;
    //     this.contractcustomerpannalBox = false;
    //     this.conclusionpannaliconcolor = "#d8d8d8";
    //     this.addresspannaliconcolor = "#d8d8d8";
    //     this.offerpannaliconcolor = "#d8d8d8";
    //     this.auctionpannaliconcolor = "#d8d8d8";
    //     this.contracttextpannaliconcolor = "#d8d8d8";
    //     this.contractcustomerpannaliconcolor = "#d8d8d8";
    //     this.conclusionpannalnumber = "0/1";
    //     this.addresspannalnumber = "0/1";
    //     this.offerpannalnumber = "0/7";
    //     this.auctionpannalnumber = "0/7";
    //     this.contracttextpannalnumber = "0/7";
    //     this.contractcustomerpannalnumber = "0/7";
    //     this.shipcostpannalBox = true;
    //     this.value = "86";
    //     this.shipcostpannalnumber = "7/7";
    //     this.shipcostpannaliconcolor = "#ffa300";
    //     document
    //       .getElementById("sixLine")
    //       .classList.remove("originallengthcolor");
    //     document.getElementById("sixLine").classList.add("changelengthcolor");
    //     document
    //       .getElementById("sevenCircle2")
    //       .classList.remove("c3originalcolor");
    //     document.getElementById("sevenCircle2").classList.add("c3changecolor");
    //     setTimeout(function () {
    //       let shipcostpannalid = document.getElementById("shipcostpannalid");
    //       let shipcostpannalidheight = shipcostpannalid.clientHeight;
    //       document.getElementById("sixLine").setAttribute("style", "");
    //       document.getElementById("sixLine").style.height =
    //         shipcostpannalidheight / 2 + "px";
    //     }, 500);
    //     // pannal 1 for dissable
    //     setTimeout(function () {
    //       let addresspannalid = document.getElementById("addresspannalid");
    //       let addresspannalidheight = addresspannalid.clientHeight;
    //       document.getElementById("prefirstLine").setAttribute("style", "");
    //       document.getElementById("prefirstLine").style.height =
    //         addresspannalidheight + "px";
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("prefirstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("firstCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal  2 for dissable
    //     setTimeout(function () {
    //       let offerpannalid = document.getElementById("offerpannalid");
    //       let offerpannalidheight = offerpannalid.clientHeight;
    //       document.getElementById("firstLine").setAttribute("style", "");
    //       document.getElementById("firstLine").style.height =
    //         offerpannalidheight + "px";
    //       document
    //         .getElementById("firstLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("firstLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("secondCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 3 for dissable
    //     setTimeout(function () {
    //       let conclusionpannalid = document.getElementById(
    //         "conclusionpannalid"
    //       );
    //       let conclusionpannalidheight = conclusionpannalid.clientHeight;
    //       document.getElementById("secondLine").setAttribute("style", "");
    //       document.getElementById("secondLine").style.height =
    //         conclusionpannalidheight + "px";
    //       document
    //         .getElementById("secondLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("secondLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("thirdCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 4 for dissable
    //     setTimeout(function () {
    //       let auctionpannalid = document.getElementById("auctionpannalid");
    //       let auctionpannalidheight = auctionpannalid.clientHeight;
    //       document.getElementById("thirdLine").setAttribute("style", "");
    //       document.getElementById("thirdLine").style.height =
    //         auctionpannalidheight + "px";
    //       document
    //         .getElementById("thirdLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("thirdLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fourthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     // pannal 5 for dissable
    //     setTimeout(function () {
    //       let contracttextpannalid = document.getElementById(
    //         "contracttextpannalid"
    //       );
    //       let contracttextpannalidheight = contracttextpannalid.clientHeight;
    //       document.getElementById("fourthLine").setAttribute("style", "");
    //       document.getElementById("fourthLine").style.height =
    //         contracttextpannalidheight + "px";
    //       document
    //         .getElementById("fourthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fourthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("fifthCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //     //pannal 6 for dissable
    //     setTimeout(function () {
    //       let contractcustomerpannalid = document.getElementById(
    //         "contractcustomerpannalid"
    //       );
    //       let contractcustomerpannalidheight =
    //         contractcustomerpannalid.clientHeight;
    //       document.getElementById("fifthLine").setAttribute("style", "");
    //       document.getElementById("fifthLine").style.height =
    //         contractcustomerpannalidheight + "px";
    //       document
    //         .getElementById("fifthLine")
    //         .classList.remove("changelengthcolor");
    //       document
    //         .getElementById("fifthLine")
    //         .classList.add("originallengthcolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.remove("c3changecolor");
    //       document
    //         .getElementById("sixCircle2")
    //         .classList.add("c3originalcolor");
    //     }, 600);
    //   }
    // },
  },
  //Computed:
  computed: {
    ...mapState(["help", "edit", "maincolor"]),

    // pannel1Watcher: function () {
    //   return (
    //   this.consent.addressUserModel,
    //   this.consent.addressnewRechtsform,
    //   this.consent.addressnewFirmenname,
    //   this.consent.newselection1,
    //   this.consent.newselection3,
    //   this.consent.addressPlz,
    //   this.consent.addressOrt,
    //   this.consent.addressStrasse,
    //   this.consent.addressHausnummer,
    //    new Date()
    //   )
    // },
    // pannel2Watcher: function () {
    //   return (
    //     // this.consent.offerradio,
    //     // this.consent.conclusioncontractradio1,
    //     // this.consent.conclusioncontractradio2,
    //     // this.consent.conclusioncontractradio3,
    //     // this.consent.auctionpannalradio1,
    //     // this.consent.auctionpannalradio2,
    //     // this.consent.contracttextpannalradio,
    //     // this.consent.contracttextpannalinputfield,
    //     // this.consent.contractcustomerpannalinputfield1,
    //     // this.consent.contractcustomerpannalinputfield2,
    //     // this.consent.contractcustomerpannalinputfield3,
    //     // this.consent.contractcustomerpannalradio1,

    //      this.consent.addressnewTelefonnummer,
    //     this.consent.addressnewEmail,
    //     this.consent.addressnewVorname,
    //     this.consent.addressnewNachname,
    //     this.consent.addressnewOrt,
    //     this.consent.addressnewStrasse,
    //     this.consent.addressnewHausnummer,
    //     this.consent.addressnewPLZ,
    //     new Date()
    //   );
    // },
    // pannel3Watcher: function () {
    //   return (
    //     this.consent.contractcustomerpannalinputfield4,
    //     this.consent.shipcostpannalradio1,
    //     this.consent.shipcostpannalradio2,
    //     this.consent.shipcostpannalradio3,
    //     new Date()
    //   );
    // },
    // pannel4Watcher: function () {
    //   return this.consent.shipcostpannalradio4, new Date();
    // },
    // pannel5Watcher: function () {
    //   return this.consent.newpannal5radio, new Date();
    // },
    // pannel6Watcher: function () {
    //   return this.consent.newpannal6radio, new Date();
    // },
    // pannel7Watcher: function () {
    //   return this.consent.transferpannalradio2, new Date();
    // },
    // addresspannalprogress: function(){
    //   return (
    //     this.selected,
    //     this.consent.addressnewFirmenname,
    //     this.consent.addressnewRechtsform,
    //     this.consent.newselection1,
    //     this.consent.newselection2,
    //     this.consent.addressnewStrasse,
    //     this.consent.addressnewHausnummer,
    //     this.consent.addressnewPLZ,
    //     this.consent.addressnewOrt,
    //     this.consent.addressnewTelefonnummer,
    //     this.consent.addressnewEmail,
    //     this.consent.addressnewDomain,
    //     new Date()
    //   );
    // },
    pannalprogress1: function () {
      return JSON.stringify(this.document), new Date();
    },
    pannalprogress2: function () {
      return JSON.stringify(this.document), new Date();
    },
    pannalprogress3: function () {
      return JSON.stringify(this.document), new Date();
    },
    amazon_special: function () {
      return JSON.stringify(this.document), new Date();
    },

    // pannal_drag_drop : function () {
    //   return JSON.stringify(this.document.leftSide.card), new Date();
    // },
    circle_active: function () {
      return JSON.stringify(this.document), new Date();
    },
    contract_open_in_creator: function () {
      return JSON.stringify(this.document), new Date();
    },
  },
};
</script>
<style  scoped>
input.radio {
  width: auto;
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
/* // ::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
//   border-style: none !important; 
// }
// ::v-deep .v-text-field > .v-input__control > .v-input__slot:after {
//   border-style: none !important; 
// } */
</style>


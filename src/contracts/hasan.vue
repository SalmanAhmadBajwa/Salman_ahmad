<template>
  <v-container >
    <v-progress-linear
      :value="document.leftSide.linearprogressvalue"
      fixed
    absolute
     style="width: 100vw;margin-top:3.4em;z-index:10;" 
      color="#ffa300"
      background-opacity=0
    >
    </v-progress-linear>
       <v-layout style="width: 100vw; background-color: #d8d8d8" class="mt-9">
      <v-card
        elevation="0"
        style="min-height:120vh; width: 100vw; background-color: #d8d8d8"
      >
        <div style="display: flex">
        <div style="width: 45%;background-color: #f6f6f6; margin-right: 5px; position: relative">
          <v-card 
          elevation="0"
          style="background-color: #f6f6f6;min-height:120vh;">
            <div
              style="
                height: 1vh;
                min-height: 1vh;
                margin-left: 20px;
                width: 85%;
                margin-bottom: 25px;
              "
            ></div>
            <v-expansion-panels>
              <!-- 1st pannal -->
              <v-expansion-panel
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
                v-for="(item,i) in document.leftSide.card"
                :key="i"
              >
        <v-expansion-panel-header expand-icon="" @click="disable_and_enable_properties(item)">
        <div style="padding-left: 2%">
            <v-icon
              v-if="item.isactive===false"
              color="#d8d8d8"
              style="font-size: 10px"
              @click="getvalue()"
              >mdi-checkbox-blank-circle
            </v-icon>
            <v-icon
              v-if="item.isactive===true"
              color="#ffa300"
              style="font-size: 10px"
              @click="getvalue()"
              >mdi-checkbox-blank-circle
            </v-icon> 
        </div>

          <strong>{{ item.name | truncateEnd(36, "...") }}</strong>
          <div style="position:absolute;right:15px;top:13px;"  v-if="item.completed_fields===0">
                  <v-chip class="" color="#606060" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white" v-if="item.total_fields<9">
                      {{item.completed_fields}} / {{item.total_fields}}
                    </p> 
                    <p class="pt-4 pl-8" style="color:white" v-if="item.total_fields>9">
                      {{item.completed_fields}} /{{item.total_fields}}
                    </p> 
                  </v-chip>
          </div>
          <div style="position:absolute;right:15px;top:13px;"  v-if="item.completed_fields!==0">
                   <v-chip class="" color="#ffa300" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white" v-if="item.total_fields<9">
                     {{item.completed_fields}} / {{item.total_fields}}
                     </p> 
                     <p class="pt-4 pl-8" style="color:white" v-if="item.total_fields>9">
                     {{item.completed_fields}} /{{item.total_fields}}
                     </p> 
                     </v-chip>
          </div>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <div style="" class=""  
            v-for="(item1,j) in item.section"
            :key="j">
              <p style="word-break: break-word;">{{ item1.statement }}</p>
              <div class="row" v-if="item1.type==='textfield'">
                <div style="" :class="item2.size"
                v-for="(item2,k) in item1.fields"
                :key="k"
                >
                  <v-text-field 
                    rounded
                    dense
                    clearable
                    color="#FFA300"
                    outlined
                    :label = item2.line
                    v-model= item2.value
                  >
                  </v-text-field>
                  </div>
              </div>
              <div class="row" v-if="item1.type==='dropselect'">
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
                     color="#FFA300"
                  ></v-select>
                  <div v-if="item1.dropselect_display===true">
                  
                    <div style="" class="col-12"  
                      v-for="(item3,l) in item1.dropselect"
                      :key="l"
                    >
                    <div v-if="item3.on_which_to_show===item1.value">
                    <p style="word-break: break-word;">{{ item3.statement }}</p>  
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
                    :menu-props="{ bottom: true, offsetY: true }"
                     color="#FFA300"
                  ></v-select>
                  </div> 
                  </div> 
                  </div>
                  </div>
              </div>
              
              <div class="" v-if="item1.type==='radio'">
                <v-radio-group v-model="item1.value">
                <div style="" class=""  
                v-for="(item2,k) in item1.fields"
                :key="k">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :label="item2.line"
                        :value="item2.value"
                      ></v-radio>
                    </div>
                </v-radio-group>
                <div v-if="item1.textfieldapproval===true">
                <div style="" class="col-12"  
                v-for="(item3,l) in item1.textfieldapprovalfields"
                :key="l"
                >
                  
                  <div v-if="item3.on_which_to_show===item1.value">
                  <div v-if="item3.statement"> {{item3.statement}} </div>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    color="#FFA300"
                    outlined
                    :label = item3.line
                    v-model= item3.value
                  >
                  </v-text-field>
                  </div> 
                  </div> 
                  </div>

                  <div v-if="item1.dropselect_display===true">
                  
                    <div style="" class="col-12"  
                      v-for="(item3,l) in item1.dropselect"
                      :key="l"
                    >
                    <div v-if="item3.on_which_to_show===item1.value">
                    <p style="word-break: break-word;">{{ item3.statement }}</p>  
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
                    :menu-props="{ bottom: true, offsetY: true }"
                     color="#FFA300"
                  ></v-select>
                  </div> 
                  </div> 
                  </div>

              </div>
              <div class="row" v-if="item1.type==='checkbox'">
                <div style="" class="col-12"  
                v-for="(item2,k) in item1.fields"
                :key="k">
                  <v-checkbox
                    color="#FFA300"
                    v-model=item1.value
                    :label=item2.line
                    :value=item2.value
                  ></v-checkbox>
                    </div>
                
              </div>
              
          </div>
        </v-expansion-panel-content>

           <div style="position:absolute;top:105%;left:30%;">1</div>
              </v-expansion-panel>
              
              <!-- <v-icon color="#d8d8d8" style="font-size: 10px">mdi-checkbox-blank-circle</v-icon> -->
                
              
              <!-- anday -->
              <ul style="position: absolute; top: -36px; right: -15px">
                <li>
                  <div
                    id="prefirstLine"
                    class="smalldivider originallengthcolor"
                  ></div>
                </li>
                <li>
                  <div id="firstCircle" class="node c1color">
                    <div id="firstCircle1" class="node1 c2color">
                      <div id="firstCircle2" class="node2"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div id="firstLine" class="divider originallengthcolor"></div>
                </li>
                <li>
                  <div id="secondCircle" class="node c1color">
                    <div id="secondCircle1" class="node1 c2color">
                      <div id="secondCircle2" class="node2"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    id="secondLine"
                    class="divider originallengthcolor"
                  ></div>
                </li>
                <li>
                  <div id="thirdCircle" class="node c1color">
                    <div id="thirdCircle1" class="node1 c2color">
                      <div id="thirdCircle2" class="node2"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div id="thirdLine" class="divider originallengthcolor"></div>
                </li>
                <li>
                  <div id="fourthCircle" class="node c1color">
                    <div id="fourthCircle1" class="node1 c2color">
                      <div id="fourthCircle2" class="node2"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    id="fourthLine"
                    class="divider originallengthcolor"
                  ></div>
                </li>
                <li>
                  <div id="fifthCircle" class="node c1color">
                    <div id="fifthCircle1" class="node1 c2color">
                      <div id="fifthCircle2" class="node2"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div id="fifthLine" class="divider originallengthcolor"></div>
                </li>
                <li>
                  <div id="sixCircle" class="node c1color">
                    <div id="sixCircle1" class="node1 c2color">
                      <div id="sixCircle2" class="node2"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div id="sixLine" class="divider originallengthcolor"></div>
                </li>
                <li>
                  <div id="sevenCircle" class="node c1color">
                    <div id="sevenCircle1" class="node1 c2color">
                      <div id="sevenCircle2" class="node2"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    id="sevenLine"
                    class="largedivider originallengthcolor"
                  ></div>
                </li>
              </ul>
              
            </v-expansion-panels>
          </v-card>
        </div>

        <!-- card2 -->
        
        <div style="width: 55%;background-color: #ffffff;position: relative" id="printme">
          <v-card 
          elevation="0"
          style="background-color: #ffffff;min-height:120vh;">
          <v-list>
                  <v-list-item>
                      <v-list-item-content
                      style="
                        margin-right: 20mm;
                        padding-left: 20mm !important;
                        margin-top: 3%;
                      "
                    >
                    <div v-for="(item,i) in document.rightSide.card" :key="i" >
                      <div v-for="(item1,j) in item.section" :key="j" >
                        <div v-if="item1.if=== true">
                          <!-- <div v-for="(item2,k) in item1.value" :key="k" > -->
                          <div v-if="item1.value">
                            <div v-if="item1.isStrong=== true">
                              <div v-if="item1.heading_property_number">
                                 <p :style=item1.style>
                                  <strong>§{{item1.heading_value}} <br /> {{item1.display}} </strong>
                                </p>
                              </div>
                              <div v-else>
                                <p :style=item1.style>
                                  <strong>{{item1.display}}</strong>
                                </p>
                              </div>
                            </div>
                            <div v-else>
                              <div v-if="item1.inner_heading_property_number">
                              <p :style=item1.style>
                                {{item1.inner_heading_value}}.{{item1.display}}
                              </p>
                              </div>
                              <div v-else>
                                <p :style=item1.style>
                                  {{item1.display}}
                                </p>
                              </div>
                            </div>
                            <div v-if="item1.afterlinebreak">
                              <div v-for="(item2,k) in item1.afterlinebreak" :key="k" >
                                  <br>
                              </div> 
                            </div>
                            
                          
                          </div>
                        </div>
                      </div>
                    </div>
                    </v-list-item-content>
                  </v-list-item>
               </v-list>
          </v-card>
        </div>
        </div>
      </v-card>
      </v-layout>
  </v-container>
</template>

<script>
const Cryptr = require('cryptr');
var electron = require("electron");
var fs = require("fs");
import store from "../store";
const cryptr = new Cryptr('myTotalySecretKey');
import { mapState } from "vuex";
//import CountryFlag from "@dzangolab/vue-country-flag-icon";
import "@dzangolab/vue-country-flag-icon/dist/CountryFlag.css"; // import stylesheet
export default {
  name: "consent",
  components: {
    //CountryFlag,
  },
  // beforeDestroy() {
  //   if (store.state.isAdmin === true) {
  //     this.disable_isactive_property()
  //     this.org_value2 = JSON.parse(JSON.stringify(this.document));
  //     if (JSON.stringify(this.org_value2) !== JSON.stringify(this.org_value1)) {
  //       this.add_percentage_admin();
  //       this.writefileandscreenshot_admin();
  //     }
  //   } else {
  //     this.disable_isactive_property()
  //     this.org_value2 = JSON.parse(JSON.stringify(this.document));
  //     if (JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)) {
  //       this.add_percentage_user()
  //       this.writefileandscreenshot_user();
  //     }
  //   }
  // },
  
// mounted
  mounted() {
    //  if(store.state.isAdmin === true){
    //   this.org_value1 = JSON.parse(JSON.stringify(this.document));
    //   this.mounted_admin()
    // }
    // else{
    //     this.org_value1 = JSON.parse(JSON.stringify(this.document));
    //     this.mounted_user()
    // }
  },
  //Data:
  data: () => ({
    current_admin_name: "",
    current_admin_versions: [],
    org_value2:{},
    org_value1:{},
    document:{
      leftSide : {
        linearprogressvalue: 0, 
        card:[
          {
            id: 1,
            name: "Vertragspartner",
            total_fields : 8,
            completed_fields : 0,
            linearprogressvalue : 0,
            isactive : false,
            havesomevalue: false,
            section: [
              {
                eid: "s1",
                statement: "Unter welchem Namen betreiben Sie Ihren Amazon-Shop?",
                type: "textfield",
                length : 1,
                fields : [
                  {
                    eid: "s1-ms1",
                    line: "",
                    value:"",
                    size: "col-12"
                  },
                ],
              },
               
              {
                eid : "s2",
                statement: "Handelt es sich bei dem Vertragspartner des Kunden um eine natürliche oder juristische Person?",
                type: "dropselect",
                length : 2,
                value:"",
                choices: ["Natürliche Person", "Juristische Person"],
                dropselect_display : true,
                dropselect: [{
                  on_which_to_show : "Natürliche Person",
                  eid : "s2-ms1",
                  statement: "Wer soll Vertragspartner des Kunden werden?",
                  type: "dropselect",
                  length : 2,
                  value:"",
                  choices: ["keine Angabe",  "Frau", "Herr"]
                }]
              },
              {
                eid : "s3",
                statement: "Wer soll Vertragspartner des Kunden werden?",
                type: "textfield",
                length : 6,
                fields : [
                  {
                    eid : "s3-ms1",
                    line: "Vorname",
                    value:"",
                    size: "col-5"
                  },
                  {
                    eid : "s3-ms2",
                    line: "Nachname",
                    value:"",
                    size: "col-7"
                  },
                   {
                    eid : "s3-ms3",
                    line: "Strasse",
                    value:"",
                    size: "col-8"
                  },
                  {
                    eid : "s3-ms4",
                    line: "Hausnummer",
                    value:"",
                    size: "col-4"
                  },
                  {
                    eid : "s3-ms5",
                    line: "PLZ",
                    value: "",
                    size: "col-3"
                  },
                  {
                    eid : "s3-ms6",
                    line: "Email",
                    value:"",
                    size: "col-9"
                  }
                ],
              },

            ]
          },
          {
            id: 2,
            name: "Vertragspartner",
            total_fields : 8,
            completed_fields : 0,
            linearprogressvalue : 0,
            isactive : false,
            havesomevalue: false,
            section: [
              {
                eid: "s1",
                statement: "Unter welchem Namen betreiben Sie Ihren Amazon-Shop?",
                type: "textfield",
                length : 1,
                fields : [
                  {
                    eid: "s1-ms1",
                    line: "",
                    value:"",
                    size: "col-12"
                  },
                ],
              },
               
              {
                eid : "s2",
                statement: "Handelt es sich bei dem Vertragspartner des Kunden um eine natürliche oder juristische Person?",
                type: "dropselect",
                length : 2,
                value:"",
                choices: ["Natürliche Person", "Juristische Person"],
                dropselect_display : true,
                dropselect: [{
                  on_which_to_show : "Natürliche Person",
                  eid : "s2-ms1",
                  statement: "Wer soll Vertragspartner des Kunden werden?",
                  type: "dropselect",
                  length : 2,
                  value:"",
                  choices: ["keine Angabe",  "Frau", "Herr"]
                }]
              },
              {
                eid : "s3",
                statement: "Wer soll Vertragspartner des Kunden werden?",
                type: "textfield",
                length : 6,
                fields : [
                  {
                    eid : "s3-ms1",
                    line: "Vorname",
                    value:"",
                    size: "col-5"
                  },
                  {
                    eid : "s3-ms2",
                    line: "Nachname",
                    value:"",
                    size: "col-7"
                  },
                   {
                    eid : "s3-ms3",
                    line: "Strasse",
                    value:"",
                    size: "col-8"
                  },
                  {
                    eid : "s3-ms4",
                    line: "Hausnummer",
                    value:"",
                    size: "col-4"
                  },
                  {
                    eid : "s3-ms5",
                    line: "PLZ",
                    value: "",
                    size: "col-3"
                  },
                  {
                    eid : "s3-ms6",
                    line: "Email",
                    value:"",
                    size: "col-9"
                  }
                ],
              },

            ]
          },
        ]
      },
      rightSide : {
        card:[
          {
            id : 1,
            name: "Vertragspartner",
            section: [
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      
                      depend_upon : [],
                      display:  "Allgemeine Geschäftsbedingungen"
                    }
                  ],
               // values_that_update_string :["Rechtsform", "Fotos"],  
                values_on_which_depend :["s1-ms1"],                
                value: "", //
                display: "",
                style :"text-align:center; font-weight: 700 ; font-size: 24px",
                isStrong: true,
                afterlinebreak : 0,
                heading_property_number: false,
                heading_value : 0 ,
                displayed : false,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      
                      depend_upon : ["s1-ms1"],
                      display:  "[[0]]"
                    }
                  ],
               // values_that_update_string :["Rechtsform", "Fotos"],  
                values_on_which_depend :["s1-ms1"],                
                value: "", //
                display: "",
                style :"word-break: break-word;text-align: center; font-weight: 700; font-size: 18.72px",
                isStrong: true,
                afterlinebreak : 0,
                heading_property_number: false,
                heading_value : 0 ,
                displayed : false,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      
                      depend_upon : [],
                      display:  "Vertragspartner"
                    }
                  ],
               // values_that_update_string :["Rechtsform", "Fotos"],  
                values_on_which_depend :["s1-ms1","s2-ms1","s3-ms1","s3-ms2","s3-ms3","s3-ms4","s3-ms5","s3-ms6"],                
                value: "", //
                display: "",
                style :"text-align: center; font-weight: 700;font-size: 16px",
                isStrong: true,
                afterlinebreak : 0,
                heading_property_number: true,
                heading_value : 0 ,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      
                      depend_upon : ["s1-ms1"],
                      display:  "Vertragspartner des Kunden für die über den Amazon Shop [[0]] abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots:"
                    }
                  ],
               // values_that_update_string :["Rechtsform", "Fotos"],  
                values_on_which_depend :["s1-ms1"],                
                value: "", //
                display: "",
                style :"word-break: break-word;text-align: justify; margin-top: 0.5%",
                isStrong: false,
                afterlinebreak : 0,
                heading_property_number: false,
                heading_value : 0 ,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      depend_upon : [{"s2-ms1":["Frau","Herr"]},"s3-ms1","s3-ms2"],
                      display:  " [[0]]  [[1]] [[2]]"
                      
                    }
                  ],
                values_on_which_depend :["s3-ms1", "s3-ms2"],
                value: "", //
                display: "",
                style:  "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                heading_property_number: false,
                heading_value : 0 ,
                isStrong: true,
                afterlinebreak : 0,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      depend_upon : ["s3-ms3","s3-ms4"],
                      display:  " [[0]]  [[1]] "
                      
                    }
                  ],
                values_on_which_depend :["s3-ms3", "s3-ms4"],
                value: "", //
                display: "",
                style:  "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                heading_property_number: false,
                heading_value : 0 ,
                isStrong: true,
                afterlinebreak : 0,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      depend_upon : ["s3-ms5","s3-ms6"],
                      display:  " [[0]]  [[1]] "
                      
                    }
                  ],
                values_on_which_depend :["s3-ms5", "s3-ms6"],
                value: "", //
                display: "",
                style:  "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                heading_property_number: false,
                heading_value : 0 ,
                isStrong: true,
                afterlinebreak : 0,
              },
            ]
          },
          {
            id : 1,
            name: "Vertragspartner",
            section: [
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      
                      depend_upon : [],
                      display:  "Allgemeine Geschäftsbedingungen"
                    }
                  ],
               // values_that_update_string :["Rechtsform", "Fotos"],  
                values_on_which_depend :["s1-ms1"],                
                value: "", //
                display: "",
                style :"text-align:center; font-weight: 700 ; font-size: 24px",
                isStrong: true,
                afterlinebreak : 0,
                heading_property_number: false,
                heading_value : 0 ,
                displayed : false,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      
                      depend_upon : ["s1-ms1"],
                      display:  "[[0]]"
                    }
                  ],
               // values_that_update_string :["Rechtsform", "Fotos"],  
                values_on_which_depend :["s1-ms1"],                
                value: "", //
                display: "",
                style :"word-break: break-word;text-align: center; font-weight: 700; font-size: 18.72px",
                isStrong: true,
                afterlinebreak : 0,
                heading_property_number: false,
                heading_value : 0 ,
                displayed : false,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      
                      depend_upon : [],
                      display:  "Vertragspartner"
                    }
                  ],
               // values_that_update_string :["Rechtsform", "Fotos"],  
                values_on_which_depend :["s1-ms1","s2-ms1","s3-ms1","s3-ms2","s3-ms3","s3-ms4","s3-ms5","s3-ms6"],                
                value: "", //
                display: "",
                style :"text-align: center; font-weight: 700;font-size: 16px",
                isStrong: true,
                afterlinebreak : 0,
                heading_property_number: true,
                heading_value : 0 ,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      
                      depend_upon : ["s1-ms1"],
                      display:  "Vertragspartner des Kunden für die über den Amazon Shop [[0]] abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots:"
                    }
                  ],
               // values_that_update_string :["Rechtsform", "Fotos"],  
                values_on_which_depend :["s1-ms1"],                
                value: "", //
                display: "",
                style :"word-break: break-word;text-align: justify; margin-top: 0.5%",
                isStrong: false,
                afterlinebreak : 0,
                heading_property_number: false,
                heading_value : 0 ,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      depend_upon : [{"s2-ms1":["Frau","Herr"]},"s3-ms1","s3-ms2"],
                      display:  " [[0]]  [[1]] [[2]]"
                      
                    }
                  ],
                values_on_which_depend :["s3-ms1", "s3-ms2"],
                value: "", //
                display: "",
                style:  "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                heading_property_number: false,
                heading_value : 0 ,
                isStrong: true,
                afterlinebreak : 0,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      depend_upon : ["s3-ms3","s3-ms4"],
                      display:  " [[0]]  [[1]] "
                      
                    }
                  ],
                values_on_which_depend :["s3-ms3", "s3-ms4"],
                value: "", //
                display: "",
                style:  "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                heading_property_number: false,
                heading_value : 0 ,
                isStrong: true,
                afterlinebreak : 0,
              },
              {
                if : true,
                type: "or", // or ya and
                // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                dependent_values: [
                    {
                      depend_upon : ["s3-ms5","s3-ms6"],
                      display:  " [[0]]  [[1]] "
                      
                    }
                  ],
                values_on_which_depend :["s3-ms5", "s3-ms6"],
                value: "", //
                display: "",
                style:  "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                heading_property_number: false,
                heading_value : 0 ,
                isStrong: true,
                afterlinebreak : 0,
              },
            ]
          },
         
          
          
        ]
      },
    },

  }),

  //watch
  watch: { 
    // pannalprogress1: function(){  
    //   for( var i=0; i< this.document.leftSide.card.length ; i++){
    //     var pannalfields = this.complete_fields_checker_v2(this.document.leftSide.card[i].section);
    //     this.document.leftSide.card[i].completed_fields = this.complete_fields_checker(pannalfields);
    //     if(this.document.leftSide.card[i].completed_fields>0){
    //       this.document.leftSide.card[i].havesomevalue = true
    //     }
    //     else if(this.document.leftSide.card[i].completed_fields === 0){
    //       this.document.leftSide.card[i].havesomevalue = false
    //     }
    //   }
    // },
    // pannalprogress2: function(){
    //   var value_counter = 1;
    //   for( var i=0; i< this.document.rightSide.card.length ; i++){
    //     var array = new Array();
    //     var section_counter = 1 ;
    //     for( var j=0; j< this.document.rightSide.card[i].section.length ; j++){
    //        [this.document.rightSide.card[i].section[j].value,this.document.rightSide.card[i].section[j].display] = this.getting_values_and_setting_values(
    //         this.document.rightSide.card[i].section[j].values_on_which_depend,i,this.document.rightSide.card[i].section[j].dependent_values)
    //        array.push(this.document.rightSide.card[i].section[j].value)
    //        if(this.document.rightSide.card[i].section[j].value>0){
    //         this.document.rightSide.card[i].section[j].displayed = true
    //        }
    //        else {
    //          this.document.rightSide.card[i].section[j].displayed = false
    //        }
    //     }
    //     if(array.some(el => el > 0)){
    //       if(this.document.leftSide.card[i].havesomevalue === true){
    //       for(j=0; j< this.document.rightSide.card[i].section.length ; j++){  
            
    //       if(this.document.rightSide.card[i].section[j].heading_property_number === true){
    //         //if(this.document.rightSide.card[i].){
    //           this.document.rightSide.card[i].section[j].heading_value = value_counter
    //           value_counter ++;
    //           //break;
    //         //}
    //       }
    //       if(this.document.rightSide.card[i].section[j].inner_heading_property_number === true){
    //             if(this.document.rightSide.card[i].section[j].displayed === true){
    //               this.document.rightSide.card[i].section[j].inner_heading_value = section_counter
    //               section_counter++;
    //             }
    //           }
    //       }
    //     }
    //     }
        
    //   }
    // },
    // pannalprogress3: function(){ 
    //   var per_expansion_value = 100/this.document.leftSide.card.length
    //   var count = 0 ;
    //   var value = 0;
    //   for(var i = 0 ; i< this.document.leftSide.card.length ; i++){
    //     this.document.leftSide.card[i].linearprogressvalue =   per_expansion_value * (i+1)
    //     if(this.document.leftSide.card[i].isactive === true){
    //         count = count + 1
    //         value = this.document.leftSide.card[i].linearprogressvalue
    //         break ;
    //     }
    //   }
    //   if(count === 0){
    //     this.document.leftSide.linearprogressvalue = 0
    //   }
    //   else if(count === 1){
    //     this.document.leftSide.linearprogressvalue = value
    //   } 
    // },
    // amazon_special : function(){
    //   if(this.document.leftSide.card[0].section[1].value === "Juristische Person"){
    //     this.document.leftSide.card[0].section[2].fields[0].line = "Firmenname"
    //     this.document.leftSide.card[0].section[2].fields[0].size = "col-8"
    //     this.document.leftSide.card[0].section[2].fields[1].line = "Rechtsform"
    //     this.document.leftSide.card[0].section[2].fields[1].size = "col-4"
    //     this.document.leftSide.card[0].section[1].dropselect[0].value = ""
    //   }
    //   if(this.document.leftSide.card[0].section[1].value === "Natürliche Person"){
    //     this.document.leftSide.card[0].section[2].fields[0].line = "Vorname"
    //     this.document.leftSide.card[0].section[2].fields[0].size = "col-5"
    //     this.document.leftSide.card[0].section[2].fields[1].line = "Nachname"
    //     this.document.leftSide.card[0].section[2].fields[1].size = "col-7"
    //   }
    // }
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
    disable_isactive_property(){
        for(var i = 0 ; i< this.document.leftSide.card.length ; i++){
            this.document.leftSide.card[i].isactive = false
        }
    },
    disable_and_enable_properties(item){
        for(var i = 0 ; i< this.document.leftSide.card.length ; i++){
          if(this.document.leftSide.card[i].name === item.name){
            this.document.leftSide.card[i].isactive = !this.document.leftSide.card[i].isactive
          }
          else {
            this.document.leftSide.card[i].isactive = false
          }
        }
    },
    getvalue(){
      console.log(this.document)
    },
    getting_values_and_setting_values(values,card_no,dependent_values){
      var array = new Array();
      for (var i=0 ; i< values.length ; i++){
        if(typeof(values[i]) === 'object'){
          for (const [key, value] of Object.entries(values[i])) {
            // console.log(key)
            // console.log(value)
            var e = this.find_in_left_side(key,this.document.leftSide.card[card_no].section)
            //console.log(e)
            if(e === value){
              array.push(e)
            }
        }
        }
        else {
          var a = this.find_in_left_side(values[i],this.document.leftSide.card[card_no].section)
          array.push(a)
        }
      }
      var string = this.select_which_string_to_display(dependent_values,card_no)
      //console.log(array)
      var count  = 0
      for(var k =0; k<array.length ; k++){
          if(array[k]!== undefined && array[k]!== "" && array[k]!== null){
            if (array[k].length !== 0){ 
            //  console.log(array[k].length)
              count= count + 1
            }
            else {
             //console.log("a" +array[k].length)
              count = count + 1
          }
          }
      }
      //console.log("c" + count)
      return [count,string]
    },
    select_which_string_to_display(dependent_values,card_no){
      var i,j
      var  values_that_edit_string_array =  new Array()
       for( i =0; i< dependent_values.length ; i++){
         for (j=0 ; j< dependent_values[i].depend_upon.length ; j++){
            
          if(typeof(dependent_values[i].depend_upon[j]) === 'object'){
             for (const [key, value] of Object.entries(dependent_values[i].depend_upon[j])) {
                // console.log(key)
                console.log(value)
                var e = this.find_in_left_side(key,this.document.leftSide.card[card_no].section)
                var count_to_check_value_exist = 0
                for (var k=0; k< value.length ; k++){
                  if(e === value[k]){
                    values_that_edit_string_array.push(e)
                    count_to_check_value_exist++;
                    break;
                  }
                }
                if(count_to_check_value_exist === 0){
                  values_that_edit_string_array.push(null)
                }
            }
          }
          //console.log(dependent_values[i].depend_upon[j])
          else{
            var values_that_edit_string = this.find_in_left_side(dependent_values[i].depend_upon[j],this.document.leftSide.card[card_no].section)
            values_that_edit_string_array.push(values_that_edit_string)
          }
        }
      }
      //console.log(values_that_edit_string_array)
      for( i =0; i< dependent_values.length ; i++){
        var a = dependent_values[i].display
        if(dependent_values[i].depend_upon.length===0){
          return a
        }
        
        for(j =0; j< values_that_edit_string_array.length ; j++){
          //console.log(dependent_values[i].depend_upon[j])
          //console.log(dependent_values[i].display)
          var val = values_that_edit_string_array[j]
          // console.log(val)
          if(val === null || val === ""){
            var res = a.split("[["+j+"]]")
            var res1 = res[0].concat(res[1])
            a = res1
          }
          else {
            res = a.split("[["+j+"]]")
            res1 = res[0].concat(val)
            res1 = res1.concat(res[1])
            a  = res1
          }
        }
      }
      return a;
    },
    find_in_left_side(value, section){
      for(var i=0; i<section.length; i++){
        if(section[i].type === 'textfield'){
          for(var j=0 ; j < section[i].fields.length ; j++){
            if(section[i].fields[j].eid === value){
              return section[i].fields[j].value
              //alert("aa")
            }
          }
        }
        else if(section[i].type === 'radio'){ 
          if(section[i].eid === value){
              return section[i].value
          }
          if(section[i].textfieldapproval === true){
              for(var k=0; k< section[i].textfieldapprovalfields.length ; k++){
                 if(section[i].textfieldapprovalfields[k].eid === value){
                    return section[i].textfieldapprovalfields[k].value
                }
              }
          }
          else if(section[i].dropselect_display === true){
              for(k=0; k< section[i].dropselect.length ; k++){
                 if(section[i].dropselect[k].eid === value){
                    return section[i].dropselect[k].value
                }
              }
            }
        }
        else if(section[i].type === 'dropselect'){ 
          if(section[i].eid === value){
              return section[i].value
          }
          if(section[i].dropselect_display === true){
              for(k=0; k< section[i].dropselect.length ; k++){
                 if(section[i].dropselect[k].eid === value){
                    return section[i].dropselect[k].value
                }
              }
            }
        }
        else if(section[i].type === 'checkbox'){   
          if(section[i].eid === value){
            if(section[i].value.length>0){
              return section[i].value
            }
            else{
              return null
            }
          }
        }
      }
    },
    complete_fields_checker_v2(section){
      var array = []
      for(var i=0; i<section.length; i++){
        if(section[i].type === 'textfield'){
          
          for(var j=0 ; j < section[i].fields.length ; j++){
            array.push(section[i].fields[j].value)
          }
        }
        else if(section[i].type === 'radio'){
          
          array.push(section[i].value)
        }
        else if(section[i].type === 'checkbox'){
          
          if(section[i].value.length!==0){
            array.push("checkbox")
          }
        }
        else if(section[i].type === 'dropselect'){
          array.push(section[i].value)
        }

      }
      return array
    },
    mounted_user(){
      var val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_user_name)
      );
      if (val != null) {
        if(val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")] !== undefined){
            this.document = JSON.parse(
            val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")]
          ) ;
        }
        // else{
        //  this.preselectoption();
        // }
      }
      // else{
      //   this.preselectoption();
      // }
    },
    writefileandscreenshot_user(){
      let val = JSON.parse(
      localStorage.getItem("contracts of " + store.state.current_user_name)
    );
    if (val == null) {
      val = {};
    }
    var a1 = localStorage.getItem("current_contract_title");
    var a2 = localStorage.getItem("current_contract_group_title");
    let b = JSON.stringify(this.document);
    val[a1+"-"+a2] = b;
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
       var dir = './thumbnails';
        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
        }
       fs.writeFileSync(dir + "/" +  a1 +
              "-" +
              a2 +
              "-" +
              store.state.current_user_name +"-u.png",img.toPNG(),{encoding:'utf8',flag:'w'})
      });
    },
    contractsdataforuser(){
      var user_name = store.state.current_user_name;
      var data = localStorage.getItem("contracts of " + user_name);
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile('./'+ user_name + '- u.json', encrypteddata, function() {
      });
    },
    add_percentage_user(){
      var a1 = localStorage.getItem("current_contract_title")
      var value = this.updatecontractpercentage_admin()
      store.commit("updatecontractpercentageuser",[a1,store.state.current_user_name,value])
      store.commit("changeiseditedrecentcontracts",[a1,store.state.current_user_name])
    },
    create_copy_of_contract_when_selected_specific_condition_admin(){
      var a1 = localStorage.getItem("contract_org_name");
      // console.log(a1)
      var a2 = localStorage.getItem("current_contract_group_title")
      // console.log(a2)
      this.add_original_contract_when_one_contract_updates(a1,a2)
    },
    add_original_contract_when_one_contract_updates(contact_org_name,group_title) {
      var a = store.getters.checkByGroupName(group_title);
      if(a[0].keep_original_contract ===  true){
        var b = this.copy_creation_of_contract(contact_org_name, group_title);
        // console.log(b)
        store.commit("addcontractgroupfunc", [a[0], b]);
        if (a[0].user.length !== 0) {
          store.commit("addcontractinallusercontractsingroup", [a[0], b]);
        }
        this.store_commited()
      }
    },
    store_commited()
    {
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
    add_percentage_admin(){
      var a1 = localStorage.getItem("current_contract_title")
      var value = this.updatecontractpercentage_admin()
      // store.commit("updatecontractpercentage",[a1,store.state.current_admin_name,value])
      store.commit("updatecontractpercentageingroups",[a1,store.state.current_admin_name,value])
      var groups_by_specific_admin = store.getters.checkGroupByAdminName(store.state.current_admin_name);
      this.$store.commit("setcurrentadmingroups",groups_by_specific_admin);
      store.commit("changeiseditedrecentcontracts",[a1,store.state.current_admin_name])
    },
    updatecontractpercentage_admin(){
      var i ;
      var sum_array_total = new Array
      var sum_array_completed =  new Array() 
      for(i=0; i< this.document.leftSide.card.length ; i++){
        sum_array_total.push(this.document.leftSide.card[i].total_fields)
        sum_array_completed.push(this.document.leftSide.card[i].completed_fields)
      }
      var obt_sum= 0;
      var total_sum =0
      for(i=0; i< sum_array_total.length ; i++){
        obt_sum = obt_sum + sum_array_completed[i]
        total_sum= total_sum + sum_array_total[i]
      }
      var answer = Math.round(this.percentage(obt_sum,total_sum)) 
      return answer
    },
    percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
    },
    complete_fields_checker(arr){
      var data = arr;
      var counter = 0;
      var total_length = data.length;
      for(var i=0; i < total_length ; i++){
        if(data[i]){
          counter++;
        }
        else if(data[i] === false){
          counter++
        }
        else if(data[i] === 0){
          counter++
        }
      }
      // console.log("Filled = "+ counter)
      // console.log("Total = " + total_length)
      return counter;
    },
    mounted_admin(){
      this.current_admin_name = store.state.current_admin_name;
      this.current_admin_versions = store.state.current_admin_versions;
      var val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_admin_name)
      );
      if (val != null) {
        if(val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")] !== undefined){
            this.document = JSON.parse(
            val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")]
          ) ;
        }
        // else{
        //  this.preselectoption();
        // }
      }
      // else{
      //   this.preselectoption();
      // }
    },
    writefileandscreenshot_admin(){
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
    
    if (!(a1+"-"+a2 in val))
    {
      this.create_copy_of_contract_when_selected_specific_condition_admin()
    }
    val[a1+"-"+a2] = b;
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
        var dir = './thumbnails';
        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir);
        }
       fs.writeFileSync(dir + "/" +  a1 +
              "-" +
              a2 +
              "-" +
              store.state.current_admin_name +".png",img.toPNG(),{encoding:'utf8',flag:'w'})
      });
      localStorage.removeItem("current_contract_title");
      localStorage.removeItem("current_contract_group_title");
    },
    contractsdataforadmin(){
      var admin_name = store.state.current_admin_name;
      var data = localStorage.getItem("contracts of " + admin_name);
      //console.log(admin_name)
      //console.log(data)
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile('./'+ admin_name + '.json', encrypteddata, function() {
      });
    },
  },
  //Computed:
  computed: {
    ...mapState(["help",'edit',]),
    // pannalprogress1: function(){
    //   return (JSON.stringify(this.document.leftSide.card), new Date())
    // },
    // pannalprogress2: function(){
    //   return (JSON.stringify(this.document.leftSide.card), new Date())
    // },
    // pannalprogress3: function(){
    //   return (JSON.stringify(this.document.leftSide.card), new Date())
    // },
    // amazon_special: function(){
    //   return (JSON.stringify(this.document.leftSide.card), new Date())
    // },    
  },
};
</script>
<style scoped>
@media print {
    p{ 
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, serif;
    margin-right: 17mm;
    margin-left: 17mm;
}
  footer {
    page-break-after: always;
  }
}
.c1 {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  position: relative;
  background-color: #d8d8d8;
}
@media print {
  @page {
    size: landscape;
  }
}
.addresspannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.addresspannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.offerpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.offerpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.conclusionpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.conclusionpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.auctionpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.auctionpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.contracttextpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.contracttextpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.contractcustomerpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.contractcustomerpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.shipcostpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.shipcostpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.transferpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
input.radio {width: auto;}
.transferpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
}
.node {
  margin-left: 2px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  transition: all 1000ms ease;
}
.node1 {
  margin-top: 3px;
  margin-left: 14.61%;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  display: inline-block;
  transition: all 1000ms ease;
}
.node2 {
  margin-top: 5px;
  margin-left: 5px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
  transition: all 1000ms ease;
}
.divider {
  margin-left: 11px;
  height: 48px;
  width: 5px;
  transition: all 800ms ease;
}
.smalldivider {
  margin-left: 11px;
  height: 44px;
  width: 5px;
  transition: all 800ms ease;
}
.largedivider {
  margin-left: 11px;
  transition: all 800ms ease;
}
li p {
  display: inline-block;
  margin-left: 5px;
}
li {
  list-style: none;
  line-height: 1px;
}
.c1color {
  background-color: #d8d8d8;
}
.c2color {
  background-color: #ffffff;
}
.c3changecolor {
  background-color: #ffa300;
}
.c3originalcolor {
  background-color: #ffffff;
}
.originallengthcolor {
  background-color: #d8d8d8;
}
.changelengthcolor {
  background-color: #ffa300;
}
.v-card {
  display: flex !important;
  flex-direction: column;
}
.v-card__text {
  overflow-y: scroll !important;
  -webkit-overflow-scrolling: touch;
  scrollbar-color: #a0a0a0 transparent;
  scrollbar-width: thin;
}
.v-card__text::-webkit-scrollbar {
  width: 5px;
}
.v-card__text::-webkit-scrollbar-track {
  background: transparent;
}
.v-card__text::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 10px;
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
</style>
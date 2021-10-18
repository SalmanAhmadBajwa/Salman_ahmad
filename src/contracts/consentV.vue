<template>
  <v-container >
    <v-progress-linear
      :value="value"
      fixed
    absolute
     style="width: 100vw;margin-top:3.4em;z-index:10;" 
      color="#ffa300"
      :background-opacity="opacity"
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
                id="addresspannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header @click="addresspannalchangevalue()">
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="addresspannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                <v-btn class="" @click="editheading1 = !editheading1"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                  </div>
                  <div >
                    <v-textarea
                    v-if="editheading1"
                    dense
                   outlined
                   color="#FFA300"
                   auto-grow
                    :rows="1"
                    class="pt-3"
                    style="margin-left:-35%;"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(consent.addresspannalname)"
                    v-model="consent.addresspannalname"
                    @keyup.enter.exact="editheading1=false"
                     >
                    </v-textarea>
                  <span
                    v-else><strong>{{ consent.addresspannalname | truncateEnd(36, "...") }}</strong></span
                  >
                  </div>
                  <div style="position:absolute;right:15px;top:13px;"  v-if="addresspannalprogressValue===0">
                   <v-chip class="" color="#606060" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                     {{ addresspannalprogressValue }} /11
                     </p> 
                     </v-chip>
                  </div>

                   <div style="position:absolute;right:15px;top:13px;"  v-if="addresspannalprogressValue!==0">
                   <v-chip class="" color="#ffa300" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                     {{ addresspannalprogressValue }} /11
                     </p> 
                     </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div style="display:flex;" class="">
                 <v-btn class="mt-n2" @click="editmode1 = !editmode1"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                    <v-textarea
                    v-if="editmode1"
                    dense
                   outlined
                   auto-grow
                    :rows="1"
                    color="#FFA300"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(consent.addressnewheading1)"
                    v-model="consent.addressnewheading1"
                    @keyup.enter.exact="editmode1 = false"
                     >
                    </v-textarea>
              <p v-else style="word-break: break-word;">{{ consent.addressnewheading1 }}</p>
                  </div>
              
              <div class="row" style="">   
                <div class="col-8">
                  <v-text-field
                    rounded
                    dense
                    color="#FFA300"
                    clearable
                    outlined
                    label ="Firmenname"
                    v-model="consent.addressnewFirmenname"
                  >
                  </v-text-field>
                </div>
                 <div class="col-4">
                  <v-text-field
                    rounded
                    dense
                    clearable
                    color="#FFA300"
                    outlined
                    label ="Rechtsform"
                    v-model="consent.addressnewRechtsform"
                  >
                   
                  </v-text-field>
                  </div>
                 </div>
                 <div style="display:flex;" class="mb-3">
                 <v-btn class="mt-n2" @click="editmode2 = !editmode2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                    <v-textarea
                    v-if="editmode2"
                    dense
                   outlined
                   auto-grow
                    :rows="1"
                    color="#FFA300"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(consent.addressnewheading2)"
                    v-model="consent.addressnewheading2"
                    @keyup.enter.exact="editmode2 = false"
                     >
                    </v-textarea>
                  <p v-else style="word-break: break-word;">{{ consent.addressnewheading2 }}</p>
                 </div>
                  <!-- <div style="margin-bottom: 5px">
                    <v-radio-group v-model="consent.newselection1">
                      <v-radio
                        color="yellow"
                        return-object
                        v-for="item in conclusionnewitems1"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div> -->
                   <div class="mt-n3" style="display:flex;" v-for="(item,index) in conclusionnewitems1" :key="index">
                  <v-btn 
                   @click="editmode3 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="consent.newselection1">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode3 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode3 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  <div style="display:flex;" class="mb-3">
                 <v-btn class="mt-n2" @click="editmode4 = !editmode4"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                    <v-textarea
                    v-if="editmode4"
                    dense
                   outlined
                   auto-grow
                    :rows="1"
                    color="#FFA300"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(consent.addressnewheading4)"
                    v-model="consent.addressnewheading4"
                    @keyup.enter.exact="editmode4 = false"
                     >
                    </v-textarea>
                  <p v-else style="word-break: break-word;">{{ consent.addressnewheading4 }}</p>
                  </div>
                   <div class="row mt-n2" >   
                <div class="col-8">
                  <v-text-field
                    rounded
                    dense
                    clearable
                    color="#FFA300"
                    outlined
                    label ="Straße"
                    v-model="consent.addressnewStrasse"
                  >
                  </v-text-field>
                </div>
                 <div class="col-4">
                  <v-text-field
                    rounded
                    dense
                    color="#FFA300"
                    clearable
                    outlined
                    label ="Hausnummer"
                    v-model="consent.addressnewHausnummer"
                  >
                  </v-text-field>
                  </div>
                 </div>

                 <div class="row" style="margin-top: -12px">   
                <div class="col-3">
                  <v-text-field

                    input type="number" onkeydown="return event.keyCode !== 69"
                    rounded
                    dense
                    color="#FFA300"
                    clearable
                    outlined
                    label ="PLZ"
                    v-model="consent.addressnewPLZ"
                  >
                  </v-text-field>
                </div>
                 <div class="col-9">
                  <v-text-field
                    rounded
                    dense
                    color="#FFA300"
                    clearable
                    outlined
                    label ="Ort"
                    v-model="consent.addressnewOrt"
                  >
                   
                  </v-text-field>
                  </div>
                 </div>

                 <div class="row" style="margin-top: -12px">   
                <div class="col-6">
                  <v-text-field
                    rounded
                    dense
                    color="#FFA300"
                    clearable
                    outlined
                    label ="Telefonnummer"
                    v-model="consent.addressnewTelefonnummer"
                  >
                  </v-text-field>
                </div>
                 <div class="col-6">
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    label ="Email"
                    color="#FFA300"
                    v-model="consent.addressnewEmail"
                  >
                   
                  </v-text-field>
                  </div>
                 </div>


                  <div style="display:flex;" class="mb-3">
                 <v-btn class="mt-n2" @click="editmode5 = !editmode5"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                    <v-textarea
                    v-if="editmode5"
                    dense
                   outlined
                   auto-grow
                    :rows="1"
                    color="#FFA300"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(consent.addressnewheading3)"
                    v-model="consent.addressnewheading3"
                    @keyup.enter.exact="editmode5 = false"
                     >
                    </v-textarea>
                   <p v-else style="word-break: break-word;">{{ consent.addressnewheading3 }}</p>
                  </div>
                       <!-- <v-checkbox
                        color="#FFA300"
    v-model="selected"
    label="Internetseite des Unternehmens"
     value="auf unserer Internetseite aufgenommen werden"
 ></v-checkbox>
    <v-checkbox
     color="#FFA300"
      v-model="selected"
      label="Social-Media-Kanäle"
      value="auf unseren Social-Media-Kanälen aufgenommen werden"
    ></v-checkbox>
    <v-checkbox
     color="#FFA300"
      v-model="selected"
      label="Gedruckte Werbematerialien"
      value="auf gedruckten Werbematerialien abgebildet werden"
    ></v-checkbox>
    <v-checkbox
     color="#FFA300"
      v-model="selected"
      label="Pressemitteilungen"
      value="in Pressemitteilungen abgebildet werden"
    ></v-checkbox>
   
               
                    <v-radio-group v-model="consent.newselection2">
                      <v-radio
                        color="yellow"
                        v-for="item in conclusionnewitems2"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group> -->
                  <div class="mt-n3" style="display:flex;" v-for="(item,index) in checkboxitems" :key="index">
                  <v-btn 
                   @click="editmode6 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-checkbox
     color="#FFA300"
      v-model="selected"
      :value="item.value"
    ></v-checkbox>
                  <v-textarea
                    v-if="editmode6 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode6 = null"
                     ></v-textarea>
                     <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
 <div class="mt-n3" style="display:flex;" v-for="(item,index) in conclusionnewitems2" :key="index">
                  <v-btn 
                   @click="editmode7 = !editmode7"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="consent.newselection2">
                  <v-radio
                        color="#FFA300"
                        class=""
                         
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode7"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode7 = null"
                     ></v-textarea>
                     <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  <v-text-field
                    v-if="
                      consent.newselection2 === 'Sonstiges'
                    "
                    color="#FFA300"
                    rounded
                    dense
                    clearable
                    outlined
                    label="Sonstiges"
                    v-model="consent.newmenu1"
                  >
                  </v-text-field>
                  <div style="display:flex;">
                 <v-btn class="mt-n2" @click="editmode8 = !editmode8"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                    <v-textarea
                    v-if="editmode8"
                    dense
                   outlined
                   auto-grow
                    :rows="1"
                    color="#FFA300"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(consent.addressnewheading5)"
                    v-model="consent.addressnewheading5"
                    @keyup.enter.exact="editmode8 = false"
                     >
                    </v-textarea>
                  <p v-else style="word-break: break-word;">{{ consent.addressnewheading5 }}</p>
                  </div>
              
              <div class="row" style="">   
                <div class="col-12">
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    color="#FFA300"
                    v-model="consent.addressnewDomain"
                  >
                  </v-text-field>
                   </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <!-- pannal Datenschutz -->
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
                        margin-right: 25mm;
                        padding-left: 25mm !important;
                        margin-top: 3%;
                      "
                    >
                      <p
                       
                         v-if="consent.addressnewStrasse || consent.addressnewHausnummer || consent.addressnewPLZ ||
                          consent.addressnewOrt || consent.addressnewTelefonnummer || consent.addressnewEmail || consent.addressnewFirmenname || consent.addressnewRechtsform "
                        style="text-align: center; font-weight: 700 ; font-size: 16px"
                      >
                        <strong>Einwilligungserklärung zur Verwendung von {{ consent.newselection1.var1 }}</strong> von Veranstaltungen
                      </p>
                      <!--
                      <p v-else style="text-align: left; font-weight: 700">
                        <strong>§1 Vertragspartner <br />...</strong>
                      </p>
                      -->
                      
                      <br />
                     
                     
                       
                      
                      <p
                        v-if="consent.addressnewFirmenname || consent.addressnewRechtsform "
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      >
                      <br>
                      
                       Ich willige ein, dass zu Werbezwecken der {{ consent.addressnewFirmenname }} {{ consent.addressnewRechtsform }},
                         {{ consent.addressnewStrasse }} {{ consent.addressnewHausnummer }} {{ consent.addressnewPLZ }}
                         {{ consent.addressnewOrt }}, {{ consent.addressnewTelefonnummer }}, {{ consent.addressnewEmail }},
                       in denen ich zu sehen bin, {{ selected.join(" / ") }} {{ consent.newmenu1 }}.
                       Dabei erfolgt keine Nennung der Namen der abgebildeten Personen.
                       Soweit sich aus den {{ consent.newselection1.var1 }}
                       Hinweise auf meine ethnische Herkunft, Religion oder Gesundheit
                       ergeben (z. B. Hautfarbe, Kopfbedeckung, Brille), bezieht sich 
                       meine Einwilligung auch auf diese Angaben.
                      
                      <p
                      v-if="consent.addressnewFirmenname || consent.addressnewRechtsform "
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                       Ich kann meine Einwilligung jederzeit in Textform (z. B. Brief, E-Mail) widerrufen.
                       Die {{ consent.newselection1.var1 }}, in denen ich erkennbar bin und die im Wesentlichen nur
                       mich zeigen (z. B. beim Telefonieren oder bei einer typischen Tätigkeit), werden dann
                       unverzüglich aus dem Internetangebot der {{ consent.addressnewFirmenname }} {{ consent.addressnewRechtsform }}
                       entfernt und nicht mehr für neue Drucksachen verwendet. Bin 
                       ich auf den {{ consent.newselection1.var1 }},
                       zusammen mit anderen Personen abgebildet und möchte die {{ consent.addressnewFirmenname }} {{ consent.addressnewRechtsform }}
                       die Möglichkeit zur Verpixelung nicht nutzen, beträgt die Frist für den Austausch der
                       Fotos 6 Monate, bei einem Video 1 Jahr. 
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      ____________________________  <span style="padding-left:22px">________________________________________</span>
                      <strong> <br> Ort, Datum      <span style="padding-left:162px">                 Unterschrift</span></strong>

                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      ________________________________________________________________________
                      <strong><br> Name in Druckbuchstaben</strong> 
                      <br><br><br><br><br><br>Zusätzliche Informationen: Bei der Verwendung von {{ consent.newselection1.var1 }} auf denen Sie abgebildet sind, 
                       haben sie nach Art. 13 DSGVO verschiedene Betroffenenrechte, wie etwa einen Auskunftsanspruch oder einen Löschungsanspruch. 
                       Näheres hierzu finden Sie unter {{ consent.addressnewDomain }}. 
                      <p
                        v-if="
                          
                          consent.newselection1 ||
                          consent.newselection2 ||
                          consent.newselection3 ||
                          consent.newselection3 === false ||
                          // Pannal Datenschutz
                          consent.addressnewVorname ||
                          consent.contractcustomerpannalradio1 ||
                          consent.contractcustomerpannalradio1 === false
                        "
                         >
                         </p>
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
beforeDestroy() {
    if (store.state.isAdmin == true) {
      this.org_value2 = Object.assign(this.org_value2, this.consent);
      if (JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)) {
        this.add_percentage_admin();
        this.writefileandscreenshot_admin();
      }
    } else {
      this.org_value2 = Object.assign(this.org_value2, this.consent);
      if (JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)) {
        this.add_percentage_user()
        this.writefileandscreenshot_user();
      }
    }
  },
  
// mounted
  mounted() {
     if(store.state.isAdmin == true){
      this.org_value1 = Object.assign(this.org_value1,this.consent);
      this.mounted_admin()
    }
    else{
        this.org_value1 = Object.assign(this.org_value1,this.consent);
        this.mounted_user()
    }
  },
  //Data:
  data: () => ({
    current_admin_name: "",
    current_admin_versions: [],
    org_value2:{},
    org_value1:{},
    consent: {
      pos: [0, 0],
      newselection1: {},
      newselection2:"",
      newselection3:"",
      addressUserModel: "",
      addressVorname: "",
      addressNachname: "",
      addressStrasse: "",
      addressHausnummer: "",
       addressnewFirmenname:"",
      addressnewRechtsform:"",
      addressPlz: "",
      addressOrt: "",
      addressnewTelefonnummer :"",
    addressnewEmail:"",
    addressnewVorname:"",
    addressnewNachname:"",
     addressnewOrt:"",
      addressnewStrasse:"",
      addressnewHausnummer:"",
      addressnewPLZ:"",
      offerradio: "",
      conclusioncontractradio1: "",
      conclusioncontractradio2: "",
      auctionpannalradio1: "",
      auctionpannalradio2: "",
      auctionpannalinputfield: "",
      contracttextpannalradio: "",
      contracttextUserModel: "",
      contracttextpannalinputfield: "",
      contractcustomerpannalinputfield1: "",
      contractcustomerpannalinputfield2: "",
      contractcustomerpannalradio1: "",
      contractcustomerpannalinputfield4: "",
      shipcostpannalradio1: "",
      shipcostpannalradio2: "",
      shipcostpannalradio3: "",
      shipcostpannalradio4: "",
      shipcostpannalinputfield: "",
      
      transferpannalradio1: "",
      transferpannalradio2: "",
      transferpannalinputfield: "",
      // add new pannal 5
      newpannal5radio: "",
      // add new pannal 6
      newpannal6radio: "",
      offerpannalname: "Datenschutzhinweise",
          addresspannalname: "Einwilligungserklärung",
      addressnewheading1: "Geben Sie bitte den vollständigen Namen Ihres Unternehmens an",
    addressnewheading2: "Sollen von den Personen Fotos oder Videos erstellt werden?",
    addressnewheading3: "Wofür sollen die erstellten Fotografien/Videos verwendet werden?",
    addressnewheading4: "Geben Sie eine Addresse, eine Telefonnummer und eine E-Mail Addresse Ihres Unternehmens an",
    addressnewheading5: "Geben Sie die Domain zur DSGVO-konformen Datenschutzerklärung Ihrer Website an",
    },
    selected: [],

    addresspannalprogressValue: 0,
    addresspannaliconcolor: "#d8d8d8",
    addresspannalBox: false,
    //new headings
    
    
    
    //Userinput
    
    offerpannalnumber: "0/2",
    offerpannaliconcolor: "#d8d8d8",
    offerpannalBox: false,
    
   
    value: "",
    output: null,
    opacity: 0,
    // new choices
    conclusionnewitems1: [
      { label: "Fotos", value: { 'var1': "Fotos", 'var2':"fotos" },
      
       icon:"mdi-pencil-outline",
      },
      { label: "Videos", value: { 'var1': "Videos", 'var2': "videos"},
      
       icon:"mdi-pencil-outline",
      },
    ],
    editheading1:false,
    editmode1:false,
     editmode2:false,
      editmode3:null,
       editmode4:false,
       editmode5:false,
     editmode6:null,
       editmode7:null,
       editmode8:false,
    
    //conclusionnewitems2: [
      // { label: "Internetseite des Unternehmens", value: {'var1':"auf unserer Internetseite", 'var2': "auf unserer Internetseite aufgenommen werden"}},
       //{ label: "Social-Media-Kanäle", value: {'var1': "auf unseren Social-Media-Kanälen", 'var2': "auf unseren Social-Media-Kanälen aufgenommen werden"}},
       //{ label: "Gedruckte Werbematerialien", value: {'var1': "auf gedruckten Werbematerialien", 'var2': "auf gedruckten Werbematerialien abgebildet werden"}},
       //{ label: "Pressemitteilungen", value: {'var1': "in Pressemitteilungen", 'var2': "in Pressemitteilungen abgebildet werden"}},
       //{ label: "Sonstiges", value: "Sonstiges"},
    //],
     checkboxitems:[
      {label:"Internetseite des Unternehmens",value:"auf unserer Internetseite",icon:"mdi-pencil-outline",},
      {label:"Social-Media-Kanäle",value:"auf unseren Social-Media-Kanälen",icon:"mdi-pencil-outline",},
      {label:"Gedruckte Werbematerialien",value:"auf gedruckten Werbematerialien",icon:"mdi-pencil-outline",},
      {label:"Pressemitteilungen",value:"in Pressemitteilungen",icon:"mdi-pencil-outline",},

    ],
    conclusionnewitems2: [
       
       { label: "Sonstiges", value: "Sonstiges",
       
       icon:"mdi-pencil-outline",
       },
    ],
    conclusionnewitems3: [
      { label: "Ja", value: true,
      
       icon:"mdi-pencil-outline",
      },
      { label: "Nein", value: false,
      
       icon:"mdi-pencil-outline",
      },
    ],
   
    number1: "",
    // pos: [0, 0, 0, 0, 0, 0, 0],
  }),

  //watch
  watch: {
      pannel1Watcher: function () {
      if(this.consent.addressUserModel||
        this.consent.addressnewRechtsform||
        this.consent.addressnewFirmenname||
        this.consent.newselection1 === true|| this.consent.newselection2 === false ||
        this.consent.newselection3||
        this.consent.addressPlz||
        this.consent.addressOrt||
        this.consent.addressStrasse||
        this.consent.addressHausnummer)
        {
          this.consent.pos[0] = 1;
          this.consent.pos = this.arrangePos(this.consent.pos);
        }
    },
    pannel2Watcher: function () {
      if(this.consent.addressnewTelefonnummer||
        this.consent.addressnewEmail||
        this.consent.addressnewVorname||
        this.consent.addressnewNachname||
        this.consent.addressnewOrt||
        this.consent.addressnewStrasse||
        this.consent.addressnewHausnummer||
        this.consent.addressnewPLZ){
      this.consent.pos[1] = 2;
      this.consent.pos = this.arrangePos(this.consent.pos);
      }
    },
    // pannel3Watcher: function () {
    //   this.pos[2] = 3;
    //   this.pos = this.arrangePos(this.pos);
    // },
    // pannel4Watcher: function () {
    //   this.pos[3] = 4;
    //   this.pos = this.arrangePos(this.pos);
    // },
    // pannel5Watcher: function () {
    //   this.pos[4] = 5;
    //   this.pos = this.arrangePos(this.pos);
    // },
    // pannel6Watcher: function () {
    //   this.pos[5] = 6;
    //   this.pos = this.arrangePos(this.pos);
    // },
    // pannel7Watcher: function () {
    //   this.pos[6] = 7;
    //   this.pos = this.arrangePos(this.pos);
    // },
    addresspannalprogress: function(){
      var addresspannalfields = [];
      if(this.consent.newselection2 !== undefined || this.selected.length>0){
      var yes = "yes"
      addresspannalfields.push(yes);
      }
      if(this.consent.newselection1 !== undefined ){
      var yes1 = "yes"
      addresspannalfields.push(yes1);
      }
      addresspannalfields.push(this.consent.addressnewFirmenname);
      addresspannalfields.push(this.consent.addressnewRechtsform);
      addresspannalfields.push(this.consent.addressnewStrasse)
      addresspannalfields.push(this.consent.addressnewHausnummer)
      addresspannalfields.push(this.consent.addressnewPLZ)
      addresspannalfields.push(this.consent.addressnewOrt)
      addresspannalfields.push(this.consent.addressnewTelefonnummer)
      addresspannalfields.push(this.consent.addressnewEmail)
      addresspannalfields.push(this.consent.addressnewDomain)
      this.addresspannalprogressValue = this.complete_fields_checker(addresspannalfields);
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
    mounted_user(){
      var val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_user_name)
      );
      if (val != null) {
        this.consent = JSON.parse(
          val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")]
      );
    }
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
    let b = JSON.stringify(this.consent);
    console.log("GO");
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
      var sum_array = [this.addresspannalprogressValue]
      var total_sum = 11
      var obt_sum = 0
      for(var i=0; i< sum_array.length ; i++){
        obt_sum = obt_sum + sum_array[i]
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
        this.consent = JSON.parse(
          val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")]
      );
    }
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
    let b = JSON.stringify(this.consent);
    
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
      console.log(admin_name)
      console.log(data)
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile('./'+ admin_name + '.json', encrypteddata, function() {
      });
    },
    arrangePos(arr1) {
      let count = 0;
      let arrIn = [];
      let newArr = [];
      let returnArr = [0, 0, 0, 0, 0, 0, 0];
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== 0) {
          arrIn.push(i);
          count = count + 1;
        }
      }
      for (var y = 0; y < count; y++) {
        newArr.push(y + 1);
      }
      for (var z = 0; z < arr1.length; z++) {
        for (var x = 0; x < newArr.length; x++) {
          if (z === arrIn[x]) {
            returnArr[z] = newArr[x];
          }
        }
      }
      return returnArr;
    },
    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
      this.$htmlToPaper("printMe", null, () => {
        console.log("Printing completed or was cancelled!");
      });
    },
    //pannal for 1
    addresspannalchangevalue() {
      if (this.addresspannalBox === true) {
        this.addresspannalBox = false;
        this.value = "0";
        this.addresspannalnumber = "0/1";
        this.addresspannaliconcolor = "#d8d8d8";
        document
          .getElementById("prefirstLine")
          .classList.remove("changelengthcolor");
        document
          .getElementById("prefirstLine")
          .classList.add("originallengthcolor");
        document
          .getElementById("firstCircle2")
          .classList.remove("c3changecolor");
        document
          .getElementById("firstCircle2")
          .classList.add("c3originalcolor");
        setTimeout(function () {
          let addresspannalid = document.getElementById("addresspannalid");
          let addresspannalidheight = addresspannalid.clientHeight;
          document.getElementById("prefirstLine").setAttribute("style", "");
          document.getElementById("prefirstLine").style.height =
            addresspannalidheight + "px";
        }, 500);
      } else if (this.addresspannalBox === false) {
        this.auctionpannalBox = false;
        this.offerpannalBox = false;
        this.conclusionpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.auctionpannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.conclusionpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.auctionpannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.conclusionpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.addresspannalBox = true;
        this.value = "14";
        this.addresspannalnumber = "1/1";
        this.addresspannaliconcolor = "#ffa300";
        document
          .getElementById("prefirstLine")
          .classList.remove("originallengthcolor");
        document
          .getElementById("prefirstLine")
          .classList.add("changelengthcolor");
        document
          .getElementById("firstCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("firstCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let addresspannalid = document.getElementById("addresspannalid");
          let addresspannalidheight = addresspannalid.clientHeight;
          document.getElementById("prefirstLine").setAttribute("style", "");
          document.getElementById("prefirstLine").style.height =
            addresspannalidheight / 2 + "px";
        }, 500);
        // pannal  2 for dissable
        setTimeout(function () {
          let offerpannalid = document.getElementById("offerpannalid");
          let offerpannalidheight = offerpannalid.clientHeight;
          document.getElementById("firstLine").setAttribute("style", "");
          document.getElementById("firstLine").style.height =
            offerpannalidheight + "px";
          document
            .getElementById("firstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("firstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("secondCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("secondCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 3 for dissable
        setTimeout(function () {
          let conclusionpannalid = document.getElementById(
            " conclusionpannalid"
          );
          let conclusionpannalidheight = conclusionpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            conclusionpannalidheight + "px";
          document
            .getElementById("secondLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("secondLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("thirdCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("thirdCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 4 for dissable
        setTimeout(function () {
          let auctionpannalid = document.getElementById("auctionpannalid");
          let auctionpannalidheight = auctionpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            auctionpannalidheight + "px";
          document
            .getElementById("thirdLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("thirdLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fourthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fourthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 5 for dissable
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contracttextpannalidheight + "px";
          document
            .getElementById("fourthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fourthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fifthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fifthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        //pannal 6 for dissable
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            contractcustomerpannalidheight + "px";
          document
            .getElementById("fifthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fifthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sixCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sixCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // 7 pannal for dissable
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            shipcostpannalidheight + "px";
          document
            .getElementById("sixLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("sixLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sevenCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sevenCircle2")
            .classList.add("c3originalcolor");
        }, 600);
      }
    },
    //pannal for 2
    offerpannalchangevalue() {
      if (this.offerpannalBox === true) {
        this.offerpannalBox = false;
        this.value = "0";
        this.offerpannalnumber = "0/7";
        this.offerpannaliconcolor = "#d8d8d8";
        document
          .getElementById("firstLine")
          .classList.remove("changelengthcolor");
        document
          .getElementById("firstLine")
          .classList.add("originallengthcolor");
        document
          .getElementById("secondCircle2")
          .classList.remove("c3changecolor");
        document
          .getElementById("secondCircle2")
          .classList.add("c3originalcolor");
        setTimeout(function () {
          let offerpannalid = document.getElementById("offerpannalid");
          let offerpannalidheight = offerpannalid.clientHeight;
          document.getElementById("firstLine").setAttribute("style", "");
          document.getElementById("firstLine").style.height =
            offerpannalidheight + "px";
        }, 500);
      } else if (this.offerpannalBox === false) {
        this.auctionpannalBox = false;
        this.addresspannalBox = false;
        this.conclusionpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.auctionpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.conclusionpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.auctionpannalnumber = "0/1";
        this.addresspannalnumber = "0/1";
        this.conclusionpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.offerpannalBox = true;
        this.value = "24";
        this.offerpannalnumber = "2/7";
        this.offerpannaliconcolor = "#ffa300";
        document
          .getElementById("firstLine")
          .classList.remove("originallengthcolor");
        document.getElementById("firstLine").classList.add("changelengthcolor");
        document
          .getElementById("secondCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("secondCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let offerpannalid = document.getElementById("offerpannalid");
          let offerpannalidheight = offerpannalid.clientHeight;
          document.getElementById("firstLine").setAttribute("style", "");
          document.getElementById("firstLine").style.height =
            offerpannalidheight / 2 + "px";
        }, 500);
        // pannal 1 for dissable
        setTimeout(function () {
          let addresspannalid = document.getElementById("addresspannalid");
          let addresspannalidheight = addresspannalid.clientHeight;
          document.getElementById("prefirstLine").setAttribute("style", "");
          document.getElementById("prefirstLine").style.height =
            addresspannalidheight + "px";
          document
            .getElementById("prefirstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("prefirstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("firstCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("firstCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 3 for dissable
        setTimeout(function () {
          let conclusionpannalid = document.getElementById(
            "conclusionpannalid"
          );
          let conclusionpannalidheight = conclusionpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            conclusionpannalidheight + "px";
          document
            .getElementById("secondLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("secondLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("thirdCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("thirdCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 4 for dissable
        setTimeout(function () {
          let auctionpannalid = document.getElementById("auctionpannalid");
          let auctionpannalidheight = auctionpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            auctionpannalidheight + "px";
          document
            .getElementById("thirdLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("thirdLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fourthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fourthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 5 for dissable
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contracttextpannalidheight + "px";
          document
            .getElementById("fourthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fourthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fifthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fifthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        //pannal 6 for dissable
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            contractcustomerpannalidheight + "px";
          document
            .getElementById("fifthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fifthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sixCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sixCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // 7 pannal for dissable
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            shipcostpannalidheight + "px";
          document
            .getElementById("sixLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("sixLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sevenCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sevenCircle2")
            .classList.add("c3originalcolor");
        }, 600);
      }
    },
    //pannal for 3
    conclusionpannalchangevalue() {
      if (this.conclusionpannalBox === true) {
        this.conclusionpannalBox = false;
        this.value = "0";
        this.conclusionpannalnumber = "0/7";
        this.conclusionpannaliconcolor = "#d8d8d8";
        document
          .getElementById("secondLine")
          .classList.remove("changelengthcolor");
        document
          .getElementById("secondLine")
          .classList.add("originallengthcolor");
        document
          .getElementById("thirdCircle2")
          .classList.remove("c3changecolor");
        document
          .getElementById("thirdCircle2")
          .classList.add("c3originalcolor");
        setTimeout(function () {
          let conclusionpannalid = document.getElementById(
            "conclusionpannalid"
          );
          let conclusionpannalidheight = conclusionpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            conclusionpannalidheight + "px";
        }, 500);
      } else if (this.conclusionpannalBox === false) {
        this.auctionpannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.auctionpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.auctionpannalnumber = "0/1";
        this.addresspannalnumber = "0/1";
        this.offerpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.conclusionpannalBox = true;
        this.value = "36";
        this.conclusionpannalnumber = "3/7";
        this.conclusionpannaliconcolor = "#ffa300";
        document
          .getElementById("secondLine")
          .classList.remove("originallengthcolor");
        document
          .getElementById("secondLine")
          .classList.add("changelengthcolor");
        document
          .getElementById("thirdCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("thirdCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let conclusionpannalid = document.getElementById(
            "conclusionpannalid"
          );
          let conclusionpannalidheight = conclusionpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            conclusionpannalidheight / 2 + "px";
        }, 500);
        // pannal 1 for dissable
        setTimeout(function () {
          let addresspannalid = document.getElementById("addresspannalid");
          let addresspannalidheight = addresspannalid.clientHeight;
          document.getElementById("prefirstLine").setAttribute("style", "");
          document.getElementById("prefirstLine").style.height =
            addresspannalidheight + "px";
          document
            .getElementById("prefirstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("prefirstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("firstCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("firstCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal  2 for dissable
        setTimeout(function () {
          let offerpannalid = document.getElementById("offerpannalid");
          let offerpannalidheight = offerpannalid.clientHeight;
          document.getElementById("firstLine").setAttribute("style", "");
          document.getElementById("firstLine").style.height =
            offerpannalidheight + "px";
          document
            .getElementById("firstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("firstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("secondCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("secondCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 4 for dissable
        setTimeout(function () {
          let auctionpannalid = document.getElementById("auctionpannalid");
          let auctionpannalidheight = auctionpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            auctionpannalidheight + "px";
          document
            .getElementById("thirdLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("thirdLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fourthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fourthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 5 for dissable
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contracttextpannalidheight + "px";
          document
            .getElementById("fourthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fourthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fifthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fifthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        //pannal 6 for dissable
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            contractcustomerpannalidheight + "px";
          document
            .getElementById("fifthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fifthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sixCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sixCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // 7 pannal for dissable
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            shipcostpannalidheight + "px";
          document
            .getElementById("sixLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("sixLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sevenCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sevenCircle2")
            .classList.add("c3originalcolor");
        }, 600);
      }
    },
    //pannal for 4
    auctionpannalchangevalue() {
      if (this.auctionpannalBox === true) {
        this.auctionpannalBox = false;
        this.value = "0";
        this.auctionpannalnumber = "0/7";
        this.auctionpannaliconcolor = "#d8d8d8";
        document
          .getElementById("thirdLine")
          .classList.remove("changelengthcolor");
        document
          .getElementById("thirdLine")
          .classList.add("originallengthcolor");
        document
          .getElementById("fourthCircle2")
          .classList.remove("c3changecolor");
        document
          .getElementById("fourthCircle2")
          .classList.add("c3originalcolor");
        setTimeout(function () {
          let auctionpannalid = document.getElementById("auctionpannalid");
          let auctionpannalidheight = auctionpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            auctionpannalidheight + "px";
        }, 500);
      } else if (this.auctionpannalBox === false) {
        this.conclusionpannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.conclusionpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.conclusionpannalnumber = "0/1";
        this.addresspannalnumber = "0/1";
        this.offerpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.auctionpannalBox = true;
        this.value = "48";
        this.auctionpannalnumber = "4/7";
        this.auctionpannaliconcolor = "#ffa300";
        document
          .getElementById("thirdLine")
          .classList.remove("originallengthcolor");
        document.getElementById("thirdLine").classList.add("changelengthcolor");
        document
          .getElementById("fourthCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("fourthCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let auctionpannalid = document.getElementById("auctionpannalid");
          let auctionpannalidheight = auctionpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            auctionpannalidheight / 2 + "px";
        }, 500);
        // pannal 1 for dissable
        setTimeout(function () {
          let addresspannalid = document.getElementById("addresspannalid");
          let addresspannalidheight = addresspannalid.clientHeight;
          document.getElementById("prefirstLine").setAttribute("style", "");
          document.getElementById("prefirstLine").style.height =
            addresspannalidheight + "px";
          document
            .getElementById("prefirstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("prefirstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("firstCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("firstCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal  2 for dissable
        setTimeout(function () {
          let offerpannalid = document.getElementById("offerpannalid");
          let offerpannalidheight = offerpannalid.clientHeight;
          document.getElementById("firstLine").setAttribute("style", "");
          document.getElementById("firstLine").style.height =
            offerpannalidheight + "px";
          document
            .getElementById("firstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("firstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("secondCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("secondCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 3 for dissable
        setTimeout(function () {
          let conclusionpannalid = document.getElementById(
            "conclusionpannalid"
          );
          let conclusionpannalidheight = conclusionpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            conclusionpannalidheight + "px";
          document
            .getElementById("secondLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("secondLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("thirdCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("thirdCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 5 for dissable
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contracttextpannalidheight + "px";
          document
            .getElementById("fourthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fourthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fifthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fifthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        //pannal 6 for dissable
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            contractcustomerpannalidheight + "px";
          document
            .getElementById("fifthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fifthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sixCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sixCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // 7 pannal for dissable
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            shipcostpannalidheight + "px";
          document
            .getElementById("sixLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("sixLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sevenCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sevenCircle2")
            .classList.add("c3originalcolor");
        }, 600);
      }
    },
    //pannal for 5
    contracttextpannalchangevalue() {
      if (this.contracttextpannalBox === true) {
        this.contracttextpannalBox = false;
        this.value = "0";
        this.contracttextpannalnumber = "0/7";
        this.contracttextpannaliconcolor = "#d8d8d8";
        document
          .getElementById("fourthLine")
          .classList.remove("changelengthcolor");
        document
          .getElementById("fourthLine")
          .classList.add("originallengthcolor");
        document
          .getElementById("fifthCircle2")
          .classList.remove("c3changecolor");
        document
          .getElementById("fifthCircle2")
          .classList.add("c3originalcolor");
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contracttextpannalidheight + "px";
        }, 500);
      } else if (this.contracttextpannalBox === false) {
        this.conclusionpannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.auctionpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.conclusionpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.auctionpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.conclusionpannalnumber = "0/1";
        this.addresspannalnumber = "0/1";
        this.offerpannalnumber = "0/7";
        this.auctionpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.contracttextpannalBox = true;
        this.value = "60";
        this.contracttextpannalnumber = "5/7";
        this.contracttextpannaliconcolor = "#ffa300";
        document
          .getElementById("fourthLine")
          .classList.remove("originallengthcolor");
        document
          .getElementById("fourthLine")
          .classList.add("changelengthcolor");
        document
          .getElementById("fifthCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("fifthCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contracttextpannalidheight / 2 + "px";
        }, 500);
        // pannal 1 for dissable
        setTimeout(function () {
          let addresspannalid = document.getElementById("addresspannalid");
          let addresspannalidheight = addresspannalid.clientHeight;
          document.getElementById("prefirstLine").setAttribute("style", "");
          document.getElementById("prefirstLine").style.height =
            addresspannalidheight + "px";
          document
            .getElementById("prefirstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("prefirstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("firstCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("firstCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal  2 for dissable
        setTimeout(function () {
          let offerpannalid = document.getElementById("offerpannalid");
          let offerpannalidheight = offerpannalid.clientHeight;
          document.getElementById("firstLine").setAttribute("style", "");
          document.getElementById("firstLine").style.height =
            offerpannalidheight + "px";
          document
            .getElementById("firstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("firstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("secondCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("secondCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 3 for dissable
        setTimeout(function () {
          let conclusionpannalid = document.getElementById(
            "conclusionpannalid"
          );
          let conclusionpannalidheight = conclusionpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            conclusionpannalidheight + "px";
          document
            .getElementById("secondLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("secondLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("thirdCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("thirdCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 4 for dissable
        setTimeout(function () {
          let auctionpannalid = document.getElementById("auctionpannalid");
          let auctionpannalidheight = auctionpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            auctionpannalidheight + "px";
          document
            .getElementById("thirdLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("thirdLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fourthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fourthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        //pannal 6 for dissable
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            contractcustomerpannalidheight + "px";
          document
            .getElementById("fifthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fifthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sixCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sixCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // 7 pannal for dissable
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            shipcostpannalidheight + "px";
          document
            .getElementById("sixLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("sixLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sevenCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sevenCircle2")
            .classList.add("c3originalcolor");
        }, 600);
      }
    },
    //pannal for 6
    contractcustomerpannalchangevalue() {
      if (this.contractcustomerpannalBox === true) {
        this.contractcustomerpannalBox = false;
        this.value = "0";
        this.contractcustomerpannalnumber = "0/7";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        document
          .getElementById("fifthLine")
          .classList.remove("changelengthcolor");
        document
          .getElementById("fifthLine")
          .classList.add("originallengthcolor");
        document.getElementById("sixCircle2").classList.remove("c3changecolor");
        document.getElementById("sixCircle2").classList.add("c3originalcolor");
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            contractcustomerpannalidheight + "px";
        }, 500);
      } else if (this.contractcustomerpannalBox === false) {
        this.conclusionpannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.auctionpannalBox = false;
        this.contracttextpannalBox = false;
        this.shipcostpannalBox = false;
        this.conclusionpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.auctionpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.conclusionpannalnumber = "0/1";
        this.addresspannalnumber = "0/1";
        this.offerpannalnumber = "0/7";
        this.auctionpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.contractcustomerpannalBox = true;
        this.value = "72";
        this.contractcustomerpannalnumber = "6/7";
        this.contractcustomerpannaliconcolor = "#ffa300";
        document
          .getElementById("fifthLine")
          .classList.remove("originallengthcolor");
        document.getElementById("fifthLine").classList.add("changelengthcolor");
        document
          .getElementById("sixCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("sixCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            contractcustomerpannalidheight / 2 + "px";
        }, 500);
        // pannal 1 for dissable
        setTimeout(function () {
          let addresspannalid = document.getElementById("addresspannalid");
          let addresspannalidheight = addresspannalid.clientHeight;
          document.getElementById("prefirstLine").setAttribute("style", "");
          document.getElementById("prefirstLine").style.height =
            addresspannalidheight + "px";
          document
            .getElementById("prefirstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("prefirstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("firstCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("firstCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal  2 for dissable
        setTimeout(function () {
          let offerpannalid = document.getElementById("offerpannalid");
          let offerpannalidheight = offerpannalid.clientHeight;
          document.getElementById("firstLine").setAttribute("style", "");
          document.getElementById("firstLine").style.height =
            offerpannalidheight + "px";
          document
            .getElementById("firstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("firstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("secondCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("secondCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 3 for dissable
        setTimeout(function () {
          let conclusionpannalid = document.getElementById(
            "conclusionpannalid"
          );
          let conclusionpannalidheight = conclusionpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            conclusionpannalidheight + "px";
          document
            .getElementById("secondLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("secondLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("thirdCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("thirdCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 4 for dissable
        setTimeout(function () {
          let auctionpannalid = document.getElementById("auctionpannalid");
          let auctionpannalidheight = auctionpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            auctionpannalidheight + "px";
          document
            .getElementById("thirdLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("thirdLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fourthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fourthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 5 for dissable
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contracttextpannalidheight + "px";
          document
            .getElementById("fourthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fourthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fifthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fifthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // 7 pannal for dissable
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            shipcostpannalidheight + "px";
          document
            .getElementById("sixLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("sixLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sevenCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sevenCircle2")
            .classList.add("c3originalcolor");
        }, 600);
      }
    },
    //pannalfor 7
    shipcostpannalchangevalue() {
      if (this.shipcostpannalBox === true) {
        this.shipcostpannalBox = false;
        this.value = "0";
        this.shipcostpannalnumber = "0/7";
        this.shipcostpannaliconcolor = "#d8d8d8";
        document
          .getElementById("sixLine")
          .classList.remove("changelengthcolor");
        document.getElementById("sixLine").classList.add("originallengthcolor");
        document
          .getElementById("sevenCircle2")
          .classList.remove("c3changecolor");
        document
          .getElementById("sevenCircle2")
          .classList.add("c3originalcolor");
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            shipcostpannalidheight + "px";
        }, 500);
      } else if (this.shipcostpannalBox === false) {
        this.conclusionpannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.auctionpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.conclusionpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.auctionpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.conclusionpannalnumber = "0/1";
        this.addresspannalnumber = "0/1";
        this.offerpannalnumber = "0/7";
        this.auctionpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalBox = true;
        this.value = "86";
        this.shipcostpannalnumber = "7/7";
        this.shipcostpannaliconcolor = "#ffa300";
        document
          .getElementById("sixLine")
          .classList.remove("originallengthcolor");
        document.getElementById("sixLine").classList.add("changelengthcolor");
        document
          .getElementById("sevenCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("sevenCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            shipcostpannalidheight / 2 + "px";
        }, 500);
        // pannal 1 for dissable
        setTimeout(function () {
          let addresspannalid = document.getElementById("addresspannalid");
          let addresspannalidheight = addresspannalid.clientHeight;
          document.getElementById("prefirstLine").setAttribute("style", "");
          document.getElementById("prefirstLine").style.height =
            addresspannalidheight + "px";
          document
            .getElementById("prefirstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("prefirstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("firstCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("firstCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal  2 for dissable
        setTimeout(function () {
          let offerpannalid = document.getElementById("offerpannalid");
          let offerpannalidheight = offerpannalid.clientHeight;
          document.getElementById("firstLine").setAttribute("style", "");
          document.getElementById("firstLine").style.height =
            offerpannalidheight + "px";
          document
            .getElementById("firstLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("firstLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("secondCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("secondCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 3 for dissable
        setTimeout(function () {
          let conclusionpannalid = document.getElementById(
            "conclusionpannalid"
          );
          let conclusionpannalidheight = conclusionpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            conclusionpannalidheight + "px";
          document
            .getElementById("secondLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("secondLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("thirdCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("thirdCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 4 for dissable
        setTimeout(function () {
          let auctionpannalid = document.getElementById("auctionpannalid");
          let auctionpannalidheight = auctionpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            auctionpannalidheight + "px";
          document
            .getElementById("thirdLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("thirdLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fourthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fourthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        // pannal 5 for dissable
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contracttextpannalidheight + "px";
          document
            .getElementById("fourthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fourthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("fifthCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("fifthCircle2")
            .classList.add("c3originalcolor");
        }, 600);
        //pannal 6 for dissable
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            contractcustomerpannalidheight + "px";
          document
            .getElementById("fifthLine")
            .classList.remove("changelengthcolor");
          document
            .getElementById("fifthLine")
            .classList.add("originallengthcolor");
          document
            .getElementById("sixCircle2")
            .classList.remove("c3changecolor");
          document
            .getElementById("sixCircle2")
            .classList.add("c3originalcolor");
        }, 600);
      }
    },
  },
  //Computed:
  computed: {
    ...mapState(["help",'edit',]),
    pannel1Watcher: function () {
      return (
      this.consent.addressUserModel,
      this.consent.addressnewRechtsform,
      this.consent.addressnewFirmenname,
      this.consent.newselection1,
      this.consent.newselection3,
      this.consent.addressPlz,
      this.consent.addressOrt,
      this.consent.addressStrasse,
      this.consent.addressHausnummer,
       new Date()
      )
    },
    pannel2Watcher: function () {
      return (
        // this.consent.offerradio,
        // this.consent.conclusioncontractradio1,
        // this.consent.conclusioncontractradio2,
        // this.consent.conclusioncontractradio3,
        // this.consent.auctionpannalradio1,
        // this.consent.auctionpannalradio2,
        // this.consent.contracttextpannalradio,
        // this.consent.contracttextpannalinputfield,
        // this.consent.contractcustomerpannalinputfield1,
        // this.consent.contractcustomerpannalinputfield2,
        // this.consent.contractcustomerpannalinputfield3,
        // this.consent.contractcustomerpannalradio1,

         this.consent.addressnewTelefonnummer,
        this.consent.addressnewEmail,
        this.consent.addressnewVorname,
        this.consent.addressnewNachname,
        this.consent.addressnewOrt,
        this.consent.addressnewStrasse,
        this.consent.addressnewHausnummer,
        this.consent.addressnewPLZ,
        new Date()
      );
    },
    pannel3Watcher: function () {
      return (
        this.consent.contractcustomerpannalinputfield4,
        this.consent.shipcostpannalradio1,
        this.consent.shipcostpannalradio2,
        this.consent.shipcostpannalradio3,
        new Date()
      );
    },
    pannel4Watcher: function () {
      return this.consent.shipcostpannalradio4, new Date();
    },
    pannel5Watcher: function () {
      return this.consent.newpannal5radio, new Date();
    },
    pannel6Watcher: function () {
      return this.consent.newpannal6radio, new Date();
    },
    pannel7Watcher: function () {
      return this.consent.transferpannalradio2, new Date();
    },
    addresspannalprogress: function(){
      return (
        this.selected,
        this.consent.addressnewFirmenname,
        this.consent.addressnewRechtsform,
        this.consent.newselection1,
        this.consent.newselection2,
        this.consent.addressnewStrasse,
        this.consent.addressnewHausnummer,
        this.consent.addressnewPLZ,
        this.consent.addressnewOrt,
        this.consent.addressnewTelefonnummer,
        this.consent.addressnewEmail,
        this.consent.addressnewDomain,
        new Date()
      );
    },
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
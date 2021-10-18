<!-- @format -->

<template>
  <v-container >
    <v-progress-linear
      :value="value"
      fixed
    absolute
     style="width: 100vw;margin-top:2.5%;z-index:10;" 
      color="#ffa300"
      :background-opacity="opacity"
    >
    </v-progress-linear>
      <v-layout
      style="width:100vw;background-color: #d8d8d8;"
      class="mt-9"
      >
      <v-card
      elevation="0"
      style="min-height:50vw;display:flex;width:100vw;background-color: #d8d8d8;"
      >
        <div style="width: 45%; margin-right: 5px;position: relative;background-color: #f6f6f6;">
          <v-card 
          elevation="0"
          style="min-height:50vw;background-color: #f6f6f6;">
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
                  <div style="padding-left:2%;display:flex;">
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
                     @keydown.enter.shift.exact="newlineDescription(Amazon.addresspannalname)"
                    v-model="Amazon.addresspannalname"
                    @keyup.enter.exact="editheading1=false"
                     >
                    </v-textarea>
                  <span
                   v-else ><strong>{{ Amazon.addresspannalname  | truncateEnd(42, "...") }}</strong></span
                  ></div>
                 <div style="position:absolute;right:15px;top:13px;"  v-if="addresspannalprogressValue===0">
                   <v-chip class="" color="#606060" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                     {{ addresspannalprogressValue }} / 7
                     </p> 
                     </v-chip>
                  </div>

                   <div style="position:absolute;right:15px;top:13px;"  v-if="addresspannalprogressValue!==0">
                   <v-chip class="" color="#ffa300" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                     {{ addresspannalprogressValue }} / 7
                     </p> 
                     </v-chip>
                  </div>
                  
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div style="display:flex;">
                 <v-btn class="mt-n2" @click="editmode1 = !editmode1"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                    <v-textarea
                    v-if="editmode1"
                    dense
                   outlined
                   color="#FFA300"
                   auto-grow
                    :rows="1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.addressdocumentheading1)"
                    v-model="Amazon.addressdocumentheading1"
                    @keyup.enter.exact="test1()"
                     >
                    </v-textarea>
                  <p v-else style="word-break: break-word;">{{ Amazon.addressdocumentheading1 }}</p>
                  </div>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                     color="#FFA300"
                    v-model="Amazon.addressdocumentpannalinputfield1"
                  >
                  </v-text-field>
                  <div style="display:flex;">
                 <v-btn class="mt-n2" 
                 @click="editmode2 = !editmode2"
                   icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode2"
                    dense
                    auto-grow
                    outlined
                     color="#FFA300"
                    :rows="1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.addressdocumentheading2)"
                    v-model="Amazon.addressdocumentheading2"
                    @keyup.enter.exact="editmode2 = false"
                     >
                    </v-textarea>
                  <p v-else style="word-break: break-word;">{{ Amazon.addressdocumentheading2 }}</p>
                  </div>
                  <v-select
                    v-model="Amazon.addressUserModel1"
                    :items="addressitems2"
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
                  <div style="display:flex;" class="mt-n1">
                 <v-btn class="mt-n2"  icon 
                 @click="editmode3 = !editmode3"
                  v-if="edit && Amazon.addressUserModel1 === 'Natürliche Person' ">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                     <v-btn 
                      @click="editmode4 = !editmode4"
                     class="mt-n2"  icon v-if="edit && Amazon.addressUserModel1 === 'Juristische Person' ">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode3 && Amazon.addressUserModel1 === 'Natürliche Person'"
                    dense
                    auto-grow
                    outlined
                     color="#FFA300"
                    :rows="1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.addressheading)"
                    v-model="Amazon.addressheading"
                    @keyup.enter="editmode3 = false"
                     >
                    </v-textarea>
                     <p 
                     style="word-break: break-word;"
                     v-if="Amazon.addressUserModel1 === 'Natürliche Person'  && editmode3===false">
                    {{ Amazon.addressheading }}
                  </p>
                     <v-textarea
                    v-if="editmode4 && Amazon.addressUserModel1 === 'Juristische Person'"
                    dense
                    auto-grow
                    outlined
                     color="#FFA300"
                    :rows="1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.addressheading)"
                    v-model="Amazon.addressheading"
                    @keyup.enter.exact="editmode4 = false"
                     >
                    </v-textarea>
                  <p 
                  style="word-break: break-word;"
                  v-if="Amazon.addressUserModel1 === 'Juristische Person' && editmode4===false">
                    {{ Amazon.addressheading }}
                  </p>
                 </div>
                  <v-select
                    v-if="Amazon.addressUserModel1 === 'Natürliche Person'"
                    v-model="Amazon.addressUserModel"
                    :items="addressitems"
                    return-object
                    :menu-props="{ bottom: true, offsetY: true }"
                    item-text="value"
                    item-value="id"
                    dense
                    outlined
                    color="#FFA300"
                    rounded
                  ></v-select>
                  <div class="row" style="margin-top: 20px">
                    <div class="col-5">
                      <v-text-field
                        v-if="Amazon.addressUserModel1 === 'Natürliche Person'"
                        rounded
                        dense
                        clearable
                        outlined
                        color="#FFA300"
                        label="Vorname"
                        v-model="Amazon.addressVorname"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-7">
                      <v-text-field
                        v-if="Amazon.addressUserModel1 === 'Natürliche Person'"
                        rounded
                        dense
                        clearable
                        color="#FFA300"
                        outlined
                        label="Nachname"
                        v-model="Amazon.addressNachname"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-8">
                      <v-text-field
                        v-if="Amazon.addressUserModel1 === 'Juristische Person'"
                        rounded
                        dense
                        color="#FFA300"
                        clearable
                        outlined
                        label="Firmenname"
                        v-model="Amazon.addressFirmenname"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-4">
                      <v-text-field
                        v-if="Amazon.addressUserModel1 === 'Juristische Person'"
                        rounded
                        dense
                        clearable
                        outlined
                        color="#FFA300"
                        label="Rechtsform"
                        v-model="Amazon.addressRechtsform"
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <div class="row" style="margin-top: -12px">
                    <div class="col-8">
                      <v-text-field
                        v-if="
                          Amazon.addressUserModel1 === 'Natürliche Person' ||
                          Amazon.addressUserModel1 === 'Juristische Person'
                        "
                        rounded
                        dense
                        clearable
                        outlined
                        color="#FFA300"
                        label="Strasse"
                        v-model="Amazon.addressStrasse"
                      >
                      </v-text-field>
                    </div>

                    <div class="col-4">
                      <v-text-field
                        v-if="
                          Amazon.addressUserModel1 === 'Natürliche Person' ||
                          Amazon.addressUserModel1 === 'Juristische Person'
                        "
                        rounded
                        dense
                        color="#FFA300"
                        clearable
                        outlined
                        label="Hausnummer"
                        v-model="Amazon.addressHausnummer"
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <div class="row" style="margin-top: -12px">
                    <div class="col-3">
                      <v-text-field
                        v-if="
                          Amazon.addressUserModel1 === 'Natürliche Person' ||
                          Amazon.addressUserModel1 === 'Juristische Person'
                        "
input type="number" onkeydown="return event.keyCode !== 69"
                        rounded
                        dense
                        clearable
                        color="#FFA300"
                        outlined
                        label="PLZ"
                        v-model="Amazon.addressPlz"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-9">
                      <v-text-field
                        v-if="
                          Amazon.addressUserModel1 === 'Natürliche Person' ||
                          Amazon.addressUserModel1 === 'Juristische Person'
                        "
                        rounded
                        color="#FFA300"
                        dense
                        clearable
                        outlined
                        label="Ort"
                        v-model="Amazon.addressOrt"
                      >
                      </v-text-field>
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal 2 -->

              <v-expansion-panel
                id="offerpannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header @click="offerpannalchangevalue()">
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left:2%">
                    <v-icon
                      :color="offerpannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                    <v-btn class="" @click="editheading2 = !editheading2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                  </div>
                  <div >
                    <v-textarea
                    v-if="editheading2"
                    dense
                   outlined
                   color="#FFA300"
                   auto-grow
                    :rows="1"
                    class="pt-3"
                    style="margin-left:-35%;"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.offerpannalname)"
                    v-model="Amazon.offerpannalname"
                    @keyup.enter.exact="editheading2=false"
                     >
                    </v-textarea>
                  <span
                   v-else ><strong>{{ Amazon.offerpannalname  | truncateEnd(36, "...") }}</strong></span
                  >
                  </div>
                  <div style="position:absolute;right:15px;top:13px;"  v-if="offerpannalprogressValue===0">
                   <v-chip class="" color="#606060" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ offerpannalprogressValue }} / 8
                     </p> 
                     </v-chip>
                  </div>

                   <div style="position:absolute;right:15px;top:13px;"  v-if="offerpannalprogressValue!==0">
                   <v-chip class="" color="#ffa300" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ offerpannalprogressValue }} / 8
                     </p> 
                     </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div style="display: flex" class="mb-3">
                    <v-btn 
                    @click="editmode5 = !editmode5"
                    class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                     <v-textarea
                    v-if="editmode5"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.offerpannalheading1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.offerpannalheading1)"
                    @keyup.enter.exact="editmode5 = false"
                     ></v-textarea>
                    <p v-else style="word-break: break-word;">{{ Amazon.offerpannalheading1 }}</p>
                    <div v-if="help">
                      <v-menu offset-x min-width="240" rounded="lg">
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
                          width="240"
                          rounded="lg"
                          class="expand"
                          height="220"
                          color="white"
                          outlined
                        >
                          <v-card-text class="mt-2">
                            <v-list>
                              <v-list-item>
                                <p style="text-align: left" class="pl-2">
                                  Hiervon ist abhängig, wann der Vertragsschluss
                                  zustande kommt. Sind Ihre Angebote bereits
                                  bindend, kommt der Vertragsschluss mit der
                                  Bestellung durch den Kunden zustande. Wir
                                  empfehlen grundsätzlich die Angebote als nicht
                                  bindend einzuordnen, da Sie sich hiermit die
                                  Möglichkeit offenhalten, Bestellungen aus
                                  verschiedensten Gründen (z.B. Lieferengpass
                                  etc.) nicht zu bestätigen
                                </p>
                              </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </div>
                  </div>
                  <div class="mt-n3" style="display:flex;" v-for="(item,index) in offeritems1" :key="index">
                  <v-btn 
                   @click="editmode6 = index"
                      style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.offerradio1">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
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
                   
                 
                  <div style="display:flex;" class="mt-n1 mb-3">
                   <v-btn 
                   @click="editmode7 = !editmode7"
                  class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                     <v-textarea
                    v-if="editmode7"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.offerpannalheading2"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.offerpannalheading2)"
                    @keyup.enter.exact="editmode7 = false"
                     ></v-textarea>
                    <p v-else style="word-break: break-word;">{{ Amazon.offerpannalheading2 }}</p>
                  </div>
                  
                    <div class="mt-n3" style="display:flex;" v-for="(item,index) in offeritems2" :key="index">
                  <v-btn 
                   @click="editmode8 = index"
                   style="margin-top:-0.45em;"  icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.offerradio2">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode8 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode8 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  <!-- add pannal 3 original  -->
                  <div style="display:flex;" class="mt-n1 mb-3">
                 <v-btn 
                 @click="editmode9 = !editmode9"
                 class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode9"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.customerreceiptcontractheading1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.customerreceiptcontractheading1)"
                    @keyup.enter.exact="editmode9 = false"
                     ></v-textarea>
                    <p v-else style="word-break: break-word;">{{ Amazon.customerreceiptcontractheading1 }}</p>
                  </div>
                    <div class="mt-n3" style="display:flex;" v-for="(item,index) in customerreceiptcontractitems1" :key="index">
                  <v-btn 
                   @click="editmode10 = index"
                  style="margin-top:-0.45em;"  icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.customerreceiptcontractradio1">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode10 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode10 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>

                  <!-- add pannal 4 original -->
                  <div style="display:flex;" class="mt-n1 mb-3">
                 <v-btn 
                 @click="editmode11 = !editmode11"
                 class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                  <v-textarea
                    v-if="editmode11"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                     color="#FFA300"
                    v-model="Amazon.languagepannalheading"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.languagepannalheading)"
                    @keyup.enter.exact="editmode11 = false"
                     ></v-textarea>
                  <p v-else style="word-break: break-word;">{{ Amazon.languagepannalheading }}</p>
                  </div>
                 
                    <div class="mt-n3" style="display:flex;" v-for="(item,index) in languagepannalitems" :key="index">
                  <v-btn 
                   @click="editmode12 = index"
                  style="margin-top:-0.45em;"  icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.languagepannalradio">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode12 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode12 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>

                  <v-text-field
                    v-if="Amazon.languagepannalradio"
                    rounded
                    dense
                    clearable
                    color="#FFA300"
                    outlined
                    label="Sprache auswählen"
                    v-model="Amazon.languagepannalinputfield"
                  >
                  </v-text-field>

                  <!-- add pannal 5 original -->
                  <div style="display: flex" class="mt-n1 mb-3">
                     <v-btn 
                     @click="editmode13 = !editmode13"
                     class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode13"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.contracttextpannalheading1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.contracttextpannalheading1)"
                    @keyup.enter.exact="editmode13 = false"
                     ></v-textarea>
                    <p v-else style="word-break: break-word;">{{ Amazon.contracttextpannalheading1 }}</p>
                    <div v-if="help">
                      <v-menu offset-x min-width="210" rounded="lg">
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
                          width="210"
                          rounded="lg"
                          class="expand"
                          color="white"
                          height="140"
                          outlined
                        >
                          <v-card-text class="mt-2">
                            <v-list>
                              <v-list-item>
                                <p style="text-align: left" class="pl-2">
                                  Sie sind nicht verpflichtet den Vertragstext
                                  zu speichern. Sofern Sie dies jedoch tun, muss
                                  der Kunde in den AGB hierüber informiert
                                  werden
                                </p>
                              </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </div>
                  </div>
             
                    <div class="mt-n3" style="display:flex;" v-for="(item,index) in contracttextpannalitems" :key="index">
                  <v-btn 
                   @click="editmode14 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.contracttextpannalradio">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode14 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode14 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  <div v-if="Amazon.contracttextpannalradio" class="mt-n1 mb-3">
                    <div style="display:flex;">
                 <v-btn 
                 @click="editmode15 = !editmode15"
                 class="mt-n2" icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                     <v-textarea
                    v-if="editmode15"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                     color="#FFA300"
                    v-model="Amazon.contracttextpannalheading2"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.contracttextpannalheading2)"
                    @keyup.enter.exact="editmode15 = false"
                     ></v-textarea>
                    <p v-else style="word-break: break-word;">{{ Amazon.contracttextpannalheading2 }}</p>
                    </div>
                    <v-select
                      v-model="Amazon.contracttextUserModel"
                      :items="contracttextitems"
                      return-object
                      item-text="value"
                      item-value="id"
                      dense
                      outlined
                      :menu-props="{ bottom: true, offsetY: true }"
                      color="#FFA300"
                      rounded
                    >
                    </v-select>
                  </div>

                  <v-text-field
                    v-if="
                      Amazon.contracttextUserModel.value ===
                      'Abweichende Speicherdauer'
                    "
                    rounded
                    dense
                    class="mb-2"
                    clearable
                    outlined
                    color="#FFA300"
                    label="Dauer auswählen"
                    v-model="Amazon.contracttextpannalinputfield"
                  >
                  </v-text-field>
                  <!-- add pannal 6 original -->
                  <div style="display:flex;" class="mt-n1 mb-3">
                 <v-btn
                 @click="editmode16 = !editmode16"
                  class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                     <v-textarea
                    v-if="editmode16"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.contractcustomerpannalheading1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.contractcustomerpannalheading1)"
                    @keyup.enter.exact="editmode16 = false"
                     ></v-textarea>
                  <p v-else style="word-break: break-word;">{{ Amazon.contractcustomerpannalheading1 }}</p>
                  </div>

                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    color="#FFA300"
                    v-model="Amazon.contractcustomerpannalinputfield1"
                  >
                  </v-text-field>
                  <div style="display:flex;">
                 <v-btn 
                 @click="editmode17 = !editmode17"
                 class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode17"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.contractcustomerpannalheading2"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.contractcustomerpannalheading2)"
                    @keyup.enter.exact="editmode17 = false"
                     ></v-textarea>
                  <p v-else style="word-break: break-word;">{{ Amazon.contractcustomerpannalheading2 }}</p>
                  </div>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    color="#FFA300"
                    outlined
                    v-model="Amazon.contractcustomerpannalinputfield2"
                  >
                  </v-text-field>
                  <div style="display: flex;" class="mb-2">
                   <v-btn 
                 @click="editmode18 = !editmode18"
                 class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode18"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.contractcustomerpannalheading3"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.contractcustomerpannalheading3)"
                    @keyup.enter.exact="editmode18 = false"
                     ></v-textarea>
                     <p v-else style="word-break: break-word;">{{Amazon.contractcustomerpannalheading3 }}</p>
                    <div v-if="help">
                     
                        <v-menu offset-x min-width="220" rounded="lg">
                          <template v-slot:activator="{ on }">
                            <v-btn v-on="on" icon class="mt-n1">
                              <v-icon
                                color="black"
                                style="transform: rotate(180deg)"
                                >mdi-alert-circle-outline</v-icon
                              >
                            </v-btn>
                          </template>
                          <v-card
                            elevation="0"
                            width="220"
                            class="expand"
                            rounded="lg"
                            height="180"
                            outlined
                          >
                            <v-card-text class="mt-4">
                              <v-list>
                                <v-list-item class="mt-2">
                                  <p style="text-align: left" class="pl-2">
                                    Dies ist eine Information, die Sie dem
                                    Kunden laut Gesetz erteilen müssen. Sofern
                                    der Vertragsschluss über den normalen
                                    amazon-Ablauf zustande kommt, empfehlen wir
                                    die folgende Auswahl:
                                  </p>
                                </v-list-item>
                              </v-list>
                            </v-card-text>
                          </v-card>
                        </v-menu>
                    </div>
                  </div>
                 
                     <div class="mt-n3" style="display:flex;" v-for="(item,index) in contractcustomerpannalitems" :key="index">
                  <v-btn 
                   @click="editmode19 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.contractcustomerpannalradio">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode19 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode19 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  <v-text-field
                    v-if="Amazon.contractcustomerpannalradio === false"
                    rounded
                    dense
                    clearable
                    outlined
                    color="#FFA300"
                    v-model="Amazon.contractcustomerpannalinputfield3"
                  >
                  </v-text-field>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal 3 -->

              <v-expansion-panel
                id="customerreceiptpannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header
                  @click="customerreceiptpannalchangevalue()"
                >
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="customerreceiptpannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                     <v-btn class="" @click="editheading3 = !editheading3"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                  </div>
                  <div >
                    <v-textarea
                    v-if="editheading3"
                    dense
                   outlined
                   color="#FFA300"
                   auto-grow
                    :rows="1"
                    class="pt-3"
                    style="margin-left:-35%;"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.customerreceiptcontractpannalname)"
                    v-model="Amazon.customerreceiptcontractpannalname"
                    @keyup.enter.exact="editheading3=false"
                     >
                    </v-textarea>
                  <span
                   v-else ><strong>{{
                      Amazon.customerreceiptcontractpannalname | truncateEnd(36, "...") 
                    }}</strong></span
                  >
                  </div>
                  <div style="position:absolute;right:15px;top:13px;"  v-if="customerreceiptpannalprogressValue===0">
                   <v-chip class="" color="#606060" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ customerreceiptpannalprogressValue }} / 4
                     </p> 
                     </v-chip>
                  </div>

                   <div style="position:absolute;right:15px;top:13px;"  v-if="customerreceiptpannalprogressValue!==0">
                   <v-chip class="" color="#ffa300" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ customerreceiptpannalprogressValue }} / 4
                     </p> 
                     </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- add new pannal 4 original from 7 pannal  -->
                  <!-- add contractcustomer here -->
                  <div style="display: flex; padding-right: 0px">
                   <v-btn 
                 @click="editmode20 = !editmode20"
                 class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode20"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.contractcustomerpannalheading4"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.contractcustomerpannalheading4)"
                    @keyup.enter.exact="editmode20 = false"
                     ></v-textarea>
                     <p v-else style="word-break: break-word;">{{Amazon.contractcustomerpannalheading4 }}</p>
                  </div>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    color="#FFA300"
                    v-model="Amazon.contractcustomerpannalinputfield4"
                  >
                  </v-text-field>
                  <div style="display: flex" class="mb-3 mt-n1">
                   <v-btn 
                 @click="editmode21 = !editmode21"
                 class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode21"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.shipcostpannalheading1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.shipcostpannalheading1)"
                    @keyup.enter.exact="editmode21 = false"
                     ></v-textarea>
                    <p v-else style="word-break: break-word;">{{ Amazon.shipcostpannalheading1 }}</p>
                    <div v-if="help">
                      <v-menu offset-x min-width="200" rounded="lg">
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
                          width="200"
                          rounded="lg"
                          class="expand"
                          color="white"
                          outlined
                          height="150"
                        >
                          <v-card-text class="mt-4">
                            <v-list>
                              <v-list-item class="mt-2">
                                <p style="text-align: left" class="pl-2">
                                  Sofern Sie Ihre Angebote gegenüber
                                  Verbrauchern und nicht ausschließlich
                                  gegenüber Unternehmern anbieten, sind Sie
                                  verpflichtet sog. Gesamtpreise anzugeben, d.h.
                                  Preise inklusive aller Steuern und sonstiger
                                  Preisbestandteile. Hierzu sind Sie nur dann
                                  nicht verpflichtet, wenn Sie Kleinunternehmer
                                  iSd §19 UstG sind.
                                </p>
                              </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </div>
                  </div>
                 
                
                  
                    <div class="mt-n3" style="display:flex;" v-for="(item,index) in shipcostpannalitems1" :key="index">
                  <v-btn 
                   @click="editmode22 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.shipcostpannalradio1">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode22 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode22 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  <div style="display: flex" class="mt-n1 mb-3">
                    <v-btn 
                 @click="editmode23 = !editmode23"
                 class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode23"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.shipcostpannalheading2"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.shipcostpannalheading2)"
                    @keyup.enter.exact="editmode23 = false"
                     ></v-textarea>
                    <p v-else style="word-break: break-word;">{{ Amazon.shipcostpannalheading2 }}</p>
                    <div v-if="help">
                      <v-menu offset-x min-width="200" rounded="lg">
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
                          width="200"
                          class="expand"
                          rounded="lg"
                          color="white"
                          height="150"
                          outlined
                        >
                          <v-card-text class="mt-4">
                            <v-list>
                              <v-list-item class="mt-2">
                                <p style="text-align: left" class="pl-2">
                                  Sofern Sie Ihre Angebote gegenüber
                                  Verbrauchern und nicht ausschließlich
                                  gegenüber Unternehmern anbieten, sind Sie
                                  verpflichtet sog. Gesamtpreise anzugeben, d.h.
                                  Preise inklusive aller Steuern und sonstiger
                                  Preisbestandteile
                                </p>
                              </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </div>
                  </div>
                  
               
                 
                    <div class="mt-n3" style="display:flex;" v-for="(item,index) in shipcostpannalitems2" :key="index">
                  <v-btn 
                   @click="editmode24 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.shipcostpannalradio2">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode24 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode24 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  <v-text-field
                    v-if="Amazon.shipcostpannalradio2"
                    rounded
                    dense
                    clearable
                    outlined
                    label="Höhe auswählen"
                    v-model="Amazon.shipcostpannalinputfield"
                  >
                  </v-text-field>
                  <div style="display: flex" class="mt-n1 mb-3">
                       <v-btn 
                 @click="editmode25 = !editmode25"
                 class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode25"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.shipcostpannalheading3"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.shipcostpannalheading3)"
                    @keyup.enter.exact="editmode25 = false"
                     ></v-textarea>
                    <p v-else style="word-break: break-word;">{{ Amazon.shipcostpannalheading3 }}</p>
                    <div v-if="help">
                      <v-menu offset-x min-width="200" rounded="lg">
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
                          width="200"
                          class="expand"
                          rounded="lg"
                          color="white"
                          max-height="150"
                          outlined
                        >
                          <v-card-text class="mt-4">
                            <v-list>
                              <v-list-item class="mt-2">
                                <p style="text-align: left" class="pl-2">
                                  Laut Gesetz trägt grundsätzlich der
                                  Verbraucher die Kosten der Rücksendung, sofern
                                  der Unternehmer diesen über diese
                                  Kostentragungspflicht unterrichtet hat. Dies
                                  gilt dann nicht, wenn der Unternehmer sich
                                  ausdrücklich dazu bereit erklärt hat die
                                  Kosten zu tragen.
                                </p>
                              </v-list-item>
                            </v-list>
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </div>
                  </div>
                
                   
                    
                    <div class="mt-n3" style="display:flex;" v-for="(item,index) in shipcostpannalitems3" :key="index">
                  <v-btn 
                   @click="editmode26 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.shipcostpannalradio3">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode26 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode26 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal4 -->

              <v-expansion-panel
                id="languagepannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header @click="languagepannalchangevalue()">
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="languagepannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                     <v-btn class="" @click="editheading4 = !editheading4"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                  </div>
                 
                  <div >
                    <v-textarea
                    v-if="editheading4"
                    dense
                   outlined
                   color="#FFA300"
                   auto-grow
                    :rows="1"
                    class="pt-3"
                    style="margin-left:-35%;"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.languagepannalname)"
                    v-model="Amazon.languagepannalname"
                    @keyup.enter.exact="editheading4=false"
                     >
                    </v-textarea>
                  <span
                  v-else  ><strong>{{ Amazon.languagepannalname | truncateEnd(36, "...") }}</strong></span
                  >
                  </div>
                  <div style="position:absolute;right:15px;top:13px;"  v-if="languagepannalprogressValue===0">
                   <v-chip class="" color="#606060" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ languagepannalprogressValue }} / 1
                     </p> 
                     </v-chip>
                  </div>

                   <div style="position:absolute;right:15px;top:13px;"  v-if="languagepannalprogressValue!==0">
                   <v-chip class="" color="#ffa300" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ languagepannalprogressValue }} / 1
                     </p> 
                     </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- add original pannal 7 some in new pannal 4 -->
                   <div style="display:flex;" class="mt-2 mb-2">
                <v-btn class="mt-n2" @click="editmodeok = !editmodeok"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                    <v-textarea
                    v-if="editmodeok"
                    dense
                   outlined
                   auto-grow
                   color="#FFA300"
                    :rows="1"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.shipcostpannalheading4)"
                    v-model="Amazon.shipcostpannalheading4"
                    @keyup.enter.exact="editmodeok = false"
                     >
                    </v-textarea>
                  <p v-else style="word-break: break-word;">{{ Amazon.shipcostpannalheading4 }}</p>
                   </div>
                
                     <div class="mt-n3" style="display:flex;" v-for="(item,index) in shipcostpannalitems4" :key="index">
                  <v-btn 
                   @click="editmode27 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.shipcostpannalradio4">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode27 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode27 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal5 -->

              <v-expansion-panel
                id="contracttextpannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header
                  @click="contracttextpannalchangevalue()"
                >
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="contracttextpannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                  
                   <v-btn class="" @click="editheading5 = !editheading5"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                  </div>
                 
                  <div >
                    <v-textarea
                    v-if="editheading5"
                    dense
                   outlined
                   color="#FFA300"
                   auto-grow
                    :rows="1"
                    class="pt-3"
                    style="margin-left:-35%;"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.contracttextpannalname)"
                    v-model="Amazon.contracttextpannalname"
                    @keyup.enter.exact="editheading5=false"
                     >
                    </v-textarea>
                  <span
                   v-else><strong>{{ Amazon.contracttextpannalname | truncateEnd(36, "...") }}</strong></span
                  >
                  </div>
                  <div style="position:absolute;right:15px;top:13px;"  v-if="contracttextpannalprogressValue===0">
                   <v-chip class="" color="#606060" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ contracttextpannalprogressValue }} / 1
                     </p> 
                     </v-chip>
                  </div>

                   <div style="position:absolute;right:15px;top:13px;"  v-if="contracttextpannalprogressValue!==0">
                   <v-chip class="" color="#ffa300" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ contracttextpannalprogressValue }} / 1
                     </p> 
                     </v-chip>
                  </div> 
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- add new pannal 5 -->
                  <div class="mt-4">
                     <div class="mt-n3" style="display:flex;" v-for="(item,index) in newpannal5items" :key="index">
                  <v-btn 
                   @click="editmode28 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.newpannal5radio">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode28 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode28 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal6 -->

              <v-expansion-panel
                id="contractcustomerpannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header
                  @click="contractcustomerpannalchangevalue()"
                >
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="contractcustomerpannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                     <v-btn class="" @click="editheading6 = !editheading6"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                  </div>
                 
                 
                  <div >
                    <v-textarea
                    v-if="editheading6"
                    dense
                   outlined
                   color="#FFA300"
                   auto-grow
                    :rows="1"
                    class="pt-3"
                    style="margin-left:-35%;"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.contractcustomerpannalname)"
                    v-model="Amazon.contractcustomerpannalname"
                    @keyup.enter.exact="editheading6=false"
                     >
                    </v-textarea>
                  <span
                    v-else><strong>{{ Amazon.contractcustomerpannalname | truncateEnd(36, "...") }}</strong></span
                  >
                  </div>
                  <div style="position:absolute;right:15px;top:13px;"  v-if="contractcustomerpannalprogressValue===0">
                   <v-chip class="" color="#606060" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ contractcustomerpannalprogressValue}} / 1
                     </p> 
                     </v-chip>
                  </div>

                   <div style="position:absolute;right:15px;top:13px;"  v-if="contractcustomerpannalprogressValue!==0">
                   <v-chip class="" color="#ffa300" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ contractcustomerpannalprogressValue}} / 1
                     </p> 
                     </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- add new pannal 6 -->
                  
                
                    <div class="mt-4">
                     <div class="mt-n3" style="display:flex;" v-for="(item,index) in newpannal6items" :key="index">
                  <v-btn 
                   @click="editmode29 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.newpannal6radio">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode29 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode29 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal7 -->

              <v-expansion-panel
                id="shipcostpannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header @click="shipcostpannalchangevalue()">
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="shipcostpannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                     <v-btn class="" @click="editheading7 = !editheading7"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                  </div>
                 
                 
                  <div >
                    <v-textarea
                    v-if="editheading7"
                    dense
                   outlined
                   color="#FFA300"
                   auto-grow
                    :rows="1"
                    class="pt-3"
                    style="margin-left:-35%;"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.shipcostpannalname)"
                    v-model="Amazon.shipcostpannalname"
                    @keyup.enter.exact="editheading7=false"
                     >
                    </v-textarea>
                  <span
                   v-else ><strong>{{ Amazon.shipcostpannalname | truncateEnd(36, "...") }}</strong></span
                  >
                  </div>
                  <div style="position:absolute;right:15px;top:13px;"  v-if="shipcostpannalprogressValue===0">
                   <v-chip class="" color="#606060" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                     {{ shipcostpannalprogressValue }} / 2
                     </p> 
                     </v-chip>
                  </div>

                   <div style="position:absolute;right:15px;top:13px;"  v-if="shipcostpannalprogressValue!==0">
                   <v-chip class="" color="#ffa300" style="width:7em;height:1.8em;" small>
                    <p class="pt-4 pl-8" style="color:white">
                      {{ shipcostpannalprogressValue }} / 2
                     </p> 
                     </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- add transferpannal  -->
                 
                    <div class="mt-4">
                     <div class="mt-n3" style="display:flex;" v-for="(item,index) in transferpannalitems1" :key="index">
                  <v-btn 
                   @click="editmode30 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.transferpannalradio1">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode30 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode30 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                  </div>
                    <div style="display: flex" class="mt-n1 mb-3">
                       <v-btn 
                 @click="editmode31 = !editmode31"
                 class="mt-n2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode31"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.transferpannalheading2"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.transferpannalheading2)"
                    @keyup.enter.exact="editmode31 = false"
                     ></v-textarea>
                  <p v-else style="word-break: break-word;">{{ Amazon.transferpannalheading2 }}</p>
                    </div>
                  
                      <div class="mt-n3" style="display:flex;" v-for="(item,index) in transferpannalitems2" :key="index">
                  <v-btn 
                   @click="editmode32 = index"
                  style="margin-top:-0.45em;" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                  <v-radio-group v-model="Amazon.transferpannalradio2">
                  <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                  </v-radio-group>
                  <v-textarea
                    v-if="editmode32 == index"
                    dense
                    auto-grow
                    color="#FFA300"
                    :rows="1"
                    class="mt-n2"
                    outlined
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode32 = null"
                     ></v-textarea>
                      <p v-else class="mt-1" style="color:grey;">{{item.label}}</p>
                  </div>
                    <div style="display: flex" class="mt-n3">
                       <v-btn 
                 @click="editmode33 = !editmode33"
                 class="mt-n2"  icon v-if="edit && Amazon.transferpannalradio2">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                    v-if="editmode33"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    color="#FFA300"
                    v-model="Amazon.transferpannalheading3"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(Amazon.transferpannalheading3)"
                    @keyup.enter.exact="editmode33 = false"
                     ></v-textarea>
                     
                  <p 
                  style="word-break: break-word;"
                  v-if="!editmode33 && Amazon.transferpannalradio2">{{ Amazon.transferpannalheading3 }}</p>
                  
                    </div>
                  
                  <v-text-field
                    v-if="Amazon.transferpannalradio2"
                    rounded
                    dense
                    color="#FFA300"
                    clearable
                    outlined
                    label="Verhaltenskodizies"
                    v-model="Amazon.transferpannalinputfield"
                  >
                  </v-text-field>
                </v-expansion-panel-content>
              </v-expansion-panel>

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

        <div style="width: 55%; position: relative;background-color:#ffffff;" id="printme">
          <v-card
          elevation="0"
           style="min-height:50vw;background-color:#ffffff;">
            <!-- <v-btn class="mt-13 ml-14" @click ="test()">ghghjg</v-btn> -->
            <!-- for pannal 1 -->
            <v-list style="background-color:#ffffff;">
                  <v-list-item>
                    <v-list-item-content
                      style="
                        margin-right: 25mm;
                        padding-left: 25mm !important;
                        margin-top: 2%;
                      "
                      >
                      <p
                        v-if="Amazon.addressdocumentpannalinputfield1"
                        style="text-align: center; font-weight: 700 ; font-size: 24px"
                      >
                        <strong>Allgemeine Geschäftsbedingungen</strong>
                        <br />
                        <br />
                      </p>

                        <p
                        v-if="Amazon.addressdocumentpannalinputfield1"
                        style="word-break: break-word;text-align: center; font-weight: 700; font-size: 18.72px"
                      >
                        <strong
                          >{{ Amazon.addressdocumentpannalinputfield1 }}
                        </strong>
                      </p>

                      <p
                        v-if="Amazon.addressdocumentpannalinputfield1 || Amazon.addressUserModel || Amazon.addressOrt || Amazon.addressPlz || Amazon.addressHausnummer || Amazon.addressStrasse || Amazon.addressRechtsform || Amazon.addressVorname || Amazon.addressNachname || Amazon.addressFirmenname"
                        style="text-align: center; font-weight: 700;font-size: 16px"
                      >
                        <br /><br />
                        <strong
                          >§{{ pos[0] }}<br />
                          Vertragspartner</strong
                        >
                      </p>

                      <p
                        v-if="Amazon.addressdocumentpannalinputfield1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      >
                        <br />
                        Vertragspartner des Kunden für die über den Amazon Shop
                        {{ Amazon.addressdocumentpannalinputfield1 }}

                        abgeschlossenen Verträge ist im Rahmen des vorliegenden
                        Angebots:
                      </p>

                      <p
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                          word-break: break-word;
                        "
                      >
                        <br />
                        <strong
                          >{{
                            Amazon.addressUserModel.value !== "keine Angabe"
                              ? Amazon.addressUserModel.value
                              : ""
                          }}
                          {{ Amazon.addressVorname }}
                          {{ Amazon.addressNachname }}</strong
                        >
                      </p>

                      <p
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                          word-break: break-word;
                        "
                      >
                        <strong
                          >{{ Amazon.addressFirmenname }}
                          {{ Amazon.addressRechtsform }}</strong
                        >
                      </p>

                      <p
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                          word-break: break-word;
                        "
                      >
                        <strong
                          >{{ Amazon.addressStrasse }}
                          {{ Amazon.addressHausnummer }}</strong
                        >
                      </p>

                      <p
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                          word-break: break-word;
                        "
                      >
                        <strong
                          >{{ Amazon.addressPlz }}
                          {{ Amazon.addressOrt }}</strong
                        >
                      </p>

                      <!-- starting combine original pannal 2,3,4,5,6 to new pannal 2 -->
                      <!-- offerpannal 2-->
                      <p
                        v-if="
                          Amazon.offerradio1 ||
                          Amazon.offerradio1 === false ||
                          Amazon.offerradio2 ||
                          Amazon.offerradio2 === false ||
                          Amazon.offerradio3 ||
                          Amazon.offerradio3 === false ||
                          Amazon.customerreceiptcontractradio1 ||
                          Amazon.customerreceiptcontractradio1 === false ||
                          Amazon.languagepannalradio ||
                          Amazon.languagepannalradio === false ||
                          Amazon.contracttextpannalradio ||
                          Amazon.contracttextpannalradio === false ||
                          Amazon.contracttextpannalinputfield ||
                          Amazon.contractcustomerpannalinputfield1 ||
                          Amazon.contractcustomerpannalinputfield2 ||
                          Amazon.contractcustomerpannalradio ||
                          Amazon.contractcustomerpannalradio === false
                        "
                        style="text-align: center; margin-top: 0.5%;font-size: 16px"
                      >
                        <br /><br /><br />
                        <strong
                          >§{{ pos[1] }}<br />
                          Vertragsschluss</strong
                        >
                      </p>

                      <p
                        v-if="Amazon.offerradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      >
                        <br />
                        {{ offerdocument1a }}
                      </p>

                      <p
                        v-if="Amazon.offerradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ offerdocument1b }}
                      </p>

                      <p
                        v-if="Amazon.offerradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ offerdocument1c }}
                      </p>

                      <p
                        v-if="Amazon.offerradio1 === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ offerdocument2 }}
                      </p>

                      <p
                        v-if="Amazon.offerradio2"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ offerdocument3 }}
                      </p>

                      <p
                        v-if="Amazon.offerradio2 === false"
                        style="text-align: justify; margin-top: 0.5%"
                      ></p>

                      <!-- customerreceiptpannal 3-->
                      <p
                        v-if="Amazon.customerreceiptcontractradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ customerreceiptcontractdocument1 }}
                      </p>

                      <p
                        v-if="Amazon.customerreceiptcontractradio1 === false"
                        style="text-align: justify; margin-top: 0.5%"
                      ></p>

                      <p
                        v-if="Amazon.customerreceiptcontractradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ customerreceiptcontractdocument2 }}
                      </p>
                      <!-- languagepannal 4-->

                      <p
                        v-if="Amazon.languagepannalradio"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        7. Als Vertragssprache stehen deutsch 
                        {{ Amazon.languagepannalinputfield }} zur Verfügung.
                      </p>

                      <p
                        v-if="Amazon.languagepannalradio === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ languagepannaldocument2 }}
                      </p>

                      <!-- contracttextpannal 5-->
                      <p
                        v-if="Amazon.contracttextpannalradio"
                        style="word-break: break-word;text-align: justify; margin-top: 0.4%"
                      ><br>
                        {{ contracttextpannaldocument1 }} Die Speicherung
                        erfolgt für
                        {{
                          Amazon.contracttextUserModel.value !==
                          "Abweichende Speicherdauer"
                            ? Amazon.contracttextUserModel.value
                            : ""
                        }}
                        {{ Amazon.contracttextpannalinputfield }}
                      </p>

                      <p
                        v-if="Amazon.contracttextpannalradio === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.4%"
                      ><br>
                        {{ contracttextpannaldocument2 }}
                      </p>

                      <!-- contractcustomerpannal6 -->

                      <p
                        v-if="Amazon.contractcustomerpannalinputfield1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        9. Der Kunde erhält den Vertragstext über
                        {{ Amazon.contractcustomerpannalinputfield1 }}.
                      </p>

                      <p
                        v-if="Amazon.contractcustomerpannalinputfield2"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        10. Der Vertragstext ist dem Kunden auch im Anschluss an
                        den Vertragsschluss noch über
                        {{ Amazon.contractcustomerpannalinputfield2 }}
                        zugänglich.
                      </p>

                      <p
                        v-if="Amazon.contractcustomerpannalradio"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        11. Im Rahmen des Vertragsschlusses über den
                        amazon-Warenkorb kann der Kunde seine Daten, nachdem er
                        diese in das amazon-Formular eingegeben hat jederzeit
                        löschen oder die Löschung der eingegebenen Daten durch
                        das Schließen des Browsers erreichen.
                      </p>

                      <p
                        v-if="
                          Amazon.offerradio2 &&
                          Amazon.contractcustomerpannalradio
                        "
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        12. Im Rahmen der „1-Click“-Bestelloption kann der
                        Bestellvorgang über die Zurück-Funktion oder das
                        Schließen des Browsers abgebrochen werden.
                      </p>

                      <p
                        v-if="Amazon.contractcustomerpannalradio === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        11. {{ Amazon.contractcustomerpannalinputfield3 }}
                      </p>

                      <!-- end of combine original pannal 2,3,4,5,6 to new pannal 2 -->
                      <!-- starting new pannal 3 from mixing some original pannal 7 -->

                      <!-- shipcostpannaland transferpannal7 -->
                      <!-- add contractcustomerpanal here -->

                      <p
                        v-if="
                          Amazon.contractcustomerpannalinputfield4 ||
                          Amazon.shipcostpannalradio1 ||
                          Amazon.shipcostpannalradio1 === false ||
                          Amazon.shipcostpannalradio2 ||
                          Amazon.shipcostpannalradio2 === false ||
                          Amazon.shipcostpannalradio3 ||
                          Amazon.shipcostpannalradio3 === false
                        "
                        style="text-align: center; margin-top: 0.5%;font-size: 16px"
                      >
                        <br /><br /><br />
                        <strong
                          >§{{ pos[2] }}<br />
                          Bezahlung</strong
                        >
                      </p>

                      <p
                        v-if="Amazon.contractcustomerpannalinputfield4"
                        style="word-break: break-word;text-align: justify; margin-top: 1%"
                      >
                        <br />
                        1. Als Zahlungsart steht/stehen dem Kunden
                        {{ Amazon.contractcustomerpannalinputfield4 }}
                        zur Verfügung.
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        2. Die für die Waren angegebenen Preise enthalten die
                        jeweils gültige gesetzliche Mehrwertsteuer.
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio1 === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        2. Aufgrund der Kleinunternehmereigenschaft des
                        Anbieters iSd § 19 UstG enthalten die angegebenen Preise
                        keine Mehrwertsteuer.
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio2"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        3. Die Versandkosten betragen
                        {{ Amazon.shipcostpannalinputfield }} je Bestellung.
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio2 === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ shipcostpannaldocument2 }}
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio3"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        4. Der Kunde hat im Falle eines Widerrufs die
                        unmittelbaren Kosten der Rücksendung zu tragen.
                      </p>

                      <!-- end new pannal 3 from mixing some original pannal 7 -->
                      <!-- starting new pannal 4 from mixing some original pannal 7 -->
                      <p
                        v-if="Amazon.shipcostpannalradio4"
                        style="word-break: break-word;text-align: center; margin-top: 0.5%;font-size: 16px"
                      >
                        <br /><br /><br />
                        <strong
                          >§{{ pos[3] }}<br />
                          Eigentumsvorbehalt</strong
                        >
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio4"
                        style="text-align: justify; margin-top: 0.5%"
                      >
                        <br>
                        Bis zur vollständigen Bezahlung verbleiben die
                        gelieferten Waren im Eigentum des Anbieters.
                      </p>

                      <!-- transferpannal -->
<!-- 
                      <p
                        v-if="Amazon.shipcostpannalradio4"
                        style="text-align: justify; margin-top: 1"
                      ><br>
                        {{ transferpannaldocument1 }}
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio4"
                        style="text-align: justify; margin-top: 1%"
                      ><br>
                        {{ transferpannaldocument2 }}
                      </p> -->

                      <!-- <p
                        v-if="Amazon.shipcostpannalradio4"
                        style="text-align: justify; margin-top: 1%"
                      >
                        {{ transferpannaldocument3 }}
                      </p>
                      <p
                        v-if="Amazon.shipcostpannalradio4"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ transferpannaldocument4 }}
                      </p> -->
                      <!-- end new pannal 4 from mixing some original pannal 7 -->

                      <!-- start of pannal 5new -->
                      <p
                        v-if="Amazon.newpannal5radio"
                        style="text-align: center; margin-top: 0.5%;font-size: 16px"
                      ><br /><br/><br/>
                        <strong
                          >§{{ pos[4] }}<br />
                          Gewährleistung
                        </strong>
                      </p>

                      <p v-if="Amazon.newpannal5radio">
                        <br />
                        Die Gewährleistung bestimmt sich nach den gesetzlichen
                        Vorschriften.
                      </p>

                      <p v-if="Amazon.newpannal5radio === false"></p>
                      <!-- end of pannal 5new -->
                      <!-- start of pannal 6new -->

                      <p
                        v-if="Amazon.newpannal6radio"
                        style="word-break: break-word;text-align: center; margin-top: 0.5%;font-size: 16px"
                      >
                        <strong
                          ><br /><br /><br />
                          §{{ pos[5] }}<br />
                          Europäische Streitschlichtungsplattform
                        </strong>
                      </p>

                      <p v-if="Amazon.newpannal6radio">
                        <br />Die EU-Kommission stellt eine
                        Online-Streitbeilegungsplattform (OS) bereit. Diese
                        findet sich unter
                        https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage.
                      </p>

                      <p v-if="Amazon.newpannal6radio === false"></p>
                      <!-- end of pannal 6new -->
                      <!-- starting new pannal 7  -->

                      <p
                        v-if="
                          Amazon.transferpannalradio1 ||
                          Amazon.transferpannalradio2 ||
                          Amazon.transferpannalradio2 === false
                        "
                        style="text-align: center; margin-top: 0.5%;font-size: 16px"
                      >
                        <br /><br /><br />
                        <strong
                          >§{{ pos[6] }}<br />
                          Schlussbestimmungen</strong
                        >
                      </p>

                      <p v-if="Amazon.transferpannalradio1" style="text-align: justify; margin-top: 0.5%">
                        <br />1. Auf Verträge zwischen dem Anbieter und den
                        Kunden findet das Recht der Bundesrepublik Deutschland
                        unter Ausschluss des UN-Kaufrechts Anwendung. Die
                        gesetzlichen Vorschriften zur Beschränkung der
                        Rechtswahl und zur Anwendbarkeit zwingender Vorschriften
                        insbesondere des Staates, in dem der Kunde als Verbraucher
                        seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.
                      </p>

                      <p v-if="Amazon.transferpannalradio1" style="text-align: justify; margin-top: 0.5%">
                       <br>2. Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit
                        einzelner Punkte in seinen übrigen Teilen verbindlich.
                        Anstelle der unwirksamen Punkte treten, soweit
                        vorhanden, die gesetzlichen Vorschriften. Soweit dies
                        für eine Vertragspartei eine unzumutbare Härte
                        darstellen würde, wird der Vertrag jedoch im Ganzen
                        unwirksam.
                      </p>

                      <p v-if="Amazon.transferpannalradio1 === false"></p>

                      <p
                        v-if="Amazon.transferpannalradio2"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{ transferpannaldocument5 }}
                        {{ Amazon.transferpannalinputfield }}<br />
                      </p>

                      <p
                        v-if="Amazon.transferpannalradio2 === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      >
                        <br />
                        {{ transferpannaldocument6 }}
                      </p>

                      <!-- ending new pannal 7  -->
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
          </v-card>
        </div>
        </v-card>
      </v-layout>
    
  </v-container>
</template>

<script>
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var electron = require("electron");
var fs = require("fs");
import store from "../store";
import { mapState } from "vuex";
//import CountryFlag from "@dzangolab/vue-country-flag-icon";
import "@dzangolab/vue-country-flag-icon/dist/CountryFlag.css"; // import stylesheet
// import { Console } from 'console';
export default {
  name: "amazon",
  components: {
    //CountryFlag,
  },
  beforeDestroy() {
    if(store.state.isAdmin == true){
      this.org_value2 = Object.assign(this.org_value2,this.Amazon);
      if(JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)){
        this.add_percentage_admin()
        this.writefileandscreenshot_admin()
      }
    }
    else{
      this.org_value2 = Object.assign(this.org_value2,this.Amazon);
      if(JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)){
        this.writefileandscreenshot_user()
      }
    }
  },
  
// mounted
  mounted() {
     if(store.state.isAdmin == true){
      this.org_value1 = Object.assign(this.org_value1,this.Amazon);
      this.mounted_admin()
    }
    else{
        this.org_value1 = Object.assign(this.org_value1,this.Amazon);
        this.mounted_user()
    }
  },
  //beforedestroy
  // beforeDestroy() {
  //   if(store.state.isAdmin == true){
  //     this.writefileandscreenshot_admin()
  //   }
  //   else{
  //       console.log("LO")
  //       this.writefileandscreenshot_user()
  //   }
  // },
// mounted
  // mounted() {
  //    if(store.state.isAdmin == true){
  //     this.mounted_admin()
  //   }
  //   else{
  //       console.log("LO")
  //       this.mounted_user()
  //   }
  // },
  //Computed:
  computed: {
    ...mapState(["help","edit",]),
    pannel1Watcher: function () {
      return (
        this.Amazon.addressUserModel, new Date(),
        this.Amazon.addressUserModel1, new Date(),
        this.Amazon.addressdocumentpannalinputfield1, new Date(),
        this.Amazon.addressOrt , new Date(),
        this.Amazon.addressPlz , new Date(),
        this.Amazon.addressHausnummer , new Date(),
        this.Amazon.addressStrasse , new Date(),
        this.Amazon.addressRechtsform , new Date(),
        this.Amazon.addressVorname  , new Date(),
        this.Amazon.addressNachname  , new Date(),
        this.Amazon.addressFirmenname , new Date()
      );
    },
    pannel2Watcher: function () {
      return (
        this.Amazon.offerradio1,
        this.Amazon.offerradio2,
        this.Amazon.offerradio3,
        this.Amazon.customerreceiptcontractradio1,
        this.Amazon.languagepannalradio,
        this.Amazon.contracttextpannalradio,
        this.Amazon.contracttextpannalinputfield,
        this.Amazon.contractcustomerpannalinputfield1,
        this.Amazon.contractcustomerpannalinputfield2,
        this.Amazon.contractcustomerpannalradio,
        new Date()
      );
    },
    pannel3Watcher: function () {
      return (
        this.Amazon.contractcustomerpannalinputfield4,
        this.Amazon.shipcostpannalradio1,
        this.Amazon.shipcostpannalradio2,
        this.Amazon.shipcostpannalradio3,
        new Date()
      );
    },
    pannel4Watcher: function () {
      return this.Amazon.shipcostpannalradio4, new Date();
    },
    pannel5Watcher: function () {
      return this.Amazon.newpannal5radio, new Date();
    },
    pannel6Watcher: function () {
      return this.Amazon.newpannal6radio, new Date();
    },
    pannel7Watcher: function () {
      return (
      this.Amazon.transferpannalradio1,
      this.Amazon.transferpannalradio2,
      this.Amazon.transferpannalinputfield,
      new Date()
      );
    },
    addresspannalprogress: function(){
      return (
        this.Amazon.addressVorname,
        this.Amazon.addressNachname,
        this.Amazon.addressStrasse,
        this.Amazon.addressHausnummer,
        this.Amazon.addressPlz,
        this.Amazon.addressOrt,
        this.Amazon.addressdocumentpannalinputfield1,
        this.Amazon.addressFirmenname,
        this.Amazon.addressRechtsform,
        new Date()
      );
    },
    offerpannalprogress: function(){
      return (
        this.Amazon.offerradio1,
        this.Amazon.offerradio2,
        this.Amazon.customerreceiptcontractradio1,
        this.Amazon.languagepannalradio,
        this.Amazon.contracttextpannalradio,
        this.Amazon.contractcustomerpannalinputfield1,
        this.Amazon.contractcustomerpannalinputfield2,
        this.Amazon.contractcustomerpannalradio,
        new Date()
      );
    },
    customerreceiptpannalprogress: function(){
      return (
        this.Amazon.contractcustomerpannalinputfield4,
        this.Amazon.shipcostpannalradio1,
        this.Amazon.shipcostpannalradio2,
        this.Amazon.shipcostpannalradio3,
        new Date()
      );
    },
    languagepannalprogress: function(){
      return (
        this.Amazon.shipcostpannalradio4,
        new Date()
      );
    },
    contracttextpannalprogress: function(){
      return (
        this.Amazon.newpannal5radio,
        new Date()
      );
    },
    contractcustomerpannalprogress: function(){
      return (
        this.Amazon.newpannal6radio,
        new Date()
      );
    },
    shipcostpannalprogress: function(){
      return (
        this.Amazon.transferpannalradio1,
        this.Amazon.transferpannalradio2,
        new Date()
      );
    },
  },
  
  //Data:
  data: () => ({
    current_admin_name: "",
    current_admin_versions: [],
    org_value2:{},
    org_value1:{},
    Amazon: {
      addressUserModel: "",
      addressUserModel1: "",
      addressVorname: "",
      addressNachname: "",
      addressStrasse: "",
      addressHausnummer: "",
      addressPlz: "",
      addressOrt: "",
      addresspannalname: "Vertragspartner",
      addressdocumentpannalinputfield1: "",
      addressFirmenname: "",
      addressRechtsform:"",
        addressdocumentheading1:
      "Unter welchem Namen betreiben Sie Ihren Amazon-Shop?",
      addressdocumentheading1counter:0,
       addressdocumentheading2:
      "Handelt es sich bei dem Vertragspartner des Kunden um eine natürliche oder juristische Person?",
         addressheading: "Wer soll Vertragspartner des Kunden werden?",
         offerpannalheading1:
      "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insb. hins. des Preises) ",
       offerpannalheading2:
      "Bieten Sie dem Kunden die „1-Click Bestellfunktion“ an?  ",
      customerreceiptcontractheading1:
      "Erhält der Kunde eine Eingangsbestätigung?  ",
      languagepannalheading:
      "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen? ",
       languagepannalname: "Eigentumsvorbehalt",
      contracttextpannalheading1: "Erfolgt eine Speicherung des Vertragstextes?",
       contracttextpannalheading2: "Wie lange wird der Vertragstext gespeichert?",
       contracttextpannalname: "Gewährleistung",
      contractcustomerpannalheading1:
      "Wie wird dem Kunden der Vertragstext zugänglich gemacht? ",
    contractcustomerpannalheading2:
      "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies? ",
    contractcustomerpannalheading3:
      "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen? ",
    contractcustomerpannalheading4:
      "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung? ",
       contractcustomerpannalname: "Europäische Streitschlichtungsplattform",
      shipcostpannalname: "<h2>Schlussbestimmungen<h2>",
      shipcostpannalheading1:
      "Enthalten die Preise jeweils die gültige gesetzliche Umsatzsteuer? ",
    shipcostpannalheading2:
      "Fallen Liefer- oder Versandkosten an? Wenn ja, wie hoch sind diese? ",
    shipcostpannalheading3:
      "Hat der Kunde im Falle eines Widerrufs die Kosten für eine Rücksendung zu tragen? ",
    shipcostpannalheading4:
      "Wollen Sie die versandten Produkte bis zur vollständigen Zahlung in Ihrem Eigentum behalten?",
      transferpannalheading2: "Unterliegen Sie speziellen Verhaltenskodizies? ",
     transferpannalheading3:"Unternehmenseigene oder sonstige Verhaltenskodizies (Name Zweck, ggf. Domain zum Text des Verhaltenskodexes)",
  //
       offerpannalname: "Vertragsschluss",
      offerradio1: "",
      offerradio2: "",
       customerreceiptcontractpannalname: "Bezahlung",
      customerreceiptcontractradio1: "",
      languagepannalinputfield: "",
      languagepannalradio: "",
      contracttextpannalradio: "",
      contracttextUserModel: "",
      contracttextpannalinputfield: "",
      contractcustomerpannalinputfield1: "",
      contractcustomerpannalinputfield2: "",
      contractcustomerpannalinputfield3: "",
      contractcustomerpannalinputfield4: "",
      contractcustomerpannalradio: "",
      shipcostpannalradio1: "",
      shipcostpannalradio2: "",
      shipcostpannalradio3: "",
      shipcostpannalradio4: "",
      shipcostpannalinputfield: "",
      transferpannalradio2: "",
      transferpannalradio1: "",
      transferpannalinputfield: "",
      // add new pannal 5
      newpannal5radio: "",
      // add new pannal 6
      newpannal6radio: "",
    },

    

    localitem: [
      { title: ". 2 Jahre", list: ". Nein " },
      {
        title: ". 5 Jahre ",
        list: ". Unternehmenseigene oder sonstige Verhaltenskodizies",
      },
      {
        title: ". 10 Jahre ",
        list: ". (Name, Zweck, ggf. Domain zum Text des Verhaltenskodexes)",
      },
      { title: ". Abweichende Speicherdauer " },
    ],
    
   
    addresspannalprogressValue: 0,
    addresspannaliconcolor: "#d8d8d8",
    addresspannalBox: false,
   
    
   
    offerpannalprogressValue: 0,
    offerpannaliconcolor: "#d8d8d8",
    offerpannalBox: false,
   
    offerdocument1a:
      "1. Die im Rahmen von Amazon vorgebrachten Angebote des Anbieters stellen verbindliche Angebote zum Abschluss eines Kaufvertrages dar.",
    offerdocument1b:
      "2. Der Kunde kann die einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse gehen“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen.  Anschließend gibt der Kunde über den Button „Jetzt kaufen“ ein verbindliches Angebot zum Abschluss eines Kaufvertrages an den Anbieter ab. ",
    offerdocument1c:
      "3. Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der Amazon Europe Core S.à r.l. (Société à responsabilité limitée): https://www.amazon.de/gp/help/customer/display.html?ie=UTF8&nodeId=201909000&ref_=footer_cou.",
    offerdocument2:
      "1. Die bei Amazon eingestellten Produktseiten des Anbieters stellen unverbindliche Aufforderungen zum Abschluss eines Kaufvertrages dar.",
    offerdocument3:
      "4. Des Weiteren kann der Kunde durch die Betätigung des Buttons „Jetzt mit 1-Click® kaufen“ unmittelbar von der Produktdetailseite aus ein verbindliches Angebot zum Abschluss eines Kaufvertrages abgeben.  ",

    customerreceiptpannalprogressValue: 0,
    customerreceiptpannaliconcolor: "#d8d8d8",
    customerreceiptpannalBox: false,
    
   
    customerreceiptcontractdocument1:
      "5. Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss. ",
    customerreceiptcontractdocument2:
      "6. Die Annahme des Angebots erfolgt durch eine E-Mail der Amazon Europe Core S.à r.l., welche den Versand der Ware bestätigt. ",
    languagepannalprogressValue: 0,
    languagepannaliconcolor: "#d8d8d8",
    languagepannalBox: false,
    
   
    //languagepannaldocument1:"7. Als Vertragssprache stehen deutsch,",
    languagepannaldocument2: "7. Die Vertragssprache ist Deutsch.",
    
    
   
    contracttextpannalprogressValue: 0,
    contracttextpannaliconcolor: "#d8d8d8",
    contracttextpannalBox: false,
    contracttextpannaldocument1:
      "8. Der Vertragstext wird im Anschluss an den Vertragsschluss vom Anbieter gespeichert.",
    contracttextpannaldocument2:
      "8. Der Vertragsschluss wird vom Anbieter nicht gespeichert.",
   
    
    contractcustomerpannalprogressValue: 0,
    contractcustomerpannaliconcolor: "#d8d8d8",
    contractcustomerpannalBox: false,
    
   
    shipcostpannalprogressValue: 0,
    shipcostpannaliconcolor: "#d8d8d8",
    shipcostpannalBox: false,
    //shipcostpannaldocument1:"3.Die Versandkosten betragen je Bestellung:",
    shipcostpannaldocument2: "3. Wir liefern versandkostenfrei.",

   
    // transferpannaldocument1:
    //  "2.Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften. ",
    // transferpannaldocument2:
    //  "3.Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage . ",
    // transferpannaldocument3:
    //  "4.Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbes. des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
    // transferpannaldocument4:
    //  "5.Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
    transferpannaldocument5:
      "3. Wir unterliegen den folgenden Verhaltenskodizies:",
    transferpannaldocument6:
      "3. Speziellen Verhaltenskodizies unterliegen wir nicht.",
      editmodeok:false,
      editheading1:false,
      editheading2:false,
      editheading3:false,
      editheading4:false,
      editheading5:false,
      editheading6:false,
      editheading7:false,
    editmode1:false,
    editmode2:false,
    editmode3:false,
    editmode4:false,
    editmode5:false,
    editmode6:null,
    editmode7:false,
    editmode8:null,
    editmode9:false,
    editmode10:null,
    editmode11:false,
    editmode12:null,
    editmode13:false,
    editmode14:null,
    editmode15:false,
    editmode16:false,
    editmode17:false,
    editmode18:false,
    editmode19:null,
    editmode20:false,
     editmode21:false,
    editmode22:null,
    editmode23:false,
    editmode24:null,
    editmode25:false,
    editmode26:null,
    editmode27:null,
    editmode28:null,
    editmode29:null,
    editmode30:null,
    editmode31:false,
    editmode32:null,
    editmode33:false,
    value: "",
    output: null,
    opacity: 0,
    addressitems: [
      { id: 2, value: "keine Angabe" },
      { id: 3, value: "Frau" },
      { id: 4, value: "Herr" },
    ],
    addressitems2: ["Natürliche Person", "Juristische Person"],
    offeritems1: [
      { label: "​Ja", value: true ,icon:"mdi-pencil-outline"},
      { label: "Nein", value: false ,icon:"mdi-pencil-outline"},
    ],
    offeritems2: [
      { label: "​Ja", value: true ,icon:"mdi-pencil-outline"},
      { label: "Nein", value: false,icon:"mdi-pencil-outline" },
    ],

    customerreceiptcontractitems1: [
      { label: "​Ja", value: true,icon:"mdi-pencil-outline" },
      { label: "Nein", value: false,icon:"mdi-pencil-outline" },
    ],

    languagepannalitems: [
      {
        label: "Sprache wählen",
        value: true,
        icon:"mdi-pencil-outline",
      },
      {
        label: "Keine weitere Sprache",
        value: false,
        icon:"mdi-pencil-outline",
      },
    ],
    contracttextitems: [
      { id: 5, value: "2 Jahre." },
      { id: 6, value: "5 Jahre." },
      { id: 7, value: "10 Jahre." },
      { id: 8, value: "Abweichende Speicherdauer" },
    ],
    contracttextpannalitems: [
      {
        label: "​Ja",
        value: true,
         icon:"mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
         icon:"mdi-pencil-outline",
      },
    ],
    contractcustomerpannalitems: [
      {
        label:
          "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
        value: true,
        icon:"mdi-pencil-outline",
      },
      { label: "Sonstiges", value: false,
      
      icon:"mdi-pencil-outline",},
    ],
    shipcostpannalitems1: [
      {
        label: "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
        value: true,
        icon:"mdi-pencil-outline",
      },
      { label: "Kleinunternehmer iSd § 19 UstG", value: false ,
      icon:"mdi-pencil-outline",
      },
    ],
    shipcostpannalitems2: [
      {
        label: "​Ja",
        value: true,
        icon:"mdi-pencil-outline",
      },
      { label: "Nein", value: false,
      icon:"mdi-pencil-outline",
      },
    ],
    shipcostpannalitems3: [
      { label: "​Ja", value: true ,
      icon:"mdi-pencil-outline",
      },
      { label: "Nein", value: false,
      icon:"mdi-pencil-outline",
      },
    ],
    shipcostpannalitems4: [
      { label: "​Ja", value: true,
      icon:"mdi-pencil-outline",
      },
      { label: "Nein", value: false,
      icon:"mdi-pencil-outline",
      },
    ],
    transferpannalitems1: [
      {
        label: "​Ja",
        value: true,
        icon:"mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon:"mdi-pencil-outline",
      },
    ],
    transferpannalitems2: [
      {
        label: "​Ja",
        value: true,
        icon:"mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon:"mdi-pencil-outline",
      },
    ],
    //  add new  pannal 5 items
    newpannal5items: [
      {
        label: "​Ja",
        value: true,
        icon:"mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon:"mdi-pencil-outline",
      },
    ],
    //  add new  pannal 6 items
    newpannal6items: [
      {
        label: "​Ja",
        value: true,
        icon:"mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon:"mdi-pencil-outline",
      },
    ],
    number1: "",
    pos: [0, 0, 0, 0, 0, 0, 0],
  }),
  //watch
  watch: {
    pannel1Watcher: function () {
      this.pos[0] = 1;
      this.pos = this.arrangePos(this.pos);
    },
    pannel2Watcher: function () {
      this.pos[1] = 2;
      this.pos = this.arrangePos(this.pos);
    },
    pannel3Watcher: function () {
      this.pos[2] = 3;
      this.pos = this.arrangePos(this.pos);
    },
    pannel4Watcher: function () {
      if(this.Amazon.shipcostpannalradio4 === true){
          this.pos[3] = 4;
      this.pos = this.arrangePos(this.pos);
        }
        else{
          this.pos[3] = 0;
      this.pos = this.arrangePos(this.pos);
        }
    },
    pannel5Watcher: function () {
      if(this.Amazon.newpannal5radio === true){
          this.pos[4] = 5;
      this.pos = this.arrangePos(this.pos);
        }
        else{
          this.pos[4] = 0;
      this.pos = this.arrangePos(this.pos);
        }
      
    },
    pannel6Watcher: function () {
      if(this.Amazon.newpannal6radio === true){
          this.pos[5] = 6;
      this.pos = this.arrangePos(this.pos);
        }
        else{
          this.pos[5] = 0;
      this.pos = this.arrangePos(this.pos);
        }
      
    },
    pannel7Watcher: function () {
       if(this.Amazon.transferpannalradio1 === true || this.Amazon.transferpannalradio2 === true || this.Amazon.transferpannalradio2 === false){
          this.pos[6] = 7;
      this.pos = this.arrangePos(this.pos);
        }
        else{
          this.pos[6] = 0;
      this.pos = this.arrangePos(this.pos);
        }
      // this.pos[6] = 7;
      // this.pos = this.arrangePos(this.pos);
    },
    addresspannalprogress: function(){
    
      var addresspannalfields = [];
      addresspannalfields.push(this.Amazon.addressStrasse);
      addresspannalfields.push(this.Amazon.addressHausnummer);
      addresspannalfields.push(this.Amazon.addressPlz);
      addresspannalfields.push(this.Amazon.addressOrt);
      addresspannalfields.push(this.Amazon.addressdocumentpannalinputfield1);
      if(this.Amazon.addressUserModel1 === "Natürliche Person"){
        addresspannalfields.push(this.Amazon.addressVorname);
        addresspannalfields.push(this.Amazon.addressNachname);
      }
      else if(this.Amazon.addressUserModel1 === "Juristische Person")
      {
        addresspannalfields.push(this.Amazon.addressFirmenname);
        addresspannalfields.push(this.Amazon.addressRechtsform);
      }
      this.addresspannalprogressValue = this.complete_fields_checker(addresspannalfields);
    },
    offerpannalprogress: function(){
        var offerpannalfields = [];
        offerpannalfields.push(this.Amazon.offerradio1)
        offerpannalfields.push(this.Amazon.offerradio2)
        offerpannalfields.push(this.Amazon.customerreceiptcontractradio1)
        offerpannalfields.push(this.Amazon.languagepannalradio)
        offerpannalfields.push(this.Amazon.contracttextpannalradio)
        offerpannalfields.push(this.Amazon.contractcustomerpannalinputfield1)
        offerpannalfields.push(this.Amazon.contractcustomerpannalinputfield2)
        offerpannalfields.push(this.Amazon.contractcustomerpannalradio)
        this.offerpannalprogressValue = this.complete_fields_checker(offerpannalfields);
    },
     customerreceiptpannalprogress: function(){
      var customerreceiptpannalfields = [];
      customerreceiptpannalfields.push(this.Amazon.contractcustomerpannalinputfield4)
      customerreceiptpannalfields.push(this.Amazon.shipcostpannalradio1)
      customerreceiptpannalfields.push(this.Amazon.shipcostpannalradio2)
      customerreceiptpannalfields.push(this.Amazon.shipcostpannalradio3)
      this.customerreceiptpannalprogressValue= this.complete_fields_checker(customerreceiptpannalfields);
    },
    languagepannalprogress: function(){
      var languagepannalfields = [];
      languagepannalfields.push(this.Amazon.shipcostpannalradio4)
      this.languagepannalprogressValue= this.complete_fields_checker(languagepannalfields);
    },
    contracttextpannalprogress:function(){
      var contracttextpannalfields = [];
      contracttextpannalfields.push(this.Amazon.newpannal5radio)
      this.contracttextpannalprogressValue= this.complete_fields_checker(contracttextpannalfields);
    },
    contractcustomerpannalprogress:function(){
      var contractcustomerpannalfields = [];
      contractcustomerpannalfields.push(this.Amazon.newpannal6radio)
      this.contractcustomerpannalprogressValue= this.complete_fields_checker(contractcustomerpannalfields);
    },
    shipcostpannalprogress:function(){
      var shipcostpannalfields = [];
      shipcostpannalfields.push(this.Amazon.transferpannalradio1)
      shipcostpannalfields.push(this.Amazon.transferpannalradio2)
      this.shipcostpannalprogressValue= this.complete_fields_checker(shipcostpannalfields);
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
  //Methods:
  methods: {
    test1(){
      if(this.Amazon.addressdocumentheading1counter<5){
 this.Amazon.addressdocumentheading1counter = this.Amazon.addressdocumentheading1counter + 1;
      console.log( this.Amazon.addressdocumentheading1counter);
      this.editmode1 = false;
      }
      else {
        alert("ffff");
        console.log( this.Amazon.addressdocumentheading1counter);
      }
    },
    newlineDescription(item) {
     item = `${item}\n`;
    console.log(item)
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
      store.commit("updatecontractpercentage",[a1,store.state.current_admin_name,value])
      store.commit("updatecontractpercentageingroups",[a1,store.state.current_admin_name,value])
      store.commit("changeiseditedrecentcontracts",[a1,store.state.current_admin_name])
    },
    updatecontractpercentage_admin(){
      var sum_array = [this.addresspannalprogressValue,
      this.offerpannalprogressValue,
      this.customerreceiptpannalprogressValue,
      this.languagepannalprogressValue,
      this.contracttextpannalprogressValue,
      this.contractcustomerpannalprogressValue,
      this.shipcostpannalprogressValue]
      var total_sum = (7 + 8 + 4 + 1 + 1 + 1 + 2)
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
        this.Amazon = JSON.parse(
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
    let b = JSON.stringify(this.Amazon);
    
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
        fs.writeFile(
          "./thumbnails/" +
          //  "./public/assets/" +
            // "./" +
            a1 +
            "-" + a2 +
            "-" +
            store.state.current_admin_name +
            ".png",
          img.toPNG(),
          "base64",
          function (err) {
            if (err) throw err;
            console.log("Saved!");
          }
        );
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
  mounted_user(){
      var val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_user_name)
      );
      if (val != null) {
        this.Amazon = JSON.parse(
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
    let b = JSON.stringify(this.Amazon);
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
        fs.writeFile(
          "./public/assets/" +
          // "./" +
            a1 +
            "-" + a2 +
            "-" +
            store.state.current_user_name +
            "- u.png",
          img.toPNG(),
          "base64",
          function (err) {
            if (err){
              //alert("sds");
              throw err
            }  
            console.log("Saved!");
          }
        );
      });
    },
    contractsdataforuser(){
      var user_name = store.state.current_user_name;
      var data = localStorage.getItem("contracts of " + user_name);
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile('./'+ user_name + '- u.json', encrypteddata, function() {
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
    countfor1(){

    },
    //pannalfor 1
    addresspannalchangevalue() {
      if (this.addresspannalBox === true) {
        
        //console.log("document.getElementById("prefirstline")")
        this.addresspannalBox = false;
        this.value = "0";
       
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
        this.languagepannalBox = false;
        this.offerpannalBox = false;
        this.customerreceiptpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;

        this.languagepannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.customerreceiptpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.languagepannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.customerreceiptpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.addresspannalBox = true;
        this.value = "14";
        
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
          let customerreceiptpannalid = document.getElementById(
            "customerreceiptpannalid"
          );
          let customerreceiptpannalidheight =
            customerreceiptpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            customerreceiptpannalidheight + "px";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            languagepannalidheight + "px";
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
    // pannal for 2
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
        this.languagepannalBox = false;
        this.addresspannalBox = false;
        this.customerreceiptpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;

        this.languagepannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.customerreceiptpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.languagepannalnumber = "0/7";
       
        this.customerreceiptpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.offerpannalBox = true;
        this.value = "28";
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
          let customerreceiptpannalid = document.getElementById(
            "customerreceiptpannalid"
          );
          let customerreceiptpannalidheight =
            customerreceiptpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            customerreceiptpannalidheight + "px";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            languagepannalidheight + "px";
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
    // pannalfor 3
    customerreceiptpannalchangevalue() {
      if (this.customerreceiptpannalBox === true) {
        this.customerreceiptpannalBox = false;
        this.value = "0";
        this.customerreceiptpannalnumber = "0/7";
        this.customerreceiptpannaliconcolor = "#d8d8d8";
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
          let customerreceiptpannalid = document.getElementById(
            "customerreceiptpannalid"
          );
          let customerreceiptpannalidheight =
            customerreceiptpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            customerreceiptpannalidheight + "px";
        }, 500);
      } else if (this.customerreceiptpannalBox === false) {
        this.languagepannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;

        this.languagepannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.languagepannalnumber = "0/7";
       
        this.offerpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.customerreceiptpannalBox = true;
        this.value = "42";
        this.customerreceiptpannalnumber = "3/7";
        this.customerreceiptpannaliconcolor = "#ffa300";
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
          let customerreceiptpannalid = document.getElementById(
            "customerreceiptpannalid"
          );
          let customerreceiptpannalidheight =
            customerreceiptpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            customerreceiptpannalidheight / 2 + "px";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            languagepannalidheight + "px";
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
    // pannal for 4
    languagepannalchangevalue() {
      if (this.languagepannalBox === true) {
        this.languagepannalBox = false;
        this.value = "0";
        this.languagepannalnumber = "0/7";
        this.languagepannaliconcolor = "#d8d8d8";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            languagepannalidheight + "px";
        }, 500);
      } else if (this.languagepannalBox === false) {
        this.customerreceiptpannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;

        this.customerreceiptpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.customerreceiptpannalnumber = "0/7";
        
        this.offerpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.languagepannalBox = true;
        this.value = "56";
        this.languagepannalnumber = "4/7";
        this.languagepannaliconcolor = "#ffa300";
        document
          .getElementById("thirdLine")
          .classList.remove("originallengthcolor");
        document.getElementById("thirdLine").classList.add("changelengthcolor");
        document
          .getElementById("fourthCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("fourthCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            languagepannalidheight / 2 + "px";
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
          let customerreceiptpannalid = document.getElementById(
            "customerreceiptpannalid"
          );
          let customerreceiptpannalidheight =
            customerreceiptpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            customerreceiptpannalidheight + "px";
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
    // pannal for 5
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
        this.customerreceiptpannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.languagepannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;

        this.customerreceiptpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.languagepannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.customerreceiptpannalnumber = "0/7";
       
        this.offerpannalnumber = "0/7";
        this.languagepannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.contracttextpannalBox = true;
        this.value = "70";
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
          let customerreceiptpannalid = document.getElementById(
            "customerreceiptpannalid"
          );
          let customerreceiptpannalidheight =
            customerreceiptpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            customerreceiptpannalidheight + "px";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            languagepannalidheight + "px";
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
    //pannalfor 6
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
        this.customerreceiptpannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.languagepannalBox = false;
        this.contracttextpannalBox = false;
        this.shipcostpannalBox = false;

        this.customerreceiptpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.languagepannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.customerreceiptpannalnumber = "0/7";
        
        this.offerpannalnumber = "0/7";
        this.languagepannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.contractcustomerpannalBox = true;
        this.value = "85";
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
            contractcustomerpannalidheight + "px";
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
          let customerreceiptpannalid = document.getElementById(
            "customerreceiptpannalid"
          );
          let customerreceiptpannalidheight =
            customerreceiptpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            customerreceiptpannalidheight + "px";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            languagepannalidheight + "px";
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
    //pannal for 7
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
        this.customerreceiptpannalBox = false;
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.languagepannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;

        this.customerreceiptpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.languagepannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.customerreceiptpannalnumber = "0/7";
       
        this.offerpannalnumber = "0/7";
        this.languagepannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";

        this.shipcostpannalBox = true;
        this.value = "100";
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
          let customerreceiptpannalid = document.getElementById(
            "customerreceiptpannalid"
          );
          let customerreceiptpannalidheight =
            customerreceiptpannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            customerreceiptpannalidheight + "px";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            languagepannalidheight + "px";
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
};
</script>
<style scoped lang="scss">
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
.customerreceiptpannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.customerreceiptpannalBoxActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #ffa300;
}
.languagepannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.languagepannalBoxActive {
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
  width: 6px;
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
.some-style >>> .v-input__slot::before {
  border-style: none !important;
}
.some-style >>> .v-input__slot::after {
  border-style: none !important;
}
</style>

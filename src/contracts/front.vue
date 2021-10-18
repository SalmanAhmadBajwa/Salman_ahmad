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
      <v-layout
      style="width:100vw;background-color: #d8d8d8;"
      class="mt-9"
      >
      <v-card
      elevation="0"
      style="min-height:120vh;display:flex;width:100vw;background-color: #d8d8d8;"
      >
        <div style="width: 45%; margin-right: 5px;position: relative;background-color: #f6f6f6;">
          <v-card 
          elevation="0"
          style="min-height:120vh;background-color: #f6f6f6;">
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
                        :value="true"
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
           style="min-height:120vh;background-color:#ffffff;">
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
                      <div style="display:flex;text-align:right" class="">
                         <v-btn
                      class="mt-3 mr-2"
                      @click="editrheading1 = !editrheading1"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                      v-if="editrheading1"
                      dense
                      outlined
                      color="#FFA300"
                      auto-grow
                      :rows="1"
                      class="pt-3"
                      style=""
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(Amazon.rsdmh1)
                      "
                      v-model="Amazon.rsdmh1"
                      @keyup.enter.exact="editrheading1 = false"
                    >
                    </v-textarea>
                      <p
                        v-if="Amazon.addressdocumentpannalinputfield1 && !editrheading1"
                        class="mt-4"
                        style="text-align:right; font-weight: 700 ; font-size: 24px"
                      >
                        <strong> {{Amazon.rsdmh1}}</strong>
                        <br />
                        <br />
                      </p>
                      </div>
                         
                    
                         

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
                          >§{{ Amazon.pos[0] }}<br />
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
                          >§{{ Amazon.pos[1] }}<br />
                          Vertragsschluss</strong
                        >
                      </p>

                      <p
                        v-if="Amazon.offerradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      >
                        <br />
                        {{Amazon.posP2[0]}}. {{ offerdocument1a }}
                      </p>

                      <p
                        v-if="Amazon.offerradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP2[1]}}. {{ offerdocument1b }}
                      </p>

                      <p
                        v-if="Amazon.offerradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP2[2]}}. {{ offerdocument1c }}
                      </p>

                      <p
                        v-if="Amazon.offerradio1 === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP2[0]}}. {{ offerdocument2 }}
                      </p>

                      <p
                        v-if="Amazon.offerradio2"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP2[3]}}. {{ offerdocument3 }}
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
                        {{Amazon.posP2[4]}}.{{ customerreceiptcontractdocument1 }}
                      </p>

                      <p
                        v-if="Amazon.customerreceiptcontractradio1 === false"
                        style="text-align: justify; margin-top: 0.5%"
                      ></p>

                      <p
                        v-if="Amazon.customerreceiptcontractradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP2[5]}}.{{ customerreceiptcontractdocument2 }}
                      </p>
                      <!-- languagepannal 4-->

                      <p
                        v-if="Amazon.languagepannalradio"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                       {{Amazon.posP2[6]}}. Als Vertragssprache stehen deutsch 
                        {{ Amazon.languagepannalinputfield }} zur Verfügung.
                      </p>

                      <p
                        v-if="Amazon.languagepannalradio === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP2[6]}}.{{ languagepannaldocument2 }}
                      </p>

                      <!-- contracttextpannal 5-->
                      <p
                        v-if="Amazon.contracttextpannalradio"
                        style="word-break: break-word;text-align: justify; margin-top: 0.4%"
                      ><br>
                        {{Amazon.posP2[7]}}.{{ contracttextpannaldocument1 }} Die Speicherung
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
                        {{Amazon.posP2[7]}}.{{ contracttextpannaldocument2 }}
                      </p>

                      <!-- contractcustomerpannal6 -->

                      <p
                        v-if="Amazon.contractcustomerpannalinputfield1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP2[8]}}.Der Kunde erhält den Vertragstext über
                        {{ Amazon.contractcustomerpannalinputfield1 }}.
                      </p>

                      <p
                        v-if="Amazon.contractcustomerpannalinputfield2"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP2[9]}}. Der Vertragstext ist dem Kunden auch im Anschluss an
                        den Vertragsschluss noch über
                        {{ Amazon.contractcustomerpannalinputfield2 }}
                        zugänglich.
                      </p>

                      <p
                        v-if="Amazon.contractcustomerpannalradio"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                         {{Amazon.posP2[10]}}. Im Rahmen des Vertragsschlusses über den
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
                        {{Amazon.posP2[11]}}. Im Rahmen der „1-Click“-Bestelloption kann der
                        Bestellvorgang über die Zurück-Funktion oder das
                        Schließen des Browsers abgebrochen werden.
                      </p>

                      <p
                        v-if="Amazon.contractcustomerpannalradio === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                       {{Amazon.posP2[11]}}. {{ Amazon.contractcustomerpannalinputfield3 }}
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
                          >§{{ Amazon.pos[2] }}<br />
                          Bezahlung</strong
                        >
                      </p>

                      <p
                        v-if="Amazon.contractcustomerpannalinputfield4"
                        style="word-break: break-word;text-align: justify; margin-top: 1%"
                      >
                        <br />
                        {{Amazon.posP3[0]}}. Als Zahlungsart steht/stehen dem Kunden
                        {{ Amazon.contractcustomerpannalinputfield4 }}
                        zur Verfügung.
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio1"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP3[1]}}. Die für die Waren angegebenen Preise enthalten die
                        jeweils gültige gesetzliche Mehrwertsteuer.
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio1 === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP3[1]}}. Aufgrund der Kleinunternehmereigenschaft des
                        Anbieters iSd § 19 UstG enthalten die angegebenen Preise
                        keine Mehrwertsteuer.
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio2"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP3[2]}}. Die Versandkosten betragen
                        {{ Amazon.shipcostpannalinputfield }} je Bestellung.
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio2 === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                       {{Amazon.posP3[2]}}. {{ shipcostpannaldocument2 }}
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio3"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      ><br>
                        {{Amazon.posP3[3]}}.Der Kunde hat im Falle eines Widerrufs die
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
                          >§{{ Amazon.pos[3] }}<br />
                          Eigentumsvorbehalt</strong
                        >
                      </p>

                      <p
                        v-if="Amazon.shipcostpannalradio4"
                        style="text-align: justify; margin-top: 0.5%"
                      >
                        <br />
                        1.Bis zur vollständigen Bezahlung verbleiben die
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
                      ><br><br><br>
                        <strong
                          >§{{ Amazon.pos[4] }}<br />
                          Gewährleistung
                        </strong>
                      </p>

                      <p v-if="Amazon.newpannal5radio">
                        <br />
                        1.Die Gewährleistung bestimmt sich nach den gesetzlichen
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
                          §{{ Amazon.pos[5] }}<br />
                          Europäische Streitschlichtungsplattform
                        </strong>
                      </p>

                      <p v-if="Amazon.newpannal6radio">
                        <br />1.Die EU-Kommission stellt eine
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
                          >§{{ Amazon.pos[6] }}<br />
                          Schlussbestimmungen</strong
                        >
                      </p>

                      <p v-if="Amazon.transferpannalradio1" style="text-align: justify; margin-top: 0.5%">
                        <br />{{Amazon.posP7[0]}}.Auf Verträge zwischen dem Anbieter und den
                        Kunden findet das Recht der Bundesrepublik Deutschland
                        unter Ausschluss des UN-Kaufrechts Anwendung. Die
                        gesetzlichen Vorschriften zur Beschränkung der
                        Rechtswahl und zur Anwendbarkeit zwingender Vorschriften
                        insbesondere des Staates, in dem der Kunde als Verbraucher
                        seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.
                      </p>

                      <p v-if="Amazon.transferpannalradio1" style="text-align: justify; margin-top: 0.5%">
                       <br>{{Amazon.posP7[1]}}. Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit
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
                        {{Amazon.posP7[2]}}.{{ transferpannaldocument5 }}
                        {{ Amazon.transferpannalinputfield }}<br />
                      </p>

                      <p
                        v-if="Amazon.transferpannalradio2 === false"
                        style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                      >
                        <br />
                       {{Amazon.posP7[2]}}.{{ transferpannaldocument6 }}
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
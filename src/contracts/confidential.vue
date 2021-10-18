<!-- @format -->

<template>
  <v-container >
    <v-progress-linear
      :value="value"
      style="width: 100vw; margin-top: 4%"
      color="#ffa300"
      :background-opacity="opacity"
    >
    </v-progress-linear>
    <div class="c1">
      <v-layout>
        <div style="width: 45%; margin-right: 5px; position: relative">
          <v-card style="background-color: #f6f6f6; height: 100%">
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
                  </div>
                  <span
                    ><strong>{{ addresspannalname }}</strong></span
                  >

                  <div
                    v-bind:class="[
                      addresspannalBox
                        ? 'addresspannalBoxActive'
                        : 'addresspannalBoxDeActive',
                    ]"
                  >
                    <p
                      style="
                        color: #ffffff;
                        font-size: 9px;
                        text-align: center;
                        font-weight: 600;
                        margin-top: 1px;
                      "
                    >
                      {{ addresspannalnumber }}
                    </p>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  
                

                 
                  <p>{{ addressnewheading1 }}</p>
                 <div class="row" style="margin-top: 5px">
                    <div class="col-5">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Vorname/Firmenname"
                        v-model="confidential.addressnewVorname1"
                      >
                      </v-text-field>
                    </div>
                    
                     <div class="col-7">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Nachname/Rechtsform"
                        v-model="confidential.addressnewNachname1"
                      >
                      </v-text-field>
                    </div>
                    </div>

                       <div class="row" style="margin-top: -12px">
                    <div class="col-12">
                      <v-text-field
                       
                        rounded
                        dense
                        clearable
                        outlined
                        label="Gesetzlicher Vertreter"
                        v-model="confidential.addressneVertreter"
                      >
                      </v-text-field>
                    </div>
                    </div>

                    <p>{{ addressnewheading2}}</p>
                    <div class="row" style="margin-top: -12px">
                    <div class="col-8">
                      <v-text-field
                 
                        rounded
                        dense
                        clearable
                        outlined
                        label="Strasse"
                        v-model="confidential.addressnewStrasse1"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-4">
                      <v-text-field
                     
                        rounded
                        dense
                        clearable
                        outlined
                        label="Hausnummer"
                        v-model="confidential.addressnewHausnummer1"
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <div class="row" style="margin-top: -12px">
                    <div class="col-3">
                      <v-text-field
                       
                        rounded
                        dense
                        clearable
                        outlined
                        label="PLZ"
                        v-model="confidential.addressnewPlz1"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-9">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Ort"
                        v-model="confidential.addressnewOrt1"
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <div class="row" style="margin-top: -12px">
                    <div class="col-12">
                      <v-text-field
                       
                        rounded
                        dense
                        clearable
                        outlined
                        label="Sonstige Anmerkungen"
                        v-model="confidential.addressnewSonstiges"
                      >
                      </v-text-field>
                    </div>
                    </div>
                  
                  
                  


                  <p>{{ addressnewheading4 }}</p>
                  <div style="margin-bottom: 5px">
                    <v-radio-group v-model="confidential.newradio1">
                      <v-radio
                        color="yellow"
                        v-for="item in offernewitems1"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div>
 
                 <div v-if="confidential.newradio1">
                    <p>
                      {{ addressnewheading3 }}
                    </p>
                    <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="confidential.contractcustomernewpannalinputfield1"
                    >
                    </v-text-field>
                  </div>


                  <p>{{ addressnewheading5 }}</p>
                  <div class="row" style="margin-top: 5px">
                    <div class="col-5">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Vorname/Firmenname"
                        v-model="confidential.addressnewVorname2"
                      >
                      </v-text-field>
                    </div>
                    
                     <div class="col-7">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Nachname/Rechtsform"
                        v-model="confidential.addressnewNachname2"
                      >
                      </v-text-field>
                    </div>
                    </div>

                      <div class="row" style="margin-top: -12px">
                    <div class="col-12">
                      <v-text-field
                       
                        rounded
                        dense
                        clearable
                        outlined
                        label="Gesetzlicher Vertreter"
                        v-model="confidential.addressneVertreter2"
                      >
                      </v-text-field>
                    </div>
                    </div>

                    <p>{{addressnewheading6}}</p>
                    <div class="row" style="margin-top: -12px">
                    <div class="col-8">
                      <v-text-field
                 
                        rounded
                        dense
                        clearable
                        outlined
                        label="Strasse"
                        v-model="confidential.addressnewStrasse2"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-4">
                      <v-text-field
                     
                        rounded
                        dense
                        clearable
                        outlined
                        label="Hausnummer"
                        v-model="confidential.addressnewHausnummer2"
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <div class="row" style="margin-top: -12px">
                    <div class="col-3">
                      <v-text-field
                       
                        rounded
                        dense
                        clearable
                        outlined
                        label="PLZ"
                        v-model="confidential.addressnewPlz2"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-9">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Ort"
                        v-model="confidential.addressnewOrt2"
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <p>{{ addressnewheading7 }}</p>
                  <div style="margin-bottom: 5px">
                    <v-radio-group v-model="confidential.newradio2">
                      <v-radio
                        color="yellow"
                        v-for="item in offernewitems8"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                   <div v-if="confidential.newradio2">
                    <p>
                      {{ addressnewheading8 }}
                    </p>
                    <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="confidential.contractcustomernewpannalinputfield2"
                    >
                    </v-text-field>
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
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="offerpannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                  </div>
                  <span
                    ><strong>{{ offerpannalname }}</strong></span
                  >
                  <div
                    v-bind:class="[
                      offerpannalBox
                        ? 'offerpannalBoxActive'
                        : 'offerpannalBoxDeActive',
                    ]"
                  >
                    <p
                      style="
                        color: #ffffff;
                        font-size: 9px;
                        text-align: center;
                        font-weight: 600;
                        margin-top: 1px;
                      "
                    >
                      {{ offerpannalnumber }}
                    </p>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                
              <div style="display:flex;">
                  <p>{{ auctionpannalheading1 }}</p>
                  <div v-if="help">
                    <v-menu offset-x min-width="180" rounded="lg">
                      <template v-slot:activator="{ on }">
                        <v-btn
                          v-on="on"
                          icon
                          class="mt-n2"
                        >
                          <v-icon
                            color="black"
                            style="transform: rotate(180deg)"
                            >mdi-alert-circle-outline</v-icon
                          >
                        </v-btn>
                      </template>
                    <v-card
                        elevation="0"
                        width="260"
                        class="expand"
                        rounded="lg"
                        height="180"
                        color="white"
                        outlined
                      >
                        <v-card-text>
                          <v-list>
                            <v-list-item>
                              <p class="mt-2" style="text-align: left">
                                Hier sollte der Zweck beschrieben werden, warum die vertraulichen Informationen an den Empfänger übergeben werden, damit im Fall einer streitigen Auseinandersetzung nachgewiesen werden kann, welche Informationen genau von dieser Vertraulichkeitsvereinbarung geschützt sind.
                              </p>
                            </v-list-item>
                          </v-list>
                        </v-card-text>
                      </v-card>
                    </v-menu>
                  </div>
                  </div>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="confidential.auctionpannalinputfield1"
                  >
                  </v-text-field>  
                 </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal 3 -->

              <v-expansion-panel
                id="conclusionpannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header
                  @click="conclusionpannalchangevalue()"
                >
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="conclusionpannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                  </div>
                  <span
                    ><strong>{{ conclusioncontractpannalname }}</strong></span
                  >
                  <div
                    v-bind:class="[
                      conclusionpannalBox
                        ? 'conclusionpannalBoxActive'
                        : 'conclusionpannalBoxDeActive',
                    ]"
                  >
                    <p
                      style="
                        color: #ffffff;
                        font-size: 9px;
                        text-align: center;
                        font-weight: 600;
                        margin-top: 1px;
                      "
                    >
                      {{ conclusionpannalnumber }}
                    </p>
                  </div>
                 


                  
                  
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  
                  <!-- pannal 3 conclusion left side -->
                 <p>{{conclusionnewheading6}}</p>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="confidential.vacationinputfield1"
                  >
                  </v-text-field> 

                


               
               
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal4 -->

              <v-expansion-panel
                id="auctionpannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header @click="auctionpannalchangevalue()">
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="auctionpannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                  </div>
                  <span
                    ><strong>{{ auctionpannalname }}</strong></span
                  >
                  <div
                    v-bind:class="[
                      auctionpannalBox
                        ? 'auctionpannalBoxActive'
                        : 'auctionpannalBoxDeActive',
                    ]"
                  >
                    <p
                      style="
                        color: #ffffff;
                        font-size: 9px;
                        text-align: center;
                        font-weight: 600;
                        margin-top: 1px;
                      "
                    >
                      {{ auctionpannalnumber }}
                    </p>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    
                    <!-- pannal 4 auction left side -->
              
               <p>{{auctionpannalheading2}}</p>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="confidential.secrecy1"
                  >
                  </v-text-field> 
                    
                    
                    
                    
                   
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
                  </div>
                  <span
                    ><strong>{{ contracttextpannalname }}</strong></span
                  >
                  <div
                    v-bind:class="[
                      contracttextpannalBox
                        ? 'contracttextpannalBoxActive'
                        : 'contracttextpannalBoxDeActive',
                    ]"
                  >
                    <p
                      style="
                        color: #ffffff;
                        font-size: 9px;
                        text-align: center;
                        font-weight: 600;
                        margin-top: 1px;
                      "
                    >
                      {{ contracttextpannalnumber }}
                    </p>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- pannal 5  contracttext left side -->

                  <p>Anmerkung: Sofern die vertraulichen Informationen auch personenbezogene Daten enthalten, sollte darauf geachtet werden, dass aufgrund der Vorgaben der DSGVO, insb. Art. 17, ggf. abweichende Regelungen zur Löschung angezeigt sind.
Im Rahmen der DSGVO ist regelmäßig die Erstellung eines Löschkonzepts erforderlich. Als Ansatz zu dessen Konzeption kann die Zugrundelegung der DIN 66398/66399 dienen, welche zwar noch unter dem alten Datenschutzrecht erstellt wurde, aber kaum explizit Bezug auf Normen des BDSG-alt nimmt. Daher können die dort erläuterten Grundsätze im Wesentlichen als erster Ansatz zur Erstellung eines Löschkonzepts herangezogen werden. Besteht beim Informationsgeber ein solches Löschkonzept, ist naturgemäß darauf zu achten, dass die hier im Rahmen des NDA an den Vertragspartner weitergereichten Löschpflichten mit diesem Löschkonzept kompatibel sind.
</p>
                 
                  
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
                  </div>
                  <span
                    ><strong>{{ contractcustomerpannalname }}</strong></span
                  >
                  <div
                    v-bind:class="[
                      contractcustomerpannalBox
                        ? 'contractcustomerpannalBoxActive'
                        : 'contractcustomerpannalBoxDeActive',
                    ]"
                  >
                    <p
                      style="
                        color: #ffffff;
                        font-size: 9px;
                        text-align: center;
                        font-weight: 600;
                        margin-top: 1px;
                      "
                    >
                      {{ contractcustomerpannalnumber }}
                    </p>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- pannal 5  contractcustomer left side -->

                  <p>{{changespannal1}}</p>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="confidential.changesinputfield1"
                  >
                  </v-text-field> 

               

                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal7 -

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
                  </div>
                  <span
                    ><strong>{{ shipcostpannalname }}</strong></span
                  >
                  <div
                    v-bind:class="[
                      shipcostpannalBox
                        ? 'shipcostpannalBoxActive'
                        : 'shipcostpannalBoxDeActive',
                    ]"
                  >
                    <p
                      style="
                        color: #ffffff;
                        font-size: 9px;
                        text-align: center;
                        font-weight: 600;
                        margin-top: 1px;
                      "
                    >
                      {{ shipcostpannalnumber }}
                    </p>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  
              
                  
                    <div style="margin-bottom: 5px">
                    <v-radio-group v-model="confidential.transferpannalradio1">
                      <v-radio
                        color="yellow"
                        v-for="item in transferpannalitems1"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                  <p>{{ transferpannalheading2 }}</p>
                  <div style="margin-bottom: 5px">
                    <v-radio-group v-model="confidential.transferpannalradio2">
                      <v-radio
                        color="yellow"
                        v-for="item in transferpannalitems2"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div>
                  <p v-if="confidential.transferpannalradio2">
                  Unternehmenseigene oder sonstige Verhaltenskodizies (Name, Zweck, ggf. Domain zum Text des Verhaltenskodexes)</p>
                  <v-text-field
                    v-if="confidential.transferpannalradio2"
                    rounded
                    dense
                    clearable
                    outlined
                    label="Verhaltenskodizies"
                    v-model="confidential.transferpannalinputfield"
                  >
                  </v-text-field>
                </v-expansion-panel-content>
              </v-expansion-panel>

                ---->
             
               
              
              
              
              
              
              
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

        <div style="width: 55%; height: 100vh; position: relative" id="printme">
          <v-card style="background-color: #ffffff; height: 100vh">
            <!-- for address pannal 1 -->
            <v-expansion-panels flat style="padding-left: 2%">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <v-list-item>
                    <v-list-item-content
                      style="
                        margin-right: 20mm;
                        padding-left: 20mm !important;
                        margin-top: 1%;
                      "
                    ><p
                        v-if="confidential.addressnewVorname1"
                        style="text-align: center ; font-weight: 700; font-size: 18.72px"
                      >
                      <strong>Vertraulichkeitsvereinbarung</strong>
                      <p  v-if="confidential.addressnewVorname1"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      ><br>
                       zwischen
                       <br><br>
                       <strong>{{ confidential.addressnewVorname1 }} {{ confidential.addressnewNachname1 }} 
                        </strong>
                      </p> 
                      
                      <p  v-if="confidential.addressnewStrasse1 || confidential.addressnewOrt1"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                       mit Sitz in 
                       <strong>
                         {{ confidential.addressnewStrasse1 }} {{ confidential.addressnewHausnummer1 }} </strong>
                      </p> 
                      <p  v-if="confidential.addressnewVorname1"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                    
                       <strong> {{ confidential.addressnewPlz1 }} {{ confidential.addressnewOrt1 }}</strong>
                      </p> 
                       <p  v-if="confidential.addressnewSonstiges"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                       
                       <strong>
                         {{ confidential.addressnewSonstiges }}</strong>
                      </p> 
                      <p v-if="confidential.contractcustomernewpannalinputfield1"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                    > eingetragen im Handelsregister unter HRB {{ confidential.contractcustomernewpannalinputfield1 }}</p>
                        <p  v-if="confidential.addressnewVorname1 || confidential.contractcustomernewpannalinputfield1"
                         style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >  (nachfolgend „Informationsgeber“)
                        </p>
                        <p  v-if="confidential.addressnewVorname2"
                         style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >  <br>und<br><br>
                      <strong> {{confidential.addressnewVorname2}} {{confidential.addressnewNachname2}} </strong>
                        </p>
                      <p v-if="confidential.addressnewStrasse2 || confidential.addressnewHausnummer2 "
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                      
                     
                       <strong> {{ confidential.addressnewStrasse2 }} {{ confidential.addressnewHausnummer2 }}</strong>
                      </p>
                      <p v-if="confidential.addressnewVorname2 || confidential.addressnewPlz2 || confidential.addressnewOrt2"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                        <strong>{{ confidential.addressnewPlz2 }} {{ confidential.addressnewOrt2 }}</strong><br></p>
                        
                          <p v-if="confidential.contractcustomernewpannalinputfield2"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                    > eingetragen im Handelsregister unter HRB {{ confidential.contractcustomernewpannalinputfield2}}</p>
                        
                        <p v-if="confidential.addressnewVorname2 || confidential.addressnewPlz2 || confidential.addressnewStrasse2 || confidential.addressnewHausnummer2 "
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                        (nachfolgend „Empfänger")
                      </p>
                      <p v-if="confidential.addressnewVorname2"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      ><br>
                       (nachfolgend beide Parteien auch bezeichnet als „Partei“ oder „Parteien“)
                      
                      
                      
                      
                      
                      
                                <!--pannal 2 right side-->
                      
                      <br><br>
                   
                     
                                      
                   

                                      
                     <p v-if="confidential.auctionpannalinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br>
                       <strong><br>Präamblel</strong>
                      </p>
                

                      

                       <p v-if="confidential.auctionpannalinputfield1"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Die Parteien beabsichtigen die gemeinsame Zusammenarbeit. Die Zusammenarbeit im Detail aufgeführt: {{confidential.auctionpannalinputfield1}} (nachfolgend „Zweck").
                      <br><br>Der Informationsgeber beabsichtigt, für den vorstehend beschriebenen Zweck dem Empfänger vertrauliche Informationen gemäß nachstehendem § 1 zur Verfügung zu stellen. Dem Empfänger ist bewusst, dass diese vertraulichen Informationen bisher weder insgesamt noch in ihren Einzelheiten bekannt oder ohne weiteres zugänglich waren, deshalb von wirtschaftlichem Wert sind, seitens des Informationsgebers durch angemessene Geheimhaltungsmaßnahmen geschützt sind und an denen ein berechtigtes Interesse an deren Geheimhaltung besteht.
                      <br><br>Sofern eine vertrauliche Information nach dieser Vertraulichkeitsvereinbarung (nachfolgend „Vereinbarung“) nicht den Anforderungen eines Geschäftsgeheimnisses im Sinne des Geschäftsgeheimnisgesetzes genügt, unterfällt diese Information dennoch den Vertraulichkeitsverpflichtungen nach dieser Vereinbarung.

                      <p v-if="confidential.auctionpannalinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong><br>Definitionen</strong>
                      </p>
                      <p v-if="confidential.auctionpannalinputfield1"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br><strong>Informationsgeber</strong>: Als Informationsgeber wird die natürliche oder juristische Person bezeichnet, welche die rechtmäßige Kontrolle über das Geschäftsgeheimnis hat.

<br><br><strong>Empfänger</strong>: Als Empfänger wird die natürliche oder juristischer Person bezeichnet, gegenüber welcher das Geschäftsgeheimnis offengelegt wird. Der Empfänger hat keinerlei Kontrolle über das Geschäftsgeheimnis und ist nicht berechtigt, dass Geschäftsgeheimnis entgegen der Vereinbarung zu nutzen oder offenzulegen. Durch die Offenlegung des Geschäftsgeheimnisses wird der Empfänger nicht zum Informationsgeber im Sinne der vorstehenden Definition.

<br><br><strong>Offenlegung</strong>: Bezeichnet das Eröffnen des Geschäftsgeheimnisses gegenüber einem Dritten. Offenlegung bedeutet nicht Öffentlichkeit.
</p>

                       <p v-if="confidential.auctionpannalinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§1<br>Vertrauliche Informationen</strong>
                      </p>

                       <p v-if="confidential.auctionpannalinputfield1"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>1.1 Als Informationsgeber wird die natürliche oder juristische Person bezeichnet, die Kontrolle über das Geschäftsgeheimnis hat. Als Empfänger wird jede natürliche oder juristische Person bezeichnet, gegenüber der das Geschäftsgeheimnis offengelegt wird. Der Empfänger hat keinerlei Kontrolle über das Geschäftsgeheimnis und ist nicht berechtigt, dass Geschäftsgeheimnis entgegen der Vereinbarung zu nutzen oder offenzulegen. Offenlegung bezeichnet das Eröffnen des Geschäftsgeheimnisses gegenüber einem Dritten. Offenlegung bedeutet nicht Öffentlichkeit.

<br><br>1.2 Vertrauliche Informationen im Sinne dieser Vereinbarung sind sämtliche Informationen (ob schriftlich, elektronisch, mündlich, digital verkörpert oder in anderer Form), die von dem Informationsgeber an den Empfänger oder einem mit Empfänger im Sinne der §§ 15 ff. AktG verbundenen Unternehmen zum vorgenannten Zweck offenbart werden. Als vertrauliche Informationen gelten insbesondere:

<br><br>1.2.1 Betriebs- und Geschäftsgeheimnisse sowie daraus gewonnene und ersichtliche Erkenntnisse und Ergebnisse und ausgetauschtes Knowhow; Produkte, Herstellungsprozesse, unveröffentlichte Präsentationen sowie Pitches und Informationen über Aufträge eines Endkunden; Erfindungen; geschäftliche Beziehungen, Geschäftsstrategien sowie Unternehmenskonzepte und Geschäftsmodelle; Businesspläne sowie Geschäfts- und Planungsdaten; Unternehmens- und Marketingstrategien, Berichte über Unternehmensentwicklungen, interne Berichte und statistisches Material; Informationen über neue Produkte oder Leistungen, die noch nicht öffentlich angeboten werden; Methoden und Prozesse; Interne Berichte und statistisches Material; Methoden, Prozesse und Handbücher sowie technische Informationen, insbesondere Erfindungen, Designs, Programme, Techniken, datenbasierte Systeme, Software (insbesondere Quellcodes, einschließlich einzelner Routinen), Formeln und Ideen; Geschäftskontakte, Kundennamen und Namen von Zulieferern sowie der gegenwärtigen oder zukünftigen Inhalte der mit Kunden und Zulieferern geschlossenen Vereinbarungen, Preisgestaltung und Kalkulationsgrundlagen; Finanzplanung inklusive Budgets, Konteninformationen sowie andere Berichte, die die Finanzen betreffen; Sonstige Programmcodes und Designs, künstlerische Konzepte und Ideen sowie alles was zur Erfüllung eines gemeinsamen Auftrages mit einem Endkunden dienlich ist sowie Personalangelegenheiten. Egal ob in Form von digital verkörperten Informationen (Daten) oder bezogen auf analoge und digitale personenbezogene Daten;

<br><br>1.2.2 Jegliche Unterlagen und Informationen des Informationsgebers, die Gegenstand technischer und organisatorischer Geheimhaltungsmaßnahmen sind und als vertraulich gekennzeichnet oder nach der Art der Information oder den Umständen der Übermittlung als vertraulich anzusehen sind;

<br><br>1.2.3 das Bestehen dieser Vereinbarung und ihr Inhalt.

<br><br>1.3 Keine vertrauliche Informationen sind solche Informationen,

<br><br>1.3.1 die der Öffentlichkeit vor der Mitteilung oder Übergabe durch den Informationsgeber bekannt oder allgemein zugänglich waren oder dies zu einem späteren Zeitpunkt ohne Verstoß gegen eine Geheimhaltungspflicht werden;

<br><br>1.3.2 die dem Empfänger bereits vor der Offenlegung durch den Informationsgeber und ohne Verstoß gegen eine Geheimhaltungspflicht nachweislich bekannt waren;

<br><br>1.3.3 die von dem Empfänger ohne Nutzung oder Bezugnahme auf vertrauliche Informationen von dem Informationsgeber selbst gewonnen wurden; oder

<br><br>1.3.4 die der Empfänger von einem berechtigten Dritten ohne Verstoß gegen eine Geheimhaltungspflicht übergeben oder zugänglich gemacht werden.

                      </p>

                       <p v-if="confidential.auctionpannalinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§2<br>Geheimhaltungspflichten</strong>
                      </p>

                      <p v-if="confidential.auctionpannalinputfield1"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Der Empfänger verpflichtet sich,

<br><br>2.1 die vertraulichen Informationen streng vertraulich zu behandeln und nur im Zusammenhang mit dem Zweck zu verwenden;

<br><br>2.2 die vertraulichen Informationen nur gegenüber solchen Vertretern offen zu legen, die auf die Kenntnis dieser Informationen für den Zweck angewiesen sind, vorausgesetzt, dass der Empfänger sicherstellt, dass ihre Vertreter diese Vereinbarung einhalten, als wären sie selbst durch diese Vereinbarung gebunden;

<br><br>2.3 die vertraulichen Informationen ebenfalls durch angemessene Geheimhaltungsmaßnahmen gegen den unbefugten Zugriff durch Dritte zu sichern und bei der Verarbeitung der vertraulichen Informationen die gesetzlichen und vertraglichen Vorschriften zum Datenschutz einzuhalten. Dies beinhaltet auch dem aktuellen Stand der Technik angepasste technische Sicherheitsmaßnahmen (Art. 32 DSGVO) und die Verpflichtung der Mitarbeiter auf die Vertraulichkeit und die Beachtung des Datenschutzes (Art. 28 Abs. 3 lit. b) DSGVO);

<br><br>2.4 sofern der Empfänger aufgrund geltender Rechtsvorschriften gerichtlicher oder behördlicher Anordnungen oder aufgrund einschlägiger börsenrechtlicher Regelungen verpflichtet ist, teilweise oder sämtliche vertraulichen Informationen offenzulegen, den Informationsgeber (soweit rechtlich möglich und praktisch umsetzbar) hierüber unverzüglich schriftlich zu informieren und alle zumutbaren Anstrengungen zu unternehmen, um den Umfang der Offenlegung auf ein Minimum zu beschränken und dem Informationsgeber erforderlichenfalls jede zumutbare Unterstützung zukommen zu lassen, die eine Schutzanordnung gegen die Offenlegung sämtlicher vertraulicher Informationen oder von Teilen hiervon anstrebt.

<br><br>2.5 Der Empfänger verpflichtet sich, den Informationsgeber unverzüglich informieren, wenn der Empfänger, dessen Organe, Mitarbeiter oder Berater Kenntnis davon erlangen, dass vertrauliche Informationen unter Verstoß gegen diese Vereinbarung weitergegeben wurden.

                      


                     
                      <!--pannal 3 right side-->

                       <p v-if="confidential.auctionpannalinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§3<br> Rückgabe bzw. Löschung der vertraulichen Informationen</strong>
                      </p>

                       <p v-if="confidential.auctionpannalinputfield1"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>3.1 Auf Aufforderung des Informationsgebers sowie ohne Aufforderung spätestens nach Erreichung des in der Präambel beschriebenen Zwecks ist der Empfänger verpflichtet, sämtliche vertraulichen Informationen einschließlich der Kopien hiervon innerhalb von zehn (10) Arbeitstagen nach Zugang der Aufforderung bzw. nach Beendigung des Projektes zurückzugeben oder zu vernichten (einschließlich elektronisch gespeicherter vertraulicher Informationen), sofern nicht mit dem Informationsgeber vereinbarte oder gesetzliche Aufbewahrungspflichten dem Entgegenstehen.

<br><br>3.2 Die Vernichtung elektronisch gespeicherter vertraulicher Informationen erfolgt durch die vollständige und unwiderrufliche Löschung der Dateien oder unwiederbringliche Zerstörung des Datenträgers. Vollständige und unwiderrufliche Löschung bedeutet bei elektronisch gespeicherten vertraulichen Informationen, dass die vertraulichen Informationen derart gelöscht werden, dass jeglicher Zugriff auf diese Informationen unmöglich wird, wobei spezielle Löschverfahren (z.B. mittels „Wiping“) zu verwenden sind, welche den anerkannten Standards genügen (beispielsweise Standards des Bundesamts für Informationssicherheit).

<br><br>3.3 Ausgenommen hiervon sind – neben vertraulichen Informationen, bzgl. derer eine Aufbewahrungspflicht im Sinne der Ziffer 3.1 besteht – vertrauliche Informationen, deren Vernichtung bzw. Rückgabe technisch nicht möglich ist, z.B. da sie aufgrund eines automatisierten elektronischen Backup-Systems zur Sicherung von elektronischen Daten in einer Sicherungsdatei gespeichert wurden; hierzu zählt auch das technisch notwendige Vorhalten von Stammdaten (z.B. Personal- oder Kundennummern), welches nötig ist, um eine Verknüpfung zu den archivierten Informationen herzustellen.

<br><br>3.4 Auf Verlangen des Informationsgebers hat der Empfänger schriftlich zu versichern, dass er sämtliche vertrauliche Informationen nach den Maßgaben der vorstehenden Ziffern und den Weisungen des Informationsgebers vollständig und unwiderruflich gelöscht hat.
</p>
                   

                      <!--pannal 4 right side-->

                       <p v-if="confidential.auctionpannalinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§4<br>Eigentumsrechte an den vertraulichen Informationen</strong>
                       </p>
                        <p v-if="confidential.auctionpannalinputfield1"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>4.1 Der Informationsgeber hat, unbeschadet der Rechte, die er nach dem GeschGehG hat, hinsichtlich der vertraulichen Informationen alle Eigentums-, Nutzungs- und Verwertungsrechte. Der Informationsgeber behält sich das ausschließliche Recht zur Schutzrechtsanmeldung vor. Der Empfänger erwirbt kein Eigentum oder – mit Ausnahme der Nutzung für den oben beschriebenen Zweck – sonstige Nutzungsrechte an den vertraulichen Informationen (insbesondere an Know-how, darauf angemeldeten oder erteilten Patenten, Urheberrechten oder sonstigen Schutzrechten) aufgrund dieser Vereinbarung oder sonst wegen konkludenten Verhaltens.

<br><br>4.2 Der Empfänger hat es zu unterlassen, die vertraulichen Informationen außerhalb des Zwecks in irgendeiner Weise selbst wirtschaftlich zu verwerten oder nachzuahmen (insbesondere im Wege des sogenannten. „Reverse Engineering“) oder durch Dritte verwerten oder nachahmen zu lassen und insbesondere auf die vertraulichen Informationen gewerbliche Schutzrechte – insbesondere Marken, Designs, Patente oder Gebrauchsmuster – anzumelden.

                      </p>
                       
                     <!--pannal 5 right side-->

                     <p v-if="confidential.auctionpannalinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§5<br>Vertragsstrafe</strong>
                       </p>
                        <p v-if="confidential.auctionpannalinputfield1"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>
Verletzt der Empfänger oder Mitarbeiter des Empfängers oder sonstige Personen, für die der Empfänger gemäß §§ 31, 278, 831 BGB einzustehen hat, die sich aus dieser Vereinbarung ergebenden Pflichten, so vereinbaren die Parteien die Zahlung einer verschuldensunabhängigen Vertragsstrafe durch den Empfänger an den Informationsgeber in angemessener Höhe, wobei der Informationsgeber die Höhe nach billigem Ermessen i.S.v. § 315 BGB bestimmen wird und die Angemessenheit der Vertragsstrafe im Streitfall von dem zuständigen Gericht überprüft werden kann. Die Geltendmachung weiteren Schadensersatzes bleibt vorbehalten.</p>

                      <p v-if="confidential.vacationinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§6<br>Laufzeit</strong>
                       </p>
                        <p v-if="confidential.vacationinputfield1"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>Diese Vereinbarung tritt nach Unterzeichnung in Kraft und endet {{confidential.vacationinputfield1}} Jahre nach Beendigung des Informationsaustausches zum vorgenannten Zweck. Die Pflicht zur Geheimhaltung bleibt von der Beendigung dieser Vereinbarung unberührt. Sie gilt auch dann, wenn kein weiterer Vertrag im Zusammenhang mit dem Zweck geschlossen wird.
                      
                       <p v-if="confidential.secrecy1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§7<br>Anwendbares Recht und Gerichtsstand</strong>
                       </p>
                        <p v-if="confidential.secrecy1"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>Die Bestimmungen dieser Vereinbarung unterliegen in ihrer Durchführung und Auslegung deutschem Recht unter Ausschluss des internationalen Privatrechts. 

Ausschließlicher Gerichtsstand für Streitigkeiten aus oder im Zusammenhang mit der Vereinbarung ist {{confidential.secrecy1}}, Deutschland.

Bei beiderseitigem Einverständnis können sich die Parteien auch auf die Durchführung eines Schlichtungsverfahrens einigen. 

                      
                      <p v-if="confidential.changesinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§8<br>Schlussbestimmungen</strong>
                       </p>
                        <p v-if="confidential.changesinputfield1"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>
                       8.1 Die vorliegende Vereinbarung stellt die gesamte zwischen den Parteien getroffene Vereinbarung dar und ersetzt alle früheren Vereinbarungen zum oben genannten Zweck. Mündliche Nebenabreden bestehen nicht. Änderungen und Ergänzungen dieser Vereinbarung sowie Kündigungen bedürfen der Schriftform, wobei die elektronische Schriftform nicht ausreicht. Dies gilt auch für eine Änderung bzw. Aufhebung dieser Klausel.
                      <br><br>8.2 Sollte in dieser Vereinbarung eine Bestimmung unwirksam oder undurchführbar sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen hierdurch nicht berührt. Die Parteien verpflichten sich in diesem Fall, eine wirksame Regelung zu vereinbaren, die der nichtigen oder fehlenden Vereinbarung wirtschaftlich in gesetzlich erlaubter Weise am nächsten kommt.

                      
                    
                      

                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      {{confidential.changesinputfield1}}
                      <br>
                    
                      
                      ____________________________________  <span style="padding-left:22px">_____________________________________</span>
                      <strong> <br> Ort, Datum      <span style="padding-left:225px">             Ort, Datum </span></strong>

                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                       ____________________________________  <span style="padding-left:22px">_____________________________________</span>
                      <strong> <br> Unterschrift Arbeitgeber      <span style="padding-left:140px">                 Unterschrift Arbeitnehmer</span></strong></p>




                     
                     
                    
                      
                     
                   
                      <!-- end of pannal 7new -->
                    </v-list-item-content>
                  </v-list-item>
                </v-expansion-panel-header>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </div>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
//import CountryFlag from "@dzangolab/vue-country-flag-icon";
import "@dzangolab/vue-country-flag-icon/dist/CountryFlag.css"; // import stylesheet
export default {
  name: "confidential",
  components: {
    //CountryFlag,
  },

  //Data:
  data: () => ({
    confidential: {
      addressUserModel: "",
      addressVorname: "",
      addressNachname: "",
      addressStrasse: "",
      addressHausnummer: "",
      addressPlz: "",
      addressOrt: "",

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
    },
    localitem: [
      { title: "2 Jahre", list: "Nein " },
      {
        title: "5 Jahre ",
        list: "Unternehmenseigene oder sonstige Verhaltenskodizies",
      },
      {
        title: "10 Jahre ",
        list: "(Name, Zweck, ggf. Domain zum Text des Verhaltenskodexes)",
      },
      { title: "Abweichende Speicherdauer " },
    ],
    addresspannalname: "Angaben zum Informationsgeber und Informationsnehmer",
    addresspannalnumber: "0/7",
    addresspannaliconcolor: "#d8d8d8",
    addresspannalBox: false,
    
    addressnewheading1: "Wer soll Vertragspartner (Informationsgeber) werden?",
    addressnewheading2: "Bitte geben Sie die Adresse des Informationsgebers an",
    addressnewheading3: "Bitte geben Sie die Handelsregister Nummer (HRB) ein",
    addressnewheading4: "Ist die Firma des Informationsgebers im Handelsregister eingetragen? ",
    addressnewheading5: "Wer soll Vertragspartner (Informationsnehmer) werden?",
    addressnewheading6: "Bitte geben Sie die Adresse des Informationsnehmers an",
    addressnewheading7: "Ist die Firma des Informationnehmers im Handelsregister eingetragen? ",
    addressnewheading8: "Bitte geben Sie die Handelsregister Nummer (HRB) ein",

    offerpannalname: "Inhalt der Vertraulichkeitsvereinbarung",
    offerpannalnumber: "0/7",
    offerpannaliconcolor: "#d8d8d8",
    offerpannalBox: false,
    
    
    offernewheading1: "Wann beginnt das Arbeitsverhältnis?",
    
    
    
    
    
    conclusioncontractpannalname: "Dauer der Vertraulichkeitsvereinbarung",
    conclusionpannalnumber: "0/6",
    conclusionpannaliconcolor: "#d8d8d8",
    conclusionpannalBox: false,


    conclusionnewheading1: "Wird das Arbeitsverhältnis auf unbestimmte Zeit geschlossen?",
    conclusionnewheading2: "Wie viele Monate soll die Probezeit andauern?",
    conclusionnewheading3: "Liegt ein Arbeitsverhältnis auf Probe vor?",
    conclusionnewheading4: "Für wie viele Monate soll der Arbeitsvertrag auf Probe geschlossen werden?",
    conclusionnewheading5: "Von welchem Starttag an bis zu welchem Endtag soll der Arbeitsvertrag geschlossen werden?",
    

    conclusionnewheading6: "Wieviele Jahre soll der Vertrag gelten?",
    conclusionnewheading7: "Wann soll der vertragliche Urlaubsanspruch verfallen?",

    
    //auctionpannaldocument3: "6. Als Vertragssprache stehen deutsch, ",
    
    
    auctionpannalname: "Anwendbares Recht und Gerichtsstand",
    auctionpannalnumber: "0/6",
    auctionpannaliconcolor: "#d8d8d8",
    auctionpannalBox: false,
    
    auctionpannalheading1: "Bitte geben Sie eine ausführliche Beschreibung ein, worüber Vertraulichkeit bewahrt werden soll",

    auctionpannalheading2: "In welcher Stadt hat die Firma des Informationsgebers Ihren Sitz bzw. wo befindet sich der Wohnsitz, wenn eine natürliche Person der Informationsgeber ist?",
    auctionpannalheading3: "Welche Geschäftsgeheimnisse sind vom Arbeitnehmer besonders zu beachten?",
     
     
    


    

    
    
    
    
    contracttextpannalname: " Rückgabe bzw. Löschung der vertraulichen Informationen",
    contracttextpannalnumber: "0/7",
    contracttextpannaliconcolor: "#d8d8d8",
    contracttextpannalBox: false,
    
    contracttextpannal1: "Wie lange beträgt die wöchentliche Arbeitszeit (in Stunden)?",
    
    additionalpannal1: "Möchten Sie weitere individuelle Vereinbarungen in den Arbeitsvertrag einfügen?",

    contractcustomerpannalname: "​Schlussbestimmungen",
    contractcustomerpannalnumber: "0/6",
    contractcustomerpannaliconcolor: "#d8d8d8",
    contractcustomerpannalBox: false,

    contractcustomerpannal1: "Erhält der Arbeitnehmer eine monatliche Vergütung?",
    contractcustomerpannal2: "Wie hoch ist die monatliche Vergütung (Brutto) in Euro?",
    contractcustomerpannal3: "Wie hoch ist der Stundenlohn des Arbeitnehmers in Euro?",

    changespannal1: "Geben Sie den Ort und das Datum für den Vertragsabschluss ein",

    


  
    
    
    shipcostpannalname: "Vertragsänderungen und Nebenabreden",
    shipcostpannalnumber: "0/6",
    shipcostpannaliconcolor: "#d8d8d8",
    shipcostpannalBox: false,

  

    
    // new pannals

    illnesspannalname: "Krankheit",
    illnesspannalnumber: "0/6",
    illnesspannaliconcolor: "#d8d8d8",
    illnesspannalBox: false,
    
    secrecypannalname: "Verschwiegenheitspflicht",
    secrecypannalnumber: "0/6",
    secrecypannaliconcolor: "#d8d8d8",
    secrecypannalBox: false,

  

    additionalpannalname: "Vertragsänderungen und Nebenabreden",
    additionalpannalnumber: "0/6",
    additionalpannaliconcolor: "#d8d8d8",
    additionalpannalBox: false,







    changespannalname: "Vertragsänderungen und Nebenabreden",
    changespannalnumber: "0/6",
    changespannaliconcolor: "#d8d8d8",
    changespannalBox: false,
    
    
    
    
    
    
    
    value: "",
    output: null,
    opacity: 0,

    offernewitems1: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    addressnewitems: [
      { id: 2, value: "Herr", },
      { id: 3, value: "Frau" },
      { id: 4, value: "Divers" },
    ],
    offernewitems2: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    offernewitems3: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    offernewitems4: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    offernewitems5: [
      { label: "am 31.12. des jeweiligen Kalenderjahres", value: true },
      { label: "mit Ablauf des Übertragungszeitraums am 31.3. des Folgejahres", value: false },
    ],
    offernewitems6: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    offernewitems7: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    offernewitems8: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],


    
    
    
    
    addressitems2: [
      "Natürliche Person",
      "Juristische Person",
    ],
    

    offeritems: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],

    conclusioncontractitems1: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    conclusioncontractitems2: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    conclusioncontractitems3: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],

    auctionpannalitems1: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    auctionpannalitems2: [
      {
        label: "Sprache wählen",
        value: true,
      },
      {
        label: "Keine weitere Sprache",
        value: false,
      },
    ],

    //  contracttextitems:[
    //    {value:"2 Jahre",id:1,},
    //    {value:"5 Jahre",id:2,},
    //    {value:"10 Jahre",id:3,},
    //    {value:"Abweichende Speicherdauer",id:4,},
    //  ],
     contracttextitems: [
      { id: 5, value: "2 Jahre" },
      { id: 6, value: "5 Jahre" },
      { id: 7, value: "10 Jahre" },
      { id: 8, value: "Abweichende Speicherdauer" },
    ],
    contracttextpannalitems: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],

    contractcustomerpannalitems1: [
      { label: "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers", value: true },
      { label: "Sonstiges", value: false },
    ],

    shipcostpannalitems1: [
      { label: "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",value: true,},
      { label: "Kleinunternehmer iSd § 19 UstG",value: false},
    ],
    shipcostpannalitems2: [
      {
        label: "​Ja",
        value: true,
      },
      { label: "Nein", value: false },
    ],

    shipcostpannalitems3: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    shipcostpannalitems4: [
      { label: "Ja", value: true },
      { label: "Nein", value: false },
    ],
    
    transferpannalitems1: [
      {
        label: "​Ja",
        value: true,
      },
      {
        label: "Nein",
        value: false,
      },
    ],
    transferpannalitems2: [
      {
        label: "​Ja",
        value: true,
      },
      {
        label: "Nein",
        value: false,
      },
    ],

    //  add new  pannal 5 items
    newpannal5items: [
      {
        label: "​Ja",
        value: true,
      },
      {
        label: "Nein",
        value: false,
      },
    ],
    //  add new  pannal 6 items
    newpannal6items: [
      {
        label: "​Ja",
        value: true,
      },
      {
        label: "Nein",
        value: false,
      },
    ],
    number1: "",

    pos: [0, 0, 0, 0, 0, 0, 0],
  }),
  //mounted
  mounted() {},
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
      this.pos[3] = 4;
      this.pos = this.arrangePos(this.pos);
    },
    pannel5Watcher: function () {
      this.pos[4] = 5;
      this.pos = this.arrangePos(this.pos);
    },
    pannel6Watcher: function () {
      this.pos[5] = 6;
      this.pos = this.arrangePos(this.pos);
    },
    pannel7Watcher: function () {
      this.pos[6] = 7;
      this.pos = this.arrangePos(this.pos);
    },
  },

  //methods
  methods: {
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
        this.addresspannalnumber = "0/7";
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
        this.sideactivitypannalnumber= "0/7";

        this.addresspannalBox = true;
        this.value = "14";
        this.addresspannalnumber = "1/6";
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
        this.sideactivitypannalBox = false;

        this.auctionpannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.conclusionpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";

        this.auctionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.conclusionpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.offerpannalBox = true;
        this.value = "24";
        this.offerpannalnumber = "2/6";
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

        this.auctionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.conclusionpannalBox = true;
        this.value = "36";
        this.conclusionpannalnumber = "3/6";
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

        this.conclusionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.auctionpannalBox = true;
        this.value = "48";
        this.auctionpannalnumber = "4/6";
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

        this.conclusionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.auctionpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.contracttextpannalBox = true;
        this.value = "60";
        this.contracttextpannalnumber = "5/6";
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

        this.conclusionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.auctionpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";

        this.contractcustomerpannalBox = true;
        this.value = "72";
        this.contractcustomerpannalnumber = "6/6";
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

        this.conclusionpannalnumber = "0/6";
        this.addresspannalnumber = "0/6";
        this.offerpannalnumber = "0/6";
        this.auctionpannalnumber = "0/6";
        this.contracttextpannalnumber = "0/6";
        this.contractcustomerpannalnumber = "0/6";

        this.shipcostpannalBox = true;
        this.value = "86";
        this.shipcostpannalnumber = "6/6";
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
    ...mapState(["help"]),
    pannel1Watcher: function () {
      return this.confidential.addressUserModel1, new Date();
    },
    pannel2Watcher: function () {
      return (
        this.confidential.offerradio,
        this.confidential.conclusioncontractradio1,
        this.confidential.conclusioncontractradio2,
        this.confidential.conclusioncontractradio3,
        this.confidential.auctionpannalradio1,
        this.confidential.auctionpannalradio2,
        this.confidential.contracttextpannalradio,
        this.confidential.contracttextpannalinputfield,
        this.confidential.contractcustomerpannalinputfield1,
        this.confidential.contractcustomerpannalinputfield2,
        this.confidential.contractcustomerpannalinputfield3,
        this.confidential.contractcustomerpannalradio1,
        new Date()
      );
    },
    pannel3Watcher: function () {
      return (
        this.confidential.contractcustomerpannalinputfield4,
        this.confidential.shipcostpannalradio1,
        this.confidential.shipcostpannalradio2,
        this.confidential.shipcostpannalradio3,
        new Date()
      );
    },
    pannel4Watcher: function () {
      return this.confidential.shipcostpannalradio4, new Date();
    },
    pannel5Watcher: function () {
      return this.confidential.newpannal5radio, new Date();
    },
    pannel6Watcher: function () {
      return this.confidential.newpannal6radio, new Date();
    },
    pannel7Watcher: function () {
      return this.confidential.transferpannalradio2, new Date();
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

.sideactivitypannalBoxDeActive {
  position: absolute;
  right: 15px;
  top: 17px;
  border-radius: 6px;
  width: 5vw;
  height: 2vh;
  background-color: #606060;
}
.sideactivitypannalBoxActive {
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
  height: 90px;
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

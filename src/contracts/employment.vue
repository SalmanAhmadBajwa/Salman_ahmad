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
                        label="Vorname"
                        v-model="employment.addressnewVorname1"
                      >
                      </v-text-field>
                    </div>
                    
                     <div class="col-7">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Nachname"
                        v-model="employment.addressnewNachname1"
                      >
                      </v-text-field>
                    </div>
                    </div>
                    <div class="row" style="margin-top: -12px">
                    <div class="col-8">
                      <v-text-field
                 
                        rounded
                        dense
                        clearable
                        outlined
                        label="Strasse"
                        v-model="employment.addressnewStrasse1"
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
                        v-model="employment.addressnewHausnummer1"
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
                        v-model="employment.addressnewPlz1"
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
                        v-model="employment.addressnewOrt1"
                      >
                      </v-text-field>
                    </div>
                  </div>
                  
                  
                  


                  <p>{{ addressnewheading2 }}</p>
                  <div style="margin-bottom: 5px">
                    <v-radio-group v-model="employment.newradio1">
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
 
                 <div v-if="employment.newradio1">
                    <p>
                      {{ addressnewheading3 }}
                    </p>
                    <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="employment.contractcustomernewpannalinputfield1"
                    >
                    </v-text-field>
                  </div>

                  <p>{{ addressnewheading4 }}</p>
                  <v-select
                    v-model="employment.addressUserModel1"
                    :items="addressnewitems"
                    return-object
                    item-text="value"
                    item-value="id"
                    dense
                    outlined
                    rounded
                  ></v-select>

                  <p>{{ addressnewheading5 }}</p>
                  <div class="row" style="margin-top: 5px">
                    <div class="col-5">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Vorname"
                        v-model="employment.addressnewVorname2"
                      >
                      </v-text-field>
                    </div>
                    
                     <div class="col-7">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Nachname"
                        v-model="employment.addressnewNachname2"
                      >
                      </v-text-field>
                    </div>
                    </div>
                    <div class="row" style="margin-top: -12px">
                    <div class="col-8">
                      <v-text-field
                 
                        rounded
                        dense
                        clearable
                        outlined
                        label="Strasse"
                        v-model="employment.addressnewStrasse2"
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
                        v-model="employment.addressnewHausnummer2"
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
                        v-model="employment.addressnewPlz2"
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
                        v-model="employment.addressnewOrt2"
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
                
                <p>{{ offernewheading1 }}</p>
                <v-text-field
                 rounded
                 dense
                 clearable
                 outlined
                 v-model="employment.offerpannalinputfield1"
                >
                </v-text-field>
                <p>{{conclusionnewheading1}}</p>
                 <div style="margin-bottom: 5px">
                    <v-radio-group v-model="employment.conclusion1">
                      <v-radio
                        color="yellow"
                        v-for="item in offernewitems2"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div> 
                  <div v-if="employment.conclusion1">
                    <p>
                      {{conclusionnewheading2}}
                    </p>
                    <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="employment.contractconclusionpannalinputfield2"
                    >
                    </v-text-field>
                  </div>
                  <div v-if="employment.conclusion1 === false">
                    <p>{{conclusionnewheading3}}</p>
                     <v-radio-group v-model="employment.conclusion2">
                      <v-radio
                        color="yellow"
                        v-for="item in offernewitems3"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div> 
                  <div v-if="employment.conclusion2">
                    <p>
                      {{conclusionnewheading4}}
                    </p>
                    <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="employment.contractconclusionpannalinputfield3"
                    >
                    </v-text-field>
                  </div>
                  
                  <div v-if="employment.conclusion2">
                  <p>{{conclusionnewheading5}}<p>
                   <div class="row" style="margin-top: 5px">
                    <div class="col-6">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Tag / Monat / Jahr"
                        v-model="employment.contractconclusioninputfield4"
                      >
                      </v-text-field>
                    </div>
                    
                    
                     <div class="col-6">
                      <v-text-field
                      
                        rounded
                        dense
                        clearable
                        outlined
                        label="Tag / Monat / Jahr"
                        v-model="employment.contractconclusioninputfield5"
                      >
                      </v-text-field>
                    </div>
                    </div>
                    </div>

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
                                Bei der Angabe der Tätigkeiten empfiehlt sich keine zu starke Einengung, 
                                da bei einer Änderung der Arbeitnehmer ansonsten zustimmen muss oder eine 
                                sozial gerechtfertigte Änderungskündigung auszusprechen ist.
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
                    v-model="employment.auctionpannalinputfield1"
                  >
                  </v-text-field>  
                  <p>{{contracttextpannal1}}</p>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="employment.contracttextpannalinputfield1"
                  >
                  </v-text-field>  

                   <div style="display:flex;">
                  <p>{{ contractcustomerpannal1 }}</p>
                  <div v-if="helsp">
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
                                 <strong>Beachten Sie:</strong> Eine Abgeltungsklausel für Überstunden darf nicht zu einer Unterschreitung des Mindestlohns führen. 
                               <br><br><strong>Anmerkung:</strong> Bei Gewährung einer Sonderzuwendung unter Freiwilligkeitsvorbehalt empfiehlt es sich, diese konkret zu bezeichnen, da Freiwilligkeitsvorbehalte, die sich auf alle Leistungen in Zukunft unabhängig von Art und Entstehungsgrund beziehen, unzulässig sind. Wichtig ist neben dem Freiwilligkeitsvorbehalt der ausdrückliche Ausschluss der Anspruchsentstehung. Es empfiehlt sich ferner, die jeweilige Zahlung mit einem schriftlichen Hinweis zu verbinden, dass die Leistung freiwillig ist und ein Rechtsanspruch auf weitere Zahlungen ausgeschlossen ist.
                              <br><br>„Leistet der Arbeitgeber über das in Abs. 1 genannte Monatsentgelt hinaus Gratifikationen, Boni oder sonstige zusätzliche Sonderzahlungen, die nicht zuvor individuell vereinbart worden sind, handelt es sich um freiwillige Leistungen des Arbeitgebers aufgrund einer jeweils gesondert getroffenen Entscheidung. Auch die mehrmalige und regelmäßige Zahlung begründet keinen Rechtsanspruch weder für die Vergangenheit noch für die Zukunft. Die Sätze 1 und 2 gelten nicht, wenn die Leistungen auf einer individuellen Vertragsabrede mit dem Arbeitnehmer beruhen.“
                              </p>
                            </v-list-item>
                          </v-list>
                        </v-card-text>
                      </v-card>
                    </v-menu>
                  </div>
                  </div>
                               
                  <div style="margin-bottom: 5px">
                    <v-radio-group v-model="employment.conclusion3">
                      <v-radio
                        color="yellow"
                        v-for="item in offernewitems4"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div> 
                  <div v-if="employment.conclusion3">
                    <p>
                      {{contractcustomerpannal2}}
                    </p>
                    <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="employment.contractconclusionpannalinputfield4"
                    >
                    </v-text-field>
                  </div>
                  <div v-if="employment.conclusion3 === false">
                    <p>
                      {{contractcustomerpannal3}}
                    </p>
                    <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="employment.contractconclusionpannalinputfield5"
                    >
                    </v-text-field>
                  </div>

                  
                 
           

                    


                  



               
                
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
                    v-model=" employment.vacationinputfield1"
                  >
                  </v-text-field> 

                  <p>{{conclusionnewheading7}}</p>
                  <div style="margin-bottom: 5px">
                    <v-radio-group v-model="employment.vacation2">
                      <v-radio
                        color="yellow"
                        v-for="item in offernewitems5"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div> 


               
               
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
                   <div style="display:flex;">
                   <p>{{ auctionpannalheading2 }}</p>
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
                                 Das am 26.4.2019 in Kraft getretene Gesetz zum Schutz von Geschäftsgeheimnissen (GeschGehG) verlangt zudem aktive, objektiv feststellbare Schutzmaßnahmen seitens der Arbeitgeber; es kann daher empfehlenswert sein, die wesentlichen, von solchen Geheimhaltungsmaßnahmen betroffenen Informationen (abstrakt) zu beschreiben.
                              </p>
                            </v-list-item>
                          </v-list>
                        </v-card-text>
                      </v-card>
                    </v-menu>
                  </div>
                  </div>





                  <div style="margin-bottom: 5px">
                    <v-radio-group v-model="employment.secrecy1">
                      <v-radio
                        color="yellow"
                        v-for="item in offernewitems6"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div> 

                  <div v-if="employment.secrecy1">
                    <p>
                      {{auctionpannalheading3}}
                    </p>
                    <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="employment.secrecy2"
                    >
                    </v-text-field>
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

                  <p>{{additionalpannal1}}</p>
                  <div style="margin-bottom: 5px">
                    <v-radio-group v-model="employment.additional1">
                      <v-radio
                        color="yellow"
                        v-for="item in offernewitems7"
                        :rules="rules"
                        :key="item"
                        :label="item.label"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                  </div> 

                  <div v-if="employment.additional1">
                    
                    <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    v-model="employment.additionalinputfield1"
                    >
                    </v-text-field>
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
                    v-model="employment.changesinputfield1"
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
                    <v-radio-group v-model="employment.transferpannalradio1">
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
                    <v-radio-group v-model="employment.transferpannalradio2">
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
                  <p v-if="employment.transferpannalradio2">
                  Unternehmenseigene oder sonstige Verhaltenskodizies (Name, Zweck, ggf. Domain zum Text des Verhaltenskodexes)</p>
                  <v-text-field
                    v-if="employment.transferpannalradio2"
                    rounded
                    dense
                    clearable
                    outlined
                    label="Verhaltenskodizies"
                    v-model="employment.transferpannalinputfield"
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
                        v-if="employment.addressnewVorname1"
                        style="text-align: center ; font-weight: 700"
                      >
                      <strong>Arbeitsvertrag für Arbeiter und Angestellte ohne Tarifbindung</strong>
                      <p  v-if="employment.addressnewVorname1"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      ><br><br>
                       Zwischen
                       <br><br>
                       <strong>{{ employment.addressnewVorname1 }} {{ employment.addressnewNachname1 }} 
                        </strong>
                      </p> 
                      <p  v-if="employment.addressnewVorname1"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                       
                       <strong>
                         {{ employment.addressnewStrasse1 }} {{ employment.addressnewHausnummer1 }} </strong>
                      </p> 
                      <p  v-if="employment.addressnewVorname1"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                    
                       <strong> {{ employment.addressnewPlz1 }} {{ employment.addressnewOrt1 }}</strong>
                      </p> 
                      <p v-if="employment.contractcustomernewpannalinputfield1"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                    ><br>vertreten durch <strong>{{ employment.contractcustomernewpannalinputfield1 }}</strong></p>
                        <p  v-if="employment.addressnewVorname1 || employment.contractcustomernewpannalinputfield1"
                         style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      > <br> - nachfolgend „Arbeitgeber“ genannt -
                        </p>
                        <p  v-if="employment.addressnewVorname2"
                         style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >  <br><br>und
                        </p>
                      <p v-if="employment.addressUserModel1"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      ><br><br>
                      
                       <strong>{{employment.addressUserModel1.value !== 'Divers'? employment.addressUserModel1.value : ''}}
                         {{ employment.addressnewVorname2 }} {{ employment.addressnewNachname2 }}</strong>
                      </p>
                      <p
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                       <strong> {{ employment.addressnewStrasse2 }} {{ employment.addressnewHausnummer2 }}</strong>
                      </p>
                      <p v-if="employment.addressnewVorname2"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                        <strong>{{ employment.addressnewPlz2 }} {{ employment.addressnewOrt2 }}</strong><br> 
                        <br>- nachfolgend "Arbeitnehmer" gennant -
                      </p>
                      <p v-if="employment.addressnewVorname2"
                        style="
                          font-size: 15px;
                          text-align: center;
                          margin-top: 0.5%;
                        "
                      >
                      <br> wird folgender Arbeitsvertrag geschlossen:
                      
                      
                      
                      
                      
                      
                                <!--pannal 2 right side-->
                      
                      <br><br><br><br>
                      <p
                        v-if="employment.offerpannalinputfield1"
                        
                        style="text-align: center; font-weight: 700"
                      >
                        <strong>§{{ pos[0] }}<br> Beginn des Arbeitsverhältnisses </strong></p>
                      <p
                        v-if="employment.offerpannalinputfield1"
                        style="
                          font-size: 15px;
                          text-align: justify;
                          margin-top: 0.5%;
                        "
                      ><br>
                       Das Arbeitsverhältnis beginnt am {{employment.offerpannalinputfield1}}.
                     </p>
                     
                                      
                   

                                      
                     <p v-if="employment.conclusion1 || employment.conclusion1 === false"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§{{ pos[1]}}<br>Probezeit</strong>
                      </p>
                      <p v-if="employment.conclusion1"
                      ><br>Das Arbeitsverhältnis wird auf unbestimmte Zeit geschlossen. Die ersten 
                       {{employment.contractconclusionpannalinputfield2}} Monate gelten als Probezeit. Während der Probezeit 
                       kann das Arbeitsverhältnis beiderseits mit einer Frist von zwei Wochen 
                       gekündigt werden.

                      <p v-if="employment.conclusion2"
                      ><br>Dieser Vertrag wird auf die Dauer von {{employment.contractconclusionpannalinputfield3}} Monaten vom 
                       {{employment.contractconclusioninputfield4}} bis zum {{employment.contractconclusioninputfield5}} zur Probe abgeschlossen. 
                       Nach Ablauf dieser Befristung endet das Arbeitsverhältnis ohne dass es einer Kündigung bedarf, 
                       wenn nicht bis zu diesem Zeitpunkt eine Fortsetzung des Arbeitsverhältnisses vereinbart wird. 
                       Innerhalb der Probezeit kann das Arbeitsverhältnis mit einer Frist von zwei Wochen gekündigt werden, 
                       unbeschadet des Rechts zur fristlosen Kündigung (befristetes Probearbeitsverhältnis).
                     
                      <p v-if="employment.conclusion2 === false && employment.conclusion1 === false"
                      ><br>Bitte überprüfen Sie Ihren vorherigen Angaben. Bei einem Arbeitsvertrag für Arbeiter und Angestellte 
                      ohne Tarifbindung muss entweder ein unbefristeter Arbeitsvertrag oder ein Arbeitsvertrag auf Probe vorliegen.

                      <p v-if="employment.auctionpannalinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§{{ pos[2]}}<br>Tätigkeit</strong>
                      </p>

                       <p v-if="employment.auctionpannalinputfield1"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Der Arbeitnehmer wird als {{employment.auctionpannalinputfield1}} eingestellt.
                       Der Arbeitnehmer verpflichtet sich, auch andere Arbeiten auszuführen – auch an einem anderen Ort -, die seinen Vorkenntnissen und Fähigkeiten entsprechen. Dies gilt, soweit dies bei Abwägung der Interessen des Arbeitgebers und des Arbeitnehmers zumutbar ist.

                       <p v-if="employment.contracttextpannalinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§{{ pos[3]}}<br>Arbeitszeit</strong>
                      </p>

                       <p v-if="employment.contracttextpannalinputfield1"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Die regelmäßige wöchentliche Arbeitszeit beträgt {{employment.contracttextpannalinputfield1}} Stunden. Beginn und Ende der täglichen 
                           Arbeitszeit richten sich nach der betrieblichen Einteilung. Der Arbeitnehmer ist bei betrieblicher Notwendigkeit und 
                           unter Berücksichtigung seiner berechtigten Interessen auf Anordnung des Arbeitgebers zur Ableistung von Überstunden 
                           sowie im Rahmen der gesetzlichen Vorschriften zu Mehrarbeit verpflichtet.
                      </p>

                       <p v-if="employment.contractconclusionpannalinputfield4 || employment.contractconclusionpannalinputfield5"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§{{ pos[4]}}<br>Arbeitsvergütung</strong>
                      </p>

                      <p v-if="employment.contractconclusionpannalinputfield4"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Der Arbeitnehmer erhält eine monatliche Bruttovergütung von {{employment.contractconclusionpannalinputfield4}} Euro.
                          Überstunden von bis zu 10% der regelmäßigen wöchentlichen Arbeitszeit sind mit der Vergütung abgegolten; im Übrigen werden sie gesondert vergütet. <br><br>Beachten Sie: Eine Abgeltungsklausel für Überstunden darf nicht zu einer Unterschreitung des Mindestlohns führen. 

<br><br>Anmerkung: Bei Gewährung einer Sonderzuwendung unter Freiwilligkeitsvorbehalt empfiehlt es sich, diese konkret zu bezeichnen, da Freiwilligkeitsvorbehalte, die sich auf alle Leistungen in Zukunft unabhängig von Art und Entstehungsgrund beziehen, unzulässig sind. Wichtig ist neben dem Freiwilligkeitsvorbehalt der ausdrückliche Ausschluss der Anspruchsentstehung. Es empfiehlt sich ferner, die jeweilige Zahlung mit einem schriftlichen Hinweis zu verbinden, dass die Leistung freiwillig ist und ein Rechtsanspruch auf weitere Zahlungen ausgeschlossen ist.
<br><br>„Leistet der Arbeitgeber über das in Abs. 1 genannte Monatsentgelt hinaus Gratifikationen, Boni oder sonstige zusätzliche Sonderzahlungen, die nicht zuvor individuell vereinbart worden sind, handelt es sich um freiwillige Leistungen des Arbeitgebers aufgrund einer jeweils gesondert getroffenen Entscheidung. Auch die mehrmalige und regelmäßige Zahlung begründet keinen Rechtsanspruch weder für die Vergangenheit noch für die Zukunft. Die Sätze 1 und 2 gelten nicht, wenn die Leistungen auf einer individuellen Vertragsabrede mit dem Arbeitnehmer beruhen.“ 

                      <p v-if="employment.contractconclusionpannalinputfield5"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Der Arbeitnehmer erhält einen Stundenlohn von {{employment.contractconclusionpannalinputfield5}} Euro. Überstunden von bis zu 10% der regelmäßigen wöchentlichen Arbeitszeit sind mit der Vergütung abgegolten; im Übrigen werden sie gesondert vergütet.
                      <br><br>Beachten Sie: Eine Abgeltungsklausel für Überstunden darf nicht zu einer Unterschreitung des Mindestlohns führen. 

<br><br>Anmerkung: Bei Gewährung einer Sonderzuwendung unter Freiwilligkeitsvorbehalt empfiehlt es sich, diese konkret zu bezeichnen, da Freiwilligkeitsvorbehalte, die sich auf alle Leistungen in Zukunft unabhängig von Art und Entstehungsgrund beziehen, unzulässig sind. Wichtig ist neben dem Freiwilligkeitsvorbehalt der ausdrückliche Ausschluss der Anspruchsentstehung. Es empfiehlt sich ferner, die jeweilige Zahlung mit einem schriftlichen Hinweis zu verbinden, dass die Leistung freiwillig ist und ein Rechtsanspruch auf weitere Zahlungen ausgeschlossen ist.
<br><br>„Leistet der Arbeitgeber über das in Abs. 1 genannte Monatsentgelt hinaus Gratifikationen, Boni oder sonstige zusätzliche Sonderzahlungen, die nicht zuvor individuell vereinbart worden sind, handelt es sich um freiwillige Leistungen des Arbeitgebers aufgrund einer jeweils gesondert getroffenen Entscheidung. Auch die mehrmalige und regelmäßige Zahlung begründet keinen Rechtsanspruch weder für die Vergangenheit noch für die Zukunft. Die Sätze 1 und 2 gelten nicht, wenn die Leistungen auf einer individuellen Vertragsabrede mit dem Arbeitnehmer beruhen.“ 


                     
                      <!--pannal 3 right side-->

                       <p v-if="employment.vacationinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§{{ pos[5]}}<br>Urlaub</strong>
                      </p>

                       <p v-if="employment.vacationinputfield1"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Der Arbeitnehmer hat Anspruch auf einen gesetzlichen Mindesturlaub von derzeit 20 Arbeitstagen im Kalenderjahr – ausgehend von einer Fünf-Tage-Woche. Der Arbeitgeber gewährt zusätzlich einen vertraglichen Urlaub von weiteren {{employment.vacationinputfield1}}
                       Arbeitstagen. Bei der Gewährung von Urlaub wird zuerst der gesetzliche Urlaub eingebracht.

                       <p v-if="employment.vacation2 "
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Der Zusatzurlaub mindert sich für jeden vollen Monat, in dem der Arbeitnehmer keinen Anspruch auf Entgelt bzw. Entgeltfortzahlung hat oder bei Ruhen des Arbeitsverhältnisses um ein Zwölftel. Für den vertraglichen Urlaub gilt abweichend von dem gesetzlichen Mindesturlaub, dass der Urlaubsanspruch am 31.12. des jeweiligen Kalenderjahres auch dann verfällt, wenn er wegen Arbeitsunfähigkeit des Arbeitnehmers nicht genommen werden kann. Der gesetzliche Urlaub verfällt in diesem Fall erst 15 Monate nach Ende des Urlaubsjahres.
Bei Ausscheiden in der zweiten Jahreshälfte wird der Urlaubsanspruch gezwölftelt, wobei die Kürzung allerdings nur insoweit erfolgt, als dadurch nicht der gesetzlich vorgeschriebene Mindesturlaub unterschritten wird. 
<br><br>Bei Beendigung des Arbeitsverhältnisses sind verbleibende Urlaubsansprüche innerhalb der Kündigungsfrist abzubauen, soweit dies möglich ist. Der vertragliche Zusatzurlaub erlischt mit Beendigung des Arbeitsverhältnisses.  
<br><br>Die rechtliche Behandlung des Urlaubs richtet sich im Übrigen nach den gesetzlichen Bestimmungen.


                      <p v-if="employment.vacation2 === false"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Der Zusatzurlaub mindert sich für jeden vollen Monat, in dem der Arbeitnehmer keinen Anspruch auf Entgelt bzw. Entgeltfortzahlung hat oder bei Ruhen des Arbeitsverhältnisses um ein Zwölftel. Für den vertraglichen Urlaub gilt abweichend von dem gesetzlichen Mindesturlaub, dass der Urlaubsanspruch mit Ablauf des Übertragungszeitraums am 31.3. des Folgejahres auch dann verfällt, wenn er wegen Arbeitsunfähigkeit des Arbeitnehmers nicht genommen werden kann. Der gesetzliche Urlaub verfällt in diesem Fall erst 15 Monate nach Ende des Urlaubsjahres.
Bei Ausscheiden in der zweiten Jahreshälfte wird der Urlaubsanspruch gezwölftelt, wobei die Kürzung allerdings nur insoweit erfolgt, als dadurch nicht der gesetzlich vorgeschriebene Mindesturlaub unterschritten wird. 
<br><br>Bei Beendigung des Arbeitsverhältnisses sind verbleibende Urlaubsansprüche innerhalb der Kündigungsfrist abzubauen, soweit dies möglich ist. Der vertragliche Zusatzurlaub erlischt mit Beendigung des Arbeitsverhältnisses.  
<br><br>Die rechtliche Behandlung des Urlaubs richtet sich im Übrigen nach den gesetzlichen Bestimmungen.

                      <p v-if="employment.vacationinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§{{ pos[6]}}<br>Krankheit</strong>
                      </p>

                      <p v-if="employment.vacationinputfield1"
                       style="text-align: justify; margin-top: 0.5%"
                      ><br>Die Entgeltfortzahlung im Krankheitsfall richtet sich nach den gesetzlichen Bestimmungen.
<br><br>Die Arbeitsverhinderung ist dem Arbeitgeber unverzüglich mitzuteilen. Dauert die Arbeitsunfähigkeit länger als drei Kalendertage, hat der Arbeitnehmer eine ärztliche Bescheinigung über das Bestehen sowie deren voraussichtliche Dauer spätestens an dem auf den dritten Kalendertag folgenden Arbeitstag vorzulegen. Diese Nachweispflicht gilt auch nach Ablauf der sechs Wochen. Der Arbeitgeber ist berechtigt, die Vorlage der Arbeitsunfähigkeitsbescheinigung früher zu verlangen.

                       <p v-if="employment.secrecy1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§8<br>Verschwiegenheitsplficht</strong>
                      </p>

                     <p v-if="employment.secrecy1"
                     style="text-align: justify; margin-top: 0.5%"
                     ><br>Der Arbeitnehmer verpflichtet sich, während der Dauer des Arbeitsverhältnisses und auch nach dem Ausscheiden, 
                     über alle Geschäftsgeheimnisse sowie betriebliche Angelegenheiten vertraulicher Natur, die als solche von der Geschäftsleitung 
                     schriftlich oder mündlich bezeichnet werden bzw. offensichtlich als solche zu erkennen sind, Stillschweigen zu bewahren und ohne 
                     ausdrückliche Genehmigung der Geschäftsleitung keinen dritten Personen zugänglich zu machen. Der Arbeitnehmer hat die Anweisungen 
                     und Maßnahmen des Arbeitgebers zur Geheimhaltung zu beachten. Im Zweifelsfall wird der Arbeitnehmer eine Weisung des Arbeitgebers 
                     zur Vertraulichkeit bestimmter Tatsachen einholen.
                     <br><br>
                     Als Geschäftsgeheimnisse geheim zu halten sind insbesondere {{employment.secrecy2}}.
                     <br><br>
                     Für jeden Fall der Zuwiderhandlung gegen diese Verpflichtung verpflichtet er sich, eine Vertragsstrafe in Höhe einer Bruttomonatsvergütung 
                     zu zahlen. Die Geltendmachung eines weiteren Schadens bleibt dem Arbeitgeber vorbehalten.
                     Verstößt der Arbeitnehmer gegen seine Verschwiegenheitspflicht, kann dies zur Kündigung führen.
                     </p>
                     <p v-if="employment.secrecy1 === false"
                     style="text-align: justify; margin-top: 0.5%"
                     ><br>Der Arbeitnehmer verpflichtet sich, während der Dauer des Arbeitsverhältnisses und auch nach dem Ausscheiden, über alle 
                     Geschäftsgeheimnisse sowie betriebliche Angelegenheiten vertraulicher Natur, die als solche von der Geschäftsleitung schriftlich 
                     oder mündlich bezeichnet werden bzw. offensichtlich als solche zu erkennen sind, Stillschweigen zu bewahren und ohne ausdrückliche 
                     Genehmigung der Geschäftsleitung keinen dritten Personen zugänglich zu machen. Der Arbeitnehmer hat die Anweisungen und Maßnahmen 
                     des Arbeitgebers zur Geheimhaltung zu beachten. Im Zweifelsfall wird der Arbeitnehmer eine Weisung des Arbeitgebers zur Vertraulichkeit 
                     bestimmter Tatsachen einholen. Für jeden Fall der Zuwiderhandlung gegen diese Verpflichtung verpflichtet er sich, eine Vertragsstrafe in 
                     Höhe einer Bruttomonatsvergütung zu zahlen. Die Geltendmachung eines weiteren Schadens bleibt dem Arbeitgeber vorbehalten.
                     Verstößt der Arbeitnehmer gegen seine Verschwiegenheitspflicht, kann dies zur Kündigung führen.
                     </p>
                      <p v-if="employment.secrecy1 || employment.secrecy1 === false"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§9<br>Nebentätigkeiten</strong>
                       </p>
                       
                       <p v-if="employment.secrecy1 || employment.secrecy1 === false"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>
                       Der Arbeitnehmer verpflichtet sich, jede entgeltliche oder das Arbeitsverhältnis beeinträchtigende Nebenbeschäftigung vor ihrer Aufnahme dem Arbeitgeber gegenüber in Textform anzuzeigen. Sie ist nur mit Zustimmung des Arbeitgebers zulässig.
                       Der Arbeitgeber erteilt die Einwilligung, wenn die Wahrnehmung der dienstlichen Aufgaben durch die Nebenbeschäftigung nicht behindert und sonstige berechtigte Interessen des Arbeitgebers nicht beeinträchtigt werden. 
                       <br><br>Der Arbeitgeber kann seine Einwilligung jederzeit widerrufen, wenn sein betriebliches Interesse dies auch unter Berücksichtigung der Arbeitnehmerinteressen erfordert.  
                       </p>
                      
                      <p v-if="employment.secrecy1 || employment.secrecy1 === false"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§10<br>Vertragsstrafe</strong>
                       </p>
                        <p v-if="employment.secrecy1 || employment.secrecy1 === false"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>
                      Der Arbeitnehmer verpflichtet sich für den Fall, dass er das Arbeitsverhältnis nicht oder verspätet antritt, die Arbeit unberechtigt vorübergehend verweigert, das Arbeitsverhältnis vertragswidrig beendet oder den Arbeitgeber durch vertragswidriges Verhalten zur außerordentlichen Kündigung veranlasst, dem Arbeitgeber eine Vertragsstrafe zu zahlen. 
                      Als Vertragsstrafe wird ein sich aus der Bruttomonatsvergütung nach § 5 zu errechnendes Bruttotagegeld für jeden Tag der Zuwiderhandlung vereinbart, insgesamt jedoch nicht mehr als das in der gesetzlichen Mindestkündigungsfrist ansonsten zu zahlende Arbeitsentgelt. 
                      Die Vertragsstrafe ist der Höhe nach auf maximal eine Bruttomonatsvergütung gemäß § 5 beschränkt. Das Recht des Arbeitgebers, weitergehende Schadensersatzansprüche geltend zu machen, bleibt unberührt.
                      </p>
                       <p v-if="employment.secrecy1 || employment.secrecy1 === false"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§11<br>Kündigung</strong>
                       </p>
                        <p v-if="employment.secrecy1 || employment.secrecy1 === false"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>
                      Nach Ablauf der Probezeit finden die gesetzlichen Kündigungsfristen Anwendung. Jede gesetzliche Verlängerung der Kündigungsfrist zugunsten des Arbeitnehmers gilt in gleicher Weise auch zugunsten des Arbeitgebers. Die Kündigung bedarf der Schriftform. Vor Antritt des Arbeitsverhältnisses ist die Kündigung ausgeschlossen.
                      <br><br>Der Arbeitgeber ist berechtigt, den Arbeitnehmer bis zur Beendigung des Arbeitsverhältnisses freizustellen. Die Freistellung erfolgt unter Anrechnung der dem Arbeitnehmer eventuell noch zustehenden Urlaubsansprüche sowie eventueller Guthaben auf dem Arbeitszeitkonto. In der Zeit der Freistellung hat sich der Arbeitnehmer einen durch Verwendung seiner Arbeitskraft erzielten Verdienst auf den Vergütungsanspruch gegenüber dem Arbeitgeber anrechnen zu lassen.
                      Das Arbeitsverhältnis endet ohne Kündigung spätestens mit Ablauf des Monats, in dem der Arbeitnehmer das für ihn gesetzlich festgelegte Renteneintrittsalter vollendet hat.
                      </p>
                      <p v-if="employment.secrecy1 || employment.secrecy1 === false"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§12<br>Verfall-/Ausschlussfristen</strong>
                       </p>
                        <p v-if="employment.secrecy1 || employment.secrecy1 === false"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>
                      Alle Ansprüche aus dem Arbeitsverhältnis verfallen, wenn sie nicht innerhalb einer Ausschlussfrist von drei Monaten nach ihrer Fälligkeit gegenüber dem Vertragspartner in Textform geltend gemacht und im Falle der Ablehnung durch den Vertragspartner innerhalb von weiteren drei Monaten eingeklagt werden. Hiervon unberührt bleiben Ansprüche, die auf Handlungen wegen Vorsatz oder grober Fahrlässigkeit beruhen. 
                      <br><br>Die Ausschlussfrist gilt nicht für den Anspruch eines Arbeitnehmers auf den gesetzlichen Mindestlohn. Über den Mindestlohn hinausgehende Vergütungsansprüche des Arbeitnehmers unterliegen hingegen der vereinbarten Ausschlussfrist.
                      </p>

                      <!--pannal 5 right side-->

                       <p v-if="employment.additional1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§13<br>Zusätzliche Vereinbarungen</strong>
                       </p>
                        <p v-if="employment.additional1"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>
                      {{employment.additionalinputfield1}}
                      </p>
                       
                     <!--pannal 6 right side-->

                      <p v-if="employment.changesinputfield1"
                        style="text-align: center; margin-top: 0.5%"
                      ><br><br><br>
                       <strong>§14<br>Vertragsänderungen und Nebenabreden</strong>
                       </p>
                        <p v-if="employment.changesinputfield1"
                        style="text-align: justify; margin-top: 0.5%"
                      ><br>
                       Stillschweigende, mündliche oder schriftliche Nebenabreden wurden nicht getroffen. Änderungen und Ergänzungen dieses Vertrages bedürfen der Textform. Dies gilt auch für eine Aufhebung dieser Klausel. Dem Arbeitnehmer entstehen daher keine Ansprüche aus betrieblicher Übung. Vertragsänderungen durch Individualabreden sind formlos wirksam.
                      Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden, wird hierdurch die Wirksamkeit des Vertrages im Übrigen nicht berührt.
                      <br><br>Der Arbeitnehmer verpflichtet sich, dem Arbeitgeber unverzüglich über Veränderungen der persönlichen Verhältnisse wie Familienstand, Kinderzahl und Adresse Mitteilung zu machen.
                      
                    
                      

                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      p{{employment.changesinputfield1}}
                      <br>
                    
                      
                      ____________________________________  <span style="padding-left:22px"></span>
                      <strong> <br> Ort, Datum      <span style="padding-left:162px">                </span></strong>

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
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
//import CountryFlag from "@dzangolab/vue-country-flag-icon";
var electron = require("electron");
var fs = require("fs");
import store from "../store";
import "@dzangolab/vue-country-flag-icon/dist/CountryFlag.css"; // import stylesheet
export default {
  name: "employment",
  components: {
    //CountryFlag,
  },
  beforeDestroy() {
    if(store.state.isAdmin == true){
      this.org_value2 = Object.assign(this.org_value2,this.employment);
      if(JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)){
          this.change_value()
        this.add_percentage_admin()
        this.writefileandscreenshot_admin()
        

      }
    }
    else{
      this.org_value2 = Object.assign(this.org_value2,this.employmnet);
      if(JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)){
        this.writefileandscreenshot_user()
      }
    }
  },
  
// mounted
  mounted() {
    
    
     if(store.state.isAdmin == true){
      this.org_value1 = Object.assign(this.org_value1,this.employment);
      this.mounted_admin()
    }
    else{
        this.org_value1 = Object.assign(this.org_value1,this.employment);
        this.mounted_user()
    }
  },

  //Data:
  data: () => ({
    current_admin_name: "",
        current_admin_versions: [],
        org_value2:{},
        org_value1:{},
        
    employment: {
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
    addresspannalname: "Angaben zum Arbeitgeber und Arbeitnehmer",
    addresspannalnumber: "0/7",
    addresspannaliconcolor: "#d8d8d8",
    addresspannalBox: false,
    
    addressnewheading1: "Bitte geben sie den Namen und Adresses des Arbeitgebers an",
    addressnewheading2: "Liegt eine Vertretung des Arbeitgebers vor (z.B. durch eine natürliche Person?",
    addressnewheading3: "Bitte geben Sie Namen und gegebenenfalls die Adresse des Vertreters des Arbeitgebers ein",
    addressnewheading4: "Ist der Arbeitnehmer ein Mann, eine Frau oder Divers?",
    addressnewheading5: "Bitte geben Sie den Namen und Addresse des Arbeitnehmers ein",
   
    
    offerpannalname: "Arbeitsverhältnis",
    offerpannalnumber: "0/7",
    offerpannaliconcolor: "#d8d8d8",
    offerpannalBox: false,
    
    
    offernewheading1: "Wann beginnt das Arbeitsverhältnis?",
    
    
    
    
    
    conclusioncontractpannalname: "Urlaub und Krankheit",
    conclusionpannalnumber: "0/6",
    conclusionpannaliconcolor: "#d8d8d8",
    conclusionpannalBox: false,


    conclusionnewheading1: "Wird das Arbeitsverhältnis auf unbestimmte Zeit geschlossen?",
    conclusionnewheading2: "Wie viele Monate soll die Probezeit andauern?",
    conclusionnewheading3: "Liegt ein Arbeitsverhältnis auf Probe vor?",
    conclusionnewheading4: "Für wie viele Monate soll der Arbeitsvertrag auf Probe geschlossen werden?",
    conclusionnewheading5: "Von welchem Starttag an bis zu welchem Endtag soll der Arbeitsvertrag geschlossen werden?",
    

    conclusionnewheading6: "Wie viele Tage Urlaub werden dem Arbeitnehmer – zusätzlich zu dem gesetzlichen Mindesturlaub von 20 Arbeitstagen im Kalenderjahr – gewährt?",
    conclusionnewheading7: "Wann soll der vertragliche Urlaubsanspruch verfallen?",

    
    //auctionpannaldocument3: "6. Als Vertragssprache stehen deutsch, ",
    
    
    auctionpannalname: "Verschwiegensheitsplficht",
    auctionpannalnumber: "0/6",
    auctionpannaliconcolor: "#d8d8d8",
    auctionpannalBox: false,
    
    auctionpannalheading1: "Für was wird der Arbeitnehmer eingestellt bzw. welche Tätigkeit(en) soll der Arbeitnehmer ausführen?",

    auctionpannalheading2: "Möchten Sie Geschäftsgeheimnisse, die seitens des Arbeitgebers besonders als schützenswert zu beachten sind, aufführen?",
    auctionpannalheading3: "Welche Geschäftsgeheimnisse sind vom Arbeitnehmer besonders zu beachten?",
     
     
    


    

    
    
    
    
    contracttextpannalname: "Zusätzliche Vereinbarungen",
    contracttextpannalnumber: "0/7",
    contracttextpannaliconcolor: "#d8d8d8",
    contracttextpannalBox: false,
    
    contracttextpannal1: "Wie lange beträgt die wöchentliche Arbeitszeit (in Stunden)?",
    
    additionalpannal1: "Möchten Sie weitere individuelle Vereinbarungen in den Arbeitsvertrag einfügen?",

    contractcustomerpannalname: "​Vertragsänderungen und Nebenabreden",
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
        change_value(){
      var a1 = localStorage.getItem("current_contract_title");
      store.commit("changeisedited",[a1,store.state.current_admin_name])
      store.commit("changeiseditedrecentcontracts",[a1,store.state.current_admin_name])
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
    },
    updatecontractpercentage_admin(){
      var sum_array = [this.addresspannalprogressValue,
      this.offerpannalprogressValue,
      this.conclusionpannalprogressValue,
      this.auctionpannalprogressValue,
      this.contracttextpannalprogressValue,
      this.contractcustomerpannalprogressValue,
      this.shipcostpannalprogressValue]
      var total_sum = (7 + 10 + 4 + 1 + 1 + 1 + 2)
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
        this.employment= JSON.parse(
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
    
    let b = JSON.stringify(this.employment);
    console.log("GO");
    if (!(a1+"-"+a2 in val))
    {
      this.create_copy_of_contract_when_selected_specific_condition_admin()
    }
    //console.log(this.Amazon);
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
    localStorage.removeItem("contract_org_name");
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
      return this.employment.addressUserModel1, new Date();
    },
    pannel2Watcher: function () {
      return (
        this.employment.offerradio,
        this.employment.conclusioncontractradio1,
        this.employment.conclusioncontractradio2,
        this.employment.conclusioncontractradio3,
        this.employment.auctionpannalradio1,
        this.employment.auctionpannalradio2,
        this.employment.contracttextpannalradio,
        this.employment.contracttextpannalinputfield,
        this.employment.contractcustomerpannalinputfield1,
        this.employment.contractcustomerpannalinputfield2,
        this.employment.contractcustomerpannalinputfield3,
        this.employment.contractcustomerpannalradio1,
        new Date()
      );
    },
    pannel3Watcher: function () {
      return (
        this.employment.contractcustomerpannalinputfield4,
        this.employment.shipcostpannalradio1,
        this.employment.shipcostpannalradio2,
        this.employment.shipcostpannalradio3,
        new Date()
      );
    },
    pannel4Watcher: function () {
      return this.employment.shipcostpannalradio4, new Date();
    },
    pannel5Watcher: function () {
      return this.employment.newpannal5radio, new Date();
    },
    pannel6Watcher: function () {
      return this.employment.newpannal6radio, new Date();
    },
    pannel7Watcher: function () {
      return this.employment.transferpannalradio2, new Date();
    },
    contracttextpannalprogress: function(){
            return (
                this.employment.additional1,
                this.employment.additionalinputfield1,
                
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

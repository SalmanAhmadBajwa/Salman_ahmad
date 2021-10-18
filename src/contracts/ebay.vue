<template>
  <v-container>
    <v-progress-linear
      :value="value"
      fixed
      absolute
      style="width: 100vw; margin-top: 3.4em; z-index: 10"
      color="#ffa300"
      :background-opacity="opacity"
    >
    </v-progress-linear>
    <v-layout style="width: 100vw; background-color: #d8d8d8" class="mt-9">
      <v-card
        elevation="0"
        style="min-height:120vh; width: 100vw; background-color: #d8d8d8"
      >
        <div style="display:flex">
          <div
            style="
              width: 45%;
              margin-right: 5px;
              background-color: #f6f6f6;
              position: relative;
            "
          >
            <v-card
              elevation="0"
              style="min-height:120vh; background-color: #f6f6f6"
            >
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

                    <div style="padding-left:2%;">
                      <v-icon
                      :color="addresspannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                     <v-btn class="" @click="editheading1 = !editheading1"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                    </div>
                    <div>
                      <v-textarea
                        v-if="editheading1"
                        dense
                        outlined
                        color="#FFA300"
                        auto-grow
                        :rows="1"
                        class="pt-3"
                        style="margin-left: -35%"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.addresspannalname)
                        "
                        v-model="ebay.addresspannalname"
                        @keyup.enter.exact="editheading1 = false"
                      >
                      </v-textarea>
                      <span v-else
                        ><strong>{{
                          ebay.addresspannalname | truncateEnd(36, "...")
                        }}</strong></span
                      >
                    </div>
                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="addresspannalprogressValue === 0"
                    >
                      <v-chip
                        class=""
                        color="#606060"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ addresspannalprogressValue }} / 7
                        </p>
                      </v-chip>
                    </div>

                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="addresspannalprogressValue !== 0"
                    >
                      <v-chip
                        class=""
                        color="#ffa300"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ addresspannalprogressValue }} / 7
                        </p>
                      </v-chip>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div style="display: flex" class="">
                      <v-btn
                        class="mt-n2"
                        @click="editmode1 = !editmode1"
                        icon
                        v-if="edit"
                      >
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
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.addressheading1)
                        "
                        v-model="ebay.addressheading1"
                        @keyup.enter.exact="editmode1 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.addressheading1 }}
                      </p>
                    </div>
                    <v-text-field
                      color="#FFA300"
                      rounded
                      dense
                      clearable
                      outlined
                      v-model="ebay.addressdocumentpannalinputfield1"
                    >
                    </v-text-field>
                    <div style="display: flex" class="">
                      <v-btn
                        class="mt-n2"
                        @click="editmode2 = !editmode2"
                        icon
                        v-if="edit"
                      >
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
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.addressheading2)
                        "
                        v-model="ebay.addressheading2"
                        @keyup.enter.exact="editmode2 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.addressheading2 }}
                      </p>
                    </div>
                    <v-select
                      :menu-props="{ bottom: true, offsetY: true }"
                      color="#FFA300"
                      v-model="ebay.addressUserModel1"
                      :items="addressitems2"
                      return-object
                      item-text="value"
                      item-value="id"
                      dense
                      outlined
                      rounded
                    ></v-select>
                    <div style="display: flex" class="">
                      <v-btn
                        class="mt-n2"
                        @click="editmode3a = !editmode3a"
                        icon
                        v-if="
                          edit && ebay.addressUserModel1 === 'Natürliche Person'
                        "
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode3a"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.addressheading)
                        "
                        v-model="ebay.addressheading"
                        @keyup.enter.exact="editmode3a = false"
                      >
                      </v-textarea>
                      <p
                        style="word-break: break-word"
                        v-if="
                          ebay.addressUserModel1 === 'Natürliche Person' &&
                          !editmode3a
                        "
                      >
                        {{ ebay.addressheading }}
                      </p>
                    </div>

                    <div style="display: flex" class="">
                      <v-btn
                        class="mt-n2"
                        @click="editmode3b = !editmode3b"
                        icon
                        v-if="
                          edit &&
                          ebay.addressUserModel1 === 'Juristische Person'
                        "
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode3b"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.addressheading)
                        "
                        v-model="ebay.addressheading"
                        @keyup.enter.exact="editmode3b = false"
                      >
                      </v-textarea>
                      <p
                        style="word-break: break-word"
                        v-if="
                          ebay.addressUserModel1 === 'Juristische Person' &&
                          !editmode3b
                        "
                      >
                        {{ ebay.addressheading }}
                      </p>
                    </div>
                    <v-select
                      v-if="ebay.addressUserModel1 === 'Natürliche Person'"
                      v-model="ebay.addressUserModel2"
                      color="#FFA300"
                      :menu-props="{ bottom: true, offsetY: true }"
                      :items="addressitems"
                      return-object
                      item-text="value"
                      item-value="id"
                      dense
                      outlined
                      rounded
                    ></v-select>
                    <div class="row" style="margin-top: 20px">
                      <div class="col-5">
                        <v-text-field
                          v-if="ebay.addressUserModel1 === 'Natürliche Person'"
                          rounded
                          dense
                          clearable
                          outlined
                          color="#FFA300"
                          label="Vorname"
                          v-model="ebay.addressVorname"
                        >
                        </v-text-field>
                      </div>
                      <div class="col-7">
                        <v-text-field
                          v-if="ebay.addressUserModel1 === 'Natürliche Person'"
                          rounded
                          dense
                          clearable
                          color="#FFA300"
                          outlined
                          label="Nachname"
                          v-model="ebay.addressNachname"
                        >
                        </v-text-field>
                      </div>
                      <div class="col-8">
                        <v-text-field
                          v-if="ebay.addressUserModel1 === 'Juristische Person'"
                          rounded
                          dense
                          clearable
                          color="#FFA300"
                          outlined
                          label="Firmenname"
                          v-model="ebay.addressFirmenname"
                        >
                        </v-text-field>
                      </div>
                      <div class="col-4">
                        <v-text-field
                          v-if="ebay.addressUserModel1 === 'Juristische Person'"
                          rounded
                          dense
                          clearable
                          color="#FFA300"
                          outlined
                          label="Rechtsform"
                          v-model="ebay.addressRechtsform"
                        >
                        </v-text-field>
                      </div>
                    </div>
                    <div class="row" style="margin-top: -12px">
                      <div class="col-8">
                        <v-text-field
                          v-if="
                            ebay.addressUserModel1 === 'Natürliche Person' ||
                            ebay.addressUserModel1 === 'Juristische Person'
                          "
                          rounded
                          dense
                          clearable
                          color="#FFA300"
                          outlined
                          label="Strasse"
                          v-model="ebay.addressStrasse"
                        >
                        </v-text-field>
                      </div>
                      <div class="col-4">
                        <v-text-field
                          v-if="
                            ebay.addressUserModel1 === 'Natürliche Person' ||
                            ebay.addressUserModel1 === 'Juristische Person'
                          "
                          rounded
                          dense
                          clearable
                          color="#FFA300"
                          outlined
                          label="Hausnummer"
                          v-model="ebay.addressHausnummer"
                        >
                        </v-text-field>
                      </div>
                    </div>
                    <div class="row" style="margin-top: -12px">
                      <div class="col-3">
                        <v-text-field
                          v-if="
                            ebay.addressUserModel1 === 'Natürliche Person' ||
                            ebay.addressUserModel1 === 'Juristische Person'
                          "
                          color="#FFA300"
                          input
                          type="number"
                          onkeydown="return event.keyCode !== 69"
                          rounded
                          dense
                          clearable
                          outlined
                          label="PLZ"
                          v-model="ebay.addressPlz"
                        >
                        </v-text-field>
                      </div>
                      <div class="col-9">
                        <v-text-field
                          v-if="
                            ebay.addressUserModel1 === 'Natürliche Person' ||
                            ebay.addressUserModel1 === 'Juristische Person'
                          "
                          rounded
                          dense
                          clearable
                          color="#FFA300"
                          outlined
                          label="Ort"
                          v-model="ebay.addressOrt"
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
                      <v-btn class="" @click="editheading2 = !editheading2"  icon v-if="edit">
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn> 
                    </div>
                    <div>
                      <v-textarea
                        v-if="editheading2"
                        dense
                        outlined
                        color="#FFA300"
                        auto-grow
                        :rows="1"
                        class="pt-3"
                        style="margin-left: -35%"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.offerpannalname)
                        "
                        v-model="ebay.offerpannalname"
                        @keyup.enter.exact="editheading2 = false"
                      >
                      </v-textarea>
                      <span v-else
                        ><strong>{{
                          ebay.offerpannalname | truncateEnd(36, "...")
                        }}</strong></span
                      >
                    </div>
                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="offerpannalprogressValue === 0"
                    >
                      <v-chip
                        class=""
                        color="#606060"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ offerpannalprogressValue }} /10
                        </p>
                      </v-chip>
                    </div>

                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="offerpannalprogressValue !== 0"
                    >
                      <v-chip
                        class=""
                        color="#ffa300"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ offerpannalprogressValue }} /10
                        </p>
                      </v-chip>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode4 = !editmode4"
                        icon
                        v-if="edit"
                      >
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
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.offerpannalheading)
                        "
                        v-model="ebay.offerpannalheading"
                        @keyup.enter.exact="editmode4 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.offerpannalheading }}
                      </p>
                      <div style="margin-bottom: 0px" v-if="help">
                        <v-menu offset-x min-width="260" rounded="lg">
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
                            width="260"
                            class="expand"
                            height="220"
                            color="white"
                            rounded="lg"
                            outlined
                          >
                            <v-card-text>
                              <v-list>
                                <v-list-item>
                                  <p class="mt-2 pl-2" style="text-align: left">
                                    Hiervon ist abhängig, wann der
                                    Vertragsschluss zustande kommt. Sind Ihre
                                    Angebote bereits bindend, kommt der
                                    Vertragsschluss mit der Bestellung durch den
                                    Kunden zustande. Wir empfehlen grundsätzlich
                                    die Angebote als nicht bindend einzuordnen,
                                    da Sie sich hiermit die Möglichkeit
                                    offenhalten, Bestellungen aus
                                    verschiedensten Gründen (z.B. Lieferengpass
                                    etc.) nicht zu bestätigen, sodass es nicht
                                    zu einem Vertragsschluss mit gegenseitigen
                                    Verpflichtungen hieraus kommt
                                  </p>
                                </v-list-item>
                              </v-list>
                            </v-card-text>
                          </v-card>
                        </v-menu>
                      </div>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in offeritems"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode5 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.offerradio">
                        <v-radio
                          color="#FFA300"
                          class=""
                          :rules="rules"
                          :value="item.value"
                        ></v-radio>
                      </v-radio-group>
                      <v-textarea
                        v-if="editmode5 == index"
                        dense
                        auto-grow
                        color="#FFA300"
                        :rows="1"
                        class="mt-n2"
                        outlined
                        v-model="item.label"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode5 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <!-- add pannal actual 3 -->
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode6 = !editmode6"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode6"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.conclusioncontractheading1)
                        "
                        v-model="ebay.conclusioncontractheading1"
                        @keyup.enter.exact="editmode6 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.conclusioncontractheading1 }}
                      </p>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in conclusioncontractitems1"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode7 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.conclusioncontractradio1">
                        <v-radio
                          color="#FFA300"
                          class=""
                          :rules="rules"
                          :value="item.value"
                        ></v-radio>
                      </v-radio-group>
                      <v-textarea
                        v-if="editmode7 == index"
                        dense
                        auto-grow
                        color="#FFA300"
                        :rows="1"
                        class="mt-n2"
                        outlined
                        v-model="item.label"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode7 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode8 = !editmode8"
                        icon
                        v-if="edit"
                      >
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
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.conclusioncontractheading3)
                        "
                        v-model="ebay.conclusioncontractheading3"
                        @keyup.enter.exact="editmode8 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.conclusioncontractheading3 }}
                      </p>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in conclusioncontractitems3"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode9 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.conclusioncontractradio3">
                        <v-radio
                          color="#FFA300"
                          class=""
                          :rules="rules"
                          :value="item.value"
                        ></v-radio>
                      </v-radio-group>
                      <v-textarea
                        v-if="editmode9 == index"
                        dense
                        auto-grow
                        color="#FFA300"
                        :rows="1"
                        class="mt-n2"
                        outlined
                        v-model="item.label"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode9 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode10 = !editmode10"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode10"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.conclusioncontractheading2)
                        "
                        v-model="ebay.conclusioncontractheading2"
                        @keyup.enter.exact="editmode10 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.conclusioncontractheading2 }}
                      </p>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in conclusioncontractitems2"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode11 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.conclusioncontractradio2">
                        <v-radio
                          color="#FFA300"
                          class=""
                          :rules="rules"
                          :value="item.value"
                        ></v-radio>
                      </v-radio-group>
                      <v-textarea
                        v-if="editmode11 == index"
                        dense
                        auto-grow
                        color="#FFA300"
                        :rows="1"
                        class="mt-n2"
                        outlined
                        v-model="item.label"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode11 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <!-- add pannal actual4 -->
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode12 = !editmode12"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode12"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.auctionpannalheading1)
                        "
                        v-model="ebay.auctionpannalheading1"
                        @keyup.enter.exact="editmode12 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.auctionpannalheading1 }}
                      </p>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in auctionpannalitems1"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode13 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.auctionpannalradio1">
                        <v-radio
                          color="#FFA300"
                          class=""
                          :rules="rules"
                          :value="item.value"
                        ></v-radio>
                      </v-radio-group>
                      <v-textarea
                        v-if="editmode13 == index"
                        dense
                        auto-grow
                        color="#FFA300"
                        :rows="1"
                        class="mt-n2"
                        outlined
                        v-model="item.label"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode13 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <!-- added "Wie erfolgt die Annahme des Vertagsagebots?" and Info Button-->
                    <div style="display: flex" class="mb-2">
                      <v-btn
                        class="mt-n2"
                        @click="editmode14 = !editmode14"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode14"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.auctionpannalheading3)
                        "
                        v-model="ebay.auctionpannalheading3"
                        @keyup.enter.exact="editmode14 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.auctionpannalheading3 }}
                      </p>

                      <div v-if="help">
                        <v-menu offset-x min-width="180" rounded="lg">
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
                                    Wenn Ihre Angebote nicht bindend sind, kann
                                    nach der Abgabe der Bestellung durch den
                                    Kunden eine Annahme des Angebots Ihrerseits
                                    erfolgen. Wir empfehlen hier dem Kunden die
                                    Annahme des Vertragsangebotes per E-Mail
                                    mitzuteilen (Auftragsbestätigung per
                                    E-Mail).
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
                      color="#FFA300"
                      clearable
                      outlined
                      v-model="ebay.contractcustomerpannalinputfield5"
                    >
                    </v-text-field>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode15 = !editmode15"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode15"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.auctionpannalheading2)
                        "
                        v-model="ebay.auctionpannalheading2"
                        @keyup.enter.exact="editmode15 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.auctionpannalheading2 }}
                      </p>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in auctionpannalitems2"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode17 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.auctionpannalradio2">
                        <v-radio
                          color="#FFA300"
                          class=""
                          :rules="rules"
                          :value="item.value"
                        ></v-radio>
                      </v-radio-group>
                      <v-textarea
                        v-if="editmode17 == index"
                        dense
                        auto-grow
                        color="#FFA300"
                        :rows="1"
                        class="mt-n2"
                        outlined
                        v-model="item.label"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode17 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <v-text-field
                      v-if="ebay.auctionpannalradio2"
                      color="#FFA300"
                      rounded
                      dense
                      clearable
                      outlined
                      label="Sprache auswählen"
                      v-model="ebay.auctionpannalinputfield"
                    >
                    </v-text-field>

                    <!-- add pannal actual5 -->
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode16 = !editmode16"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode16"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.contracttextpannalheading1)
                        "
                        v-model="ebay.contracttextpannalheading1"
                        @keyup.enter.exact="editmode16 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.contracttextpannalheading1 }}
                      </p>

                      <div v-if="help">
                        <v-menu offset-x min-width="180" rounded="lg">
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
                            width="180"
                            class="expand"
                            rounded="lg"
                            height="140"
                            color="white"
                            outlined
                          >
                            <v-card-text>
                              <v-list>
                                <v-list-item>
                                  <p class="mt-2" style="text-align: left">
                                    Sie sind nicht verpflichtet den Vertragstext
                                    zu speichern. Sofern Sie dies jedoch tun,
                                    muss der Kunde in den AGB hierüber
                                    informiert werden
                                  </p>
                                </v-list-item>
                              </v-list>
                            </v-card-text>
                          </v-card>
                        </v-menu>
                      </div>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in contracttextpannalitems"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode19 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.contracttextpannalradio">
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
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode19 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <div v-if="ebay.contracttextpannalradio">
                      <div style="display: flex">
                        <v-btn
                          class="mt-n2"
                          @click="editmode18 = !editmode18"
                          icon
                          v-if="edit"
                        >
                          <v-icon size="19">mdi-pencil-outline</v-icon>
                        </v-btn>
                        <v-textarea
                          v-if="editmode18"
                          dense
                          outlined
                          auto-grow
                          :rows="1"
                          color="#FFA300"
                          @keydown.enter.exact.prevent
                          @keydown.enter.shift.exact="
                            newlineDescription(ebay.contracttextpannalheading2)
                          "
                          v-model="ebay.contracttextpannalheading2"
                          @keyup.enter.exact="editmode18 = false"
                        >
                        </v-textarea>
                        <p style="word-break: break-word" v-else>
                          {{ ebay.contracttextpannalheading2 }}
                        </p>
                      </div>
                      <v-select
                        :menu-props="{ bottom: true, offsetY: true }"
                        color="#FFA300"
                        v-model="ebay.contracttextUserModel"
                        :items="contracttextitems"
                        return-object
                        item-text="value"
                        item-value="id"
                        dense
                        outlined
                        rounded
                      >
                      </v-select>
                    </div>
                    <v-text-field
                      v-if="
                        ebay.contracttextUserModel.value ===
                        'Abweichende Speicherdauer'
                      "
                      rounded
                      dense
                      clearable
                      outlined
                      label="Dauer auswählen"
                      color="#FFA300"
                      v-model="ebay.contracttextpannalinputfield"
                    >
                    </v-text-field>
                    <!-- add pannal acutual6  -->
                    <div style="display: flex">
                      <v-btn
                        class="mt-n2"
                        @click="editmode20 = !editmode20"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode20"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(
                            ebay.contractcustomerpannalheading1
                          )
                        "
                        v-model="ebay.contractcustomerpannalheading1"
                        @keyup.enter.exact="editmode20 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.contractcustomerpannalheading1 }}
                      </p>
                    </div>

                    <v-text-field
                      rounded
                      dense
                      clearable
                      outlined
                      color="#FFA300"
                      v-model="ebay.contractcustomerpannalinputfield1"
                    >
                    </v-text-field>
                    <div style="display: flex">
                      <v-btn
                        class="mt-n2"
                        @click="editmode21 = !editmode21"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode21"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(
                            ebay.contractcustomerpannalheading2
                          )
                        "
                        v-model="ebay.contractcustomerpannalheading2"
                        @keyup.enter.exact="editmode21 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.contractcustomerpannalheading2 }}
                      </p>
                    </div>
                    <v-text-field
                      rounded
                      dense
                      clearable
                      color="#FFA300"
                      outlined
                      v-model="ebay.contractcustomerpannalinputfield2"
                    >
                    </v-text-field>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode22 = !editmode22"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode22"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(
                            ebay.contractcustomerpannalheading3
                          )
                        "
                        v-model="ebay.contractcustomerpannalheading3"
                        @keyup.enter.exact="editmode22 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.contractcustomerpannalheading3 }}
                      </p>
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
                                <v-list-item>
                                  <p style="text-align: left" class="pl-2">
                                    Dies ist eine Information, die Sie dem
                                    Kunden laut Gesetz erteilen müssen. Sofern
                                    der Vertragsschluss über den normalen
                                    ebay-Ablauf zustande kommt, empfehlen wir
                                    die folgende Auswahl
                                  </p>
                                </v-list-item>
                              </v-list>
                            </v-card-text>
                          </v-card>
                        </v-menu>
                      </div>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in contractcustomerpannalitems1"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode23 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group
                        v-model="ebay.contractcustomerpannalradio1"
                      >
                        <v-radio
                          color="#FFA300"
                          class=""
                          :rules="rules"
                          :value="item.value"
                        ></v-radio>
                      </v-radio-group>
                      <v-textarea
                        v-if="editmode23 == index"
                        dense
                        auto-grow
                        color="#FFA300"
                        :rows="1"
                        class="mt-n2"
                        outlined
                        v-model="item.label"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode23 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <v-text-field
                      v-if="ebay.contractcustomerpannalradio1 === false"
                      rounded
                      color="#FFA300"
                      dense
                      clearable
                      outlined
                      v-model="ebay.contractcustomerpannalinputfield6"
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
                      
                      <v-btn class="" icon @click="editheading3 = !editheading3"
                          v-if="edit">
                        <v-icon
                          size="19"
                          >mdi-pencil-outline</v-icon
                        >
                      </v-btn>
                    </div>
                    <div>
                      <v-textarea
                        v-if="editheading3"
                        dense
                        outlined
                        color="#FFA300"
                        auto-grow
                        :rows="1"
                        class="pt-3"
                        style="margin-left: -35%"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.conclusioncontractpannalname)
                        "
                        v-model="ebay.conclusioncontractpannalname"
                        @keyup.enter.exact="editheading3 = false"
                      >
                      </v-textarea>
                      <span v-else
                        ><strong>{{
                          ebay.conclusioncontractpannalname
                            | truncateEnd(36, "...")
                        }}</strong></span
                      >
                    </div>
                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="conclusionpannalprogressValue === 0"
                    >
                      <v-chip
                        class=""
                        color="#606060"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ conclusionpannalprogressValue }} / 4
                        </p>
                      </v-chip>
                    </div>

                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="conclusionpannalprogressValue !== 0"
                    >
                      <v-chip
                        class=""
                        color="#ffa300"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ conclusionpannalprogressValue }} / 4
                        </p>
                      </v-chip>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <!-- add actual pannal 7 -->
                    <!-- contractcustomerpannal add kia ha -->
                    <div style="display: flex">
                      <v-btn
                        class="mt-n2"
                        @click="editmode24 = !editmode24"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode24"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(
                            ebay.contractcustomerpannalheading4
                          )
                        "
                        v-model="ebay.contractcustomerpannalheading4"
                        @keyup.enter.exact="editmode24 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.contractcustomerpannalheading4 }}
                      </p>
                    </div>
                    <v-text-field
                      rounded
                      dense
                      clearable
                      color="#FFA300"
                      outlined
                      v-model="ebay.contractcustomerpannalinputfield4"
                    >
                    </v-text-field>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode25 = !editmode25"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode25"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.shipcostpannalheading1)
                        "
                        v-model="ebay.shipcostpannalheading1"
                        @keyup.enter.exact="editmode25 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.shipcostpannalheading1 }}
                      </p>
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
                            rounded="lg"
                            width="210"
                            height="270"
                            color="white"
                            class="expand"
                            outlined
                          >
                            <v-card-text class="mt-4">
                              <v-list>
                                <v-list-item>
                                  <p style="text-align: left" class="pl-2">
                                    Sofern Sie Ihre Angebote gegenüber
                                    Verbrauchern und nicht ausschließlich
                                    gegenüber Unternehmern anbieten, sind Sie
                                    verpflichtet sog. Gesamtpreise anzugeben,
                                    d.h. Preise inklusive aller Steuern und
                                    sonstiger Preisbestandteile. Hierzu sind Sie
                                    nur dann nicht verpflichtet, wenn Sie
                                    Kleinunternehmer iSd §19 UstG sind.
                                  </p>
                                </v-list-item>
                              </v-list>
                            </v-card-text>
                          </v-card>
                        </v-menu>
                      </div>
                    </div>
                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in shipcostpannalitems1"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode26 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.shipcostpannalradio1">
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
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode26 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode27 = !editmode27"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode27"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.shipcostpannalheading2)
                        "
                        v-model="ebay.shipcostpannalheading2"
                        @keyup.enter.exact="editmode27 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.shipcostpannalheading2 }}
                      </p>
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
                            color="white"
                            class="expand"
                            height="240"
                            outlined
                          >
                            <v-card-text class="mt-2">
                              <v-list>
                                <v-list-item>
                                  <p style="text-align: left" class="pl-2">
                                    Sofern Sie Ihre Angebote gegenüber
                                    Verbrauchern und nicht ausschließlich
                                    gegenüber Unternehmern anbieten, sind Sie
                                    verpflichtet sog. Gesamtpreise anzugeben,
                                    d.h. Preise inklusive aller Steuern und
                                    sonstiger Preisbestandteile
                                  </p>
                                </v-list-item>
                              </v-list>
                            </v-card-text>
                          </v-card>
                        </v-menu>
                      </div>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in shipcostpannalitems2"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode28 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.shipcostpannalradio2">
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
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode28 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <v-text-field
                      v-if="ebay.shipcostpannalradio2"
                      color="#FFA300"
                      rounded
                      dense
                      clearable
                      outlined
                      label="Höhe auswählen"
                      v-model="ebay.shipcostpannalinputfield"
                    >
                    </v-text-field>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode29 = !editmode29"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode29"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.shipcostpannalheading3)
                        "
                        v-model="ebay.shipcostpannalheading3"
                        @keyup.enter.exact="editmode29 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.shipcostpannalheading3 }}
                      </p>
                      <div v-if="help">
                        <v-menu offset-x rounded="lg" min-width="210">
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
                            color="white"
                            height="230"
                            outlined
                          >
                            <v-card-text class="mt-2">
                              <v-list>
                                <v-list-item>
                                  <p style="text-align: left" class="pl-2">
                                    Laut Gesetz trägt grundsätzlich der
                                    Verbraucher die Kosten der Rücksendung,
                                    sofern der Unternehmer diesen über diese
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

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in shipcostpannalitems3"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode30 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.shipcostpannalradio3">
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
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode30 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
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
                      <v-btn class="" @click="editheading4 = !editheading4"
                          v-if="edit"  icon>
                        <v-icon
                          
                          size="19"
                          >mdi-pencil-outline</v-icon
                        >
                      </v-btn>
                    </div>
                    <div>
                      <v-textarea
                        v-if="editheading4"
                        dense
                        outlined
                        color="#FFA300"
                        auto-grow
                        :rows="1"
                        class="pt-3"
                        style="margin-left: -35%"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.auctionpannalname)
                        "
                        v-model="ebay.auctionpannalname"
                        @keyup.enter.exact="editheading4 = false"
                      >
                      </v-textarea>
                      <span v-else
                        ><strong>{{
                          ebay.auctionpannalname | truncateEnd(36, "...")
                        }}</strong></span
                      >
                    </div>
                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="auctionpannalprogressValue === 0"
                    >
                      <v-chip
                        class=""
                        color="#606060"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ auctionpannalprogressValue }} / 1
                        </p>
                      </v-chip>
                    </div>

                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="auctionpannalprogressValue !== 0"
                    >
                      <v-chip
                        class=""
                        color="#ffa300"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ auctionpannalprogressValue }} / 1
                        </p>
                      </v-chip>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode31 = !editmode31"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode31"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.shipcostpannalheading4)
                        "
                        v-model="ebay.shipcostpannalheading4"
                        @keyup.enter.exact="editmode31 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.shipcostpannalheading4 }}
                      </p>
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
                            color="white"
                            height="150"
                            class="expand"
                            outlined
                          >
                            <v-card-text class="mt-2">
                              <v-list>
                                <v-list-item>
                                  <p style="text-align: left" class="pl-2">
                                    Dies ist gängige Praxis, da hierdurch die
                                    Rückabwicklung im Falle einer
                                    unterbleibenden Zahlung erleichtert wird.
                                  </p>
                                </v-list-item>
                              </v-list>
                            </v-card-text>
                          </v-card>
                        </v-menu>
                      </div>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in shipcostpannalitems4"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode32 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.shipcostpannalradio4">
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
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode32 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
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
                      <v-btn class=""  @click="editheading5 = !editheading5"
                          v-if="edit" icon>
                        <v-icon
                         
                          size="19"
                          >mdi-pencil-outline</v-icon
                        >
                      </v-btn>
                    </div>
                    <div>
                      <v-textarea
                        v-if="editheading5"
                        dense
                        outlined
                        color="#FFA300"
                        auto-grow
                        :rows="1"
                        class="pt-3"
                        style="margin-left: -35%"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.contracttextpannalname)
                        "
                        v-model="ebay.contracttextpannalname"
                        @keyup.enter.exact="editheading5 = false"
                      >
                      </v-textarea>
                      <span v-else
                        ><strong>{{
                          ebay.contracttextpannalname | truncateEnd(36, "...")
                        }}</strong></span
                      >
                    </div>
                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="contracttextpannalprogressValue === 0"
                    >
                      <v-chip
                        class=""
                        color="#606060"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ contracttextpannalprogressValue }} / 1
                        </p>
                      </v-chip>
                    </div>

                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="contracttextpannalprogressValue !== 0"
                    >
                      <v-chip
                        class=""
                        color="#ffa300"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ contracttextpannalprogressValue }} / 1
                        </p>
                      </v-chip>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <!-- add new pannal 5 -->
                    <div class="mt-4">
                      <div
                        class="mt-n4"
                        style="display: flex"
                        v-for="(item, index) in newpannal5items"
                        :key="index"
                      >
                        <v-btn
                          @click="editmode33 = index"
                          style="margin-top: -0.45em"
                          icon
                          v-if="edit"
                        >
                          <v-icon size="19">{{ item.icon }}</v-icon>
                        </v-btn>
                        <v-radio-group v-model="ebay.newpannal5radio">
                          <v-radio
                            color="#FFA300"
                            class=""
                            :rules="rules"
                            :value="item.value"
                          ></v-radio>
                        </v-radio-group>
                        <v-textarea
                          v-if="editmode33 == index"
                          dense
                          auto-grow
                          color="#FFA300"
                          :rows="1"
                          class="mt-n2"
                          outlined
                          v-model="item.label"
                          @keydown.enter.exact.prevent
                          @keydown.enter.shift.exact="
                            newlineDescription(item.label)
                          "
                          @keyup.enter.exact="editmode33 = null"
                        ></v-textarea>
                        <p v-else class="mt-1" style="color: grey">
                          {{ item.label }}
                        </p>
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
                      <v-btn class="" @click="editheading6 = !editheading6"
                          v-if="edit"  icon>
                        <v-icon
                          
                          size="19"
                          >mdi-pencil-outline</v-icon
                        >
                      </v-btn>
                    </div>
                    <div>
                      <v-textarea
                        v-if="editheading6"
                        dense
                        outlined
                        color="#FFA300"
                        auto-grow
                        :rows="1"
                        class="pt-3"
                        style="margin-left: -35%"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.contractcustomerpannalname)
                        "
                        v-model="ebay.contractcustomerpannalname"
                        @keyup.enter.exact="editheading6 = false"
                      >
                      </v-textarea>
                      <span v-else
                        ><strong>{{
                          ebay.contractcustomerpannalname
                            | truncateEnd(36, "...")
                        }}</strong></span
                      >
                    </div>
                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="contractcustomerpannalprogressValue === 0"
                    >
                      <v-chip
                        class=""
                        color="#606060"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ contractcustomerpannalprogressValue }} / 1
                        </p>
                      </v-chip>
                    </div>

                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="contractcustomerpannalprogressValue !== 0"
                    >
                      <v-chip
                        class=""
                        color="#ffa300"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ contractcustomerpannalprogressValue }} / 1
                        </p>
                      </v-chip>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <!-- add new pannal 6 -->

                    <div class="mt-4">
                      <div
                        class="mt-n4"
                        style="display: flex"
                        v-for="(item, index) in newpannal6items"
                        :key="index"
                      >
                        <v-btn
                          @click="editmode34 = index"
                          style="margin-top: -0.45em"
                          icon
                          v-if="edit"
                        >
                          <v-icon size="19">{{ item.icon }}</v-icon>
                        </v-btn>
                        <v-radio-group v-model="ebay.newpannal6radio">
                          <v-radio
                            color="#FFA300"
                            class=""
                            :rules="rules"
                            :value="item.value"
                          ></v-radio>
                        </v-radio-group>
                        <v-textarea
                          v-if="editmode34 == index"
                          dense
                          auto-grow
                          color="#FFA300"
                          :rows="1"
                          class="mt-n2"
                          outlined
                          v-model="item.label"
                          @keydown.enter.exact.prevent
                          @keydown.enter.shift.exact="
                            newlineDescription(item.label)
                          "
                          @keyup.enter.exact="editmode34 = null"
                        ></v-textarea>
                        <p v-else class="mt-1" style="color: grey">
                          {{ item.label }}
                        </p>
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
                  <v-expansion-panel-header
                    @click="shipcostpannalchangevalue()"
                  >
                    <template v-slot:actions>
                      <v-icon></v-icon>
                    </template>
                    <div style="padding-left: 2%">
                      <v-icon
                        :color="shipcostpannaliconcolor"
                        style="font-size: 10px"
                        >mdi-checkbox-blank-circle</v-icon
                      >
                      <v-btn class=""  @click="editheading7 = !editheading7"
                          v-if="edit"  icon>
                        <v-icon
                         
                          size="19"
                          >mdi-pencil-outline</v-icon
                        >
                      </v-btn>
                    </div>
                    <div>
                      <v-textarea
                        v-if="editheading7"
                        dense
                        outlined
                        color="#FFA300"
                        auto-grow
                        :rows="1"
                        class="pt-3"
                        style="margin-left: -35%"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.shipcostpannalname)
                        "
                        v-model="ebay.shipcostpannalname"
                        @keyup.enter.exact="editheading7 = false"
                      >
                      </v-textarea>
                      <span v-else
                        ><strong>{{
                          ebay.shipcostpannalname | truncateEnd(36, "...")
                        }}</strong></span
                      >
                    </div>
                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="shipcostpannalprogressValue === 0"
                    >
                      <v-chip
                        class=""
                        color="#606060"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ shipcostpannalprogressValue }} / 2
                        </p>
                      </v-chip>
                    </div>

                    <div
                      style="position: absolute; right: 15px; top: 13px"
                      v-if="shipcostpannalprogressValue !== 0"
                    >
                      <v-chip
                        class=""
                        color="#ffa300"
                        style="width: 7em; height: 1.8em"
                        small
                      >
                        <p class="pt-4 pl-8" style="color: white">
                          {{ shipcostpannalprogressValue }} / 2
                        </p>
                      </v-chip>
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <!-- transerpannal add kia ha -->

                    <div class="mt-4">
                      <div
                        class="mt-n4"
                        style="display: flex"
                        v-for="(item, index) in transferpannalitems1"
                        :key="index"
                      >
                        <v-btn
                          @click="editmode35 = index"
                          style="margin-top: -0.45em"
                          icon
                          v-if="edit"
                        >
                          <v-icon size="19">{{ item.icon }}</v-icon>
                        </v-btn>
                        <v-radio-group v-model="ebay.transferpannalradio1">
                          <v-radio
                            color="#FFA300"
                            class=""
                            :rules="rules"
                            :value="item.value"
                          ></v-radio>
                        </v-radio-group>
                        <v-textarea
                          v-if="editmode35 == index"
                          dense
                          auto-grow
                          color="#FFA300"
                          :rows="1"
                          class="mt-n2"
                          outlined
                          v-model="item.label"
                          @keydown.enter.exact.prevent
                          @keydown.enter.shift.exact="
                            newlineDescription(item.label)
                          "
                          @keyup.enter.exact="editmode35 = null"
                        ></v-textarea>
                        <p v-else class="mt-1" style="color: grey">
                          {{ item.label }}
                        </p>
                      </div>
                    </div>
                    <div style="display: flex" class="mb-3">
                      <v-btn
                        class="mt-n2"
                        @click="editmode36 = !editmode36"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode36"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.transferpannalheading2)
                        "
                        v-model="ebay.transferpannalheading2"
                        @keyup.enter.exact="editmode36 = false"
                      >
                      </v-textarea>
                      <p v-else style="word-break: break-word">
                        {{ ebay.transferpannalheading2 }}
                      </p>
                    </div>

                    <div
                      class="mt-n4"
                      style="display: flex"
                      v-for="(item, index) in transferpannalitems2"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode37 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="ebay.transferpannalradio2">
                        <v-radio
                          color="#FFA300"
                          class=""
                          :rules="rules"
                          :value="item.value"
                        ></v-radio>
                      </v-radio-group>
                      <v-textarea
                        v-if="editmode37 == index"
                        dense
                        auto-grow
                        color="#FFA300"
                        :rows="1"
                        class="mt-n2"
                        outlined
                        v-model="item.label"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode37 = null"
                      ></v-textarea>
                      <p v-else class="mt-1" style="color: grey">
                        {{ item.label }}
                      </p>
                    </div>
                    <div style="display: flex">
                      <v-btn
                        class="mt-n2"
                        @click="editmode38 = !editmode38"
                        icon
                        v-if="edit && ebay.transferpannalradio2"
                      >
                        <v-icon size="19">mdi-pencil-outline</v-icon>
                      </v-btn>
                      <v-textarea
                        v-if="editmode38"
                        dense
                        outlined
                        auto-grow
                        :rows="1"
                        color="#FFA300"
                        @keydown.enter.exact.prevent
                        @keydown.enter.shift.exact="
                          newlineDescription(ebay.transferpannalheading3)
                        "
                        v-model="ebay.transferpannalheading3"
                        @keyup.enter.exact="editmode36 = false"
                      >
                      </v-textarea>
                      <p
                        style="word-break: break-word"
                        v-if="ebay.transferpannalradio2 && !editmode38"
                      >
                        {{ ebay.transferpannalheading3 }}
                      </p>
                    </div>
                    <v-text-field
                      v-if="ebay.transferpannalradio2"
                      rounded
                      dense
                      clearable
                      outlined
                      label="Verhaltenskodizies"
                      v-model="ebay.transferpannalinputfield"
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
                    <div
                      id="firstLine"
                      class="divider originallengthcolor"
                    ></div>
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
                    <div
                      id="thirdLine"
                      class="divider originallengthcolor"
                    ></div>
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
                    <div
                      id="fifthLine"
                      class="divider originallengthcolor"
                    ></div>
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
          <div
            style="width: 55%; position: relative; background-color: #ffffff"
            id="printme"
          >
            <v-card
              elevation="0"
              style="min-height:120vh; background-color: #ffffff"
            >
              <!-- for address pannal 1 -->
              <v-list>
                <v-list-item>
                  <v-list-item-content
                    style="
                      margin-right: 15mm;
                      padding-left: 15mm !important;
                      margin-top: 3%;
                    "
                  >
                    <p
                      v-if="ebay.addressdocumentpannalinputfield1"
                      style="
                        text-align: center;
                        font-weight: 700;
                        font-size: 24px;
                      "
                    >
                      <strong>Allgemeine Geschäftsbedingungen</strong>
                      <br />
                      <br />
                    </p>

                    <p
                      v-if="ebay.addressdocumentpannalinputfield1"
                      style="
                        text-align: center;
                        font-weight: 700;
                        font-size: 18.72px;
                        word-break: break-word;
                      "
                    >
                      <strong
                        >{{ ebay.addressdocumentpannalinputfield1 }}
                      </strong>
                    </p>

                    <p
                      v-if="
                        ebay.addressdocumentpannalinputfield1 ||
                        ebay.addressUserModel2 ||
                        ebay.addressPlz ||
                        ebay.addressOrt ||
                        ebay.addressStrasse ||
                        ebay.addressVorname ||
                        ebay.addressNachname ||
                        ebay.addressHausnummer ||
                        ebay.addressRechtsform ||
                        ebay.addressFirmenname
                      "
                      style="
                        text-align: center;
                        font-weight: 700;
                        font-size: 16px;
                      "
                    >
                      <br /><br />
                      <strong
                        >§{{ ebay.pos[0] }}<br />
                        Vertragspartner</strong
                      >
                    </p>
                    <!--
                                             <p v-else style="text-align: left; font-weight: 700">
                                                <strong>§1 Vertragspartner <br />...</strong>
                                              </p>
                                                  -->
                    <p
                      v-if="ebay.addressUserModel2"
                      style="text-align: left; margin-top: 1%"
                    ></p>
                    <p
                      v-if="ebay.addressdocumentpannalinputfield1"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      Vertragspartner des Kunden für die über ebay über den Shop
                      {{ ebay.addressdocumentpannalinputfield1 }}

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
                          ebay.addressUserModel2.value !== "keine Angabe"
                            ? ebay.addressUserModel2.value
                            : ""
                        }}
                        {{ ebay.addressVorname }}
                        {{ ebay.addressNachname }}</strong
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
                      <strong>
                        {{ ebay.addressFirmenname }}
                        {{ ebay.addressRechtsform }}</strong
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
                      <strong>
                        {{ ebay.addressStrasse }}
                        {{ ebay.addressHausnummer }}</strong
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
                      <strong>
                        {{ ebay.addressPlz }} {{ ebay.addressOrt }}</strong
                      >
                    </p>
                    <!-- combine original pannal 2,3,4,5 and 6  -->
                    <!-- offerpannal2 -->
                    <p
                      v-if="
                        ebay.offerradio ||
                        ebay.offerradio === false ||
                        ebay.conclusioncontractradio1 ||

                        ebay.conclusioncontractradio2 ||
                     
                        ebay.conclusioncontractradio3 ||
                       
                        ebay.auctionpannalradio1 ||
                        ebay.auctionpannalradio1 === false ||
                        ebay.auctionpannalradio2 ||
                        ebay.auctionpannalradio2 === false ||
                        ebay.contracttextpannalradio ||
                        ebay.contracttextpannalradio === false ||
                        ebay.contracttextpannalinputfield ||
                        ebay.contractcustomerpannalinputfield1 ||
                        ebay.contractcustomerpannalinputfield2 ||
                        ebay.contractcustomerpannalinputfield3 ||
                         ebay.contractcustomerpannalinputfield5 ||
                        ebay.contractcustomerpannalradio1 ||
                        ebay.contractcustomerpannalradio1 === false
                      "
                      style="
                        text-align: center;
                        margin-top: 0.5%;
                        font-size: 16px;
                        word-break: break-word;
                      "
                    >
                      <br /><br /><br />
                      <strong>§{{ ebay.pos[1] }} <br />Vertragsschluss</strong>
                    </p>
                    <!--
                      <p v-else style="text-align: left; margin-top: 0.5%">
                        <strong>§2 Vertragsschluss<br />...</strong>
                      </p>
                      -->
                    <p
                      v-if="ebay.offerradio"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ebay.posP2[0]}}.{{ offerdocument1 }}
                    </p>
                    <p
                      v-if="ebay.offerradio === false"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ebay.posP2[0]}}.{{ offerdocument2 }}
                    </p>
                    <!-- conclusionpannal3 -->
                    <p
                      v-if="
                        ebay.conclusioncontractradio1 ||
                        ebay.conclusioncontractradio3 ||
                        ebay.conclusioncontractradio2
                      "
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ebay.posP2[1]}}.{{ conclusioncontractdocument1 }}
                    </p>
                    <p
                      v-if="ebay.conclusioncontractradio1"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ conclusioncontractdocument2 }}
                    </p>
                    <p
                      v-if="ebay.conclusioncontractradio1"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ conclusioncontractdocument3 }}
                    </p>
                    <p
                      v-if="ebay.conclusioncontractradio3"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ conclusioncontractdocument6 }}
                    </p>
                    <p
                      v-if="ebay.conclusioncontractradio3"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ conclusioncontractdocument7 }}
                    </p>
                    <p
                      v-if="ebay.conclusioncontractradio2"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ conclusioncontractdocument4 }}
                    </p>
                    <!-- <p
                      v-if="ebay.conclusioncontractradio1"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ conclusioncontractdocument5 }}

                    </p> -->
<!-- auctionpannal 4-->
                    <p
                      v-if="ebay.auctionpannalradio1"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                       {{ ebay.posP2[2] }}.{{ auctionpannaldocument1 }}
                    </p>
                    <p
                      v-if="ebay.auctionpannalradio1"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ ebay.posP2[3] }}.{{ auctionpannaldocument2 }}
                    </p>
                    <p
                      v-if="ebay.auctionpannalradio1"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ ebay.posP2[4] }}.{{ auctionpannaldocument5 }}
                    </p>
                    <p
                      v-if="ebay.contractcustomerpannalinputfield5"
                      style="word-break: break-word;text-align: justify; margin-top: 0.4%"
                    >
                      <br /> {{ebay.posP2[5]}}.Die Annahme des Vertragsangebots erfolgt über
                      {{ ebay.contractcustomerpannalinputfield5 }}.
                    </p>
                    <p
                      v-if="ebay.auctionpannalradio2"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                       {{ auctionpannaldocument3 }}
                      <br /> {{ebay.posP2[6]}}.Als Vertragssprache stehen deutsch 
                      {{ ebay.auctionpannalinputfield }} zur Verfügung.
                    </p>

                    <p
                      v-if="ebay.auctionpannalradio2 === false"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ebay.posP2[6]}}.{{ auctionpannaldocument4 }}
                    </p>

                    <!-- contracttextpannal 5 -->
                    <p
                      v-if="ebay.contracttextpannalradio"
                      style="word-break: break-word;text-align: justify; margin-top: 0.4%"
                    >
                      <br />
                       {{ebay.posP2[7]}}.{{ contracttextpannaldocument1 }} Die Speicherung erfolgt
                      für {{ ebay.contracttextpannalinputfield }}
                      {{
                        ebay.contracttextUserModel.value !==
                        "Abweichende Speicherdauer"
                          ? ebay.contracttextUserModel.value
                          : ""
                      }}
                    </p>
                    <p
                      v-if="ebay.contracttextpannalradio === false"
                      style="word-break: break-word;text-align: justify; margin-top: 0.4%"
                    >
                      <br />
                       {{ebay.posP2[7]}}.{{ contracttextpannaldocument2 }}
                    </p>

                    <!-- contractcustomerpannal6 -->
                    <p
                      v-if="ebay.contractcustomerpannalinputfield1"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ebay.posP2[8]}}.Der Kunde erhält den Vertragstext über
                      {{ ebay.contractcustomerpannalinputfield1 }}.
                    </p>
                    <p
                      v-if="ebay.contractcustomerpannalinputfield2"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ebay.posP2[9]}}.Der Vertragstext ist dem Kunden auch im Anschluss an
                      den Vertragsschluss noch über
                      {{ ebay.contractcustomerpannalinputfield2 }}
                      zugänglich.
                    </p>
                    <p
                      v-if="
                        ebay.conclusioncontractradio3 &&
                        ebay.contractcustomerpannalradio1
                      "
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ebay.posP2[10]}}.Im Rahmen der Warenkorb-Vertragsschluss-Option bei
                      welcher der Kunde das Produkt vor Abgabe seiner
                      Vertragserklärung zunächst „In den Warenkorb“ legt, kann
                      der Kunde seine Daten, nachdem er diese in das
                      ebay-Formular eingegeben hat jederzeit löschen oder die
                      Löschung der eingegebenen Daten durch das Schließen des
                      Browsers erreichen.
                    </p>
                    <p
                      v-if="
                        ebay.conclusioncontractradio1 &&
                        ebay.contractcustomerpannalradio1
                      "
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ebay.posP2[11]}}.Im Rahmen der "Sofortkauf"-Bestelloption kann der
                      Bestellvorgang über die Zurück-Funktion oder das Schließen
                      des Browsers abgebrochen werden.
                    </p>

                    <p
                      v-if="ebay.contractcustomerpannalradio1 === false"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ebay.posP2[10]}}.{{ ebay.contractcustomerpannalinputfield6 }}
                    </p>

                    <!-- end of pannal 2,3,4,5,6/ -->
                    <!-- start pannal 3 new -->
                    <!-- shipcostpannalandtransferpannal 7 -->
                    <p
                      v-if="
                        ebay.contractcustomerpannalinputfield4 ||
                        ebay.shipcostpannalradio1 ||
                        ebay.shipcostpannalradio1 === false ||
                        ebay.shipcostpannalradio2 ||
                        ebay.shipcostpannalradio2 === false ||
                        ebay.shipcostpannalradio3 ||
                        ebay.shipcostpannalradio3 === false
                      "
                      style="
                        text-align: center;
                        margin-top: 0.5%;
                        font-size: 16px;
                      "
                    >
                      <br /><br /><br />
                      <strong
                        >§{{ ebay.pos[2] }}<br />
                        Bezahlung</strong
                      >
                    </p>
                    <!--
                      <p v-else style="text-align: left; margin-top: 0.5%">
                        <strong>§3 Bezahlung<br />...</strong>
                      </p>
                      -->
                    <p
                      v-if="ebay.contractcustomerpannalinputfield4"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ ebay.posP3[0] }}.Als Zahlungsart steht/stehen dem Kunden
                      {{ ebay.contractcustomerpannalinputfield4 }}
                      zur Verfügung.
                    </p>
                    <p
                      v-if="ebay.shipcostpannalradio1"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ ebay.posP3[1] }}.{{ shipcostpannaldocument3 }}
                    </p>
                    <p
                      v-if="ebay.shipcostpannalradio1 === false"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ ebay.posP3[1] }}.{{ shipcostpannaldocument4 }}
                    </p>
                    <!-- <p
                      v-if="ebay.shipcostpannalradio2"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ebay.posP3[2]}}.{{ shipcostpannaldocument1 }}
                    </p> -->

                    <p v-if="ebay.shipcostpannalradio2">
                       {{ ebay.posP3[2] }}. Die Versandkosten betragen
                      {{ ebay.shipcostpannalinputfield }} je Bestellung.
                    </p>
                    <p
                      v-if="ebay.shipcostpannalradio2 === false"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                       {{ ebay.posP3[2] }}.{{ shipcostpannaldocument2 }}
                    </p>
                    <p
                      v-if="ebay.shipcostpannalradio3"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ ebay.posP3[3] }}.Der Kunde hat im Falle eines Widerrufs die
                      unmittelbaren Kosten der Rücksendung zu tragen.
                    </p>
                    <!-- end of pannal 3new -->
                    <!-- strat of pannal 4new -->
                    <p
                      v-if="ebay.shipcostpannalradio4"
                      style="
                        text-align: center;
                        margin-top: 0.5%;
                        font-size: 16px;
                      "
                    >
                      <br /><br /><br />
                      <strong
                        >§{{ ebay.pos[3] }}<br />
                        Eigentumsvorbehalt</strong
                      >
                    </p>
                    <!--
                      <p v-else style="text-align: left; margin-top: 0.5%">
                        <strong>§4 Eigentumsvorbehalt<br />...</strong>
                      </p>
                      -->
                    <p
                      v-if="ebay.shipcostpannalradio4"
                      style="text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      1.Bis zur vollständigen Bezahlung verbleiben die gelieferten
                      Waren im Eigentum des Anbieters.
                    </p>

                    <!-- transferpannal -->
                    <!-- <p
                        v-if="ebay.shipcostpannalradio4"
                        style="text-align: left; margin-top: 0.5%"
                      >
                        {{ transferpannaldocument1 }}
                      </p>
                      <p
                        v-if="ebay.shipcostpannalradio4"
                        style="text-align: left; margin-top: 0.5%"
                      >
                        {{ transferpannaldocument2 }}
                      </p>
                      <p
                        v-if="ebay.shipcostpannalradio4"
                        style="text-align: left; margin-top: 0.5%"
                      >
                        {{ transferpannaldocument3 }}
                      </p>
                      <p
                        v-if="ebay.shipcostpannalradio4"
                        style="text-align: left; margin-top: 0.5%"
                      >
                        {{ transferpannaldocument4 }}
                      </p> -->
                    <!-- end of pannal 4new -->
                    <!-- start of pannal 5new -->
                    <p
                      v-if="ebay.newpannal5radio"
                      style="
                        text-align: center;
                        margin-top: 0.5%;
                        font-size: 16px;
                      "
                    >
                      <br /><br /><br />
                      <strong
                        >§{{ ebay.pos[4] }}<br />
                        Gewährleistung
                      </strong>
                    </p>
                    <!--
                      <p v-else style="text-align: left; margin-top: 0.5%">
                        <strong>§5 Gewährleistung<br />... </strong>
                      </p>
                      -->
                    <p v-if="ebay.newpannal5radio">
                      <br />
                      1.Die Gewährleistung bestimmt sich nach den gesetzlichen
                      Vorschriften.
                    </p>
                    <p v-if="ebay.newpannal5radio === false"></p>
                    <!-- end of pannal 5new -->
                    <!-- start of pannal 6new -->
                    <p
                      v-if="ebay.newpannal6radio"
                      style="
                        text-align: center;
                        margin-top: 0.5%;
                        font-size: 16px;
                      "
                    >
                      <br /><br /><br />
                      <strong>
                        §{{ ebay.pos[5] }}<br />
                       Europäische Streitschlichtungsplattform
                      </strong>
                    </p>
                    <!--
                      <p v-else style="text-align: left; margin-top: 0.5%">
                        <strong>
                          §6 <h2>Europäische Streitschlichtungsplattform</h2><br />...
                        </strong>
                      </p>
                      -->
                    <p v-if="ebay.newpannal6radio">
                      <br />
                      1.Die EU-Kommission stellt eine
                      Online-Streitbeilegungsplattform (OS) bereit. Diese findet
                      sich unter
                      https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage
                      .
                    </p>
                    <p v-if="ebay.newpannal6radio === false"></p>
                    <!-- end of pannal 6new -->
                    <!-- start of pannal 7new -->
                    <p
                      v-if="
                        ebay.transferpannalradio1===true ||

                        ebay.transferpannalradio2 ===true || 
                         ebay.transferpannalradio2 ===false
                      "
                      style="
                        text-align: center;
                        margin-top: 0.5%;
                        font-size: 16px;
                      "
                    >
                      <br /><br /><br />
                      <strong
                        >§{{ ebay.pos[6] }}<br />
                        Schlussbestimmungen</strong
                      >
                    </p>
                    <!--
                      <p v-else style="text-align: left; margin-top: 0.5%">
                        <strong>§7 Schlussbestimmungen<br />...</strong>
                      </p>
                      -->
                    <p
                      v-if="ebay.transferpannalradio1"
                      style="text-align: justify; margin-top: 0.5%"
                    >
                      <br />

                     {{ebay.posP7[0]}}.Auf Verträge zwischen dem Anbieter und den Kunden
                      findet das Recht der Bundesrepublik Deutschland unter
                      Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen
                      Vorschriften zur Beschränkung der Rechtswahl und zur
                      Anwendbarkeit zwingender Vorschriften insbesondere des
                      Staates, in dem der Kunde als Verbraucher seinen
                      gewöhnlichen Aufenthalt hat, bleiben unberührt.
                    </p>
                    <p
                      v-if="ebay.transferpannalradio1"
                      style="text-align: justify; margin-top: 0.5%"
                    >
                      <br />{{ebay.posP7[1]}}.Der Vertrag bleibt auch bei rechtlicher
                      Unwirksamkeit einzelner Punkte in seinen übrigen Teilen
                      verbindlich. Anstelle der unwirksamen Punkte treten,
                      soweit vorhanden, die gesetzlichen Vorschriften. Soweit
                      dies für eine Vertragspartei eine unzumutbare Härte
                      darstellen würde, wird der Vertrag jedoch im Ganzen
                      unwirksam.
                    </p>
                    <!-- <p v-if="ebay.transferpannalradio1 === false"></p> -->
                    <p
                      v-if="ebay.transferpannalradio2"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ebay.posP7[2]}}.{{ transferpannaldocument5 }}
                      {{ ebay.transferpannalinputfield }}
                    </p>

                    <p
                      v-if="ebay.transferpannalradio2 === false"
                      style="word-break: break-word;text-align: justify; margin-top: 0.5%"
                    >
                      <br />
                      {{ebay.posP7[2]}}.{{ transferpannaldocument6 }}
                    </p>
                    <!-- end of pannal 7new -->
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
import { mapState } from "vuex";
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
//import CountryFlag from "@dzangolab/vue-country-flag-icon";
var electron = require("electron");
var fs = require("fs");
import store from "../store";
import "@dzangolab/vue-country-flag-icon/dist/CountryFlag.css"; // import stylesheet
export default {
  name: "ebay",
  components: {
    //CountryFlag,
  },
beforeDestroy() {
    if (store.state.isAdmin == true) {
      this.org_value2 = Object.assign(this.org_value2, this.ebay);
      if (JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)) {
        this.add_percentage_admin();
        this.writefileandscreenshot_admin();
      }
    } else {
      this.org_value2 = Object.assign(this.org_value2, this.ebay);
      if (JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)) {
        this.add_percentage_user()
        this.writefileandscreenshot_user();
      }
    }
  },

  // mounted
  mounted() {
    if (store.state.isAdmin == true) {
      this.org_value1 = Object.assign(this.org_value1, this.ebay);
      this.mounted_admin();
    } else {
      this.org_value1 = Object.assign(this.org_value1, this.ebay);
      this.mounted_user();
    }
  },
  //Data:
  data: () => ({
    current_admin_name: "",
    current_admin_versions: [],
    org_value2: {},
    org_value1: {},
    ebay: {
      addressUserModel1: "",
      addressUserModel2: "",
      addressVorname: "",
      addressNachname: "",
      addressStrasse: "",
      addressHausnummer: "",
      addressPlz: "",
      addressOrt: "",
      addressdocumentpannalinputfield1: "",
      addressheading1: "Unter welchem Namen betreiben Sie Ihren ebay-Shop?",
      addressheading: "Wer soll Vertragspartner des Kunden werden?",
      addressheading2:
        "Handelt es sich bei dem Vertragspartner des Kunden um eine natürliche oder juristische Person?",
      offerpannalheading:
        "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insb. hins. des Preises) ",
      offerradio: null,
      conclusioncontractradio1: null,
      conclusioncontractradio2: null,
      conclusioncontractradio3:null,
      conclusioncontractheading1:
        "Kann der Vertragsschluss über eine „Sofort-Kaufen“-Option zu zustande kommen? ",
      conclusioncontractheading3:
        "Kann der Vertrag über ein Warenkorb-System zustande kommen?",
      conclusioncontractheading2:
        "Stellen Sie dem Kunden den Button „sofort bezahlen“ zur Verfügung? ",
      auctionpannalradio1: null,
      auctionpannalradio2: null,
      auctionpannalinputfield: "",
      auctionpannalheading1:
        "Kommt der Vertrag über eine Versteigerung zustande?",
      auctionpannalheading3: "Wie erfolgt die Annahme des Vertragsangebots?",
      auctionpannalheading2:
        "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen? ",
      contracttextpannalradio: null,
      contracttextUserModel: "",
      contracttextpannalinputfield: "",
      contracttextpannalheading1:
        "Erfolgt eine Speicherung des Vertragstextes?",
      contracttextpannalheading2:
        "Wie lange wird der Vertragstext gespeichert?",
      contractcustomerpannalinputfield1: "",
      contractcustomerpannalinputfield2: "",
      contractcustomerpannalinputfield5:"",
      contractcustomerpannalheading1:
        "Wie wird dem Kunden der Vertragstext zugänglich gemacht? ",
      contractcustomerpannalheading2:
        "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies? ",
      contractcustomerpannalheading3:
        "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen? ",
      contractcustomerpannalheading4:
        "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung? ",
      contractcustomerpannalradio1: null,
      contractcustomerpannalinputfield4: "",
      shipcostpannalradio1: null,
      shipcostpannalradio2: null,
      shipcostpannalradio3: null,
      shipcostpannalradio4: null,
      shipcostpannalinputfield: "",
      shipcostpannalheading1:
        "Enthalten die Preise jeweils die gültige gesetzliche Umsatzsteuer? ",
      shipcostpannalheading2:
        "Fallen Liefer- oder Versandkosten an? Wenn ja, wie hoch sind diese? ",
      shipcostpannalheading3:
        "Hat der Kunde im Falle eines Widerrufs die Kosten für eine Rücksendung zu tragen? ",
      shipcostpannalheading4:
        "Wollen Sie die versandten Produkte bis zur vollständigen Zahlung in Ihrem Eigentum behalten?",
      transferpannalradio1: true,
      transferpannalradio2: null,
      transferpannalinputfield: "",
      transferpannalheading2: "Unterliegen Sie speziellen Verhaltenskodizies? ",
      transferpannalheading3:
        "Unternehmenseigene oder sonstige Verhaltenskodizies (Name, Zweck, ggf. Domain zum Text des Verhaltenskodexes)",

      // add new pannal 5
      newpannal5radio: true,
      // add new pannal 6
      newpannal6radio: true,
      addresspannalname: "Vertragspartner",
      offerpannalname: "Vertragsschluss",
      conclusioncontractpannalname: "Bezahlung",
      auctionpannalname: "Eigentumsvorbehalt",
      contracttextpannalname: "Gewährleistung",
      shipcostpannalname: "Schlussbestimmungen",
      contractcustomerpannalname: "​ Europäische Streitschlichtungsplattform",
      pos: [0, 0, 0, 0, 1, 2, 3],
      posP2:[0,0,0,0,0,0,0,0,0,0,0],
      posP3:[0,0,0,0],
      posP7:[1,2]
    },
    localitem: [
      {
        title: "2 Jahre",
        list: "Nein ",
      },
      {
        title: "5 Jahre ",
        list: "Unternehmenseigene oder sonstige Verhaltenskodizies",
      },
      {
        title: "10 Jahre ",
        list: "(Name, Zweck, ggf. Domain zum Text des Verhaltenskodexes)",
      },
      {
        title: "Abweichende Speicherdauer ",
      },
    ],

    addresspannalprogressValue: 0,
    addresspannaliconcolor: "#d8d8d8",
    addresspannalBox: false,

    offerpannalprogressValue: 0,
    offerpannaliconcolor: "#d8d8d8",
    offerpannalBox: false,

    offerdocument1:
      "Die im Rahmen von ebay vorgebrachten Angebote des Anbieters stellen verbindliche Angebote für den Abschluss eines Kaufvertrages dar.",
    offerdocument2:
      "Die im Rahmen von ebay vorgebrachten Angebote des Anbieters stellen unverbindliche Einladungen zur Abgabe eines Angebotes durch den Kunden dar.",
    conclusionpannalprogressValue: 0,
    conclusionpannaliconcolor: "#d8d8d8",
    conclusionpannalBox: false,

    conclusioncontractdocument1:
      "Für den Abschluss des Verträges stehen dem Kunden folgende Möglichkeiten offen:",
    conclusioncontractdocument2:
      "a) Der Kunde kann durch die Betätigung des Buttons „Sofort-Kaufen“ das Angebot des Anbieters direkt annehmen. Ein Kaufvertrag kommt in diesem Fall durch das Anklicken des „Sofort-Kaufen“-Buttons, sowie die anschließende Bestätigung zustande.",
    conclusioncontractdocument3:
      "b) Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der ebay GmbH: <a href= https://www.ebay.de/help/policies/member-behavior-policies/allgemeine-geschftsbedingungen-fr-die-nutzung-der-deutschen-ebaydienste?id=4259",
    conclusioncontractdocument4:
      "c) Sofern der Anbieter die Option „Sofortige Bezahlung“ eröffnet, nimmt der Kunde das Angebot durch die Betätigung des Buttons, sowie den Abschluss des nachfolgenden Zahlungsvorgangs an.",
    conclusioncontractdocument6:
      "a) Der Kunde kann die Artikel in den Warenkorb legen. Die Annahme erfolgt in diesem Fall durch den Abschluss des anschließenden Zahlungsvorgangs.",
    conclusioncontractdocument7:
      "b) Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der ebay GmbH: https://www.ebay.de/help/policies/member-behavior-policies/allgemeine-geschftsbedingungen-fr-die-nutzung-der-deutschen-ebaydienste?id=4259",
    auctionpannaldocument1:
      "Der Kunde nimmt das Angebot des Anbieters durch die Abgabe eines Gebots an. Die Annahme ist dahingehend aufschiebend bedingt, dass der Kunde nach Ablauf der Angebotsdauer Höchstbietender ist. Ein Gebot erlischt, wenn ein anderer Kunde während der Angebotsdauer Höchstbietender ist. ",
    auctionpannaldocument2:
      "Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der ebay GmbH: https://www.ebay.de/help/policies/member-behavior-policies/allgemeine-geschftsbedingungen-fr-die-nutzung-der-deutschen-ebaydienste?id=4259",
    auctionpannaldocument5:
      "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
    // auctionpannaldocument3: "Als Vertragssprache stehen deutsch, ",
    auctionpannaldocument4: "Die Vertragssprache ist Deutsch.",
    auctionpannalprogressValue: 0,
    auctionpannaliconcolor: "#d8d8d8",
    auctionpannalBox: false,

    contracttextpannalprogressValue: 0,
    contracttextpannaliconcolor: "#d8d8d8",
    contracttextpannalBox: false,
    contracttextpannaldocument1:
      "Der Vertragstext wird im Anschluss an den Vertragsschluss vom Anbieter gespeichert.",
    contracttextpannaldocument2:
      "Der Vertragsschluss wird vom Anbieter nicht gespeichert.",

    contractcustomerpannalprogressValue: 0,
    contractcustomerpannaliconcolor: "#d8d8d8",
    contractcustomerpannalBox: false,
    // shipcostpannaldocument1: "3. Die Versandkosten betragen je Bestellung:",
    shipcostpannaldocument2: "Wir liefern versandkostenfrei.",
    shipcostpannaldocument3:
      " Die für die Waren angegebenen Preise enthalten die jeweils gültige gesetzliche Mehrwertsteuer.",
    shipcostpannaldocument4:
      "Aufgrund der Kleinunternehmereigenschaft des Anbieters iSd § 19 UstG enthalten die angegebenen Preise keine Mehrwertsteuer. ",

    shipcostpannalprogressValue: 0,
    shipcostpannaliconcolor: "#d8d8d8",
    shipcostpannalBox: false,

    transferpannaldocument1:
      "Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften. ",
    transferpannaldocument2:
      "Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage . ",
    transferpannaldocument3:
      "Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbes. des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
    transferpannaldocument4:
      "Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
    transferpannaldocument5:
      "Wir unterliegen den folgenden Verhaltenskodizies:",
    transferpannaldocument6:
      "Speziellen Verhaltenskodizies unterliegen wir nicht",
    value: "",
    output: null,
    opacity: 0,
    addressitems: [
      {
        id: 2,
        value: "keine Angabe",
      },
      {
        id: 3,
        value: "Frau",
      },
      {
        id: 4,
        value: "Herr",
      },
    ],
    addressitems2: ["Natürliche Person", "Juristische Person"],
    offeritems: [
      {
        label: "Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    conclusioncontractitems1: [
      {
        label: "Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    conclusioncontractitems2: [
      {
        label: "Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    conclusioncontractitems3: [
      {
        label: "Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    auctionpannalitems1: [
      {
        label: "Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    auctionpannalitems2: [
      {
        label: "Sprache wählen",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Keine weitere Sprache",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    //  contracttextitems:[
    //    {value:"2 Jahre",id:1,},
    //    {value:"5 Jahre",id:2,},
    //    {value:"10 Jahre",id:3,},
    //    {value:"Abweichende Speicherdauer",id:4,},
    //  ],
    contracttextitems: [
      {
        id: 5,
        value: "2 Jahre.",
      },
      {
        id: 6,
        value: "5 Jahre.",
      },
      {
        id: 7,
        value: "10 Jahre.",
      },
      {
        id: 8,
        value: "Abweichende Speicherdauer",
      },
    ],
    contracttextpannalitems: [
      {
        label: "Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    contractcustomerpannalitems1: [
      {
        label:
          "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Sonstiges",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    shipcostpannalitems1: [
      {
        label: "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Kleinunternehmer iSd § 19 UstG",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    shipcostpannalitems2: [
      {
        label: "​Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    shipcostpannalitems3: [
      {
        label: "Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    shipcostpannalitems4: [
      {
        label: "Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    transferpannalitems1: [
      {
        label: "​Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
    ],
    transferpannalitems2: [
      {
        label: "​Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      {
        label: "Nein",
        value: false,
        icon: "mdi-pencil-outline",
      },
    ],
    //  add new  pannal 5 items
    newpannal5items: [
      {
        label: "​Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
    ],
    //  add new  pannal 6 items
    newpannal6items: [
      {
        label: "​Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
    ],
    editheading1: false,
    editheading2: false,
    editheading3: false,
    editheading4: false,
    editheading5: false,
    editheading6: false,
    editheading7: false,
    editmode1: false,
    editmode2: false,
    editmode3a: false,
    editmode3b: false,
    editmode4: false,
    editmode5: null,
    editmode6: false,
    editmode7: null,
    editmode8: false,
    editmode9: null,
    editmode10: false,
    editmode11: null,
    editmode12: false,
    editmode13: null,
    editmode14: false,
    editmode15: false,
    editmode16: false,
    editmode17: null,
    editmode18: false,
    editmode19: null,
    editmode20: false,
    editmode21: false,
    editmode22: false,
    editmode23: null,
    editmode24: false,
    editmode25: false,
    editmode26: null,
    editmode27: false,
    editmode28: null,
    editmode29: false,
    editmode30: null,
    editmode31: false,
    editmode32: null,
    editmode33: null,
    editmode34: null,
    editmode35: null,
    editmode36: false,
    editmode37: null,
    editmode38: false,
    number1: "",
    
  }),
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
  //watch
  watch: {
    pannel1Watcher: function () {
      if(this.ebay.addressUserModel1||
        this.ebay.addressUserModel2||
        this.ebay.addressdocumentpannalinputfield1||
        this.ebay.addressPlz||
        this.ebay.addressOrt||
        this.ebay.addressStrasse||
        this.ebay.addressVorname||
        this.ebay.addressHausnummer||
        this.ebay.addressRechtsform||
        this.ebay.addressFirmenname){
          this.ebay.pos[0] = 1;
          this.pos = this.arrangePos(this.ebay.pos);
      }
    },
    pannel2Watcher: function () {
      if(this.ebay.offerradio === true || this.ebay.offerradio === false || 
        this.ebay.conclusioncontractradio1 === true || this.ebay.conclusioncontractradio1 === false ||
        this.ebay.conclusioncontractradio2 === true || this.ebay.conclusioncontractradio2 === false ||
        this.ebay.conclusioncontractradio3 === true || this.ebay.conclusioncontractradio3 === false ||
         this.ebay.auctionpannalradio1 === true || this.ebay.auctionpannalradio1 === false ||
        this.ebay.auctionpannalradio2 === true || this.ebay.auctionpannalradio2 === false || 
        this.ebay.contracttextpannalradio === true || this.ebay.contracttextpannalradio === false ||
        this.ebay.contracttextpannalinputfield ||
        this.ebay.contractcustomerpannalinputfield1 ||
        this.ebay.contractcustomerpannalinputfield2 ||
        this.ebay.contractcustomerpannalinputfield3 ||
        this.ebay.contractcustomerpannalinputfield5 ||
        this.ebay.contractcustomerpannalradio1 == true || this.ebay.contractcustomerpannalradio1 == false
      ){
        this.ebay.pos[1] = 2;
        this.ebay.pos = this.arrangePos(this.ebay.pos);
      }
      
      if(this.ebay.offerradio === true){
        this.ebay.posP2[0] = 1;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(this.ebay.offerradio === false){
        this.ebay.posP2[0] = 1;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      if(this.ebay.conclusioncontractradio1  === true || this.ebay.conclusioncontractradio3 === true  || this.ebay.conclusioncontractradio2 === true){
        this.ebay.posP2[1] = 2;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(this.ebay.conclusioncontractradio1 === false || this.ebay.conclusioncontractradio3 === false  || this.ebay.conclusioncontractradio2 === false){
        this.ebay.posP2[1] = 0;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
       if(this.ebay.auctionpannalradio1  === true){
        this.ebay.posP2[2] = 3;
        this.ebay.posP2[3] = 4;
        this.ebay.posP2[4] = 5;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(this.ebay.auctionpannalradio1 === false){
        this.ebay.posP2[2] = 0;
        this.ebay.posP2[3] = 0;
        this.ebay.posP2[4] = 0;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
       if(this.ebay.contractcustomerpannalinputfield5){
        this.ebay.posP2[5] = 6;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(!this.ebay.contractcustomerpannalinputfield5){
        this.ebay.posP2[5] = 0;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
       if(this.ebay.auctionpannalradio2  === true){
        this.ebay.posP2[6] = 7;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(this.ebay.auctionpannalradio2 === false){
        this.ebay.posP2[6] = 0;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      if(this.ebay.contracttextpannalradio  === true){
        this.ebay.posP2[7] = 8;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(this.ebay.contracttextpannalradio === false){
        this.ebay.posP2[7] = 8;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      if(this.ebay.contractcustomerpannalinputfield1){
        this.ebay.posP2[8] = 9;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(!this.ebay.contractcustomerpannalinputfield1){
        this.ebay.posP2[8] = 0;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      if(this.ebay.contractcustomerpannalinputfield2){
        this.ebay.posP2[9] = 10;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(!this.ebay.contractcustomerpannalinputfield2){
        this.ebay.posP2[9] = 0;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      if(this.ebay.contractcustomerpannalradio1  === true && this.ebay.conclusioncontractradio1 ===true){
        this.ebay.posP2[11] = 12;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(this.ebay.contractcustomerpannalradio1  === true && this.ebay.conclusioncontractradio3 ===true){
        this.ebay.posP2[10] = 11;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
      else if(this.ebay.contractcustomerpannalradio1 === false){
      this.ebay.posP2[10] = 11;
        this.ebay.posP2[11] = 0;
        this.ebay.posP2 = this.arrangePos(this.ebay.posP2);
      }
    },
    pannel3Watcher: function () {
      if (this.ebay.contractcustomerpannalinputfield4 ||
        this.ebay.shipcostpannalradio1 === true || this.ebay.shipcostpannalradio1 === false || 
        this.ebay.shipcostpannalradio2 === true || this.ebay.shipcostpannalradio2 === false ||
        this.ebay.shipcostpannalradio3 === true || this.ebay.shipcostpannalradio3 === false){
      this.ebay.pos[2] = 3;
      this.ebay.pos = this.arrangePos(this.ebay.pos);
      }
     if(this.ebay.contractcustomerpannalinputfield4){
        this.ebay.posP3[0] = 1;
        this.ebay.posP3 = this.arrangePos(this.ebay.posP3);
      }
      else if(!this.ebay.contractcustomerpannalinputfield4){
        this.ebay.posP3[0] = 0;
        this.ebay.posP3 = this.arrangePos(this.ebay.posP3);
      }

       if(this.ebay.shipcostpannalradio1  === true){
        this.ebay.posP3[1] = 2;
        this.ebay.posP3 = this.arrangePos(this.ebay.posP3);
      }
      else if(this.ebay.shipcostpannalradio1 === false){
        this.ebay.posP3[1] = 2;
        this.ebay.posP3 = this.arrangePos(this.ebay.posP3);
      }

       if(this.ebay.shipcostpannalradio2  === true){
        this.ebay.posP3[2] = 3;
        this.ebay.posP3 = this.arrangePos(this.ebay.posP3);
      }
      else if(this.ebay.shipcostpannalradio2 === false){
        this.ebay.posP3[2] = 3;
        this.ebay.posP3 = this.arrangePos(this.ebay.posP3);
      }

       if(this.ebay.shipcostpannalradio3  === true){
        this.ebay.posP3[3] = 4;
        this.ebay.posP3 = this.arrangePos(this.ebay.posP3);
      }
      else if(this.ebay.shipcostpannalradio3 === false){
        this.ebay.posP3[3] = 0;
        this.ebay.posP3 = this.arrangePos(this.ebay.posP3);
      }
    },
    pannel4Watcher: function () {
      if (this.ebay.shipcostpannalradio4 === true) {
        this.ebay.pos[3] = 4;
        this.ebay.pos = this.arrangePos(this.ebay.pos);
      } else {
        this.ebay.pos[3] = 0;
        this.ebay.pos = this.arrangePos(this.ebay.pos);
      }
    },
    pannel5Watcher: function () {
      if (this.ebay.newpannal5radio === true) {
        this.ebay.pos[4] = 5;
        this.ebay.pos = this.arrangePos(this.ebay.pos);
      } else {
        this.ebay.pos[4] = 0;
        this.ebay.pos = this.arrangePos(this.ebay.pos);
      }
    },
    pannel6Watcher: function () {
      if (this.ebay.newpannal6radio === true) {
        this.ebay.pos[5] = 6;
        this.ebay.pos = this.arrangePos(this.ebay.pos);
      } else {
        this.ebay.pos[5] = 0;
        this.ebay.pos = this.arrangePos(this.ebay.pos);
      }
    },
    pannel7Watcher: function () {
      if (
        this.ebay.transferpannalradio1 === true ||
        this.ebay.transferpannalradio2 === true ||
        this.ebay.transferpannalradio2 === false
      ) {
        this.ebay.pos[6] = 7;
        this.ebay.pos = this.arrangePos(this.ebay.pos);
      } else {
        this.ebay.pos[6] = 0;
        this.ebay.pos = this.arrangePos(this.ebay.pos);
      }
      
      if (this.ebay.transferpannalradio1 === true ) {
          this.ebay.posP7[0] = 1;
          this.ebay.posP7[1] = 2;
        this.ebay.posP7 = this.arrangePos(this.ebay.posP7);
      }
      else if(this.ebay.transferpannalradio1 === false ) {
         this.ebay.posP7[0] = 0;
          this.ebay.posP7[1] = 0;
        this.ebay.posP7 = this.arrangePos(this.ebay.posP7);
      }

       if (this.ebay.transferpannalradio2 === true ) {
          this.ebay.posP7[2] = 3;
        this.ebay.posP7 = this.arrangePos(this.ebay.posP7);
      }
      else if(this.ebay.transferpannalradio2 === false ) {
         this.ebay.posP7[2] = 3;
        this.ebay.posP7 = this.arrangePos(this.ebay.posP7);
      }
    },
    addresspannalprogress: function () {
      var addresspannalfields = [];
      addresspannalfields.push(this.ebay.addressStrasse);
      addresspannalfields.push(this.ebay.addressHausnummer);
      addresspannalfields.push(this.ebay.addressPlz);
      addresspannalfields.push(this.ebay.addressOrt);
      addresspannalfields.push(this.ebay.addressdocumentpannalinputfield1);
      if (this.ebay.addressUserModel1 === "Natürliche Person") {
        addresspannalfields.push(this.ebay.addressVorname);
        addresspannalfields.push(this.ebay.addressNachname);
      } else if (this.ebay.addressUserModel1 === "Juristische Person") {
        addresspannalfields.push(this.ebay.addressFirmenname);
        addresspannalfields.push(this.ebay.addressRechtsform);
      }
      this.addresspannalprogressValue = this.complete_fields_checker(
        addresspannalfields
      );
    },
    offerpannalprogress: function () {
      var offerpannalfields = [];
      offerpannalfields.push(this.ebay.offerradio);
      offerpannalfields.push(this.ebay.conclusioncontractradio1);
      offerpannalfields.push(this.ebay.conclusioncontractradio3);
      offerpannalfields.push(this.ebay.conclusioncontractradio2);
      offerpannalfields.push(this.ebay.auctionpannalradio1);
      offerpannalfields.push(this.ebay.contractcustomerpannalinputfield5);
      offerpannalfields.push(this.ebay.auctionpannalradio2);
      offerpannalfields.push(this.ebay.contracttextpannalradio);
      offerpannalfields.push(this.ebay.contractcustomerpannalinputfield1);
      offerpannalfields.push(this.ebay.contractcustomerpannalinputfield2);
      offerpannalfields.push(this.ebay.contractcustomerpannalradio);
      this.offerpannalprogressValue = this.complete_fields_checker(
        offerpannalfields
      );
    },
    conclusionpannalprogress: function () {
      var conclusionpannalfields = [];
      conclusionpannalfields.push(this.ebay.contractcustomerpannalinputfield4);
      conclusionpannalfields.push(this.ebay.shipcostpannalradio1);
      conclusionpannalfields.push(this.ebay.shipcostpannalradio2);
      conclusionpannalfields.push(this.ebay.shipcostpannalradio3);
      this.conclusionpannalprogressValue = this.complete_fields_checker(
        conclusionpannalfields
      );
    },
    auctionpannalprogress: function () {
      var auctionpannalfields = [];
      auctionpannalfields.push(this.ebay.shipcostpannalradio4);
      this.auctionpannalprogressValue = this.complete_fields_checker(
        auctionpannalfields
      );
    },
    contracttextpannalprogress: function () {
      var contracttextpannalfields = [];
      contracttextpannalfields.push(this.ebay.newpannal5radio);
      this.contracttextpannalprogressValue = this.complete_fields_checker(
        contracttextpannalfields
      );
    },
    contractcustomerpannalprogress: function () {
      var contractcustomerpannalfields = [];
      contractcustomerpannalfields.push(this.ebay.newpannal6radio);
      this.contractcustomerpannalprogressValue = this.complete_fields_checker(
        contractcustomerpannalfields
      );
    },
    shipcostpannalprogress: function () {
      var shipcostpannalfields = [];
      shipcostpannalfields.push(this.ebay.transferpannalradio1);
      shipcostpannalfields.push(this.ebay.transferpannalradio2);
      this.shipcostpannalprogressValue = this.complete_fields_checker(
        shipcostpannalfields
      );
    },
  },
  //methods
  methods: {
    newlineDescription(item) {
      item = `${item}\n`;
      console.log(item);
    },
    mounted_user(){
      var val = JSON.parse(
        localStorage.getItem("contracts of " + store.state.current_user_name)
      );
      if (val != null) {
        if(val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")] !== undefined){
            this.ebay = JSON.parse(
            val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")]
          );
        }
        else{
         this.preselectoption();
        }
      }
      else{
        this.preselectoption();
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
    let b = JSON.stringify(this.ebay);
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
      // store.commit("updatecontractpercentage", [
      //   a1,
      //   store.state.current_admin_name,
      //   value,
      // ]);
      store.commit("updatecontractpercentageingroups", [
        a1,
        store.state.current_admin_name,
        value,
      ]);
       var groups_by_specific_admin = store.getters.checkGroupByAdminName(store.state.current_admin_name);
            this.$store.commit("setcurrentadmingroups",groups_by_specific_admin);
      store.commit("changeiseditedrecentcontracts", [
        a1,
        store.state.current_admin_name,
      ]);
    },
    updatecontractpercentage_admin() {
      var sum_array = [
        this.addresspannalprogressValue,
        this.offerpannalprogressValue,
        this.conclusionpannalprogressValue,
        this.auctionpannalprogressValue,
        this.contracttextpannalprogressValue,
        this.contractcustomerpannalprogressValue,
        this.shipcostpannalprogressValue,
      ];
      var total_sum = 7 + 10 + 4 + 1 + 1 + 1 + 2;
      var obt_sum = 0;
      for (var i = 0; i < sum_array.length; i++) {
        obt_sum = obt_sum + sum_array[i];
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
            this.ebay = JSON.parse(
            val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")]
          );
        }
        else{
         this.preselectoption();
        }
      }
      else{
        this.preselectoption();
      }
    },
    preselectoption(){
      var contracttextpannalfields = [];
      contracttextpannalfields.push(this.ebay.newpannal5radio)
      this.contracttextpannalprogressValue= this.complete_fields_checker(contracttextpannalfields);   
      var contractcustomerpannalfields = [];
      contractcustomerpannalfields.push(this.ebay.newpannal6radio)
      this.contractcustomerpannalprogressValue= this.complete_fields_checker(contractcustomerpannalfields);
       var shipcostpannalfields = [];
      shipcostpannalfields.push(this.ebay.transferpannalradio1);
      shipcostpannalfields.push(this.ebay.transferpannalradio2);
      this.shipcostpannalprogressValue = this.complete_fields_checker(
        shipcostpannalfields
      );
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

      let b = JSON.stringify(this.ebay);
      console.log("GO");
      if (!(a1 + "-" + a2 in val)) {
        this.create_copy_of_contract_when_selected_specific_condition_admin();
      }
      //console.log(this.Amazon);
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
          fs.writeFileSync(dir + "/" +  a1 +
              "-" +
              a2 +
              "-" +
              store.state.current_admin_name +".png",img.toPNG(),{encoding:'utf8',flag:'w'})
        });
      localStorage.removeItem("contract_org_name");
      localStorage.removeItem("current_contract_title");
      localStorage.removeItem("current_contract_group_title");
    },
    contractsdataforadmin() {
      var admin_name = store.state.current_admin_name;
      var data = localStorage.getItem("contracts of " + admin_name);
      console.log(admin_name);
      console.log(data);
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFile("./" + admin_name + ".json", encrypteddata, function () {});
    },
    arrangePos(arr1) {
      let count = 0;
      let arrIn = [];
      let newArr = [];
      let returnArr = [];

      for (var uu = 0; uu < arr1.length; uu++) {
        returnArr.push(0);
      }

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
        this.addresspannalBox = true;
        this.value = "14";
        this.addresspannalnumber = "1/7";
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
        this.auctionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
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
        this.auctionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
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
        this.conclusionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
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
        this.conclusionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
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
        this.conclusionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
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
        this.conclusionpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
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
    ...mapState(["help", "edit"]),
    pannel1Watcher: function () {
      return (
        this.ebay.addressUserModel1,
        this.ebay.addressUserModel2,
        this.ebay.addressdocumentpannalinputfield1,
        this.ebay.addressPlz,
        this.ebay.addressOrt,
        this.ebay.addressStrasse,
        this.ebay.addressVorname,
        this.ebay.addressHausnummer,
        this.ebay.addressRechtsform,
        this.ebay.addressFirmenname,
        // this.ebay.addressNachname  ,
        new Date()
      );

      // return this.ebay.addressdocumentpannalinputfield1 , new Date();
      // return this.ebay.addressPlz , new Date();
    },
    pannel2Watcher: function () {
      return (
        this.ebay.offerradio,
        this.ebay.conclusioncontractradio1,
        this.ebay.conclusioncontractradio2,
        this.ebay.conclusioncontractradio3,
        this.ebay.auctionpannalradio1,
        this.ebay.auctionpannalradio2,
        this.ebay.contracttextpannalradio,
        this.ebay.contracttextpannalinputfield,
        this.ebay.contractcustomerpannalinputfield1,
        this.ebay.contractcustomerpannalinputfield2,
        this.ebay.contractcustomerpannalinputfield3,
        this.ebay.contractcustomerpannalinputfield5,
        this.ebay.contractcustomerpannalradio1,
        new Date()
      );
    },
    pannel3Watcher: function () {
      return (
        this.ebay.contractcustomerpannalinputfield4,
        this.ebay.shipcostpannalradio1,
        this.ebay.shipcostpannalradio2,
        this.ebay.shipcostpannalradio3,
        new Date()
      );
    },
    pannel4Watcher: function () {
      return this.ebay.shipcostpannalradio4, new Date();
    },
    pannel5Watcher: function () {
      return this.ebay.newpannal5radio, new Date();
    },
    pannel6Watcher: function () {
      return this.ebay.newpannal6radio, new Date();
    },
    pannel7Watcher: function () {
      return (
        this.ebay.transferpannalradio1,
        this.ebay.transferpannalradio2,
        new Date()
      );
    },
    addresspannalprogress: function () {
      return (
        this.ebay.addressVorname,
        this.ebay.addressNachname,
        this.ebay.addressStrasse,
        this.ebay.addressHausnummer,
        this.ebay.addressPlz,
        this.ebay.addressOrt,
        this.ebay.addressdocumentpannalinputfield1,
        this.ebay.addressFirmenname,
        this.ebay.addressRechtsform,
        new Date()
      );
    },

    offerpannalprogress: function () {
      return (
        this.ebay.offerradio,
        this.ebay.conclusioncontractradio1,
        this.ebay.conclusioncontractradio3,
        this.ebay.conclusioncontractradio2,
        this.ebay.auctionpannalradio1,
        this.ebay.contractcustomerpannalinputfield5,
        this.ebay.auctionpannalradio2,
        this.ebay.contracttextpannalradio,
        this.ebay.contractcustomerpannalinputfield1,
        this.ebay.contractcustomerpannalinputfield2,
        this.ebay.contractcustomerpannalradio,
        new Date()
      );
    },
    conclusionpannalprogress: function () {
      return (
        this.ebay.contractcustomerpannalinputfield4,
        this.ebay.shipcostpannalradio1,
        this.ebay.shipcostpannalradio2,
        this.ebay.shipcostpannalradio3,
        new Date()
      );
    },
    auctionpannalprogress: function () {
      return this.ebay.shipcostpannalradio4, new Date();
    },
    contracttextpannalprogress: function () {
      return this.ebay.newpannal5radio, new Date();
    },
    contractcustomerpannalprogress: function () {
      return this.ebay.newpannal6radio, new Date();
    },
    shipcostpannalprogress: function () {
      return (
        this.ebay.transferpannalradio1,
        this.ebay.transferpannalradio2,
        new Date()
      );
    },
  },
};
</script>

<style scoped >

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

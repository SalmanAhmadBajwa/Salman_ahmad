<!-- @format -->

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
        style="
          min-height: 120vh;
          display: flex;
          width: 100vw;
          background-color: #d8d8d8;
        "
      >
        <div
          style="
            width: 45%;
            margin-right: 5px;
            position: relative;
            background-color: #f6f6f6;
          "
        >
          <v-card
            elevation="0"
            style="background-color: #f6f6f6; min-height: 120vh"
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
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="addresspannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                    <v-btn
                      class=""
                      @click="editheading1 = !editheading1"
                      icon
                      v-if="edit"
                    >
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
                        newlineDescription(shopify.addresspannalname)
                      "
                      v-model="shopify.addresspannalname"
                      @keyup.enter.exact="editheading1 = false"
                    >
                    </v-textarea>
                    <span v-else
                      ><strong>{{
                        shopify.addresspannalname | truncateEnd(36, "...")
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
                        {{ addresspannalprogressValue }} / 6
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
                        {{ addresspannalprogressValue }} / 6
                      </p>
                    </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div style="display: flex">
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
                        newlineDescription(shopify.addressheading)
                      "
                      v-model="shopify.addressheading"
                      @keyup.enter.exact="editmode1 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.addressheading }}
                    </p>
                  </div>
                  <v-select
                    v-model="shopify.addressUserModel"
                    :items="addressitems"
                    return-object
                    item-text="value"
                    item-value="id"
                    dense
                    color="#FFA300"
                    :menu-props="{ bottom: true, offsetY: true }"
                    outlined
                    rounded
                  ></v-select>
                  <div class="row" style="margin-top: -12px">
                    <div class="col-5">
                      <v-text-field
                        rounded
                        dense
                        clearable
                        outlined
                        color="#FFA300"
                        label="Vorname"
                        v-model="shopify.addressVorname"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-7">
                      <v-text-field
                        rounded
                        dense
                        clearable
                        outlined
                        color="#FFA300"
                        label="Nachname"
                        v-model="shopify.addressNachname"
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
                        color="#FFA300"
                        label="Strasse"
                        v-model="shopify.addressStrasse"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-4">
                      <v-text-field
                        rounded
                        dense
                        clearable
                        outlined
                        color="#FFA300"
                        label="Hausnummer"
                        v-model="shopify.addressHausnummer"
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <div class="row" style="margin-top: -12px">
                    <div class="col-3">
                      <v-text-field
                        input
                        type="number"
                        onkeydown="return event.keyCode !== 69"
                        rounded
                        dense
                        clearable
                        color="#FFA300"
                        outlined
                        label="PLZ"
                        v-model="shopify.addressPlz"
                      >
                      </v-text-field>
                    </div>
                    <div class="col-9">
                      <v-text-field
                        rounded
                        dense
                        clearable
                        outlined
                        color="#FFA300"
                        label="Ort"
                        v-model="shopify.addressOrt"
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
                    <v-btn
                      class=""
                      @click="editheading2 = !editheading2"
                      icon
                      v-if="edit"
                    >
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
                        newlineDescription(shopify.offerpannalname)
                      "
                      v-model="shopify.offerpannalname"
                      @keyup.enter.exact="editheading2 = false"
                    >
                    </v-textarea>
                    <span v-else
                      ><strong>{{
                        shopify.offerpannalname | truncateEnd(36, "...")
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
                        {{ offerpannalprogressValue }} / 6
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
                        {{ offerpannalprogressValue }} / 6
                      </p>
                    </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div style="display: flex" class="mb-3">
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
                        newlineDescription(shopify.offerpannalheading)
                      "
                      v-model="shopify.offerpannalheading"
                      @keyup.enter.exact="editmode2 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.offerpannalheading }}
                    </p>
                  </div>
                  <div
                    class="mt-n3"
                    style="display: flex"
                    v-for="(item, index) in offeritems"
                    :key="index"
                  >
                    <v-btn
                      @click="editmode3 = index"
                      style="margin-top: -0.45em"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">{{ item.icon }}</v-icon>
                    </v-btn>
                    <v-radio-group v-model="shopify.offerradio">
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
                      @keydown.enter.shift.exact="
                        newlineDescription(item.label)
                      "
                      @keyup.enter.exact="editmode3 = null"
                    ></v-textarea>
                    <p v-else class="mt-1" style="color: grey">
                      {{ item.label }}
                    </p>
                  </div>
                  <!-- add original pannal 3 -->
                  <div style="display: flex" class="mt-n1 mb-3">
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
                        newlineDescription(shopify.languagepannalheading)
                      "
                      v-model="shopify.languagepannalheading"
                      @keyup.enter.exact="editmode4 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.languagepannalheading }}
                    </p>
                  </div>
                  <div
                    class="mt-n3"
                    style="display: flex"
                    v-for="(item, index) in languagepannalitems"
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
                    <v-radio-group v-model="shopify.languagepannalradio">
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
                  <v-text-field
                    v-if="shopify.languagepannalradio"
                    rounded
                    dense
                    clearable
                    outlined
                    color="#FFA300"
                    class="mt-n3 mb-2"
                    label="Sprache auswählen"
                    v-model="shopify.languagepannalinputfield"
                  >
                  </v-text-field>
                  <!-- add original pannal 4 -->
                  <div style="display: flex" class="mt-n2 mb-3">
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
                      color="#FFA300"
                      auto-grow
                      :rows="1"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(shopify.contracttextpannalheading1)
                      "
                      v-model="shopify.contracttextpannalheading1"
                      @keyup.enter.exact="editmode6 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.contracttextpannalheading1 }}
                    </p>
                  </div>

                  <div
                    class="mt-n3"
                    style="display: flex"
                    v-for="(item, index) in contracttextpannalitems"
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
                    <v-radio-group v-model="shopify.contracttextpannalradio">
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
                  <div style="display: flex" class="mb-3 mt-n2">
                    <v-btn
                      class="mt-n2"
                      @click="editmode8 = !editmode8"
                      icon
                      v-if="edit & shopify.contracttextpannalradio"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                      v-if="editmode8"
                      dense
                      outlined
                      color="#FFA300"
                      auto-grow
                      :rows="1"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(shopify.contracttextpannalheading2)
                      "
                      v-model="shopify.contracttextpannalheading2"
                      @keyup.enter.exact="editmode8 = false"
                    >
                    </v-textarea>
                    <p
                      style="word-break: break-word"
                      v-if="shopify.contracttextpannalradio && !editmode8"
                    >
                      {{ shopify.contracttextpannalheading2 }}
                    </p>
                  </div>
                  <v-text-field
                    v-if="shopify.contracttextpannalradio"
                    rounded
                    dense
                    clearable
                    outlined
                    color="#FFA300"
                    class=""
                    label="Dauer auswählen"
                    v-model="shopify.contracttextpannalinputfield"
                  >
                  </v-text-field>

                  <!-- add original pannal 5 -->
                  <div style="display: flex" class="mt-n2">
                    <v-btn
                      class="mt-n2"
                      @click="editmode9 = !editmode9"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                      v-if="editmode9"
                      dense
                      outlined
                      auto-grow
                      :rows="1"
                      color="#FFA300"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(
                          shopify.contractcustomerpannalheading1
                        )
                      "
                      v-model="shopify.contractcustomerpannalheading1"
                      @keyup.enter.exact="editmode9 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.contractcustomerpannalheading1 }}
                    </p>
                  </div>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    color="#FFA300"
                    outlined
                    v-model="shopify.contractcustomerpannalinputfield1"
                  >
                  </v-text-field>
                  <div style="display: flex" class="mt-n2">
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
                        newlineDescription(
                          shopify.contractcustomerpannalheading2
                        )
                      "
                      v-model="shopify.contractcustomerpannalheading2"
                      @keyup.enter.exact="editmode10 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.contractcustomerpannalheading2 }}
                    </p>
                  </div>
                  <v-text-field
                    rounded
                    dense
                    color="#FFA300"
                    clearable
                    outlined
                    v-model="shopify.contractcustomerpannalinputfield2"
                  >
                  </v-text-field>
                  <div style="display: flex" class="mt-n2 mb-2">
                    <v-btn
                      class="mt-n2"
                      @click="editmode11 = !editmode11"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                      v-if="editmode11"
                      color="#FFA300"
                      dense
                      outlined
                      auto-grow
                      :rows="1"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(
                          shopify.contractcustomerpannalheading3
                        )
                      "
                      v-model="shopify.contractcustomerpannalheading3"
                      @keyup.enter.exact="editmode11 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.contractcustomerpannalheading3 }}
                    </p>
                  </div>

                  <div
                    class="mt-n3"
                    style="display: flex"
                    v-for="(item, index) in contractcustomerpannalitems2"
                    :key="index"
                  >
                    <v-btn
                      @click="editmode12 = index"
                      style="margin-top: -0.45em"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">{{ item.icon }}</v-icon>
                    </v-btn>
                    <v-radio-group
                      v-model="shopify.contractcustomerpannalradio2"
                    >
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
                      @keydown.enter.shift.exact="
                        newlineDescription(item.label)
                      "
                      @keyup.enter.exact="editmode12 = null"
                    ></v-textarea>
                    <p v-else class="mt-1" style="color: grey">
                      {{ item.label }}
                    </p>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal3 -->

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
                    <v-btn
                      class=""
                      @click="editheading3 = !editheading3"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
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
                        newlineDescription(shopify.languagepannalname)
                      "
                      v-model="shopify.languagepannalname"
                      @keyup.enter.exact="editheading3 = false"
                    >
                    </v-textarea>
                    <span v-else
                      ><strong>{{
                        shopify.languagepannalname | truncateEnd(36, "...")
                      }}</strong></span
                    >
                  </div>
                  <div
                    style="position: absolute; right: 15px; top: 13px"
                    v-if="languagepannalprogressValue === 0"
                  >
                    <v-chip
                      class=""
                      color="#606060"
                      style="width: 7em; height: 1.8em"
                      small
                    >
                      <p class="pt-4 pl-8" style="color: white">
                        {{ languagepannalprogressValue }} / 4
                      </p>
                    </v-chip>
                  </div>

                  <div
                    style="position: absolute; right: 15px; top: 13px"
                    v-if="languagepannalprogressValue !== 0"
                  >
                    <v-chip
                      class=""
                      color="#ffa300"
                      style="width: 7em; height: 1.8em"
                      small
                    >
                      <p class="pt-4 pl-8" style="color: white">
                        {{ languagepannalprogressValue }} / 4
                      </p>
                    </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- add originnal pannal 6 some to new pannal 3 -->
                  <!-- add contractcustomer -->
                  <div style="display: flex" class="mt-n2">
                    <v-btn
                      class="mt-n2"
                      @click="editmode13 = !editmode13"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-textarea
                      v-if="editmode13"
                      dense
                      outlined
                      auto-grow
                      :rows="1"
                      color="#FFA300"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(
                          shopify.contractcustomerpannalheading4
                        )
                      "
                      v-model="shopify.contractcustomerpannalheading4"
                      @keyup.enter.exact="editmode13 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.contractcustomerpannalheading4 }}
                    </p>
                  </div>
                  <v-text-field
                    rounded
                    dense
                    clearable
                    outlined
                    color="#FFA300"
                    v-model="shopify.contractcustomerpannalinputfield4"
                  >
                  </v-text-field>
                  <div style="display: flex" class="mt-n2 mb-2">
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
                      color="#FFA300"
                      :rows="1"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(shopify.shipcostpannalheading1)
                      "
                      v-model="shopify.shipcostpannalheading1"
                      @keyup.enter.exact="editmode14 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.shipcostpannalheading1 }}
                    </p>
                  </div>

                  <div
                    class="mt-n3"
                    style="display: flex"
                    v-for="(item, index) in shipcostpannalitems1"
                    :key="index"
                  >
                    <v-btn
                      @click="editmode15 = index"
                      style="margin-top: -0.45em"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">{{ item.icon }}</v-icon>
                    </v-btn>
                    <v-radio-group v-model="shopify.shipcostpannalradio1">
                      <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                    <v-textarea
                      v-if="editmode15 == index"
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
                      @keyup.enter.exact="editmode15 = null"
                    ></v-textarea>
                    <p v-else class="mt-1" style="color: grey">
                      {{ item.label }}
                    </p>
                  </div>
                  <div style="display: flex" class="mt-n2 mb-3">
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
                      color="#FFA300"
                      outlined
                      auto-grow
                      :rows="1"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(shopify.shipcostpannalheading2)
                      "
                      v-model="shopify.shipcostpannalheading2"
                      @keyup.enter.exact="editmode16 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.shipcostpannalheading2 }}
                    </p>
                  </div>

                  <div
                    class="mt-n3"
                    style="display: flex"
                    v-for="(item, index) in shipcostpannalitems2"
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
                    <v-radio-group v-model="shopify.shipcostpannalradio2">
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
                    v-if="shopify.shipcostpannalradio2"
                    rounded
                    dense
                    clearable
                    outlined
                    color="#FFA300"
                    class="mt-n3"
                    label="Höhe auswählen"
                    v-model="shopify.shipcostpannalinputfield"
                  >
                  </v-text-field>
                  <div style="display: flex" class="mt-n2 mb-2">
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
                      color="#FFA300"
                      :rows="1"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(shopify.shipcostpannalheading3)
                      "
                      v-model="shopify.shipcostpannalheading3"
                      @keyup.enter.exact="editmode18 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.shipcostpannalheading3 }}
                    </p>
                  </div>
                  <div
                    class="mt-n3"
                    style="display: flex"
                    v-for="(item, index) in shipcostpannalitems3"
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
                    <v-radio-group v-model="shopify.shipcostpannalradio3">
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
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal4 -->

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
                    <v-btn
                      class=""
                      @click="editheading4 = !editheading4"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
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
                        newlineDescription(shopify.contracttextpannalname)
                      "
                      v-model="shopify.contracttextpannalname"
                      @keyup.enter.exact="editheading4 = false"
                    >
                    </v-textarea>
                    <span v-else
                      ><strong>{{
                        shopify.contracttextpannalname | truncateEnd(36, "...")
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
                  <!-- new pannal 4 from taking original  pannal 6 some  -->
                  <div style="display: flex" class="mt-n2 mb-2">
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
                      color="#FFA300"
                      auto-grow
                      :rows="1"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(shopify.shipcostpannalheading4)
                      "
                      v-model="shopify.shipcostpannalheading4"
                      @keyup.enter.exact="editmode20 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.shipcostpannalheading4 }}
                    </p>
                  </div>
                  <div
                    class="mt-n3"
                    style="display: flex"
                    v-for="(item, index) in shipcostpannalitems4"
                    :key="index"
                  >
                    <v-btn
                      @click="editmode21 = index"
                      style="margin-top: -0.45em"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">{{ item.icon }}</v-icon>
                    </v-btn>
                    <v-radio-group v-model="shopify.shipcostpannalradio4">
                      <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                    <v-textarea
                      v-if="editmode21 == index"
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
                      @keyup.enter.exact="editmode21 = null"
                    ></v-textarea>
                    <p v-else class="mt-1" style="color: grey">
                      {{ item.label }}
                    </p>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal5 -->

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
                    <v-btn
                      class=""
                      @click="editheading5 = !editheading5"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
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
                        newlineDescription(shopify.contractcustomerpannalname)
                      "
                      v-model="shopify.contractcustomerpannalname"
                      @keyup.enter.exact="editheading5 = false"
                    >
                    </v-textarea>
                    <span v-else
                      ><strong>{{
                        shopify.contractcustomerpannalname
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
                  <!-- add new pannal 5 -->

                  <!-- <v-radio-group v-model="shopify.newpannal5radio" class="mt-2">
                      <v-row   v-for="(item,index) in newpannal5items" :key="index" class="">
                        <v-col  class="" style="display:flex;">
                      <v-btn 
                   @click="editmode22 = index"
                   class=""   style="margin-top:-0.9em" icon v-if="edit">
                      <v-icon  size="19">{{item.icon}}</v-icon>
                    </v-btn>
                      <v-radio
                        color="#FFA300"
                        class="mt-n5"
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                      <v-textarea
                    v-if="editmode22 == index"
                    dense
                    auto-grow
                    outlined
                    :rows="1"
                    class="mt-n5"
                    v-model="item.label"
                     @keydown.enter.exact.prevent
                     @keydown.enter.shift.exact="newlineDescription(item.label)"
                    @keyup.enter.exact="editmode22 = null"
                     ></v-textarea>
                      <p v-else class="mt-n2" style="color:grey;">{{item.label}}</p>
                      </v-col>
                      </v-row>
                    </v-radio-group> -->
                  <div class="mt-3">
                    <div
                      class="mt-n3"
                      style="display: flex"
                      v-for="(item, index) in newpannal5items"
                      :key="index"
                    >
                      <v-btn
                        @click="editmode22 = index"
                        style="margin-top: -0.45em"
                        icon
                        v-if="edit"
                      >
                        <v-icon size="19">{{ item.icon }}</v-icon>
                      </v-btn>
                      <v-radio-group v-model="shopify.newpannal5radio">
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
                        @keydown.enter.shift.exact="
                          newlineDescription(item.label)
                        "
                        @keyup.enter.exact="editmode22 = null"
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
                    <v-btn
                      class=""
                      @click="editheading6 = !editheading6"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
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
                        newlineDescription(shopify.shipcostpannalname)
                      "
                      v-model="shopify.shipcostpannalname"
                      @keyup.enter.exact="editheading6 = false"
                    >
                    </v-textarea>
                    <span v-else
                      ><strong>{{
                        shopify.shipcostpannalname | truncateEnd(36, "...")
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
                        {{ shipcostpannalprogressValue }} / 1
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
                        {{ shipcostpannalprogressValue }} / 1
                      </p>
                    </v-chip>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- add new pannal 6 -->

                  <div class="mt-3">
                    <div
                      class="mt-n3"
                      style="display: flex"
                      v-for="(item, index) in newpannal6items"
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
                      <v-radio-group v-model="shopify.newpannal6radio">
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
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <!-- pannal7 -->

              <v-expansion-panel
                id="transferpannalid"
                style="
                  border-radius: 13px;
                  margin-bottom: 25px;
                  max-width: 42vw;
                "
              >
                <v-expansion-panel-header @click="transferpannalchangevalue()">
                  <template v-slot:actions>
                    <v-icon></v-icon>
                  </template>
                  <div style="padding-left: 2%">
                    <v-icon
                      :color="transferpannaliconcolor"
                      style="font-size: 10px"
                      >mdi-checkbox-blank-circle</v-icon
                    >
                    <v-btn
                      class=""
                      @click="editheading7 = !editheading7"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">mdi-pencil-outline</v-icon>
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
                        newlineDescription(shopify.transferpannalname)
                      "
                      v-model="shopify.transferpannalname"
                      @keyup.enter.exact="editheading7 = false"
                    >
                    </v-textarea>
                    <span v-else
                      ><strong>{{
                        shopify.transferpannalname | truncateEnd(36, "...")
                      }}</strong></span
                    >
                  </div>
                  <div
                    style="position: absolute; right: 15px; top: 13px"
                    v-if="transferpannalprogressValue === 0"
                  >
                    <v-chip
                      class=""
                      color="#606060"
                      style="width: 7em; height: 1.8em"
                      small
                    >
                      <p class="pt-4 pl-8" style="color: white">
                        {{ transferpannalprogressValue }} / 1
                      </p>
                    </v-chip>
                  </div>

                  <div
                    style="position: absolute; right: 15px; top: 13px"
                    v-if="transferpannalprogressValue !== 0"
                  >
                    <v-chip
                      class=""
                      color="#ffa300"
                      style="width: 7em; height: 1.8em"
                      small
                    >
                      <p class="pt-4 pl-8" style="color: white">
                        {{ transferpannalprogressValue }} / 1
                      </p>
                    </v-chip>
                  </div>
                  <!-- <div
                    v-bind:class="[
                      transferpannalBox
                        ? 'transferpannalBoxActive'
                        : 'transferpannalBoxDeActive',
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
                      {{ transferpannalprogressValue }}
                    </p> -->
                  <!-- </div> -->
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div style="display: flex" class="mt-n1 mb-2">
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
                      color="#FFA300"
                      auto-grow
                      :rows="1"
                      @keydown.enter.exact.prevent
                      @keydown.enter.shift.exact="
                        newlineDescription(shopify.transferpannalheading2)
                      "
                      v-model="shopify.transferpannalheading2"
                      @keyup.enter.exact="editmode24 = false"
                    >
                    </v-textarea>
                    <p v-else style="word-break: break-word">
                      {{ shopify.transferpannalheading2 }}
                    </p>
                  </div>

                  <div
                    class="mt-n3"
                    style="display: flex"
                    v-for="(item, index) in transferpannalitems2"
                    :key="index"
                  >
                    <v-btn
                      @click="editmode25 = index"
                      style="margin-top: -0.45em"
                      icon
                      v-if="edit"
                    >
                      <v-icon size="19">{{ item.icon }}</v-icon>
                    </v-btn>
                    <v-radio-group v-model="shopify.transferpannalradio2">
                      <v-radio
                        color="#FFA300"
                        class=""
                        :rules="rules"
                        :value="item.value"
                      ></v-radio>
                    </v-radio-group>
                    <v-textarea
                      v-if="editmode25 == index"
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
                      @keyup.enter.exact="editmode25 = null"
                    ></v-textarea>
                    <p v-else class="mt-1" style="color: grey">
                      {{ item.label }}
                    </p>
                  </div>
                  <v-text-field
                    v-if="shopify.transferpannalradio2"
                    rounded
                    dense
                    clearable
                    outlined
                    color="#FFA300"
                    label="Verhaltenskodizies"
                    v-model="shopify.transferpannalinputfield"
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

        <div
          style="width: 55%; position: relative; background-color: #ffffff"
          id="printme"
        >
          <v-card
            elevation="0"
            style="background-color: #ffffff; min-height: 120vh"
          >
            <!-- <v-btn class="mt-13 ml-14" @click ="test1()">ghghjg</v-btn> -->

            <!-- for pannal 1 -->
            <v-list>
              <v-list-item>
                <v-list-item-content
                  style="
                        margin-right: 20mm;
                        padding-left: 20mm; !important;
                        margin-top: 2%;
                      "
                >
                  <!-- addresspannal 1-->
                  <p
                    v-if="shopify.addressUserModel"
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
                    v-if="
                      shopify.addressUserModel ||
                      shopify.addressPlz ||
                      shopify.addressOrt ||
                      shopify.addressStrasse ||
                      shopify.addressHausnummer ||
                      shopify.addressVorname ||
                      shopify.addressNachname
                    "
                    style="
                      text-align: center;
                      font-weight: 700;
                      font-size: 16px;
                    "
                  >
                    <strong
                      >§{{ shopify.pos[0] }}<br />
                      Vertragspartner</strong
                    >
                  </p>
                  <p
                    v-if="shopify.addressUserModel"
                    style="
                      word-break: break-word;
                      text-align: left;
                      margin-top: 1%;
                    "
                  >
                    {{ addressdocumentheading2 }}
                    {{ addressdocumentheading3 }}
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
                        shopify.addressUserModel.value !== "keine Angabe"
                          ? shopify.addressUserModel.value
                          : ""
                      }}
                      {{ shopify.addressVorname }}
                      {{ shopify.addressNachname }}</strong
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
                      >{{ shopify.addressStrasse }}
                      {{ shopify.addressHausnummer }}</strong
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
                      >{{ shopify.addressPlz }} {{ shopify.addressOrt }}</strong
                    >
                  </p>
                  <!-- starting  combine original pannal 2,3,4,5 -->
                  <!-- offerpannal 2-->
                  <p
                    v-if="
                      shopify.offerradio ||
                      shopify.offerradio === false ||
                      shopify.languagepannalradio ||
                      shopify.languagepannalradio === false ||
                      shopify.languagepannalinputfield ||
                      shopify.contracttextpannalradio ||
                      shopify.contracttextpannalradio === false ||
                      shopify.contracttextpannalinputfield ||
                      shopify.contractcustomerpannalinputfield1 ||
                      shopify.contractcustomerpannalinputfield2 ||
                      shopify.contractcustomerpannalradio2
                    "
                    style="
                      text-align: center;
                      margin-top: 0.5%;
                      font-size: 16px;
                    "
                  >
                    <br /><br /><br />
                    <strong
                      >§{{ shopify.pos[1] }}<br />
                      Vertragsschluss</strong
                    >
                  </p>
                  <p
                    v-if="shopify.offerradio"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[0] }}.{{ offerdocument1 }}
                  </p>
                  <p
                    v-if="shopify.offerradio"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[1] }}.{{ offerdocument2 }}
                  </p>
                  <p
                    v-if="shopify.offerradio"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[2] }}.{{ offerdocument3 }}
                  </p>
                  <p
                    v-if="shopify.offerradio === false"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[1] }}.{{ offerdocument4 }}
                  </p>
                  <p
                    v-if="shopify.offerradio === false"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[2] }}.{{ offerdocument5 }}
                  </p>

                  <!-- languagepannal 3-->
                  <p
                    v-if="shopify.languagepannalradio"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[3] }}.{{ languagepannaldocument1 }}
                  </p>
                  <p
                    v-if="shopify.languagepannalradio === false"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[3] }}.{{ languagepannaldocument2 }}
                  </p>
                  <p v-if="shopify.languagepannalradio">
                    {{ shopify.posP2[4] }}.{{ shopify.languagepannalinputfield }}
                    zur Verfügung.
                  </p>
                  <!-- contracttextpannal 4 -->

                  <p
                    v-if="shopify.contracttextpannalradio"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.4%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[5] }}.{{ contracttextpannaldocument1 }}
                  </p>
                  <p
                    v-if="shopify.contracttextpannalradio === false"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.4%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[5] }}.{{ contracttextpannaldocument2 }}
                  </p>

                  <p
                    v-if="shopify.contracttextpannalradio"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[6] }}.Dieser Vertrag wird vom Anbieter
                    {{ shopify.contracttextpannalinputfield }}
                    gespeichert.
                  </p>
                  <!-- contractcustomerpannal 5 -->

                  <p
                    v-if="shopify.contractcustomerpannalinputfield1"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[7] }}. Der Kunde erhält den Vertragstext über

                    {{ shopify.contractcustomerpannalinputfield1 }}.
                  </p>

                  <p
                    v-if="shopify.contractcustomerpannalinputfield2"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[8] }}.Der Vertragstext ist dem Kunden auch im
                    Anschluss an den Vertragsschluss noch über
                    {{ shopify.contractcustomerpannalinputfield2 }}
                    zugänglich.
                  </p>
                  <p
                    v-if="shopify.contractcustomerpannalradio2"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ shopify.posP2[9] }}.Der Kunde kann seine Daten, nachdem er diese
                    in das Formular im Rahmen des Bestellvorgangs eingegeben hat
                    jederzeit löschen oder die Löschung der eingegebenen Daten
                    durch das Schließen des Browsers erreichen.
                  </p>

                  <!-- starting new pannal 3 from taking originnal 6 pannal some -->
                  <!-- shipcostpannal 6-->
                  <!-- add contractcustomerpannal -->
                  <p
                    v-if="
                      shopify.contractcustomerpannalinputfield4 ||
                      shopify.shipcostpannalradio1 ||
                      shopify.shipcostpannalradio1 === false ||
                      shopify.shipcostpannalradio2 ||
                      shopify.shipcostpannalradio2 === false ||
                      shopify.shipcostpannalradio3 ||
                      shopify.shipcostpannalradio3 === false
                    "
                    style="
                      text-align: center;
                      margin-top: 0.5%;
                      font-size: 16px;
                    "
                  >
                    <br /><br /><br />
                    <strong
                      >§{{ shopify.pos[2] }}<br />
                      Bezahlung</strong
                    >
                  </p>
                  <p
                    v-if="shopify.contractcustomerpannalinputfield4"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{shopify.posP3[0]}}. Als Zahlungsart steht/stehen dem Kunden
                    {{ shopify.contractcustomerpannalinputfield4 }}
                    zur Verfügung.
                  </p>
                  <p
                    v-if="shopify.shipcostpannalradio1"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                   {{shopify.posP3[1]}}. Die für die Waren angegebenen Preise enthalten die
                    jeweils gültige gesetzliche Umsatzsteuer.
                  </p>
                  <p
                    v-if="shopify.shipcostpannalradio2"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{shopify.posP3[2]}}. Die Versandkosten betragen {{shopify.shipcostpannalinputfield}} je Bestellung.
                  </p>
                  <p
                    v-if="shopify.shipcostpannalradio2 === false"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{shopify.posP3[2]}}. {{ shipcostpannaldocument2 }}
                  </p>
                  <p></p>
                
                  <p
                    v-if="shopify.shipcostpannalradio3"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{shopify.posP3[3]}}. Der Kunde hat im Falle eines Widerrufs die unmittelbaren
                    Kosten der Rücksendung zu tragen.
                  </p>
                  <!-- ending new pannal 3 from taking originnal 6 pannal some -->
                  <!-- starting new pannal 4 from taking originnal 6 pannal some -->
                  <p
                    v-if="shopify.shipcostpannalradio4"
                    style="
                      text-align: center;
                      margin-top: 0.5%;
                      font-size: 16px;
                    "
                  >
                    <br /><br /><br />
                    <strong>
                      §{{ shopify.pos[3] }}<br />
                      Eigentumsvorbehalt</strong
                    >
                  </p>
                  <p
                    v-if="shopify.shipcostpannalradio4"
                    style="text-align: justify; margin-top: 0.5%"
                  >
                    <br />
                    1.Bis zur vollständigen Bezahlung verbleiben die gelieferten
                    Waren im Eigentum des Anbieters.
                  </p>
                  <!-- ending new pannal 4 from taking originnal 6 pannal some -->
                  <!-- start of pannal 5new -->
                  <p
                    v-if="shopify.newpannal5radio"
                    style="
                      text-align: center;
                      margin-top: 0.5%;
                      font-size: 16px;
                    "
                  >
                    <br /><br /><br />
                    <strong
                      >§{{ shopify.pos[4] }}<br />
                      Gewährleistung
                    </strong>
                  </p>
                  <p
                    v-if="shopify.newpannal5radio"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ transferpannaldocument1 }}
                  </p>

                  <!-- end of pannal 5new -->
                  <!-- start of pannal 6new -->
                  <p
                    v-if="shopify.newpannal6radio"
                    style="
                      text-align: center;
                      margin-top: 0.5%;
                      font-size: 16px;
                    "
                  >
                    <br /><br /><br />
                    <strong>
                      §{{ shopify.pos[5] }}<br />
                     Europäische Streitschlichtungsplattform
                    </strong>
                  </p>
                  <p
                    v-if="shopify.newpannal6radio"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ transferpannaldocument2 }}
                  </p>
                  <!-- end of pannal 6new -->
                  <!-- starting new pannal 7  -->
                  <!-- transferpannal 7-->
                  <p
                    v-if="
                      shopify.transferpannalradio2 ||
                      shopify.transferpannalradio2 === false
                    "
                    style="
                      text-align: center;
                      margin-top: 0.5%;
                      font-size: 16px;
                    "
                  >
                    <br /><br /><br />
                    <strong
                      >§{{ shopify.pos[6] }}<br />
                      Schlussbestimmungen</strong
                    >
                  </p>
                  <p
                    v-if="shopify.transferpannalradio2"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ transferpannaldocument3 }}
                  </p>
                  <p
                    v-if="shopify.transferpannalradio2"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ transferpannaldocument4 }}
                  </p>
                  <p
                    v-if="shopify.transferpannalradio2"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ transferpannaldocument5 }}
                  </p>
                  <p
                    v-if="shopify.transferpannalradio2 === false"
                    style="
                      word-break: break-word;
                      text-align: justify;
                      margin-top: 0.5%;
                    "
                  >
                    <br />
                    {{ transferpannaldocument6 }}
                  </p>
                  <p
                    style="word-break: break-word"
                    v-if="shopify.transferpannalradio2"
                  >
                    {{ shopify.transferpannalinputfield }}
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
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");
var electron = require("electron");
var fs = require("fs");
import store from "../store";
import { mapState } from "vuex";
// import { Console } from 'console';
//import CountryFlag from "@dzangolab/vue-country-flag-icon";
import "@dzangolab/vue-country-flag-icon/dist/CountryFlag.css"; // import stylesheet
export default {
  name: "shopify",
  components: {
    //CountryFlag,
  },
  beforeDestroy() {
    if (store.state.isAdmin == true) {
      this.org_value2 = Object.assign(this.org_value2, this.shopify);
      if (JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)) {
        this.add_percentage_admin();
        this.writefileandscreenshot_admin();
      }
    } else {
      this.org_value2 = Object.assign(this.org_value2, this.shopify);
      if (JSON.stringify(this.org_value1) !== JSON.stringify(this.org_value2)) {
        this.add_percentage_user()
        this.writefileandscreenshot_user();
      }
    }
  },

  // mounted
  mounted() {
    if (store.state.isAdmin == true) {
      this.org_value1 = Object.assign(this.org_value1, this.shopify);
      this.mounted_admin();
    } else {
      this.org_value1 = Object.assign(this.org_value1, this.shopify);
      this.mounted_user();
    }
  },
  //Computed:
  computed: {
    ...mapState(["help", "edit"]),
    pannel1Watcher: function () {
      return (
        this.shopify.addressUserModel,
        this.shopify.addressNachname,
        this.shopify.addressStrasse,
        this.shopify.addressHausnummer,
        this.shopify.addressPlz,
        this.shopify.addressOrt,
        // this.shopify.addressUserModel,
        new Date()
      );
    },
    pannel2Watcher: function () {
      return (
        this.shopify.offerradio,
        this.shopify.languagepannalradio,
        this.shopify.languagepannalinputfield,
        this.shopify.contracttextpannalradio,
        this.shopify.contracttextpannalinputfield,
        this.shopify.contractcustomerpannalinputfield1,
        this.shopify.contractcustomerpannalinputfield2,
        this.shopify.contractcustomerpannalradio1,
        this.shopify.contractcustomerpannalradio2,
        new Date()
      );
    },
    pannel3Watcher: function () {
      return (
        this.shopify.contractcustomerpannalinputfield4,
        this.shopify.shipcostpannalradio1,
        this.shopify.shipcostpannalradio2,
        this.shopify.shipcostpannalradio3,
        new Date()
      );
    },
    pannel4Watcher: function () {
      return this.shopify.shipcostpannalradio4, new Date();
    },
    pannel5Watcher: function () {
      return this.shopify.newpannal5radio, new Date();
    },
    pannel6Watcher: function () {
      return this.shopify.newpannal6radio, new Date();
    },
    pannel7Watcher: function () {
      return this.shopify.transferpannalradio2, new Date();
    },
    addresspannalprogress: function () {
      return (
        this.shopify.addressVorname,
        this.shopify.addressNachname,
        this.shopify.addressStrasse,
        this.shopify.addressHausnummer,
        this.shopify.addressPlz,
        this.shopify.addressOrt,
        new Date()
      );
    },
    offerpannalprogress: function () {
      return (
        this.shopify.offerradio,
        this.shopify.languagepannalradio,
        this.shopify.contracttextpannalradio,
        this.shopify.contractcustomerpannalinputfield1,
        this.shopify.contractcustomerpannalinputfield2,
        this.shopify.contractcustomerpannalradio2,
        new Date()
      );
    },
    languagepannalprogress: function () {
      return (
        this.shopify.contractcustomerpannalinputfield4,
        this.shopify.shipcostpannalradio1,
        this.shopify.shipcostpannalradio2,
        this.shopify.shipcostpannalradio3,
        new Date()
      );
    },
    contracttextpannalprogress: function () {
      return this.shopify.shipcostpannalradio4, new Date();
    },
    contractcustomerpannalprogress: function () {
      return this.shopify.newpannal5radio, new Date();
    },
    shipcostpannalprogress: function () {
      return this.shopify.newpannal6radio, new Date();
    },
    transferpannalprogress: function () {
      return this.shopify.transferpannalradio2, new Date();
    },
  },
  //Data:
  data: () => ({
    current_admin_name: "",
    current_admin_versions: [],
    org_value2: {},
    org_value1: {},
    shopify: {
      pos: [0, 0, 0, 0, 1, 2, 0],
      posP2: [0, 0, 0, 0, 0, 0],
      posP3: [0, 0, 0, 0],
      addressUserModel: "",
      addressVorname: "",
      addressNachname: "",
      addressStrasse: "",
      addressHausnummer: "",
      addressheading:
        "Wer soll Vertragspartner des Kunden werden? (Vorname, Nachname [bei juristischen Personen: Name und Rechtsform], Adresse, PLZ, Ort)",
      addressPlz: "",
      addressOrt: "",
      offerradio: null,
      offerpannalheading:
        "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insbesondere hins. des Preises) ",
      languagepannalradio: null,
      languagepannalinputfield: "",
      languagepannalheading:
        "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen? ",
      contracttextpannalradio: null,
      contracttextpannalinputfield: "",
      contracttextpannalheading1:
        "Erfolgt eine Speicherung des Vertragstextes?",
      contracttextpannalheading2:
        "Wie lange wird der Vertragstext gespeichert?",
      contractcustomerpannalinputfield1: "",
      contractcustomerpannalinputfield2: "",
      contractcustomerpannalinputfield4: "",
      contractcustomerpannalradio1: null,
      contractcustomerpannalradio2: null,
      contractcustomerpannalheading1:
        "Wie wird dem Kunden der Vertragstext zugänglich gemacht? ",
      contractcustomerpannalheading2:
        "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies? ",
      contractcustomerpannalheading3:
        "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen? ",
      contractcustomerpannalheading4:
        "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung? ",
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
      transferpannalradio2: null,
      transferpannalinputfield: "",
      transferpannalheading2: "Unterliegen Sie speziellen Verhaltenskodizies? ",
      // add new pannal 5
      newpannal5radio: true,
      // add new pannal 6
      newpannal6radio: true,
      addresspannalname: "Vertragspartner",
      offerpannalname: "Vertragsschluss",
      contractcustomerpannalname: "Gewährleistung",
      languagepannalname: "Bezahlung",
      contracttextpannalname: "Eigentumsvorbehalt",
      shipcostpannalname: "​Europäische Streitschlichtungsplattform",
      transferpannalname: "Schlussbestimmungen",
    },

    addresspannalprogressValue: 0,
    addresspannaliconcolor: "#d8d8d8",
    addresspannalBox: false,
    addressdocumentheading2: "​Vertragspartner des Kunden für die über shopify",
    addressdocumentheading3:
      "abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots",

    offerpannalprogressValue: 0,
    offerpannaliconcolor: "#d8d8d8",
    offerpannalBox: false,

    offerdocument1:
      "Die im Rahmen der Website aufgezeigten Produktdarstellungen stellen unverbindliche Aufforderungen zum Abschluss eines Kaufvertrages dar.",
    offerdocument2:
      "Der Kunde kann im Rahmen der Produktübersichtsseite ein Produkt auswählen und gelangt so auf die Produktdetailseite. Hier kann der Kunde den einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen.  Betätigt der Kunde nun den Button „Weiter zum Versand“, kann er anschließend die gewünschte Versandart auswählen. Betätigt der Kunde nun den Button „Weiter zur Zahlung“, gelangt er zur Auswahl der einzelnen Zahlungsoptionen. Mit Betätigung des Buttons „Jetzt bezahlen“ gibt der Kunde ein verbindliches Angebot zum Abschluss eines Kaufvertrages mit dem Anbieter ab.",
    offerdocument3:
      "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
    offerdocument4:
      "Der Kunde kann im Rahmen der Produktübersichtsseite ein Produkt auswählen und gelangt so auf die Produktdetailseite. Hier kann der Kunde den einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen.  Betätigt der Kunde nun den Button „Weiter zum Versand“, kann er anschließend die gewünschte Versandart auswählen. Betätigt der Kunde nun den Button „Weiter zur Zahlung“, gelangt er zur Auswahl der einzelnen Zahlungsoptionen. Mit Betätigung des Buttons „Jetzt bezahlen“ gibt der Kunde ein verbindliches Angebot zum Abschluss eines Kaufvertrages mit dem Anbieter ab.",
    offerdocument5:
      "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
    languagepannalprogressValue: 0,
    languagepannaliconcolor: "#d8d8d8",
    languagepannalBox: false,

    languagepannaldocument1: "Als Vertragssprache stehen deutsch sowie",
    languagepannaldocument2: "Die Vertragssprache ist Deutsch.",

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

    shipcostpannalprogressValue: 0,
    shipcostpannaliconcolor: "#d8d8d8",
    shipcostpannalBox: false,
    shipcostpannaldocument2: "Wir liefern versandkostenfrei.",

    transferpannaldocument1:
      "1.Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften. ",
    transferpannaldocument2:
      "1.Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage . ",
    transferpannaldocument3:
      "1. Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbes. des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
    transferpannaldocument4:
      "2. Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
    transferpannalprogressValue: 0,
    transferpannaliconcolor: "#d8d8d8",
    transferpannalBox: false,
    transferpannaldocument5:
      "3. Der Anbieter unterliegt dem speziellen Verhaltenskodex:",
    transferpannaldocument6:
      "1.Speziellen Verhaltenskodizies unterliegen wir nicht",
    value: "",
    output: null,
    opacity: 0,
    editheading1: false,
    editheading2: false,
    editheading3: false,
    editheading4: false,
    editheading5: false,
    editheading6: false,
    editheading7: false,
    editmode1: false,
    editmode2: false,
    editmode3: null,
    editmode4: false,
    editmode5: null,
    editmode6: false,
    editmode7: null,
    editmode8: false,
    editmode9: false,
    editmode10: false,
    editmode11: false,
    editmode12: null,
    editmode13: false,
    editmode14: false,
    editmode15: null,
    editmode16: false,
    editmode17: null,
    editmode18: false,
    editmode19: null,
    editmode20: false,
    editmode21: null,
    editmode22: null,
    editmode23: null,
    editmode24: false,
    editmode25: null,

    addressitems: [
      { id: 2, value: "keine Angabe" },
      { id: 3, value: "Frau" },
      { id: 4, value: "Herr" },
    ],
    offeritems: [
      { label: "Ja", value: true, icon: "mdi-pencil-outline" },
      { label: "Nein", value: false, icon: "mdi-pencil-outline" },
    ],
    languagepannalitems: [
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
    contracttextpannalitems: [
      { label: "Ja", value: true, icon: "mdi-pencil-outline" },
      { label: "Nein", value: false, icon: "mdi-pencil-outline" },
    ],
    contractcustomerpannalitems1: [
      { label: "Ja", value: true, icon: "mdi-pencil-outline" },
      { label: "Nein", value: false, icon: "mdi-pencil-outline" },
    ],
    contractcustomerpannalitems2: [
      { label: "Ja", value: true, icon: "mdi-pencil-outline" },
      { label: "Nein", value: false, icon: "mdi-pencil-outline" },
    ],
    shipcostpannalitems1: [
      { label: "Ja", value: true, icon: "mdi-pencil-outline" },
      { label: "Nein", value: false, icon: "mdi-pencil-outline" },
    ],
    shipcostpannalitems2: [
      {
        label: "​Ja",
        value: true,
        icon: "mdi-pencil-outline",
      },
      { label: "Nein", value: false, icon: "mdi-pencil-outline" },
    ],
    shipcostpannalitems3: [
      { label: "Ja", value: true, icon: "mdi-pencil-outline" },
      { label: "Nein", value: false, icon: "mdi-pencil-outline" },
    ],
    shipcostpannalitems4: [
      { label: "Ja", value: true, icon: "mdi-pencil-outline" },
      { label: "Nein", value: false, icon: "mdi-pencil-outline" },
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
    number1: "",
    
  }),
  //watch
  watch: {
    pannel1Watcher: function () {
      if(this.shopify.addressUserModel||
        this.shopify.addressNachname||
        this.shopify.addressStrasse||
        this.shopify.addressHausnummer||
        this.shopify.addressPlz||
        this.shopify.addressOrt){
      this.shopify.pos[0] = 1;
      this.shopify.pos = this.arrangePos(this.shopify.pos);
      }
    },
    pannel2Watcher: function () {
      if(this.shopify.offerradio === true || this.shopify.offerradio === false ||
        this.shopify.languagepannalradio === true || this.shopify.languagepannalradio === false ||
        this.shopify.languagepannalinputfield ||
        this.shopify.contracttextpannalradio === true || this.shopify.languagepannalradio === false ||
        this.shopify.contracttextpannalinputfield ||
        this.shopify.contractcustomerpannalinputfield1 ||
        this.shopify.contractcustomerpannalinputfield2 ||
        this.shopify.contractcustomerpannalradio1 === true || this.shopify.contractcustomerpannalradio1 === false ||
        this.shopify.contractcustomerpannalradio2 === true || this.shopify.contractcustomerpannalradio2 === false){
      this.shopify.pos[1] = 2;
      this.shopify.pos = this.arrangePos(this.shopify.pos);
    }

      if (this.shopify.offerradio === true) {
        this.shopify.posP2[0] = 1;
        this.shopify.posP2[1] = 2;
        this.shopify.posP2[2] = 3;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      } else if (this.shopify.offerradio === false) {
        this.shopify.posP2[0] = 0;
        this.shopify.posP2[1] = 1;
        this.shopify.posP2[2] = 2;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      }

      if (this.shopify.languagepannalradio === true) {
        this.shopify.posP2[3] = 4;
        this.shopify.posP2[4] = 5;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      } else if (this.shopify.languagepannalradio === false) {
        this.shopify.posP2[3] = 4;
        this.shopify.posP2[4] = 0;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      }

      if (this.shopify.contracttextpannalradio === true) {
        this.shopify.posP2[5] = 6;
        this.shopify.posP2[6] = 7;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      } else if (this.shopify.contracttextpannalradio === false) {
        this.shopify.posP2[5] = 6;
        this.shopify.posP2[6] = 0;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      }

      if (this.shopify.contractcustomerpannalinputfield1) {
        this.shopify.posP2[7] = 8;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      } else if (!this.shopify.contractcustomerpannalinputfield1){
        this.shopify.posP2[7] = 0;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      }

      if (this.shopify.contractcustomerpannalinputfield2) {
        this.shopify.posP2[8] = 9;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      } else if (!this.shopify.contractcustomerpannalinputfield2){
        this.shopify.posP2[8] = 0;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      }

      if (this.shopify.contractcustomerpannalradio2 === true) {
        this.shopify.posP2[9] = 10;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      } else if (this.shopify.contractcustomerpannalradio2 === false) {
        this.shopify.posP2[9] = 0;
        this.shopify.posP2 = this.arrangePos(this.shopify.posP2);
      }
    },
    pannel3Watcher: function () {
      if(this.shopify.contractcustomerpannalinputfield4 ||
        this.shopify.shipcostpannalradio1 == true || this.shopify.shipcostpannalradio1 == false ||
        this.shopify.shipcostpannalradio2 === true || this.shopify.shipcostpannalradio2 == false ||
        this.shopify.shipcostpannalradio3 === true || this.shopify.shipcostpannalradio3 === false){
          this.shopify.pos[2] = 3;
          this.shopify.pos = this.arrangePos(this.shopify.pos);
    }
        if (this.shopify.contractcustomerpannalinputfield4) {
        this.shopify.posP3[0] = 1;
        this.shopify.posP3 = this.arrangePos(this.shopify.posP3);
      } else if (!this.shopify.contractcustomerpannalinputfield4) {
        this.shopify.posP3[0] = 0;
        this.shopify.posP3 = this.arrangePos(this.shopify.posP3);
      }

      if (this.shopify.shipcostpannalradio1 === true) {
        this.shopify.posP3[1] = 2;
        this.shopify.posP3 = this.arrangePos(this.shopify.posP3);
      } else if (this.shopify.shipcostpannalradio1 === false) {
        this.shopify.posP3[1] = 0;
        this.shopify.posP3 = this.arrangePos(this.shopify.posP3);
      }

       if (this.shopify.shipcostpannalradio2 === true) {
        this.shopify.posP3[2] = 3;
        this.shopify.posP3[3] = 4;
        this.shopify.posP3 = this.arrangePos(this.shopify.posP3);
      } else if (this.shopify.shipcostpannalradio2 === false) {
        this.shopify.posP3[2] = 3;
        this.shopify.posP3[3] = 0;
        this.shopify.posP3 = this.arrangePos(this.shopify.posP3);
      }

      if (this.shopify.shipcostpannalradio3 === true) {
        this.shopify.posP3[3] = 4;
        this.shopify.posP3 = this.arrangePos(this.shopify.posP3);
      } else if (this.shopify.shipcostpannalradio3 === false) {
        this.shopify.posP3[4] = 0;
        this.shopify.posP3 = this.arrangePos(this.shopify.posP3);
      }
    },
    pannel4Watcher: function () {
      if (this.shopify.shipcostpannalradio4 === true) {
        this.shopify.pos[3] = 4;
        this.shopify.pos = this.arrangePos(this.shopify.pos);
      } else {
        this.shopify.pos[3] = 0;
        this.shopify.pos = this.arrangePos(this.shopify.pos);
      }
    },
    pannel5Watcher: function () {
      if (this.shopify.newpannal5radio === true) {
        this.shopify.pos[4] = 5;
        this.shopify.pos = this.arrangePos(this.shopify.pos);
      } else {
        this.shopify.pos[4] = 0;
        this.shopify.pos = this.arrangePos(this.shopify.pos);
      }
    },
    pannel6Watcher: function () {
      if (this.shopify.newpannal6radio === true) {
        this.shopify.pos[5] = 6;
        this.shopify.pos = this.arrangePos(this.shopify.pos);
      } else {
        this.shopify.pos[5] = 0;
        this.shopify.pos = this.arrangePos(this.shopify.pos);
      }
    },
    pannel7Watcher: function () {
      this.shopify.pos[6] = 7;
      this.shopify.pos = this.arrangePos(this.shopify.pos);
    },
    addresspannalprogress: function () {
      var addresspannalfields = [];
      addresspannalfields.push(this.shopify.addressStrasse);
      addresspannalfields.push(this.shopify.addressHausnummer);
      addresspannalfields.push(this.shopify.addressPlz);
      addresspannalfields.push(this.shopify.addressOrt);
      addresspannalfields.push(this.shopify.addressVorname);
      addresspannalfields.push(this.shopify.addressNachname);
      this.addresspannalprogressValue = this.complete_fields_checker(
        addresspannalfields
      );
    },
    offerpannalprogress: function () {
      var offerpannalfields = [];
      offerpannalfields.push(this.shopify.offerradio);
      offerpannalfields.push(this.shopify.languagepannalradio);
      offerpannalfields.push(this.shopify.contracttextpannalradio);
      offerpannalfields.push(this.shopify.contractcustomerpannalinputfield1);
      offerpannalfields.push(this.shopify.contractcustomerpannalinputfield2);
      offerpannalfields.push(this.shopify.contractcustomerpannalradio2);
      this.offerpannalprogressValue = this.complete_fields_checker(
        offerpannalfields
      );
    },
    languagepannalprogress: function () {
      var languagepannalfields = [];
      languagepannalfields.push(this.shopify.contractcustomerpannalinputfield4);
      languagepannalfields.push(this.shopify.shipcostpannalradio1);
      languagepannalfields.push(this.shopify.shipcostpannalradio2);
      languagepannalfields.push(this.shopify.shipcostpannalradio3);
      this.languagepannalprogressValue = this.complete_fields_checker(
        languagepannalfields
      );
    },
    contracttextpannalprogress: function () {
      var contracttextpannalfields = [];
      contracttextpannalfields.push(this.shopify.shipcostpannalradio4);
      this.contracttextpannalprogressValue = this.complete_fields_checker(
        contracttextpannalfields
      );
    },
    contractcustomerpannalprogress: function () {
      var contractcustomerpannalfields = [];
      contractcustomerpannalfields.push(this.shopify.newpannal5radio);
      this.contractcustomerpannalprogressValue = this.complete_fields_checker(
        contractcustomerpannalfields
      );
    },
    shipcostpannalprogress: function () {
      var shipcostpannalfields = [];
      shipcostpannalfields.push(this.shopify.newpannal6radio);
      this.shipcostpannalprogressValue = this.complete_fields_checker(
        shipcostpannalfields
      );
    },
    transferpannalprogress: function () {
      var transferpannalfields = [];
      transferpannalfields.push(this.shopify.transferpannalradio2);
      this.transferpannalprogressValue = this.complete_fields_checker(
        transferpannalfields
      );
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
            this.shopify = JSON.parse(
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
    let b = JSON.stringify(this.shopify);
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
        this.transferpannalprogressValue,
        this.languagepannalprogressValue,
        this.contracttextpannalprogressValue,
        this.contractcustomerpannalprogressValue,
        this.shipcostpannalprogressValue,
      ];
      var total_sum = 6 + 6 + 4 + 1 + 1 + 1 + 1;
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
            this.shopify = JSON.parse(
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
      var shipcostpannalprogressValue = [];
      shipcostpannalprogressValue.push(this.shopify.newpannal5radio)
      this.shipcostpannalprogressValue= this.complete_fields_checker(shipcostpannalprogressValue);   
      var contractcustomerpannalfields = [];
      contractcustomerpannalfields.push(this.shopify.newpannal6radio)
      this.contractcustomerpannalprogressValue= this.complete_fields_checker(contractcustomerpannalfields);
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

      let b = JSON.stringify(this.shopify);
      console.log("GO");
      //console.log(this.Amazon);
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
    // pannal for 1
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
        this.languagepannalBox = false;
        this.offerpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.transferpannalBox = false;
        this.languagepannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.transferpannaliconcolor = "#d8d8d8";
        this.languagepannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.transferpannalnumber = "0/7";
        this.addresspannalBox = true;
        this.value = "12";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            languagepannalidheight + "px";
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
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            contracttextpannalidheight + "px";
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
        }, 500);
        // pannal 5 for dissable
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contractcustomerpannalidheight + "px";
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
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            shipcostpannalidheight + "px";
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
          let transferpannalid = document.getElementById("transferpannalid");
          let transferpannalidheight = transferpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            transferpannalidheight + "px";
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
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.transferpannalBox = false;
        this.languagepannaliconcolor = "#d8d8d8";
        this.addresspannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.transferpannaliconcolor = "#d8d8d8";
        this.languagepannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.transferpannalnumber = "0/7";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            languagepannalidheight + "px";
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
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            contracttextpannalidheight + "px";
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
        }, 500);
        // pannal 5 for dissable
        setTimeout(function () {
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contractcustomerpannalidheight + "px";
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
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            shipcostpannalidheight + "px";
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
          let transferpannalid = document.getElementById("transferpannalid");
          let transferpannalidheight = transferpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            transferpannalidheight + "px";
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
    // pannal for 3
    languagepannalchangevalue() {
      if (this.languagepannalBox === true) {
        this.languagepannalBox = false;
        this.value = "0";
        this.languagepannalnumber = "0/7";
        this.languagepannaliconcolor = "#d8d8d8";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            languagepannalidheight + "px";
        }, 500);
      } else if (this.languagepannalBox === false) {
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.transferpannalBox = false;
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.transferpannaliconcolor = "#d8d8d8";
        this.transferpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.languagepannalBox = true;
        this.value = "48";
        this.languagepannalnumber = "3/7";
        this.languagepannaliconcolor = "#ffa300";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
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
        // pannal 4 for dissable
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            contracttextpannalidheight + "px";
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
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contractcustomerpannalidheight + "px";
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
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            shipcostpannalidheight + "px";
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
          let transferpannalid = document.getElementById("transferpannalid");
          let transferpannalidheight = transferpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            transferpannalidheight + "px";
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
    contracttextpannalchangevalue() {
      if (this.contracttextpannalBox === true) {
        this.contracttextpannalBox = false;
        this.value = "0";
        this.contracttextpannalnumber = "0/7";
        this.contracttextpannaliconcolor = "#d8d8d8";
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
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            contracttextpannalidheight + "px";
        }, 500);
      } else if (this.contracttextpannalBox === false) {
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.languagepannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.transferpannalBox = false;
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.languagepannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.transferpannaliconcolor = "#d8d8d8";
        this.transferpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.languagepannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.contracttextpannalBox = true;
        this.value = "60";
        this.contracttextpannalnumber = "4/7";
        this.contracttextpannaliconcolor = "#ffa300";
        document
          .getElementById("thirdLine")
          .classList.remove("originallengthcolor");
        document.getElementById("thirdLine").classList.add("changelengthcolor");
        document
          .getElementById("fourthCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("fourthCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            languagepannalidheight + "px";
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
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contractcustomerpannalidheight + "px";
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
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            shipcostpannalidheight + "px";
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
          let transferpannalid = document.getElementById("transferpannalid");
          let transferpannalidheight = transferpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            transferpannalidheight + "px";
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
    contractcustomerpannalchangevalue() {
      if (this.contractcustomerpannalBox === true) {
        this.contractcustomerpannalBox = false;
        this.value = "0";
        this.contractcustomerpannalnumber = "0/7";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
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
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contractcustomerpannalidheight + "px";
        }, 500);
      } else if (this.contractcustomerpannalBox === false) {
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.languagepannalBox = false;
        this.contracttextpannalBox = false;
        this.shipcostpannalBox = false;
        this.transferpannalBox = false;
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.languagepannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.transferpannaliconcolor = "#d8d8d8";
        this.transferpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.languagepannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.shipcostpannalnumber = "0/7";
        this.contractcustomerpannalBox = true;
        this.value = "72";
        this.contractcustomerpannalnumber = "5/7";
        this.contractcustomerpannaliconcolor = "#ffa300";
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
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            languagepannalidheight + "px";
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
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            contracttextpannalidheight + "px";
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
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            shipcostpannalidheight + "px";
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
          let transferpannalid = document.getElementById("transferpannalid");
          let transferpannalidheight = transferpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            transferpannalidheight + "px";
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
    // pannal for 6
    shipcostpannalchangevalue() {
      if (this.shipcostpannalBox === true) {
        this.shipcostpannalBox = false;
        this.value = "0";
        this.shipcostpannalnumber = "0/7";
        this.shipcostpannaliconcolor = "#d8d8d8";
        document
          .getElementById("fifthLine")
          .classList.remove("changelengthcolor");
        document
          .getElementById("fifthLine")
          .classList.add("originallengthcolor");
        document.getElementById("sixCircle2").classList.remove("c3changecolor");
        document.getElementById("sixCircle2").classList.add("c3originalcolor");
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            shipcostpannalidheight + "px";
        }, 500);
      } else if (this.shipcostpannalBox === false) {
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.languagepannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.transferpannalBox = false;
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.languagepannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.transferpannaliconcolor = "#d8d8d8";
        this.transferpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.languagepannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.shipcostpannalBox = true;
        this.value = "86";
        this.shipcostpannalnumber = "6/7";
        this.shipcostpannaliconcolor = "#ffa300";
        document
          .getElementById("fifthLine")
          .classList.remove("originallengthcolor");
        document.getElementById("fifthLine").classList.add("changelengthcolor");
        document
          .getElementById("sixCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("sixCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            languagepannalidheight + "px";
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
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            contracttextpannalidheight + "px";
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
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contractcustomerpannalidheight + "px";
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
          let transferpannalid = document.getElementById("transferpannalid");
          let transferpannalidheight = transferpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            transferpannalidheight + "px";
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
    // pannal for 7
    transferpannalchangevalue() {
      if (this.transferpannalBox === true) {
        this.transferpannalBox = false;
        this.value = "0";
        this.transferpannalnumber = "0/7";
        this.transferpannaliconcolor = "#d8d8d8";
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
          let transferpannalid = document.getElementById("transferpannalid");
          let transferpannalidheight = transferpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            transferpannalidheight + "px";
        }, 500);
      } else if (this.transferpannalBox === false) {
        this.addresspannalBox = false;
        this.offerpannalBox = false;
        this.languagepannalBox = false;
        this.contracttextpannalBox = false;
        this.contractcustomerpannalBox = false;
        this.shipcostpannalBox = false;
        this.addresspannaliconcolor = "#d8d8d8";
        this.offerpannaliconcolor = "#d8d8d8";
        this.languagepannaliconcolor = "#d8d8d8";
        this.contracttextpannaliconcolor = "#d8d8d8";
        this.contractcustomerpannaliconcolor = "#d8d8d8";
        this.shipcostpannaliconcolor = "#d8d8d8";
        this.shipcostpannalnumber = "0/7";
        this.addresspannalnumber = "0/7";
        this.offerpannalnumber = "0/7";
        this.languagepannalnumber = "0/7";
        this.contracttextpannalnumber = "0/7";
        this.contractcustomerpannalnumber = "0/7";
        this.transferpannalBox = true;
        this.value = "100";
        this.transferpannalnumber = "7/7";
        this.transferpannaliconcolor = "#ffa300";
        document
          .getElementById("sixLine")
          .classList.remove("originallengthcolor");
        document.getElementById("sixLine").classList.add("changelengthcolor");
        document
          .getElementById("sevenCircle2")
          .classList.remove("c3originalcolor");
        document.getElementById("sevenCircle2").classList.add("c3changecolor");
        setTimeout(function () {
          let transferpannalid = document.getElementById("transferpannalid");
          let transferpannalidheight = transferpannalid.clientHeight;
          document.getElementById("sixLine").setAttribute("style", "");
          document.getElementById("sixLine").style.height =
            transferpannalidheight / 2 + "px";
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
          let languagepannalid = document.getElementById("languagepannalid");
          let languagepannalidheight = languagepannalid.clientHeight;
          document.getElementById("secondLine").setAttribute("style", "");
          document.getElementById("secondLine").style.height =
            languagepannalidheight + "px";
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
          let contracttextpannalid = document.getElementById(
            "contracttextpannalid"
          );
          let contracttextpannalidheight = contracttextpannalid.clientHeight;
          document.getElementById("thirdLine").setAttribute("style", "");
          document.getElementById("thirdLine").style.height =
            contracttextpannalidheight + "px";
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
          let contractcustomerpannalid = document.getElementById(
            "contractcustomerpannalid"
          );
          let contractcustomerpannalidheight =
            contractcustomerpannalid.clientHeight;
          document.getElementById("fourthLine").setAttribute("style", "");
          document.getElementById("fourthLine").style.height =
            contractcustomerpannalidheight + "px";
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
          let shipcostpannalid = document.getElementById("shipcostpannalid");
          let shipcostpannalidheight = shipcostpannalid.clientHeight;
          document.getElementById("fifthLine").setAttribute("style", "");
          document.getElementById("fifthLine").style.height =
            shipcostpannalidheight + "px";
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
<style scoped>
@media print {
  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif, serif;
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
</style>

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
        this.add_percentage_user()
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
      shipcostpannalname: "Schlussbestimmungen",
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
      offerradio1: null,
      offerradio2: null,
       customerreceiptcontractpannalname: "Bezahlung",
      customerreceiptcontractradio1: null,
      languagepannalinputfield: "",
      languagepannalradio: null,
      contracttextpannalradio: null,
      contracttextUserModel: "",
      contracttextpannalinputfield: "",
      contractcustomerpannalinputfield1: "",
      contractcustomerpannalinputfield2: "",
      contractcustomerpannalinputfield3: "",
      contractcustomerpannalinputfield4: "",
      contractcustomerpannalradio: null,
      shipcostpannalradio1: null,
      shipcostpannalradio2: null,
      shipcostpannalradio3: null,
      shipcostpannalradio4: null,
      shipcostpannalinputfield: "",
      transferpannalradio2: null,
      transferpannalradio1: true,
      transferpannalinputfield: "",
      // add new pannal 5
      newpannal5radio: true,
      // add new pannal 6
      newpannal6radio: true,
       pos: [0, 0, 0, 0, 1, 2, 3],
    posP2: [0,0,0,0,0,0,0,0,0,0,0,0],
    posP3:[0,0,0,0],
    posP7:[1,2],

            //rightside document

            rsdmh1: "Allgemeine Geschäftsbedingungen",

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
    
   
    addresspannalprogressValue: 0,
    addresspannaliconcolor: "#d8d8d8",
    addresspannalBox: false,
   
    
   
    offerpannalprogressValue: 0,
    offerpannaliconcolor: "#d8d8d8",
    offerpannalBox: false,
   
    offerdocument1a:
      "Die im Rahmen von Amazon vorgebrachten Angebote des Anbieters stellen verbindliche Angebote zum Abschluss eines Kaufvertrages dar.",
    offerdocument1b:
      "Der Kunde kann die einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse gehen“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen.  Anschließend gibt der Kunde über den Button „Jetzt kaufen“ ein verbindliches Angebot zum Abschluss eines Kaufvertrages an den Anbieter ab. ",
    offerdocument1c:
      "Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der Amazon Europe Core S.à r.l. (Société à responsabilité limitée): https://www.amazon.de/gp/help/customer/display.html?ie=UTF8&nodeId=201909000&ref_=footer_cou.",
    offerdocument2:
      "Die bei Amazon eingestellten Produktseiten des Anbieters stellen unverbindliche Aufforderungen zum Abschluss eines Kaufvertrages dar.",
    offerdocument3:
      "Des Weiteren kann der Kunde durch die Betätigung des Buttons „Jetzt mit 1-Click® kaufen“ unmittelbar von der Produktdetailseite aus ein verbindliches Angebot zum Abschluss eines Kaufvertrages abgeben.  ",

    customerreceiptpannalprogressValue: 0,
    customerreceiptpannaliconcolor: "#d8d8d8",
    customerreceiptpannalBox: false,
    
   
    customerreceiptcontractdocument1:
      "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss. ",
    customerreceiptcontractdocument2:
      "Die Annahme des Angebots erfolgt durch eine E-Mail der Amazon Europe Core S.à r.l., welche den Versand der Ware bestätigt. ",
    languagepannalprogressValue: 0,
    languagepannaliconcolor: "#d8d8d8",
    languagepannalBox: false,
    
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
    //shipcostpannaldocument1:"3.Die Versandkosten betragen je Bestellung:",
    shipcostpannaldocument2: "Wir liefern versandkostenfrei.",

   
    // transferpannaldocument1:
    //  "2.Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften. ",
    // transferpannaldocument2:
    //  "3.Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage . ",
    // transferpannaldocument3:
    //  "4.Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbes. des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
    // transferpannaldocument4:
    //  "5.Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
    transferpannaldocument5:
      "Wir unterliegen den folgenden Verhaltenskodizies:",
    transferpannaldocument6:
      "Speziellen Verhaltenskodizies unterliegen wir nicht.",
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


    //rightside document

    editrheading1:false,
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
    ],
    number1: "",
   
  }),
  //watch
  watch: {
pannel1Watcher: function () {
      if(this.Amazon.addressUserModel || 
        this.Amazon.addressUserModel1 ||
        this.Amazon.addressdocumentpannalinputfield1 ||
        this.Amazon.addressOrt ||
        this.Amazon.addressPlz ||
        this.Amazon.addressHausnummer ||
        this.Amazon.addressStrasse ||
        this.Amazon.addressRechtsform ||
        this.Amazon.addressVorname  ||
        this.Amazon.addressNachname  ||
        this.Amazon.addressFirmenname)
        {
          this.Amazon.pos[0] = 1;
      this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }

      
    },
    pannel2Watcher: function () {
      if(this.Amazon.offerradio1=== true|| this.Amazon.offerradio1 === false||
        this.Amazon.offerradio2 === true|| this.Amazon.offerradio2 === false||
        this.Amazon.offerradio3 === true|| this.Amazon.offerradio3 === false||
        this.Amazon.customerreceiptcontractradio1 === true|| this.Amazon.customerreceiptcontractradio1 === false||
        this.Amazon.languagepannalradio === true|| this.Amazon.languagepannalradio === false||
        this.Amazon.contracttextpannalradio === true|| this.Amazon.contracttextpannalradio  === false||
        this.Amazon.contracttextpannalinputfield||
        this.Amazon.contractcustomerpannalinputfield1||
        this.Amazon.contractcustomerpannalinputfield2|| 
        this.Amazon.contractcustomerpannalradio === true|| this.Amazon.contractcustomerpannalradio === false){
          this.Amazon.pos[1] = 2;
          this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }
      

      //subPositions
      if(this.Amazon.offerradio1 === true){
        this.Amazon.posP2[0] = 1;
        this.Amazon.posP2[1] = 2;
        this.Amazon.posP2[2] = 3;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      else if(this.Amazon.offerradio1 === false){
        this.Amazon.posP2[0] = 1;
        this.Amazon.posP2[1] = 0;
        this.Amazon.posP2[2] = 0;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      if(this.Amazon.offerradio2 === true){
        this.Amazon.posP2[3] = 4;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      else if (this.Amazon.offerradio2 === false){
        this.Amazon.posP2[3] = 0;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      if(this.Amazon.customerreceiptcontractradio1 === true){
        this.Amazon.posP2[4] = 5;
         this.Amazon.posP2[5] = 6;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      else if (this.Amazon.customerreceiptcontractradio1 === false) {
        this.Amazon.posP2[4] = 0;
        this.Amazon.posP2[5] = 0;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      if(this.Amazon.languagepannalradio === true)
      {
        this.Amazon.posP2[6] = 7;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      else if (this.Amazon.languagepannalradio === false){
        this.Amazon.posP2[6] = 7;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
       if(this.Amazon.contracttextpannalradio === true)
      {
        this.Amazon.posP2[7] = 8;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      else if (this.Amazon.contracttextpannalradio === false){
        this.Amazon.posP2[7] = 8;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
       if(this.Amazon.contractcustomerpannalinputfield1)
      {
        this.Amazon.posP2[8] = 9;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      else if (!this.Amazon.contractcustomerpannalinputfield1){
        this.Amazon.posP2[8] = 0;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      if(this.Amazon.contractcustomerpannalinputfield2)
      {
        this.Amazon.posP2[9] = 10;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      else if (!this.Amazon.contractcustomerpannalinputfield2){
        this.Amazon.posP2[9] = 0;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      if(this.Amazon.contractcustomerpannalradio === true)
      {
        this.Amazon.posP2[10] = 11;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      else if (this.Amazon.contractcustomerpannalradio === false){
        this.Amazon.posP2[10] = 0;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
       if( this.Amazon.offerradio2 === true && this.Amazon.contractcustomerpannalradio === true)
      {
        this.Amazon.posP2[11] = 12;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
      else if (this.Amazon.contractcustomerpannalradio === false){
        this.Amazon.posP2[11] = 12;
        this.Amazon.posP2 = this.arrangePos(this.Amazon.posP2);
      }
    },
    pannel3Watcher: function () {
      if(this.Amazon.contractcustomerpannalinputfield4 ||
        this.Amazon.shipcostpannalradio1 === true || this.Amazon.shipcostpannalradio1 === false ||
        this.Amazon.shipcostpannalradio2 === true || this.Amazon.shipcostpannalradio2 === false||
        this.Amazon.shipcostpannalradio3 === true || this.Amazon.shipcostpannalradio3 === false){
          this.Amazon.pos[2] = 3;
          this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }
      
      //subposition
      if(this.Amazon.contractcustomerpannalinputfield4)
      {
        this.Amazon.posP3[0] = 1;
        this.Amazon.posP3 = this.arrangePos(this.Amazon.posP3);
      }
      else if (!this.Amazon.contractcustomerpannalinputfield4){
        this.Amazon.posP3[0] = 0;
        this.Amazon.posP3 = this.arrangePos(this.Amazon.posP3);
      }
       if(this.Amazon.shipcostpannalradio1 === true)
      {
        this.Amazon.posP3[1] = 2;
        this.Amazon.posP3 = this.arrangePos(this.Amazon.posP3);
      }
      else if (this.Amazon.shipcostpannalradio1 === false){
        this.Amazon.posP3[1] = 2;
        this.Amazon.posP3 = this.arrangePos(this.Amazon.posP3);
      }
       if(this.Amazon.shipcostpannalradio2 === true)
      {
        this.Amazon.posP3[2] = 3;
        this.Amazon.posP3 = this.arrangePos(this.Amazon.posP3);
      }
      else if (this.Amazon.shipcostpannalradio2 === false){
        this.Amazon.posP3[2] = 3;
        this.Amazon.posP3 = this.arrangePos(this.Amazon.posP3);
      }
       if(this.Amazon.shipcostpannalradio3 === true)
      {
        this.Amazon.posP3[3] = 4;
        this.Amazon.posP3 = this.arrangePos(this.Amazon.posP3);
      }
      else if (this.Amazon.shipcostpannalradio3 === false){
        this.Amazon.posP3[3] = 0;
        this.Amazon.posP3 = this.arrangePos(this.Amazon.posP3);
      }
    },
    pannel4Watcher: function () {
      if(this.Amazon.shipcostpannalradio4 === true){
          this.Amazon.pos[3] = 4;
      this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }
        else{
          this.Amazon.pos[3] = 0;
      this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }
    },
    pannel5Watcher: function () {
      if(this.Amazon.newpannal5radio === true ){
          this.Amazon.pos[4] = 5;
      this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }
        else{
          this.Amazon.pos[4] = 0;
      this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }
      
    },
    pannel6Watcher: function () {
      if(this.Amazon.newpannal6radio === true){
          this.Amazon.pos[5] = 6;
      this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }
        else{
          this.Amazon.pos[5] = 0;
      this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }
      
    },
    pannel7Watcher: function () {
       if(this.Amazon.transferpannalradio1 === true || this.Amazon.transferpannalradio2 === true || this.Amazon.transferpannalradio2 === false){
          this.Amazon.pos[6] = 7;
          this.Amazon.pos = this.arrangePos(this.Amazon.pos);
          if(this.Amazon.transferpannalradio1 === true){
           this.Amazon.posP7[0] = 1;
           this.Amazon.posP7[1] = 2;
           this.Amazon.posP7 = this.arrangePos(this.Amazon.posP7);
          }
         else if(this.Amazon.transferpannalradio1 === false){
           this.Amazon.posP7[0] = 0;
           this.Amazon.posP7[1] = 0;
           this.Amazon.posP7 = this.arrangePos(this.Amazon.posP7);
          }
        if(this.Amazon.transferpannalradio2 === true){
           this.Amazon.posP7[2] = 3;
           this.Amazon.posP7 = this.arrangePos(this.Amazon.posP7);
          }
         else if(this.Amazon.transferpannalradio2 === false){
          this.Amazon.posP7[2] = 3;
          this.Amazon.posP7 = this.arrangePos(this.Amazon.posP7);
          }
        }
        else{
          this.Amazon.pos[6] = 0;
      this.Amazon.pos = this.arrangePos(this.Amazon.pos);
        }
      // this.Amazon.pos[6] = 7;
      // this.Amazon.pos = this.arrangePos(this.Amazon.pos);
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
      // store.commit("updatecontractpercentage",[a1,store.state.current_admin_name,value])
      store.commit("updatecontractpercentageingroups",[a1,store.state.current_admin_name,value])
       var groups_by_specific_admin = store.getters.checkGroupByAdminName(store.state.current_admin_name);
            this.$store.commit("setcurrentadmingroups",groups_by_specific_admin);
      store.commit("changeiseditedrecentcontracts",[a1,store.state.current_admin_name])
    },
    add_percentage_user(){
      var a1 = localStorage.getItem("current_contract_title")
      var value = this.updatecontractpercentage_admin()
      store.commit("updatecontractpercentageuser",[a1,store.state.current_user_name,value])
      store.commit("changeiseditedrecentcontracts",[a1,store.state.current_user_name])
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
        if(val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")] !== undefined){
            this.Amazon = JSON.parse(
            val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")]
          ) ;
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
          contracttextpannalfields.push(this.Amazon.newpannal5radio)
          this.contracttextpannalprogressValue= this.complete_fields_checker(contracttextpannalfields);
      var contractcustomerpannalfields = [];
      contractcustomerpannalfields.push(this.Amazon.newpannal6radio)
      this.contractcustomerpannalprogressValue= this.complete_fields_checker(contractcustomerpannalfields);
    var shipcostpannalfields = [];
      shipcostpannalfields.push(this.Amazon.transferpannalradio1)
      shipcostpannalfields.push(this.Amazon.transferpannalradio2)
      this.shipcostpannalprogressValue= this.complete_fields_checker(shipcostpannalfields);
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
        fs.writeFileSync(dir + "/" +  a1 +
              "-" +
              a2 +
              "-" +
              store.state.current_admin_name +".png",img.toPNG(),{encoding:'utf8',flag:'w'})
      
    })
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
        if(val[localStorage.getItem("current_contract_title")+"-"+localStorage.getItem("current_contract_group_title")] !== undefined){
            this.Amazon = JSON.parse(
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
<template>
  <v-container class="ma-0 pa-0">
    <v-app-bar
      dense
      max-width="2140"
      class="ma-0 pa-0 ml-n5 mr-n5"
      style="
        position: absolute;
        top: 0px;
        left: 0.7%;
        z-index: 5;
        background-color: #525659;
      "
    >
      <v-row justify="center">
        <h2 style="color: white">
          Bitte warten Sie, bis das Fenster automatisch geschlossen wird
        </h2>
      </v-row>
    </v-app-bar>
    <v-progress-linear
      style="position: absolute; top: 44px; left: 0px; z-index: 5"
      color="#EAAD35"
      indeterminate
      rounded
      height="6"
      v-show="isloading"
    ></v-progress-linear>
    <div id="div_iframe"><iframe id="frame" :src="filepathpdf"></iframe></div>
  </v-container>
</template>

<script>
// const PdfExtractor = require('pdf-extractor').PdfExtractor;
// import {BrowserWindow}  from 'electron';
const fs = require("fs");
// import { ipcRenderer } from "electron";
const { BrowserWindow } = require("electron").remote;
// import html2canvas from 'html2canvas';
import { mapState } from "vuex";
import store from "../store";
export default {
  name: "test3",
  components: {},
  data: function () {
    return {
      isloading:false}},
  mounted() {
    this.demo();
  },
  methods: {
    // decodeBase64Image(dataString) {
    //   var matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
    //     response = {};

    //   if (matches.length !== 3) {
    //     return new Error('Invalid input string');
    //   }

    //   response.type = matches[1];
    //   response.data = new Buffer(matches[2], 'base64');

    //   return response;
    // },
    // mypdffunc(){
    //   let outputDir = '../path/to/output',
    // pdfExtractor = new PdfExtractor(outputDir, {
    //     viewportScale: (width, height) => {
    //         //dynamic zoom based on rendering a page to a fixed page size
    //         if (width > height) {
    //             //landscape: 1100px wide
    //             return 1100 / width;
    //         }
    //         //portrait: 800px wide
    //         return 800 / width;
    //     },
    //     pageRange: [1,5],
    // });

    // pdfExtractor.parse('../mypdf.pdf').then(function () {
    // 	console.log('# End of Document');
    // }).catch(function (err) {
    // 	console.error('Error: ' + err);
    // });
    // },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async demo() {
      // await this.sleep(2000);
      // var perpage_height = 991,
      //   i;
      // var new_pp_height = 0,
      //   img_count = 1;
      // var clientHeight =
      //   document.getElementsByTagName("iframe")[0].scrollHeight;
      // var total_pages = (clientHeight - 727) / perpage_height;
      // for (i = 0; i < total_pages - 9; i = i + 1) {
      //   await this.sleep(2000);
      //   this.capture_function(img_count);
      //   img_count = img_count + 1;
      //   await this.sleep(2000);
      //   new_pp_height = new_pp_height + perpage_height - 26;
      //   document.getElementById("div_iframe").scrollTop = new_pp_height;
      // }
      // await this.sleep(2000);
      // ipcRenderer.send("imagecreatedsignal", i);
      BrowserWindow.getAllWindows().forEach(function (win) {
        document.addEventListener('keypress', function(event){
        
       
          if (win.id > 1){
	if(event.key === "e"){
		//do something
    win.close();}
	}
});
      });
    },
    capture_function(img_count) {
      let win = BrowserWindow.getFocusedWindow();
      let wid = win.getSize()[0];
      win.webContents
        .capturePage({
          x: wid - Math.round(wid),
          y: 50,
          width: wid,
          height: win.getSize()[1],
        })
        .then((img) => {
          var dir = "./pdfimage";
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
          }
          fs.writeFileSync(
            dir + "/" + "pdftestimage" + img_count + ".png",
            img.toPNG(),
            { encoding: "utf8", flag: "w" }
          );
        });
    },
  },
  created() {
    store.commit("addsecondwindow", false);
    store.dispatch("updatewritejson");
    console.log("kkk");
  },
  computed: {
    ...mapState(["secondwindowtest", "filepathpdf"]),
  },
};
</script>
<style scoped>
#div_iframe {
  border-style: inset;
  border-color: grey;
  overflow: scroll;
  height: 1070%;
  width: 160%;
}

#frame {
  /* background-color: blue !important; */
  width: 100%;
  height: 600%; /* 10x the div height to embrace the whole page */
}
</style>

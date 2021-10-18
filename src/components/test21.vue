<template>
  <v-container >
     
      <v-row justify="center" class="mt-5">
          <v-btn @click="savehtml()" id="auth-button">save as html</v-btn>
              <v-btn onclick="document.getElementById('demo').innerHTML = 'Hello World',
              document.getElementById('demo1').innerHTML = 'Hello Worldfgfgfgfgfg'">Click me</v-btn>

          <v-spacer></v-spacer>
              <v-btn onclick="alert('rtft')">dddyhy</v-btn>
              <p id="demo"></p>
              <p id="demo1"></p>
      </v-row>
  </v-container>
</template>

<script>

import path from 'path' ;
//import { showAt, hideAt } from "vue-breakpoints";
// import Cryptr from "cryptr";
import electron from "electron";
//import CountryFlag from "@dzangolab/vue-country-flag-icon";
// import "@dzangolab/vue-country-flag-icon/dist/CountryFlag.css"; // import stylesheet
// import draggable from "vuedraggable";

// var vuetojs = require('vue-to-js');
export default {
  name: "test21",
  //methods
  methods: {
    myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
},
//     myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// },
      savehtml(){
        console.log("iiii")
        alert("ismail ma agia ho")
  //        let file = new File([document.documentElement.innerHTML]
  //          , "file-" + new Date().getTime() + ".html"
  //          , {type:"text/html", lastModified:new Date().getTime()});
  //          var a = document.createElement("a");
  // a.href = URL.createObjectURL(file);
  // a.download = "e.html";
  // a.hidden = true;
  // document.body.appendChild(a);
  // a.innerHTML = "something random - nobody will see this, it doesn't matter what you put here";
  // a.click();
//           const BrowserWindow = electron.remote.BrowserWindow;
//            let mainWindow = BrowserWindow.getFocusedWindow();
//            mainWindow.loadUrl('file://' + __dirname + '/e.html');
// mainWindow.webContents.on('did-finish-load', ()=>{
//     let code = `var authButton = document.getElementById("auth-button");
//             authButton.addEventListener("click",function(){alert("clicked!");});`;
//     mainWindow.webContents.executeJavaScript(code);
// });
const BrowserWindow = electron.remote.BrowserWindow;
let win = BrowserWindow.getFocusedWindow();
           const filepathlocal = path.join(__dirname, '../hasantest9/page.html');
        //    console.log(filepathlocal)
        //  win.webContents.executeJavaScript();
            win.webContents.savePage(filepathlocal, 'HTMLComplete').then(() => {
        console.log('Page was saved successfully.')
    }).catch(err => {
        console.log(err);
    });
      },
  },
};
</script>


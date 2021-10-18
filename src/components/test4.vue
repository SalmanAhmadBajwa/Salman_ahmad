<template>
  <v-container class="mt-12">
    <v-btn @click="changearraytominiarray()">TEST</v-btn>
   <v-card
   min-height="100"
   min-width="1200"
   
   >
      
   <p v-for="(item, index) in data_import_pdf_png_content" :key="index" style="text-align:center">{{item}}</p>
   </v-card>
    
  </v-container>
</template>

<script>
// const PdfExtractor = require('pdf-extractor').PdfExtractor;
// import {BrowserWindow}  from 'electron';
// const fs = require("fs");
// import { ipcRenderer } from "electron";
// const { BrowserWindow } = require("electron").remote;
// import html2canvas from 'html2canvas';
import { mapState } from "vuex";
// import store from "../store";
export default {
  name: "test4",
   data: function () {
    return {
      data_import_pdf_png_content:[],
    }
   },
  components: {},
  mounted() {
  
  },
  methods: {
    changearraytominiarray(){
      var i;
      var exact_pages_to_extract = 0;
      var array_value = this.import_pdf_png_content
      var array=[]
      //Extract Pages
      for(i=0; i< array_value.length ; i++){
        if(array_value[i]!==""){
          exact_pages_to_extract = exact_pages_to_extract + 1
        }
      }
      //Push pages values in single array
      for(i=0; i< exact_pages_to_extract; i++){
        var array_value_2 = array_value[i]
        array.push(array_value_2.split("\n"))
      }
      var merged = [].concat.apply([], array);
      var filtered = merged.filter(word => word.length !== 0);
      this.data_import_pdf_png_content=filtered;
      console.log(filtered);
    },
  },
  created() {
   
  },
  computed: {
    ...mapState(["import_pdf_png_content"]),
    // computed_import_pdf_png_content(){
    //   return this.import_pdf_png_content[0].split("\n");
    // },
  },
};
</script>
<style scoped>

</style>

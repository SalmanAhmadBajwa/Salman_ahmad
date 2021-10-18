import Vue from 'vue'
// import test2 from './test2.js';
import App from './App.vue'
import router from './router'
//var fs = require("fs");
import store from './store'
import vuetify from './plugins/vuetify';
import Antd from 'ant-design-vue';
// import VueHtmlToPaper from 'vue-html-to-paper';
import 'ant-design-vue/dist/antd.css';
import CountryFlag from '@dzangolab/vue-country-flag-icon'
import '@dzangolab/vue-country-flag-icon/dist/CountryFlag.css' // import stylesheet
import * as svgicon from 'vue-svgicon';
import vuescroll from "vue-scroll";

import Vuetify from 'vuetify';
import { TiptapVuetifyPlugin } from "tiptap-vuetify";
// don't forget to import styles
import "tiptap-vuetify/dist/main.css";
import VueToasted from 'vue-toasted';
import MenuIcon from 'vue-material-design-icons/Menu.vue';

Vue.component('menu-icon', MenuIcon);
import VueToastify from "vue-toastify";
Vue.use(VueToastify,{
  theme:"light"
});
Vue.use(VueToasted, {
  iconPack: 'mdi' // set your iconPack, defaults to material. material|fontawesome|custom-class
});
// Vue.use(router)
//import 'vuetify/dist/vuetify.min.css';

// var 
// mycomponent =  httpVueLoader('mycomponent.vue') ,
// router = new VueRouter({
//  routes:[
//    { path:'/mycomponent', component: mycomponent }
//  ]
// });
//store.dispatch('updatereadjson');
// import the css file 
//Vue.use(fs);
// import { electron } from 'electron'
// const fs = electron.remote.require('fs');
// Vue.use(fs);
//const vuetify1 = new Vuetify()
//Vue.prototype.$maincolor = store.state.maincolor //FFA300
// Vue.prototype.$maincolor = "#FFA300"
// Vue.prototype.$iconcolor = "#7C7C7C" //
// Vue.prototype.$iconbtnbkcolor = "grey"
Vue.use(Vuetify)



Vue.use(TiptapVuetifyPlugin, {
  vuetify,
  iconsGroup: 'mdi',
  // lang: "en",
  // lang: {
  //   //current: 'en' // en | es | fr | pl | ru | uk | ptbr | tr | he | nl
  //   current: 'en'  | 'de' // en | es | fr | pl | ru | uk | ptbr | tr | he | nl | ja
  // }
  // "md" (default), "fa", "mdi"
  //iconsGroup // same as "iconsGroup: iconsGroup"
});
export const bus = new Vue();
Vue.prototype.$bus = new Vue();
Vue.prototype.$contractopencreator = false;
Vue.prototype.$secondwindow = false;
Vue.prototype.$contractopencreatordocdata = "";
Vue.prototype.$version = "V.1.20.292";
Vue.prototype.$version_data = "V.1.20.292_data";
import VueSignaturePad from 'vue-signature-pad';
 
Vue.use(VueSignaturePad);
Vue.use(vuescroll);
Vue.use(svgicon);
Vue.use(router);
// const options = {
//   name: '_blank',
//   specs: [
//     'fullscreen=yes',
//     'titlebar=yes',
//     'scrollbars=yes'
//   ],
//   styles: [
//     'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
//     'https://unpkg.com/kidlat-css/css/kidlat.css',
//     'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
//     './path/to/custom.css', // <- inject here
//     "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
//     "https://unpkg.com/kidlat-css/css/kidlat.css",
//     "./landscape.css"
//   ]
// }

// Vue.use(VueHtmlToPaper, options);
Vue.use('CountryFlag', CountryFlag)
Vue.use(Antd);

Vue.config.productionTip = false
  
new Vue({
  // components: {
  //   'mycomponent':mycomponent
  // },
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')

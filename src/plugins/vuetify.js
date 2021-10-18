// import Vue from 'vue';
// import Vuetify from 'vuetify/lib';
// import '@mdi/font/css/materialdesignicons.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';



// Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
// library.add(fas) // Include needed icons


  

// Vue.use(Vuetify);

// export default new Vuetify({
//     icons:{
//         iconfont:'mdiSvg',
//     }
// });
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


//import '../assets/sass/overrides.sass'



Vue.use(Vuetify);


// const theme = {
//     //primary: '#4CAF50',
//     //secondary: '#9C27b0',
//     //accent: '#9C27b0',
//     //info: '#00CAE3',

//     primary: '#1976D2',
//     secondary: '#424242',
//     accent: '#82B1FF',
//     error: '#FF5252',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FFC107',
// }

export default new Vuetify({
    icons: {
        iconfont: 'mdi',

    },

    // theme: {
    //     themes: {
    //         dark: theme,
    //         light: theme,
    //     },
    // },
    // theme: {
    //     themes: {
    //         light: {
    //             background: '#ededed',
    //             primary: '#419cff',
    //             secondary: '#424242',
    //             accent: '#82B1FF',
    //             error: '#FF5252',
    //             info: '#2196F3',
    //             success: '#4CAF50',
    //             warning: '#FFC107',
    //             divider: "000000",
    //         },
    //         dark:{
    //             background: '#303030',
    //             primary: '#419cff',
    //             secondary: '#424242',
    //             accent: '#82B1FF',
    //             error: '#FF5252',
    //             info: '#2196F3',
    //             success: '#4CAF50',
    //             warning: '#FFC107',
    //             divider: "ffffff",
    //         }
    //     },
    // },

});

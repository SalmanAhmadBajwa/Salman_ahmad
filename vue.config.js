module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    port: 8081
},
// rules: [
//   {
//     test: /\.js/,
//     use: ['vue-hot-reload-loader', 'buble-loader'],
//     // If and only if all your components are in `path/to/components` directory
//     include: path.resolve(__dirname, 'path/to/components')
//   }
// ],
// rules: [
//   {
//     test: /\.vue$/,
//     loader: 'vue-loader',
//     options: {
//       hotReload: true // disables Hot Reload
//     }
//   }
// ],
pluginOptions: {
  electronBuilder: {
    builderOptions: {
        "appId": "com.example.clevercontracts",
        "productName" : "Clever-Contracts" ,
        "win": {
          "asar":true,
          "publisherName": "hgh",
          "target": ["nsis"],
          "icon": "public/assets/icon.ico"
        },
        "nsis" : {
          "deleteAppDataOnUninstall" : true,
          "perMachine" : true,
          "oneClick" : false,
          "installerIcon": "public/assets/icon.ico",
          "uninstallerIcon": "public/assets/icon.ico",
          "runAfterFinish": false,
          "allowToChangeInstallationDirectory" : true
        }

      // "extraResources": [
      //   {
      //     "from": "./extraResources/",
      //     "to": "extraResources",
      //     "filter": [
      //       "/*"
      //     ]
      //   }
      // ],
      // "extraResources": [
      //   {
      //     "from": "./data.json",
      //     "to": "extraResources",
      //     "filter": [
      //       "/*"
      //     ]
      //   }
      //]
    },
    nodeIntegration: true,
    nodeIntegrationInWorker: true,
  }
},
}

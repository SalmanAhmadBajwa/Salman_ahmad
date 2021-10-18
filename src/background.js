'use strict'

//import store from './store'
//var fs = require('fs');
// import Vue from 'vue'
import { ipcMain,app, protocol, BrowserWindow,globalShortcut} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
// var electron = require('electron'); 
// electron.Menu.setApplicationMenu(null);
// import { format as formatUrl } from 'url'
//  import * as path from 'path'
// if (isDevelopment) {
//   // Don't load any native (external) modules until the following line is run:
//   require('module').globalPaths.push(process.env.NODE_MODULES_PATH)
// }
// const isDevelopment = process.env.NODE_ENV === 'production'
// import { electron } from 'electron'
// const fs = electron.remote.require('fs');
// Vue.use(fs);
//const isDevelopment = process.env.NODE_ENV == 'production'
//const winURL = process.env.NODE_ENV === 'production' ? 'http://localhost:8081' : `C:\Users\Ismail\AppData\Roaming\cleverContract1\Local Storage\leveldb`;
//const winURL = process.env.NODE_ENV === 'production' ? 'http://localhost:8081' : `window.localStorage`;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let taskWindow

//const windows = new Set();
// Scheme must be registered before the app is ready
app.commandLine.appendSwitch ("disable-http-cache");
// protocol.registerStandardSchemes(['app'], { secure: true })
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

function createWindow() {
  globalShortcut.register('f5', function() {
    // console.log('f5 is pressed')
    // mainWindow.reload()
}),
globalShortcut.register('CommandOrControl+R', function() {
    // console.log('CommandOrControl+R is pressed')
    // mainWindow.reload()
})
  // Create the browser window.
  win = new BrowserWindow({
    width:1850 ,
  height: 1150,
  minWidth: 1800,
   maxWidth: 10000,
  minHeight: 1100,
  maxHeight: 20000,
 frame:true,
 // show: false,
 webPreferences: {
   // Use pluginOptions.nodeIntegration, leave this alone
   // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
   // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
   // nodeIntegration:process.env.WEBPACK_DEV_SERVER_URL,
   nodeIntegration: true,
   enableRemoteModule:true,
      contextIsolation: false,
      //  devTools: false,
      // allowRunningInsecureContent:true,
      // experimentalFeatures:true,
      webSecurity: false,
      // zoomFactor:.8,
      
    },
    
  })
  // win.setMenuBarVisibility(false)
  // win.setApplicationMenu(false)
  // win.loadFile('index.html')
  // win.loadURL('index.html')
  // Open the DevTools.
  // win.webContents.openDevTools()
 // win.setMenuBarVisibility(false)
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    // win.loadURL('index.html')
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
   win.loadURL('app://./index.html')
  // win.loadFile('app://./index.html')
    //win.loadURL(winURL);
  }
  // app.commandLine.appendSwitch('disable-site-isolation-trials');
  win.once("ready-to-show", () => {
    win.webContents.setZoomFactor(1);
    win.show();
});
  // win.once('ready-to-show',() =>{
  //   win.show();
  // }) 
  // app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');
   
  win.on('ready', createWindow,
  console.log("1")
  )
  // win.on('ready', () => {
  //   createWindow()
  //   const firstTimeFilePath = path.resolve(app.getPath('userData'), '.first-time-huh');
  //   let isFirstTime;
  //   console.log(firstTimeFilePath);
  //   try {
  //     console.log("1");
  //     fs.closeSync(fs.openSync(firstTimeFilePath, 'wx'));
  //     isFirstTime = true;
  //   } catch(e) {
  //     console.log("2");
  //     if (e.code === 'EEXIST') {
  //       console.log("3");
  //       isFirstTime = false;
  //     } else {
  //       console.log("4");
  //       // something gone wrong
  //       throw e;
  //     }
  //   }
  
  //   // ...
  // });
  win.on('closed', () => {
   // windows.delete(win);
    win = null
  })
  win.on('close', function(e) {
    //var data = localStorage.getItem('vuex');
    //console.log(data);
   // console.log("idhr save functainality daalni h ");
    //var fs = require('fs');
    //fs.writeFile("./data.json", data, function(err) {
    //  if (err) {
    //    console.log(err);
    // }
    //});
    
    const choice = require('electron').dialog.showMessageBoxSync(this,
      {
        type: 'question',
        buttons: ['Nein','Ja' ],
        title: 'Bestätigen',
        message: 'Sind Sie sicher, dass Sie Clever Contracts beenden möchten?'
      });
    if (choice === 0) {
      e.preventDefault();
    }
    //store.commit("setLogged", false);
      // this.$store.commit("setIsAdmin", false);
      // this.$store.commit("setIsSuperUser", false);
      // this.$store.commit("setBuildproductionmode", true);
      // this.store.commit("settitlenewcontract",false)
  });
  
  // windows.add(win);
  // return win;
  
  // setInterval(() => {
  //   store.dispatch("increment")
  // }, 5000)
}
function registerLocalResourceProtocol() {
  protocol.registerFileProtocol('local-resource', (request, callback) => {
    const url = request.url.replace(/^local-resource:\/\//, '')
    // Decode URL to prevent errors when loading filenames with UTF-8 chars or chars like "#"
    const decodedUrl = decodeURI(url) // Needed in case URL contains spaces
    try {
      return callback(decodedUrl)
    }
    catch (error) {
      console.error('ERROR: registerLocalResourceProtocol: Could not get file path:', error)
    }
  })
}
function createTaskWindow () {
  // alert("in")
  // $store.commit("addsecondwindow", false);
  // alert("okha")
  const window = new BrowserWindow({
    width:900 ,
  height: 600,
  minWidth: 500,
   maxWidth: 10000,
  minHeight: 600,
  maxHeight: 20000,
    frame:true,
    // transparent:true,
    webPreferences: {
      webSecurity: false,
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      nodeIntegration: true,
      enableRemoteModule:true,
      contextIsolation: false,
       //devTools: false,
     
     
    },
  }
    )
  if (isDevelopment) {
    // window.hide();
    // app.commandLine.appendSwitch('disable-site-isolation-trials'), 
    // Vue.prototype.$secondwindow = true;
    // Load the url of the dev server if in development mode
    //  window.loadURL('D:/projects/cleverContracts/my.pdf')
    
    // window.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // win.loadURL(`file://${__dirname}/app/index.html`)
    window.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
  }
  else {
    createProtocol('app')
    // Load the index.html when not in development
   window.loadURL('app://./index.html')
  //window.loadURL(process.env.WEBPACK_DEV_SERVER_URL+'/#/test2')
    //  createProtocol('app')
    //  window.loadFile('/#/test2');
  //    window.loadURL(url.format({
  //     pathname: path.join(__dirname,'/../components/test2.vue'),
  //     protocol: 'file',
  //     slashes: true
  // }))
  // window.webContents.openDevTools()
    // window.loadURL(process.env.NODE_ENV+'/#/test2')
    // window.loadURL('app://./test2.vue')
    //createProtocol('process.env.WEBPACK_DEV_SERVER_URL')
    // window.loadURL(
    //   formatUrl({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file',
    //     slashes: true
    //   })
    // )
    // window.loadURL(`file://${process.cwd()}/components/test2.vue`);
    // Load the index.html when not in development
    // window.loadURL('file://' + path.join(__dirname, '/#/test1'))
    //  window.loadURL(process.env.WEBPACK_DEV_SERVER_URL+'/#/test1')
    // window.webContents.openDevTools();
    //window.loadURL(`app://./${prodPath}`)
    // window.loadURL('app://./test1.vue')
  // window.loadFile('app://./index.html')
    //win.loadURL(winURL);
  }
  // if(process.env.NODE_ENV === "production"){
  //  // window.loadURL('app://./index.html')
  //  window.loadURL(process.env.WEBPACK_DEV_SERVER_URL+'/#/test2')
  // }
  window.once('ready-to-show',() =>{
    // window.webContents.setZoomFactor(2);
    // show: false,
    // window.hide();
  }) 
  window.on('ready', createTaskWindow)
  window.on('closed', () => {
    taskWindow = null

  })
  return window
}
ipcMain.on('imagecreatedsignal',(event,imagepages)=>{
  console.log('signal received')
  win.webContents.send('imagecreatedsignalpt2',imagepages)
})
ipcMain.on('openTaskForm',()=>{
  console.log('event emitted')
  taskWindow=createTaskWindow();
})
ipcMain.on('closeTaskForm',(event,arg)=>{
 taskWindow.close();
  mainWindow.webContents.send('form-closed')
})
// process.on('exit', () => {
//   app.quit();
// });
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  
  //  store.dispatch('getdata');
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    // var data = win.localStorage.menuItem('vuex');
    //      let dataString = JSON.stringify({ "data": data });
    //      var fileName= "data.json";
    //             var pp = document.createElement('a');
    //             pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(dataString));
    //             pp.setAttribute('download', fileName);
    //             pp.click();
    app.quit()
  }
})

app.on('activate', () => {
  
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  registerLocalResourceProtocol()
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } 
  else{
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
 }
// if (isDevelopment) {
//   if (process.platform === 'win32') {
//     process.on('message', (data) => {
//       if (data === 'graceful-exit') {
//         app.quit()
//       }
//     })
//   } 
  // else{
    
  // }

// }

import Vue from 'vue';
import Vuex  from 'vuex';
var fs = require('fs');
const electron = require("electron");
 const path = require("path");
import createPersistedState from "vuex-persistedstate";
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
 //const { getCurrentWindow  } = require("electron");
 //const {getCurrentWindow,globalShortcut} = require('electron').remote;
Vue.use(Vuex);
 
export default new Vuex.Store({
  //strict:true,
  state: {
    side_navigation_bar:true,
    group_component:false,
    import_pdf_png_content:[],
    filepathpdf:"",
    secondwindowtest:false,
    navbardashboardicon:false,
    navbarcontractcreatoricon:false,
    importcontract: [], 
    maincolor:{
      theme:"#EAAD35",
      bar:"#FBEFD7",

    },
    eyecheck:false,
    //sidenavigation_admin data
    Dashboardadmin:true,
    Dashboarduser:true,
    zuletztbearbeitetadmin : false,
    Arbeitsbereicheadmin : false ,
    Benutzeradmin : false,
    Papierkorbadmin : false,
    grid:false,
    list:true,
    Zuletztbearbeitetuser:false,
    Furmichfreigegebenuser:false,
    Papierkorbuser:false,


    current_admin_deleted_data: "",
    deleted: [],
    incremental:[],
    eid:[
      //eid
    ],
    //name:"", 
    admin: [
      // {
      //   id: "",
      //   name: "",
      //   email: "",
      //   password: "",
      //   is_admin: Boolean,
      //   is_superuser: Boolean,
      // }
    ],
    admin_counter: 0,
    buildproductionmode:true,
    contract: [
      // {
      
      //   contract_title: "",
    
      // }
    ],
    copycontract: [
      // {
      //   id: ""
      //   title: "",
      //   front_title: "",
      //   group_id:"",
      //   group_title:"",
      //   admin_name: "",
      //   percentage: 0,
      //   date:
      //   time: 
      //   isedited: boolean
      // contract_partner: "Partner Name",
      //   deadline: "deadline date",
      //   type: "pdf",
      //   creator: "createdbysomeone",
      //   add_tab_chip : []
      // }
    ],
    copycontract_counter: 0,
    contract_counter: 0,
    new_contract_creator_counter : 1,
    contract_list_of_user:[],
    fileDetail: [],
    group: [
      // {
      //   admin_name: "",
      //   group_id: "",
      //   group_title: "",
      //   group_color: ""
      //   group_preview:"",
      //   group_icon: mdi-handshake-outline
      //   user: [],
      //   contract: []
      //   add_tab_chip : [],
      //   filter: [],
      // }
    ],
    group_counter: 0,
    help:false,
    edit:false,
    title_new_contract: false,
    isAdmin: false,
    is_superuser: false,
    logged:false,  
    user: [
      // {
      //   id: "",
      //   name: "",
      //   email: "",
      //   admin_name: "",
      //   contracts: [],
      // }
    ],
    user_counter: 0,
    copyuser_counter: 0,
    current_admin_name: "",
    current_admin_users: "",
    current_admin_groups: "",
    current_admin_recent_contracts: "",
    current_admin_profile_pic: "",
    current_user_name:"",
    current_user_recent_contracts: "",
    current_admin_versions: "",
    super_user_data: "",
    version: [
      //admin_name
      //admin_versions:[
        //contract_name: ""
        //contract_total_version: ""
      ],
      groupnamesarray: [],
      contract_card_details: [
        // contract_name: ""
        // document: "" object
      ]
  },
  mutations: {
    deletealldata(state) {
      state.deleted =  []
    },
    deletespecifcdata(state, value) {
      //state.deleted.splice(state.deleted.findIndex( o => o.tagID === value), 1)
      var newArr = state.deleted.reduce(function(acc, curr, index) {
        if (curr.tagID === value) {
          acc.push(index);
        }
        return acc;
      }, []);
      var len = newArr.length
      for (var i = len; i >= 1; i--){
        state.deleted.splice(newArr[i-1], 1)
      }
    },
    set_side_navigation_bar(state) {
      state.side_navigation_bar = !state.side_navigation_bar
    },
    clearduedate(state, value) {
      // var group = state.group.find((o) => o.admin_name === value[0] && o.group_title === value[2])
      // group.contract.find((o) => o.front_title === value[1] && o.group_title === value[2]).deadline=null
      // copycontract value has not been updated via datepicker

      state.copycontract.find((o) => o.id === value).deadline = null

    },
    changecontractpartner(state, value) {
      // var group = state.group.find((o) => o.admin_name === value[0] && o.group_title === value[2])
      // group.contract.find((o) => o.front_title === value[1] && o.group_title === value[2]).contract_partner = value[3]
      state.copycontract.find((o) => o.id === value[0]).contract_partner = value[1]
    },
    removetabchipinfilter(state,value){
      var array = state.group.find(o=>o.group_id === value[1]).filter
      const index = array.indexOf(value[0]);
      if (index > -1) {
        array.splice(index, 1);   
      }
    },
    addtabchipinfilter(state,value){
      var obj = state.group.find(o=>o.group_id === value[1]).filter
      obj.unshift(value[0])
      if(obj.length>5) obj.length = 5
    },
    removetabchip(state,value){  
      var array = state.group.find(o=>o.group_id === value[1]).add_tab_chip
      const index = array.indexOf(value[0]);
      if (index > -1) {
        array.splice(index, 1);   
      }
    },
    addtabchip(state,value){
      state.group.find(o=>o.group_id === value[1]).add_tab_chip.push(value[0]) 
    },
    hexToRgbA(hex){
      var c;
      if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
          c= hex.substring(1).split('');
          if(c.length== 3){
              c= [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c= '0x'+c.join('');
          return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
      }
      throw new Error('Bad Hex');
  },
  changegroupcolor(state,value){
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(value[0])){
      var c= value[0].substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      var lightcolor = 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.4)';
  }
  // var a,
  //   rgb = lightcolor.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
  //   alpha = (rgb && rgb[4] || "").trim(),
  //   hex = rgb ?
  //   (rgb[1] | 1 << 8).toString(16).slice(1) +
  //   (rgb[2] | 1 << 8).toString(16).slice(1) +
  //   (rgb[3] | 1 << 8).toString(16).slice(1) : lightcolor;

  // if (alpha !== "") {
  //   a = alpha;
  // } else {
  //   a = 1;
  // }
  // // multiply before convert to HEX
  // a = ((a * 255) | 1 << 8).toString(16).slice(1)
  // hex = hex + a;
  // console.log(hex)
  var group = state.group.find(o=>o.group_id === value[1])
  group.group_color = value[0]
  group.group_lightcolor = lightcolor
  },
    // changegroupcolor(state,value){
    //   var col = value[0]
    //   var amt = 90
    //   var usePound = false;
    //   if (col[0] == "#") {
    //       col = col.slice(1);
    //       usePound = true;
    //   }
    //   var num = parseInt(col,16);
    //   var r = (num >> 16) + amt;
    //   if (r > 255) r = 255;
    //   else if  (r < 0) r = 0;
    //   var b = ((num >> 8) & 0x00FF) + amt;
    //   if (b > 255) b = 255;
    //   else if  (b < 0) b = 0;
    //   var g = (num & 0x0000FF) + amt;
    //   if (g > 255) g = 255;
    //   else if (g < 0) g = 0;
    //   var lightcolor = (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16)
    //   var group = state.group.find(o=>o.group_id === value[1])
    //   group.group_color = value[0]
    //   group.group_lightcolor = lightcolor
    // },
    changegroupicon(state,value){
      state.group.find(o=>o.group_id === value[1]).group_icon = value[0]
    },
    set_group_component(state,value){
      state.group_component = value
    },
    add_import_pdf_png_content(state,value){
      state.import_pdf_png_content = value
    },
    addfilepath(state,value){
      state.filepathpdf = value
    },
    changeadminpasswordfromappvue(state,value){
      var obj = state.admin.find(o=>o.name === value[0])
      obj.password = value[1]
    },
    changeadminnamefromappvue(state,value){
      var obj;
      //copycontract
      obj = state.copycontract.filter(o=>o.admin_name === value[0])
      obj.forEach(element => element.admin_name= value[1])
      //group
      obj = state.group.filter(o=>o.admin_name === value[0]) 
      obj.forEach(element => element.admin_name= value[1])
      //group (contracts in group)
      obj.forEach(element => element.contract.forEach(element1 => element1.admin_name = value[1]));
      //user (contracts in users) => auto set (via getters, setters)
      // admin name change
      obj = state.admin.filter(o=>o.name === value[0])
      // console.log(obj)
      // recent contracts last edited
      obj[0].recent_contracts.forEach(element => element.last_edited= value[1])
      //deleted data => contracts,users(contracts in users),user_from_benutzer -> autoset(via getters,settetrs) , groups remaining
      obj[0].deleted_data.group.forEach(element => element.admin_name= value[1])
      //last change name
      obj[0].name = value[1]
      state.current_admin_name = value[1]
    },
    addsecondwindow(state,value){
      state.secondwindowtest = value
    },
    addcontractimportcounter(state,value){
      // console.log("agia")
      //console.log(value)
      var obj=state.contract_card_details.find((o) => o.contract_name === value[0]);
     // console.log(obj)
      var obj1 = obj.document.leftSide.card.find((o) => o.name === value[1]);
     // console.log(obj1)
      obj1.import_counter++
    },
    
    setnavbardashboardicon(state,value){
      state.navbardashboardicon = value
    },
    setnavbarcontractcreatoricon(state,value){
      state.navbarcontractcreatoricon = value
    },
    seteyecheck(state,value){
      state.eyecheck = value
    },
    importcontract(state,value){
      // console.log("kikikik")
      state.importcontract = value
    },
    changemaincolor(state,value){
      state.maincolor.theme = value[0];
      state.maincolor.bar = value[1];
    },
    contractcardsavefunc(state,value){
      state.contract_card_details.push({
        contract_name : value.title,
        document: value.document
      })
    },
    setchipdatageneralsearchadmin(state,value) {
      for (var i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1]) {
          state.admin[i].chipdatageneralsearch.push(value[0])
        }
      }
    },
    adminchipdatageneralsearchremove(state,value){
      for (var i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1]) {
          for(var j =0 ; j < state.admin[i].chipdatageneralsearch.length ; j++){
            if( state.admin[i].chipdatageneralsearch[j] === value[0]){
              state.admin[i].chipdatageneralsearch.splice(j,1)
            }
          }
        }
      }
    },
    setchipdatatableuser(state,value) {
      state.chipdatatableuser.push(value);
    },
    setchipdatagroupsuser(state,value) {
      state.chipdatagroupsuser.push(value);
    },
    setchipdatarecentcontractsuser(state,value) {
      state.chipdatarecentcontractsuser.push(value);
    },
    setchipdatatableadmin(state,value) {
      for (var i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1]) {
          state.admin[i].chipdatatable.push(value[0])
        }
      }
    },
    setchipdatagroupsadmin(state,value) {
      for (var i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1]) {
          state.admin[i].chipdatagroups.push(value[0])
        }
      }
    },
    setchipdatarecentcontractsadmin(state,value) {
      for (var i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1]) {
          state.admin[i].chipdatarecentcontracts.push(value[0])
        }
      }
    },
    userchipdatatableremove(state,value){
      for(var i=0 ; i< state.chipdatatableuser.length ; i++){
        if(state.chipdatatableuser[i]===value){
          state.chipdatatableuser.splice(i,1)
        }
      }
    },
    userchipdatagroupsremove(state,value){
      for(var i=0 ; i< state.chipdatagroupsuser.length ; i++){
        if(state.chipdatagroupsuser[i]===value){
          state.chipdatagroupsuser.splice(i,1)
        }
      }
    },
    userchipdatarecentcontractsremove(state,value){
      for(var i=0 ; i< state.chipdatarecentcontractsuser.length ; i++){
        if(state.chipdatarecentcontractsuser[i]===value){
          state.chipdatarecentcontractsuser.splice(i,1)
        }
      }
    },
    adminchipdatatableremove(state,value){
      for (var i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1]) {
          for(var j =0 ; j < state.admin[i].chipdatatable.length ; j++){
            if( state.admin[i].chipdatatable[j] === value[0]){
              state.admin[i].chipdatatable.splice(j,1)
            }
          }
        }
      }
    },
    adminchipdatagroupsremove(state,value){
      for (var i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1]) {
          for(var j =0 ; j < state.admin[i].chipdatagroups.length ; j++){
            if( state.admin[i].chipdatagroups[j] === value[0]){
              state.admin[i].chipdatagroups.splice(j,1)
            }
          }
        }
      }
    },
    adminchipdatarecentcontractsremove(state,value){
      for (var i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1]) {
          for(var j =0 ; j < state.admin[i].chipdatarecentcontracts.length ; j++){
            if( state.admin[i].chipdatarecentcontracts[j] === value[0]){
              state.admin[i].chipdatarecentcontracts.splice(j,1)
            }
          }
        }
      }
    },
    changekeeporiginalcontractingroup(state,value){
      state.group.find(o => o.group_id === value[0]).keep_original_contract = value[1]
    },
    
    setcurrentadmindeleted(state) {
      state.current_admin_deleted_data = state.deleted
    },
    setFileDetail(state, status) {
      state.fileDetail = status;
    },
    setHelp(state, status) {
      state.help = status;
    },
    setEdit(state, status) {
      state.edit = status;
    },
    settitlenewcontract(state, status) {
      // console.log("3")
      state.title_new_contract = status;
      // console.log(state.title_new_contract)
    },
    setgrid(state, status) {
      state.grid = status;
    },
    setlist(state, status) {
      state.list = status;
    },
    setDialog(state, status) {
      state.dialog3 = status;
    },
    setLogged(state, status) {
      state.logged = status;
    },
    setBuildproductionmode(state, status) {
      state.buildproductionmode = status;
      
    },
    setIsAdmin(state, status) {
      state.isAdmin = status;
    },
    setcurrentadminprofilepic(state,value){
      state.current_admin_profile_pic = value
    },
    setIsSuperUser(state, status) {
      state.is_superuser = status;
    },
    setContract_list_of_user(state, status) {
      state.contract_list_of_user = status;
    },
    setzuletztbearbeitetadmincheck(state, value) {
      state.zuletztbearbeitetadmin = value;
    },
    setArbeitsbereicheadmincheck(state, value) {
      state.Arbeitsbereicheadmin = value;
    },
    setBenutzeradmincheck(state, value) {
      state.Benutzeradmin = value;
    },
    setPapierkorbadmincheck(state, value) {
      state.Papierkorbadmin = value;
    },
    setDashboardadmincheck(state, value) {
      state.Dashboardadmin = value;
    },
    setDashboardusercheck(state, value) {
      state.Dashboarduser = value;
    },
    setZuletztbearbeitetusercheck(state, value) {
      state.Zuletztbearbeitetuser = value;
    },
    setFurmichfreigegebenusercheck(state, value) {
      state.Furmichfreigegebenuser = value;
    },
    setPapierkorbusercheck(state, value) {
      state.Papierkorbuser = value;
    },
    setcurrentadminname(state, value) {
      state.current_admin_name = value;
    },
    setcurrentadmingroups(state, value) {
      state.current_admin_groups = value;
    },
    setcurrentadminusers(state, value) {
      state.current_admin_users = value;
    },
    setcurrentadminrecentcontracts(state, value) {
      state.current_admin_recent_contracts = value;
    },
    setcurrentusername(state, value) {
      state.current_user_name = value;
    },
    setcurrentadminversions(state) {
      state.current_admin_versions = state.version;
    },
    setcurrentuserrecentcontracts(state, value) {
     // console.log(value);
      state.current_user_recent_contracts = value ;
    },
    set_user_and_admin(state,value){
      state.super_user_data = value;
    },
    //  updateStore:(state, marker, value) => {
    //   state[marker] = value;
    //   persistentStore.set(marker, value)
    // },
    adminsavefunc(state, value) {
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE")
      const [date,time_ws] = datetime.split(',');
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      // var a = {
      //   'contract' : [],
      //   'user' : [],
      //   'group' :[],
      //   'user_from_benutzer': [],
      // }
      var profile_data = {
        firstname: "" ,
        lastname: "",
      }
      
      state.admin.push({
        id: ++state.admin_counter,
        name: value.name,
        email: value.email,
        //profile_pic: "https://cdn.vuetifyjs.com/images/john.jpg",
      //  weltfern // "data:image/png;base64,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/WyhVY8qDWQynzkGkJqZ1QdSvAVA9zI8WbdmYvZt0wxIRZ6od68euHy5CvsPuLQMwMjo2LjcgwdKXPpawdP4zB6ABvEXuLDrP6BfPH7+07kGJCJPtmD+T1zd4wvQNMtLqvOYxScKIDlzxhwhMV7vuNCQEDzy0CJYrT6zI0QtZLVa8djD9yMszJUVnGRKakbWbOWhTOD1r/z09DltNNH8IQDd39v96sF70C8+1oBU5A1CgoMREdEFn3z6mf7BQozunhDzt8P79xt4t1Pjef0eQIOlfjEA3TfWm5AyDuPGjjIgEXmTsaNGIHW8S9eJdbY32B5RncfdvL4ABPBTvWMiunTGPQt+ZkQc8kKLFtzl0krOUsDrX0ReXQCpU2Z1BRChd9x9v5zvs7fgJv2Cg4Nw78L5rgztfPU16LW8ugCaG6Xu1ThvGXMzhg5xeV0Q8lE3DR2MsaNG6B7X3NTg1YtCenUBBODrSgAtXgQuODgIC38+z8BE5M0W3v1TBAfrek+p1WrOHzcqjzt4dQEUFBTUSylavJ77vLmzuKoPXVPHDu0xb+6slg+QctWmTZuajEtkPK8uAAAQUvs1gB/9JfTvF4+pmRPdkIi82dTMiUho2VfDDRC2J43OYzSvPw+gorzkVO+YuEOAmIxr/Dw9e3THk0seQUhwsJvTkbcRQmBY4mB8vnM3Ll665lWDDVKIOzeseW+TO7MZwesLAAAqykr2RMck5EugM4A+uLpnE96uLbJuzcTDDyxCG5fO+CJ/FBwUhAmp4xDgCMDJU6dRXV3zzX81SCnypVW7Y+PqFYVmZlTF99YDSLsjJKittdff/vzCno4d2psdh3zApUtf465f3h9Tc+H00YKCgnqz8xAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZEK/ws2rPsq0m89egAAAABJRU5ErkJggg=="
        // weil bern: "data:image/png;base64,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",
        profile_pic:"data:image/png;base64,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/WyhVY8qDWQynzkGkJqZ1QdSvAVA9zI8WbdmYvZt0wxIRZ6od68euHy5CvsPuLQMwMjo2LjcgwdKXPpawdP4zB6ABvEXuLDrP6BfPH7+07kGJCJPtmD+T1zd4wvQNMtLqvOYxScKIDlzxhwhMV7vuNCQEDzy0CJYrT6zI0QtZLVa8djD9yMszJUVnGRKakbWbOWhTOD1r/z09DltNNH8IQDd39v96sF70C8+1oBU5A1CgoMREdEFn3z6mf7BQozunhDzt8P79xt4t1Pjef0eQIOlfjEA3TfWm5AyDuPGjjIgEXmTsaNGIHW8S9eJdbY32B5RncfdvL4ABPBTvWMiunTGPQt+ZkQc8kKLFtzl0krOUsDrX0ReXQCpU2Z1BRChd9x9v5zvs7fgJv2Cg4Nw78L5rgztfPU16LW8ugCaG6Xu1ThvGXMzhg5xeV0Q8lE3DR2MsaNG6B7X3NTg1YtCenUBBODrSgAtXgQuODgIC38+z8BE5M0W3v1TBAfrek+p1WrOHzcqjzt4dQEUFBTUSylavJ77vLmzuKoPXVPHDu0xb+6slg+QctWmTZuajEtkPK8uAAAQUvs1gB/9JfTvF4+pmRPdkIi82dTMiUho2VfDDRC2J43OYzSvPw+gorzkVO+YuEOAmIxr/Dw9e3THk0seQUhwsJvTkbcRQmBY4mB8vnM3Ll665lWDDVKIOzeseW+TO7MZwesLAAAqykr2RMck5EugM4A+uLpnE96uLbJuzcTDDyxCG5fO+CJ/FBwUhAmp4xDgCMDJU6dRXV3zzX81SCnypVW7Y+PqFYVmZlTF99YDSLsjJKittdff/vzCno4d2psdh3zApUtf465f3h9Tc+H00YKCgnqz8xAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZEK/ws2rPsq0m89egAAAABJRU5ErkJggg==",
        password: value.password,
        is_admin: value.is_admin,
        is_superuser : value.is_superuser,
        recent_contracts: [],
        contracts:{},
        //deleted_data:a,
        // version: value.admin_version,
        date: date,
        time: time,
        profile: profile_data,
        chipdatatable:[],
        chipdatagroups:[],
        chipdatarecentcontracts:[],
        chipdatageneralsearch:[],
      });
      // Vue.set(state,'admin',state.admin);
    },
    adminsavefuncrestore(state, value) {
      var contract_obj = {};
      var group_id = value.contracts
      var len = group_id.length
      for(var i=0; i< len ; i++){
        var group = state.group.find(o =>o.group_id === parseInt(group_id[i]))
        if(group !== undefined){
          group.user.push(value.id)
          contract_obj[group.group_id] = group.contract
        }
      }
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE")
      const [date,time_ws] = datetime.split(',');
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      state.admin.push({
        id: value.id,
        name: value.name,
        email: value.email,
        //profile_pic: "https://cdn.vuetifyjs.com/images/john.jpg",
      //  weltfern // "data:image/png;base64,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/WyhVY8qDWQynzkGkJqZ1QdSvAVA9zI8WbdmYvZt0wxIRZ6od68euHy5CvsPuLQMwMjo2LjcgwdKXPpawdP4zB6ABvEXuLDrP6BfPH7+07kGJCJPtmD+T1zd4wvQNMtLqvOYxScKIDlzxhwhMV7vuNCQEDzy0CJYrT6zI0QtZLVa8djD9yMszJUVnGRKakbWbOWhTOD1r/z09DltNNH8IQDd39v96sF70C8+1oBU5A1CgoMREdEFn3z6mf7BQozunhDzt8P79xt4t1Pjef0eQIOlfjEA3TfWm5AyDuPGjjIgEXmTsaNGIHW8S9eJdbY32B5RncfdvL4ABPBTvWMiunTGPQt+ZkQc8kKLFtzl0krOUsDrX0ReXQCpU2Z1BRChd9x9v5zvs7fgJv2Cg4Nw78L5rgztfPU16LW8ugCaG6Xu1ThvGXMzhg5xeV0Q8lE3DR2MsaNG6B7X3NTg1YtCenUBBODrSgAtXgQuODgIC38+z8BE5M0W3v1TBAfrek+p1WrOHzcqjzt4dQEUFBTUSylavJ77vLmzuKoPXVPHDu0xb+6slg+QctWmTZuajEtkPK8uAAAQUvs1gB/9JfTvF4+pmRPdkIi82dTMiUho2VfDDRC2J43OYzSvPw+gorzkVO+YuEOAmIxr/Dw9e3THk0seQUhwsJvTkbcRQmBY4mB8vnM3Ll665lWDDVKIOzeseW+TO7MZwesLAAAqykr2RMck5EugM4A+uLpnE96uLbJuzcTDDyxCG5fO+CJ/FBwUhAmp4xDgCMDJU6dRXV3zzX81SCnypVW7Y+PqFYVmZlTF99YDSLsjJKittdff/vzCno4d2psdh3zApUtf465f3h9Tc+H00YKCgnqz8xAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZEK/ws2rPsq0m89egAAAABJRU5ErkJggg=="
        // weil bern: "data:image/png;base64,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",
        profile_pic:value.profile_pic,
        password: value.password,
        is_admin: value.is_admin,
        is_superuser : value.is_superuser,
        recent_contracts: [],
        contracts:contract_obj,
        //deleted_data:a,
        // version: value.admin_version,
        date: date,
        time: time,
        profile: value.profile_data,
        chipdatatable:value.chipdatatable,
        chipdatagroups:value.chipdatagroups,
        chipdatarecentcontracts:value.chipdatarecentcontracts,
        chipdatageneralsearch:value.chipdatageneralsearch,
      });
      // Vue.set(state,'admin',state.admin);
    },
    usersavefunc(state, value) {
          var d1 = new Date();
          var datetime = d1.toLocaleString("de-DE")
          const [date,time_ws] = datetime.split(',');
          var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
          state.user.push({
            user_id: ++state.user_counter,
            user_name: value.name,
            user_email: value.email,
            user_password : value.password,
            admin_name : value.admin_name,
            user_contracts: [],
            recent_contracts:[],
            deleted_data:[],
            user_date: date,
            user_time: time
          }) },
      versionsavefunc(state, value) {
        state.version.push({
          title : value.title,
          version: 1
        });
      },
    groupsavefunc(state, value) {
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE")
      const [date,time_ws] = datetime.split(',');
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      state.group.push({
        //contracts_quantity: 0,
        group_description: "-",
        group_id: ++state.group_counter,
        group_title: value.title,
        group_icon: "mdi-handshake-outline",
        group_color: "#85C186",
        group_lightcolor:'rgba(133,193,134,0.4)',
        group_preview:"",
        user:[],
        contract:[],
        admin_name: value.admin_name,
        keep_original_contract: value.keep_original_contract,
        date: date,
        time: time,
        add_tab_chip : ["Amazon"],
        filter: [],
      });
    },
    updatedversionslist(state, value) {
      state.version = value
    },
    // addcontractinuserviaonetime(state, value) {
    //   //value[0]->group_contracts,value[1]->user
    //   var i;
    //   for (i = 0; i < state.user.length; i++) {
    //     if (state.user[i].user_name === value[1].user_name) {
    //       state.user[i].user_contracts.push(value[0]);
    //     }
    //   }
    // },
    addcontractinuserviaonetime(state, value) {
      //value[0]->group_contracts,value[1]->user
      var i,j;
      for (i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1].name) {
          for (j =0 ; j< value[0].length; j++) {
            state.admin[i].contracts.push(value[0][j])
          }
        }
      }
    },
    addcontractgroupfunc(state, value) {
      var i = 0;
      for (i = 0; i < state.group.length; i++) {
        if (state.group[i].group_title === value[0].group_title) {
          state.group[i].contract.push(value[1]);
        }
      }
    },
    addcontractgroupfunctionforall(state, value) {
      var obj = state.group.find(o=>o.group_id === value[0])
      var c = obj.contract.concat(value[1])
      obj.contract = c
      // var i = 0;
      // for (i = 0; i < state.group.length; i++) {
      //   //console.log(value);
      //   if (state.group[i].group_title === value[0].group_title) {
      //     state.group[i].contract.push(value[1]);
      //   }
      // }
     
    },
    addcontractinallusercontractsingroup(state, value) {
      var i, j;
      for (i = 0; i < value[0].user.length; i++) {
        for (j = 0; j < state.admin.length; j++) {
          if (state.admin[j].name === value[0].user[i].name) {
           // value[1].group_title = value[2] ;
            state.admin[j].contracts.push(value[1]);
           // state.user[j].user_contracts;
          }
        }
      }
    },
    contractsavefunc(state, value) {
      state.contract.push({
        contract_id: ++state.contract_counter,
        contract_title: value.title,
      });
    },
    copycontractsavefunc(state, value) {
      var d1 = new Date();
          var datetime = d1.toLocaleString("de-DE")
          const [date,time_ws] = datetime.split(',');
          var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      var obj = {
            Firmennamemodel : "-",
            Adressemodel : "-",
            Websitemodel : "-",
            Telefonmodel : "-",
            Kontaktpersonmodel : "-",
      }
      state.copycontract.push({
        id : ++state.copycontract_counter,
        title: value.title,
        front_title: value.front_title,
        group_id : value.group_id,
        group_title : value.group_title,
        admin_name : value.admin_name,
        percentage : 0,
        date: date,
        time: time,
        last_edited: "",
        last_edited_date: "",
        last_edited_time: "",
        isedited: false,
        status: "Unausgefüllt",
        contract_partner: obj,
        deadline: null,
       // deadline: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        type: "clever",
        creator: value.admin_name,
        preview:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAcCAYAAAA0u3w+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA3SURBVFhH7c8BDQAwEMSg+Td908GnOODtuIK6grqCuoK6grqCuoK6grqCuoK6grqCuoK648HtAzrxaOnzqnHNAAAAAElFTkSuQmCC",
      });
    },
    copycontractsavefuncrestore(state, value) {
      var d1 = new Date();
          var datetime = d1.toLocaleString("de-DE")
          const [date,time_ws] = datetime.split(',');
          var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      state.copycontract.push({
        id : value.id,
        title: value.title,
        front_title: value.front_title,
        group_id : value.group_id,
        group_title : value.group_title,
        admin_name : value.admin_name,
        percentage : value.percentage,
        date: date,
        time: time,
        last_edited: value.last_edited,
        last_edited_date: value.last_edited_date,
        last_edited_time: value.last_edited_time,
        isedited: value.isedited,
        status: value.status, 
        contract_partner: value.contract_partner,
        deadline: value.deadline,
       // deadline: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        type: value.type,
        creator: value.admin_name,
        preview: value.preview,
      });
    },
    deletecontractpermanently(state,value){
      var i;
      for (i = 0; i < state.copycontract.length; i++) {
        if (state.copycontract[i].front_title === value[1].front_title &&  state.copycontract[i].admin_name === value[0]) {
          
          state.copycontract.splice(i,1)
        }
      }
    },
    addcontractsinusergroupfunc(state, value) {
      var obj = state.admin.find(o => o.id === value[1])
      if(value[2] in obj.contracts){
       var array = obj.contracts[value[2]] 
        var c = array.concat(value[0])
        obj.contracts[value[2]] = c
      }
      else{
        if(typeof (value[0]) === 'object') obj.contracts[value[2]] = value[0]
        else obj.contracts[value[2]] = [value[0]]
      }
        

      // var obj = state.admin.find(o => o.id === value[1])
      // var c = obj.contracts.concat(value[0])
      // obj.contracts = c

      // var i = 0;
      // for (i = 0; i < state.group.length; i++) {
      //   if (state.group[i].group_title === value[0].group_title) {
      //     state.group[i].user.push(value[1]);
      //   }
      // }
    },
    addusergroupfunc(state, value) {
      state.group.find(o => o.group_id === value[0]).user.push(value[1])
      // var i = 0;
      // for (i = 0; i < state.group.length; i++) {
      //   if (state.group[i].group_title === value[0].group_title) {
      //     state.group[i].user.push(value[1]);
      //   }
      // }
    },
    adduserforall(state, value) {
      //value[0]->group,value[1]->user,value[2]->contract
      var i;
      for (i = 0; i < state.user.length; i++) {
        if (state.user[i].user_name === value[1].user_name) {
          state.user[i].user_contracts.push(value[2]);
        }
      }
    },
    userupdatecontractgroupfunc(state, value) {
      if (value[0].contract.length !== 0) {
        var i = 0,j=0;
        for (i = 0; i < state.admin.length; i++) {
          if (state.admin[i].name === value[1].name) {
            // state.user[i].user_contracts.push(value[0].contract); //check if contract array is empty
            for (j = 0; j < value[0].contract.length; j++) {
              // console.log();
              state.admin[i].contracts.push(value[0].contract[j]);
            }
          }

        }
      }
    },
  
    deletecontractfromgroup(state, value) {
      //value[0]->contract_id .. value[1]->group_id
      var i;
      var group = state.group.find(o => o.group_id === value[1])
      var group_user = group.user
      var user, index, index2
      var len = group_user.length
      for(i = 0; i < len; i++){
        user = state.admin.find(o => o.id === group_user[i])
        if(value[1] in user.contracts) {
          index = user.contracts[value[1]].findIndex(o => o === value[0])
          user.contracts[value[1]].splice(index,1)
          if(value[2] === true && user.contracts[value[1]].length === 0){
            delete user.contracts[value[1]]
          }
        }
        //index = user.contracts.findIndex(o => o === value[0])
        //user.contracts.splice(index, 1)
        index2 = user.recent_contracts.findIndex(o => o === value[0])
        if(index2 !== -1) user.recent_contracts.splice(index2,1)
      }
      var group_contract = group.contract
      index = group_contract.findIndex(o => o === value[0])
      group.contract.splice(index,1)
      index = state.copycontract.findIndex(o => o.id === value[0])
      state.copycontract.splice(index,1)
      var all_admin_recent_contracts = state.admin.filter( o => o.is_admin === true)
      for (i = 0; i < all_admin_recent_contracts.length; i++){
        index = all_admin_recent_contracts[i].recent_contracts.findIndex(o => o === value[0])
        if(index !== -1) all_admin_recent_contracts[i].recent_contracts.splice(index,1)
      }
      // var  j, d, r;
      // for (j = 0; j < value[1].user.length; j++) {
      //   for (d = 0; d < value[1].user[j].user_contracts.length; d++) {
      //     if (
      //       value[1].user[j].contracts[d].contract_title ===
      //       value[0].contract_title
      //     ) {
      //       value[1].user[j].user_contracts.splice(d, 1);
      //     }
      //   }
      // }
      // for (r = 0; r < value[1].contract.length; r++) {
      //   if (value[1].contract[r].contract_title === value[0].contract_title) {
      //     value[1].contract.splice(r, 1);
      //   }
      // }
    },
    deleteuserfromgroupdeletion(state, value) {
      // var d1 = new Date();
      //     var datetime = d1.toLocaleString("de-DE")
      //     const [date,time_ws] = datetime.split(',');
      //     var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      // // value[0].user_date = date;
      // // value[0].user_time = time;
      // var  j, d, r,h;
      // for (j = 0; j < value[1].contract.length; j++) {
      //   for (d = 0; d < value[0].contracts.length; d++) {
      //     if (
      //       value[1].contract[j].front_title ===
      //       value[0].contracts[d].front_title
      //     ) {
      //       value[0].contracts.splice(d, 1);
      //       break;
      //     }
      //   }
      // }
      // for (r = 0; r < value[1].user.length; r++) {
      //   if (value[1].user[r].name === value[0].name) {  
      //     for(h=0; h<state.admin.length ; h++)
      //     {
      //       if(state.admin[h].name === value[2]){
      //         var copy_user = {}
      //         copy_user = Object.assign(copy_user,value[0]);
      //         copy_user.id = ++state.copyuser_counter
      //         copy_user.date = date;
      //         copy_user.time = time;
      //         copy_user["group_title"] = value[1].group_title
      //         state.admin[h].deleted_data.user.push(copy_user)
      //         // value[0]["group_title"] = value[1].group_title
      //         // state.deleted[h].deleted_data.user.push(value[0])
      //       }
      //     }
      //     value[1].user.splice(r, 1);
      //   }
      // }s
    
      var i;
      var group = state.group.find(o => o.group_id === value[1])
      var group_user = group.user
      var user = state.admin.find(o => o.id === value[0])
      var user_contracts = user.contracts
      var user_recentcontracts = user.recent_contracts
      var index = group_user.findIndex( o => o === value[0])
      group_user.splice(index,1)
      var contracts = group.contract
      for (i = 0; i < contracts.length; i++){
        // index = user_contracts.findIndex( o => o === contracts[i])
        // user_contracts.splice(index, 1)
        var index2 = user_recentcontracts.findIndex(o => o === contracts[i])
        if(index2 !== 0) user_recentcontracts.splice(index2,1)
      }
      if(group.group_id in user_contracts) {
        delete user_contracts[group.group_id]
      }
      //push in papierkorb
      var user_for_papeierkorb = JSON.parse(JSON.stringify(user))
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE")
      const [date,time_ws] = datetime.split(',');
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      user_for_papeierkorb.date = date;
      user_for_papeierkorb.time = time;
      user_for_papeierkorb.group_id = group.group_id
      user_for_papeierkorb.group_title = group.group_title
      user_for_papeierkorb.tagP = "user";
      user_for_papeierkorb.tagID = "user" + user_for_papeierkorb.id + user_for_papeierkorb.group_id
      index = state.deleted.findIndex ( o=> o.tagID === user_for_papeierkorb.tagID)
      if(index !== -1) state.deleted.splice(index,1)   
      state.deleted.push(user_for_papeierkorb)
      //state.group[value[1] - 1].user.splice(state.group[value[1] - 1].user.findIndex( o => o === value[0],1))
      // for (i = 0; i < users.length; i++){
      //   state.admin[value[0]-1].user.splice(state.admin[value[0]-1].user.findIndex( o => o === contracts[i],1))
      // }
      

    },
    deleteuserfromgroup(state, value) {
      //value[0]->group_user, value[1]->group[1]
      // var  j, d, r;
      // for (j = 0; j < value[1].contract.length; j++) {
      //   for (d = 0; d < value[0].contracts.length; d++) {
      //     if (
      //       value[1].contract[j].front_title ===
      //       value[0].contracts[d].front_title
      //     ) {
      //       value[0].contracts.splice(d, 1);
      //       break;
      //     }
      //   }
      // }
      // for (r = 0; r < value[1].user.length; r++) {
      //   if (value[1].user[r].name === value[0].name) {
      //     value[1].user.splice(r, 1);
      //   }
      // }

      //naya
      //value[0]->group_user.name, value[1]->group[1]
      for(var i=0; i<state.admin.length;i++){
        if(state.admin[i].name === value[0]){
          var len = state.admin[i].contracts.length
          for(var j=len-1; j>=0;j--){
            for(var k=0; k< value[1].length; k++){
              if(state.admin[i].contracts[j].front_title === value[1][k].front_title){
                state.admin[i].contracts.splice(j,1)
                break;
                
              }
             
            }
          }
          //break;
        }
      }
    
    },
    deletecontractfromgroup2(state, value) {
      //value[0]->contract_title,value[1]->group
      var  j ,d,r;
      for (j = 0; j < value[1].user.length; j++) {
        for (d = 0; d < value[1].user[j].contracts.length; d++) {
          if (
            value[1].user[j].contracts[d].front_title ===
            value[0]
          ) {
            value[1].user[j].contracts.splice(d, 1);
          }
        }
      }
      for (r = 0; r < value[1].contract.length; r++) {
        if (value[1].contract[r].front_title === value[0]) {
          value[1].contract.splice(r, 1);
        }
      }
    },
    deletegroup(state, value) {
      var index = state.group.findIndex( o => o.group_id === value)
      state.group.splice(index,1)
    },
    setdatawhenopen(state,value){
      state.maincolor= value.maincolor;
      state.admin= value.admin
      state.admin_counter= value.admin_counter
      state.contract= value.contract
      state.contract_counter= value.contract_counter
      state.copycontract_counter= value.copycontract_counter
      state.group= value.group
      state.group_counter= value.group_counter
      state.user= value.user
      state.user_counter= value.user_counter
      state.copyuser_counter = value.copyuser_counter
      state.copycontract = value.copycontract
      state.contract_card_details=value.contract_card_details
      state.version = value.version
      state.groupnamesarray =  value.groupnamesarray
      //state.title_new_contract=value.title_new_contract
      state.deleted = value.deleted
      state.new_contract_creator_counter=value.new_contract_creator_counter
      localStorage.setItem('vuex',state)    
    },
    clearalldata(state,value){
      state.Arbeitsbereicheadmin=false
      state.Benutzeradmin=false
      state.Dashboardadmin= true
      state.Dashboarduser=true
      state.Furmichfreigegebenuser= false
      state.Papierkorbadmin= false
      state.Papierkorbuser= false
      state.Zuletztbearbeitetuser= false
      state.admin= []
      state.admin_counter= value
      state.buildproductionmode= true;
      state.contract= []
      state.contract_card_details= []
      state.contract_counter= 0
      state.contract_list_of_user= []
      state.copycontract= []
      state.copycontract_counter= 0
      state.copyuser_counter= 0
      state.current_admin_deleted_data= ""
     state.current_admin_groups= ""
     state.current_admin_name= ""
     state.current_admin_recent_contracts= ""
     state.current_admin_users=""
     state.current_admin_versions= ""
     state.current_admin_profile_pic= ""
     state.current_user_name= ""
     state.current_user_recent_contracts= ""
     state.deleted= []
     state.edit= false
     state.fileDetail= []
     state.grid= false
     state.group= []
     state.group_counter= 0
     state.groupnamesarray= []
     state.help= false
     state.importcontract= []
     state.isAdmin= false
     state.is_superuser= false
     state.list= true
     state.logged= false
     state.maincolor= {theme: "#EAAD35", bar: "#FBEFD7"}
     state.new_contract_creator_counter= 1
     state.super_user_data= ""
     state.title_new_contract= false
     state.user= []
     state.user_counter= 0
     state.version= []
     state.zuletztbearbeitetadmin= false
    //   state.maincolor= value;
    //   state.admin= []     
    //   state.admin_counter= 1
    //   state.contract= []
    //   state.contract_counter= 1
    //   state.copycontract_counter= 1
    //   state.group= []
    //   state.group_counter= 1
    //   state.user= []
    //   state.user_counter= 1
    //   state.copyuser_counter = 1
    //   state.copycontract = []
    //   state.contract_card_details=[]
    //  // state.version = value.version
    //   state.groupnamesarray =  []
    //   state.title_new_contract=""
    //  // state.deleted = value.deleted
    //   //localStorage.setItem('vuex',state)    
    },
    updaterecentimage(state,value){
      state.copycontract.find((o) => o.id === value[0].id).preview = value[1]
      state.group.find(o => o.group_id === value[0].group_id).group_preview = value[1]
      // var obj = state.admin.find((o) => o.name === value[0])
      // var obj2 = obj.recent_contracts.find((o) => o.front_title === value[1] && o.group_title === value[2] )
      // obj2.url = value[3]
      // var group = state.group.find((o) => o.admin_name === value[0] && o.group_title === value[2])
      // group.group_preview = value[3]
      // group.contract.find((o) => o.front_title === value[1] && o.group_title === value[2]).preview = value[3]
      // state.copycontract.find((o) => o.admin_name === value[0] && o.group_title === value[2]).preview = value[3]
    },
    groupnamesarray(state,value){
      state.groupnamesarray.push(value)
    },
    setrecentcontractsinadmindata(state,value){
      var obj = state.admin.find( o => o.name === value[0] && o.is_admin === true).recent_contracts
      var index = obj.findIndex(o => o === value[1])
      if(index !== -1){
        obj.splice(index,1)
      }
      obj.unshift(value[1])
      if(obj.length>5){
        obj.length = 5
      }
    },
    setrecentcontractsincopycontract(state,value){
      var obj = state.copycontract.find( o => o.id === value[1].id)
      obj.last_edited = value[0]
      obj.last_edited_date = value[2]
      obj.last_edited_time = value[3]    
    },
    setrecentcontractsinuserdata(state,value){
      var obj = state.admin.find( o => o.name === value[0] && o.is_admin === false).recent_contracts
      var index = obj.findIndex(o => o === value[1])
      if(index !== -1){
        obj.splice(index,1)
      }
      obj.unshift(value[1])
      if(obj.length>5){
        obj.length = 5
      }
    },
    deleted_data(state,value){
      // var d1 = new Date();
      //     var datetime = d1.toLocaleString("de-DE")
      //     const [date,time_ws] = datetime.split(',');
      //     var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      // value[1].date = date;
      // value[1].time = time;
      // var i;
      // for (i = 0; i < state.admin.length; i++) {
      //   if (state.admin[i].name === value[0]) {
      //     state.admin[i].deleted_data.contract.push(value[1])
      //   }
      // }
      var obj = JSON.parse(JSON.stringify(state.copycontract.find(o => o.id === value)))
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE")
      const [date,time_ws] = datetime.split(',');
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      obj.date = date;
      obj.time = time;
      obj.tagP = "contract";
      obj.tagID = "contract" + obj.id;
      state.deleted.push(obj)
    },
    pushgroupinpapierkorb(state, value) {
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE")
      const [date,time_ws] = datetime.split(',');
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      value.id = value.group_id + "g"
      value.date = date;
      value.time = time;
      value.tagP = "group";
      value.tagID = "group" + value.group_id;
      var i,lenC = value.contract.length,array =[]
      for( i = 0 ; i< lenC; i++ ){
        var obj = state.copycontract.find(o => o.id === value.contract[i])
        array.push(JSON.parse(JSON.stringify(obj)))      
      }
      value.contracts_deleted_data = array
      state.deleted.push(value)
    },
    pushuserinpapierkorbfrombenutzer(state,value){
      // // console.log(value)/
      // var d1 = new Date();
      // var datetime = d1.toLocaleString("de-D
      // const [date,time_ws] = datetime.split(',');
      // var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      // // value[1].id = value[1].group_id + "g"
      // value[0].date = date;
      // value[0].time = time;
      // var i;
      // for (i = 0; i < state.admin.length; i++) {
      //   if (state.admin[i].name === value[1]) 

      //     state.admin[i].deleted_data.user_from_benutzer.push(value[0])
      //   }
      // }
      var obj = JSON.parse(JSON.stringify(state.admin.find( o => o.id === value)))
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE")
      const [date,time_ws] = datetime.split(',');
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      // value[1].id = value[1].group_id + "g"
      obj.date = date;
      obj.time = time;
      obj.tagP = "user_from_benutzer";
      obj.tagID = "user_from_benutzer" + obj.id;
      var obj_for_group = state.admin.find(o => o.id === obj.id)
      const keys = Object.keys(obj_for_group.contracts);
      obj.contracts = keys
      state.deleted.push(obj)
    },
    restoregroup(state,value){
      for(var i = 0 ; i<value.user.length; i++){
        for (var j=0; j<state.admin.length; j++){
          if(state.admin[j].name === value.user[i].name){
            for(var k=0;k< value.contract.length; k++){
              state.admin[j].contracts.push(value.contract[k])  
            }
            break
          }
        }
      }
      var len = value.user.length
      for(var l=len-1; l>=0 ; l--){
        var c=0;
        for(var m=0; m<state.admin.length;m++){
          if(value.user[l].id === state.admin[m].id){
            c= c+1
            break;
          }
        }
        if(c===0){
          value.user.splice(l,1)
        }        
        //delete group, then user, then restore user, then restore group-> i found a bug !!!!!!!
      }
      state.group.push(value)
    },
    groupsavefuncrestore(state,value){
      var d1 = new Date();
      var datetime = d1.toLocaleString("de-DE")
      const [date,time_ws] = datetime.split(',');
      var time = time_ws.substring(0, time_ws.lastIndexOf(":"));
      state.group.push({
        //contracts_quantity: 0,
        group_description: value.group_description,
        group_id: value.group_id,
        group_title: value.group_title,
        group_icon: value.group_icon,
        group_color: value.group_color,
        group_lightcolor:value.group_lightcolor,
        group_preview:value.group_preview,
        user:value.user,
        contract: value.contract,
        admin_name: value.admin_name,
        keep_original_contract: value.keep_original_contract,
        date: date,
        time: time,
        add_tab_chip : value.add_tab_chip,
        filter: value.filter,
      });
    },
    restoreuserfrombenutzer(state,value){
      var c=0;
      var array = new Array();
      for(var i=0 ; i<state.admin.length; i++){
        if(state.admin[i].name === value.name){
          c=c+1
          break;
        }
      }
      if(c===0){
        var len = value.contracts.length
        //console.log(len)
        for(var k=len-1 ; k>=0; k--){
          // console.log(value.contracts[k].group_title)
          let obj = state.group.find(o => o.group_title === value.contracts[k].group_title);
          //console.log("obj",obj)
           if(obj !== undefined){
              //console.log("obj",obj)
              let obj3 = obj.contract.find(o => o.front_title === value.contracts[k].front_title)
              if(obj3!== undefined){
                let obj1 = array.find(o => o === obj.group_title)
                //console.log("obj1",obj1)
                if(obj1 === undefined){
                  array.push(obj.group_title)
                //console.log("arrayinside",array)
                }
              }
              else{
                value.contracts.splice(k,1)
              }
              // add user and contract in group,delete user from benutzer,delete contract from grou, restore user, i found a bug!!!!!
          }
          else {
            value.contracts.splice(k,1)
          }
        }
        for(var l=0 ; l<array.length ; l++){
          let obj2 = state.group.find(o =>o.group_title === array[l])
          obj2.user.push(value) 
        }
        state.admin.push(value)
      }
    },
    deletedsavefunc(state, value) {
      state.deleted = value
    },
    changegrouptitle(state,value){
      var group = state.group.find(o =>o.group_id === value[0])
      group.group_title = value[1]
      var contract = state.copycontract.filter(o =>o.group_id === value[0])
      contract.forEach((each_contract) => {
        each_contract.group_title = value[1]
      });
      // group.contract.forEach((each_contract) => {
      //   each_contract.group_title = value[1]
      // });
      // group.user.forEach((each_contract) => {
      //   each_contract.group_title = value[1]
      // });
      console.log("HERE FROM THE INDEX.JS ");
    },
    changegrouptitle_contract(state,value){
      //value[0]-> group_id, value[1]-> new_group_title
      state.copycontract.find(o =>o.id === value[0]).group_title = value[1]
      
      // state.copycontract.forEach((element) => {
      //   if(element.group_id === value[0]) {
      //       element.group_title = value[1]
      //   }
      // });
      // console.log("AA")
      // for(var k=0 ; k < state.copycontract[k].length ; k++){
      //   if(state.copycontract[k].group_title  === value[0]){
      //     state.copycontract[k].group_title = value[1]
      //   } 
      // }
      // var i;
      // for (i = 0; i < state.group.length; i++) {
      //   if (state.group[i].group_title === value[0]) {
      //     state.group[i].group_title = value[1]
      //     for(var j=0 ; j < state.group[i].contract.length ; j++){
      //       state.group[i].contract[j].group_title = value[1]
      //     }
          
      //   }
      // }
    },
    changegrouptitle_user(state,value){
      //value[0]-> old_group_title, value[1]-> new_group_title
      var i;
      for (i = 0; i < state.group.length; i++) {
        if (state.group[i].group_title === value[1]) {
          for(var j=0 ; j < state.group[i].user.length ; j++){
            for(var k=0 ; k < state.group[i].user[j].contracts.length ; k++){
              if(state.group[i].user[j].contracts[k].group_title === value[0]){
                state.group[i].user[j].contracts[k].group_title = value[1]
              }
            }
          }
        }
      }
    },
    changegrouptitle_recentcontracts(state,value){
      //value[0]-> old_group_title, value[1]-> new_group_title
      for(var i=0; i< state.current_admin_recent_contracts.length; i++){
        if(state.current_admin_recent_contracts[i].group_title === value[0]){
          state.current_admin_recent_contracts[i].group_title = value[1]
          let url =state.current_admin_recent_contracts[i].url 
          let sp = url.split("-")
          sp[2] = value[1]
          url = sp.join("-")
          state.current_admin_recent_contracts[i].url = url
        }
      }
    },
    changepasswordofuserfromadminpanel(state,value){
      for(var i =0 ; i< state.admin.length ; i++){
        if(state.admin[i].name === value[0]){
          state.admin[i].password = value[1]
        }
      }
    },
    changeusernameofuserfromadminpanel(state,value){
      for(var i =0 ; i< state.admin.length ; i++){
        if(state.admin[i].name === value[0]){
          state.admin[i].name = value[1]
        }
      }
    },
    changeusernameofuserfromadminpanelingroups(state,value){
      for(var i =0 ; i< state.group.length ; i++){
        //if(state.group[i].admin_name === value[2]){
          for(var j=0; j< state.group[i].user.length; j++){
            if(state.group[i].user[j].name === value[0]){
              state.group[i].user[j].name = value[1]
            }
          }
        //}
      }
    },
    deleteuserfromadminpanel(state,value){
      // for(var i =0 ; i< state.admin.length ; i++){
      //   if(state.admin[i].name === value){
      //     state.admin.splice(i,1)
      //   }
      // }
      var index = state.admin.findIndex(o => o.id === value)
      state.admin.splice(index,1)
    },
 
    deleteuserfromadminpanelingroups(state, value) {
      for(var i =0 ; i< state.group.length ; i++){
          for(var j=0; j< state.group[i].user.length; j++){
            if(state.group[i].user[j] === value){
              state.group[i].user.splice(j,1)
            }
          }
      }
    },
    deleteadmin(state,value){
      var i;
      for(i =0 ; i< state.admin.length ; i++){
        if(state.admin[i].name === value.name){
          state.admin.splice(i,1)
        }
      }
      for(i =0 ; i< state.group.length ; i++){
        if(state.group[i].admin_name === value.name){
          state.group.splice(i,1)
        }
      }
      for(i =0 ; i< state.user.length ; i++){
        if(state.user[i].admin_name === value.name){
          state.user.splice(i,1)
        }
      }
      // for(i =0 ; i< state.deleted.length ; i++){
      //   if(state.deleted[i].admin_name === value.name){
      //     state.deleted.splice(i,1)
      //   }
      // }
      for(i =0 ; i< state.version.length ; i++){
        if(state.version[i].admin_name === value.name){
          state.version.splice(i,1)
        }
      }
    },
changeadminpassword(state,value){
      var i;
      for(i =0 ; i< state.admin.length ; i++){
        if(state.admin[i].name === value[0]){
          state.admin[i].password = value[1]
        }
      }
    },
    changeadminname(state,value){
      var i;
      for(i =0 ; i< state.admin.length ; i++){
        if(state.admin[i].name === value[0]){
          state.admin[i].name = value[1]
        }
      }
      for(i =0 ; i< state.group.length ; i++){
        if(state.group[i].admin_name === value[0]){
          state.group[i].admin_name = value[1]
        }
      }
      for(i =0 ; i< state.user.length ; i++){
        if(state.user[i].admin_name === value[0]){
          state.user[i].admin_name = value[1]
        }
      }
      // for(i =0 ; i< state.deleted.length ; i++){
      //   if(state.deleted[i].admin_name === value[0]){
      //     state.deleted[i].admin_name = value[1]
      //   }
      // }
      for(i =0 ; i< state.version.length ; i++){
        if(state.version[i].admin_name ===value[0]){
          state.version[i].admin_name = value[1]
        }
      }
    },

    //AMAZON
    updatecontractpercentageingroups(state,value){
      var i,j;
      for (i = 0; i < state.group.length; i++) {
        for (j = 0; j < state.group[i].contract.length; j++) {
          if (state.group[i].contract[j].front_title === value[0] &&  state.group[i].contract[j].admin_name === value[1]) {
            state.group[i].contract[j].isedited = true
            state.group[i].contract[j].percentage = value[2]
            if(value[2] === 100){
              state.group[i].contract[j].status= "Ausgefüllt"
            }
            else if(value[2]<100 && value[2]>=1){
              state.group[i].contract[j].status= "In Bearbeitung"
            }
            return;
          }
        }
      }
    },
    updatecontractprecentage(state,value){
      var status ;
      if(value[1] === 100){
        status = "Ausgefüllt"
      }
      else if(value[1]<100 && value[1]>=1){
        status = "In Bearbeitung"
      }
      var obj = state.copycontract.find(o=> o.id === value[0])
      obj.status = status
      obj.isedited = true
      obj.percentage = value[1]
    },
    updatecontractpercentageuser(state,value){
      for(var i=0 ; i< state.admin.length; i++){
        if(state.admin[i].name === value[1]){
          for(var j=0; j< state.admin[i].contracts.length ; j++){
            if(state.admin[i].contracts[j].front_title === value[0]){
              state.admin[i].contracts[j].isedited = true
              state.admin[i].contracts[j].percentage = value[2]
              if(value[2] === 100){
                state.admin[i].contracts[j].status= "Ausgefüllt"
              }
              else if(value[2]<100 && value[2]>=1){
                state.admin[i].contracts[j].status= "In Bearbeitung"
              }
            }
          }
        }
      }
      for(i=0; i < state.contract_list_of_user.length ; i++){
        if(state.contract_list_of_user[i].front_title === value[0]){
          state.contract_list_of_user[i].isedited = true
          state.contract_list_of_user[i].percentage = value[2]
          if(value[2] === 100){
            state.contract_list_of_user[i].status= "Ausgefüllt"
          }
          else if(value[2]<100 && value[2]>=1){
            state.contract_list_of_user[i].status= "In Bearbeitung"
          }
        }
      }
    },
    // changeisedited(state,value){
    //   var i;
    //   for (i = 0; i < state.copycontract.length; i++) {
    //     if (state.copycontract[i].front_title === value[0] &&  state.copycontract[i].admin_name === value[1]) {
    //       state.copycontract[i].isedited = true
    //       return;
    //     }
    //   }
    // },
    changeiseditedrecentcontracts(state,value){
      var i,j;
      for (i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value[1]) {
          for( j = 0 ;  j< state.admin[i].recent_contracts.length; j++){
            if(state.admin[i].recent_contracts[j].front_title === value[0]){
              state.admin[i].recent_contracts[j].isedited =  true
              return;
            }
          }
        }
      }
    },
    addnewcontractinadminversions(state,value){
      
      state.version.push({
        title : value,
        version: 1
      })
      // console.log(value)
      // for (i = 0; i < state.admin.length; i++) {
      //   //console.log(state.admin[i].version)
      //   state.admin[i].version.push({
      //     contract_title : value,
      //     contract_total_version: 1
      //   })
      // }
    },
    newcontractcreatorcounter(state){
      var x = state.new_contract_creator_counter
      x= x + 1
      state.new_contract_creator_counter = x
    },
    changeprofilepic(state,value){
      var obj = state.admin.find(o=>o.name === value[0])
      obj.profile_pic = value[1]
    }
  },
  getters: {
    findlatestcopycontract: (state) => () =>{
      return state.copycontract[state.copycontract.length - 1];
      // var i;
      // for (i = 0; i < state.contract_card_details.length; i++) {
      //   if (state.contract_card_details[i].contract_name === value ) {
      //     return state.contract_card_details[i].document;
      //   }
      // }
    },
    findlatestgroup: (state) => () =>{
      return state.group[state.group.length - 1].group_id;
      // var i;
      // for (i = 0; i < state.contract_card_details.length; i++) {
      //   if (state.contract_card_details[i].contract_name === value ) {
      //     return state.contract_card_details[i].document;
      //   }
      // }
    },
    getcontractsdatafromstore: (state) => (value) => {
      var i;
      for (i = 0; i < state.contract_card_details.length; i++) {
        if (state.contract_card_details[i].contract_name === value ) {
          return state.contract_card_details[i].document;
        }
      }
    },
    getchipdatageneralsearchadmin: (state) => (value) => {
      var i;
      for (i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value ) {
          return state.admin[i].chipdatageneralsearch;
        }
      }
    },
    getchipdatagroupsadmin: (state) => (value) => {
      var i;
      for (i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value ) {
          return state.admin[i].chipdatagroups;
        }
      }
    },
    getchipdatarecentcontractsadmin: (state) => (value) => {
      var i;
      for (i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value ) {
          return state.admin[i].chipdatarecentcontracts;
        }
      }
    },
    getchipdatatableadmin: (state) => (value) => {
      var i;
      for (i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value ) {
          return state.admin[i].chipdatatable;
        }
      }
    },
    getallusersandadmins: (state) => () => {
      return state.admin.filter((data) => data.is_superuser === false);
    },
    findcopycontractfordeletion: (state) => (value) => {
      var i;
      for (i = 0; i < state.copycontract.length; i++) {
        if (state.copycontract[i].front_title === value[0] && state.copycontract[i].admin_name === value[1]) {
          return state.copycontract[i];
        }
      }
    },
    // checkDeletedByAdminName: (state) => (admin_name) => {
    //   return state.deleted.filter((data) => data.admin_name === admin_name);
    // },
    checkByName: (state) => (name) => {
      return state.admin.filter((data) => data.name === name);
    },
    checkByUserName: (state) => (user_name) => {
      return state.user.filter((data) => data.user_name === user_name);
    },
    checkByEmail: (state) => (email) => {
      return state.admin.filter((data) => data.email === email);
    },
      checkByUserEmail: (state) => (user_email) => {
      return state.user.filter((data) => data.user_email === user_email);
    },
    getallByAdminName: (state) => (check_user_name) => {
      return state.user.filter((data) => data.admin_name === check_user_name);
    },
    getallusers: (state) => () => {
      return state.admin.filter((data) => data.is_admin === false);
    },
    checkforloginName: (state) => (loginname) => {
      return state.admin.filter((data) => data.name === loginname);
    },
    checkByGroupName: (state) => (group_title) => {
      return state.group.filter((data) => data.group_title === group_title);
    },
    checkByGroupId: (state) => (group_id) => {
      return state.group.find((data) => data.group_id === group_id);
    },
    checkGroupByAdminName: (state) => () => {
      return state.group;
    },
    checkVersionByAdminName: (state) => (admin_name) => {
      return state.version.filter((data) => data.admin_name === admin_name);
    },
    checkVersionByAdminNameLatest: (state) => (admin_name) => {
      return state.admin.filter((data) => data.name === admin_name);
    },
    finduserbyid: (state) => (value) => {
      return state.admin.find( o => o.id === value && o.is_admin === false)
    },
    finduser: (state) => (value) => {
      return state.admin.find( o => o.name === value && o.is_admin === false)
    },
    checkByContractTitle: (state) => (contract_title) => {
      return state.contract.filter(
        (data) => data.contract_title === contract_title
      );
    },
    getallcontracts: (state) => () => {
      // console.log(value);
      return state.contract;
    },
    getalladmin: (state) => () => {
      return state.admin.filter((data) => data.is_superuser === false)
    },
    findcontract: (state) => (value) => {
      var i;
      for (i = 0; i < state.contract.length; i++) {
        if (state.contract[i].contract_title === value) {
          return state.contract[i];
        }
      }
    },
    findcopycontract: (state) => (value) => {
      return state.copycontract.find( o => o.id === value)
      // var i;
      // for (i = 0; i < state.copycontract.length; i++) {
      //   if (state.copycontract[i].group_title === value[1]) {
      //     //console.log(state.copycontract[i])
      //   if (state.copycontract[i].front_title === value[0]) {
      //     return state.copycontract[i];
      //   }
      //   }
      // }
    },
    findcontractforall: (state) => (value) => {
      var i;
      for (i = 0; i < state.contract.length; i++) {
        if (state.contract[i].contract_title === value) {
        return state.contract[i]; 
        }
      }
    },
    findgroupbyid: (state) => (value) => {
      return state.group.find( o => o.group_id === value)
    },
    findgroup: (state) => (value) => {
      var i;
      for (i = 0; i < state.group.length; i++) {
        if (state.group[i].group_title === value) {
          return state.group[i];
        }
      }
    },
    findgroupid: (state) => (value) => {
      var i;
      for (i = 0; i < state.group.length; i++) {
        if (state.group[i].group_title === value) {
          return state.group[i].group_id;
        }
      }
    },
    showusercontracts: (state) => (value) => {
      var i;
      for (i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value  && state.admin[i].is_admin === false) {
          return state.admin[i].contracts;
        }
      }
    },
    getrecentcontractsofadmin: (state) => (value) => {
      return state.admin.find( o=>o.name === value && o.is_admin === true ).recent_contracts
      // var i;
      // for (i = 0; i < state.admin.length; i++) {
      //   if (state.admin[i].name === value) {
      //     return state.admin[i].recent_contracts;
      //   }
      // }
    },
    getrecentcontractsofuser: (state) => (value) => {
      var i;
      for (i = 0; i < state.admin.length; i++) {
        if (state.admin[i].name === value && state.admin[i].is_admin === false) {
          return state.admin[i].recent_contracts;
        }
      }
    },
    getgroupcontracts: (state) => (value) => {
      var i;
      for (i = 0; i < state.group.length; i++) {
        if (state.group[i].group_title === value) {
          return state.group[i].contract;
        }
      }
    },
    checkByGroupNamesArray: (state) => (group_title) => {
      return state.groupnamesarray.includes(group_title)
    },

  },
  plugins: [createPersistedState({
    paths: [ 'admin','admin_counter','buildproductionmode','contract','contract_counter','copycontract_counter',
   'contract_list_of_user','fileDetail','group','group_counter','help','edit', 'isAdmin','is_superuser','logged','user','user_counter','copyuser_counter','current_admin_name','current_admin_groups',
    'current_admin_users','current_admin_recent_contracts','current_user_name',
    'current_user_recent_contracts','version','current_admin_versions',
    'copycontract','groupnamesarray','zuletztbearbeitetadmin','Arbeitsbereicheadmin',
  'Benutzeradmin','Papierkorbadmin','Dashboardadmin','Dashboarduser','grid','list',
   'Zuletztbearbeitetuser','Furmichfreigegebenuser','maincolor','eyecheck',
  'Papierkorbuser','current_admin_deleted_data','deleted','super_user_data','contract_card_details',"title_new_contract",'current_admin_profile_pic',
  "new_contract_creator_counter","importcontract",'import_pdf_png_content',
  'secondwindowtest','filepathpdf','group_component','side_navigation_bar',
  'navbardashboardicon','navbarcontractcreatoricon',]
  })],
   //plugins: [vuexLocalStorage.plugin],
  // strict: process.env.NODE_ENV !== "production",
  actions: {
    // updatewritejson(){
    //   var data = localStorage.getItem('vuex');
    //  // console.log(data)
    //   const encrypteddata = cryptr.encrypt(data);
    //   fs.writeFile('./CCV19.json', encrypteddata, function() {
    //   });
    // }, 
    updatewritejson(){
      var ver = "V.1.20.292"
      const configDir =  (electron.app || electron.remote.app).getPath('userData');
      const filename = "CC.json";
      var filepath_dir = path.join(configDir,ver)
      if (!fs.existsSync(filepath_dir)){
        fs.mkdirSync(filepath_dir);
      }
      var filepath = path.join(filepath_dir,filename)
      var data = localStorage.getItem('vuex');
      // console.log(JSON.parse(data))
      // console.log(data)
      const encrypteddata = cryptr.encrypt(data);
      fs.writeFileSync(filepath, encrypteddata);
    },
  },
  modules: {
  }
});

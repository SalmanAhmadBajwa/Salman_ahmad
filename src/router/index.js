import Vue from 'vue'
import VueRouter from 'vue-router';
 import ebay from '@/contracts/ebay';
import amazon from '@/contracts/amazon';
import shopify from '@/contracts/shopify';
import contracts from '@/components/contracts';
import login_m from '@/components/login-m';
import test1 from '@/components/test1';
import test3 from '@/components/test3';
import test4 from '@/components/test4';
// import test5 from '@/components/test5';
import left_right_side_binding from '@/components/left_right_side_binding';
import test21 from '@/components/test21';
import mycomponent from '@/components/mycomponent';
// import admin_portal from '@/components/admin_portal';
// import user_portal from '@/components/user_portal';
import consent from '@/contracts/consent';
import consent1 from '@/contracts/consent1';
import consentV from '@/contracts/consentV';
// import employment from '@/contracts/employment';
// import confidential from '@/contracts/confidential';
// import limited from '@/contracts/limited';
// import marginal from '@/contracts/marginal';
// import termination from '@/contracts/termination';
// import free from '@/contracts/free';
// import managing from '@/contracts/managing';
// import line from '@/contracts/line';
// import placeholder from '@/contracts/placeholder';
import newcontractcreate from '@/components/newcontractcreate';
import tiptaptesting from '@/components/tiptaptesting';
// import dashboardadmincomponent from "../components/dashboardadmincomponent";
Vue.use(VueRouter)
const routes = [
  
  //   { path: '/',
  // redirect: '/admin_portal',
  // },
  // { path: '/dashboardadmincomponent',
  // name: 'dashboardadmincomponent',
  // component: dashboardadmincomponent},
  { path: '/mycomponent',
  name: 'mycomponent',
  component: mycomponent},
  { path: '/test1',
  name: 'test1',
  component: test1},
  { path: '/test3',
  name: 'test3',
  component: test3},
  { path: '/test4',
  name: 'test4',
  component: test4},
  // { path: '/test5',
  // name: 'test5',
  // component: test5},
  { path: '/left_right_side_binding',
  name: 'left_right_side_binding',
  component: left_right_side_binding},
  { path: '/test21',
  name: 'test21',
  component: test21},
  { path: '/',
  name: 'login_m',
  component: login_m},
  { path: '/tiptaptesting',
  name: 'tiptaptesting',
  component: tiptaptesting},
  { path: '/consent',
  name: 'consent',
  component: consent},
  { path: '/consent1',
  name: 'consent1',
  component: consent1},
  { path: '/consentV',
  name: 'consentV',
  component: consentV},

  { path: '/amazon',
  name: 'amazon',
  component: amazon},
  { path: '/ebay',
  name: 'ebay',
  component: ebay},
  { path: '/newcontractcreate',
  name: 'newcontractcreate',
  component: newcontractcreate},
  // {
    //     path: '/employment',
    //     name: 'employment',
    //     component: employment
    // },
    // {
    //     path: '/confidential',
    //     name: 'confidential',
    //     component: confidential
    // },
    // {
    //     path: '/limited',
    //     name: 'limited',
    //     component: limited
    // },
    //{
    //     path: '/marginal',
    //     name: 'marginal',
    //     component: marginal
    // },
    // {
    //     path: '/termination',
    //     name: 'termination',
    //     component: termination
    // },
    //{
    //    path: '/free',
    //    name: 'free',
    //    component: free
    // },
    // {
    //     path: '/managing',
    //     name: 'managing',
    //     component: managing
    // },
    // {
    //     path: '/line',
    //     name: 'line',
    //     component: line
    // },
    // {
    //     path: '/placeholder',
    //     name: 'placeholder',
    //     component: placeholder
    // },
  { path: '/shopify',
  
  name: 'shopify',
  component: shopify},
  { path: '/contracts',
  
  name: 'contracts',
  component: contracts},

  // { path: '/admin_portal',
  // name: 'admin_portal',
  // component:admin_portal},
  // { path: '/user_portal',
  // name: 'user_portal',
  // component:user_portal},
]

const router = new VueRouter({
  // mode: 'history',
   base: process.env.BASE_URL,
   routes,
  mode: process.env.IS_ELECTRON ? '' : 'history',
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        hotReload: true // disables Hot Reload
      }
    }
  ],
  //  base: process.env.IS_ELECTRON,
  
})

export default router

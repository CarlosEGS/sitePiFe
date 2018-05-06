import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue'
import LoginScreen from './components/LoginScreen.vue'
import TrashCan from "./components/TrashCan.vue"
import AddCan from "./components/AddCan.vue"

const routes = [
      {
            name: 'LoginScreen',
            path: '/',
            component: LoginScreen
      },
      {
            name: 'TrashCan',
            path: '/TrashCan',
            component: TrashCan
      },
      {
            name: 'AddCan',
            path: '/AddCan',
            component: AddCan
      },
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

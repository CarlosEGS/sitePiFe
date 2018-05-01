import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue'
import LoginScreen from './components/LoginScreen.vue'
import TelaPrincipal from "./components/TelaPrincipal.vue"

const routes = [
      {
            name: 'LoginScreen',
            path: '/',
            component: LoginScreen
      },
      {
            name: 'TelaPrincipal',
            path: '/',
            component: TelaPrincipal
      }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

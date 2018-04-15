import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateAccount from './components/CreateAccount.vue';
import Login from './components/Login.vue';
import TelaPrincipal from './components/TelaPrincipal.vue';
import CadastroVaca from './components/CadastroVaca.vue';

const routes = [
      {
            name: 'CadastroVaca',
            path: '/CadastroVaca',
            component: CadastroVaca
      },
      {
            name: 'TelaPrincipal',
            path: '/TelaPrincipal',
            component: TelaPrincipal
      },
      {
            name: 'CreateAccount',
            path: '/CreateAccount',
            component: CreateAccount
      },
      {
            name: 'Login',
            path: '/',
            component: Login
      }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

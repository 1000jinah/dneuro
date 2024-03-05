import 'core-js';
import 'regenerator-runtime';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from '@/config/vue-router';
import Vuetify from '@/config/vuetify';
import Store from '@/config/store';
import alert from '@/pages/components/alert.vue';
import confirm from '@/pages/components/confirm.vue';
import dataTableCustomComponent from '@/pages/components/data-table-custom-component.vue';
import selectComponent from '@/pages/components/select-component.vue';
import datePicker from '@/pages/components/date-picker.vue';
import App from '@/routes/App.vue';
import VueCookies from 'vue-cookies';

Vue.component('alert-component', alert);
Vue.component('confirm-component', confirm);
Vue.component('data-table-custorm-component', dataTableCustomComponent);
Vue.component('custom-select-component', selectComponent);
Vue.component('picker-date-picker-component', datePicker);
Vue.use(Vuex);
Vue.use(VueCookies);
Vue.$cookies.config('14d', '', '', true);

new Vue({
    el: '#app',
    render: (h) => h(App),
    vuetify: Vuetify,
    store: Store,
    router: VueRouter,
});

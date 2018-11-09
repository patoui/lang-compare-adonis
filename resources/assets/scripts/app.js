import _ from 'lodash';
import Vue from 'vue';

Vue.component('search-component', require('./components/SearchComponent.vue').default);

const app = new Vue({ el: '#app' });

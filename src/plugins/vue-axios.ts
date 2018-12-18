import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

let baseURL;
if (process.env.__ENV__ === 'dev') {
  baseURL = 'http://localhost:4000';
} else if (process.env.__ENV__ === 'production') {
  baseURL = 'PRODUCTION_URL';
} else {
  baseURL = 'ANOTHER_URL';
}

// axios.defaults.baseURL = baseURL;
axios.defaults.baseURL = 'http://localhost:4000';

Vue.use(VueAxios, axios);

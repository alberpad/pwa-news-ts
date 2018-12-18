import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import vuexLocal from '@/plugins/vuex-persist';
import { RootState } from '@/store/types';
import authModule from './Auth';
import appModule from './App';
import newsModule from './News';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    appName: 'SatApp'
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { authModule, appModule, newsModule },
  plugins: [vuexLocal.plugin]
};

export default new Vuex.Store<RootState>(store);

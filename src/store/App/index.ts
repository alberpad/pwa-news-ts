import { Module } from 'vuex';
import { state } from './state';
import { mutations } from './mutations';
import { IAppState } from './types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

type AppModule = Module<IAppState, RootState>;

const appModule: AppModule = {
  namespaced,
  state,
  mutations
  // getters
};

export default appModule;

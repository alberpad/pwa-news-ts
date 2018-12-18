import { Module } from 'vuex';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
// import { getters } from './getters';
import { IAuthState } from './types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

type AuthModule = Module<IAuthState, RootState>;

const authModule: AuthModule = {
  namespaced,
  state,
  actions,
  mutations
  // getters
};

export default authModule;

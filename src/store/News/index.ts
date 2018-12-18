import { Module } from 'vuex';
import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
// import { getters } from './getters';
import { INewsState } from './types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

type NewsModule = Module<INewsState, RootState>;

const newsModule: NewsModule = {
  namespaced,
  state,
  actions,
  mutations
  // getters
};

export default newsModule;

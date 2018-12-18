import { MutationTree } from 'vuex';
import { IAppState } from './types';

type AuthMutationTree = MutationTree<IAppState>;

export const mutations: AuthMutationTree = {
  setLanguage(state: IAppState, language) {
    state.selectedLanguage = language;
  },
  setIsOnline(state: IAppState, isOnline) {
    state.isOnline = isOnline;
  }
};

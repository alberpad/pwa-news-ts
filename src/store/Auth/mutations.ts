import { MutationTree } from 'vuex';
import { IAuthState, IUser } from './types';

type AuthMutationTree = MutationTree<IAuthState>;

export const mutations: AuthMutationTree = {
  setUser(state: IAuthState, user: IUser) {
    state.user = user;
    state.isLogged = true;
    state.error = false;
    state.errorMessage = '';
  },
  setIsLogged(state: IAuthState, logged: boolean) {
    state.isLogged = logged;
  },
  setMessage(state: IAuthState, message: string) {
    state.message = message;
  },
  unsetUser(state: IAuthState) {
    state.user = null;
    state.isLogged = false;
    state.message = '';
  },
  authError(state: IAuthState, payload: string) {
    state.error = true;
    state.errorMessage = payload;
    state.user = null;
    state.isLogged = false;
  }
};

import Vue from 'vue';
import { ActionContext, ActionTree } from 'vuex';
import { IAuthState, IUser, ILogin } from '@/store/Auth/types';
import { RootState } from '@/store/types';
import { AxiosResponse } from 'axios';

type AuthActionContext = ActionContext<IAuthState, RootState>;
type AuthActionTree = ActionTree<IAuthState, RootState>;

export const actions: AuthActionTree = {
  async login(context: AuthActionContext, user: ILogin): Promise<any> {
    try {
      const response: AxiosResponse = await Vue.axios({
        method: 'POST',
        url: '/login',
        data: user
      });
      context.commit('setUser', response.data.user);
      context.commit('setMessage', response.data.res);
      console.log('commit realizado setUser');
    } catch (error) {
      context.commit('authError', error.response.data.message);
    } finally {
      console.log('petición de login finalizada');
    }
  },
  async register(context: AuthActionContext, user: IUser): Promise<any> {
    try {
      const response: AxiosResponse = await Vue.axios({
        method: 'POST',
        url: '/register',
        data: user
      });
      context.commit('setUser', user);
      context.commit('setMessage', response.data.res);
    } catch (error) {
      context.commit('authError', error.message);
    } finally {
      console.log('petición de registro finalizada');
    }
  }
};

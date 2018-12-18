import Vue from 'vue';
import { ActionContext, ActionTree } from 'vuex';
import { INewsState, INew } from '@/store/News/types';
import { RootState } from '@/store/types';
import { AxiosResponse } from 'axios';

type NewsActionContext = ActionContext<INewsState, RootState>;
type NewsActionTree = ActionTree<INewsState, RootState>;

export const actions: NewsActionTree = {
  async allNews(context: NewsActionContext): Promise<any> {
    try {
      const response: AxiosResponse = await Vue.axios({
        method: 'GET',
        url: `news`
      });
      context.commit('setNews', response.data);
      // context.commit('setMessage', response.data.res);
    } catch (error) {
      // context.commit('authError', error.response.data.message);
      console.log('Error obteniendo datos');
    } finally {
      console.log('petición de news finalizada');
    }
  },
  async paginatedNews(context: NewsActionContext): Promise<any> {
    try {
      const response: AxiosResponse = await Vue.axios({
        method: 'GET',
        url: `news?_start=${context.state.start}&_end=${context.state.start + context.state.limit}`
      });
      context.commit('setNews', response.data);
      return response;
      // context.commit('setMessage', response.data.res);
    } catch (error) {
      // context.commit('authError', error.response.data.message);
      console.log('Error obteniendo datos');
    } finally {
      console.log('petición de news finalizada');
    }
  }
};

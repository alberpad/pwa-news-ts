import { MutationTree } from 'vuex';
import { INewsState, INew } from './types';
import { uniqBy } from 'lodash';

type NewsMutationTree = MutationTree<INewsState>;

export const mutations: NewsMutationTree = {
  setStart(state: INewsState, start: number) {
    state.start = start;
  },
  setLimit(state: INewsState, limit: number) {
    state.limit = limit;
  },
  setNews(state: INewsState, data: INew[]) {
    if (state.start === 0) {
      state.news = data;
    } else {
      const news = state.news.concat(data);
      state.news = uniqBy(news, function(n: INew) {
        return n.id;
      });
    }
  },
  setOfflineNews(state: INewsState, offlineNews: INew[]) {
    state.offlineNews = offlineNews;
  },
  setSingleNew(state: INewsState, singleNew: INew) {
    state.singleNew = singleNew;
  }
};

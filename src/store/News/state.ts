import { INew, INewsState } from './types';

export const state: INewsState = {
  news: [],
  offlineNews: [],
  singleNew: {} as INew,
  start: 0,
  limit: 15
};

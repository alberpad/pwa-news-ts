export interface INew {
  id: number;
  image: string;
  title: string;
  description: string;
  time: string;
  date: string;
}
export interface INewsState {
  news: INew[];
  offlineNews: INew[];
  singleNew: INew;
  start: number;
  limit: number;
}

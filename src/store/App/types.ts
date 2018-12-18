export interface IAppState {
  version: string;
  isOnline: boolean;
  languages: IArrayLanguages;
  selectedLanguage: string;
}

export interface ILanguage {
  key: string;
  label: string;
}

export interface IArrayLanguages {
  [index: string]: ILanguage;
}

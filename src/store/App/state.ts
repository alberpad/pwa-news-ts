import { IAppState } from './types';

export const state: IAppState = {
  version: '0.0.1',
  isOnline: true,
  languages: {
    'en-us': {
      key: 'en-us',
      label: 'EN'
    },
    'es-es': {
      key: 'es-es',
      label: 'ES'
    }
  },
  selectedLanguage: 'es-es'
};

import { IUser, IAuthState } from './types';

export const state: IAuthState = {
  user: null,
  isLogged: false,
  error: false,
  errorMessage: '',
  message: ''
};

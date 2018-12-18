export interface IUser extends ILogin {
  id: number | undefined;
  displayName: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthState {
  user: IUser | null;
  isLogged: boolean;
  error: boolean;
  errorMessage: string | null;
  message: string | null;
}

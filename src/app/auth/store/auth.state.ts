import { User } from '../models/user.model';

export interface AuthState {
  user: User | null;
  isAdmin: boolean;
  isAdminSatker: boolean;
  isTeknisi: boolean;

  isDBU: boolean;
  isBTP: boolean;
  isBKP: boolean;
  
  isInspekturPeralatan: boolean;
  isInspekturPersonil: boolean;
  isInspekturSatker: boolean;

  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
}


export const authInitialState: AuthState = {
  user: null,
  isAdmin: false,
  isAdminSatker: false,
  isTeknisi: false,

  isDBU: false,
  isBTP: false,
  isBKP: false,
  
  isInspekturPeralatan: false,
  isInspekturPersonil: false,
  isInspekturSatker: false,

  isLoggedIn: false,
  isLoading: true,
  error: null
};

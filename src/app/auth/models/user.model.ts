export interface User {
  uid: string;
  displayName: string;
  email: string;
  providerId: string;
  photoUrl: string;
  
  isNewUser?: boolean;
  isAdmin?: boolean;
  isAdminSatker?: boolean;
  isTeknisi?: boolean;

  isDBU?: boolean;
  isBTP?: boolean;
  isBKP?: boolean;
  
  isInspekturPeralatan?: boolean;
  isInspekturPersonil?: boolean;
  isInspekturSatker?: boolean;

  isOnline?: boolean;
}

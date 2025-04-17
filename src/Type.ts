export interface InitialUserState {
  user: null | {
    displayName: string;
    email: string;
    photo: string;
    uid: string;
  }
};
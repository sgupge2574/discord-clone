export interface InitialUserState {
  user: null | {
    displayName: string;
    email: string;
    photo: string;
    uid: string;
  }
};

export interface InitialChannelState {
  channelId: string | null;
  channelName: string | null;
};
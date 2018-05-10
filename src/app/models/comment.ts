import * as firebase from 'firebase';

export interface Comment {
  username?: string;
  date?: firebase.firestore.Timestamp;
  message?: string;
  userPhoto?: string;
}

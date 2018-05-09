import Timestamp = firebase.firestore.Timestamp;

export interface Comment {
  username?: string;
  date?: Timestamp;
  message?: string;
  userPhoto?: string;
}

import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class UserService {

  private readonly USERS_COLLECTION = 'users';

  constructor(private db: AngularFirestore) {
  }

  public async findUserByEmail(email: string) {
    return await this.db.collection(this.USERS_COLLECTION, ref => ref.where('email', '==', email));
  }

}

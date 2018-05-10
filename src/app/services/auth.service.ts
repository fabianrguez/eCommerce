import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth) {
  }

  public async logIn(username: string, password: string) {
    return await this.auth.auth.signInWithEmailAndPassword(username, password);
  }

}

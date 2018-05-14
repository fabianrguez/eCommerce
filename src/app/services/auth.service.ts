import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../models/user';

@Injectable()
export class AuthService {

  private userLogged: User;

  constructor(private auth: AngularFireAuth) {
  }

  public async logIn(username: string, password: string) {
    return await this.auth.auth.signInWithEmailAndPassword(username, password);
  }

  public getUserLogged(): User {
    return this.userLogged;
  }

  public storeUserLogged(user: User) {
    this.userLogged = user;
  }

}

import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../models/user';
import {LocalStorageHelper} from '../utils/localStorageHelper';
import {StorageTypes} from '../models/storage-types.enum';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {distinctUntilChanged} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class AuthService {

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>({});
  public currentUser: Observable<User> = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private auth: AngularFireAuth) {
    this.initCurrentUserFromStorage();
  }

  public async logIn(username: string, password: string) {
    return await this.auth.auth.signInWithEmailAndPassword(username, password);
  }

  public async logOut() {
    console.log('estoy en el authService');
    this.currentUserSubject.next( null);
    LocalStorageHelper.removeItem(StorageTypes.USER);
    return await this.auth.auth.signOut();
  }

  public getUserLogged(): User {
    return this.currentUserSubject.value;
  }

  public storeUserLogged(user: User) {
    this.currentUserSubject.next(user);
    LocalStorageHelper.store(StorageTypes.USER, this.currentUserSubject.value);
  }

  public isLogged() {
    return this.getUserLogged() != null;
  }

  public initCurrentUserFromStorage() {
    const user: User = LocalStorageHelper.getItem(StorageTypes.USER);
    if (!_.isNil(user)) {
      return this.currentUserSubject.next(user);
    }
    return this.currentUserSubject.next(null);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {UserOption} from '../../../models/user-option';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent implements OnInit {

  @Input() isAuthenticated: boolean;

  authenticatedOptions: UserOption[] = [];
  nonAuthenticatedOptions: UserOption[] = [];

  constructor() {
  }

  ngOnInit() {
    this.initNonAuthenticatedOptions()
    this.initAuthenticatedOptions();
  }

  private initAuthenticatedOptions() {
    this.authenticatedOptions.push({label: 'Cuenta', redirectTo: ''});
    this.authenticatedOptions.push({label: 'Pedidos', redirectTo: ''});
  }

  private initNonAuthenticatedOptions() {
    this.nonAuthenticatedOptions.push({label: 'Registarse', redirectTo: ''});
    this.nonAuthenticatedOptions.push({label: 'Login', redirectTo: '/login'});
  }

  getOptions() {
    if (this.isAuthenticated) {
      return this.authenticatedOptions;
    }
    return this.nonAuthenticatedOptions;
  }

}

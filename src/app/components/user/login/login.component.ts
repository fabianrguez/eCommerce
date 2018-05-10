import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginFail: boolean;
  failMessage: string;

  constructor(private authService: AuthService,
              private location: Location) {
  }

  ngOnInit() {
    this.loginFail = false;
  }

  async login() {
    this.loginFail = false;
    this.failMessage = '';
    try {
      const response = await this.authService.logIn(this.username, this.password);
      this._handleLoginSuccess(response);
    } catch (e) {
      this.loginFail = true;
      this.failMessage = e.message;
    }
  }

  _handleChange() {
    this.loginFail = false;
  }

  _handleLoginSuccess(response: any) {
    this.location.back();
    this.username = '';
    this.password = '';
  }
}

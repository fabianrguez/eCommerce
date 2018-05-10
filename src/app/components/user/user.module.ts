import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserOptionsComponent} from './user-options/user-options.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    UserInfoComponent,
    UserOptionsComponent,
    LoginComponent
  ],
  exports: [
    UserInfoComponent,
    LoginComponent
  ]
})
export class UserModule {
}

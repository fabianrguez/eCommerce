import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    AccountComponent,
    InformationComponent
  ],
  exports: [
    LoginComponent,
    AccountComponent,
    InformationComponent
  ]
})
export class UserModule {
}

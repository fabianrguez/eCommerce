import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { InformationComponent } from './information/information.component';
import {GrowlModule, InputMaskModule} from 'primeng/primeng';
import {FirestoreService} from '../../services/firestore.service';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    GrowlModule
  ],
  declarations: [
    LoginComponent,
    AccountComponent,
    InformationComponent,
    OrdersComponent
  ],
  exports: [
    LoginComponent,
    AccountComponent,
    InformationComponent,
    OrdersComponent
  ],
  providers: [
    FirestoreService
  ]
})
export class UserModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ProductsModule} from './components/products/products.module';
import {AppRoutingModule} from './app-routing.module';
import {ChangeColorOnScrollDirective} from './directives/change-color-on-scroll.directive';
import {CartService} from './services/cart.service';
import {CartModule} from './components/cart/cart.module';
import {AngularFireModule} from 'angularfire2';
import {config} from '../config';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {UserModule} from './components/user/user.module';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChangeColorOnScrollDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    AppRoutingModule,
    UserModule,
    AngularFireModule.initializeApp(config.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    CartService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsModule } from './components/products/products.module';
import {AppRoutingModule} from './app-routing.module';
import { ChangeColorOnScrollDirective } from './directives/change-color-on-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChangeColorOnScrollDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

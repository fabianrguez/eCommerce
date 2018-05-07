import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSidebarComponent } from './cart-sidebar/cart-sidebar.component';
import {SidebarModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartProductComponent } from './cart-product/cart-product.component';
import { CartCostsComponent } from './cart-costs/cart-costs.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  declarations: [
    CartSidebarComponent,
    CartProductComponent,
    CartCostsComponent
  ],
  exports: [
    CartSidebarComponent
  ]
})
export class CartModule { }

import {NgModule} from '@angular/core';
import {ItemComponent} from './item/item.component';
import {FiltersComponent} from './filters/filters.component';
import {ProductContainerComponent} from './product-container/product-container.component';
import {OrderByFilterComponent} from './order-by-filter/order-by-filter.component';
import {ProductListComponent} from './product-list/product-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RouterModule} from '@angular/router';
import {ProductShareService} from '../../services/shared/product-share.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    ProductContainerComponent,
    ProductDetailsComponent
  ],
  declarations: [
    ItemComponent,
    FiltersComponent,
    ProductContainerComponent,
    OrderByFilterComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  providers: [
    ProductShareService
  ]
})
export class ProductsModule {
}

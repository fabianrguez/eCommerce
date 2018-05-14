import {NgModule} from '@angular/core';
import {ItemComponent} from './item/item.component';
import {FiltersComponent} from './filters/filters.component';
import {ProductContainerComponent} from './product-container/product-container.component';
import {OrderByFilterComponent} from './order-by-filter/order-by-filter.component';
import {ProductListComponent} from './product-list/product-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RouterModule} from '@angular/router';
import {FirestoreService} from '../../services/firestore.service';
import {FormsModule} from '@angular/forms';
import {ProductCommentComponent} from './product-comment/product-comment.component';
import {CommentsListComponent} from './comments-list/comments-list.component';
import { CommentAddComponent } from './comment-add/comment-add.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
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
    ProductDetailsComponent,
    ProductCommentComponent,
    CommentsListComponent,
    CommentAddComponent
  ],
  providers: [
    FirestoreService
  ]
})
export class ProductsModule {
}

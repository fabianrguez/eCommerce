import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItem} from '../../../models/cartItem';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() cartItem: CartItem;

  @Output() productDelete: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() {
  }

  ngOnInit() {
  }

  handleProductDeleted() {
    this.productDelete.emit(this.cartItem);
  }

}

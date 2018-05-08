import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Product} from '../models/product';
import {CartItem} from '../models/cartItem';

@Injectable()
export class CartService {

  public cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() {
  }

  addProduct(cartItem: CartItem) {
    if (!this.productExistOnCart(cartItem)) {
      this.cartItems.next(this.cartItems.getValue().concat(cartItem));
    } else {
      this.modifyCartProduct(cartItem);
    }
  }

  deleteProduct(product: Product) {
    this.cartItems.next(this.removeFromCart(this.cartItems.getValue(), product));
  }

  getCartProducts(): Observable<CartItem[]> {
    return this.cartItems.asObservable();
  }

  private removeFromCart(array: CartItem[], element: Product) {
    return array.filter(position => position.product !== element);
  }

  private productExistOnCart(cartItem: CartItem) {
    return this.filterCartByProductId(cartItem.product.id).length !== 0;
  }

  private filterCartByProductId(id: number) {
    return this.cartItems.getValue().filter(item => item.product.id === id);
  }

  private modifyCartProduct(cartItem: CartItem) {
    const _cartItem = this.filterCartByProductId(cartItem.product.id);
    _cartItem[0].quantity += cartItem.quantity;
    this.deleteProduct(cartItem.product);
    this.cartItems.next(_cartItem);
  }

}

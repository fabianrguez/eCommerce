import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CartItem} from '../models/cartItem';
import {Cart} from '../models/cart';

@Injectable()
export class CartService {

  public cart: BehaviorSubject<Cart> = new BehaviorSubject<Cart>({});
  private total: number;

  constructor() {
    this.cart.value.items = new BehaviorSubject<CartItem[]>([]);
    this.cart.value.total = 0;
    this.total = 0;
  }

  addProduct(cartItem: CartItem) {
    this.total += cartItem.quantity;
    if (!this.productExistOnCart(cartItem)) {
      this.cart.getValue().items.next(this.cart.getValue().items.getValue().concat(cartItem));
      this.cart.value.total = this.total;
    } else {
      this.modifyCartProduct(cartItem);
    }
  }

  deleteProduct(cartItem: CartItem) {
    this.total -= cartItem.quantity;
    this.cart.value.total = this.total;
    this.cart.getValue().items.next(this.removeFromCart(this.cart.getValue().items.getValue(), cartItem));
  }

  getCartProducts(): Observable<Cart> {
    return this.cart.asObservable();
  }

  private removeFromCart(array: CartItem[], item: CartItem) {
    return array.filter(cartItem => cartItem !== item);
  }

  private productExistOnCart(cartItem: CartItem) {
    return this.filterCartByProductId(cartItem.product.id).length !== 0;
  }

  private filterCartByProductId(id: number) {
    return this.cart.getValue().items.getValue().filter(item => item.product.id === id);
  }

  private modifyCartProduct(cartItem: CartItem) {
    const _cartItem = this.filterCartByProductId(cartItem.product.id);
    _cartItem[0].quantity += cartItem.quantity;
    this.deleteProduct(cartItem);
    this.cart.getValue().items.next(_cartItem);
  }

}

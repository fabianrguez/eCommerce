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
    if (!this.productExistOnCart(cartItem)) {
      this.addNewProductToCart(cartItem);
    } else {
      this.modifyCartProduct(cartItem);
    }
  }

  deleteProduct(cartItem: CartItem) {
    this.total -= cartItem.quantity;
    this.cart.value.total = this.total;
    this.cart.value.items.next(this.removeFromCart(this.cart.value.items.value, cartItem));
  }

  getCartProducts(): Observable<Cart> {
    return this.cart.asObservable();
  }

  private removeFromCart(array: CartItem[], item: CartItem) {
    return array.filter(cartItem => cartItem.product !== item.product);
  }

  private productExistOnCart(cartItem: CartItem) {
    return this.filterCartByProductId(cartItem.product.id) != null;
  }

  private filterCartByProductId(id: number) {
    return this.cart.value.items.value.find(item => item.product.id === id);
  }

  private addNewProductToCart(cartItem: CartItem) {
    this.total += cartItem.quantity;
    this.cart.value.total = this.total;
    this.cart.getValue().items.next(this.cart.getValue().items.getValue().concat(cartItem));
  }

  private modifyCartProduct(cartItem: CartItem) {
    let totalQuantity = 0;
    const _cartItem = this.filterCartByProductId(cartItem.product.id);
    _cartItem.quantity += cartItem.quantity;
    this.deleteProduct(cartItem);
    this.cart.getValue().items.next(this.cart.getValue().items.getValue().concat(_cartItem));
    this.cart.value.items.value.forEach(item => totalQuantity += item.quantity);
    this.total = totalQuantity;
    this.cart.value.total = this.total;
  }

}

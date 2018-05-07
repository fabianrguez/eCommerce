import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

  public cartItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() {
  }

  addProduct(product: any, quantity: number = 1) {
    for (let index = 0; index < quantity; index++) {
      this.cartItems.next(this.cartItems.getValue().concat(product));
    }
  }

  deleteProduct(product: any) {
    this.cartItems.next(this.removeFromArray(this.cartItems.getValue(), product));
  }

  getCartProducts(): Observable<any[]> {
    return this.cartItems.asObservable();
  }

  removeFromArray(array: any[], element: any) {
    return array.filter(position => position !== element);
  }

}

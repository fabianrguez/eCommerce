import {CartItem} from './cartItem';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface Cart {
  items?: BehaviorSubject<CartItem[]>;
  total?: number;
}

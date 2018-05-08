import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Sidebar} from 'primeng/primeng';
import {CartItem} from '../../../models/cartItem';
import {Cart} from '../../../models/cart';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css']
})
export class CartSidebarComponent implements OnInit {

  @ViewChild('cart') cartSidebar: Sidebar;

  displayCartSidebar: boolean;
  subtotal: number;
  transportCost: number;
  totalCost: number;
  _cart: Cart;
  _cartItems: CartItem[];

  constructor(public cartService: CartService,
              private renderer: Renderer2) {
    this._cart = {};
  }

  ngOnInit() {
    this.renderer.setStyle(this.cartSidebar.containerViewChild.nativeElement, 'overflow-y', 'auto');
    this.displayCartSidebar = false;
    this.cartService.getCartProducts().subscribe(cart => {
      cart.items.subscribe(items => {
        this._cart = cart;
        this._cartItems = items;
        this.initializeCosts();
        this._cartItems.forEach(item => {
         this.calcuatePrice(item);
        });
      });
    });
  }

  initializeCosts() {
    this.subtotal = 0;
    this.transportCost = 10;
    this.totalCost = 0;
  }

  isCartEmpty() {
    return this._cart.total === 0;
  }

  toggleSidebarCart() {
    this.displayCartSidebar = !this.displayCartSidebar;
  }

  _handleProductDelete(cartItem: CartItem) {
    this.subtotal -= cartItem.product.price;
    this.totalCost -= cartItem.product.price;
    this.cartService.deleteProduct(cartItem);
  }
  private calcuatePrice(item: CartItem) {
    let productTotal = 0;
    productTotal += item.product.price;
    productTotal *= item.quantity;
    this.subtotal += productTotal;
    this.totalCost = this.subtotal + this.transportCost;
  }
}

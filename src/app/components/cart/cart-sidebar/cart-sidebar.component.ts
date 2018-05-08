import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Sidebar} from 'primeng/primeng';
import {Product} from '../../../models/product';
import {CartItem} from '../../../models/cartItem';

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
  _cart: CartItem[] = [];

  constructor(public cartService: CartService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.cartSidebar.containerViewChild.nativeElement, 'overflow-y', 'auto');
    this.displayCartSidebar = false;
    this.cartService.getCartProducts().subscribe(cart => {
      this._cart = Array.from(cart);
      this.initializeCosts();
      this._cart.forEach(cartItem => {
        let productTotal = 0;
        productTotal += cartItem.product.price;
        productTotal *= cartItem.quantity;
        this.subtotal += productTotal;
      });
      this.totalCost = this.subtotal + this.transportCost;
    });
  }

  initializeCosts() {
    this.subtotal = 0;
    this.transportCost = 10;
    this.totalCost = 0;
  }

  isCartEmpty(cart: CartItem[] = this._cart) {
    return cart.length === 0;
  }

  toggleSidebarCart() {
    this.displayCartSidebar = !this.displayCartSidebar;
  }

  _handleProductDelete(product: Product) {
    this.subtotal -= product.price;
    this.totalCost -= product.price;
    this.cartService.deleteProduct(product);
  }
}

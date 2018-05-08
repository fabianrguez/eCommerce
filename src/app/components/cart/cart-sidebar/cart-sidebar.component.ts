import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Sidebar} from 'primeng/primeng';

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
  products: any[] = [];

  constructor(public cartService: CartService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.cartSidebar.containerViewChild.nativeElement, 'overflow-y', 'auto');
    this.displayCartSidebar = false;
    this.cartService.getCartProducts().subscribe(cart => {
      this.products = cart;
      this.initializeCosts();
      this.products.forEach(product => this.subtotal += product.price);
      this.totalCost = this.subtotal + this.transportCost;
    });
  }

  initializeCosts() {
    this.subtotal = 0;
    this.transportCost = 10;
    this.totalCost = 0;
  }

  isCartEmpty(cart: any[] = this.products) {
    return cart.length === 0;
  }

  toggleSidebarCart() {
    this.displayCartSidebar = !this.displayCartSidebar;
  }

  _handleProductDelete(product: any) {
    this.subtotal -= product.price;
    this.totalCost -= product.price;
    this.cartService.deleteProduct(product);
  }
}

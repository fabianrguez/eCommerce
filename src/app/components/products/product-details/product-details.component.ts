import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductShareService} from '../../../services/shared/product-share.service';
import {CartService} from '../../../services/cart.service';
import {Product} from '../../../models/product';
import {CartItem} from '../../../models/cartItem';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  limit: number;
  productId: number;
  product: Product;
  quantity: number;

  constructor(private route: ActivatedRoute,
              private productShareService: ProductShareService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(param => this.productId = +param.id);
    this.getProductInfo();
    this.quantity = 1;
    this.limit = 20;
  }

  ngOnDestroy() {
    this.productShareService.productSelected = null;
  }

  private getProductInfo() {
    this.product = this.productShareService.productSelected;
    if (this.product == null) {
      this.productShareService.getProductByIdFromDB(this.productId).subscribe(product => {
        this.product = <Product> product[0];
        this.productShareService.productSelected = this.product;
      });
    }
  }

  addToCart() {
    this.checkQuantity();
    this.cartService.addProduct(this.getCartItem(this.product, this.quantity));
  }

  _handleQuantityChange() {
    this.checkQuantity();
  }

  private isQuantityGreaterThanLimit() {
    return this.quantity > this.limit;
  }

  private checkQuantity() {
    if (this.isQuantityGreaterThanLimit()) {
      this.quantity = this.limit;
    }
  }

  private getCartItem(product: Product, quantity: number): CartItem {
    const cartItem: CartItem = {};
    cartItem.product = product;
    cartItem.quantity = quantity;
    return cartItem;
  }
}

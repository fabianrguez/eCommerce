import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductShareService} from '../../../services/shared/product-share.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productId: number;
  product: any;

  constructor(private route: ActivatedRoute,
              private productShareService: ProductShareService) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(param => this.productId = +param.id);
    this.getProductInfo();
  }

  ngOnDestroy() {
    this.productShareService.productSelected = null;
  }

  private getProductInfo() {
    this.product = this.productShareService.productSelected;
    if (this.product == null) {
      this.product = this.productShareService.products.find(element => element.id === this.productId);
      this.productShareService.productSelected = this.product;
    }
  }

}

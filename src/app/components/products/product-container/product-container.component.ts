import {Component, OnInit} from '@angular/core';
import {ProductShareService} from '../../../services/shared/product-share.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  products: any[] = [];

  constructor(private productSharedService: ProductShareService) {
  }

  ngOnInit() {
    this.products = this.productSharedService.getProducts();
  }

}

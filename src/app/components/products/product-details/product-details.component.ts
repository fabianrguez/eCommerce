import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: number;
  product: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe(param => this.productId = +param.id);
    this.route.queryParams.subscribe(params => this.product = params);
  }

}

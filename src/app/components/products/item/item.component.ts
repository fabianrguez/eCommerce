import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductShareService} from '../../../services/shared/product-share.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product: any;

  constructor(private router: Router,
              private productShareService: ProductShareService) {
  }

  ngOnInit() {
  }

  productDetails() {
    this.productShareService.productSelected = this.product;
    this.router.navigate(['/producto/', this.product.id]);
  }
}

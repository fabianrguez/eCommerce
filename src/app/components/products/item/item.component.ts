import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FirestoreService} from '../../../services/firestore.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router,
              private productShareService: FirestoreService) {
  }

  ngOnInit() {
  }

  productDetails() {
    this.productShareService.productSelected = this.product;
    this.router.navigate(['/producto/', this.product.id]);
  }
}

import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../../../services/firestore.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  products: Product[] = [];

  constructor(private productSharedService: FirestoreService) {
  }

  ngOnInit() {
    this.productSharedService.getProducts().subscribe(products => this.products = products);
  }
}

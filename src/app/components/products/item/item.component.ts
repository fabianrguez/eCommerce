import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  productDetails() {
    this.router.navigate(['/producto/', this.product.id], {queryParams: this.product});
  }
}

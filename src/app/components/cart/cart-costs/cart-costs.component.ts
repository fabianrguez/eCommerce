import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-costs',
  templateUrl: './cart-costs.component.html',
  styleUrls: ['./cart-costs.component.css']
})
export class CartCostsComponent implements OnInit {

  @Input() subtotal: number;
  @Input() totalCost: number;
  @Input() transportCost: number;

  constructor() {
  }

  ngOnInit() {
  }

}

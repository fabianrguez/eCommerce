import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() inputRangeChange: EventEmitter<any> = new EventEmitter<any>();

  maxPrice: number;
  minPrice: number;

  constructor() { }

  ngOnInit() {
    this.maxPrice = 100;
    this.minPrice = 0;
  }

  _handlePriceRange(event) {
    this.minPrice = +event.target.value;
  }
}

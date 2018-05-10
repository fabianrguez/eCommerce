import {Component, OnInit} from '@angular/core';
import {ProductShareService} from '../../../services/product-share.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  products: Product[] = [];

  constructor(private productSharedService: ProductShareService) {
  }

  ngOnInit() {
    const product: Product = {
      name: 'Japan Racing',
      comments: [],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ante nisi,      ac laoreet risus consequat sed. Ut ornare et dolor nec tempor. Aenean diam diam, commodo in lorem non,volutpat      viverra ex. Praesent accumsan turpis sed varius pellentesque. Maecenas dictum libero ut velit cursus rutrum. Ut      in orci nec massa euismod lobortis vel quis diam. In hendrerit tellus mi, sed varius orci venenatis a.Nullam      accumsan mollis risus. Aliquam erat volutpat. In porta viverra nibh, vitae eleifend augue.',
      image: 'http://eurohar.es/10370-tm_large_default/japan-racing-jr22-19x85-et40-5x112-hiper-black.jpg',
      model: 'JR-22',
      price: 208,
      sales: 45
    };
    this.productSharedService.getProducts().subscribe(products => this.products = products);
    // this.productSharedService.save(product);
    // setTimeout(() => this.productSharedService.save(this.products[0]), 6000);
  }
}

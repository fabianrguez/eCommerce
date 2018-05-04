import { Injectable } from '@angular/core';

@Injectable()
export class ProductShareService {

  products: any[] = [];
  productSelected: any;

  constructor() {
    this.products.push({
      id: 1,
      name: 'Producto 1',
      price: 12,
      sales: 4,
      image: 'http://eurohar.es/10370-tm_large_default/japan-racing-jr22-19x85-et40-5x112-hiper-black.jpg'
    });
    this.products.push({
      id: 2,
      name: 'Producto 2',
      price: 52,
      sales: 1,
      image: 'http://eurohar.es/10370-tm_large_default/japan-racing-jr22-19x85-et40-5x112-hiper-black.jpg'
    });
    this.products.push({
      id: 3,
      name: 'Producto 3',
      price: 2,
      sales: 45,
      image: 'http://eurohar.es/10370-tm_large_default/japan-racing-jr22-19x85-et40-5x112-hiper-black.jpg'
    });
    this.products.push({
      id: 4,
      name: 'Producto 4',
      price: 5,
      sales: 15,
      image: 'http://eurohar.es/10370-tm_large_default/japan-racing-jr22-19x85-et40-5x112-hiper-black.jpg'
    });
  }

}

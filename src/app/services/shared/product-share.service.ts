import {Injectable} from '@angular/core';
import {Product} from '../../models/product';

@Injectable()
export class ProductShareService {

  products: Product[] = [];
  productSelected: Product;

  constructor() {
    this.products.push({
      id: 1,
      name: 'Producto 1',
      model: 'JR-22',
      price: 12,
      sales: 4,
      image: 'http://eurohar.es/10370-tm_large_default/japan-racing-jr22-19x85-et40-5x112-hiper-black.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ante nisi,
      ac laoreet risus consequat sed. Ut ornare et dolor nec tempor. Aenean diam diam, commodo in lorem non,volutpat
      viverra ex. Praesent accumsan turpis sed varius pellentesque. Maecenas dictum libero ut velit cursus rutrum. Ut
      in orci nec massa euismod lobortis vel quis diam. In hendrerit tellus mi, sed varius orci venenatis a.Nullam
      accumsan mollis risus. Aliquam erat volutpat. In porta viverra nibh, vitae eleifend augue.`,
      comments: [
        {
          username: 'Paquito',
          date: new Date(2018, 3, 29, 15, 27, 0, 0),
          message: 'Gran producto, y tal cual.',
          userPhoto: 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'
        },
        {
          username: 'Eustaquio',
          date: new Date(2018, 3, 30, 18, 44, 16, 0),
          message: 'Se sale esto ehh!',
          userPhoto: 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'
        },
        {
          username: 'Juanito',
          date: new Date(2018, 4, 8, 18, 44, 16, 0),
          message: 'Esta bomba tal!',
          userPhoto: 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'
        },
        {
          username: 'Jose Antonio',
          date: new Date(2018, 4, 9, 12, 34, 16, 0),
          message: 'Esta bomba tal!',
          userPhoto: 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'
        },
        {
          username: 'josefino',
          date: new Date(2018, 4, 9, 13, 53, 2, 0),
          message: 'Esta bomba tal!',
          userPhoto: 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'
        }
      ]
    });
    this.products.push({
      id: 2,
      name: 'Producto 2',
      model: 'JR-22',
      price: 52,
      sales: 1,
      image: 'http://eurohar.es/10370-tm_large_default/japan-racing-jr22-19x85-et40-5x112-hiper-black.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ante nisi,
      ac laoreet risus consequat sed. Ut ornare et dolor nec tempor. Aenean diam diam, commodo in lorem non,volutpat
      viverra ex. Praesent accumsan turpis sed varius pellentesque. Maecenas dictum libero ut velit cursus rutrum. Ut
      in orci nec massa euismod lobortis vel quis diam. In hendrerit tellus mi, sed varius orci venenatis a.Nullam
      accumsan mollis risus. Aliquam erat volutpat. In porta viverra nibh, vitae eleifend augue.`,
      comments: []
    });
    this.products.push({
      id: 3,
      name: 'Producto 3',
      model: 'JR-22',
      price: 2,
      sales: 45,
      image: 'http://eurohar.es/10370-tm_large_default/japan-racing-jr22-19x85-et40-5x112-hiper-black.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ante nisi,
      ac laoreet risus consequat sed. Ut ornare et dolor nec tempor. Aenean diam diam, commodo in lorem non,volutpat
      viverra ex. Praesent accumsan turpis sed varius pellentesque. Maecenas dictum libero ut velit cursus rutrum. Ut
      in orci nec massa euismod lobortis vel quis diam. In hendrerit tellus mi, sed varius orci venenatis a.Nullam
      accumsan mollis risus. Aliquam erat volutpat. In porta viverra nibh, vitae eleifend augue.`,
      comments: []
    });
    this.products.push({
      id: 4,
      name: 'Producto 4',
      model: 'JR-22',
      price: 5,
      sales: 15,
      image: 'http://eurohar.es/10370-tm_large_default/japan-racing-jr22-19x85-et40-5x112-hiper-black.jpg',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium ante nisi,
      ac laoreet risus consequat sed. Ut ornare et dolor nec tempor. Aenean diam diam, commodo in lorem non,volutpat
      viverra ex. Praesent accumsan turpis sed varius pellentesque. Maecenas dictum libero ut velit cursus rutrum. Ut
      in orci nec massa euismod lobortis vel quis diam. In hendrerit tellus mi, sed varius orci venenatis a.Nullam
      accumsan mollis risus. Aliquam erat volutpat. In porta viverra nibh, vitae eleifend augue.`,
      comments: []
    });
  }

  public getProducts() {
    return this.products;
  }

  public getProductById(id: number) {
    return this.products.find(element => element.id === id);
  }

}

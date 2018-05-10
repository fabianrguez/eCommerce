import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class ProductShareService {

  private readonly PRODUCTS_COLLECTION = 'products';

  productSelected: Product;
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private db: AngularFirestore) {
    const settings = {timestampsInSnapshots: true};
    this.db.firestore.settings(settings);
    this.initializeProductCollection();
  }

  public getProducts() {
    return this.productsCollection.valueChanges();
  }

  public save(product: Product) {
    const id = this.db.createId();
    product.id = id;
    this.productsCollection.doc(id).set(product);
  }

  public update(product: Product) {
    this.db.collection(this.PRODUCTS_COLLECTION).doc(product.id).update(product);
  }

  public getProductById(id: string) {
    return this.db.collection(this.PRODUCTS_COLLECTION, ref => ref.where('id', '==', id)).valueChanges();
  }

  private initializeProductCollection() {
    this.productsCollection = this.db.collection(this.PRODUCTS_COLLECTION);
  }

}

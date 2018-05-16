import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {User} from '../models/user';

@Injectable()
export class FirestoreService {

  private readonly PRODUCTS_COLLECTION = 'products';
  private readonly USERS_COLLECTION = 'users';

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

  public updateProduct(product: Product) {
    this.db.collection(this.PRODUCTS_COLLECTION).doc(product.id).update(product);
  }

  public getProductById(id: string) {
    return this.db.collection(this.PRODUCTS_COLLECTION, ref => ref.where('id', '==', id)).valueChanges();
  }

  private initializeProductCollection() {
    this.productsCollection = this.db.collection(this.PRODUCTS_COLLECTION);
  }

  public findUserByEmail(email: string) {
    return this.db.collection(this.USERS_COLLECTION, ref => ref.where('email', '==', email)).valueChanges();
  }

  public async updateUser(user: User): Promise<any> {
    console.log(user);
    return await this.db.collection(this.USERS_COLLECTION).doc(user.id).update(user);
  }

}

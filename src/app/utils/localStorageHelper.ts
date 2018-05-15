import {StorageTypes} from '../models/storage-types.enum';

export class LocalStorageHelper {

  public static store(key: StorageTypes, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public static removeItem(key: StorageTypes) {
    localStorage.removeItem(key);
  }

  public static getItem(key: StorageTypes) {
    return JSON.parse(localStorage.getItem(key));
  }

  public static clear() {
    localStorage.clear();
  }
}

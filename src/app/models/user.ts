import {Billing} from './billing';
import {ShippingAddress} from './shipping-address';

export interface User {
  id?: string;
  name?: string;
  lastName?: string;
  address?: string;
  email?: string;
  image?: string;
  mobilePhone?: string;
  location?: string;
  postalCode?: string;
  billing?: Billing;
  shippingAddress: ShippingAddress;
}

import {Comment} from './comment';

export interface Product {
  id?: string;
  name?: string;
  model?: string;
  price?: number;
  sales?: number;
  image?: string;
  description?: string;
  comments?: Comment[];
}

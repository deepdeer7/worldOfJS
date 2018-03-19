import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { PRODUCTS } from './products.mock';

import 'rxjs/add/observable/of';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
  	return Observable.of(PRODUCTS);
  }

  deleteProduct(product: Product) {
  	return Observable.of(PRODUCTS)
  	  .subscribe(products => {
  	  	const indexOfProduct = products.indexOf(product);
  	  	products.splice(indexOfProduct, 1);
  	  	console.log(products);
  	  })
  }

}

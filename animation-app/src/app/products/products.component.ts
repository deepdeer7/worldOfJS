import { Component, OnInit } from '@angular/core';
import { ProductsService } from './service/products.service';
import { Product } from './service/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
  	this.productService.getProducts()
  		.subscribe(
  			(data) => {
  				this.products = data;
  			}
  		)
    }

    public deleteProduct(product: Product) {
    	this.productService.deleteProduct(product);
    }
}

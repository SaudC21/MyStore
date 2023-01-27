import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() { }

  addToCart(newProduct: Product) {
    this.products.push(newProduct);
    alert(`${newProduct.name} Added to cart!`);
    return this.products;
  }

  getCart() {
    return this.products;
  }

  removeItem(index: number) {

  }

  
}

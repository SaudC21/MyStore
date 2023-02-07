import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor() { }

  addToCart(newProduct: Product) {
    // Check if product already exists in cart
    for(let i = 0; i < this.products.length; i++){
      // If product already exists in cart, add amount to existing product
      if(newProduct.id == this.products[i].id){
        this.products[i].amount += newProduct.amount;
        alert(`${newProduct.name} Added to cart!`);
        return this.products;
      }
    }
    this.products.push(newProduct);
    alert(`${newProduct.name} Added to cart!`);
    return this.products;
  }

  getCart() {
    return this.products;
  }

  removeItem(rmProduct: Product) {
    this.products = this.products.filter(product => product !== rmProduct);
    return this.products;
  }

  clearCart() {
    this.products = [];
  }
}

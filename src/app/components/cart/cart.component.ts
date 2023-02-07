import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  // TODO: 2- Form validation (With Alert)
  // TODO: 3- Confirmation page after checkout

  cart: Product[] = [];
  totalPrice: number = 0;
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  onSubmit() {

  }

  calculateTotal() {
    this.total = 0;
    this.cart.forEach(product => {
      this.total += product.price * product.amount;
    });
    this.total = parseFloat(this.total.toFixed(2));
  }

  checkout() {
    this.cartService.clearCart();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  amountChanged(updatedValue: any, product: Product) {
    if (updatedValue == 0) {
      this.cart = this.cartService.removeItem(product);
    }
    product.amount = updatedValue;
    this.calculateTotal();
  }
}

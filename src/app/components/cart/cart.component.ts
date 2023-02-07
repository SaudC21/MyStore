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
  name: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = 0;
    this.cart.forEach(product => {
      this.total += product.price * product.amount;
    });
    this.total = parseFloat(this.total.toFixed(2));
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  amountChanged(updatedValue: any, product: Product): void {
    if (updatedValue == 0) {
      this.cart = this.cartService.removeItem(product);
    }
    product.amount = updatedValue;
    this.calculateTotal();
  }

  onSubmit(): void {
    console.log('Name: ' + this.name);
    console.log('Address: ' + this.address);
    console.log('Credit Card: ' + this.creditCard);
    this.cartService.addUserOrder(this.name, this.total);
    alert('Thank you for your order!');
  }

  checkout(): void {
    this.cartService.clearCart();
  }
}

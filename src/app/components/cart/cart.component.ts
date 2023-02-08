import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

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
      alert('Item removed from cart!');
    }
    product.amount = updatedValue;
    this.calculateTotal();
  }

  onSubmit(): void {
    this.cartService.addUserOrder(this.name, this.total);
    alert('Thank you for your order!');
  }

  checkout(): void {
    this.cartService.clearCart();
  }
}

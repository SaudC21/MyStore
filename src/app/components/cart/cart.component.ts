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
  total: string = '';
  count: number[] = [];
  name: string = '';
  address: string = '';
  ccNumber: string = '';

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.count = this.count = [0,1,2,3,4,5,6,7,8,9,10];
  }


}

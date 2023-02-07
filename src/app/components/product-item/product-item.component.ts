import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product = new Product();
  amount: number = 1;
  
  constructor(
    private cartService: CartService
  ) { }
  
  ngOnInit(): void {
    
  }

  addToCart(product: Product) {
    product.amount = parseInt(this.amount as unknown as string);
    this.cartService.addToCart(product);
  }
}

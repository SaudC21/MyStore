import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
  product: Product = new Product();
  amount: number = 1;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.product = this.productService.getProduct(params['id']);
    });
  }

  addToCart(product: Product) {
    this.product.amount = parseInt(this.amount as unknown as string);
    this.cartService.addToCart(product);
  }
}

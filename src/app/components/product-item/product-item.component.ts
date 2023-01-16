import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  products: product[] = [];
  
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}

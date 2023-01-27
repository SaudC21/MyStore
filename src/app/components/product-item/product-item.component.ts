import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product = new Product();
  
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    let products = this.http.get<Product[]>('../assets/data.json');
    products.subscribe(data => {
      this.products = data;
    });
    return products;
  }

  getProduct(id: number): Product {
    return this.products.find(product => product.id == id) as Product;
  }
}

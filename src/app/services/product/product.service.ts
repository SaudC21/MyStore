import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>('../assets/data.json');
  }
}

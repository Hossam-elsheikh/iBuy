import { Injectable, OnInit } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductsService{
  productsList: Iproduct[] = [];
  constructor(private httpClient: HttpClient) {
    
  }
  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.BaseApiURL}/products`
    );
  }

  getAllCategories(): Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(
      `${environment.BaseApiURL}/categories`
    );
  }
  getProductById(id: string|null|number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(`${environment.BaseApiURL}/products/${id}`);
  }
  

  getProductDetails(productID: number): Iproduct | undefined {
    return this.productsList.find((p) => p.id === productID);
  }

}

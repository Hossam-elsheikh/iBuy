import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpheader: {}
  constructor(private httpClient : HttpClient){
    this.httpheader =  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  addProduct(prd:Iproduct):Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.BaseApiURL}/products`, JSON.stringify(prd),this.httpheader)
  }
  editProduct(product: Iproduct):Observable<Iproduct>{
    return this.httpClient.patch<Iproduct>(`${environment.BaseApiURL}/products/${product.id}`, JSON.stringify(product),this.httpheader)
  }
  deleteProduct(id:number):Observable<number>{
    let confirm = window.confirm('Are you sure you want to delete this product')
    if(confirm) {return this.httpClient.delete<number>(`${environment.BaseApiURL}/products/${id}`)}
    else{
      return new Observable<number>
    }

  }
}

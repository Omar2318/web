import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CartInterface, ProductFake } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  private _http = inject(HttpClient);

  constructor() { }

  getProducts(){
    return this._http.get<ProductFake[]>('https://fakestoreapi.com/products')
  }

  getProduct(id: string){
    return this._http.get<ProductFake>(`https://fakestoreapi.com/products/${id}`)
  }

  getCarts(){
    return this._http.get<CartInterface[]>('https://fakestoreapi.com/carts');
  }

}

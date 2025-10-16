import { Component, inject } from '@angular/core';
import { FakeStoreService } from '../../services/fakeStore.service';
import { CartInterface } from '../../app.interface';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  private _storeService = inject(FakeStoreService);
  constructor(){

    this._storeService.getCarts().subscribe({
      next: (data)=>{
        this.carts = data
        console.log(this.carts)
      },
      error: console.error
    });
  }

  carts: CartInterface[] = [];
  
}

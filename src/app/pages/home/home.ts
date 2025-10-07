import { Component, inject } from '@angular/core';
import { CardProductComponent } from '../../components/card_product/card_product.component';
import { Product, ProductFake } from '../../app.interface';
import { FakeStoreService } from '../../services/fakeStore.service';

@Component({
  selector: 'app-home',
  imports: [CardProductComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private _storeService = inject(FakeStoreService);
  constructor(){
    this._storeService.getProducts().subscribe({
      next: (data)=>{
        this.products = data
      },
      error: console.error
    });
  }
  products: ProductFake[] = [];

}

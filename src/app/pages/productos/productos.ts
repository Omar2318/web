import { Component, inject } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { ProductFake } from '../../app.interface';
import { CardProductComponent } from '../../components/card_product/card_product.component';

@Component({
  selector: 'app-productos',
  imports: [CardProductComponent],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  misFavortos: ProductFake[] = [];
  private _productS = inject(FavoritesService);

  constructor(){
    this.misFavortos = this._productS.getFavorites();
    console.log(this.misFavortos)
  }
}

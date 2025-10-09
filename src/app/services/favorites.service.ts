import { Injectable } from '@angular/core';
import { ProductFake } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: ProductFake[] = [];

  constructor() {
    this.getFavorites();
  }

  getFavorites(){
    return this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  saveInFavorites(producto: ProductFake){
    const localFavorites: ProductFake[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    const encontrado = localFavorites.find(local => local.id === producto.id);
    if(encontrado){
      this.favorites = this.favorites.filter(favorite => favorite.id !== producto.id);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      return;
    }
    this.favorites.push(producto);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}

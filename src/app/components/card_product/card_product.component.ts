import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Product, ProductFake } from '../../app.interface';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card-product',
  imports: [CurrencyPipe],
  template: `<div class="card shadow rounded">
                <img class="card-img-top"
                    (click)="goToDetail(product.id)"
                    src= {{product.image}}
                    alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">{{product.title}}</h4>
                  
                    <h5>{{product.price | currency}}</h5>
                    <button type="button" class="btn btn-success">
                        <i class="bi bi-cart"></i>
                    </button>
                        
                    <button (click)="toFavorite(product)" type="button" class="btn btn-danger ms-2">
                        <i class="bi bi-heart-fill"></i>
                    </button>

                </div>
            </div>`,
  styles: `
    :host {
      display: block;
    }
    img{
      cursor: pointer;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductComponent {
  @Input({ required: true })
  product!: ProductFake;
  private _router = inject(Router);
  private _favoritesS = inject(FavoritesService);

  goToDetail(id: number){
    console.log('ir a detalles');
    this._router.navigateByUrl('products/'+id);
  }

  toFavorite(product: ProductFake){
    this._favoritesS.saveInFavorites(product);
     Swal.fire({
      text: 'Añadido a favoritos',
      icon: 'success',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1300
     });
  }
} 

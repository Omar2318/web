import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Product, ProductFake } from '../../app.interface';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

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
                        
                    <button type="button" class="btn btn-danger ms-2">
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
  
  goToDetail(id: number){
    console.log('ir a detalles');
    this._router.navigateByUrl('products/'+id);
  }
} 

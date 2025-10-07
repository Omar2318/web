import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreService } from '../../services/fakeStore.service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  template: `<p>product_detail works!</p>`,
  styleUrl: './product_detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {

  private _activeRoute = inject(ActivatedRoute);
  private _apiService = inject(FakeStoreService);

  constructor(){
    this._activeRoute.params.subscribe({
      next: (params)=> {
        const {id} = params;
        this.getProduct(id);
      },
      error: (error) => console.log(error)
    })

  }

  getProduct(id: string){
    this._apiService.getProduct(id).subscribe({
      next: (miProducto) => {
        console.log(miProducto)
      },
      error: console.log
    });
  }
}

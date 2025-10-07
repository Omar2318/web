import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreService } from '../../services/fakeStore.service';
import { ProductFake } from '../../app.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './product_detail.component.html',
  styleUrls: ['./product_detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {
  private _activeRoute = inject(ActivatedRoute);
  private _apiService = inject(FakeStoreService);

  producto!: ProductFake;

  constructor() {
    this._activeRoute.params.subscribe({
      next: (params) => {
        const { id } = params;
        this.getProduct(id);
      },
      error: (error) => console.error(error),
    });
  }

  getProduct(id: string) {
    this._apiService.getProduct(id).subscribe({
      next: (miProducto) => {
        this.producto = miProducto;
        console.log('Producto cargado:', this.producto);
      },
      error: (error) => console.error('Error al obtener producto:', error),
    });
  }
}

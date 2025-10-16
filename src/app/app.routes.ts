import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Acercade } from './pages/acercade/acercade';
import { Productos } from './pages/productos/productos';
import { ProductDetailComponent } from './pages/product_detail/product_detail.component';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'acercade',
        component: Acercade
    },
    {
        path: 'productos',
        component: Productos
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent,
    },
    {
        path: 'cart',
        component: Cart,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];


//path, component
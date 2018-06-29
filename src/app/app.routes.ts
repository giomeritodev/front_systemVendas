import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'categorias',
        component: CategoriaComponent
    }
]
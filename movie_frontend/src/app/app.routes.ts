import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AddMovieComponent } from './products/add-movie/add-movie.component';
import { UpdateMovieComponent } from './products/update-movie/update-movie.component';
import { CategoriesComponent } from './categories/categories.component';
import { UpdateCategoryComponent } from './categories/update-category/update-category.component';
import { DeleteCategoryComponent } from './categories/delete-category/delete-category.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"movies",
        component:ProductsComponent
    },
    {
        path:"movies/details/:id",
        component:ProductDetailsComponent
    },
    {
path:"add",
component:AddMovieComponent
    },
    {
        path:"movies/details/:id/update/:id",
        component:UpdateMovieComponent
    },
    {
        path:"categories",
        component:CategoriesComponent
    },
    {
path:"categories/update/:id",
component:UpdateCategoryComponent
    },
    {
path:"categories/delete/:id",
component:DeleteCategoryComponent
    },
    {
        path:"categories/add",
        component:AddCategoryComponent
    }
]


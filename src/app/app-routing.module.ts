import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/category-list/category-list.module').then( m => m.CategoryListPageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./pages/category-page/category-page.module').then( m => m.CategoryPagePageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/product-page/product-page.module').then( m => m.ProductPagePageModule)
  },
  {
    path: 'product-reviews',
    loadChildren: () => import('./pages/product-reviews/product-reviews.module').then( m => m.ProductReviewsPageModule)
  },
  {
    path: 'product-ymal',
    loadChildren: () => import('./pages/product-ymal/product-ymal.module').then( m => m.ProductYmalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

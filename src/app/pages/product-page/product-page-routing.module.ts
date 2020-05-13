import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPagePage } from './product-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPagePage,
    children: [
      {
        path: '',
        children: [
          {
            path: 'detail',
            loadChildren: () =>
              import('../product-information/product-information.module').then(m => m.ProductInformationPageModule)
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path: 'reviews',
            loadChildren: () =>
              import('../product-reviews/product-reviews.module').then(m => m.ProductReviewsPageModule)
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path: 'ymal',
            loadChildren: () =>
              import('../product-ymal/product-ymal.module').then(m => m.ProductYmalPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/detail',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPagePageRoutingModule {}

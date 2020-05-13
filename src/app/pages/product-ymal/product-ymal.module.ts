import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductYmalPageRoutingModule } from './product-ymal-routing.module';

import { ProductYmalPage } from './product-ymal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductYmalPageRoutingModule
  ],
  declarations: [ProductYmalPage]
})
export class ProductYmalPageModule {}

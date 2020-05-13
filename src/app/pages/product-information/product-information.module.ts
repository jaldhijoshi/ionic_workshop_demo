import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductInformationPageRoutingModule } from './product-information-routing.module';

import { ProductInformationPage } from './product-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductInformationPageRoutingModule
  ],
  declarations: [ProductInformationPage]
})
export class ProductInformationPageModule {}

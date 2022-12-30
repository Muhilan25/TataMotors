import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CarsbrandComponent } from './carsbrand/carsbrand.component';
import { BusesbrandComponent } from './busesbrand/busesbrand.component';
import { TrucksbrandComponent } from './trucksbrand/trucksbrand.component';
import { DefencevehiclesComponent } from './defencevehicles/defencevehicles.component';


@NgModule({
  declarations: [
    CarsbrandComponent,
    BusesbrandComponent,
    TrucksbrandComponent,
    DefencevehiclesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

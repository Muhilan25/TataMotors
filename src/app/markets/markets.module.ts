import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketsRoutingModule } from './markets-routing.module';
import { ProductsComponent } from './products/products.component';
import { InvestorsComponent } from './investors/investors.component';
import { MarketsComponent } from './markets/markets.component';
import { CareersComponent } from './careers/careers.component';


@NgModule({
  declarations: [
    ProductsComponent,
    InvestorsComponent,
    MarketsComponent,
    CareersComponent
  ],
  imports: [
    CommonModule,
    MarketsRoutingModule
  ]
})
export class MarketsModule { }

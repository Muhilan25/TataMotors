import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestersRoutingModule } from './investers-routing.module';
import { FinancialFilingComponent } from './financial-filing/financial-filing.component';
import { InvestorResourceComponent } from './investor-resource/investor-resource.component';
import { FixedIncomeComponent } from './fixed-income/fixed-income.component';
import { ShareholderInformationComponent } from './shareholder-information/shareholder-information.component';
import { InvestorIncomeComponent } from './investor-income/investor-income.component';


@NgModule({
  declarations: [
    FinancialFilingComponent,
    InvestorResourceComponent,
    FixedIncomeComponent,
    ShareholderInformationComponent,
    InvestorIncomeComponent
  ],
  imports: [
    CommonModule,
    InvestersRoutingModule
  ]
})
export class InvestersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsrRoutingModule } from './csr-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { OurProgramsComponent } from './our-programs/our-programs.component';
import { CsrPolicyComponent } from './csr-policy/csr-policy.component';
import { SmdfPolicyReportComponent } from './smdf-policy-report/smdf-policy-report.component';
import { ArchiveComponent } from './archive/archive.component';


@NgModule({
  declarations: [
    OverviewComponent,
    OurProgramsComponent,
    CsrPolicyComponent,
    SmdfPolicyReportComponent,
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    CsrRoutingModule
  ]
})
export class CsrModule { }

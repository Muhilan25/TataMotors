import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { InnovationComponent } from './innovation/innovation.component';
import { ProfileComponent } from './profile/profile.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { AwardsComponent } from './awards/awards.component';
import { SubsidariesComponent } from './subsidaries/subsidaries.component';


@NgModule({
  declarations: [
    InnovationComponent,
    ProfileComponent,
    LeadershipComponent,
    FacilitiesComponent,
    AwardsComponent,
    SubsidariesComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }

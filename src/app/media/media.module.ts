import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { PressReleasesComponent } from './press-releases/press-releases.component';
import { MediaCoverageComponent } from './media-coverage/media-coverage.component';
import { ProductStoriesComponent } from './product-stories/product-stories.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MediaContactComponent } from './media-contact/media-contact.component';


@NgModule({
  declarations: [
    PressReleasesComponent,
    MediaCoverageComponent,
    ProductStoriesComponent,
    GalleryComponent,
    MediaContactComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }

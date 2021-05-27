import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './photos-list.component';
import { PhotosCardModule } from './../../card/photos-card/photos-card.module';
import { PhotosListRoutingModule } from './photos-list-routing.module';
import { ContainerModule } from './../../../../shared/components/container/container/container.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    PhotosListComponent
  ],
  imports: [
    CommonModule,
    PhotosListRoutingModule,
    ContainerModule,
    MatProgressSpinnerModule,
    PhotosCardModule
  ]
})
export class PhotosListModule { }

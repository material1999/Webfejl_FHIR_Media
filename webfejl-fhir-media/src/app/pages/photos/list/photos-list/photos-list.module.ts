import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './photos-list.component';
import { PhotosListRoutingModule } from './photos-list-routing.module';



@NgModule({
  declarations: [
    PhotosListComponent
  ],
  imports: [
    CommonModule,
    PhotosListRoutingModule
  ]
})
export class PhotosListModule { }

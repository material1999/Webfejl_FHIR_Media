import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosListComponent } from './videos-list.component';
import { VideosListRoutingModule } from './video-list-routing.module';



@NgModule({
  declarations: [
    VideosListComponent
  ],
  imports: [
    CommonModule,
    VideosListRoutingModule
  ]
})
export class VideosListModule { }

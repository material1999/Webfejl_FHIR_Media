import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosListComponent } from './videos-list.component';
import { VideosCardModule } from './../../card/videos-card/videos-card.module';
import { VideosListRoutingModule } from './video-list-routing.module';
import { ContainerModule } from './../../../../shared/components/container/container/container.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VideoModule } from 'src/app/shared/pipes/video/video.module';

@NgModule({
  declarations: [
    VideosListComponent
  ],
  imports: [
    CommonModule,
    VideosListRoutingModule,
    ContainerModule,
    MatProgressSpinnerModule,
    VideosCardModule,
    VideoModule
  ]
})
export class VideosListModule { }

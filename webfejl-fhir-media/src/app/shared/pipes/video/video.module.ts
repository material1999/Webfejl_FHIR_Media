import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPipe } from './video.pipe';



@NgModule({
  declarations: [
    VideoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [VideoPipe]
})
export class VideoModule { }

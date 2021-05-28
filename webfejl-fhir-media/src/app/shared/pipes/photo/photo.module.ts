import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPipe } from './photo.pipe';



@NgModule({
  declarations: [
    PhotoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PhotoPipe]
})
export class PhotoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPipe } from './audio.pipe';



@NgModule({
  declarations: [
    AudioPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [AudioPipe]
})
export class AudioModule { }

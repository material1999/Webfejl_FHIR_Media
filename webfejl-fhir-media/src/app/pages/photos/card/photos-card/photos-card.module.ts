import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosCardComponent } from './photos-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    PhotosCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatIconModule, MatCardModule
  ],
  exports: [PhotosCardComponent]
})
export class PhotosCardModule { }

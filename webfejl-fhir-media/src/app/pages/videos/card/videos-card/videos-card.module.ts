import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosCardComponent } from './videos-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [VideosCardComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  exports: [VideosCardComponent],
})
export class VideosCardModule {}

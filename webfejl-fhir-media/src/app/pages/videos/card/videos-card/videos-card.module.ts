import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosCardComponent } from './videos-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';

@NgModule({
  declarations: [VideosCardComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, OnHoverModule],
  exports: [VideosCardComponent],
})
export class VideosCardModule {}

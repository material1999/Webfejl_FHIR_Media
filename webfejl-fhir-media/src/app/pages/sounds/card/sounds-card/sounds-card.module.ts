import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundsCardComponent } from './sounds-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';

@NgModule({
  declarations: [SoundsCardComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, OnHoverModule],
  exports: [SoundsCardComponent],
})
export class SoundsCardModule {}

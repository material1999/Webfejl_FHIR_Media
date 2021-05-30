import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundsListComponent } from './sounds-list.component';
import { SoundsCardModule } from './../../card/sounds-card/sounds-card.module';
import { SoundsListRoutingModule } from './sounds-list-routing.module';
import { ContainerModule } from './../../../../shared/components/container/container/container.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AudioModule } from 'src/app/shared/pipes/audio/audio.module';

@NgModule({
  declarations: [
    SoundsListComponent
  ],
  imports: [
    CommonModule,
    SoundsListRoutingModule,
    ContainerModule,
    MatProgressSpinnerModule,
    SoundsCardModule,
    AudioModule
  ]
})
export class SoundsListModule { }
